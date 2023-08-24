# mySuitcase🛄  
>What does the future hold for travel? Check-in by robot? Budget space flights? Virtual holidays? We’ve digested the findings and come up with a revolutionary idea that we think would benefit the world of travel.

# [Live Demo](#live-demo)
Here is a working website : https://mysuitcase.net

## Table of contents
- [mySuitcase 🛄](#mysuitcase%F0%9F%9B%84)
  - [Table of contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [i18n](#i18n)
  - [Deploy](#deploy)
  - [Test](#tests)
  - [Lint](#lint)
  - [Technical Features](#Technical_Features)
  - [Functional Features](#Functional_Features)
  - [Contact](#contact)

## Technologies
* Angular v16 (updated in July 2023)
* node v16.20.1
* npm v8.19.4

## Setup
  `npm install`

## i18n
For the translations we use angular i18n architecture (following https://medium.com/dailyjs/maintaining-multi-language-angular-applications-26b74df8d085) and the tool ng-extract-i18n-merge (https://github.com/daniel-sc/ng-extract-i18n-merge)
1. `npm run translate` => `ng extract-i18n` => 
  1.1 Generates messages.xlf file with texts to be translated
  1.2 Based on extract-i18n defined in angular.json it merges the new translations to the xlf target files adding an attribute state="new" to those added translations.
2. `npm run start-es` => `ng serve --proxy-config proxy.conf.json --configuration=es-ES` => runs the app with the translated for a specific language in DEV
3. `npm run start-prod` => `ng build --configuration=production --localize` => it makes new builds for production with the default locale (en-US) and the different languages (es so far) . Currently there is an error in angular.json configuration production optimization option when doing the build, so the inlineCritical option has to be desactivated.

## Deploy
  ### Locally
  `npm run start` (with proxy.conf to distinguish PROD vs DEV - https://medium.com/@asfo/creando-un-proxy-en-angular-para-conectarte-a-un-api-local-y-de-producci%C3%B3n-106c34cd9815)
  ### Production
  `npm run start-prod` (in dist folder)

## Tests
  `npm run test` 

## Lint
  `npm run lint` 

## Technical_Features
- [x] Routing
- [x] Lazy Loading
- [x] Responsive Layout
- [x] Standalone components
- [x] Login user by using JWT
- [x] Authorization tokens
- [x] Http Requests, Interceptors & Guards
- [x] Service Workers
- [x] PWA

## Functional_Features
List of features ready
- [x] LOGIN user by using JWT
- [x] Get an overview of all user´s suitcase
- [x] Create/update/remove/see a suitcase
- [x] Get RECOMMENDATIONS items when making a suitcase based on the kind of trip
- [x] Get WEATHER FORECAST for the dates when the user is going to do the trip
- [x] ADMIN area
- [x] Suscribe to new updates of the app through NOTIFICATIONS
        * Only working in production build and either locally or under https protocol
- [x] Get it locally installed as PWA - https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07 - https://web.dev/customize-install/
        * 1. `ng add @angular/pwa` - creates manifest, ngsw-config.json and icons and Also, it modifies angular.json, package.json, index.html and app.module.ts .
        * 2. configure the cache files in manifest
        * 3. We add pwa-installer.js and its component and service to show an installer button into the html and trigger the same behaviour to install the pwa

## Contact
Created by [@aManso](https://www.linkedin.com/in/alejandro-manso-026a2a2b/) - feel free to contact me!
