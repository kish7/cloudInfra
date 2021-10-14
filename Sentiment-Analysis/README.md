# Steps to run Sentiment Analysis in GKE

Ensure all the docker images are pushed on to dockerHub and then into google cloud registry

![image](https://user-images.githubusercontent.com/22275506/137407177-946e8c2e-ca70-4683-ac41-fed0d6685ae0.png)


## Deployment

* Step 1: 

  Click on the Deploy button

* Step 2:

  Select 'Existing Container Image' and select the docker images we pushed into cloud registry.

  Create deployments for each of the docker image we created:

  In our case the docker images are named : safrontend, salogic, sawebapp
  
  <img width="740" alt="image" src="https://user-images.githubusercontent.com/22275506/137408860-0c92bcb4-b9a1-4d97-bd18-f37a516f7907.png">


* Step3:

  Exposing the ports for by creating services.
  
  * safrontend:

    Load Balancer : Port mapping - 80:80

  * sawebapp:

    Load Balancer : Port mapping - 8080:8080

  * salogic:

    Cluster IP : Port mapping - 5000:5000

  
  Create Load Balancer service for safrontend and sawebapp as per specificaiton
  <img width="740" alt="image" src="https://user-images.githubusercontent.com/22275506/137408011-4823b15c-5907-4352-955d-d026d7b7891d.png">


* Step 4 :

Verify Deployment

<img width="740" alt="image" src="https://user-images.githubusercontent.com/22275506/137408612-9118fd07-9556-4935-a3dc-25cbff1b1787.png">

<img width="740" alt="image" src="https://user-images.githubusercontent.com/22275506/137408639-24e55d33-3d56-4f2a-9aee-40a88f8fd490.png">

