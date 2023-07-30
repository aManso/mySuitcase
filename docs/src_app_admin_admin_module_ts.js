"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 5166:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ 5256);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/guards/authentication.guard */ 4973);
/* harmony import */ var _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/guards/authorization.guard */ 5319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






// Root routes of this particular module: ADMIN.
const routes = [{
  path: '',
  component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
  children: [{
    path: 'users',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./users/users.module */ 6563)).then(m => m.UsersModule)
  }, {
    path: 'notifications',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("src_app_admin_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 6448)).then(m => m.NotificationsModule)
  }, {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }],
  canActivate: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard, _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_2__.AuthorizationGuard],
  canActivateChild: [_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard, _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_2__.AuthorizationGuard]
}];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5256:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _core_session_timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/session/timeout-dialog/timeout-dialog.component */ 6133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/login/login.service */ 1508);
/* harmony import */ var _core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/session/session.service */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/logger.service */ 5996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_navbar_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/admin-navbar/admin-navbar.component */ 2511);








class AdminComponent {
  constructor(_loginService, _sessionService, _elementRef, _dialog, _logger) {
    this._loginService = _loginService;
    this._sessionService = _sessionService;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this._logger = _logger;
    this._logger.log('AdminComponent');
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
      console.log('moving');
      if (!timeoutOpened) {
        this._sessionService.reset();
      }
    });
    this._elementRef.nativeElement.addEventListener('click', e => {
      console.log('clicking');
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
AdminComponent.ɵfac = function AdminComponent_Factory(t) {
  return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__.Logger));
};
AdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminComponent,
  selectors: [["app-admin"]],
  decls: 2,
  vars: 0,
  template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "admin-navbar-component")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _components_navbar_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_4__.AdminNavBarComponent],
  encapsulation: 2
});

/***/ }),

/***/ 7008:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shared/shared.module */ 1782);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ 5166);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ 5256);
/* harmony import */ var _core_session_session_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/session/session.module */ 8185);
/* harmony import */ var _core_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/login/login.service */ 1508);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/guards/authentication.guard */ 4973);
/* harmony import */ var _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/guards/authorization.guard */ 5319);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/logger.service */ 5996);
/* harmony import */ var _services_admin_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/admin-logger.service */ 1714);
/* harmony import */ var _components_navbar_admin_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/admin-navbar.module */ 3871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);












class AdminModule {
  constructor() {}
}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_core_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService, _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__.AuthenticationGuard, _core_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_6__.AuthorizationGuard, [{
    provide: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__.Logger,
    useClass: _services_admin_logger_service__WEBPACK_IMPORTED_MODULE_8__.AdminLogger
  }]],
  imports: [
  // App
  _core_session_session_module__WEBPACK_IMPORTED_MODULE_3__.SessionModule.forChild({
    MINUTES_TO_SHOW_COUNTDOWN: 30
  }), _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule, _components_navbar_admin_navbar_module__WEBPACK_IMPORTED_MODULE_9__.AdminNavBarModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__.AdminComponent],
    imports: [_core_session_session_module__WEBPACK_IMPORTED_MODULE_3__.SessionModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule, _components_navbar_admin_navbar_module__WEBPACK_IMPORTED_MODULE_9__.AdminNavBarModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 3871:
/*!****************************************************************!*\
  !*** ./src/app/admin/components/navbar/admin-navbar.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNavBarModule: () => (/* binding */ AdminNavBarModule)
/* harmony export */ });
/* harmony import */ var _admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-navbar/admin-navbar.component */ 2511);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






class AdminNavBarModule {
  constructor() {}
}
AdminNavBarModule.ɵfac = function AdminNavBarModule_Factory(t) {
  return new (t || AdminNavBarModule)();
};
AdminNavBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AdminNavBarModule
});
AdminNavBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
  // Angular Material
  _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminNavBarModule, {
    declarations: [_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_0__.AdminNavBarComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
    // Angular Material
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule],
    exports: [_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_0__.AdminNavBarComponent]
  });
})();

/***/ }),

/***/ 2511:
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/navbar/admin-navbar/admin-navbar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNavBarComponent: () => (/* binding */ AdminNavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/session/session.service */ 930);
/* harmony import */ var src_app_core_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/login/login.service */ 1508);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);






const _c0 = function () {
  return ["/home"];
};
const _c1 = function () {
  return ["/admin/notifications"];
};
class AdminNavBarComponent {
  constructor(_router, sessionService, loginService) {
    this._router = _router;
    this.sessionService = sessionService;
    this.loginService = loginService;
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
  logout() {
    this.sessionService.stopInterval();
    this.loginService.logout();
  }
}
AdminNavBarComponent.ɵfac = function AdminNavBarComponent_Factory(t) {
  return new (t || AdminNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService));
};
AdminNavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AdminNavBarComponent,
  selectors: [["admin-navbar-component"]],
  decls: 34,
  vars: 8,
  consts: [[1, "header_area"], [1, "main_menu"], [1, "navbar", "navbar-expand-lg"], [1, "container", "box_1620"], [1, "navbar-brand", 3, "click"], ["src", "assets/img/logo/logo.png", "alt", "", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "icon-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "offset"], [1, "nav", "navbar-nav", "menu_nav", "menu_nav--texts", "justify-content-end"], ["matTooltip", "Home", 1, "nav-item", "active", 3, "routerLink"], [1, "nav-link"], [1, "nav-item", "active"], ["matTooltip", "Maneja todas las notificaciones", 1, "nav-link", 3, "routerLink"], ["matTooltip", "Abandona la sesi\u00F3n", 1, "nav-item", "active", 3, "click"], [1, "nav", "navbar-nav", "menu_nav", "menu_nav--icons", "justify-content-end"], ["matTooltip", "Home", "routerLinkActive", "active-link", 1, "nav-item", "active", 3, "routerLink"]],
  template: function AdminNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavBarComponent_Template_a_click_4_listener() {
        return ctx.goHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 7)(8, "span", 7)(9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9)(12, "li", 10)(13, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 12)(16, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Notificaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavBarComponent_Template_li_click_18_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 15)(22, "li", 16)(23, "a", 11)(24, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 12)(27, "a", 13)(28, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "notificationsactive");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNavBarComponent_Template_li_click_30_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 11)(32, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  min-height: 90px;\n  margin-bottom: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  max-width: 100px;\n}\n\n.menu_nav--icons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c2483d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9uYXZiYXIvYWRtaW4tbmF2YmFyL2FkbWluLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUtFO0VBQ0UsY0FBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA5MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5tZW51X25hdi0taWNvbnMge1xuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuXG4uYWN0aXZlLWxpbmsge1xuICBtYXQtaWNvbiB7XG4gICAgY29sb3I6ICNjMjQ4M2Q7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1714:
/*!********************************************************!*\
  !*** ./src/app/admin/services/admin-logger.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLogger: () => (/* binding */ AdminLogger)
/* harmony export */ });
/* harmony import */ var src_app_core_services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/logger.service */ 5996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AdminLogger extends src_app_core_services_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger {
  constructor() {
    super();
  }
  log(className) {
    console.log('creating from admin  ' + className);
  }
}
AdminLogger.ɵfac = function AdminLogger_Factory(t) {
  return new (t || AdminLogger)();
};
AdminLogger.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AdminLogger,
  factory: AdminLogger.ɵfac
});

/***/ }),

/***/ 5996:
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Logger {
  constructor() {}
  log(className) {
    console.log('creating ' + className);
  }
}
Logger.ɵfac = function Logger_Factory(t) {
  return new (t || Logger)();
};
Logger.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Logger,
  factory: Logger.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map