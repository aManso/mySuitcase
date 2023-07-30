"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["common"],{

/***/ 4973:
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationGuard: () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.service */ 1508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AuthenticationGuard {
  constructor(_loginService, _router) {
    this._loginService = _loginService;
    this._router = _router;
  }
  canActivate(route, state) {
    this.lastIntendedTargetRoute = state.url;
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }
  canActivateChild() {
    const loggedUser = this._loginService.isLoggedIn();
    if (!loggedUser) {
      this._router.navigate(['/login']);
    }
    return loggedUser;
  }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) {
  return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthenticationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthenticationGuard,
  factory: AuthenticationGuard.ɵfac
});

/***/ }),

/***/ 5319:
/*!****************************************************!*\
  !*** ./src/app/core/guards/authorization.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorizationGuard: () => (/* binding */ AuthorizationGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3934);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ 1508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);






class AuthorizationGuard {
  constructor(_userService, _loginService, _router) {
    this._userService = _userService;
    this._loginService = _loginService;
    this._router = _router;
  }
  canActivate(route, state) {
    this.lastIntendedTargetRoute = state.url;
    // if user is logged in because token is stored..
    if (this._loginService.isLoggedIn()) {
      // it could be that it tries to access via url, so the service has not stored the user yet, therefore we recover it
      if (!this._userService.activeUser) {
        return this._loginService.recoverActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
          if (user) {
            return this._checkAdminUser(user);
          } else {
            this._router.navigate(['/login']);
            return false;
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
          this._router.navigate(['/login']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
        }));
      } else if (this._checkAdminUser(this._userService.activeUser)) {
        // if there is not an active user or it has not admin rights, we redirect to login
        return true;
      }
    }
    return false;
  }
  _checkAdminUser(user) {
    return this._userService.activeUser && this._userService.activeUser.admin;
  }
  canActivateChild() {
    // we get the logged user if exists
    // if there is not an active user or it has not admin rights, we redirect to login
    if (!this._userService.activeUser || !this._userService.activeUser.admin) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
AuthorizationGuard.ɵfac = function AuthorizationGuard_Factory(t) {
  return new (t || AuthorizationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
AuthorizationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: AuthorizationGuard,
  factory: AuthorizationGuard.ɵfac
});

/***/ }),

/***/ 8185:
/*!************************************************!*\
  !*** ./src/app/core/session/session.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionModule: () => (/* binding */ SessionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout-dialog/timeout-dialog.component */ 6133);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





class SessionModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('SessionModule is already loaded. Import it in the PublicModule or AdminModule only');
    }
  }
  // This way if sessionModule is used by other modules, SessionServiceConfig will still be created once, as it keeps as
  // singleton. MAT_DIALOG_DEFAULT_OPTIONS that has been set in the providers of the module, can create several instances
  static forRoot(config) {
    return {
      ngModule: SessionModule,
      providers: [_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService, {
        provide: _session_service__WEBPACK_IMPORTED_MODULE_1__.SessionServiceConfig,
        useValue: config
      }]
    };
  }
  static forChild(config) {
    return {
      ngModule: SessionModule,
      providers: [_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService, {
        provide: _session_service__WEBPACK_IMPORTED_MODULE_1__.SessionServiceConfig,
        useValue: config
      }]
    };
  }
}
SessionModule.ɵfac = function SessionModule_Factory(t) {
  return new (t || SessionModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SessionModule, 12));
};
SessionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SessionModule
});
SessionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true
    }
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SessionModule, {
    declarations: [_timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TimeoutDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule],
    exports: [_timeout_dialog_timeout_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TimeoutDialogComponent]
  });
})();

/***/ }),

/***/ 6133:
/*!*************************************************************************!*\
  !*** ./src/app/core/session/timeout-dialog/timeout-dialog.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutDialogComponent: () => (/* binding */ TimeoutDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session.service */ 930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);



class TimeoutDialogComponent {
  constructor(sessionService) {
    this.sessionService = sessionService;
  }
}
TimeoutDialogComponent.ɵfac = function TimeoutDialogComponent_Factory(t) {
  return new (t || TimeoutDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService));
};
TimeoutDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TimeoutDialogComponent,
  selectors: [["my-suitcase-timeout-dialog"]],
  decls: 14,
  vars: 1,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7000700442371637902$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_1 = goog.getMsg("The session is about to expire");
      i18n_0 = MSG_EXTERNAL_7000700442371637902$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟ba4aa6fe9ef811050ef8c5e82871a100e651a991␟7000700442371637902:The session is about to expire`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6158218870488125222$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_3 = goog.getMsg("The session is going to expire in ");
      i18n_2 = MSG_EXTERNAL_6158218870488125222$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟80d8ea8d311e728d4113eb2ffee5f0666100f276␟6158218870488125222:The session is going to expire in `;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_227749613426254192$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_5 = goog.getMsg("seconds");
      i18n_4 = MSG_EXTERNAL_227749613426254192$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟38bd5794dbe84081cfa7867e876245e1ddae93e7␟227749613426254192:seconds`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3797778920049399855$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_7 = goog.getMsg("Logout");
      i18n_6 = MSG_EXTERNAL_3797778920049399855$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:␟bb694b49d408265c91c62799c2b3a7e3151c824d␟3797778920049399855:Logout`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2925460164655384903$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_9 = goog.getMsg("Stay");
      i18n_8 = MSG_EXTERNAL_2925460164655384903$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SESSION_TIMEOUT_DIALOG_TIMEOUT_DIALOG_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟c7244373b4e597e9c88e4bc9f345086c67a7902c␟2925460164655384903:Stay`;
    }
    return [["mat-dialog-title", ""], i18n_0, [1, "mat-typography"], i18n_2, i18n_4, ["align", "end"], ["mat-button", "", "color", "warn"], i18n_6, ["mat-button", "", "mat-dialog-close", "true", "cdkFocusInitial", "", "color", "primary"], i18n_8];
  },
  template: function TimeoutDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 2)(3, "p")(4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-dialog-actions", 5)(10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.sessionService.sessionSeconds, " ");
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 8525:
/*!***********************************************!*\
  !*** ./src/app/core/validators/validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passwordMatchingValidator: () => (/* binding */ passwordMatchingValidator),
/* harmony export */   passwordValidator: () => (/* binding */ passwordValidator)
/* harmony export */ });
// The passwordValidator factory returns the configured validator function.
// That function takes an Angular control object and returns either null if the control value is valid or a validation error object.
// The validation error object typically has a property whose name is the validation key, 'forbiddenName',
// and whose value is an arbitrary dictionary of values that you could insert into an error message, {password}.
// Password matching expression.
// Password must be at least 6 characters, no more than 20 characters, and must include at least one upper case letter,
// one lower case letter, one numeric digit and one special character.
// const passwordRegExp: RegExp = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['+ allowedSpecialChars +']).{6,20}$');
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!#$%{}()*+,.:;|?@_])[A-Za-z\d-!#$%{}()*+,.:;|?@_]{6,20}$/;
function passwordValidator() {
  return control => {
    const allowed = passwordRegExp.test(control.value);
    return allowed ? null : {
      'forbiddenPassword': {
        value: control.value
      }
    };
  };
}
// The passwordMatchingValidator is a cross-validation function to check that the formControl 'password' of a formGroup and
// its confirmation formControl 'passwordConfinmation' matches.
// It returns null if both matches, making the formGroup valid, or add a field 'notMatchingPasswords' that is added as error
const passwordMatchingValidator = control => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');
  return password && passwordConfirmation && password.value !== passwordConfirmation.value ? {
    'notMatchingPasswords': true
  } : null;
};

/***/ })

}]);
//# sourceMappingURL=common.js.map