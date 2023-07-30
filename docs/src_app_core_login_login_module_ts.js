"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_core_login_login_module_ts"],{

/***/ 1940:
/*!**********************************************************!*\
  !*** ./src/app/core/login/containers/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_ROUTE: () => (/* binding */ BASE_ROUTE),
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/config/config */ 2018);
/* harmony import */ var _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/backend-errors */ 4166);
/* harmony import */ var _const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../const/frontend-errors */ 1543);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ 1508);
/* harmony import */ var _core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/guards/authentication.guard */ 4973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/containers/navbar.component */ 8882);
/* harmony import */ var _shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/footer/containers/footer.component */ 1584);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
















function LoginComponent_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18nStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_form_field_9_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18nStart"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, LoginComponent_mat_form_field_9_mat_error_4_Template, 3, 0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.loginForm.get("password").hasError("required"));
  }
}
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_a_17_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.toggleMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LoginComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_ng_template_18_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.toggleMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c24 = function (a0) {
  return {
    "disabled-button": a0
  };
};
const BASE_ROUTE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('BASE_ROUTE');
class LoginComponent {
  constructor(_loginService, _authenticationGuard, _router, baseRoute, fb, _snackBar) {
    this._loginService = _loginService;
    this._authenticationGuard = _authenticationGuard;
    this._router = _router;
    this.baseRoute = baseRoute;
    this.fb = fb;
    this._snackBar = _snackBar;
    this.loginMode = true;
  }
  ngOnInit() {
    this.loginForm = this._setLoginForm();
  }
  _setLoginForm() {
    return this.fb.group({
      keepSession: [null],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email])],
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(20)
      // passwordValidator(),
      ])
    });
  }

  _setRememberForm() {
    return this.fb.group({
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email])]
    });
  }
  toggleMode() {
    this.loginMode = !this.loginMode;
    this.loginForm = this.loginMode ? this._setLoginForm() : this._setRememberForm();
  }
  goTo(path) {
    this._router.navigate([path]);
  }
  submit() {
    if (this.loginForm.valid) {
      this._loginService.login(this.loginForm.value).subscribe(user => {
        if (user) {
          const targetUrl = this._authenticationGuard.lastIntendedTargetRoute ? this._authenticationGuard.lastIntendedTargetRoute : this.baseRoute;
          this._router.navigate([targetUrl]);
        } else {
          this._showGeneralError();
        }
      }, error => {
        if (error.error === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.USER_NOT_FOUND) {
          this._snackBar.open(_const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERRORS.USER_NOT_FOUND.title, '', {
            duration: _core_config_config__WEBPACK_IMPORTED_MODULE_0__.GENERAL_SNACKBAR_TIME
          });
        } else {
          this._showGeneralError();
        }
      });
    }
  }
  _showGeneralError() {
    this._snackBar.open(_const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_ERRORS.GENERAL_ERROR.title, _const_frontend_errors__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_ERRORS.GENERAL_ERROR.message, {
      duration: _core_config_config__WEBPACK_IMPORTED_MODULE_0__.EXTENDED_SNACKBAR_TIME
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__.AuthenticationGuard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](BASE_ROUTE), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 22,
  vars: 11,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8384860057275370302$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_1 = goog.getMsg("Introduce your email");
      i18n_0 = MSG_EXTERNAL_8384860057275370302$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟87d43df9f989773147beece1718fadd9e32167fd␟8384860057275370302:Introduce your email`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6823239861189398656$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_3 = goog.getMsg("Go ahead!");
      i18n_2 = MSG_EXTERNAL_6823239861189398656$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟dead4eb38a801bf6380c1586a0265284228162bf␟6823239861189398656:Go ahead!`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1624332533917406296$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_5 = goog.getMsg("I am new, Let's start!");
      i18n_4 = MSG_EXTERNAL_1624332533917406296$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟e366b542b9627d8379cd034b6358fbec27b6ce57␟1624332533917406296:I am new, Let's start!`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7740771590087926912$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__7 = goog.getMsg(" the e-mail format is not valid ");
      i18n_6 = MSG_EXTERNAL_7740771590087926912$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__7;
    } else {
      i18n_6 = $localize`:␟cde9db13a7846e5aebee03adc0f22f4ca217a140␟7740771590087926912: the e-mail format is not valid `;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5685560069488266774$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__9 = goog.getMsg(" The field Email is {$startTagStrong}requered{$closeTagStrong}", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_8 = MSG_EXTERNAL_5685560069488266774$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__9;
    } else {
      i18n_8 = $localize`:␟1a40cd9cdb3da1af9a21b8c83b906c86774b2f38␟5685560069488266774: The field Email is ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:requered${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_password$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__11 = goog.getMsg("Password");
      i18n_10 = MSG_EXTERNAL_password$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__11;
    } else {
      i18n_10 = $localize`:@@password␟c32ef07f8803a223a83ed17024b38e8d82292407␟1431416938026210429:Password`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7075048909812077704$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__13 = goog.getMsg("Introduce your password");
      i18n_12 = MSG_EXTERNAL_7075048909812077704$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__13;
    } else {
      i18n_12 = $localize`:␟df2ebc334ecf2252686644042ddade27cee3e3d0␟7075048909812077704:Introduce your password`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__15 = goog.getMsg("Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character");
      i18n_14 = MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__15;
    } else {
      i18n_14 = $localize`:@@pass_requirements␟d7c947f87f284d666cf96c4b40bad84b661bdf8a␟7066908452190287537:Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_310209190083022765$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS___17 = goog.getMsg(" The field password is {$startTagStrong}requered{$closeTagStrong}", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_16 = MSG_EXTERNAL_310209190083022765$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS___17;
    } else {
      i18n_16 = $localize`:␟d9f7f70c6ad29cee7d98800afd6126f8ccdebb40␟310209190083022765: The field password is ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:requered${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1690094634653519321$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__19 = goog.getMsg("Rememberme");
      i18n_18 = MSG_EXTERNAL_1690094634653519321$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__19;
    } else {
      i18n_18 = $localize`:␟af3f7d5887abc4d1e4f11fcac61b7a4f12b7cfe9␟1690094634653519321:Rememberme`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5108675049385286242$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__21 = goog.getMsg("Did you forget the password?");
      i18n_20 = MSG_EXTERNAL_5108675049385286242$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__21;
    } else {
      i18n_20 = $localize`:␟ea9777126c0d1176490d7967410a62aca96c75f7␟5108675049385286242:Did you forget the password?`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_362305039159177146$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__23 = goog.getMsg("I already remember the passoword :)");
      i18n_22 = MSG_EXTERNAL_362305039159177146$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_LOGIN_CONTAINERS_LOGIN_COMPONENT_TS__23;
    } else {
      i18n_22 = $localize`:␟ee4caaab1683dd5dc85b93e5c83078d2a508ac2c␟362305039159177146:I already remember the passoword :)`;
    }
    return [[1, "form-contact", "col-lg-6", "col-xl-6", "offset-xl-1", 3, "formGroup"], [1, "search-wrapper"], ["appearance", "outline", 1, "full-width", "login-field"], ["type", "email", "matInput", "", "autocomplete", "off", "formControlName", "email", "placeholder", i18n_0], [4, "ngIf"], ["class", "full-width login-field", "appearance", "outline", 4, "ngIf"], ["class", "form-check", 4, "ngIf"], [1, "button-block"], ["type", "submit", 1, "button", "border-1", "mt-3", 3, "disabled", "ngClass", "click"], i18n_2, ["type", "submit", 1, "button", "border-1", "mt-3", 3, "click"], i18n_4, ["href", "javascript:void(0)", "class", "nav-link", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 3, "click", 4, "ngIf", "ngIfElse"], ["registerMode", ""], ["alt", "login image", "src", "assets/img/login/undraw_travelers.svg", 1, "login-img"], i18n_6, i18n_8, i18n_10, ["type", "password", "matInput", "", "autocomplete", "off", "formControlName", "password", "placeholder", i18n_12], [1, "hint-password"], i18n_14, i18n_16, [1, "form-check"], ["type", "checkbox", "id", "rememberme", "formControlName", "keepSession", 1, "form-check-input"], ["for", "rememberme", 1, "form-check-label"], i18n_18, ["href", "javascript:void(0)", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", 3, "click"], i18n_20, i18n_22];
  },
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "navbar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 0)(2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, LoginComponent_mat_error_7_Template, 2, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, LoginComponent_mat_error_8_Template, 3, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, LoginComponent_mat_form_field_9_Template, 7, 1, "mat-form-field", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 4, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
        return ctx.goTo("register");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, LoginComponent_a_17_Template, 2, 0, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, LoginComponent_ng_template_18_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "footer-component");
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("email") && !ctx.loginForm.get("email").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.loginForm.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c24, !ctx.loginForm.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loginMode)("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavBarComponent, _shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError],
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: auto;\n  padding-top: 10%;\n}\n[_nghost-%COMP%]   .login-img[_ngcontent-%COMP%] {\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.login-field[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 20px;\n}\n\n.hint-password[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  padding: 0;\n  align-items: center;\n}\n.form-check[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 7px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9sb2dpbi9jb250YWluZXJzL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxTQUFBO0FBRko7QUFLRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICAubG9naW4taW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLmxvZ2luLWZpZWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhpbnQtcGFzc3dvcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5664:
/*!****************************************************!*\
  !*** ./src/app/core/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _containers_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login.component */ 1940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _containers_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4523:
/*!********************************************!*\
  !*** ./src/app/core/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/shared.module */ 1782);
/* harmony import */ var _containers_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/login.component */ 1940);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ 5664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ 1508);
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/authentication.guard */ 4973);
/* harmony import */ var _guards_authorization_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/authorization.guard */ 5319);
/* harmony import */ var _session_session_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session/session.module */ 8185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);













class LoginModule {
  constructor() {}
}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService, _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__.AuthenticationGuard, _guards_authorization_guard__WEBPACK_IMPORTED_MODULE_5__.AuthorizationGuard, {
    provide: _containers_login_component__WEBPACK_IMPORTED_MODULE_1__.BASE_ROUTE,
    useValue: '/'
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _session_session_module__WEBPACK_IMPORTED_MODULE_6__.SessionModule.forRoot({
    MINUTES_TO_SHOW_COUNTDOWN: undefined
  }), _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_containers_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _session_session_module__WEBPACK_IMPORTED_MODULE_6__.SessionModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core_login_login_module_ts.js.map