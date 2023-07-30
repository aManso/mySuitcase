"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_public_register_register_module_ts"],{

/***/ 782:
/*!******************************************************************!*\
  !*** ./src/app/public/register/containers/register.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_ROUTE: () => (/* binding */ BASE_ROUTE),
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_validators_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/validators/validators */ 8525);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register.service */ 8070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/navbar/containers/navbar.component */ 8882);
/* harmony import */ var _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/footer/containers/footer.component */ 1584);









const BASE_ROUTE = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('BASE_ROUTE');
class RegisterComponent {
  constructor(_registerService, _router, baseRoute, fb) {
    this._registerService = _registerService;
    this._router = _router;
    this.baseRoute = baseRoute;
    this.fb = fb;
  }
  ngOnInit() {
    this.registerForm = this._setRegisterForm();
  }
  _setRegisterForm() {
    this.passwordForm = this._setPasswordForm();
    return this.fb.group({
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
      passwords: this.passwordForm,
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12)],
      age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(14), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(99)])],
      gender: null
    });
  }
  _setPasswordForm() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20), (0,_core_validators_validators__WEBPACK_IMPORTED_MODULE_0__.passwordValidator)()]),
      passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20), (0,_core_validators_validators__WEBPACK_IMPORTED_MODULE_0__.passwordValidator)()])
    }, {
      validators: _core_validators_validators__WEBPACK_IMPORTED_MODULE_0__.passwordMatchingValidator
    });
  }
  goTo(path) {
    this._router.navigate([path]);
  }
  isValidForm() {
    return this.registerForm.valid;
  }
  submit() {
    if (this.isValidForm()) {
      this._registerService.register(this.registerForm.value).subscribe(user => {
        if (user) {
          this.goTo(this.baseRoute.toString());
        } else {
          // TODO use a dialog
          console.error('An user already exist with this email');
        }
      }, error => {
        console.error('Error in the transaction');
      });
    }
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](BASE_ROUTE), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 28,
  vars: 3,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_name$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_1 = goog.getMsg("Name");
      i18n_0 = MSG_EXTERNAL_name$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@name␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4292830171754074487$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_3 = goog.getMsg("Introduce your username");
      i18n_2 = MSG_EXTERNAL_4292830171754074487$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟90ea172326e057fa68ebb225c58fb6e413523f92␟4292830171754074487:Introduce your username`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8384860057275370302$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_5 = goog.getMsg("Introduce your email");
      i18n_4 = MSG_EXTERNAL_8384860057275370302$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟87d43df9f989773147beece1718fadd9e32167fd␟8384860057275370302:Introduce your email`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_password$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_7 = goog.getMsg("Password");
      i18n_6 = MSG_EXTERNAL_password$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:@@password␟c32ef07f8803a223a83ed17024b38e8d82292407␟1431416938026210429:Password`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7075048909812077704$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_9 = goog.getMsg("Introduce your password");
      i18n_8 = MSG_EXTERNAL_7075048909812077704$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟df2ebc334ecf2252686644042ddade27cee3e3d0␟7075048909812077704:Introduce your password`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_11 = goog.getMsg("Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character");
      i18n_10 = MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_11;
    } else {
      i18n_10 = $localize`:@@pass_requirements␟d7c947f87f284d666cf96c4b40bad84b661bdf8a␟7066908452190287537:Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4980009939134509924$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_13 = goog.getMsg("Repit the password");
      i18n_12 = MSG_EXTERNAL_4980009939134509924$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_13;
    } else {
      i18n_12 = $localize`:␟37c15d60d7c22d3688c885aa5a810a72a5932cb7␟4980009939134509924:Repit the password`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4980009939134509924$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_15 = goog.getMsg("Repit the password");
      i18n_14 = MSG_EXTERNAL_4980009939134509924$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_15;
    } else {
      i18n_14 = $localize`:␟37c15d60d7c22d3688c885aa5a810a72a5932cb7␟4980009939134509924:Repit the password`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2438590582556677910$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_17 = goog.getMsg("Start!");
      i18n_16 = MSG_EXTERNAL_2438590582556677910$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_17;
    } else {
      i18n_16 = $localize`:␟03804d32af967323b80f9ab0ab431899c9749d02␟2438590582556677910:Start!`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7590764840587252545$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_19 = goog.getMsg("I am already registered, I want going back.");
      i18n_18 = MSG_EXTERNAL_7590764840587252545$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_REGISTER_CONTAINERS_REGISTER_COMPONENT_TS_19;
    } else {
      i18n_18 = $localize`:␟3df1ed65c6790c3e752a7b1767a8916b3d09de0f␟7590764840587252545:I am already registered, I want going back.`;
    }
    return [[1, "form-contact", "col-lg-6", "col-xl-6", "offset-xl-1", 3, "formGroup"], [1, "search-wrapper"], [1, "form-group"], ["for", "name"], i18n_0, ["type", "text", "id", "name", "aria-describedby", "name", "placeholder", i18n_2, "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "aria-describedby", "emailHelp", "placeholder", i18n_4, "formControlName", "email", 1, "form-control"], [3, "formGroup"], ["for", "password"], i18n_6, ["type", "password", "id", "password", "placeholder", i18n_8, "formControlName", "password", 1, "form-control"], [1, "details"], ["id", "passwordHelp", 1, "form-text", "text-muted"], i18n_10, ["for", "passwordConfirmation"], i18n_12, ["type", "password", "id", "passwordConfirmation", "placeholder", i18n_14, "formControlName", "passwordConfirmation", 1, "form-control"], [1, "button-block"], ["type", "submit", 1, "button", "border-1", "mt-3", 3, "disabled", "click"], i18n_16, ["href", "javascript:void(0)", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", 3, "click"], i18n_18, ["alt", "login image", "src", "assets/img/login/undraw_travelers.svg", 1, "register-img"]];
  },
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "navbar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 0)(2, "div", 1)(3, "div", 2)(4, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](12, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "details", 12)(15, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](16, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](18, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18)(21, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_21_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](22, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "small")(24, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_24_listener() {
        return ctx.goTo("login");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](25, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "footer-component");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.passwordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isValidForm());
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: auto;\n  padding-top: 10%;\n}\n[_nghost-%COMP%]   .register-img[_ngcontent-%COMP%] {\n  width: 200px;\n  display: block;\n  margin: auto;\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL3JlZ2lzdGVyL2NvbnRhaW5lcnMvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdHO0VBRUMsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFISiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9ybSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICAgLnJlZ2lzdGVyLWltZyB7XG4gICAgLy8gbWluLWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8858:
/*!************************************************************!*\
  !*** ./src/app/public/register/register-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterRoutingModule: () => (/* binding */ RegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_login_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/login/login.service */ 1508);
/* harmony import */ var _containers_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/register.component */ 782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _containers_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}];
class RegisterRoutingModule {}
RegisterRoutingModule.ɵfac = function RegisterRoutingModule_Factory(t) {
  return new (t || RegisterRoutingModule)();
};
RegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RegisterRoutingModule
});
RegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [src_app_core_login_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6943:
/*!****************************************************!*\
  !*** ./src/app/public/register/register.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterModule: () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/shared.module */ 1782);
/* harmony import */ var _containers_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/register.component */ 782);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-routing.module */ 8858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class RegisterModule {
  constructor() {}
}
RegisterModule.ɵfac = function RegisterModule_Factory(t) {
  return new (t || RegisterModule)();
};
RegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RegisterModule
});
RegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _containers_register_component__WEBPACK_IMPORTED_MODULE_1__.BASE_ROUTE,
    useValue: '/'
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_2__.RegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterModule, {
    declarations: [_containers_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_2__.RegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 8070:
/*!*****************************************************!*\
  !*** ./src/app/public/register/register.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterService: () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _core_session_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/session/session.service */ 930);




class RegisterService {
  constructor(http, _sessionService) {
    this.http = http;
    this._sessionService = _sessionService;
    this.URL_REGISTER = 'http://localhost:3000/api/register/';
  }
  register(user) {
    const $registerResponse = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.http.post(this.URL_REGISTER, user).subscribe(response => {
      if (typeof response === 'object') {
        console.log('user registered', response.user);
        this._sessionService.startSession(response.token);
        $registerResponse.next(response.user);
      } else {
        $registerResponse.next(response);
      }
    }, error => {
      $registerResponse.error(error);
    });
    return $registerResponse;
  }
}
RegisterService.ɵfac = function RegisterService_Factory(t) {
  return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_session_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService));
};
RegisterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: RegisterService,
  factory: RegisterService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_public_register_register_module_ts.js.map