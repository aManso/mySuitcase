"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_public_contact_contact_module_ts"],{

/***/ 7037:
/*!**********************************************************!*\
  !*** ./src/app/public/contact/contact-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactRoutingModule: () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _containers_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/contact.component */ 9215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




// Root routes of this particular module: HOME.
const routes = [{
  path: '',
  component: _containers_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}];
class ContactRoutingModule {}
ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) {
  return new (t || ContactRoutingModule)();
};
ContactRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ContactRoutingModule
});
ContactRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7909:
/*!**************************************************!*\
  !*** ./src/app/public/contact/contact.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/shared.module */ 1782);
/* harmony import */ var _containers_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/contact.component */ 9215);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-routing.module */ 7037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class ContactModule {
  constructor() {}
}
ContactModule.ɵfac = function ContactModule_Factory(t) {
  return new (t || ContactModule)();
};
ContactModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ContactModule
});
ContactModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_containers_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContactRoutingModule]
  });
})();

/***/ }),

/***/ 9215:
/*!****************************************************************!*\
  !*** ./src/app/public/contact/containers/contact.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/shared/navbar/containers/navbar.component */ 8882);
/* harmony import */ var _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/footer/containers/footer.component */ 1584);




class ContactComponent {
  constructor() {}
  ngOnInit() {}
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-home"]],
  decls: 50,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_641716500460785755$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_1 = goog.getMsg("Get in Touch");
      i18n_0 = MSG_EXTERNAL_641716500460785755$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟33f46beae629773ad255e544725fff33320bd732␟641716500460785755:Get in Touch`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7000694294523796622$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_3 = goog.getMsg("Enter Message");
      i18n_2 = MSG_EXTERNAL_7000694294523796622$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟9780fc3d4a4f60a27b2644620704fb48cb9cdb86␟7000694294523796622:Enter Message`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3264452655068017433$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_5 = goog.getMsg("Enter your name");
      i18n_4 = MSG_EXTERNAL_3264452655068017433$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟620ba8f74432771cec99850c63742aa11e19be33␟3264452655068017433:Enter your name`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3693700889630183849$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_7 = goog.getMsg("Enter email address");
      i18n_6 = MSG_EXTERNAL_3693700889630183849$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:␟573aa2d5e345bba90280c79969dc0e9a781a26bc␟3693700889630183849:Enter email address`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8366073121212144873$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_9 = goog.getMsg("Enter Subject");
      i18n_8 = MSG_EXTERNAL_8366073121212144873$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟91943b47b5359a9ab3e474ee0443817378100cc4␟8366073121212144873:Enter Subject`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8730666920545442370$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_11 = goog.getMsg("Send Message");
      i18n_10 = MSG_EXTERNAL_8730666920545442370$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_11;
    } else {
      i18n_10 = $localize`:␟7d175f1b7310aecce08c1141c9ba8588b8642a99␟8730666920545442370:Send Message`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6399026231139098247$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_13 = goog.getMsg("\uD83D\uDCCD Spain.");
      i18n_12 = MSG_EXTERNAL_6399026231139098247$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_13;
    } else {
      i18n_12 = $localize`:␟d6bbf648820068c3a29583083524d7c848aa5773␟6399026231139098247:📍 Spain.`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8009256604832812610$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_15 = goog.getMsg("Not available yet");
      i18n_14 = MSG_EXTERNAL_8009256604832812610$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_15;
    } else {
      i18n_14 = $localize`:␟79808490a9d863954a8070d377d889fc0963515c␟8009256604832812610:Not available yet`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4975993296533337997$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_17 = goog.getMsg("Send us your query anytime!");
      i18n_16 = MSG_EXTERNAL_4975993296533337997$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_CONTACT_CONTAINERS_CONTACT_COMPONENT_TS_17;
    } else {
      i18n_16 = $localize`:␟180cbbc855314cc56905b57ad77d981d70ff5c52␟4975993296533337997:Send us your query anytime!`;
    }
    return [[1, "hero-banner", "magic-ball"], [1, "container"], [1, "row"], [1, "col-12"], [1, "contact-title"], i18n_0, [1, "col-lg-8"], ["action", "contact_process.php", "method", "post", "id", "contactForm", "novalidate", "novalidate", 1, "form-contact", "contact_form"], [1, "col-12", "form-group"], ["name", "message", "id", "message", "cols", "30", "rows", "9", "placeholder", i18n_2, 1, "form-control", "w-100"], [1, "col-sm-6"], [1, "form-group"], ["name", "name", "id", "name", "type", "text", "placeholder", i18n_4, 1, "form-control"], ["name", "email", "id", "email", "type", "email", "placeholder", i18n_6, 1, "form-control"], ["name", "subject", "id", "subject", "type", "text", "placeholder", i18n_8, 1, "form-control"], [1, "form-group", "mt-3"], ["type", "submit", 1, "button", "button-contactForm"], i18n_10, [1, "col-lg-4"], [1, "media", "contact-info"], [1, "contact-info__icon"], [1, "ti-home"], [1, "media-body"], i18n_12, [1, "ti-tablet"], ["href", "tel:666666666"], i18n_14, [1, "ti-email"], ["href", "mailto:mysuitcase@gmail.com"], i18n_16];
  },
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "navbar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "form", 7)(9, "div", 2)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3)(19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 22)(29, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](30, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u260E\uFE0F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](38, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19)(40, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 22)(43, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\uD83D\uDCE9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "mysuitcase@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](48, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "footer-component");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_public_contact_contact_module_ts.js.map