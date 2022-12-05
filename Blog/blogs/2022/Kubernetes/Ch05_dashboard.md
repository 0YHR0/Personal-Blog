---
title: Ch05 K8s deploy dashboard
date: 2022-04-25
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes
---

# 安装部署dashboard

### 1.查看pod运行情况

```sh
[root@binghe101 ~]# kubectl get pods -A  -o wide
NAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE    IP                NODE        NOMINATED NODE   READINESS GATES
kube-system   calico-kube-controllers-5b8b769fcd-l2tmm   1/1     Running   2          15h    172.18.203.71     binghe101   <none>           <none>
kube-system   calico-node-7b7fx                          1/1     Running   2          15h    192.168.175.102   binghe102   <none>           <none>
kube-system   calico-node-8krsl                          1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   coredns-546565776c-rd2zr                   1/1     Running   2          15h    172.18.203.72     binghe101   <none>           <none>
kube-system   coredns-546565776c-x8r7l                   1/1     Running   2          15h    172.18.203.73     binghe101   <none>           <none>
kube-system   etcd-binghe101                             1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   kube-apiserver-binghe101                   1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   kube-controller-manager-binghe101          1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   kube-proxy-cgq5n                           1/1     Running   2          15h    192.168.175.102   binghe102   <none>           <none>
kube-system   kube-proxy-qnffb                           1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   kube-scheduler-binghe101                   1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system   metrics-server-57bc7f4584-cwsn8            1/1     Running   0          109m   172.18.229.68     binghe102   <none>           <none>
```



### 2.下载recommended.yaml文件

```sh
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
```



### 3.修改recommended.yaml文件

```sh
vim recommended.yaml
```

需要修改的内容如下所示

```yaml
---
kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  type: NodePort #增加
  ports:
    - port: 443
      targetPort: 8443
      nodePort: 30000 #增加
  selector:
    k8s-app: kubernetes-dashboard
---
#因为自动生成的证书很多浏览器无法使用，所以我们自己创建，注释掉kubernetes-dashboard-certs对象声明
#apiVersion: v1
#kind: Secret
#metadata:
#  labels:
#    k8s-app: kubernetes-dashboard
#  name: kubernetes-dashboard-certs
#  namespace: kubernetes-dashboard
#type: Opaque
---
```



### 4.创建证书

```sh
mkdir dashboard-certs

cd dashboard-certs/

#创建命名空间
kubectl create namespace kubernetes-dashboard

# 创建key文件
openssl genrsa -out dashboard.key 2048

#证书请求
openssl req -days 36000 -new -out dashboard.csr -key dashboard.key -subj '/CN=dashboard-cert'

#自签证书
openssl x509 -req -in dashboard.csr -signkey dashboard.key -out dashboard.crt

#创建kubernetes-dashboard-certs对象
kubectl create secret generic kubernetes-dashboard-certs --from-file=dashboard.key --from-file=dashboard.crt -n kubernetes-dashboard

```



### 5.安装dashboard

```sh
kubectl create -f ~/recommended.yaml 
```

注意：这里可能会报如下所示:

```sh
Error from server (AlreadyExists): error when creating "./recommended.yaml": namespaces "kubernetes-dashboard" already exists
```

这是因为我们在创建证书时，已经创建了kubernetes-dashboard命名空间，所以，直接忽略此错误信息即可。



### 6.查看安装结果

```sh
[root@binghe101 ~]# kubectl get pods -A  -o wide
NAMESPACE              NAME                                         READY   STATUS    RESTARTS   AGE    IP                NODE        NOMINATED NODE   READINESS GATES
kube-system            calico-kube-controllers-5b8b769fcd-l2tmm     1/1     Running   2          15h    172.18.203.71     binghe101   <none>           <none>
kube-system            calico-node-7b7fx                            1/1     Running   2          15h    192.168.175.102   binghe102   <none>           <none>
kube-system            calico-node-8krsl                            1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            coredns-546565776c-rd2zr                     1/1     Running   2          15h    172.18.203.72     binghe101   <none>           <none>
kube-system            coredns-546565776c-x8r7l                     1/1     Running   2          15h    172.18.203.73     binghe101   <none>           <none>
kube-system            etcd-binghe101                               1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            kube-apiserver-binghe101                     1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            kube-controller-manager-binghe101            1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            kube-proxy-cgq5n                             1/1     Running   2          15h    192.168.175.102   binghe102   <none>           <none>
kube-system            kube-proxy-qnffb                             1/1     Running   2          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            kube-scheduler-binghe101                     1/1     Running   3          15h    192.168.175.101   binghe101   <none>           <none>
kube-system            metrics-server-57bc7f4584-cwsn8              1/1     Running   0          133m   172.18.229.68     binghe102   <none>           <none>
kubernetes-dashboard   dashboard-metrics-scraper-6b4884c9d5-qccwt   1/1     Running   0          102s   172.18.229.75     binghe102   <none>           <none>
kubernetes-dashboard   kubernetes-dashboard-7b544877d5-s8cgd        1/1     Running   0          102s   172.18.229.74     binghe102   <none>           <none>
```



```sh
[root@binghe101 ~]# kubectl get service -n kubernetes-dashboard  -o wide
NAME                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)         AGE     SELECTOR
dashboard-metrics-scraper   ClusterIP   10.96.249.138   <none>        8000/TCP        2m21s   k8s-app=dashboard-metrics-scraper
kubernetes-dashboard        NodePort    10.96.219.128   <none>        443:30000/TCP   2m21s   k8s-app=kubernetes-dashboard
```



### 7.创建dashboard管理员

创建dashboard-admin.yaml文件

```sh
vim dashboard-admin.yaml
```

文件的内容如下所示:

```sh
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: dashboard-admin
  namespace: kubernetes-dashboard
```



保存退出后执行如下命令创建管理员。

```sh
kubectl create -f ./dashboard-admin.yaml
```



### 8.为用户分配权限

创建dashboard-admin-bind-cluster-role.yaml文件。

```sh
vim dashboard-admin-bind-cluster-role.yaml
```



文件内容如下所示:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: dashboard-admin-bind-cluster-role
  labels:
    k8s-app: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: dashboard-admin
  namespace: kubernetes-dashboard
```



保存退出后执行如下命令为用户分配权限:

```sh
kubectl create -f ./dashboard-admin-bind-cluster-role.yaml
```



### 9.查看并复制用户Token

在命令行执行如下命令

```sh
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep dashboard-admin | awk '{print $1}')
```



具体执行情况如下所示。

```sh
[root@binghe101 ~]# kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep dashboard-admin | awk '{print $1}')
Name:         dashboard-admin-token-p8tng
Namespace:    kubernetes-dashboard
Labels:       <none>
Annotations:  kubernetes.io/service-account.name: dashboard-admin
              kubernetes.io/service-account.uid: c3640b5f-cd92-468c-ba01-c886290c41ca

Type:  kubernetes.io/service-account-token

Data
====
ca.crt:     1025 bytes
namespace:  20 bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IlVsRVBqTG5RNC1oTlpDS2xMRXF2cFIxWm44ZXhWeXlBRG5SdXpmQXpDdWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tcDh0bmciLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiYzM2NDBiNWYtY2Q5Mi00NjhjLWJhMDEtYzg4NjI5MGM0MWNhIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZC1hZG1pbiJ9.XOrXofgbk5EDa8COxOkv31mYwciUGXcBD9TQrb6QTOfT2W4eEpAAZUzKYzSmxLeHMqvu_IUIUF2mU5Lt6wN3L93C2NLfV9jqaopfq0Q5GjgWNgGRZAgsuz5W3v_ntlKz0_VW3a7ix3QQSrEWLBF6YUPrzl8p3r8OVWpDUndjx-OXEw5pcYQLH1edy-tpQ6Bc8S1BnK-d4Zf-ZuBeH0X6orZKhdSWhj9WQDJUx6DBpjx9DUc9XecJY440HVti5hmaGyfd8v0ofgtdsSE7q1iizm-MffJpcp4PGnUU3hy1J-XIP0M-8SpAyg2Pu_-mQvFfoMxIPEEzpOrckfC1grlZ3g
```



可以看到，此时的Token值为：

```sh
eyJhbGciOiJSUzI1NiIsImtpZCI6IlVsRVBqTG5RNC1oTlpDS2xMRXF2cFIxWm44ZXhWeXlBRG5SdXpmQXpDdWcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tcDh0bmciLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiYzM2NDBiNWYtY2Q5Mi00NjhjLWJhMDEtYzg4NjI5MGM0MWNhIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZC1hZG1pbiJ9.XOrXofgbk5EDa8COxOkv31mYwciUGXcBD9TQrb6QTOfT2W4eEpAAZUzKYzSmxLeHMqvu_IUIUF2mU5Lt6wN3L93C2NLfV9jqaopfq0Q5GjgWNgGRZAgsuz5W3v_ntlKz0_VW3a7ix3QQSrEWLBF6YUPrzl8p3r8OVWpDUndjx-OXEw5pcYQLH1edy-tpQ6Bc8S1BnK-d4Zf-ZuBeH0X6orZKhdSWhj9WQDJUx6DBpjx9DUc9XecJY440HVti5hmaGyfd8v0ofgtdsSE7q1iizm-MffJpcp4PGnUU3hy1J-XIP0M-8SpAyg2Pu_-mQvFfoMxIPEEzpOrckfC1grlZ3g
```



### 查看dashboard界面:

查看dashboard被部署到哪个节点：

```sh
[root@master dashboard-certs]# kubectl get pods -A  -o wide
NAMESPACE              NAME                                         READY   STATUS    RESTARTS   AGE     IP               NODE     NOMINATED NODE   READINESS GATES
kube-system            calico-kube-controllers-5b8b769fcd-gz9mz     1/1     Running   0          13h     172.18.219.67    master   <none>           <none>
kube-system            calico-node-44fjn                            1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            calico-node-5lr84                            1/1     Running   0          13h     10.0.12.16       node01   <none>           <none>
kube-system            calico-node-mnzqs                            1/1     Running   0          13h     10.0.4.16        node02   <none>           <none>
kube-system            coredns-546565776c-dsdll                     1/1     Running   0          13h     172.18.219.65    master   <none>           <none>
kube-system            coredns-546565776c-q9wq8                     1/1     Running   0          13h     172.18.219.66    master   <none>           <none>
kube-system            etcd-master                                  1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            kube-apiserver-master                        1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            kube-controller-manager-master               1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            kube-proxy-hc2gn                             1/1     Running   0          13h     10.0.12.16       node01   <none>           <none>
kube-system            kube-proxy-jhb6m                             1/1     Running   0          13h     10.0.4.16        node02   <none>           <none>
kube-system            kube-proxy-vs2n8                             1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            kube-scheduler-master                        1/1     Running   0          13h     10.0.4.6         master   <none>           <none>
kube-system            metrics-server-57bc7f4584-dcq2k              1/1     Running   0          12h     172.18.196.129   node01   <none>           <none>
kubernetes-dashboard   dashboard-metrics-scraper-6b4884c9d5-4w5hd   1/1     Running   0          5m40s   172.18.140.65    node02   <none>           <none>
kubernetes-dashboard   kubernetes-dashboard-7b544877d5-7tgcb        1/1     Running   0          5m40s   172.18.140.66    node02   <none>           <none>

```



可以看到是node02， node02的ip地址是124.220.35.58

则访问 https://124.220.35.58:30000/ ，**注意：必须是https必须要手输，否则浏览器会拒绝连接**