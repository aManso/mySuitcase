"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_public_public_module_ts"],{

/***/ 761:
/*!*****************************************!*\
  !*** ./src/app/core/const/languages.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Languages: () => (/* binding */ Languages)
/* harmony export */ });
const Languages = {
  en: "en-US",
  es: "es"
};

/***/ }),

/***/ 3734:
/*!***************************************************!*\
  !*** ./src/app/core/resolvers/detail-resolver.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailResolver: () => (/* binding */ DetailResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_suitcase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/suitcase.service */ 1805);






class DetailResolver {
  constructor(_http, _router, _suitcaseService) {
    this._http = _http;
    this._router = _router;
    this._suitcaseService = _suitcaseService;
  }
  /**
   * resolve method
   * @param route
   * @param state
   * Whenever you need to get the data before the component initialization, the right way to do this is to use resolver.
   * Resolver acts synchronously i.e. resolver will wait for async call to complete and only after processing the async call,
   * it will route to the respective URL. Thus, the component initialization will wait till the callback is completed.
   * Thus, if you want to do something (service call), even before the component is initialized, you have come to right place.
   */
  resolve(route, state) {
    // const dialogRef = this.dialog.open(ProgressComponent);
    const suitcaseName = route.url[route.url.length - 1].path;
    route.url[route.url.length - 1].path = this._removeSpaces(route.url[route.url.length - 1].path);
    if (this._router.getCurrentNavigation().extras.state && this._router.getCurrentNavigation().extras.state.id) {
      // if the route has as param the id, its because it is coming from the overview, so the suitcase has already been set as current
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true);
    } else {
      // In case the user is accessing straight from the url
      return this._suitcaseService.retrieveSuitcaseDetail(suitcaseName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(suitcase => this._suitcaseService.setCurrentSuitcase(suitcase)),
      // tap(() => dialogRef.close()),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false)));
    }
  }
  _removeSpaces(url) {
    return url.split(' ').join('_').toLowerCase();
  }
}
DetailResolver.ɵfac = function DetailResolver_Factory(t) {
  return new (t || DetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_suitcase_service__WEBPACK_IMPORTED_MODULE_0__.SuitcaseService));
};
DetailResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DetailResolver,
  factory: DetailResolver.ɵfac
});

/***/ }),

/***/ 1805:
/*!***************************************************!*\
  !*** ./src/app/core/services/suitcase.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuitcaseService: () => (/* binding */ SuitcaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1171);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _const_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const/languages */ 761);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/session.service */ 930);









class SuitcaseService {
  constructor(_http, localeId, _sessionService) {
    this._http = _http;
    this.localeId = localeId;
    this._sessionService = _sessionService;
    this.SAVE_SUITCASE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/save';
    this.UPDATE_SUITCASE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/update';
    this.RECOMMENDATIONS_SUITCASE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/recommendations';
    this.SUITCASE_OVERVIEW_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/overview';
    this.SUITCASE_DETAIL_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/detail/';
    this.REMOVE_SUITCASE_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'suitcase/remove';
  }
  saveSuitcase(suitcase, existing = false) {
    const $saveResponse = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const url = existing ? this.UPDATE_SUITCASE_API : this.SAVE_SUITCASE_API;
    const options = {
      reportProgress: true
    };
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpRequest('POST', url, {
      suitcase
    }, options);
    this._http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(event => {
      this.getEventMessage(event, suitcase);
      return event;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.last)()).subscribe(data => {
      this._currentSuitcase = data.body.response;
      console.log('Suitcase saved! ', data.body.response);
      $saveResponse.next();
    }, error => {
      console.log('There was a problem at saving the suitcase: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }
  // this method is an useful example of showing the progrees of a uploading or downloading file with Angular HTTP
  getEventMessage(event, file) {
    switch (event.type) {
      case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Sent:
        console.log(`Uploading file "${file.name}".`);
        break;
      case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File "${file.name}" is ${percentDone}% uploaded.`);
        break;
      case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response:
        console.log(`File "${file.name}" was completely uploaded!`);
        break;
      default:
        console.log(`File "${file.name}" surprising upload event: ${event.type}.`);
    }
  }
  setCurrentSuitcase(suitcase) {
    this._currentSuitcase = suitcase;
  }
  getCurrentSuitcase() {
    return this._currentSuitcase;
  }
  fetchRecommendations(options, pageNumber, limit) {
    const $saveResponse = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._http.post(this.RECOMMENDATIONS_SUITCASE_API, {
      options,
      pageNumber,
      limit
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(trip => {
      if (trip.baby) {
        trip.baby.items = this._getTranslatedItems(trip.baby.items);
      }
      if (trip.beach) {
        trip.beach.items = this._getTranslatedItems(trip.beach.items);
      }
      if (trip.common) {
        trip.common.items = this._getTranslatedItems(trip.common.items);
      }
      if (trip.mountain) {
        trip.mountain.items = this._getTranslatedItems(trip.mountain.items);
      }
      if (trip.pet) {
        trip.pet.items = this._getTranslatedItems(trip.pet.items);
      }
      if (trip.sport) {
        trip.sport.items = this._getTranslatedItems(trip.sport.items);
      }
      return trip;
    })).subscribe(trip => {
      console.log('Recommendations retrieved', trip);
      $saveResponse.next(trip);
    }, error => {
      console.log('There was a problem at retrieving the recommendations: ', error);
      $saveResponse.error(error);
    });
    return $saveResponse;
  }
  _getTranslatedItems(items) {
    // If current app language is not EN get the translated name
    return _const_languages__WEBPACK_IMPORTED_MODULE_1__.Languages.en != this.localeId ? items.map(item => {
      item.name = item[this.localeId + '_name'] || item.name;
      return item;
    }) : items;
  }
  // *********************** OVERVIEW ************************
  retrieveSuitcaseOverview(input) {
    const $overviewResponse = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._http.post(this.SUITCASE_OVERVIEW_API, input).subscribe(response => {
      console.log('Suitcase overview retrieved', response);
      this.totalSuitcases = response.list.length;
      $overviewResponse.next(response);
    }, error => {
      console.log('There was a problem at retrieving the overview: ', error);
      $overviewResponse.error(error);
    });
    return $overviewResponse;
  }
  removeSuitcase(id) {
    const $response = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._http.post(this.REMOVE_SUITCASE_API, {
      id
    }).subscribe(response => {
      console.log('Suitcase removed', response);
      this.totalSuitcases--;
      $response.next(response);
    }, error => {
      console.log('There was a problem at removing the suitcase: ', error);
      $response.error(error);
    });
    return $response;
  }
  // *********************** DETAIL ************************
  retrieveSuitcaseDetail(name) {
    const $detailResponse = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // this is to make sure that the dependency exist
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Authorization': `Bearer ${this._sessionService.getToken()}`
    });
    this._http.get(this.SUITCASE_DETAIL_API + name, {
      headers: headers
    }).subscribe(response => {
      console.log('Suitcase detail retrieved', response);
      $detailResponse.next(response);
      $detailResponse.complete();
    }, error => {
      console.log('There was a problem at retrieving the detail of the suitcase: ', error);
      $detailResponse.error(error);
    });
    return $detailResponse;
  }
}
SuitcaseService.ɵfac = function SuitcaseService_Factory(t) {
  return new (t || SuitcaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_session_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService, 8));
};
SuitcaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: SuitcaseService,
  factory: SuitcaseService.ɵfac
});

/***/ }),

/***/ 2778:
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicRoutingModule: () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ 2303);
/* harmony import */ var _core_resolvers_detail_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/resolvers/detail-resolver */ 3734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





// Root routes of this particular module: PUBLIC.
const routes = [
// This module has its own children. Be careful with redirection.
{
  path: '',
  component: _public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent,
  children: [{
    path: 'home',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("src_app_public_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2789)).then(m => m.HomeModule)
  }, {
    path: 'create-suitcase',
    data: {
      createMode: true
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("src_app_public_create-suitcase_create-suitcase_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-suitcase/create-suitcase.module */ 7537)).then(m => m.CreateSuitcaseModule)
  }, {
    path: 'edit-suitcase/:name',
    resolve: {
      detail: _core_resolvers_detail_resolver__WEBPACK_IMPORTED_MODULE_1__.DetailResolver
    },
    data: {
      createMode: false
    },
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("src_app_public_create-suitcase_create-suitcase_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./create-suitcase/create-suitcase.module */ 7537)).then(m => m.CreateSuitcaseModule)
  }, {
    path: 'contact',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_public_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 7909)).then(m => m.ContactModule)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }]
}];
class PublicRoutingModule {}
PublicRoutingModule.ɵfac = function PublicRoutingModule_Factory(t) {
  return new (t || PublicRoutingModule)();
};
PublicRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PublicRoutingModule
});
PublicRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 2303:
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicComponent: () => (/* binding */ PublicComponent)
/* harmony export */ });
/* harmony import */ var _core_session_timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/session/timeout-dialog/timeout-dialog.component */ 6133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/login/login.service */ 1508);
/* harmony import */ var _core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/session/session.service */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






class PublicComponent {
  constructor(_loginService, _sessionService, _elementRef, _dialog) {
    this._loginService = _loginService;
    this._sessionService = _sessionService;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngAfterViewInit() {
    let timeoutOpened = false;
    this._sessionService.showTimeOutPopUp$.subscribe(() => {
      timeoutOpened = true;
      const dialogRef = this._dialog.open(_core_session_timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TimeoutDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true
      });
      dialogRef.afterClosed().subscribe(confirm => {
        if (confirm || confirm === undefined) {
          // Its undefined when clicking the backdrop
          this.keepAlive();
        } else {
          this.logout();
        }
        dialogRef.close();
        timeoutOpened = false;
      });
    });
    this._sessionService.logout$.subscribe(() => {
      this._dialog.closeAll();
    });
    // It is not available until view is loaded
    this._elementRef.nativeElement.addEventListener('mousemove', e => {
      // console.log('moving');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      // console.log('clicking');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    window.addEventListener('keypress', e => {
      console.log('keypress');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
  }
  keepAlive() {
    this._sessionService.reset();
  }
  logout() {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }
}
PublicComponent.ɵfac = function PublicComponent_Factory(t) {
  return new (t || PublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
};
PublicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PublicComponent,
  selectors: [["app-public"]],
  decls: 1,
  vars: 0,
  template: function PublicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
  styles: ["[_nghost-%COMP%] {display: inline-block; width: 100%; height: 100%}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL3B1YmxpYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCV9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2772:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicModule: () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.component */ 2303);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shared/shared.module */ 1782);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-routing.module */ 2778);
/* harmony import */ var _core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/suitcase.service */ 1805);
/* harmony import */ var _core_session_session_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/session/session.module */ 8185);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/guards/authentication.guard */ 4973);
/* harmony import */ var _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/guards/authorization.guard */ 5319);
/* harmony import */ var _core_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/login/login.service */ 1508);
/* harmony import */ var _core_resolvers_detail_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/resolvers/detail-resolver */ 3734);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/notifications.service */ 1578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);












class PublicModule {
  constructor() {}
}
PublicModule.ɵfac = function PublicModule_Factory(t) {
  return new (t || PublicModule)();
};
PublicModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: PublicModule
});
PublicModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_core_login_login_service__WEBPACK_IMPORTED_MODULE_7__.LoginService, _core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_3__.SuitcaseService, _core_resolvers_detail_resolver__WEBPACK_IMPORTED_MODULE_8__.DetailResolver, _services_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService, _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__.AuthenticationGuard, _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_6__.AuthorizationGuard],
  imports: [_core_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _core_session_session_module__WEBPACK_IMPORTED_MODULE_4__.SessionModule.forRoot({
    MINUTES_TO_SHOW_COUNTDOWN: 10
  }), _public_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_public_component__WEBPACK_IMPORTED_MODULE_0__.PublicComponent],
    imports: [_core_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _core_session_session_module__WEBPACK_IMPORTED_MODULE_4__.SessionModule, _public_routing_module__WEBPACK_IMPORTED_MODULE_2__.PublicRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map