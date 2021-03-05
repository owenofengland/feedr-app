# Feedr App

Application that centralizes social media feeds from various websites/apps. Client frontend built with React and Axios for requests. API backend built with Node & Express to proxy requests to various social media APIs for frontend.

## Currently Supports

* Twitter

## Planned Future Support

* Reddit
* Facebook
* Instagram
* Others if suggested (open an issue!)

## Current Work TO DO

* Start integrating another social media
    * Start with proxy API endpoint development

## How To Configure secrets.js

* `secrets.js` is necessary for this project to run, contains API keys and other sensitive information, view sampleSecrets.js for correct structure and be sure to replace the values with appropriate information

## Docker Instructions/Running Instructions
*Requires installation of both docker and docker-compose*

Option 1: Build and compose manually
* Build docker images from docker files in `/api` and `/client`
* `docker-compose -f docker-compose.yml up` in root directory

Option 2: Using `run.sh`
* Simply execute `./run.sh` which includes build statements for both parts of the project and the compose script

After either completes successfully, go to localhost:3000