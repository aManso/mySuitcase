# mySuitcase 🛄  
>What does the future hold for travel? Robot check-in? Budget space flights? Virtual holidays? We have digested the findings and come up with a revolutionary idea that we believe can benefit the world of travel.

# [Live Demo](#live-demo)
Here is a working website: https://mysuitcase.net

## Table of contents
- [mySuitcase 🛄](#mysuitcase%F0%9F%9B%84)
  - [Table of contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Security Status](#security-status)
  - [Setup](#setup)
  - [i18n](#i18n)
  - [Deploy](#deploy)
  - [Tests](#tests)
  - [Lint](#lint)
  - [Technical Features](#Technical_Features)
  - [Functional Features](#Functional_Features)
  - [Contact](#contact)

## Technologies
* Angular v22
* node v24.18.0
* npm v11.16.0

## Security Status
Latest dependency audit baseline (after `npm audit fix --force` followed by `npm audit fix`):

* 10 vulnerabilities remain (4 high, 6 moderate)
* Main affected transitive packages: `@hono/node-server`, `image-size`, `picomatch`, `uuid`
* Run `npm audit` to check current status in your environment

## Setup
  `npm install`

## i18n
For translations, we use Angular i18n architecture (following https://medium.com/dailyjs/maintaining-multi-language-angular-applications-26b74df8d085) and the ng-extract-i18n-merge tool (https://github.com/daniel-sc/ng-extract-i18n-merge).
1. `npm run translate` => `ng extract-i18n` => 
  1.1 Generates a messages.xlf file with text to be translated.
  1.2 Based on extract-i18n defined in angular.json, it merges new translations into target xlf files, adding a state="new" attribute to newly added translations.
2. `npm run start-es` => `ng serve --proxy-config proxy.conf.json --configuration=es-ES` => runs the app in development mode with a specific translated language.
3. `npm run start-fr` => `ng serve --proxy-config proxy.conf.json --configuration=fr-FR` => runs the app in development mode in French.
4. `npm run start-prod` => `ng build --configuration=production --localize` => creates production builds for all configured locales.
5. Locale configuration details (angular.json):
  5.1 `sourceLocale` is `en-US`.
  5.2 Translation keys use base locale IDs (`es`, `fr`) to match Angular locale data.
  5.3 `subPath` is used to publish region-specific folders (`es-ES`, `fr-FR`).
  5.4 Production output is generated under `dist/my-suitcase/browser/en-US`, `dist/my-suitcase/browser/es-ES`, and `dist/my-suitcase/browser/fr-FR`.

## Deploy
  ### Locally
  `npm run start` (with proxy.conf to distinguish PROD vs DEV - https://medium.com/@asfo/creando-un-proxy-en-angular-para-conectarte-a-un-api-local-y-de-producci%C3%B3n-106c34cd9815)
  ### Production
  `npm run start-prod` (from the dist folder)

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
- [x] Get an overview of all users' suitcases
- [x] Create/update/remove/view a suitcase
- [x] Get RECOMMENDATIONS items when making a suitcase based on the kind of trip
- [x] Get WEATHER FORECAST for the dates when the user is going to do the trip
- [x] ADMIN area
- [x] Subscribe to new app updates through NOTIFICATIONS
        * Only working in production build and either locally or under https protocol
- [x] Get it locally installed as PWA - https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07 - https://web.dev/customize-install/
  * 1. `ng add @angular/pwa` - creates manifest, ngsw-config.json, and icons. It also modifies angular.json, package.json, index.html, and app.module.ts.
  * 2. Configure cache files in the manifest.
  * 3. We add pwa-installer.js and its component and service to show an install button in the HTML and trigger the same behavior to install the PWA.

## Contact
Created by [@aManso](https://www.linkedin.com/in/alejandro-manso-026a2a2b/) - feel free to contact me!
