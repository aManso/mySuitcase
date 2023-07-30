"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_core_settings_settings_module_ts"],{

/***/ 1297:
/*!*****************************************************!*\
  !*** ./src/app/core/resolvers/settings-resolver.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsResolver: () => (/* binding */ SettingsResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3934);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ 1508);




class SettingsResolver {
  constructor(_userService, _loginService) {
    this._userService = _userService;
    this._loginService = _loginService;
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
    if (this._userService.activeUser) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._userService.activeUser);
    } else {
      return this._loginService.recoverActiveUser();
    }
  }
}
SettingsResolver.ɵfac = function SettingsResolver_Factory(t) {
  return new (t || SettingsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_login_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService));
};
SettingsResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SettingsResolver,
  factory: SettingsResolver.ɵfac
});

/***/ }),

/***/ 8707:
/*!****************************************************************!*\
  !*** ./src/app/core/settings/containers/settings.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ 2018);
/* harmony import */ var _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const/backend-errors */ 4166);
/* harmony import */ var _shared_extra_fields_info_bottom_sheet_extra_fields_info_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/extra-fields-info-bottom-sheet/extra-fields-info-bottom-sheet.component */ 729);
/* harmony import */ var _validators_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/validators */ 8525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.service */ 2216);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/login.service */ 1508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/navbar/containers/navbar.component */ 8882);
/* harmony import */ var _shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/footer/containers/footer.component */ 1584);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 702);




















function SettingsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function SettingsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SettingsComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsComponent_mat_icon_28_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.enableChangePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_form_field_34_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_form_field_34_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nStart"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SettingsComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 9)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SettingsComponent_mat_form_field_34_mat_error_4_Template, 3, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SettingsComponent_mat_form_field_34_mat_error_5_Template, 3, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appearance", ctx_r10.settingsForm.enabled ? "fill" : "outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.passwordForm.get("newPassword").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r10.passwordForm.get("newPassword").hasError("required") && ctx_r10.passwordForm.get("newPassword").hasError("forbiddenPassword"));
  }
}
function SettingsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 51)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "small")(4, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsComponent_div_35_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.openExtraDataExp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](5, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
const _c44 = function (a0) {
  return {
    "form-group--enabled": a0
  };
};
class SettingsComponent {
  constructor(_fb, _settingsService, _loginService, _activatedRoute, _snackBar, _bottomSheet) {
    this._fb = _fb;
    this._settingsService = _settingsService;
    this._loginService = _loginService;
    this._activatedRoute = _activatedRoute;
    this._snackBar = _snackBar;
    this._bottomSheet = _bottomSheet;
    this.editMode = false;
    this.showPasswordChange = false;
  }
  ngOnInit() {
    this._user = this._activatedRoute.snapshot.data.user;
    // We set the logged user into the login service because this loginService has multiple instances (public/admin...) and it is needed for intance to show the admin icon
    this._loginService.logged$.next(this._user);
    this.settingsForm = this._setSettingsForm();
    this.settingsForm.disable();
  }
  _setSettingsForm() {
    this.passwordForm = this._setPasswordForm();
    this._user = this._user ? this._user : {};
    return this._fb.group({
      email: [this._user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email])],
      passwords: this.passwordForm,
      name: [this._user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(12)],
      age: [this._user.age, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(14), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(99)])],
      gender: [this._user.gender]
    });
  }
  _setPasswordForm() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20), (0,_validators_validators__WEBPACK_IMPORTED_MODULE_3__.passwordValidator)()])
    });
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
    this.editMode ? this.settingsForm.enable() : this.settingsForm.disable();
  }
  enableChangePassword() {
    this.showPasswordChange = !this.showPasswordChange;
    if (this.showPasswordChange) {
      this.passwordForm.addControl('newPassword', new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20), (0,_validators_validators__WEBPACK_IMPORTED_MODULE_3__.passwordValidator)()]));
    } else {
      this.passwordForm.removeControl('newPassword');
    }
  }
  openExtraDataExp() {
    this._bottomSheet.open(_shared_extra_fields_info_bottom_sheet_extra_fields_info_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__.ExtraFieldsInfoBottomSheetComponent);
  }
  isValidForm() {
    return this.settingsForm && this.settingsForm.valid;
  }
  saveChanges() {
    this._settingsService.update({
      ...this.settingsForm.value,
      _id: this._user._id
    }).subscribe(response => {
      this._snackBar.open('Usuario actualizado!', '', {
        duration: _config_config__WEBPACK_IMPORTED_MODULE_0__.GENERAL_SNACKBAR_TIME,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }, error => {
      if (error && (error.error === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.WRONG_PASSWORD || error.error === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.EXISTING_EMAIL)) {
        this._snackBar.open(error.error === _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERROR_TYPES.WRONG_PASSWORD ? _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERRORS.WRONG_PASSWORD.message : _const_backend_errors__WEBPACK_IMPORTED_MODULE_1__.BACKEND_ERRORS.EXISTING_EMAIL.message, '', {
          duration: _config_config__WEBPACK_IMPORTED_MODULE_0__.EXTENDED_SNACKBAR_TIME,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
      console.log(error);
    });
  }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__.MatBottomSheet));
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["settings-component"]],
  decls: 51,
  vars: 20,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_name$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_1 = goog.getMsg("Name");
      i18n_0 = MSG_EXTERNAL_name$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:@@name␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_email$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_3 = goog.getMsg("Email");
      i18n_2 = MSG_EXTERNAL_email$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:@@email␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4121470136979899771$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_5 = goog.getMsg("I want to change the password");
      i18n_4 = MSG_EXTERNAL_4121470136979899771$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟4ec731ab596dbd3d8f3d0e58fbf717dc4d134540␟4121470136979899771:I want to change the password`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_7 = goog.getMsg("Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character");
      i18n_6 = MSG_EXTERNAL_pass_requirements$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:@@pass_requirements␟d7c947f87f284d666cf96c4b40bad84b661bdf8a␟7066908452190287537:Password must contain between 6 and 20 characters and include 1 lowercase, 1 capitalcase, 1 number and 1 special character`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5581955889346115033$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_9 = goog.getMsg("Age (Optional)");
      i18n_8 = MSG_EXTERNAL_5581955889346115033$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟9e03bfc24d17138553609ba241e614647e1cd2ff␟5581955889346115033:Age (Optional)`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3770820980489796032$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_11 = goog.getMsg("Introduce your age");
      i18n_10 = MSG_EXTERNAL_3770820980489796032$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_11;
    } else {
      i18n_10 = $localize`:␟06b7084268bc31b02b5c00476f2f877253307717␟3770820980489796032:Introduce your age`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1848249147945767572$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_13 = goog.getMsg("Gender (Optional)");
      i18n_12 = MSG_EXTERNAL_1848249147945767572$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_13;
    } else {
      i18n_12 = $localize`:␟25d84f777c27d2f75c151b1ba693c1a3409fcb2a␟1848249147945767572:Gender (Optional)`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8012344910054029733$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_15 = goog.getMsg("Male");
      i18n_14 = MSG_EXTERNAL_8012344910054029733$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_15;
    } else {
      i18n_14 = $localize`:␟097b5dfee5665aa0f7daba8b696acecde6445474␟8012344910054029733:Male`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5667840900782067941$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_17 = goog.getMsg("Female");
      i18n_16 = MSG_EXTERNAL_5667840900782067941$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS_17;
    } else {
      i18n_16 = $localize`:␟18f3bafdc69b800737e303bc1cb0753bd9dd3f32␟5667840900782067941:Female`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_see_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__19 = goog.getMsg("See");
      i18n_18 = MSG_EXTERNAL_see_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__19;
    } else {
      i18n_18 = $localize`:@@see_button␟7120e74bd06a31514683bb3e368e2a2003db2454␟6594334664356245979:See`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_edit_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__21 = goog.getMsg("Edit");
      i18n_20 = MSG_EXTERNAL_edit_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__21;
    } else {
      i18n_20 = $localize`:@@edit_button␟28f86ffd419b869711aa13f5e5ff54be6d70731c␟7585826646011739428:Edit`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_save_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__23 = goog.getMsg("Save");
      i18n_22 = MSG_EXTERNAL_save_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__23;
    } else {
      i18n_22 = $localize`:@@save_button␟52c9a103b812f258bcddc3d90a6e3f46871d25fe␟3768927257183755959:Save`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1546113649989971135$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__25 = goog.getMsg(" The field name is {$startTagStrong}required{$closeTagStrong}", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_24 = MSG_EXTERNAL_1546113649989971135$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__25;
    } else {
      i18n_24 = $localize`:␟3dd984fbcc3f5648878294b217dcc561a276915a␟1546113649989971135: The field name is ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:required${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_9198384657528831511$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__27 = goog.getMsg(" The email format is not valid ");
      i18n_26 = MSG_EXTERNAL_9198384657528831511$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__27;
    } else {
      i18n_26 = $localize`:␟a8f3f64b6bb3d430ff34aee268276500a0e066fb␟9198384657528831511: The email format is not valid `;
    }
    let i18n_28;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8512753964055380283$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__29 = goog.getMsg(" The field email {$startTagStrong}required{$closeTagStrong}", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_28 = MSG_EXTERNAL_8512753964055380283$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__29;
    } else {
      i18n_28 = $localize`:␟b7fdc80a3a81472ab6beab055b2d591da6f4a561␟8512753964055380283: The field email ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:required${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
    }
    let i18n_30;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6106146682376463359$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__31 = goog.getMsg(" The field pasword is {$startTagStrong}required{$closeTagStrong}", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_30 = MSG_EXTERNAL_6106146682376463359$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__31;
    } else {
      i18n_30 = $localize`:␟3d89cd5cc4704d55c2bdecdf80778b4bfd39a026␟6106146682376463359: The field pasword is ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:required${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
    }
    let i18n_32;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_pass_requirements_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__33 = goog.getMsg(" The field password {$startTagStrong}does not match the requirements{$closeTagStrong}. ", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_32 = MSG_EXTERNAL_pass_requirements_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__33;
    } else {
      i18n_32 = $localize`:@@pass_requirements-error␟bab835d02d236bcff4459a6383ee0d6e1dcc7f6e␟1572686913466736843: The field password ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:does not match the requirements${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:. `;
    }
    let i18n_34;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1649484820090789647$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__35 = goog.getMsg("Introduce the new password");
      i18n_34 = MSG_EXTERNAL_1649484820090789647$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__35;
    } else {
      i18n_34 = $localize`:␟18c96743c3835e5d3d8af54cac565ca6376798e9␟1649484820090789647:Introduce the new password`;
    }
    let i18n_36;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3393259352660150921$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS___37 = goog.getMsg(" The field pasword is {$startTagStrong}required{$closeTagStrong}. ", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_36 = MSG_EXTERNAL_3393259352660150921$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS___37;
    } else {
      i18n_36 = $localize`:␟783f63fff2215fba2767e31a03173f7e5935ea62␟3393259352660150921: The field pasword is ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:required${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:. `;
    }
    let i18n_38;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_pass_requirements_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS___39 = goog.getMsg(" The field password {$startTagStrong}does not match the requirements{$closeTagStrong}. ", {
        "startTagStrong": "\uFFFD#2\uFFFD",
        "closeTagStrong": "\uFFFD/#2\uFFFD"
      }, {
        original_code: {
          "startTagStrong": "<strong>",
          "closeTagStrong": "</strong>"
        }
      });
      i18n_38 = MSG_EXTERNAL_pass_requirements_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS___39;
    } else {
      i18n_38 = $localize`:@@pass_requirements-error␟bab835d02d236bcff4459a6383ee0d6e1dcc7f6e␟1572686913466736843: The field password ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:does not match the requirements${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:. `;
    }
    let i18n_40;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5937044327323768367$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__41 = goog.getMsg("Other data");
      i18n_40 = MSG_EXTERNAL_5937044327323768367$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__41;
    } else {
      i18n_40 = $localize`:␟c3f0b4b1ab9b6623222a03602042d3a4b5c0f4a5␟5937044327323768367:Other data`;
    }
    let i18n_42;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3914424327902242177$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__43 = goog.getMsg("I want to know why these extra data is needed to make a list to pack a suitcase.");
      i18n_42 = MSG_EXTERNAL_3914424327902242177$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_CORE_SETTINGS_CONTAINERS_SETTINGS_COMPONENT_TS__43;
    } else {
      i18n_42 = $localize`:␟c980d848a375e5604d1eee3ccd556db082ed9e2f␟3914424327902242177:I want to know why these extra data is needed to make a list to pack a suitcase.`;
    }
    return [[1, "form-settings", "form-contact", "col-sm-10", "col-lg-6", "col-xl-6", "offset-xl-1", 3, "formGroup"], [1, "search-wrapper"], [1, "modify-buttons"], [1, "button", "edit-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["viewMode", ""], ["class", "button edit-button", 3, "click", 4, "ngIf"], [1, "scrollable-area"], [1, "form-group"], [1, "full-width", 3, "appearance"], i18n_0, ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "name", "placeholder", "Introduce tu nombre de usuario"], [4, "ngIf"], i18n_2, ["type", "email", "matInput", "", "autocomplete", "off", "formControlName", "email", "placeholder", "Introduce email"], [1, "form-group", 3, "formGroup"], ["i81n", ""], ["type", "password", "matInput", "", "autocomplete", "off", "formControlName", "password", "placeholder", "*******"], ["class", "button-in-input", "matSuffix", "", "matTooltip", i18n_4, 3, "click", 4, "ngIf"], ["class", "mat-error--with-details", 4, "ngIf"], [1, "details"], ["id", "passwordHelp", 1, "form-text", "text-muted"], i18n_6, ["class", "full-width", 3, "appearance", 4, "ngIf"], ["class", "extra-fields-explanation", 4, "ngIf"], i18n_8, ["type", "number", "matInput", "", "formControlName", "age", "placeholder", i18n_10], [1, "form-group", 3, "ngClass"], [1, "gender-label"], i18n_12, ["formControlName", "gender", "aria-label", "Gender", 1, "radio-group"], ["value", "true"], i18n_14, ["value", "false"], i18n_16, ["alt", "login image", "src", "../../../../assets/img/settings/settings.PNG", 1, "settings-img"], i18n_18, ["aria-hidden", "false", "aria-label", "Edit data"], i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, ["matSuffix", "", "matTooltip", i18n_4, 1, "button-in-input", 3, "click"], [1, "mat-error--with-details"], i18n_30, i18n_32, i18n_34, ["type", "password", "matInput", "", "autocomplete", "off", "formControlName", "newPassword", "placeholder", "*******"], i18n_36, i18n_38, [1, "extra-fields-explanation"], i18n_40, ["href", "javascript:void(0)", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", 3, "click"], i18n_42];
  },
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "navbar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 0)(2, "div", 1)(3, "div", 2)(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_4_listener() {
        return ctx.toggleEditMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, SettingsComponent_ng_container_5_Template, 5, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SettingsComponent_ng_template_6_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SettingsComponent_button_8_Template, 5, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "mat-form-field", 9)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](13, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, SettingsComponent_mat_error_15_Template, 3, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "mat-form-field", 9)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](19, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, SettingsComponent_mat_error_21_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, SettingsComponent_mat_error_22_Template, 3, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 15)(24, "mat-form-field", 9)(25, "mat-label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Current password");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, SettingsComponent_mat_icon_28_Template, 2, 0, "mat-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SettingsComponent_mat_error_29_Template, 3, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SettingsComponent_mat_error_30_Template, 3, 0, "mat-error", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "details", 20)(32, "small", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](33, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, SettingsComponent_mat_form_field_34_Template, 6, 3, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SettingsComponent_div_35_Template, 6, 0, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 8)(37, "mat-form-field", 9)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](39, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 27)(42, "mat-label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](43, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-radio-group", 30)(45, "mat-radio-button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](46, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "mat-radio-button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](48, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "img", 35)(50, "footer-component");
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.settingsForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editMode)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editMode && ctx.settingsForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appearance", ctx.settingsForm.enabled ? "fill" : "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.get("name").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appearance", ctx.settingsForm.enabled ? "fill" : "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.get("email").hasError("email") && !ctx.settingsForm.get("email").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.get("email").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.passwordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appearance", ctx.settingsForm.enabled ? "fill" : "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.enabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.passwordForm.get("password").hasError("required"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.passwordForm.get("password").hasError("required") && ctx.passwordForm.get("password").hasError("forbiddenPassword"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPasswordChange);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingsForm.enabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appearance", ctx.settingsForm.enabled ? "fill" : "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c44, ctx.settingsForm.enabled));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavBarComponent, _shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip],
  styles: ["[_nghost-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.scrollable-area[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: scroll;\n  padding: 20px 0;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: auto;\n  z-index: 1;\n  position: relative;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .button-in-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  top: -5px;\n}\nform[_ngcontent-%COMP%]   .form-group.form-group--enabled[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  padding: 10px;\n}\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-group-error[_ngcontent-%COMP%] {\n  font-size: 10.5;\n  display: flex;\n  padding-left: 10px;\n  margin-top: -15px;\n}\nform[_ngcontent-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin-left: 5px;\n}\nform[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: relative;\n  top: -17px;\n  right: 0;\n  text-align: end;\n  padding: 10px;\n}\nform[_ngcontent-%COMP%]   .gender-label[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 300;\n  margin-top: 15px;\n  margin-left: 5px;\n}\nform[_ngcontent-%COMP%]   .small-hint[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 15px;\n  font-size: 10.5px;\n}\nform[_ngcontent-%COMP%]   .mat-error--with-details[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 80%;\n}\nform[_ngcontent-%COMP%]   .extra-fields-explanation[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\nform[_ngcontent-%COMP%]   .extra-fields-explanation[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  line-height: 8px;\n  text-decoration: underline;\n}\n\n.settings-img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 200px;\n  right: 25px;\n  border-radius: 60px;\n  z-index: 0;\n  height: 300px;\n}\n\n.modify-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.modify-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  width: 175px;\n}\n.modify-buttons[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9zZXR0aW5ncy9jb250YWluZXJzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNaO0FBRVE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUpSO0FBT0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTFI7QUFRSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTlI7QUFTSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQVBSO0FBVUk7RUFDSSxjQUFBO0FBUlI7QUFVUTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7QUFSWjs7QUFhQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFWSjtBQVlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVlI7QUFZUTtFQUNJLGdCQUFBO0FBVloiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2Nyb2xsYWJsZS1hcmVhIHtcbiAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMjBweCAwO1xufVxuXG5mb3JtIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAuYnV0dG9uLWluLWlucHV0IHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9ybS1ncm91cC0tZW5hYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWdyb3VwLWVycm9yIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yYWRpby1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0xN3B4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5nZW5kZXItbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIC5zbWFsbC1oaW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xuICAgIH1cblxuICAgIC5tYXQtZXJyb3ItLXdpdGgtZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiA4MCVcbiAgICB9XG5cbiAgICAuZXh0cmEtZmllbGRzLWV4cGxhbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbi5zZXR0aW5ncy1pbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjAwcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5tb2RpZnktYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgLmVkaXQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDE3NXB4O1xuXG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7918:
/*!**********************************************************!*\
  !*** ./src/app/core/settings/settings-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutingModule: () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _resolvers_settings_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolvers/settings-resolver */ 1297);
/* harmony import */ var _containers_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/settings.component */ 8707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  resolve: {
    user: _resolvers_settings_resolver__WEBPACK_IMPORTED_MODULE_0__.SettingsResolver
  },
  component: _containers_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent
}];
class SettingsRoutingModule {}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) {
  return new (t || SettingsRoutingModule)();
};
SettingsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SettingsRoutingModule
});
SettingsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 716:
/*!**************************************************!*\
  !*** ./src/app/core/settings/settings.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _resolvers_settings_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolvers/settings-resolver */ 1297);
/* harmony import */ var _containers_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/settings.component */ 8707);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ 7918);
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/navbar/navbar.module */ 9557);
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.module */ 4716);
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ 1508);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.service */ 2216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
















class SettingsModule {
  constructor() {}
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) {
  return new (t || SettingsModule)();
};
SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: SettingsModule
});
SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService, _settings_service__WEBPACK_IMPORTED_MODULE_6__.SettingsService, _resolvers_settings_resolver__WEBPACK_IMPORTED_MODULE_0__.SettingsResolver],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsRoutingModule,
  // application modules
  _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavBarModule, _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
  // Material design modules
  _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_containers_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsRoutingModule,
    // application modules
    _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__.NavBarModule, _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
    // Material design modules
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule],
    exports: [_containers_settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent]
  });
})();

/***/ }),

/***/ 2216:
/*!***************************************************!*\
  !*** ./src/app/core/settings/settings.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7708);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class SettingsService {
  constructor(_http) {
    this._http = _http;
    this.URL_UPDATE_USER = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users/update/';
  }
  update(user) {
    return this._http.put(this.URL_UPDATE_USER + user._id, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3));
  }
}
SettingsService.ɵfac = function SettingsService_Factory(t) {
  return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
SettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SettingsService,
  factory: SettingsService.ɵfac
});

/***/ }),

/***/ 2106:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   MAT_RADIO_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_RADIO_GROUP: () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MatRadioButton: () => (/* binding */ MatRadioButton),
/* harmony export */   MatRadioChange: () => (/* binding */ MatRadioChange),
/* harmony export */   MatRadioGroup: () => (/* binding */ MatRadioGroup),
/* harmony export */   MatRadioModule: () => (/* binding */ MatRadioModule),
/* harmony export */   _MatRadioButtonBase: () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   _MatRadioGroupBase: () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);











// Increasing integer for generating unique ids for radio components.
const _c0 = ["input"];
const _c1 = ["*"];
let nextUniqueId = 0;
/** Change event object emitted by radio button and radio group. */
class MatRadioChange {
  constructor( /** The radio button that emits the change event. */
  source, /** The value of the radio button. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatRadioGroup');
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
}
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */
    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */
    this._name = `mat-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */
    this._selected = null;
    /** Whether the `value` has been set to its initial value. */
    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */
    this._disabled = false;
    /** Whether the radio group is required. */
    this._required = false;
    /** The method to be called in order to update ngModel */
    this._controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    this.onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the MatRadioGroup.
    this._isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
_MatRadioGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required"
  },
  outputs: {
    change: "change"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}
const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }
      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Theme color of the radio button. */
  get color() {
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    /** The unique ID for the radio button. */
    this.id = this._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Whether this radio is checked. */
    this._checked = false;
    /** Value assigned to this radio. */
    this._value = null;
    /** Unregister function for _radioDispatcher */
    this._removeUniqueSelectionListener = () => {};
    // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === 'NoopAnimations';
    if (tabIndex) {
      this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      // Copy name from parent radio group
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled) {
      // Normally the input should be focused already, but if the click
      // comes from the touch target, then we might have to focus it ourselves.
      this._inputElement.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    // Implement a roving tabindex if the button is inside a group. For most cases this isn't
    // necessary, because the browser handles the tab order for inputs inside a group automatically,
    // but we need an explicitly higher tabindex for the selected button in order for things like
    // the focus trap to pick it up correctly.
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      // We have to set the tabindex directly on the DOM node, because it depends on
      // the selected state which is prone to "changed after checked errors".
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute('tabindex', value + '');
        this._previousTabIndex = value;
      }
    }
  }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};
_MatRadioButtonBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-describedby']
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {}
MatRadioGroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatRadioGroup_BaseFactory;
  return function MatRadioGroup_Factory(t) {
    return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup);
  };
}();
MatRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-mdc-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MatRadioButton), {
        descendants: true
      }]
    }]
  });
})();
class MatRadioButton extends _MatRadioButtonBase {
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex);
  }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'));
};
MatRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-mdc-radio-button"],
  hostVars: 15,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 17,
  consts: [[1, "mdc-form-field"], ["formField", ""], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "id", "checked", "disabled", "required", "change"], ["input", ""], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatRadioButton_Template_div_click_3_listener($event) {
        return ctx._onTouchTargetClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_4_listener($event) {
        return ctx._onInputInteraction($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition == "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-radio--disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", ctx.inputId);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-radio-button{--mdc-radio-disabled-selected-icon-opacity:0.38;--mdc-radio-disabled-unselected-icon-opacity:0.38;--mdc-radio-state-layer-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-radio-button',
      host: {
        'class': 'mat-mdc-radio-button',
        '[attr.id]': 'id',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        '[class.mat-mdc-radio-checked]': 'checked',
        '[class._mat-animation-noopable]': '_noopAnimations',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      inputs: ['disableRipple', 'tabIndex'],
      exportAs: 'matRadioButton',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mdc-form-field\" #formField\n     [class.mdc-form-field--align-end]=\"labelPosition == 'before'\">\n  <div class=\"mdc-radio\" [class.mdc-radio--disabled]=\"disabled\">\n    <!-- Render this element first so the input is on top. -->\n    <div class=\"mat-mdc-radio-touch-target\" (click)=\"_onTouchTargetClick($event)\"></div>\n    <input #input class=\"mdc-radio__native-control\" type=\"radio\"\n           [id]=\"inputId\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.value]=\"value\"\n           [required]=\"required\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInputInteraction($event)\">\n    <div class=\"mdc-radio__background\">\n      <div class=\"mdc-radio__outer-circle\"></div>\n      <div class=\"mdc-radio__inner-circle\"></div>\n    </div>\n    <div mat-ripple class=\"mat-radio-ripple mat-mdc-focus-indicator\"\n         [matRippleTrigger]=\"formField\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\">\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n  <label class=\"mdc-label\" [for]=\"inputId\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
      styles: [".mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-radio-button{--mdc-radio-disabled-selected-icon-opacity:0.38;--mdc-radio-disabled-unselected-icon-opacity:0.38;--mdc-radio-state-layer-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();
class MatRadioModule {}
MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
  return new (t || MatRadioModule)();
};
MatRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, MatRadioGroup, MatRadioButton],
      declarations: [MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_core_settings_settings_module_ts.js.map