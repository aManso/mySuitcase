"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



// ROOT OF THE APPLICATION. The entire route system is pulled from here.
const routes = [
// Lazy loading: just load the application modules as they are called. Only the necessary ones.
{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_public_public_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./public/public.module */ 2772)).then(m => m.PublicModule)
}, {
  path: 'admin',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7008)).then(m => m.AdminModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/login/login.module */ 4523)).then(m => m.LoginModule)
}, {
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_public_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./public/register/register.module */ 6943)).then(m => m.RegisterModule)
}, {
  path: 'settings',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/settings/settings.module */ 716)).then(m => m.SettingsModule)
}, {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
// Wildcard route for a 404 page
{
  path: 'home',
  redirectTo: ''
}, {
  path: '**',
  redirectTo: 'page-not-found'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class AppComponent {
  constructor(config, swUpdate) {
    this.swUpdate = swUpdate;
    this.config = config;
  }
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(evt => {
        switch (evt.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
            if (confirm("Una nueva versión está disponible, ¿Desea cargar la nueva versión?")) {
              window.location.reload();
            }
            break;
          case 'VERSION_INSTALLATION_FAILED':
            console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
            break;
        }
      });
    } else {
      console.log("The current browser does not support service workers or the Angular Service Worker is not up and running");
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_config__WEBPACK_IMPORTED_MODULE_0__.MYSUITCASE_CONFIG_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__.SwUpdate));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [["name", "content", 1, "content"], ["content", ""]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: ["[_nghost-%COMP%], .content[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsIC5jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MYSUITCASE_CONFIG: () => (/* binding */ MYSUITCASE_CONFIG),
/* harmony export */   MYSUITCASE_CONFIG_TOKEN: () => (/* binding */ MYSUITCASE_CONFIG_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const MYSUITCASE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');
const MYSUITCASE_CONFIG = {
  apiUrl: 'mysuitcase.com',
  title: 'My Suitcase'
};

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/shared/shared.module */ 1782);
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.module */ 7170);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ 7110);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _core_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/interceptor/token-interceptor.service */ 8302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true
    }
  }, {
    provide: _app_config__WEBPACK_IMPORTED_MODULE_4__.MYSUITCASE_CONFIG_TOKEN,
    useValue: _app_config__WEBPACK_IMPORTED_MODULE_4__.MYSUITCASE_CONFIG
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _core_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_6__.TokenInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
  // Material
  _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
  // we register the service worker module and the file that is generated in the dist folder for prod build to cache all the static main files
  // important!! In order to capture the REST calls, only non-mutating requests (GET and HEAD) are cached.
  // Code created by @angular/pwa 
  _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
    // we enable it just for prod because the ngsw-worker.js file is a generated file from the .json configuration not available in other than prod
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
  // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
  _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__.NotFoundModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
    // Material
    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule,
    // Tip: The routing module must be the last to import. Why? It is possible that a series of modules will not be loaded when routing.
    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2018:
/*!***************************************!*\
  !*** ./src/app/core/config/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENDED_SNACKBAR_TIME: () => (/* binding */ EXTENDED_SNACKBAR_TIME),
/* harmony export */   GENERAL_SNACKBAR_TIME: () => (/* binding */ GENERAL_SNACKBAR_TIME),
/* harmony export */   MAX_ALLOWED_SUITCASES: () => (/* binding */ MAX_ALLOWED_SUITCASES),
/* harmony export */   MAX_ALLOWED_SUITCASES_PREMIUM: () => (/* binding */ MAX_ALLOWED_SUITCASES_PREMIUM)
/* harmony export */ });
const MAX_ALLOWED_SUITCASES = 10;
const MAX_ALLOWED_SUITCASES_PREMIUM = 12;
const GENERAL_SNACKBAR_TIME = 3000;
const EXTENDED_SNACKBAR_TIME = 5000;

/***/ }),

/***/ 4166:
/*!**********************************************!*\
  !*** ./src/app/core/const/backend-errors.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACKEND_ERRORS: () => (/* binding */ BACKEND_ERRORS),
/* harmony export */   BACKEND_ERROR_TYPES: () => (/* binding */ BACKEND_ERROR_TYPES)
/* harmony export */ });
const BACKEND_ERROR_TYPES = {
  MAX_SUITCASES_REACHED: 'maxSuitcasesReached',
  POP_UPS_BLOCKED: 'NotAllowedError',
  WRONG_PASSWORD: 'wrongPassword',
  EXISTING_EMAIL: 'existingEmail',
  USER_NOT_FOUND: 'userNotFound'
};
const BACKEND_ERRORS = {
  MAX_SUITCASES_REACHED: {
    title: 'Error',
    message: $localize`You have reached the maximum number of suitcases`
  },
  POP_UPS_BLOCKED: {
    title: 'Error',
    message: $localize`:@@popupsBlockedError:Please, make sure that you have enabled pop ups in your browser. You could check it in both the navigation bar and the browser configuration`
  },
  WRONG_PASSWORD: {
    title: $localize`Wrong username or password`,
    message: $localize`The username, the password or both are wrong. Please make sure that both fields are right`
  },
  EXISTING_EMAIL: {
    title: $localize`The email already exists`,
    message: $localize`The email that you are trying to introduce already exists in our database, please if its yours and you dont remember the password, click into the remember password button in the login area`
  },
  USER_NOT_FOUND: {
    title: $localize`The username or the password are wrong`,
    message: $localize`The username or the password are wrong`
  }
};

/***/ }),

/***/ 1543:
/*!***********************************************!*\
  !*** ./src/app/core/const/frontend-errors.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FRONTEND_ERRORS: () => (/* binding */ FRONTEND_ERRORS),
/* harmony export */   FRONTEND_ERROR_TYPES: () => (/* binding */ FRONTEND_ERROR_TYPES)
/* harmony export */ });
const FRONTEND_ERROR_TYPES = {
  NOTIFICATIONS_DISABLED: 'NotificationsNotEnabled'
};
const FRONTEND_ERRORS = {
  GENERAL_ERROR: {
    title: 'Error',
    message: $localize`There has been a problem, please try again and if the problem persist contact us`
  },
  NOTIFICATIONS_DISABLED: {
    title: 'Error',
    message: $localize`Notifications are not enabled for this device`
  }
};

/***/ }),

/***/ 2703:
/*!*************************************************!*\
  !*** ./src/app/core/const/frontend-messages.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FRONTEND_MESSAGES: () => (/* binding */ FRONTEND_MESSAGES)
/* harmony export */ });
const FRONTEND_MESSAGES = {
  CONFIRMATION_REMOVE_NOTIFICATION: {
    title: $localize`¡Warning!`,
    message: $localize`Are you sure that you want to continue and remove the notification?`
  },
  CONFIRMATION_SEND_NOTIFICATION: {
    title: $localize`¡Warning!`,
    message: $localize`Are you sure that you want to continue and send the notification to all the subscribers?`
  },
  CONFIRMATION_REMOVED_NOTIFICATION: {
    title: $localize`The notification has been successfully removed`,
    message: ''
  }
};

/***/ }),

/***/ 8302:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptor/token-interceptor.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptorService: () => (/* binding */ TokenInterceptorService)
/* harmony export */ });
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session/session.service */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TokenInterceptorService {
  constructor(_injector) {
    this._injector = _injector;
  }
  intercept(req, next) {
    // this is to make sure that the dependency exist
    const sessionService = this._injector.get(_session_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService);
    // we add the token that it was created in BE to be retrieved again and valid the request
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
  return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
TokenInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TokenInterceptorService,
  factory: TokenInterceptorService.ɵfac
});

/***/ }),

/***/ 1508:
/*!*********************************************!*\
  !*** ./src/app/core/login/login.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session/session.service */ 930);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 3934);








class LoginService {
  constructor(_http, _router, _sessionService, _userService) {
    this._http = _http;
    this._router = _router;
    this._sessionService = _sessionService;
    this._userService = _userService;
    // TODO replace for config const
    this.URL_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users/';
    this.URL_CHECK_EXISTING_USER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'login/';
    this.logged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
    // Do logout in browser and app when leaves the session
    this._sessionService.logout$.subscribe(() => {
      this.logout();
    });
  }
  login(form) {
    const $loginResponse = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._http.post(this.URL_CHECK_EXISTING_USER, form).subscribe(response => {
      if (typeof response === 'object') {
        console.log('user logged', response.user);
        // we store the user in the service
        this._userService.activeUser = response.user;
        // we keep the token of the session
        const storageMethod = form.keepSession ? localStorage : sessionStorage;
        this._sessionService.setStorageMethod(storageMethod);
        this._sessionService.startSession(response.token);
        $loginResponse.next(response.user);
        // we notified the observers
        this.logged$.next(response.user);
      } else {
        // If request was ok, but not user was found, response is undefined
        $loginResponse.next(response);
        // we notified the observers
        this.logged$.next(response);
      }
    }, error => {
      $loginResponse.error(error);
    });
    return $loginResponse;
  }
  recoverActiveUser() {
    const $userResponse = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    // we get it from the BE using the token in the sessionStorage
    this.getUser(this._sessionService.getIdToken()).subscribe(user => {
      this._userService.activeUser = user;
      $userResponse.next(this._userService.activeUser);
    }, error => {
      if (error.status == 401) {
        this._sessionService.removeToken();
      }
      console.log(error);
      $userResponse.error(error);
    });
    return $userResponse;
  }
  isLoggedIn() {
    return this._sessionService._isThereActiveUser();
  }
  getUser(id) {
    return this._http.get(this.URL_API + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(res => {
      if (!res) {
        throw new Error('User not found');
      }
      return res;
    }));
  }
  logout() {
    this._userService.activeUser = undefined;
    this._sessionService.removeToken(true);
    this._sessionService.stopInterval();
    this.logged$.next(undefined);
    this._router.navigate(['home']);
  }
}
LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac
});

/***/ }),

/***/ 386:
/*!********************************************************!*\
  !*** ./src/app/core/services/pwa-installer.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PWAInstallerService: () => (/* binding */ PWAInstallerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class PWAInstallerService {
  constructor(locale) {
    this.locale = locale;
  }
  loadScript() {
    let body = document.body;
    let script = document.createElement('script');
    script.innerHTML = 'Install APP';
    script.src = '/' + this.locale + '/pwa-installer.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
PWAInstallerService.ɵfac = function PWAInstallerService_Factory(t) {
  return new (t || PWAInstallerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};
PWAInstallerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PWAInstallerService,
  factory: PWAInstallerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3934:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class UserService {
  constructor() {}
  get activeUser() {
    return this._activeUser;
  }
  set activeUser(value) {
    this._activeUser = value;
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)();
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 930:
/*!*************************************************!*\
  !*** ./src/app/core/session/session.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionService: () => (/* binding */ SessionService),
/* harmony export */   SessionServiceConfig: () => (/* binding */ SessionServiceConfig)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class SessionServiceConfig {}
class SessionService {
  constructor(_config) {
    this._config = _config;
    this.secondsCountDown = 10;
    this.showTimeOutPopUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.logout$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.sessionSeconds = this._config && this._config.MINUTES_TO_SHOW_COUNTDOWN ? this._config.MINUTES_TO_SHOW_COUNTDOWN * 60 : undefined;
    console.log(this.sessionSeconds + ' seconds of session');
  }
  setStorageMethod(storageMethod) {
    this._storageMethod = storageMethod;
  }
  _isThereActiveUser() {
    return this._storageMethod ? !!this._storageMethod.getItem('activeUserToken') : !!sessionStorage.getItem('activeUserToken') || !!localStorage.getItem('activeUserToken');
  }
  _findStorageMethod() {
    return sessionStorage.getItem('activeUserToken') ? sessionStorage : localStorage;
  }
  getStorageMethod() {
    return this._storageMethod;
  }
  removeToken(removeAll) {
    if (removeAll) {
      sessionStorage.removeItem('activeUserToken');
      localStorage.removeItem('activeUserToken');
    } else {
      this._storageMethod.removeItem('activeUserToken');
    }
  }
  startSession(token) {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod();
    }
    this._storageMethod.setItem('activeUserToken', token);
    this._initInterval();
  }
  getToken() {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod();
      return this._storageMethod.getItem('activeUserToken');
    } else if (this._storageMethod) {
      return this._storageMethod.getItem('activeUserToken');
    }
    return '';
  }
  getIdToken() {
    // In case of first loading the app but having the user in the localStorage or sessionStorage
    if (!this._storageMethod && this._isThereActiveUser()) {
      this._storageMethod = this._findStorageMethod();
    }
    const idToken = this._storageMethod.getItem('activeUserToken');
    var base64Url = idToken.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var rawPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const payload = JSON.parse(rawPayload);
    return payload ? payload.subject : payload;
  }
  _initInterval() {
    this._interval = setInterval(() => {
      --this.sessionSeconds;
      if (this.sessionSeconds < this.secondsCountDown) {
        if (this.sessionSeconds === this.secondsCountDown - 1) {
          this.showTimeOutPopUp$.next(this.sessionSeconds);
        }
        if (this.sessionSeconds === 0) {
          this.stopInterval();
          this.logout$.next();
        }
      }
    }, 1000);
  }
  reset() {
    this.sessionSeconds = this._config ? this._config.MINUTES_TO_SHOW_COUNTDOWN * 60 : undefined;
  }
  stopInterval() {
    if (this._interval) {
      this.reset();
      clearInterval(this._interval);
    }
  }
}
SessionService.ɵfac = function SessionService_Factory(t) {
  return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SessionServiceConfig, 8));
};
SessionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SessionService,
  factory: SessionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6052:
/*!********************************************************************!*\
  !*** ./src/app/core/shared/error-dialog/error-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialogComponent: () => (/* binding */ ErrorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class ErrorDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
  }
}
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) {
  return new (t || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
ErrorDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ErrorDialogComponent,
  selectors: [["app-error-dialog"]],
  decls: 8,
  vars: 2,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_ok_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_ERROR_DIALOG_ERROR_DIALOG_COMPONENT_TS_1 = goog.getMsg("Ok");
      i18n_0 = MSG_EXTERNAL_ok_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_ERROR_DIALOG_ERROR_DIALOG_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@ok_button␟be5c752b58791dd799bc5d5482d4351e06f18673␟8720977247725652816:Ok`;
    }
    return [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "true", "cdkFocusInitial", "", "color", "basic", 1, "button", "border-1", "mt-3"], i18n_0];
  },
  template: function ErrorDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 729:
/*!********************************************************************************************************!*\
  !*** ./src/app/core/shared/extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtraFieldsInfoBottomSheetComponent: () => (/* binding */ ExtraFieldsInfoBottomSheetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);



class ExtraFieldsInfoBottomSheetComponent {
  constructor(_bottomSheetRef) {
    this._bottomSheetRef = _bottomSheetRef;
  }
  closePanel(event) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
ExtraFieldsInfoBottomSheetComponent.ɵfac = function ExtraFieldsInfoBottomSheetComponent_Factory(t) {
  return new (t || ExtraFieldsInfoBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetRef));
};
ExtraFieldsInfoBottomSheetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ExtraFieldsInfoBottomSheetComponent,
  selectors: [["app-extra-fields-info-bottom-sheet"]],
  decls: 19,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4802328339139610724$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_1 = goog.getMsg("In {$startItalicText}mySuitcase{$closeItalicText} we help you to pack your suitcase for your trip according to the options your configure while you create your suitcase, providing suggestions of items that might be useful for a trip of those characteristics. ", {
        "startItalicText": "\uFFFD#7\uFFFD",
        "closeItalicText": "\uFFFD/#7\uFFFD"
      }, {
        original_code: {
          "startItalicText": "<i>",
          "closeItalicText": "</i>"
        }
      });
      i18n_0 = MSG_EXTERNAL_4802328339139610724$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟802f5800e4abf10a8986e01d094730f9bd1a65e3␟4802328339139610724:In ${"\uFFFD#7\uFFFD"}:START_ITALIC_TEXT:mySuitcase${"\uFFFD/#7\uFFFD"}:CLOSE_ITALIC_TEXT: we help you to pack your suitcase for your trip according to the options your configure while you create your suitcase, providing suggestions of items that might be useful for a trip of those characteristics. `;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1636852395788768508$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_3 = goog.getMsg("Another thing that help us to make right suggestions is some personal data as the age or the gender");
      i18n_2 = MSG_EXTERNAL_1636852395788768508$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟612c01fc906626a58ec7e0c9baea0c33d316e9e9␟1636852395788768508:Another thing that help us to make right suggestions is some personal data as the age or the gender`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7239051578676116021$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_5 = goog.getMsg("For instance, if you are 40 years old man, its possible that you could need a shave machine, or if your are 80 years old you could use a walking stick, so that you will find it as suggested item when making up your list.{$startTagMatIcon}elderly_woman{$closeTagMatIcon}{$startTagMatIcon}elderly{$closeTagMatIcon}", {
        "startTagMatIcon": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]",
        "closeTagMatIcon": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"
      }, {
        original_code: {
          "startTagMatIcon": "<mat-icon class=\"icon\">",
          "closeTagMatIcon": "</mat-icon>"
        }
      });
      i18n_4 = MSG_EXTERNAL_7239051578676116021$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟2a3f0c731919c44e4eb62edb4b3963657c08ae02␟7239051578676116021:For instance, if you are 40 years old man, its possible that you could need a shave machine, or if your are 80 years old you could use a walking stick, so that you will find it as suggested item when making up your list.${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_MAT_ICON:elderly_woman${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_MAT_ICON:${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_MAT_ICON:elderly${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_MAT_ICON:`;
    }
    i18n_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_4);
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5839694268890626946$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_7 = goog.getMsg("Nevertheless, you will always be able to discard such a suggestions or to add any new item that does not appear as suggestion.");
      i18n_6 = MSG_EXTERNAL_5839694268890626946$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:␟7bfcc571a1d74f738e47667407a25ef8a185cc8f␟5839694268890626946:Nevertheless, you will always be able to discard such a suggestions or to add any new item that does not appear as suggestion.`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_247410775143681592$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_9 = goog.getMsg("Little by little we will improve our suggestions, so if you would like to enjoy of {$startTagStrong}more precise suggestions{$closeTagStrong} add some more extra fields!", {
        "startTagStrong": "\uFFFD#18\uFFFD",
        "closeTagStrong": "\uFFFD/#18\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_8 = MSG_EXTERNAL_247410775143681592$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_EXTRA_FIELDS_INFO_BOTTOM_SHEET_EXTRA_FIELDS_INFO_BOTTOM_SHEET_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟79b75a6be5480e449a02eb76a8f3724784881f7d␟247410775143681592:Little by little we will improve our suggestions, so if you would like to enjoy of ${"\uFFFD#18\uFFFD"}:START_TAG_STRONG:more precise suggestions${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_STRONG: add some more extra fields!`;
    }
    return [[1, "bottom-sheet-wrapper"], ["matTooltip", "Cerrar", 1, "nav-link", "close", 3, "click"], [1, "bottom-sheet-content"], i18n_0, i18n_2, i18n_4, [1, "icon"], i18n_6, i18n_8];
  },
  template: function ExtraFieldsInfoBottomSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtraFieldsInfoBottomSheetComponent_Template_a_click_1_listener($event) {
        return ctx.closePanel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 6)(13, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n}\n\n.bottom-sheet-wrapper[_ngcontent-%COMP%] {\n  min-height: 400px;\n  max-width: 550px;\n}\n.bottom-sheet-wrapper[_ngcontent-%COMP%]   .bottom-sheet-content[_ngcontent-%COMP%] {\n  padding: 40px;\n  font-size: 16px;\n  font-family: cursive;\n  color: darksalmon;\n}\n.bottom-sheet-wrapper[_ngcontent-%COMP%]   .bottom-sheet-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n}\n.bottom-sheet-wrapper[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  color: #D88A83;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zaGFyZWQvZXh0cmEtZmllbGRzLWluZm8tYm90dG9tLXNoZWV0L2V4dHJhLWZpZWxkcy1pbmZvLWJvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUVBLFlBQUE7QUFLQSxnQkFBQTtBQUtBLG9CQUFBO0FBZ0JBOzs7O1NBQUE7QUFPQSxpQkFBQTtBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUM3QkY7O0FBYkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFnQko7O0FBYkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBZ0JKO0FBZEk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFnQlI7QUFkUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWdCWjtBQWJJO0VBQ0ksY0RUUTtBQ3dCaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb21tb24gdmFyaWFibGVzIGZvciBhbGwgdGhlIGFwcCAqL1xuXG4vKiBTY3JlZW5zICovXG4kZGVza3RvcDogOTkycHg7XG4kdGFibGV0OiAgNzY4cHg7XG4kbW9iaWxlOiAgNTc2cHg7XG5cbi8qIEZvbnQgZmFtaWx5ICovXG4kdGl0bGUtZm9udDogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuJHRleHQtZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cblxuLyogQ29sb3IgdmFyaWFibGVzICovXG4kdGl0bGUtY29sb3I6ICMyYTJhMmE7XG4kdGV4dC1jb2xvcjogIzg4ODg4ODtcbiRwcmltYXJ5LWNvbG9yOiAjRDg4QTgzO1xuJHNlY29uZGFyeS1jb2xvcjogI0JBNkM2NTtcbiR0ZXJ0aWFyeS1jb2xvcjogIzM5NDM1OTtcbiRsaW5rLWNvbG9yLXNlY29uZGFyeTogIzAwN2JmZjtcblxuJGVycm9yLWNvbG9yOiAjYzI0ODNkO1xuJHN1Y2Nlc3MtY29sb3I6ICMyZDYzMzk7XG5cblxuJGJsYWNrOiAjMjQyNDI5O1xuJGxpbmstY29sb3I6ICM3Nzc3Nzc7XG4kd2hpdGU6ICNmZmY7XG5cbi8qICNEODhBODNcbiNCQTZDNjVcbiNGMkJFOERcbiMzOTQzNTlcbiMzMDMyNDIgKi9cblxuXG4vKiBHb29nbGUgZm9udHMgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDo3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAnKTtcblxuXG5cbi8vIFNoYXJlZCBzdHlsZXNcbi5uYXYtbGlua3tcbiAgY29sb3I6IHVuc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiRkZWZhdWx0LXBhZGRpbmc6IDIwcHg7XG4kbWluLWhlYWRlci1oZWlnaHQ6IDExMHB4O1xuJG1heC1mb290ZXItaGVpZ2h0OiAxNzVweDtcbiRtYXgtZm9vdGVyLWhlaWdodC1mdWxsLXNjcmVlbjogMTQwcHg7XG5cbi8vIEZPTlQtU0laRVxuJGZvbnQtc2l6ZS1iaWcteHg6IDI0cHg7XG4kZm9udC1zaXplLWJpZy14OiAyMHB4O1xuJGZvbnQtc2l6ZS1iaWc6IDE4cHg7XG4kZm9udC1zaXplLW5vcm1hbC14OiAxNnB4O1xuJGZvbnQtc2l6ZS1ub3JtYWw6IDE0cHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14OiAxMHB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14eDogOXB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14eHg6IDhweDtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tc2hlZXQtd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcblxuICAgIC5ib3R0b20tc2hlZXQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgIGNvbG9yOiBkYXJrc2FsbW9uO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbG9zZSAge1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1584:
/*!*******************************************************************!*\
  !*** ./src/app/core/shared/footer/containers/footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class FooterComponent {
  constructor(_router) {
    this._router = _router;
  }
  goTo(path) {
    this._router.navigate([path]);
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["footer-component"]],
  decls: 23,
  vars: 0,
  consts: [[1, "footer-area"], [1, "container"], [1, "footer-bottom"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-sm-12", "footer-text", "m-0", "text-center", "text-lg-left"], ["href", "https://colorlib.com", "target", "_blank"], ["href", ""], [1, "col-lg-4", "col-sm-12", "footer-social", "text-center", "text-lg-right"], ["href", "#"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Copyright MySuitcase \u00A9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2020 All rights reserved | Template by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Colorlib");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Terms of use");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cookies policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4716:
/*!*****************************************************!*\
  !*** ./src/app/core/shared/footer/footer.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterModule: () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _containers_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/footer.component */ 1584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class FooterModule {
  constructor() {}
}
FooterModule.ɵfac = function FooterModule_Factory(t) {
  return new (t || FooterModule)();
};
FooterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FooterModule
});
FooterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [_containers_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    exports: [_containers_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 3601:
/*!******************************************************************!*\
  !*** ./src/app/core/shared/info-dialog/info-dialog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoDialogComponent: () => (/* binding */ InfoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class InfoDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
  }
}
InfoDialogComponent.ɵfac = function InfoDialogComponent_Factory(t) {
  return new (t || InfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
InfoDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InfoDialogComponent,
  selectors: [["app-info-dialog"]],
  decls: 10,
  vars: 2,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_ok_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_INFO_DIALOG_INFO_DIALOG_COMPONENT_TS_1 = goog.getMsg("Ok");
      i18n_0 = MSG_EXTERNAL_ok_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_INFO_DIALOG_INFO_DIALOG_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@ok_button␟be5c752b58791dd799bc5d5482d4351e06f18673␟8720977247725652816:Ok`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_cancel_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_INFO_DIALOG_INFO_DIALOG_COMPONENT_TS_3 = goog.getMsg("Cancel");
      i18n_2 = MSG_EXTERNAL_cancel_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_INFO_DIALOG_INFO_DIALOG_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:@@cancel_button␟d7b35c384aecd25a516200d6921836374613dfe7␟2159130950882492111:Cancel`;
    }
    return [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "true", "cdkFocusInitial", "", "color", "basic", 1, "button", "border-1", "mt-3"], i18n_0, ["mat-button", "", "mat-dialog-close", "false", "cdkFocusInitial", "", "color", "basic", 1, "button", "border-1", "mt-3"], i18n_2];
  },
  template: function InfoDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 8882:
/*!*******************************************************************!*\
  !*** ./src/app/core/shared/navbar/containers/navbar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../session/session.service */ 930);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../login/login.service */ 1508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);








const _c24 = function () {
  return ["/admin"];
};
function NavBarComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 28)(1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c24));
  }
}
const _c29 = function () {
  return ["/home"];
};
const _c30 = function () {
  return {};
};
function NavBarComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c29))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c30))("fragment", ctx_r1.loginService.isLoggedIn() ? "mySuitcases" : "");
  }
}
const _c35 = function () {
  return ["/settings"];
};
function NavBarComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12)(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c35));
  }
}
function NavBarComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_li_23_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39)(1, "a", 40)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c24));
  }
}
function NavBarComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 31)(1, "a", 41)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c29))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c30))("fragment", ctx_r5.loginService.isLoggedIn() ? "mySuitcases" : "");
  }
}
function NavBarComponent_li_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12)(1, "a", 42)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c35));
  }
}
function NavBarComponent_li_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_li_44_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 43)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function NavBarComponent_li_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 44)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_li_45_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.showLanguages = !ctx_r14.showLanguages);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NavBarComponent_li_45_div_4_Template, 5, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.showLanguages);
  }
}
const _c54 = function () {
  return ["/contact"];
};
class NavBarComponent {
  constructor(_router, sessionService, loginService) {
    this._router = _router;
    this.sessionService = sessionService;
    this.loginService = loginService;
    this.showLanguages = false;
  }
  goTo(path, data) {
    this._router.navigate(data ? [path, data] : [path]);
  }
  goHome() {
    if (this._router.url !== '/home') {
      this.goTo('');
    } else {
      window.location.reload();
    }
  }
  isProdMode() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
  }
  logout() {
    this.sessionService.stopInterval();
    this.loginService.logout();
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_session_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService));
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["navbar-component"]],
  decls: 46,
  vars: 31,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7160858508459357537$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_1 = goog.getMsg("Inform us regarding any incident or suggestion");
      i18n_0 = MSG_EXTERNAL_7160858508459357537$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟cad3fe66c0a1d4f9cc19865175bfd1710ff1f1c7␟7160858508459357537:Inform us regarding any incident or suggestion`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7922989125096435449$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_3 = goog.getMsg("Contact");
      i18n_2 = MSG_EXTERNAL_7922989125096435449$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟34746fb1c7f3d2194d99652bdff89e6e14c9c4f4␟7922989125096435449:Contact`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6746960539277572330$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_5 = goog.getMsg("Subscribe to be up to date by retriving all the notifications");
      i18n_4 = MSG_EXTERNAL_6746960539277572330$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟938e098241c5ab7a46aa2a4315573e646b2790c2␟6746960539277572330:Subscribe to be up to date by retriving all the notifications`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1144407473317535723$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_7 = goog.getMsg("Subscribe");
      i18n_6 = MSG_EXTERNAL_1144407473317535723$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:␟d0336848b0c375a1c25ba369b3481ee383217a4f␟1144407473317535723:Subscribe`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_9 = goog.getMsg("English");
      i18n_8 = MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:@@English␟a0843de0a64adcc7ee6a946408b6876cd8abdcae␟5866254605255506989:English`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_11 = goog.getMsg("English");
      i18n_10 = MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_11;
    } else {
      i18n_10 = $localize`:@@English␟a0843de0a64adcc7ee6a946408b6876cd8abdcae␟5866254605255506989:English`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_13 = goog.getMsg("Spanish");
      i18n_12 = MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_13;
    } else {
      i18n_12 = $localize`:@@Spanish␟1b2fa65763b744291e832a3c5fa0ce8641da2911␟5190825892106392539:Spanish`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_15 = goog.getMsg("Spanish");
      i18n_14 = MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_15;
    } else {
      i18n_14 = $localize`:@@Spanish␟1b2fa65763b744291e832a3c5fa0ce8641da2911␟5190825892106392539:Spanish`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7160858508459357537$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_17 = goog.getMsg("Inform us regarding any incident or suggestion");
      i18n_16 = MSG_EXTERNAL_7160858508459357537$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_17;
    } else {
      i18n_16 = $localize`:␟cad3fe66c0a1d4f9cc19865175bfd1710ff1f1c7␟7160858508459357537:Inform us regarding any incident or suggestion`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6746960539277572330$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_19 = goog.getMsg("Subscribe to be up to date by retriving all the notifications");
      i18n_18 = MSG_EXTERNAL_6746960539277572330$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS_19;
    } else {
      i18n_18 = $localize`:␟938e098241c5ab7a46aa2a4315573e646b2790c2␟6746960539277572330:Subscribe to be up to date by retriving all the notifications`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3879213751621254090$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__21 = goog.getMsg("Admin area");
      i18n_20 = MSG_EXTERNAL_3879213751621254090$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__21;
    } else {
      i18n_20 = $localize`:␟bceb1370cd6010bedaa6f50894b9f61317c3ac7b␟3879213751621254090:Admin area`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5041354590769758251$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__23 = goog.getMsg("Admin");
      i18n_22 = MSG_EXTERNAL_5041354590769758251$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__23;
    } else {
      i18n_22 = $localize`:␟408cb6073e60c5d966296a3207fc596adca75e01␟5041354590769758251:Admin`;
    }
    let i18n_25;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3734679741987879725$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__26 = goog.getMsg("Have a look to the list of your already created suitcases");
      i18n_25 = MSG_EXTERNAL_3734679741987879725$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__26;
    } else {
      i18n_25 = $localize`:␟33fb7a0b7a82e4185b22b1e6a7fc73d44ee734d7␟3734679741987879725:Have a look to the list of your already created suitcases`;
    }
    let i18n_27;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8526177210456112054$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__28 = goog.getMsg("My suitcases");
      i18n_27 = MSG_EXTERNAL_8526177210456112054$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__28;
    } else {
      i18n_27 = $localize`:␟20e6397af2875eae30e7048026c8beeae5845bb5␟8526177210456112054:My suitcases`;
    }
    let i18n_31;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3566934824951739663$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__32 = goog.getMsg("Manage your profile and other settings");
      i18n_31 = MSG_EXTERNAL_3566934824951739663$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__32;
    } else {
      i18n_31 = $localize`:␟9e0296904e0d4044af817747c5a950ee2b33ef69␟3566934824951739663:Manage your profile and other settings`;
    }
    let i18n_33;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4915431133669985304$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__34 = goog.getMsg("Profile");
      i18n_33 = MSG_EXTERNAL_4915431133669985304$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__34;
    } else {
      i18n_33 = $localize`:␟994363f08f9fbfa3b3994ff7b35c6904fdff18d8␟4915431133669985304:Profile`;
    }
    let i18n_36;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7507948636555938109$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__37 = goog.getMsg("Log out");
      i18n_36 = MSG_EXTERNAL_7507948636555938109$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__37;
    } else {
      i18n_36 = $localize`:␟3fdc751b264ca9998e1542fcf5794e274cd56344␟7507948636555938109:Log out`;
    }
    let i18n_38;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3797778920049399855$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__39 = goog.getMsg("Logout");
      i18n_38 = MSG_EXTERNAL_3797778920049399855$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__39;
    } else {
      i18n_38 = $localize`:␟bb694b49d408265c91c62799c2b3a7e3151c824d␟3797778920049399855:Logout`;
    }
    let i18n_40;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3879213751621254090$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__41 = goog.getMsg("Admin area");
      i18n_40 = MSG_EXTERNAL_3879213751621254090$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__41;
    } else {
      i18n_40 = $localize`:␟bceb1370cd6010bedaa6f50894b9f61317c3ac7b␟3879213751621254090:Admin area`;
    }
    let i18n_42;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3734679741987879725$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__43 = goog.getMsg("Have a look to the list of your already created suitcases");
      i18n_42 = MSG_EXTERNAL_3734679741987879725$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__43;
    } else {
      i18n_42 = $localize`:␟33fb7a0b7a82e4185b22b1e6a7fc73d44ee734d7␟3734679741987879725:Have a look to the list of your already created suitcases`;
    }
    let i18n_44;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3566934824951739663$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__45 = goog.getMsg("Manage your profile and other settings");
      i18n_44 = MSG_EXTERNAL_3566934824951739663$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__45;
    } else {
      i18n_44 = $localize`:␟9e0296904e0d4044af817747c5a950ee2b33ef69␟3566934824951739663:Manage your profile and other settings`;
    }
    let i18n_46;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7507948636555938109$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__47 = goog.getMsg("Log out");
      i18n_46 = MSG_EXTERNAL_7507948636555938109$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__47;
    } else {
      i18n_46 = $localize`:␟3fdc751b264ca9998e1542fcf5794e274cd56344␟7507948636555938109:Log out`;
    }
    let i18n_48;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2826581353496868063$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__49 = goog.getMsg("Language");
      i18n_48 = MSG_EXTERNAL_2826581353496868063$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS__49;
    } else {
      i18n_48 = $localize`:␟fe46ccaae902ce974e2441abe752399288298619␟2826581353496868063:Language`;
    }
    let i18n_50;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS___51 = goog.getMsg("English");
      i18n_50 = MSG_EXTERNAL_English$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS___51;
    } else {
      i18n_50 = $localize`:@@English␟a0843de0a64adcc7ee6a946408b6876cd8abdcae␟5866254605255506989:English`;
    }
    let i18n_52;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS___53 = goog.getMsg("Spanish");
      i18n_52 = MSG_EXTERNAL_Spanish$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_NAVBAR_CONTAINERS_NAVBAR_COMPONENT_TS___53;
    } else {
      i18n_52 = $localize`:@@Spanish␟1b2fa65763b744291e832a3c5fa0ce8641da2911␟5190825892106392539:Spanish`;
    }
    return [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg"], [1, "container", "box_1620"], [1, "navbar-brand", 3, "click"], ["src", "assets/img/logo/logo.png", "alt", "", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [1, "nav", "navbar-nav", "menu_nav", "menu_nav--texts", "justify-content-end"], ["class", "nav-item active", 3, "routerLink", 4, "ngIf"], ["class", "nav-item active", 3, "routerLink", "queryParams", "fragment", 4, "ngIf"], [1, "nav-item", "active"], ["matTooltip", i18n_0, 1, "nav-link", 3, "routerLink"], i18n_2, ["class", "nav-item active", 4, "ngIf"], ["matTooltip", i18n_4, 1, "nav-link", 3, "routerLink", "queryParams", "fragment"], i18n_6, ["class", "nav-item active", 3, "click", 4, "ngIf"], ["matTooltip", i18n_8, "href", "/", 1, "nav-link"], i18n_10, ["matTooltip", i18n_12, "href", "/es", 1, "nav-link"], i18n_14, [1, "nav", "navbar-nav", "menu_nav", "menu_nav--icons", "justify-content-end"], ["class", "nav-item active", "routerLinkActive", "active-link", 3, "routerLink", 4, "ngIf"], ["matTooltip", i18n_16, "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink"], ["matTooltip", i18n_18, 1, "nav-link", 3, "routerLink", "queryParams", "fragment"], ["class", "nav-item active language-container", 4, "ngIf"], [1, "nav-item", "active", 3, "routerLink"], ["matTooltip", i18n_20, 1, "nav-link"], i18n_22, [1, "nav-item", "active", 3, "routerLink", "queryParams", "fragment"], ["matTooltip", i18n_25, 1, "nav-link"], i18n_27, ["matTooltip", i18n_31, 1, "nav-link", 3, "routerLink"], i18n_33, [1, "nav-item", "active", 3, "click"], ["matTooltip", i18n_36, 1, "nav-link"], i18n_38, ["routerLinkActive", "active-link", 1, "nav-item", "active", 3, "routerLink"], ["matTooltip", i18n_40, 1, "nav-link"], ["matTooltip", i18n_42, 1, "nav-link"], ["matTooltip", i18n_44, "routerLinkActive", "active-link", 1, "nav-link", 3, "routerLink"], ["matTooltip", i18n_46, 1, "nav-link"], [1, "nav-item", "active", "language-container"], ["matTooltip", i18n_48, 1, "nav-link", 3, "click"], ["class", "language-flags", 4, "ngIf"], [1, "language-flags"], ["matTooltip", i18n_50, "matTooltipPosition", "left", "href", "/en-US/", "mat-menu-item", "", 1, "nav-link"], ["alt", "UK flag", "src", "assets/img/lang/uk-flag-icon.png", 1, "lang-img"], ["matTooltip", i18n_52, "matTooltipPosition", "left", "href", "/es/", "mat-menu-item", "", 1, "nav-link"], ["alt", "Spain flag", "src", "assets/img/lang/spain-flag-icon.png", 1, "lang-img"]];
  },
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_4_listener() {
        return ctx.goHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 7)(8, "span", 7)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NavBarComponent_li_12_Template, 3, 2, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NavBarComponent_li_15_Template, 3, 5, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 12)(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](18, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, NavBarComponent_li_19_Template, 3, 2, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 12)(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](22, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NavBarComponent_li_23_Template, 3, 0, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li")(25, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](26, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li")(28, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](29, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ul", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NavBarComponent_li_31_Template, 4, 2, "li", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, NavBarComponent_li_34_Template, 4, 5, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li", 12)(36, "a", 25)(37, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "support");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, NavBarComponent_li_39_Template, 4, 2, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "li", 12)(41, "a", 26)(42, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "notificationsactive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, NavBarComponent_li_44_Template, 4, 0, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, NavBarComponent_li_45_Template, 5, 1, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 17, ctx.loginService.logged$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 19, ctx.loginService.logged$).admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c54));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c29))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c30))("fragment", "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 21, ctx.loginService.logged$) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 23, ctx.loginService.logged$).admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c54));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c29))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c30))("fragment", "notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.isLoggedIn());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isProdMode());
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  min-height: calc(110px - 20px);\n  margin-bottom: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  max-width: 100px;\n}\n\n.menu_nav--icons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c2483d;\n}\n\n.header_area[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.language-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-container[_ngcontent-%COMP%]   .language-flags[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  right: 0;\n}\n\n.lang-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zaGFyZWQvbmF2YmFyL2NvbnRhaW5lcnMvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBRUEsWUFBQTtBQUtBLGdCQUFBO0FBS0Esb0JBQUE7QUFnQkE7Ozs7U0FBQTtBQU9BLGlCQUFBO0FBT0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQzdCRjs7QUFiQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJEeUNnQjtBQ3pCbEI7O0FBYkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQVpFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZUo7O0FBVkU7RUFDRSxjQUFBO0FBYUo7O0FBVEE7RUFDRSxpQkFBQTtBQVlGOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjtBQVZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVlKOztBQVJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFXRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbW1vbiB2YXJpYWJsZXMgZm9yIGFsbCB0aGUgYXBwICovXG5cbi8qIFNjcmVlbnMgKi9cbiRkZXNrdG9wOiA5OTJweDtcbiR0YWJsZXQ6ICA3NjhweDtcbiRtb2JpbGU6ICA1NzZweDtcblxuLyogRm9udCBmYW1pbHkgKi9cbiR0aXRsZS1mb250OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4kdGV4dC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuXG4vKiBDb2xvciB2YXJpYWJsZXMgKi9cbiR0aXRsZS1jb2xvcjogIzJhMmEyYTtcbiR0ZXh0LWNvbG9yOiAjODg4ODg4O1xuJHByaW1hcnktY29sb3I6ICNEODhBODM7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQkE2QzY1O1xuJHRlcnRpYXJ5LWNvbG9yOiAjMzk0MzU5O1xuJGxpbmstY29sb3Itc2Vjb25kYXJ5OiAjMDA3YmZmO1xuXG4kZXJyb3ItY29sb3I6ICNjMjQ4M2Q7XG4kc3VjY2Vzcy1jb2xvcjogIzJkNjMzOTtcblxuXG4kYmxhY2s6ICMyNDI0Mjk7XG4kbGluay1jb2xvcjogIzc3Nzc3NztcbiR3aGl0ZTogI2ZmZjtcblxuLyogI0Q4OEE4M1xuI0JBNkM2NVxuI0YyQkU4RFxuIzM5NDM1OVxuIzMwMzI0MiAqL1xuXG5cbi8qIEdvb2dsZSBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOjcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCcpO1xuXG5cblxuLy8gU2hhcmVkIHN0eWxlc1xuLm5hdi1saW5re1xuICBjb2xvcjogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuJGRlZmF1bHQtcGFkZGluZzogMjBweDtcbiRtaW4taGVhZGVyLWhlaWdodDogMTEwcHg7XG4kbWF4LWZvb3Rlci1oZWlnaHQ6IDE3NXB4O1xuJG1heC1mb290ZXItaGVpZ2h0LWZ1bGwtc2NyZWVuOiAxNDBweDtcblxuLy8gRk9OVC1TSVpFXG4kZm9udC1zaXplLWJpZy14eDogMjRweDtcbiRmb250LXNpemUtYmlnLXg6IDIwcHg7XG4kZm9udC1zaXplLWJpZzogMThweDtcbiRmb250LXNpemUtbm9ybWFsLXg6IDE2cHg7XG4kZm9udC1zaXplLW5vcm1hbDogMTRweDtcbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLXNtYWxsLXg6IDEwcHg7XG4kZm9udC1zaXplLXNtYWxsLXh4OiA5cHg7XG4kZm9udC1zaXplLXNtYWxsLXh4eDogOHB4O1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogY2FsYygjeyRtaW4taGVhZGVyLWhlaWdodH0gLSAjeyRkZWZhdWx0LXBhZGRpbmd9KTtcbiAgbWFyZ2luLWJvdHRvbTogJGRlZmF1bHQtcGFkZGluZztcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4ubWVudV9uYXYtLWljb25zIHtcbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgbWF0LWljb24ge1xuICAgIGNvbG9yOiAjYzI0ODNkO1xuICB9XG59XG5cbi5oZWFkZXJfYXJlYSAubmF2YmFyIC5uYXYgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubGFuZ3VhZ2UtZmxhZ3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuLmxhbmctaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9557:
/*!*****************************************************!*\
  !*** ./src/app/core/shared/navbar/navbar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarModule: () => (/* binding */ NavBarModule)
/* harmony export */ });
/* harmony import */ var _containers_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/navbar.component */ 8882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






class NavBarModule {
  constructor() {}
}
NavBarModule.ɵfac = function NavBarModule_Factory(t) {
  return new (t || NavBarModule)();
};
NavBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NavBarModule
});
NavBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
  // Angular Material
  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavBarModule, {
    declarations: [_containers_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
    // Angular Material
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule],
    exports: [_containers_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent]
  });
})();

/***/ }),

/***/ 5979:
/*!**********************************************************************!*\
  !*** ./src/app/core/shared/pwa-installer/pwa-installer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PwaInstallerComponent: () => (/* binding */ PwaInstallerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_pwa_installer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/pwa-installer.service */ 386);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);



class PwaInstallerComponent {
  constructor(_pwaInstallerService) {
    this._pwaInstallerService = _pwaInstallerService;
  }
  ngAfterViewInit() {
    this._pwaInstallerService.loadScript();
  }
}
PwaInstallerComponent.ɵfac = function PwaInstallerComponent_Factory(t) {
  return new (t || PwaInstallerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pwa_installer_service__WEBPACK_IMPORTED_MODULE_0__.PWAInstallerService));
};
PwaInstallerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PwaInstallerComponent,
  selectors: [["pwa-installer"]],
  decls: 5,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_install_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_PWA_INSTALLER_PWA_INSTALLER_COMPONENT_TS_1 = goog.getMsg("Install");
      i18n_0 = MSG_EXTERNAL_install_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_PWA_INSTALLER_PWA_INSTALLER_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@install_button␟dee8c41edf822a0124c80cc1e44643f947b3bc5c␟6082171864197428613:Install`;
    }
    return [["id", "install_button", "hidden", "", 1, "button", "button-hero", "mt-4", "install-button"], i18n_0, ["aria-hidden", "false", "aria-label", "Discard item"]];
  },
  template: function PwaInstallerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "install_desktop");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: [".install-button[_ngcontent-%COMP%]{ display: flex; align-items: center; width: 160px; justify-content: space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zaGFyZWQvcHdhLWluc3RhbGxlci9wd2EtaW5zdGFsbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWxsLWJ1dHRvbnsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDE2MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1782:
/*!**********************************************!*\
  !*** ./src/app/core/shared/shared.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.module */ 4716);
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.module */ 9557);
/* harmony import */ var _pwa_installer_pwa_installer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pwa-installer/pwa-installer.component */ 5979);
/* harmony import */ var _web_notification_subscriber_web_notification_subscriber_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-notification-subscriber/web-notification-subscriber.component */ 2975);
/* harmony import */ var _extra_fields_info_bottom_sheet_extra_fields_info_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component */ 729);
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ 6052);
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ 3601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);













class SharedModule {
  constructor() {}
}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
  // Angular material
  _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavBarModule, _footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ErrorDialogComponent, _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InfoDialogComponent, _pwa_installer_pwa_installer_component__WEBPACK_IMPORTED_MODULE_2__.PwaInstallerComponent, _web_notification_subscriber_web_notification_subscriber_component__WEBPACK_IMPORTED_MODULE_3__.WebNotificationSubscriberComponent, _extra_fields_info_bottom_sheet_extra_fields_info_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__.ExtraFieldsInfoBottomSheetComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
    // Angular material
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__.NavBarModule, _footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule, _pwa_installer_pwa_installer_component__WEBPACK_IMPORTED_MODULE_2__.PwaInstallerComponent, _web_notification_subscriber_web_notification_subscriber_component__WEBPACK_IMPORTED_MODULE_3__.WebNotificationSubscriberComponent, _extra_fields_info_bottom_sheet_extra_fields_info_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__.ExtraFieldsInfoBottomSheetComponent, _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_6__.InfoDialogComponent]
  });
})();

/***/ }),

/***/ 2975:
/*!**************************************************************************************************!*\
  !*** ./src/app/core/shared/web-notification-subscriber/web-notification-subscriber.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebNotificationSubscriberComponent: () => (/* binding */ WebNotificationSubscriberComponent)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ 2018);
/* harmony import */ var _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/backend-errors */ 4166);
/* harmony import */ var _const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/frontend-errors */ 1543);
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-dialog/error-dialog.component */ 6052);
/* harmony import */ var _const_frontend_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../const/frontend-messages */ 2703);
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../info-dialog/info-dialog.component */ 3601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _public_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/services/notifications.service */ 1578);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);











class WebNotificationSubscriberComponent {
  constructor(_notificationsService, _snackBar, _dialog) {
    this._notificationsService = _notificationsService;
    this._snackBar = _snackBar;
    this._dialog = _dialog;
  }
  subscribeNotifications() {
    const dialogRef = this._dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__.InfoDialogComponent, {
      height: '240px',
      width: '460px',
      hasBackdrop: true,
      data: _const_frontend_messages__WEBPACK_IMPORTED_MODULE_4__.FRONTEND_MESSAGES.CONFIRMATION_SEND_NOTIFICATION
    });
    dialogRef.afterClosed().subscribe(confirm => {
      this._notificationsService.subscribeNotifications().subscribe(() => {
        this._snackBar.open('La suscripción ha sido activada satisfactoriamente', '', {
          duration: _config_config__WEBPACK_IMPORTED_MODULE_0__.EXTENDED_SNACKBAR_TIME
        });
      }, error => {
        if (error && (error.name === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.POP_UPS_BLOCKED || error.name === _const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED)) {
          const dialogRef = this._dialog.open(_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ErrorDialogComponent, {
            height: '240px',
            width: '460px',
            hasBackdrop: true,
            data: error.name === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.POP_UPS_BLOCKED ? _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERRORS.POP_UPS_BLOCKED : _const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_ERRORS.NOTIFICATIONS_DISABLED
          });
        } else {
          this._snackBar.open('Ha habido un problema al activar las notificaciones, por favor intentelo de nuevo más tarde', '', {
            duration: _config_config__WEBPACK_IMPORTED_MODULE_0__.EXTENDED_SNACKBAR_TIME
          });
        }
      });
    });
  }
}
WebNotificationSubscriberComponent.ɵfac = function WebNotificationSubscriberComponent_Factory(t) {
  return new (t || WebNotificationSubscriberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_public_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};
WebNotificationSubscriberComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: WebNotificationSubscriberComponent,
  selectors: [["web-notification-subscriber"]],
  decls: 5,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_subscribe_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_WEB_NOTIFICATION_SUBSCRIBER_WEB_NOTIFICATION_SUBSCRIBER_COMPONENT_TS_1 = goog.getMsg("Subscribe");
      i18n_0 = MSG_EXTERNAL_subscribe_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SHARED_WEB_NOTIFICATION_SUBSCRIBER_WEB_NOTIFICATION_SUBSCRIBER_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@subscribe_button␟d0336848b0c375a1c25ba369b3481ee383217a4f␟1144407473317535723:Subscribe`;
    }
    return [[1, "button", "button-hero", "mt-4", "subscribe-button", 3, "click"], i18n_0, ["aria-hidden", "false", "aria-label", "Discard item"]];
  },
  template: function WebNotificationSubscriberComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WebNotificationSubscriberComponent_Template_button_click_0_listener() {
        return ctx.subscribeNotifications();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "subscriptions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
  styles: [".subscribe-button[_ngcontent-%COMP%]{ display: flex; align-items: center; width: 200px; justify-content: space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zaGFyZWQvd2ViLW5vdGlmaWNhdGlvbi1zdWJzY3JpYmVyL3dlYi1ub3RpZmljYXRpb24tc3Vic2NyaWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaWJlLWJ1dHRvbnsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDIwMHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 404:
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundRoutingModule: () => (/* binding */ NotFoundRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 6084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




// Root routes of this particular module: NOT-FOUND.
const routes = [{
  path: 'page-not-found',
  component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
}];
class NotFoundRoutingModule {}
NotFoundRoutingModule.ɵfac = function NotFoundRoutingModule_Factory(t) {
  return new (t || NotFoundRoutingModule)();
};
NotFoundRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NotFoundRoutingModule
});
NotFoundRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6084:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotFoundComponent {}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
  return new (t || NotFoundComponent)();
};
NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotFoundComponent,
  selectors: [["app-design"]],
  decls: 12,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7736950181132364322$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_1 = goog.getMsg("404: Page not found");
      i18n_0 = MSG_EXTERNAL_7736950181132364322$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟28f45eab1d55b8ba4415fde26e300b1ee5a2dea2␟7736950181132364322:404: Page not found`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4117539046906944576$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_3 = goog.getMsg(" Oooops, It looks like you made a wrong suitcase. Go back to the main screen to start again.");
      i18n_2 = MSG_EXTERNAL_4117539046906944576$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟58a064fe18b7f1cd11fa700cc9c445b5beee9895␟4117539046906944576: Oooops, It looks like you made a wrong suitcase. Go back to the main screen to start again.`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_back_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_5 = goog.getMsg("Go back");
      i18n_4 = MSG_EXTERNAL_back_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_NOT_FOUND_NOT_FOUND_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:@@back_button␟a67aec1c4d47cdf3a4442a19e616def78fd77388␟734934965373819800:Go back`;
    }
    return [[1, "hero-banner"], [1, "container", "mt-4"], [1, "row", "align-items-center", "text-center", "text-md-left"], [1, "col-md-6", "col-lg-5", "mb-5", "mb-md-0"], i18n_0, i18n_2, ["href", "#", 1, "button", "button-hero", "mt-4"], i18n_4, [1, "col-md-6", "col-lg-7", "col-xl-6", "offset-xl-1"], ["src", "assets/img/404/404.svg", "alt", "", 1, "img-fluid"]];
  },
  template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["section[_ngcontent-%COMP%]:after {height: 0px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbjphZnRlciB7aGVpZ2h0OiAwcHh9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7170:
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundModule: () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 6084);
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-routing.module */ 404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class NotFoundModule {
  constructor() {}
}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) {
  return new (t || NotFoundModule)();
};
NotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NotFoundModule
});
NotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotFoundRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotFoundModule, {
    declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent],
    imports: [_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__.NotFoundRoutingModule]
  });
})();

/***/ }),

/***/ 1578:
/*!**********************************************************!*\
  !*** ./src/app/public/services/notifications.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _core_const_frontend_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/const/frontend-errors */ 1543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ 1509);






const PUBLIC_VAPID_KEY = "BN_Vaz62gKS1Mi6YS-6guChhEdg8J14bupDKzgh2rgeIcTwmGiDiblm96Emmkzlbakhk8Cy5sylcII65gVfHD7E";
class NotificationsService {
  constructor(_http, _swPush) {
    this._http = _http;
    this._swPush = _swPush;
    this.ADD_SUBSCRIBER_API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'notifications/subscribe';
  }
  subscribeNotifications() {
    const $addSubscriberResponse = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    if (this._swPush.isEnabled) {
      this._swPush.requestSubscription({
        serverPublicKey: PUBLIC_VAPID_KEY
      }).then(sub => {
        console.log("Notification subscription: ", sub);
        const url = this.ADD_SUBSCRIBER_API;
        this._http.post(url, sub).subscribe(data => {
          $addSubscriberResponse.next(data);
        }, error => {
          $addSubscriberResponse.error(error);
        });
      }).catch(err => {
        console.error("Could not subscribe to notifications", err);
        $addSubscriberResponse.error(err);
      });
    } else {
      $addSubscriberResponse.error(_core_const_frontend_errors__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_ERROR_TYPES.NOTIFICATIONS_DISABLED);
    }
    return $addSubscriberResponse;
  }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) {
  return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_5__.SwPush));
};
NotificationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NotificationsService,
  factory: NotificationsService.ɵfac
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).then(() => {
  // The registration could be done by adding a script tag in the index to a specific file with this logic as sw-register.js
  // however this way is better because it waits until the app is stable and that way the user experience turns better.
  // we check if there is browser support for service workers
  if ('serviceWorker' in navigator) {
    const language = getLocale();
    const filePath = language + '/sw.js';
    navigator.serviceWorker.register(filePath, {
      scope: language + '/'
    }).then(registration => {
      console.log('registration of service worker success');
    });
  }
}).catch(err => console.error(err));
function getLocale() {
  return window.location.pathname.substring(window.location.pathname.indexOf('/'), window.location.pathname.lastIndexOf('/'));
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map