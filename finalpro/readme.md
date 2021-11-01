
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
