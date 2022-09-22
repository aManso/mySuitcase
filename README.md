# mySuitcase🛄  
>What does the future hold for travel? Check-in by robot? Budget space flights? Virtual holidays? We’ve digested the findings and come up with a revolutionary idea that we think would benefit the world of travel.

## Table of contents
- [mySuitcase🛄](#mysuitcase%F0%9F%9B%84)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Features](#features)
  - [Wiki](#wiki)
  - [Contact](#contact)

## General info 
Add more general information about project. 
THIS A TESTING TEXT.

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Tech 1 - version 1.0

## Setup
npm install 

## i18n
For the translations we use angular i18n architecture (following https://medium.com/dailyjs/maintaining-multi-language-angular-applications-26b74df8d085) and the tool ng-extract-i18n-merge (https://github.com/daniel-sc/ng-extract-i18n-merge)
1. npm run translate => ng extract-i18n => 
  1.1 Generates messages.xlf file with texts to be translated
  1.2 Based on extract-i18n defined in angular.json it merges the new translations to the xlf target files adding an attribute new those added translations.
2. npm run start-es => ng serve --proxy-config proxy.conf.json --configuration=es => runs the app with the translated for a specific language in DEV
3. npm run start-prod => ng build --configuration=production --localize => it makes new builds for production with the default locale (en-US) and the different languages (es so far)

## Deploy Client
npm start (with proxy.conf to distinguish PROD vs DEV - https://medium.com/@asfo/creando-un-proxy-en-angular-para-conectarte-a-un-api-local-y-de-producci%C3%B3n-106c34cd9815)

## Deploy Server
node

## Features
List of features ready and TODOs for future development
* Awesome feature 1

To-do list:
* Visit the [issues](https://github.com/aguadotzn/mySuitcase/issues) page. 

## Wiki
 Visit the wiki [here](https://github.com/aguadotzn/mySuitcase/wiki). 
 In order to generate a vapid keys use this command: web-push generate-vapid-keys --json

## Contact
Created by [@aManso](https://www.linkedin.com/in/alejandro-manso-026a2a2b/) - feel free to contact me!
