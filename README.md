# Case Study UI
ReactJS UI for case study


## About the Application
This application is a React front end for this case study. It pulls data from the **Case Study Server** application, which can be found in the *tgt-case-study-server* repository.

## Run the Application

Both **tgt-case-study-server** and **tgt-case-study-ui** are required.

**Required software:** NodeJS, npm

Here are the instructions to run each of them:

`git clone /path/to/repository`<br>
`cd /path/to/cloned/repository`<br>
`npm install`<br>
`npm run start`

To run tests, run:
`npm test`


## View the Application

To view the application, open a browser and navigate to **localhost:8080/**.

Make sure that the server is also running.

*Due to time constraints, this application has not been tested in Internet Explorer or Microsoft Edge.*


## Pipeline

The pipeline would consist of Drone and Kubernetes.

For an overview of how I would implement a pipeline, view **Pipeline.pdf**, provided in this directory.

For samples of the files I would use, view:<br>
**Dockerfile** <br>
**.drone.yml** <br>
**k8s/**
