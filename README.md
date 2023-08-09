# mySuitcase🛄  
>What does the future hold for travel? Check-in by robot? Budget space flights? Virtual holidays? We’ve digested the findings and come up with a revolutionary idea that we think would benefit the world of travel.

## Table of contents
- [mySuitcase🛄](#mysuitcase%F0%9F%9B%84)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [i18n](#i18n)
  - [Deploy](#deploy)
  - [Features](#features)
  - [Contact](#contact)

## General info 
Add more general information about project. 
THIS A TESTING TEXT.

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Angular v16 (updated in July 2023)
* node v16.20.1
* npm v8.19.4

## Setup
npm install 

## i18n
For the translations we use angular i18n architecture (following https://medium.com/dailyjs/maintaining-multi-language-angular-applications-26b74df8d085) and the tool ng-extract-i18n-merge (https://github.com/daniel-sc/ng-extract-i18n-merge)
1. npm run translate => ng extract-i18n => 
  1.1 Generates messages.xlf file with texts to be translated
  1.2 Based on extract-i18n defined in angular.json it merges the new translations to the xlf target files adding an attribute state="new" to those added translations.
2. npm run start-es => ng serve --proxy-config proxy.conf.json --configuration=es-ES => runs the app with the translated for a specific language in DEV
3. npm run start-prod => ng build --configuration=production --localize => it makes new builds for production with the default locale (en-US) and the different languages (es so far) . Currently there is an error in angular.json configuration production optimization option when doing the build, so the inlineCritical option has to be desactivated.

## Deploy
npm start (with proxy.conf to distinguish PROD vs DEV - https://medium.com/@asfo/creando-un-proxy-en-angular-para-conectarte-a-un-api-local-y-de-producci%C3%B3n-106c34cd9815)

## Features
List of features ready and TODOs for future development
* Login user by using JWT
* Get an overview of all user´s suitcase
* Create/update/remove/see a suitcase
* Get recommendations items when making a suitcase based on the kind of trip
* Get weather forecast for the dates when the user is going to do the trip
* Suscribe to new updates of the app
* Get it locally installed as PWA - https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07 - https://web.dev/customize-install/
        * 1. ng add @angular/pwa - creates manifest, ngsw-config.json and icons and Also, it modifies angular.json, package.json, index.html and app.module.ts .
        * 2. configure the cache files in manifest
        + 3. We add pwa-installer.js and its component and service to show an installer button into the html and trigger the same behaviour to install the pwa

## Contact
Created by [@aManso](https://www.linkedin.com/in/alejandro-manso-026a2a2b/) - feel free to contact me!
