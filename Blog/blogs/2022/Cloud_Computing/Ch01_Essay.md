---
title: Ch01 Essay
date: 2023-02-08
tags:
 - Cloud Computing
categories:
 - Cloud
 - DevOps


---

# Cloud Migration Strategy for large financial services institution

### Yang Haoran 3611946

### Universität Stuttgart


## Abstract



This article introduces discussions on migrating applications in large financial services institutions to the cloud. The following aspects will be covered: Analysis of which kind of applications are suitable to migrate to the cloud in which order and in what manner. Also, challenges, costs, and stakeholders during the process are included. In addition, concrete migration implementation is given along with the timeline and performance metrics.

##### Keywords: Cloud Migration · Container · Multi-cloud· Cloud migration performance metrics · Cloud Migration cost.



## Introduction



Nowadays, financial services institutions(FSI) are aware of the benefit of cloud computing, such as cost saving, scalability, and security. However, the process of cloud migration can also be complex and challenging. It requires careful planning, evaluation of the best cloud solutions for each application, and coordination with stakeholders and third-party vendors.



For an FSI contains a large number of applications with different architectures, deployment models, and clients. It is important to develop a plan to migrate our application to the cloud concerning approach, timeline, cost, and risks. Successful cloud migration should optimize application performance Within a tolerable time frame, and reduce costs and risks while ensuring regulatory compliance and security. Also, it should set migration goals, creates a timeline, anticipates challenges, and defines the project’s success.[4]



## 2 Migration design

### 2.1 Choice of vendors

Multi-cloud is chosen as the target deployment model of the migration, which can take the advantage of both the public cloud and private cloud and would not lock into one cloud provider.[6]

For sensitive data and applications, we can keep them in a private cloud environment. Also, we can benefit from the service provided by the public cloud to burst capacity during periods of high demand.



AWS is chosen as one of our public cloud providers because it has a huge amount of availability of zones which are very important for our FSI. So AWS can be more stable and have less response time regarding using services with the CDN technology. Also, it is the world’s largest cloud provider which has a professional team regarding security and maintenance. From the aspect of price, it is also affordable. In addition, cloud service level agreements of AWS ensure the availability of services[3] IBM cloud has a strong focus on security and compliance, offering a range of security and compliance services to help ensure that customer data is secure. This aspect is the Number one priority for our financial services institutions. In addition, it can also be used with AWS to optimize our costs by choosing the most cost-effective option for each service. OpenStack is chosen as the tool to build a private cloud. One reason is it is an open-source platform that provides a set of components for virtualization, storage, networking, and other infrastructure services. That means we can save a lot of effort to plan and build our own platform and security can also be ensured because it is a ’white box’. The other reason is it is highly customizable, and has successful precedents(Huawei Cloud).



### 2.2 Target architecture

Since we have 2000 applications with different architectures, deployment modes, and clients. A target architecture should be defined according to different situations:[5] 



For the core banking service, the target architecture should be microservices deployed on a hybrid cloud. Since each microservice runs independently, it is easier to add, remove, update, or scale each cloud microservice. Also, it is a best practice for containerization, which is more lightweight and portable compared with virtualization. We can scale each microservice as needed for some peak of requests such as Black Friday. On the other hand, from the view of developers, they can deploy features that prevent cascading failures with easy testing, and a microservice application can be programmed in any language, so dev teams can choose their most familiar language which can also reduce the cost of money and time. And dev teams working on different microservices don’t have to wait for each other to finish. Companies can develop and deploy new features quickly and upgrade older components as new technologies are recognized.



As to the hybrid cloud, the banking system has some sensitive data, such as banking information and customer information. We suggest migrating these sensitive data to a private cloud because the private cloud is protected from public view, so only the authorized application and person can access them, which is responsible for the customer and makes protection of our core data. And the process containing the business logic to handle the request should be moved to the public cloud to benefit from the advantages of scaling up and down according to the QPS. Another reason for migrating part of the core banking service to the public cloud is that it is difficult and expensive to predict the demand of usage of the customer, so we may waste money on hardware only be used several days a year.



For the services that use by few people and would not have updates in the future, such as a device management system in a particular office building. we can just containerize it and move it to our private cloud to achieve cost savings and avoid over-design. We don’t need to invest a huge effort in refactoring this kind of application because it would not bring us much benefit since it would not need to scale up and down and small user group. But the data of these kinds of applications are the secret of a company. So containerizing it and moving it to our private cloud would be a good choice. 



If the service is used internally, in most cases, the private data can be migrated to the private cloud for the reason that the number of clients is predictable and small. Some examples of such applications are customer relationships, HR, and internal controls. Because private clouds are not accessible to the general public and are typically protected by firewalls and other security measures. This makes them more secure than public clouds. Microservices architecture is also suggested compared to the other architecture such as N-Tier, Web-Queue-Worker, and CQRS. Although those other architectures have their own benefits, they can be less flexible and scalable than microservices. Also fault tolerance and disaster recovery are very important aspects for our financial services institutions(Time is money). Without the microservice architecture, it is expensive and hard to design a quick recovery after downtime. 



If the service is used externally without some sensitive data, such as the web service of the homepage of our institute. Totally public cloud is fine because the public cloud can help us solve the problem of network security and ensure the available time of our services which are the two most important aspects of
those applications. Also, it is cost-effective and reliable. In addition, since the cloud provider manages the resources in an efficient way, we are also achieving sustainable IT, which reduces the consumption of energy, in our case, is avoiding running a large number of servers when the QPS is low. 



We should also consider some best practices of DevOps, such as automation, CI/CD pipeline, monitoring, and feedback. 

It can enable more efficient development and quick bug positioning.
### 2.3 Migration goals
Before the cloud migration, several goals are defined for the cloud migration[2]:

1. Consistency and Improved performance: Applications should keep the same
  function before and after the migration and can increase stability and reliability,
  which offers customers faster and more reliable access to services and
  data.

2. Ability to innovate and scale faster: The FSI should benefit from the cloud
  migration such that new applications and services can be easily and faster
  deployed, also quickly scaling up and down according to the actual situation
  should be possible.

3. Cost efficiency and Better consumption management: By migrating to the
  cloud, FSIs can reduce the costs of hardware and software. Also, reduce the
  need for physical data centers so that the cost of maintenance and support
  can also be minimized. On the other hand, the consumption of resources
  should be visible and manageable from the cloud provider.

4. Enhanced security and compliance: After migrating to cloud. The cloud
  provider takes care of the security of the system, which means protection
  from cyber threats should be enhanced. Also, it should provide a way to ensure
  all applications are compliant with regulations and data privacy laws.

5. Sustainable IT: After migration, we should minimize the negative impact of
  IT on the environment and society while maximizing its positive impact. In
  our case is reducing energy usage and electronic waste.

  

  

## 3 Migration implementation

### 3.1 Classification and prioritization of the applications

The following plan is given regarding to classification and prioritization of the applications according to the actual situation of our FSI and the 6R approach in cloud migration given by AWS. [1]



First of all, we should go over all the applications, for the applications that can not or will not be used, the ’Retire’ strategy should be used. We clean up all those applications, and if needed, the data should be stored for an extended time according to compliance and law. For all the applications that need to migrate to the cloud according to chapter 2.2, we give scores of priority according to the following criteria:



– Dependency(1.0: more - 5.0: less): Dependencies should be considered because more dependencies mean more time-consuming and more difficult to migrate to the cloud. We can use some application dependency mapping tools combing with the documentation of applications to figure out the application dependencies with each other.



– Deployment modes(1.0: traditional, 2.0: virtualized, 4.0: containerized, 5.0: cloud): For the application already on the cloud or containerized, we only need to rehost or re-platform them. On the other hand, the dev team has already some knowledge of the cloud, so it would be not so hard for them to do the migration. And after migrating they can give other teams selfconfidence and determination for migrating to the cloud. And they can gain some experience from the cloud migration and give implementation advice to other teams.



While for the traditional application, we need to access the cost and effect of refactoring and re-purchasing. Then we made a decision on how to migrate these applications to the cloud.



– Complexity(1.0: very complex - 3.0: very simple): The complexity is another fact we should considered. It would take us more time to refactor a complex application and a complex application would have more opportunity to have bugs during migration. We can use some application complexity analysis tools, such as SonarQube and CodeCity.



– User amount(1.0: >1M, 2.0: 100k-1M, 3.0: 50k-100k, 4.0: 10k-50k, 5.0: <10k): Use amount is also one criterion we should consider. And we should start with the applications with fewer users amounts, which means that it would not influence plenty of clients. They can be accessed from the database or the logs of the application.



– Mission critical(1.0: Yes, 20.0: No) If an application is mission critical, before the migration, we should make sure we have a backup plan and be very careful. In our institute, financial systems such as trading platforms, banking systems, and payment gateways are considered mission-critical because they handle sensitive financial information and must be available and reliable at all times. So we migrate all the mission-critical applications when others are done and stable.



After we give scores according to these criteria. We can calculate the total scores of all the applications. And we can migrate them according to the sequence from the high score to the low score. What’s more, according to the dependency tree, the migration process of two application which has no direct or indirect
links to each other can be done in parallel.



### 3.2 Migration methods of data and application

We should first migrate data to the cloud. For high volumes of data, we should consider Batch (MapReduce/Flume) processing. During the refactoring of applications, we can use Publish/Subscribe service to decouple readers/writers and improve retries. For some applications with distributed data stores to handle huge amounts of data, such as Machine Learning (Model Training) and Complex Analytics, we must ensure eventual Consistency during the process with the help of a cloud provider. Another choice would be using Cloud Data Migration Services. Also we should consider that some of the data should be kept locally(not deleted) for some time according to the law. For example, the banking information should be kept for 5 years even if the customer is no longer using our system anymore.



For the applications which need to refactor to microservice, we should consider the way to split the services. Starting by identifying the different business capabilities that the application provides. These capabilities should be identified based on the business requirements and objectives. We can split service into microservices according to the following principles: Single responsibility, Service autonomy, Lightweight communication, Interface clarity, Continuous evolution principle.



For the applications that are currently in use, we can use the blue/green deployment, which is a deployment strategy in which you create two separate, but identical environments. One environment (blue) is running the current application version and one environment (green) is running the new application version. And then we slowly triage requests to a new environment and monitor if the error rate is high. This method can ensure the system is always available, and if some exceptions happened, we can also roll back to the old version. 



Also security and monitorable during and after the migration are very important. We can encrypt the data and implement access control such as VPN to the private cloud. Monitoring can help us not only monitor the performance of applications but also discover security threats. For the public cloud, we can use tools cloud providers provided, such as CloudWatch[7] provided by AWS. For both public and private clouds, some open-source tools can be used by DevOps and SRE teams, such as Prometheus for monitoring and Jenkins for CI/CD. CNCF is also a good reference for these teams, it provides some knowledge graph for better constructing cloud-native applications.



### 3.3 Migration Timeline, processes, and roles

In this section, the migration timeline is divided into three phases:

+ Pre-migration planning: (1 month)

  + Collect and prioritize applications and data to be migrated accordi ng to the migration plan (1 week)
  + Assess the current infrastructure and environment and plan detail of the target one (2 weeks)
  + Secure necessary approvals and funding (1 week)

+ Migration execution: 9-14 months

  + Refactoring the application and checking the dependency each other if needed and testing it locally (2 - 3 months)
  + Purchasing the hardware and software needed for the public cloud and private cloud according to the plan (1 week)
  + Setup the cloud environment as planned (1 week)
  + Start migration according to the priority defined before (5 - 8 months)
  + Conduct testing and validation of the migrated systems (1 month)
  + Go live with the new multi-cloud environment and train the developer with cloud knowledge (1 month)

+ Post-migration optimization: 3 months - several years

  + Conduct performance monitoring and optimization across all cloud providers (1 week)

  + Build our own monitoring tool on our private cloud platform (1 month)

  + Refine security and compliance measures across all cloud providers (1 month)

  + Implement automa tion and scalability features across all cloud providers (1 month)

  + Continuously improve the multi-cloud environment based on user feedback (All the time)

    

Our institute will need some expertise in DevOps and SRE to ensure the cloud
migration works properly, and roles related to the migration are defined as follows:



+ CIO: Responsible for overall planning, execution, and management of the multi-cloud migration project

+ Cloud Architect: Designs the multi-cloud environment and infrastructure based on the requirements and objectives of the migration project

+ Cloud Engineer: Executes the migration plan, including the setup of the multi-cloud environment and migration of applications and data across all cloud providers

+ Developer: Learning skills regarding clouding and developing new features in the future in a cloud-native way.

+ Security and Compliance Officer: Ensures that the multi-cloud environment is secure and compliant with relevant regulations and standards across all cloud providers

+ Business Analyst: Analyzes the impact of the multi-cloud migration on business processes and identifies areas for optimization

  

  

### 3.4 Challenges and risks anticipation

There are also some challenges and risks we should anticipate:

+ Application dependency: It is hard to detect every dependency of applications correctly, and the sequence of migrating applications depending on each other is very important.
+ Structure complexity: A multi-cloud environment involves managing different cloud providers, each with its own tools, interfaces, and APIs It is difficult to monitor and manage overall infrastructure, performance, and security.
+ Skills gap: Managing a multi-cloud environment requires a unique set of skills and expertise, which may be hard to find within our institute. This can lead to increased costs and delays in the migration process.
+ Interoperability: The lack of interoperability between different cloud providers can make it difficult to integrate and manage services across different platforms. We may have issues with data portability and application compatibility.

### 3.5 Performance metrics

During and after the migration, some performance metrics should be considered
to monitor the process:[8]

+ Cost/Time Savings: With the migration, the amount of the cost and time saving can be achieved.
+ Application Performance: Application performance should be increased after the migration. This can be measured by tracking metrics such as response time, throughput, and availability. Also, scalability should be measured as part of application performance.

+ User experience: This metric is set from the perspective of the end-user to see if users are satisfied with the applications. It can be measured by tracking metrics such as user response time, page load time, and error rates.
+ Security: Security is another important aspect of our financial institute. So it should also be monitored by tracking metrics such as access control, data encryption, and vulnerability management.
+ Compliance: Organizations need to ensure that they are compliant with relevant regulations and standards when operating in the cloud. And this metric can be measured by tracking audit logs, access control, and encryption.

## 4 Cost assessment and Stakeholders



In the end, the cost should be accessed and the stakeholders should also be considered during the migration.



Costs can be calculated according to Direct costs (including the cost of cloud infrastructure, migration tools, and consulting services, as well as any costs associated with training employees on the new cloud environment), Operational costs (including ongoing costs associated with running applications and services in the cloud, such as compute, storage, and bandwidth usage), and licensing costs (additional licensing costs when using the application on the cloud), Downtime costs (if migrating causes some downtime of the application, the cost also should be calculated). Especially, We can benefit from using some existing tools such as AWS Simple Monthly Calculator and IBM Cloud Pricing Calculator to assess
the Operational costs.



The communication with stakeholders also should be taken into account. It includes IT teams, business owners, end-users, and external partners or vendors. It is important to understand how the migration will impact each of these groups and to communicate any changes or disruptions effectively.



## References

1. Stephen Orban: 6 Strategies for Migrating Applications to the
  Cloud(2016)https://aws.amazon.com/cn/blogs/enterprise-strategy/6-strategiesfor-
  migrating-applications-to-the-cloud/
2. Introduction to cloud migration https://www.accenture.com/be-en/insights/cloudmigration-
  index
3. Mary Zhang: Top 10 Cloud Service Providers Globally in
  2023(2023)https://dgtlinfra.com/top-10-cloud-service-providers-2022/
4. Cloud-migration https://www.ibm.com/topics/cloud-migration
5. Larrucea, X., Santamaria, I., Colomo-Palacios, R., & Ebert, C. (2018). Microservices.
  IEEE Software, 35(3), 96-100.
6. Jamshidi, P., Pahl, C., & Mendon¸ca, N. C. (2017). Pattern-based multi-cloud architecture
  migration. Software: Practice and Experience, 47(9), 1159-1184.
7. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html
8. Essential Cloud KPIs for Migration: https://www.connectria.com/blog/kpi-foryour-
  cloud-migration/