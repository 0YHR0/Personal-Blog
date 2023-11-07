---
title: Ch01 Backup
date: 2023-08-01
tags:
 - OpenStack
 - Cloud
categories:
 - OpenStack
---

# Openstack backup(Two ways)



| Role   | HostName  | IP              | MariaDB-Username | MariaDB-Password |
| ------ | --------- | --------------- | ---------------- | ---------------- |
| Master | astplsm01 | 192.168.209.143 | mariabackup      | passw0rd         |
| Worker | asflex5   | 192.168.209.135 |                  |                  |



### TODO

- [ ] Test recovery our test env



## Backup remotely



### Step1. create a role on master node to do the backup

run after login to the DB

```mysql
# give all privileges to the user: mariabackup, and enable it login from everywhere
grant all privileges on *.* to 'mariabackup'@'%' identified by 'passw0rd' with grant option;

# flush
flush privileges;
```



### Step2. On asflex5, create the backup dir

```sh
cd /var/backup

# create the backup dir
sudo mkdir openstack-mariadb-backup

# give all the permissions to all user
sudo chmod 777 openstack-mariadb-backup/
```



### Step3. Create the script for the mariadb backup

name it as: asflex5-DB-backup.sh

```sh
#!/bin/bash
backup_dir="/var/backups/openstack-mariadb-backup"

# mysql backup
mysql_filename="${backup_dir}/mysql-`hostname`-`eval date +%Y%m%d`.sql.gz"

/usr/bin/mysqldump -P 3306  -h 192.168.209.143 -u mariabackup -ppassw0rd --opt --all-databases | gzip > $mysql_filename

# remove the file older then a week in the backup dir
find "$backup_dir" -type f -mtime +7 -exec rm {} \;
```



### Step4. Create a crontab to do the backup regularly(Everyday)

```sh
# give the execution permission to the script
sudo chmod +x asflex5-DB-backup.sh

# Create or Edit Cron Jobs, This will open the user's crontab file in the default text editor.
crontab -e

# In the crontab file, add a new line to schedule your script.
# The general format of a cron job line is:
# * * * * * /path/to/your/script
# minutes, hours, days, months, and days of the week
# I do the backup every day at 20:30
30 20 * * * /home/ubuntu/asflex5-DB-backup.sh


# After adding your cron job, save the file and exit the text editor.
# You can verify that your cron job has been added by listing the user's current cron jobs
crontab -l
```



## Backup locally on asflex 5 using the master-replica way

see [ch02](Ch02_Localbackup_MariaDB.md)





# Config File backup

ca. 1.3M

### Step0：SSH Copy ID for Copying SSH Keys to Servers

#### On master machine: Asflex1

```sh
# create the user for the backup(passwd: passw0rd)
sudo adduser mariabackup
sudo usermod -aG sudo newusername
sudo vim /etc/ssh/sshd_config
# PasswordAuthentication yes

```



ref: https://www.ssh.com/academy/ssh/copy-id

```sh
# ssh-copy-id installs an SSH key on a server as an authorized key. Its purpose is to provide access without requiring a password for each login. This facilitates automated, passwordless logins and single sign-on using the SSH protocol.

# generate the key pair
$ ssh-keygen
# stored in ~/.ssh/id_rsa

# Once an SSH key has been created, the ssh-copy-id command can be used to install it as an authorized key on the server. Once the key has been authorized for SSH, it grants access to the server without a password.
$ ssh-copy-id -i ~/.ssh/id_rsa.pub mariabackup@129.69.209.127

```





### Step1. Add group on master(asflex1)

```sh
sudo usermod -aG nova mariabackup
sudo usermod -aG neutron mariabackup
sudo usermod -aG keystone mariabackup
sudo usermod -aG placement mariabackup
sudo usermod -aG glance mariabackup
sudo usermod -aG cinder mariabackup
sudo usermod -aG ceilometer mariabackup

sudo chmod +r -R /etc/keystone/credential-keys
sudo chmod +r -R /etc/keystone/fernet-keys
```



### Step2. Create the dir to store the backups

```sh
sudo mkdir /var/backups/openstack-config-backup
sudo chmod 777 /var/backups/openstack-config-backup
```





### Step3. Create the script for the backup

```sh
#!/bin/bash

remote_user="mariabackup"
remote_host="129.69.209.127"
local_dir="/var/backups/openstack-config-backup"
# remote_dir="/home/mariabackup"

remote_dir="/home/mariabackup/backupConfigFiles"
# local_file="files_to_transfer.tar.gz"

# file system backup
fs_filename="fs-`hostname`-`eval date +%Y%m%d`.tar.gz"


# Zip files on remote machine
ssh "$remote_user"@"$remote_host" "tar czvf - --exclude=/var/lib/nova/instances  --exclude=/var/lib/glance/images /etc/nova /etc/neutron /etc/network/interfaces /etc/hosts /etc/mysql/mariadb.conf.d/99-openstack.cnf /etc/default/etcd /etc/keystone /var/lib/keystone /etc/apache2/apache2.conf /etc/placement/placement.conf /etc/glance /var/lib/glance /etc/cinder /var/lib/cinder /var/lib/neutron /etc/swift /etc/ceilometer /etc/heat /etc/apache2/sites-available/horizon.conf" > $local_dir/$fs_filename

find "$local_dir" -type f -mtime +7 -exec rm {} \;

```

+ **/etc/nova** :  Configuration files for the Nova service, which is responsible for managing and orchestrating compute resources, including virtual machine instances, in an OpenStack cloud environment.

+ **/etc/neutron**: Configuration files for the Neutron service, which is responsible for managing networking and connectivity aspects of the OpenStack cloud environment

+ **/var/lib/nova**: Store various data and state information related to virtual machine instances and other operational aspects of the compute service. It's a critical directory that contains important data that the Nova service needs to manage instances, store instance disk images, and maintain state information. (Seems not needed)

+ **/etc/network/interfaces**: Used to configure network interfaces, IP addresses, and network-related parameters on your system. It's an important configuration file for managing network interfaces and connections, especially in versions of Ubuntu prior to Ubuntu 18.04, where the networking was managed using the traditional ifupdown system.

+ **/etc/hosts**: Map hostnames to IP addresses locally on the system

+ **/etc/mysql/mariadb.conf.d/99-openstack.cnf**: This file contains configuration options that are tailored to the requirements of OpenStack services using the MariaDB database backend.

+ **/etc/default/etcd**: Might be used in openstack.

+ **/etc/keystone**: Part of the configuration structure for the Keystone service in an OpenStack environment. Keystone is the identity service in OpenStack, responsible for authentication, authorization, and service catalog management. It provides user management, token-based authentication, and access control across all OpenStack services.

+  **/var/lib/keystone**: The `/var/lib/keystone` directory is where Keystone stores its internal databases, cache, and other runtime data.

+ **/etc/apache2/apache2.conf**: In an OpenStack deployment, the `/etc/apache2/apache2.conf` file might play a role in configuring the Apache HTTP Server for various services and components within the OpenStack ecosystem

+ **/etc/glance/glance-api.conf**: A configuration file specific to the Glance API service in an OpenStack environment. Glance is the OpenStack service responsible for managing and storing virtual machine images used to create instances within an OpenStack cloud.

  The `glance-api.conf` file contains configuration options that determine how the Glance API service behaves, how it interacts with other services, and how it manages image data. 

+ **/etc/placement/placement.conf**: A configuration file specific to the Placement service in an OpenStack environment. The Placement service is responsible for managing resource inventories and allocations in an OpenStack cloud. 

+ **/etc/glance**: Configuration files for the Glance service are typically located in an OpenStack environment. Glance is the OpenStack service responsible for managing and storing virtual machine images, including operating system images and snapshots.

+ **/var/lib/glance**: Inside the `/var/lib/glance` directory, you'll find different subdirectories and files that correspond to the data managed by the Glance service

+ **/etc/cinder**: The `/etc/cinder` directory is where configuration files for the Cinder service are typically located in an OpenStack environment. Cinder is the OpenStack service responsible for managing and providing block storage resources to instances within an OpenStack cloud.

+ **/var/lib/cinder**: The `/var/lib/cinder` directory is used by the Cinder service in OpenStack to store various data and state information required for its operation.

+ **/var/lib/neutron**: The `/var/lib/neutron` directory is used by the Neutron service in OpenStack to store various data and state information required for its operation.

+ **/etc/swift**: The `/etc/swift` directory is where configuration files for the Swift service are typically located in an OpenStack environment. Inside the `/etc/swift` directory, you'll find configuration files that determine how the Swift service operates, how it interacts with other OpenStack services, and how it manages object storage data.

+ **/etc/ceilometer**: The `/etc/ceilometer` directory is where configuration files for the Ceilometer service are located in an OpenStack environment. Ceilometer is the OpenStack Telemetry service that collects data related to the usage and performance of resources and services across an OpenStack cloud.

+ **/etc/heat**: The `/etc/heat` directory is where configuration files for the Heat service are located in an OpenStack environment. Heat is the OpenStack Orchestration service that allows you to define and manage infrastructure as code using templates. These templates can describe the architecture of your cloud application, including resources such as instances, networks, storage, and more.

+ **/etc/apache2/sites-available/horizon.conf**: The `/etc/apache2/sites-available/horizon.conf` file is a configuration file for the Apache web server that's specific to the Horizon dashboard in an OpenStack environment.

  

give execution right:

```sh
sudo chmod +x backup-config-without-passwd.sh
```



### Step4. Create crontab for the backup script

```sh
# Create or Edit Cron Jobs, This will open the user's crontab file in the default text editor.
crontab -e

# In the crontab file, add a new line to schedule your script.
# The general format of a cron job line is:
# * * * * * /path/to/your/script
# minutes, hours, days, months, and days of the week
# I do the backup every day at 20:30
40 20 * * * /home/ubuntu/backup-config-without-passwd.sh


# After adding your cron job, save the file and exit the text editor.
# You can verify that your cron job has been added by listing the user's current cron jobs
crontab -l
```



