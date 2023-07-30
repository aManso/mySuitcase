"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_public_home_home_module_ts"],{

/***/ 4535:
/*!*****************************************!*\
  !*** ./src/app/core/models/suitcase.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Suitcase: () => (/* binding */ Suitcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Suitcase {
  // constructor(name: string, date: {from: Date, to: Date}, place: TripLocation, type: TripType, isInProgress: boolean) {
  constructor(suitcase) {
    this._dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    this._id = suitcase._id;
    this.name = suitcase.name;
    this.icon = suitcase.icon;
    this.date = suitcase.date;
    this.place = suitcase.place;
    this.type = suitcase.type;
    this.isInProgress = !!suitcase.isInProgress;
    this.items = suitcase.items || [];
  }
  isNorthHemisphere() {
    return this.place.coordinates.lat > 0;
  }
  isSouthHemisphere() {
    return this.place.coordinates.lat < 0;
  }
  print() {
    console.log(`${this.name} / ${this.date.from} - ${this.date.to} / ${this.place} - ${this.type} - ${this.isInProgress} - `);
  }
  getPrintDate(localeId) {
    return new Date(this.date.from).toLocaleString(localeId, this._dateOptions) + ' - ' + new Date(this.date.to).toLocaleString(localeId, this._dateOptions);
  }
  getPrintPlace() {
    return this.place.city + ', ' + this.place.country;
  }
}
Suitcase.ɵfac = function Suitcase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
Suitcase.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Suitcase
});

/***/ }),

/***/ 6375:
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService),
/* harmony export */   configServiceFactory: () => (/* binding */ configServiceFactory)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ 2018);

class ConfigService {
  getMaximumSuitcases(isPremium) {
    return isPremium ? _config_config__WEBPACK_IMPORTED_MODULE_0__.MAX_ALLOWED_SUITCASES_PREMIUM : _config_config__WEBPACK_IMPORTED_MODULE_0__.MAX_ALLOWED_SUITCASES;
  }
}
const configServiceFactory = () => {
  return new ConfigService();
};

/***/ }),

/***/ 4418:
/*!***********************************************************************************************!*\
  !*** ./src/app/public/home/containers/create-suitcase-form/create-suitcase-form.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateSuitcaseFormComponent: () => (/* binding */ CreateSuitcaseFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_amanso_git_mySuitcase_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_models_suitcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/models/suitcase */ 4535);
/* harmony import */ var src_app_core_const_backend_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/const/backend-errors */ 4166);
/* harmony import */ var src_app_core_shared_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/shared/error-dialog/error-dialog.component */ 6052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/suitcase.service */ 1805);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);



















function CreateSuitcaseFormComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateSuitcaseFormComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.goPreviousQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CreateSuitcaseFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateSuitcaseFormComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateSuitcaseFormComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CreateSuitcaseFormComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 44)(2, "div", 45)(3, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r13.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r13.value.name);
  }
}
function CreateSuitcaseFormComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "mat-checkbox", 48)(2, "div", 45)(3, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "water");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-checkbox", 50)(8, "div", 45)(9, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "pedal_bike");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](12, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.sportForm);
  }
}
function CreateSuitcaseFormComponent_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateSuitcaseFormComponent_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.nextQuestion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r9.isDisabled());
  }
}
function CreateSuitcaseFormComponent_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateSuitcaseFormComponent_button_57_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.saveSuitcase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.isDisabled());
  }
}
const suitcaseNameMaxLength = 20;
class CreateSuitcaseFormComponent {
  constructor(_formBuilder, _router, _suitcaseService, _dialog) {
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._suitcaseService = _suitcaseService;
    this._dialog = _dialog;
    this.color = 'primary';
    this.mode = 'determinate';
    this.currentDate = new Date();
    this.steps = [{
      id: 'name-form-field',
      stepNr: 1,
      headerText: $localize`Name of the suitcase`
    }, {
      id: 'date-form-field',
      stepNr: 2,
      headerText: $localize`Dates of the trip`
    }, {
      id: 'place-form-field',
      stepNr: 3,
      headerText: $localize`Place of the trip`
    }, {
      id: 'type-form-field',
      stepNr: 4,
      headerText: '-'
    }];
    this.lat = 41.646961;
    this.lng = -4.745940;
  }
  ngOnInit() {
    this.currentQuestion = this.steps[0].stepNr;
    this.percentagePerQuestion = 100 / this.steps.length;
    this._updateProgressBar();
    this._createForm();
  }
  // **** GENERIC METHODS *****
  _createForm() {
    this.sportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
      'cycling': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(false),
      'diving': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(false)
    });
    this.createSuitcaseForm = this._formBuilder.group({
      name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(suitcaseNameMaxLength)]],
      from: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      to: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      place: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(suitcaseNameMaxLength)]],
      type: this._buildOptionList(),
      sports: this.sportForm
    });
  }
  getTypeControls(typeControl) {
    return typeControl.controls;
  }
  isSportsSelected() {
    return this.createSuitcaseForm.controls.type.controls[2].value.selected;
  }
  _updateProgressBar() {
    this.progressBarValue = this.percentagePerQuestion * this.currentQuestion;
  }
  _buildOptionList() {
    const list = [{
      name: $localize`:@@category_beach:beach`,
      icon: 'beach_access',
      selected: false
    }, {
      name: $localize`:@@category_mountain:mountain`,
      icon: 'filter_hdr',
      selected: false
    }, {
      name: $localize`:@@category_sport:sport`,
      icon: 'sports_soccer',
      selected: false
    }, {
      name: $localize`:@@category_pet:pet`,
      icon: 'pets',
      selected: false
    }, {
      name: $localize`:@@category_baby:baby`,
      icon: 'baby_changing_station',
      selected: false
    }];
    const arr = list.map(option => {
      return this._formBuilder.group(option);
    });
    return this._formBuilder.array(arr);
  }
  _updateHeader(questionNr) {
    document.getElementById('create-form-header__text').innerHTML = questionNr > 0 ? this.steps[questionNr - 1].headerText : 'Empecemos';
  }
  isDisabled() {
    switch (this.currentQuestion) {
      case 1:
        return this.createSuitcaseForm.controls.name.invalid;
      case 2:
        return this.createSuitcaseForm.controls.from.invalid || this.createSuitcaseForm.controls.to.invalid;
      case 3:
        return this.createSuitcaseForm.controls.place.invalid;
      case 4:
        return false;
    }
  }
  saveSuitcase() {
    if (this.createSuitcaseForm.valid) {
      const suitcase = new _core_models_suitcase__WEBPACK_IMPORTED_MODULE_1__.Suitcase({
        name: this.createSuitcaseForm.value.name,
        date: {
          from: this.createSuitcaseForm.value.from,
          to: this.createSuitcaseForm.value.to
        },
        place: this.createSuitcaseForm.value.place,
        type: this._transformListToObject(this.createSuitcaseForm.value.type, this._getSelectedSports(this.createSuitcaseForm.value.sports)),
        items: [],
        isInProgress: true
      });
      this._suitcaseService.saveSuitcase(suitcase).subscribe({
        next: () => this._goToCreateSuitcase(),
        error: error => {
          if (error.error === src_app_core_const_backend_errors__WEBPACK_IMPORTED_MODULE_2__.BACKEND_ERROR_TYPES.MAX_SUITCASES_REACHED) {
            const dialogRef = this._dialog.open(src_app_core_shared_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ErrorDialogComponent, {
              height: '200px',
              width: '400px',
              hasBackdrop: true,
              data: src_app_core_const_backend_errors__WEBPACK_IMPORTED_MODULE_2__.BACKEND_ERRORS.MAX_SUITCASES_REACHED
            });
            dialogRef.afterClosed().subscribe(confirm => {
              this._router.navigate(['home']);
              // TODO quitar formulario de creacion
            });
          }
        }
      });
    }
  }

  _getSelectedSports(sports) {
    return Object.keys(sports).filter(key => {
      return sports[key];
    });
  }
  _transformListToObject(optionList, sports) {
    const tripType = {
      common: {
        selected: true,
        currentPriority: 1,
        currentPage: 1
      }
    };
    optionList.forEach(option => {
      tripType[option.name] = {
        selected: option.selected,
        currentPriority: 1,
        currentPage: 1,
        sports: option.name === 'sport' ? sports : undefined
      };
    });
    return tripType;
  }
  // ******* NAVIGATE BACK AND FORWARD **********
  goPreviousQuestion() {
    // remove the classes in case we went back and forward
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromBottom');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 2].id).classList.remove('disappearToTop');
    // add the classes to disappear the current question and introduce the previous one
    document.getElementById(this.steps[this.currentQuestion - 2].id).classList.add('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToBottom');
    // update the rest of the variables to be in the second question
    this._updateHeader(this.currentQuestion);
    this.currentQuestion = this.currentQuestion - 1;
    this._updateProgressBar();
  }
  nextQuestion() {
    // remove the classes in case we went back and forward
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('disappearToBottom');
    document.getElementById(this.steps[this.currentQuestion].id).classList.remove('disappearToBottom');
    // add the classes to disappear the current question and introduce the next one
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToTop');
    document.getElementById(this.steps[this.currentQuestion].id).classList.add('appearFromBottom');
    // update the rest of the variables to be in the second question
    this._updateHeader(this.currentQuestion);
    this.currentQuestion = this.currentQuestion + 1;
    if (this.currentQuestion === 3) {
      this._mapInitializer();
    }
    this._updateProgressBar();
  }
  _goToCreateSuitcase() {
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToTop');
    setTimeout(() => {
      this._router.navigate(['/create-suitcase']);
    }, 1000);
  }
  // ******* MAP **********
  _mapInitializer() {
    var _this = this;
    return (0,_Users_amanso_git_mySuitcase_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const coordinates = yield new google.maps.LatLng(_this.lat, _this.lng);
      const map = yield new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 6
      });
      // In case we want to set up an initial marker in the map
      // this.marker.setMap(map);
      const input = document.getElementById('pac-input');
      // In case we want to insert the input inside the map
      // const card = document.getElementById('pac-card') as HTMLElement;
      // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
      const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['(cities)']
      });
      // Bind the map's bounds (viewport) property to the autocomplete object,
      // so that the autocomplete requests use the current map bounds for the
      // bounds option in the request.
      autocomplete.bindTo('bounds', map);
      // Set the data fields to return when the user selects a place.
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent);
      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29)
      });
      autocomplete.addListener('place_changed', () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert('No details available for input: ' + place.name);
          return;
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17); // Why 17? Because it looks good.
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        let address = '';
        if (place.address_components) {
          address = [place.address_components[0] && place.address_components[0].short_name || '', place.address_components[1] && place.address_components[1].short_name || '', place.address_components[2] && place.address_components[2].short_name || ''].join(' ');
        }
        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        infowindow.open(map, marker);
        _this._setPlaceValue(place);
      });
    })();
  }
  _setPlaceValue(place) {
    const tripLocation = {
      country: this._getLocationValue(place.address_components, 'country'),
      city: this._getLocationValue(place.address_components, 'locality'),
      street: this._getLocationValue(place.address_components, 'route'),
      coordinates: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    };
    this.createSuitcaseForm.controls.place.setValue(tripLocation);
  }
  _getLocationValue(listOfValues, type) {
    const name = listOfValues.find(item => {
      return item.types.some(typeInList => typeInList === type);
    });
    return name ? name.long_name : name;
  }
}
CreateSuitcaseFormComponent.ɵfac = function CreateSuitcaseFormComponent_Factory(t) {
  return new (t || CreateSuitcaseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_4__.SuitcaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
};
CreateSuitcaseFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CreateSuitcaseFormComponent,
  selectors: [["my-suitcase-create-suitcase-form"]],
  decls: 59,
  vars: 23,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2100455397991898757$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_1 = goog.getMsg("Lets start");
      i18n_0 = MSG_EXTERNAL_2100455397991898757$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟8c4f177cdc222e765cce298020f5ec719f789c19␟2100455397991898757:Lets start`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5340475093705470306$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_3 = goog.getMsg("Name of the suitcase");
      i18n_2 = MSG_EXTERNAL_5340475093705470306$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟1ba400d533d0b88a7996158a94f3c2b70fc62978␟5340475093705470306:Name of the suitcase`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8953033926734869941$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_5 = goog.getMsg("Name");
      i18n_4 = MSG_EXTERNAL_8953033926734869941$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4828087751373130337$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_7 = goog.getMsg("Max 20 characters");
      i18n_6 = MSG_EXTERNAL_4828087751373130337$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:␟168c734e43604de4ba27522ac6bc44df109e010f␟4828087751373130337:Max 20 characters`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5203279511751768967$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_9 = goog.getMsg("From");
      i18n_8 = MSG_EXTERNAL_5203279511751768967$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_9;
    } else {
      i18n_8 = $localize`:␟d5e0dbc9fd4651759df915cdc6ba26fe3f17475f␟5203279511751768967:From`;
    }
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1640609344969975994$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_11 = goog.getMsg("To");
      i18n_10 = MSG_EXTERNAL_1640609344969975994$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_11;
    } else {
      i18n_10 = $localize`:␟63c9c3aa536dbd11120ae8feab62186c47838028␟1640609344969975994:To`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6664317470708801192$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_13 = goog.getMsg("We are you going?");
      i18n_12 = MSG_EXTERNAL_6664317470708801192$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_13;
    } else {
      i18n_12 = $localize`:␟2bc0707d5bac822b462921584d62c3ea46d4701c␟6664317470708801192:We are you going?`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4704052443330157891$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_15 = goog.getMsg("Choose a city");
      i18n_14 = MSG_EXTERNAL_4704052443330157891$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_15;
    } else {
      i18n_14 = $localize`:␟e52c9171ae5c8034ed53e3cd62b95eef010136b2␟4704052443330157891:Choose a city`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_910729252865078321$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_17 = goog.getMsg("What kind of trip are you going to do?");
      i18n_16 = MSG_EXTERNAL_910729252865078321$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS_17;
    } else {
      i18n_16 = $localize`:␟5c0bf703ccbad1fb159c93fa35a1b9ffcd709767␟910729252865078321:What kind of trip are you going to do?`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4928658075097440867$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__19 = goog.getMsg("The name of the suitcase can exceed of 20 characters");
      i18n_18 = MSG_EXTERNAL_4928658075097440867$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__19;
    } else {
      i18n_18 = $localize`:␟e3934bf67b73a812c8335b38a055c7a43486b1dd␟4928658075097440867:The name of the suitcase can exceed of 20 characters`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_date_format_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__21 = goog.getMsg("The date format is wrong");
      i18n_20 = MSG_EXTERNAL_date_format_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__21;
    } else {
      i18n_20 = $localize`:@@date_format-error␟154dc5b19605741ad225befe1969c06ee6292f10␟6120265425845810383:The date format is wrong`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_date_format_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__23 = goog.getMsg("The date format is wrong");
      i18n_22 = MSG_EXTERNAL_date_format_error$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__23;
    } else {
      i18n_22 = $localize`:@@date_format-error␟154dc5b19605741ad225befe1969c06ee6292f10␟6120265425845810383:The date format is wrong`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5852914922335643166$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__25 = goog.getMsg("Diving");
      i18n_24 = MSG_EXTERNAL_5852914922335643166$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__25;
    } else {
      i18n_24 = $localize`:␟f8e34b8db458325fb576e4b56d3336518ec4db2b␟5852914922335643166:Diving`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1807083509632262038$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__27 = goog.getMsg("Cycling");
      i18n_26 = MSG_EXTERNAL_1807083509632262038$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__27;
    } else {
      i18n_26 = $localize`:␟04c1c08714400a0e4656056a2ce008cecd52cb6b␟1807083509632262038:Cycling`;
    }
    let i18n_28;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_continue_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__29 = goog.getMsg("Continue");
      i18n_28 = MSG_EXTERNAL_continue_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__29;
    } else {
      i18n_28 = $localize`:@@continue_button␟ac10a3d9b59575640797c1a8e6aea642cf5d5e77␟6962699013778688473:Continue`;
    }
    let i18n_30;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3015504062651300705$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__31 = goog.getMsg("Make the list");
      i18n_30 = MSG_EXTERNAL_3015504062651300705$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_CREATE_SUITCASE_FORM_CREATE_SUITCASE_FORM_COMPONENT_TS__31;
    } else {
      i18n_30 = $localize`:␟376a5771abc3b4dce4cdf2e86dca0284d05da5a5␟3015504062651300705:Make the list`;
    }
    return [["id", "create-form-header"], ["id", "create-form-header__text"], i18n_0, ["mat-mini-fab", "", "color", "primary", "aria-label", "Go back to previous question", "class", "button", 3, "click", 4, "ngIf"], ["id", "create-form-content"], ["id", "createSuitcaseForm", 3, "formGroup"], [3, "id"], ["appearance", "outline", 1, "question"], i18n_2, ["matInput", "", "placeholder", i18n_4, "formControlName", "name", "required", ""], ["matSuffix", "", 1, "icon"], i18n_6, [4, "ngIf"], ["appearance", "fill"], i18n_8, ["matInput", "", "formControlName", "from", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], i18n_10, ["matInput", "", "formControlName", "to", 3, "matDatepicker", "min"], ["pickerTo", ""], ["appearance", "outline", "id", "pac-card", 1, "question", "pac-card"], i18n_12, ["id", "pac-input", "matInput", "", "placeholder", i18n_14, "required", ""], ["id", "map"], ["mapContainer", ""], ["id", "infowindow-content"], ["src", "", "width", "16", "height", "16", "id", "place-icon"], ["id", "place-name", 1, "title"], ["id", "place-address"], [1, "type-options__card"], ["formArrayName", "type"], i18n_16, ["id", "type_options"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["id", "type__sub-options", 3, "formGroup", 4, "ngIf"], ["id", "button-wrapper"], ["mat-raised-button", "", "color", "primary", "class", "button", 3, "disabled", "click", 4, "ngIf"], [1, "text-start", 3, "color", "mode", "value", "bufferValue"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Go back to previous question", 1, "button", 3, "click"], i18n_18, i18n_20, i18n_22, [3, "formGroupName"], ["formControlName", "selected"], [1, "category-description__container"], [1, "icon"], ["id", "type__sub-options", 3, "formGroup"], ["formControlName", "diving", 1, ""], i18n_24, ["formControlName", "cycling", 1, ""], i18n_26, ["mat-raised-button", "", "color", "primary", 1, "button", 3, "disabled", "click"], i18n_28, i18n_30];
  },
  template: function CreateSuitcaseFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CreateSuitcaseFormComponent_button_3_Template, 3, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "form", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](9, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](14, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CreateSuitcaseFormComponent_mat_error_15_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6)(17, "mat-form-field", 13)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](19, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 15)(21, "mat-datepicker-toggle", 16)(22, "mat-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CreateSuitcaseFormComponent_mat_error_24_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-form-field", 13)(26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](27, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 19)(29, "mat-datepicker-toggle", 16)(30, "mat-datepicker", null, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CreateSuitcaseFormComponent_mat_error_32_Template, 2, 0, "mat-error", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 6)(34, "mat-form-field", 21)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](36, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "public");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "div", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "img", 27)(44, "span", 28)(45, "br")(46, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 6)(48, "mat-card", 30)(49, "div", 31)(50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](51, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, CreateSuitcaseFormComponent_ng_container_53_Template, 7, 3, "ng-container", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, CreateSuitcaseFormComponent_div_54_Template, 13, 1, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, CreateSuitcaseFormComponent_button_56_Template, 2, 1, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, CreateSuitcaseFormComponent_button_57_Template, 2, 1, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "mat-progress-bar", 38);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentQuestion > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.createSuitcaseForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx.steps[0].id);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.createSuitcaseForm.controls.name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx.steps[1].id);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r2)("min", ctx.currentDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.createSuitcaseForm.controls.from.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx.createSuitcaseForm.controls.from.value ? ctx.createSuitcaseForm.controls.from.value : ctx.currentDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.createSuitcaseForm.controls.to.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx.steps[2].id);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx.steps[3].id);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.getTypeControls(ctx.createSuitcaseForm.controls.type));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSportsSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentQuestion !== ctx.steps.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentQuestion === ctx.steps.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mode)("value", ctx.progressBarValue)("bufferValue", 100);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBar, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatMiniFabButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  padding-bottom: 40px;\n  width: 100%;\n}\n\n#create-form-header[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: #394359;\n  color: white;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n#createSuitcaseForm[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  min-height: 200px;\n}\n\n#create-form-content[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 20px;\n  width: 75%;\n  height: calc(100% - 50px);\n}\n#create-form-content[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n\n#name-form-field[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n\n#button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n}\n\n#date-form-field[_ngcontent-%COMP%], #place-form-field[_ngcontent-%COMP%], #type-form-field[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n}\n\n#name-form-field[_ngcontent-%COMP%], #date-form-field[_ngcontent-%COMP%], #type-form-field[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n#date-form-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n#place-form-field[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n#type-form-field[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n#type-form-field[_ngcontent-%COMP%]   .type-options__card[_ngcontent-%COMP%] {\n  width: 70%;\n  max-height: 300px;\n  overflow-y: scroll;\n}\n@media (max-width: 768px) {\n  #type-form-field[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n#type-form-field[_ngcontent-%COMP%]   #type_options[_ngcontent-%COMP%], #type-form-field[_ngcontent-%COMP%]   #type__sub-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0 0;\n}\n#type-form-field[_ngcontent-%COMP%]   #type_options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%], #type-form-field[_ngcontent-%COMP%]   #type__sub-options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 0.5em;\n  padding-top: 0.5rem;\n}\n#type-form-field[_ngcontent-%COMP%]   #type_options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], #type-form-field[_ngcontent-%COMP%]   #type__sub-options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n#type-form-field[_ngcontent-%COMP%]   #type_options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]:hover, #type-form-field[_ngcontent-%COMP%]   #type__sub-options[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]:hover {\n  background-color: lavender;\n}\n#type-form-field[_ngcontent-%COMP%]   #type__sub-options[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n#type-form-field[_ngcontent-%COMP%]   .category-description__container[_ngcontent-%COMP%] {\n  display: flex;\n}\n#type-form-field[_ngcontent-%COMP%]   .category-description__container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.appearFromBottom[_ngcontent-%COMP%] {\n  display: flex !important;\n  animation-name: _ngcontent-%COMP%_appearFromBottom;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_appearFromBottom;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n.disappearToTop[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_disappearToTop;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_disappearToTop;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n.appearFromTop[_ngcontent-%COMP%] {\n  display: flex !important;\n  animation-name: _ngcontent-%COMP%_appearFromTop;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_appearFromTop;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n.disappearToBottom[_ngcontent-%COMP%] {\n  display: flex !important;\n  animation-name: _ngcontent-%COMP%_disappearToBottom;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_disappearToBottom;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_disappearToTop {\n  \n\n  0% {\n    bottom: 0;\n  }\n  \n\n  100% {\n    bottom: 350%;\n  }\n}\n@keyframes _ngcontent-%COMP%_appearFromBottom {\n  \n\n  0% {\n    top: 350%;\n  }\n  \n\n  100% {\n    top: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_disappearToBottom {\n  \n\n  0% {\n    top: 0;\n  }\n  \n\n  100% {\n    top: 350%;\n  }\n}\n@keyframes _ngcontent-%COMP%_appearFromTop {\n  \n\n  0% {\n    top: -350%;\n  }\n  \n\n  100% {\n    top: 0;\n  }\n}\n@media (max-width: 750px) {\n  #createSuitcaseForm[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n  #date-form-field[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n}\n#infowindow-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n\n\n\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 300px;\n}\n\n\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#description[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n#infowindow-content[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#map[_ngcontent-%COMP%]   #infowindow-content[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.pac-card[_ngcontent-%COMP%] {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto;\n}\n\n.pac-controls[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 11px;\n}\n\n.pac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n#pac-input[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n#pac-input[_ngcontent-%COMP%]:focus {\n  border-color: #4d90fe;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2hvbWUvY29udGFpbmVycy9jcmVhdGUtc3VpdGNhc2UtZm9ybS9jcmVhdGUtc3VpdGNhc2UtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUVBLFlBQUE7QUFLQSxnQkFBQTtBQUtBLG9CQUFBO0FBZ0JBOzs7O1NBQUE7QUFPQSxpQkFBQTtBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUM3QkY7O0FBWkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFlRjs7QUFaQTtFQUNFLG1CQUFBO0VBQ0EseUJER2U7RUNGZixZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBaEJjO0VBaUJkLDhCQUFBO0VBQ0EsZUFBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFlRjtBQWJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBZUo7O0FBWEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFjRjs7QUFYQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFjRjs7QUFYQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWNGOztBQVhBO0VBQ0UsaUJBQUE7QUFjRjs7QUFURTtFQUNFLGNBQUE7QUFZSjs7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUFXRjs7QUFSQTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQVdGO0FBVEU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVdKO0FBUkU7RUFDRTtJQUNFLFdBQUE7RUFVSjtBQUNGO0FBUEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVNOO0FBUE07RUFDRSxjQUFBO0FBU1I7QUFOTTtFQUNFLDBCQUFBO0FBUVI7QUFIRTtFQUNFLGtCQUFBO0FBS0o7QUFGRTtFQUNFLGFBQUE7QUFJSjtBQUZJO0VBQ0UsaUJBQUE7QUFJTjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQTtJQUNFLFNBQUE7RUFDRjtFQUNBLG1DQUFBO0VBQ0E7SUFDRSxZQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0UsbUNBQUE7RUFDQTtJQUNFLFNBQUE7RUFBRjtFQUVBLG1DQUFBO0VBQ0E7SUFDRSxNQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsbUNBQUE7RUFDQTtJQUNFLE1BQUE7RUFERjtFQUdBLG1DQUFBO0VBQ0E7SUFDRSxTQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UsbUNBQUE7RUFDQTtJQUNFLFVBQUE7RUFGRjtFQUlBLG1DQUFBO0VBQ0E7SUFDRSxNQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxpQkFBQTtFQUhGO0VBTUE7SUFDRSxzQkFBQTtJQUNBLDJCQUFBO0VBSkY7QUFDRjtBQVFBO0VBQ0UsaUJBQUE7QUFORjs7QUFRQTt5Q0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBTEY7O0FBT0EscURBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29tbW9uIHZhcmlhYmxlcyBmb3IgYWxsIHRoZSBhcHAgKi9cblxuLyogU2NyZWVucyAqL1xuJGRlc2t0b3A6IDk5MnB4O1xuJHRhYmxldDogIDc2OHB4O1xuJG1vYmlsZTogIDU3NnB4O1xuXG4vKiBGb250IGZhbWlseSAqL1xuJHRpdGxlLWZvbnQ6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiR0ZXh0LWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG5cbi8qIENvbG9yIHZhcmlhYmxlcyAqL1xuJHRpdGxlLWNvbG9yOiAjMmEyYTJhO1xuJHRleHQtY29sb3I6ICM4ODg4ODg7XG4kcHJpbWFyeS1jb2xvcjogI0Q4OEE4MztcbiRzZWNvbmRhcnktY29sb3I6ICNCQTZDNjU7XG4kdGVydGlhcnktY29sb3I6ICMzOTQzNTk7XG4kbGluay1jb2xvci1zZWNvbmRhcnk6ICMwMDdiZmY7XG5cbiRlcnJvci1jb2xvcjogI2MyNDgzZDtcbiRzdWNjZXNzLWNvbG9yOiAjMmQ2MzM5O1xuXG5cbiRibGFjazogIzI0MjQyOTtcbiRsaW5rLWNvbG9yOiAjNzc3Nzc3O1xuJHdoaXRlOiAjZmZmO1xuXG4vKiAjRDg4QTgzXG4jQkE2QzY1XG4jRjJCRThEXG4jMzk0MzU5XG4jMzAzMjQyICovXG5cblxuLyogR29vZ2xlIGZvbnRzICovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6NzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwJyk7XG5cblxuXG4vLyBTaGFyZWQgc3R5bGVzXG4ubmF2LWxpbmt7XG4gIGNvbG9yOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4kZGVmYXVsdC1wYWRkaW5nOiAyMHB4O1xuJG1pbi1oZWFkZXItaGVpZ2h0OiAxMTBweDtcbiRtYXgtZm9vdGVyLWhlaWdodDogMTc1cHg7XG4kbWF4LWZvb3Rlci1oZWlnaHQtZnVsbC1zY3JlZW46IDE0MHB4O1xuXG4vLyBGT05ULVNJWkVcbiRmb250LXNpemUtYmlnLXh4OiAyNHB4O1xuJGZvbnQtc2l6ZS1iaWcteDogMjBweDtcbiRmb250LXNpemUtYmlnOiAxOHB4O1xuJGZvbnQtc2l6ZS1ub3JtYWwteDogMTZweDtcbiRmb250LXNpemUtbm9ybWFsOiAxNHB4O1xuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcbiRmb250LXNpemUtc21hbGwteDogMTBweDtcbiRmb250LXNpemUtc21hbGwteHg6IDlweDtcbiRmb250LXNpemUtc21hbGwteHh4OiA4cHg7XG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NyZWF0ZS1mb3JtLWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuI2NyZWF0ZVN1aXRjYXNlRm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyMDBweDsgLy8gMTAwIGZvciB0aGUgcXVlc3Rpb24gYmxvY2sgKyAzNXB4IGZvciB0aGUgYnV0dG9uICsgMTUgdG8gc2VwYXJhdGVcbn1cblxuI2NyZWF0ZS1mb3JtLWNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWhlaWdodH0pO1xuXG4gIC5xdWVzdGlvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiNuYW1lLWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZGF0ZS1mb3JtLWZpZWxkLCAjcGxhY2UtZm9ybS1maWVsZCwgI3R5cGUtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI25hbWUtZm9ybS1maWVsZCwgI2RhdGUtZm9ybS1maWVsZCwgI3R5cGUtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4jZGF0ZS1mb3JtLWZpZWxkIHtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbn1cblxuI3BsYWNlLWZvcm0tZmllbGQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiN0eXBlLWZvcm0tZmllbGQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAudHlwZS1vcHRpb25zX19jYXJkIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICBtYXQtY2FyZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAjdHlwZV9vcHRpb25zLCAjdHlwZV9fc3ViLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMDtcblxuICAgIG1hdC1jaGVja2JveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMCAwLjVlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjdHlwZV9fc3ViLW9wdGlvbnMge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgfVxuXG4gIC5jYXRlZ29yeS1kZXNjcmlwdGlvbl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEFOSU1BVElPTlNcbi5hcHBlYXJGcm9tQm90dG9tIHtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJGcm9tQm90dG9tO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYXBwZWFyRnJvbUJvdHRvbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZGlzYXBwZWFyVG9Ub3Age1xuICBhbmltYXRpb24tbmFtZTogZGlzYXBwZWFyVG9Ub3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkaXNhcHBlYXJUb1RvcDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uYXBwZWFyRnJvbVRvcCB7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogYXBwZWFyRnJvbVRvcDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFwcGVhckZyb21Ub3A7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmRpc2FwcGVhclRvQm90dG9tIHtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBkaXNhcHBlYXJUb0JvdHRvbTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGRpc2FwcGVhclRvQm90dG9tO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZGlzYXBwZWFyVG9Ub3Age1xuICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDFcIiAqL1xuICAwJSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC8qIFlvdSBjb3VsZCB0aGluayBvZiBhcyBcInN0ZXAgMlwiICovXG4gIDEwMCUge1xuICAgIGJvdHRvbTogMzUwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhckZyb21Cb3R0b20ge1xuICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDFcIiAqL1xuICAwJSB7XG4gICAgdG9wOiAzNTAlO1xuICB9XG4gIC8qIFlvdSBjb3VsZCB0aGluayBvZiBhcyBcInN0ZXAgMlwiICovXG4gIDEwMCUge1xuICAgIHRvcDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhclRvQm90dG9tIHtcbiAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAxXCIgKi9cbiAgMCUge1xuICAgIHRvcDogMDtcbiAgfVxuICAvKiBZb3UgY291bGQgdGhpbmsgb2YgYXMgXCJzdGVwIDJcIiAqL1xuICAxMDAlIHtcbiAgICB0b3A6IDM1MCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhcHBlYXJGcm9tVG9wIHtcbiAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAxXCIgKi9cbiAgMCUge1xuICAgIHRvcDogLTM1MCU7XG4gIH1cbiAgLyogWW91IGNvdWxkIHRoaW5rIG9mIGFzIFwic3RlcCAyXCIgKi9cbiAgMTAwJSB7XG4gICAgdG9wOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAjY3JlYXRlU3VpdGNhc2VGb3JtIHtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gICNkYXRlLWZvcm0tZmllbGQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59XG5cblxuI2luZm93aW5kb3ctY29udGVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxuICAgICAgICogZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAuICovXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4jZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwICNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wYWMtY2FyZCB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLnBhYy1jb250cm9scyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDExcHg7XG59XG5cbi5wYWMtY29udHJvbHMgbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNwYWMtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nOiAwIDExcHggMCAxM3B4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4jcGFjLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9003:
/*!***************************************************************!*\
  !*** ./src/app/public/home/containers/home/home.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _max_suitcases_reached_dialog_max_suitcases_reached_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max-suitcases-reached-dialog/max-suitcases-reached-dialog.component */ 3224);
/* harmony import */ var src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/config.service */ 6375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/login/login.service */ 1508);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ 3934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/session/session.service */ 930);
/* harmony import */ var _core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/suitcase.service */ 1805);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/shared/navbar/containers/navbar.component */ 8882);
/* harmony import */ var _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shared/footer/containers/footer.component */ 1584);
/* harmony import */ var _core_shared_pwa_installer_pwa_installer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/shared/pwa-installer/pwa-installer.component */ 5979);
/* harmony import */ var _core_shared_web_notification_subscriber_web_notification_subscriber_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/shared/web-notification-subscriber/web-notification-subscriber.component */ 2975);
/* harmony import */ var _create_suitcase_form_create_suitcase_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create-suitcase-form/create-suitcase-form.component */ 4418);
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../overview/overview.component */ 7827);



















const _c0 = ["overview"];
function HomeComponent_ng_container_1_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_ng_container_1_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "section", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_ng_container_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.goTo("login"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](11, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, HomeComponent_ng_container_1_ng_container_14_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "section", 15)(16, "div", 5)(17, "div", 16)(18, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](19, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "svg", 22)(25, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 27)(30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](31, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](33, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 19)(35, "div", 20)(36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "svg", 22)(38, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 27)(43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](44, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](46, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 19)(48, "div", 20)(49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "svg", 22)(51, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 27)(56, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](57, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](59, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, HomeComponent_ng_container_1_ng_container_60_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "section", 36)(62, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "svg", 37)(64, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](65, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](67, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](69, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](71, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "div", 42)(74, "div", 43)(75, "form", 44)(76, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](77, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](80, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function HomeComponent_ng_template_2_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_ng_template_2_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 50)(1, "section", 51)(2, "div", 5)(3, "div", 6)(4, "div", 52)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](6, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function HomeComponent_ng_template_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r14.createSuitcase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](8, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "my-suitcase-create-suitcase-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "section", 58, 59)(15, "my-suitcase-overview", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dataLoaded", function HomeComponent_ng_template_2_Template_my_suitcase_overview_dataLoaded_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.onOverviewLoaded());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, HomeComponent_ng_template_2_ng_container_16_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, HomeComponent_ng_template_2_ng_container_17_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@showOverview", ctx_r2.showOverview ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngTemplateOutlet", _r3);
  }
}
function HomeComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 61)(1, "div", 5)(2, "div", 18)(3, "div", 62)(4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 65)(7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](8, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](10, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 68)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](14, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "pwa-installer");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
}
function HomeComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 70)(1, "div", 5)(2, "div", 18)(3, "div", 65)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](5, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nStart"](7, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "web-notification-subscriber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
}
const FULL_SCREEN_ANIMATION_TIME = 1000;
const DISAPPEAR_ANIMATION_TIME = 1000; // in sync with animation made by keyFrames in scss file
class HomeComponent {
  constructor(_loginService, _userService, _router, _activatedRoute, _dialog, _sessionService, _suitcaseService, _configService) {
    this._loginService = _loginService;
    this._userService = _userService;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._dialog = _dialog;
    this._sessionService = _sessionService;
    this._suitcaseService = _suitcaseService;
    this._configService = _configService;
    this.isLogged = false;
    this.showOverview = false;
  }
  ngOnInit() {
    this._maximumSuitcases = this._configService.getMaximumSuitcases(false);
    // we get the logged user if exists
    if (this._loginService.isLoggedIn()) {
      // if its in the service, whe get it from there
      if (this._userService.activeUser) {
        this._loginService.logged$.next(this._userService.activeUser);
        this.isAdmin = this._userService.activeUser.admin;
        const isPremium = this._userService.activeUser.isPremium;
        this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
      } else {
        // if it is not in the service because the session is opened but just started the app, we fetched the active user
        this._loginService.recoverActiveUser().subscribe(user => {
          if (user) {
            this._loginService.logged$.next(user);
            this.isAdmin = user.admin;
            const isPremium = user.isPremium;
            this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
          }
        });
      }
    }
    this._loginService.logged$.subscribe(loggedUser => {
      this.isLogged = !!loggedUser;
      const isPremium = this.isLogged && loggedUser && loggedUser.isPremium;
      this._maximumSuitcases = this._configService.getMaximumSuitcases(isPremium);
    });
  }
  onOverviewLoaded() {
    this.showOverview = true;
    this._activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        this._scrollTo(fragment);
      }
    });
  }
  goTo(path) {
    this._router.navigate([path]);
  }
  logout() {
    this._sessionService.stopInterval();
    this._loginService.logout();
  }
  createSuitcase() {
    if (this._suitcaseService.totalSuitcases < this._maximumSuitcases) {
      this.showOverview = false;
      // step 1: animation made with angular animation to make disappear the rest of the screen except for the creation section (1sec)
      // step 2: add full-screen class for the form of the creation of the suitcase
      // step 3: add class to run animations made with keyFrames in scss file to disappear some areas and show questions (1sec)
      // step 4: after the time of the animation, delete the not shown areas
      setTimeout(() => {
        document.getElementById('sections-container').classList.add('full-screen');
        document.getElementById('buttons-area').classList.add('disappearToTop');
        document.getElementById('image-area').classList.add('disappearToTop');
        document.getElementById('questions-area').classList.add('appearFromBottom');
        this._removeElementById('buttons-area', DISAPPEAR_ANIMATION_TIME);
        this._removeElementById('image-area', DISAPPEAR_ANIMATION_TIME);
      }, FULL_SCREEN_ANIMATION_TIME);
    } else {
      // TODO check after implementing i18n if better having a single dialog passing the text
      const dialogRef = this._dialog.open(_max_suitcases_reached_dialog_max_suitcases_reached_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MaxSuitcasesReachedDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true,
        data: {
          title: 'Numero de listas maximo alcanzado',
          content: 'Has alcanzado el numero maximo de maletas, por favor borra alguna antes de crear otra.',
          confirmButton: 'OK'
        }
      });
      dialogRef.afterClosed().subscribe();
    }
  }
  _scrollTo(target) {
    try {
      // we can scroll using the HTMLElement or selecting the item in the dom and triggering scroll
      // document.querySelector('#' + target).scrollIntoView();
      this.overviewContainer.nativeElement.scrollIntoView();
    } catch (err) {}
  }
  _removeElementById(id, delay) {
    // The delay has to be in sync with the time that the transition takes
    setTimeout(() => {
      const element = document.getElementById(id);
      element.parentNode.removeChild(element);
    }, delay);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_5__.SuitcaseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.overviewContainer = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService,
    useFactory: src_app_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.configServiceFactory
  }])],
  decls: 9,
  vars: 2,
  consts: function () {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7317199193486631897$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__2 = goog.getMsg("Forget about missing things for your next trip");
      i18n_1 = MSG_EXTERNAL_7317199193486631897$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__2;
    } else {
      i18n_1 = $localize`:␟3852e8fc8feeb63e34dfc36515e74c7c5863f8b0␟7317199193486631897:Forget about missing things for your next trip`;
    }
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8759071585599043602$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__4 = goog.getMsg("Packing has always been the most boring part of the trip. With {$startItalicText}Mysuitcase{$closeItalicText} we help you to optimize this process to not let you forget anything in your next trip. Why loosing time with things that dont require it?", {
        "startItalicText": "\uFFFD#9\uFFFD",
        "closeItalicText": "\uFFFD/#9\uFFFD"
      }, {
        original_code: {
          "startItalicText": "<i>",
          "closeItalicText": "</i>"
        }
      });
      i18n_3 = MSG_EXTERNAL_8759071585599043602$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__4;
    } else {
      i18n_3 = $localize`:␟47f2ee6d73ef1554e15d7c5ea84e31d2f91cb358␟8759071585599043602:Packing has always been the most boring part of the trip. With ${"\uFFFD#9\uFFFD"}:START_ITALIC_TEXT:Mysuitcase${"\uFFFD/#9\uFFFD"}:CLOSE_ITALIC_TEXT: we help you to optimize this process to not let you forget anything in your next trip. Why loosing time with things that dont require it?`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4725735202507882093$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__6 = goog.getMsg("Login/Sign Up");
      i18n_5 = MSG_EXTERNAL_4725735202507882093$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__6;
    } else {
      i18n_5 = $localize`:␟6c2e48a2bed359dfc34b2dae4735a392054e8a23␟4725735202507882093:Login/Sign Up`;
    }
    let i18n_7;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2139705311779844226$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__8 = goog.getMsg("What is your favourite trip?");
      i18n_7 = MSG_EXTERNAL_2139705311779844226$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__8;
    } else {
      i18n_7 = $localize`:␟c456db791ebb311cdf0a34c46ea96ec0d73fb092␟2139705311779844226:What is your favourite trip?`;
    }
    let i18n_9;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2513934789910625832$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__10 = goog.getMsg("A break or time to disconnect?");
      i18n_9 = MSG_EXTERNAL_2513934789910625832$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__10;
    } else {
      i18n_9 = $localize`:␟31bc30f47db2e76ae12193ffd89f633f9771a6ba␟2513934789910625832:A break or time to disconnect?`;
    }
    let i18n_11;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7973999060039182895$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__12 = goog.getMsg("A countryside gateway are, generally, a kind of trip for those who pursue a direct contact with the nature.");
      i18n_11 = MSG_EXTERNAL_7973999060039182895$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__12;
    } else {
      i18n_11 = $localize`:␟56259db7a64e1a056e364dd172c4bd2f3bd24ec6␟7973999060039182895:A countryside gateway are, generally, a kind of trip for those who pursue a direct contact with the nature.`;
    }
    let i18n_13;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7265174266659860248$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__14 = goog.getMsg("Sun, beach?");
      i18n_13 = MSG_EXTERNAL_7265174266659860248$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__14;
    } else {
      i18n_13 = $localize`:␟3bb0327f1088e4ac339996399ca151cd626e2f91␟7265174266659860248:Sun, beach?`;
    }
    let i18n_15;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4718341062575142523$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__16 = goog.getMsg("Some days to rest and to sunbath in a dreamed beach is never a bad idea. ");
      i18n_15 = MSG_EXTERNAL_4718341062575142523$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__16;
    } else {
      i18n_15 = $localize`:␟457462efa9dd3323a65ff5b7fe2c5d3b429b9032␟4718341062575142523:Some days to rest and to sunbath in a dreamed beach is never a bad idea. `;
    }
    let i18n_17;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2647937398395486521$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__18 = goog.getMsg("Turism, culture?");
      i18n_17 = MSG_EXTERNAL_2647937398395486521$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__18;
    } else {
      i18n_17 = $localize`:␟e99d7ae1515c88ff4e9a7c4f42953e494d833e73␟2647937398395486521:Turism, culture?`;
    }
    let i18n_19;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5631584883030671203$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__20 = goog.getMsg("If you love finding out new the historic city centers all around the world, this is your trip");
      i18n_19 = MSG_EXTERNAL_5631584883030671203$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__20;
    } else {
      i18n_19 = $localize`:␟51a93b3ed727457cdd06dc2ecdd8abdc9b300651␟5631584883030671203:If you love finding out new the historic city centers all around the world, this is your trip`;
    }
    let i18n_21;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_7960367756976744060$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__22 = goog.getMsg("Currently we are building this website.");
      i18n_21 = MSG_EXTERNAL_7960367756976744060$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__22;
    } else {
      i18n_21 = $localize`:␟30670184cdbdf5a22bc9432f10b7ce0e6b18fb42␟7960367756976744060:Currently we are building this website.`;
    }
    let i18n_23;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1853966755565318549$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__24 = goog.getMsg("Leave us your e-mail and we will contact you as soon as possible.");
      i18n_23 = MSG_EXTERNAL_1853966755565318549$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__24;
    } else {
      i18n_23 = $localize`:␟3a2d90df8a166c6501ef6aad3e06ed979912cef6␟1853966755565318549:Leave us your e-mail and we will contact you as soon as possible.`;
    }
    let i18n_25;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6636673945685170241$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__26 = goog.getMsg("Lets go for a trip!");
      i18n_25 = MSG_EXTERNAL_6636673945685170241$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__26;
    } else {
      i18n_25 = $localize`:␟6be5a85d0426c32591fd4f3b0ca67c34030a66e1␟6636673945685170241:Lets go for a trip!`;
    }
    let i18n_27;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8838967680267169604$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__28 = goog.getMsg("Create new suitcase");
      i18n_27 = MSG_EXTERNAL_8838967680267169604$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__28;
    } else {
      i18n_27 = $localize`:␟06f901a716508105f8b062ae22f8c6faeb672ae3␟8838967680267169604:Create new suitcase`;
    }
    let i18n_29;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8282196314590058651$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__30 = goog.getMsg("Just be concern about the next destination.");
      i18n_29 = MSG_EXTERNAL_8282196314590058651$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__30;
    } else {
      i18n_29 = $localize`:␟1b5f0378bf141163358c547b10cf3bef3ef94662␟8282196314590058651:Just be concern about the next destination.`;
    }
    let i18n_31;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4639285332102630350$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__32 = goog.getMsg("With {$startItalicText}mySuitcase{$closeItalicText} you will be focus only on the place to visit. You wont forget things at home anymore. We help you to remind all the belongings you will need for each and every of your trips.", {
        "startItalicText": "\uFFFD#11\uFFFD",
        "closeItalicText": "\uFFFD/#11\uFFFD"
      }, {
        original_code: {
          "startItalicText": "<i>",
          "closeItalicText": "</i>"
        }
      });
      i18n_31 = MSG_EXTERNAL_4639285332102630350$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__32;
    } else {
      i18n_31 = $localize`:␟ccbe6cfd32bf087231b448ea2f507b1a87ce84fb␟4639285332102630350:With ${"\uFFFD#11\uFFFD"}:START_ITALIC_TEXT:mySuitcase${"\uFFFD/#11\uFFFD"}:CLOSE_ITALIC_TEXT: you will be focus only on the place to visit. You wont forget things at home anymore. We help you to remind all the belongings you will need for each and every of your trips.`;
    }
    let i18n_33;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4081997356005865558$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__34 = goog.getMsg("Use {$startItalicText}mySuitcase{$closeItalicText} from anywhere even without connectivity! Install the app to take advantage of a faster and better experience.", {
        "startItalicText": "\uFFFD#15\uFFFD",
        "closeItalicText": "\uFFFD/#15\uFFFD"
      }, {
        original_code: {
          "startItalicText": "<i>",
          "closeItalicText": "</i>"
        }
      });
      i18n_33 = MSG_EXTERNAL_4081997356005865558$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__34;
    } else {
      i18n_33 = $localize`:␟a0d516cf523ffdceb12ba845ebcf759496a5aa68␟4081997356005865558:Use ${"\uFFFD#15\uFFFD"}:START_ITALIC_TEXT:mySuitcase${"\uFFFD/#15\uFFFD"}:CLOSE_ITALIC_TEXT: from anywhere even without connectivity! Install the app to take advantage of a faster and better experience.`;
    }
    let i18n_35;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5360696318550092162$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__36 = goog.getMsg("Keep toned by using notifications.");
      i18n_35 = MSG_EXTERNAL_5360696318550092162$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__36;
    } else {
      i18n_35 = $localize`:␟a37329770996a196e1dc4e31e507c3f41b0b4e18␟5360696318550092162:Keep toned by using notifications.`;
    }
    let i18n_37;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1105992698550748946$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__38 = goog.getMsg("If you would like to know all the latest news and features that we are steadily releasing in {$startItalicText}mySuitcase{$closeItalicText}, just let us know by activating the notifications.", {
        "startItalicText": "\uFFFD#8\uFFFD",
        "closeItalicText": "\uFFFD/#8\uFFFD"
      }, {
        original_code: {
          "startItalicText": "<i>",
          "closeItalicText": "</i>"
        }
      });
      i18n_37 = MSG_EXTERNAL_1105992698550748946$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_HOME_HOME_COMPONENT_TS__38;
    } else {
      i18n_37 = $localize`:␟33eaa5537b1f4127515959baad6bb4705b7a5b81␟1105992698550748946:If you would like to know all the latest news and features that we are steadily releasing in ${"\uFFFD#8\uFFFD"}:START_ITALIC_TEXT:mySuitcase${"\uFFFD/#8\uFFFD"}:CLOSE_ITALIC_TEXT:, just let us know by activating the notifications.`;
    }
    return [[4, "ngIf", "ngIfElse"], ["logged", ""], ["pwa", ""], ["notifications", ""], [1, "hero-banner", "magic-ball"], [1, "container"], [1, "row", "align-items-center", "text-center", "text-md-left"], [1, "col-md-6", "col-lg-5", "mb-5", "mb-md-0"], i18n_1, i18n_3, [1, "button", "button-hero", "mt-4", 3, "click"], i18n_5, [1, "col-md-6", "col-lg-7", "col-xl-6", "offset-xl-1"], ["src", "assets/img/home/undraw_airport.svg", "alt", "", 1, "img-fluid"], [4, "ngTemplateOutlet"], [1, "section-margin", "generic-margin", "trip-type__container"], [1, "section-intro", "text-center", "pb-90px"], i18n_7, [1, "row"], [1, "col-md-6", "col-lg-4", "mb-4", "mb-lg-0"], [1, "service-card", "text-center"], [1, "service-card-img"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "100", "height", "100", "viewBox", "0 0 226 226", 2, "fill", "#000000"], ["fill", "none", "fill-rule", "nonzero", "stroke", "none", "stroke-width", "1", "stroke-linecap", "butt", "stroke-linejoin", "miter", "stroke-miterlimit", "10", "stroke-dasharray", "", "stroke-dashoffset", "0", "font-family", "none", "font-weight", "none", "font-size", "none", "text-anchor", "none", 2, "mix-blend-mode", "normal"], ["d", "M0,226v-226h226v226z", "fill", "none"], ["fill", "#d88a83"], ["d", "M177.94741,28.25c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM158.2,33.96069c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM197.75,33.96069c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM177.94741,39.55c-9.34337,0 -16.97759,7.63422 -16.97759,16.97759c0,9.34337 7.63422,16.97759 16.97759,16.97759c9.34337,0 16.97759,-7.63422 16.97759,-16.97759c0,-9.34337 -7.63422,-16.97759 -16.97759,-16.97759zM177.94741,45.2c6.28988,0 11.32759,5.03771 11.32759,11.32759c0,6.28988 -5.03771,11.32759 -11.32759,11.32759c-6.28988,0 -11.32759,-5.03771 -11.32759,-11.32759c0,-6.28988 5.03771,-11.32759 11.32759,-11.32759zM152.55,53.70259c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM203.4,53.70259c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM87.575,70.625c-0.97821,0.00128 -1.88616,0.50848 -2.40015,1.34077l-73.45,118.65c-0.53758,0.87096 -0.56209,1.96455 -0.06406,2.85871c0.49803,0.89416 1.44071,1.44906 2.46421,1.45052h197.75c1.04347,-0.00157 2.00112,-0.57816 2.49072,-1.49963c0.48961,-0.92148 0.43144,-2.03779 -0.15127,-2.9034l-76.275,-113c-0.53532,-0.79129 -1.43426,-1.25845 -2.38947,-1.24175c-0.95521,0.0167 -1.83728,0.515 -2.34461,1.32451l-14.125,22.6c-0.58243,0.85641 -0.64958,1.96286 -0.175,2.88342c0.47458,0.92056 1.41482,1.50767 2.45027,1.53001c1.03546,0.02234 2.00014,-0.52367 2.51398,-1.42291l11.82417,-18.91426l70.86777,104.994h-187.37144l35.42837,-57.2228c0.51696,0.46408 1.18679,0.72141 1.8815,0.7228c1.5602,0 2.825,-1.2648 2.825,-2.825c0.00036,-1.15798 -0.70599,-2.19891 -1.78218,-2.62637l30.07632,-48.58227l23.00278,35.78701c0.8441,1.31338 2.59307,1.6938 3.90645,0.84971c1.31338,-0.8441 1.6938,-2.59307 0.84971,-3.90645l-25.425,-39.55c-0.52034,-0.80878 -1.41637,-1.29733 -2.37808,-1.29663zM158.2,73.51069c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM197.75,73.51069c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM177.91431,79.16069c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM107.35,118.65c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM118.65,118.65c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM79.1,127.125c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM101.7,127.125c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM124.3,127.125c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM146.9,127.125c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM62.15,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM73.45,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM84.75,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM96.05,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM129.95,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM141.25,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM152.55,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM163.85,135.6c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM67.8,144.075c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM90.4,144.075c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM135.6,144.075c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM158.2,144.075c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM141.25,152.55c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM146.9,161.025c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM152.55,169.5c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825zM158.2,177.975c-1.5602,0 -2.825,1.2648 -2.825,2.825c0,1.5602 1.2648,2.825 2.825,2.825c1.5602,0 2.825,-1.2648 2.825,-2.825c0,-1.5602 -1.2648,-2.825 -2.825,-2.825z"], [1, "service-card-body"], i18n_9, i18n_11, ["d", "M77.64336,28.25c-18.46182,0 -30.4791,8.37568 -37.43125,18.62734c-6.96318,10.25166 -9.13711,22.14756 -9.13711,30.09287v8.65156l5.10928,-6.97422c0,0 10.14131,-14.10293 30.74394,-21.971c-10.0751,8.12188 -15.98994,19.67568 -15.98994,30.89844c0,20.85645 12.13867,33.07236 12.13867,33.07236l3.69678,3.69678l1.05937,-5.12031c0,0 2.74775,-13.1208 9.63369,-27.98516c6.23486,-13.42978 15.83545,-27.99619 29.34248,-35.57734c-5.07617,44.17373 -23.62627,69.56563 -41.17217,84.121c-17.87695,14.84228 -34.31933,18.29629 -34.9042,18.41768h-2.48291c-1.01523,-0.01103 -1.96426,0.51865 -2.48291,1.40147c-0.50762,0.88281 -0.50762,1.96426 0,2.84707c0.51865,0.88281 1.46768,1.4125 2.48291,1.40147h64.975c33.99932,0 45.36553,32.03506 45.36553,32.03506c0.01103,0.03311 0.02207,0.05518 0.04414,0.08828c0.01103,0.03311 0.02207,0.06621 0.03311,0.09932c0.0331,0.06621 0.06621,0.13242 0.11035,0.20967c0.03311,0.06621 0.07725,0.13242 0.12139,0.19863c0.01103,0.03311 0.02207,0.05518 0.04414,0.07725c0.03311,0.04414 0.07725,0.08828 0.11035,0.13242c0.02207,0.03311 0.04414,0.06621 0.07725,0.09932c0.04414,0.05518 0.09932,0.11035 0.14346,0.16553c0.07725,0.05518 0.14346,0.12139 0.2207,0.17656c0.07725,0.06621 0.14346,0.12139 0.2207,0.17656c0.08828,0.04414 0.16553,0.08828 0.25381,0.13242c0.07725,0.04414 0.16553,0.07725 0.24277,0.11035c0,0 0.01103,0 0.01103,0.01103h0.01103c0.08828,0.03311 0.17656,0.05518 0.26484,0.08828c0.06621,0.01103 0.14346,0.03311 0.2207,0.05518c0.04414,0 0.08828,0.01103 0.13242,0.01103c0.03311,0.01104 0.05518,0.01104 0.08828,0.02207c0.06621,0 0.13242,0 0.20967,0.01103c0.01103,0 0.02207,0 0.03311,0c0.02207,0 0.04414,0 0.06621,0c0.01103,0 0.02207,0 0.03311,0c0.17656,0 0.35313,-0.02207 0.52969,-0.05518c0.08828,-0.02207 0.17656,-0.04414 0.27588,-0.07725c0.08828,-0.02207 0.17656,-0.05518 0.26484,-0.08828c0.16553,-0.07725 0.33106,-0.16553 0.48555,-0.26484c0.06621,-0.04414 0.12139,-0.08828 0.17656,-0.13242c0.02207,-0.01103 0.03311,-0.03311 0.05518,-0.04414c0.02207,-0.01103 0.03311,-0.03311 0.05518,-0.04414c0.05518,-0.05518 0.09932,-0.09932 0.15449,-0.14346c0.05518,-0.07725 0.12139,-0.14346 0.17656,-0.2207c0.05518,-0.05518 0.08828,-0.11035 0.13242,-0.16553c0,-0.01103 0.01103,-0.01103 0.01103,-0.02207c0.02207,-0.04414 0.04414,-0.07725 0.07725,-0.12139c0.03311,-0.05518 0.05518,-0.11035 0.08828,-0.16553c0.04414,-0.07725 0.07725,-0.16553 0.12139,-0.25381c0,-0.01103 0,-0.01103 0,-0.02207c0.03311,-0.07725 0.05518,-0.16553 0.08828,-0.25381c0.02207,-0.07725 0.04414,-0.16553 0.05518,-0.25381v-0.01103c0.02207,-0.07725 0.02207,-0.14346 0.03311,-0.2207c0,-0.02207 0,-0.04414 0.01103,-0.06621c0,-0.06621 0,-0.13242 0,-0.19863c0,-0.01103 0,-0.01103 0,-0.01103c0,-0.1876 -0.02207,-0.3752 -0.05518,-0.55176v-0.01103c-0.02207,-0.13242 -0.06621,-0.26484 -0.11035,-0.38623c0,0 -0.04414,-0.09932 -0.04414,-0.11035c0,0 -0.01103,-0.02207 -0.01103,-0.03311l-0.01103,-0.01103c-0.16553,-0.45244 -3.71885,-9.68887 -12.13867,-18.71562c0.35313,0.02207 0.70625,0.05518 1.07041,0.05518c3.76299,0 6.91904,-1.71045 9.74404,-3.12295c2.825,-1.4125 5.31894,-2.52705 7.20596,-2.52705c1.88701,0 4.38096,1.11455 7.20596,2.52705c2.825,1.4125 5.98106,3.12295 9.74404,3.12295c3.76299,0 6.91904,-1.71045 9.74404,-3.12295c2.825,-1.4125 5.31894,-2.52705 7.20596,-2.52705c1.88701,0 4.38096,1.11455 7.20596,2.52705c2.825,1.4125 5.98106,3.12295 9.74404,3.12295v-5.65c-1.88701,0 -4.38096,-1.11455 -7.20596,-2.52705c-2.825,-1.4125 -5.98106,-3.12295 -9.74404,-3.12295c-3.76299,0 -6.91904,1.71045 -9.74404,3.12295c-2.825,1.4125 -5.31894,2.52705 -7.20596,2.52705c-1.88701,0 -4.38096,-1.11455 -7.20596,-2.52705c-2.825,-1.4125 -5.98106,-3.12295 -9.74404,-3.12295c-3.76299,0 -6.91904,1.71045 -9.74404,3.12295c-2.825,1.4125 -5.31894,2.52705 -7.20596,2.52705c-1.88701,0 -4.38096,-1.11455 -7.20596,-2.52705c-2.46084,-1.2249 -5.16445,-2.68154 -8.30947,-3.03467c-6.56592,-3.43193 -14.51123,-5.73828 -24.03457,-5.73828h-7.96738c4.10508,-3.46504 9.34678,-8.79502 14.57744,-16.81758c4.43613,-6.80869 8.83916,-15.54853 12.50283,-26.56162c0.43037,-0.50762 0.66211,-1.15869 0.66211,-1.8208c0,-0.06621 0,-0.12139 -0.01103,-0.17656c4.72305,-14.9416 8.07773,-33.93311 8.43086,-57.94561c11.50967,8.60742 17.96523,23.07451 21.43027,36.22842c3.91748,14.82022 4.0499,27.57686 4.0499,27.57686l0.04414,5.21963l4.34785,-2.90225c0,0 18.20801,-12.23799 18.20801,-36.25049c0,-8.14394 -1.97529,-15.44922 -5.52861,-21.48545c9.65576,7.2832 14.50019,15.17334 14.50019,15.17334l5.2417,8.64053v-10.1082c0,-7.41563 0.07725,-19.31152 -4.8334,-29.70664c-4.91065,-10.40615 -15.3499,-19.01357 -34.24209,-19.01357c-9.41299,0 -17.62314,3.11192 -23.65938,7.36045c-3.22227,2.26221 -5.85967,4.82236 -7.74668,7.52598c-5.99209,-6.2459 -17.50176,-14.88643 -35.58838,-14.88643zM77.64336,33.9c17.02725,0 26.73818,7.96738 31.64883,13.40772c-5.00996,-0.67314 -9.75508,-0.92695 -14.30156,-0.88281l-0.03311,-0.54072c-2.06357,0.14346 -4.0499,0.43037 -6.00312,0.79453c-25.44707,1.93115 -42.61777,14.03672 -51.04863,21.95996c1.04834,-6.00312 2.88018,-12.55801 6.98525,-18.5832c6.09141,-8.99365 15.9458,-16.15547 32.75234,-16.15547zM144.63779,33.9c17.27002,0 24.96152,6.93008 29.13281,15.76924c2.825,5.98106 3.58643,12.62422 3.91748,18.81494c-2.94639,-3.35469 -6.77559,-7.33838 -12.17178,-11.12344c-5.17549,-3.63057 -11.59795,-6.86387 -19.13496,-8.8833c-1.30215,-0.48555 -2.6374,-0.93799 -4.02783,-1.29111l-0.08828,0.33106c-6.70937,-1.31318 -14.24639,-1.61113 -22.47861,-0.43037c-0.09932,-0.05518 -0.1876,-0.11035 -0.28692,-0.16553l-0.12138,0.2207c-0.60693,0.09932 -1.1918,0.16553 -1.79873,0.26484c1.39043,-2.35049 3.39883,-4.88857 6.64316,-7.18389c5.13135,-3.60849 12.24902,-6.32314 20.41504,-6.32314zM96.59072,51.52314c1.8208,0.02207 3.69678,0.12139 5.60586,0.26484c-14.13603,8.6626 -23.62627,23.64834 -29.8501,37.06709c-4.73408,10.22959 -7.0625,17.97627 -8.46397,23.229c-3.07881,-4.25957 -7.29424,-11.4876 -7.29424,-24.50908c0,-15.86855 14.95264,-34.28623 38.5458,-36.02978c0.49658,0 0.97109,-0.02207 1.45664,-0.02207zM128.93477,51.54522c4.38096,-0.06621 8.44189,0.38623 12.21592,1.16973c14.06982,3.6416 22.69932,15.20645 22.69932,32.03506c0,15.82442 -7.2832,23.63731 -11.71933,27.58789c-0.38623,-5.26377 -1.20283,-12.77871 -3.81817,-22.67725c-3.47607,-13.20908 -9.86543,-28.22793 -21.84961,-38.01611c0.82764,-0.04414 1.66631,-0.09932 2.47187,-0.09932zM114.33525,53.4543c0.30898,0.05518 0.60693,0.09932 0.91592,0.16553l0.52969,0.09932c-0.02207,2.50498 -0.08828,4.94375 -0.17656,7.32734c-0.45244,-1.04834 -1.46768,-1.72148 -2.6043,-1.72148c-0.35312,0 -0.69522,0.06621 -1.02627,0.1876c0.25381,-1.87598 0.50762,-3.72988 0.71728,-5.67207l0.99317,-0.25381c0.2207,-0.05518 0.43037,-0.08828 0.65107,-0.13242zM115.48291,63.48525c-0.5959,12.5249 -2.0415,23.49385 -4.07197,33.05029c-0.77246,0.52969 -1.23594,1.40147 -1.23594,2.33945c0,0.50762 0.14346,1.0042 0.39727,1.44561c-1.15869,4.94375 -2.48291,9.4792 -3.91748,13.65049c-0.52969,-0.61797 -1.31318,-0.97109 -2.12978,-0.97109c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c0.15449,0 0.30898,-0.01103 0.45244,-0.04414c-1.29111,3.38779 -2.65947,6.52178 -4.07197,9.39092c-0.52969,-0.55176 -1.25801,-0.87178 -2.03047,-0.87178c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.39043 1.0042,2.57119 2.38359,2.79189c-1.11455,1.98633 -2.2291,3.84023 -3.34365,5.55068c-1.62217,2.49395 -3.22227,4.6127 -4.81133,6.57695c0.07725,-0.25381 0.12139,-0.52969 0.12139,-0.79453c0,-1.55596 -1.26904,-2.825 -2.825,-2.825c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c0.44141,0 0.88281,-0.11035 1.28008,-0.30898c-2.85811,3.33262 -5.55068,5.93692 -7.75772,7.75772c-3.21123,2.6374 -4.99893,3.57539 -5.55068,3.85127h-28.48174c6.11348,-2.85811 13.38565,-7.00732 20.94473,-13.07666c0.41933,1.07041 1.45664,1.77666 2.61533,1.77666c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-0.98213 -0.51865,-1.89805 -1.35732,-2.4167c3.00156,-2.68154 6.00312,-5.69414 8.94951,-9.02676c0.28692,0.09932 0.58486,0.14346 0.88281,0.14346c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-0.46348 -0.11035,-0.91592 -0.33105,-1.32422c3.05674,-3.80713 6.02519,-7.97842 8.81709,-12.62422c0.09932,1.48975 1.32422,2.64844 2.81397,2.64844c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825c-0.44141,0 -0.88281,0.11035 -1.28008,0.30898c2.48291,-4.36992 4.8334,-9.05986 6.94111,-14.18018c0.13242,1.44561 1.35732,2.57119 2.81397,2.57119c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825c-0.70625,0 -1.39043,0.26484 -1.90908,0.75039c1.96426,-4.99893 3.71885,-10.36201 5.23066,-16.10029c0.52969,0.77246 1.40147,1.2249 2.32842,1.2249c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825c-0.45244,0 -0.89385,0.11035 -1.29111,0.32002c0.91592,-3.89541 1.71045,-7.96738 2.39463,-12.20488c0.48555,0.37519 1.09248,0.58486 1.72148,0.58486c1.03731,0 1.98633,-0.57383 2.48291,-1.48975zM90.4,127.125c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM79.1,141.25c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM28.25,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM39.55,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM50.85,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM62.15,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM73.45,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM84.75,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM96.05,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM107.35,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM118.65,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM129.95,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM152.55,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM163.85,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM175.15,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM186.45,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825zM197.75,192.1c-1.55596,0 -2.825,1.26904 -2.825,2.825c0,1.55596 1.26904,2.825 2.825,2.825c1.55596,0 2.825,-1.26904 2.825,-2.825c0,-1.55596 -1.26904,-2.825 -2.825,-2.825z"], i18n_13, i18n_15, ["d", "M121.475,11.3l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM138.425,14.125l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM121.475,22.6l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM56.5,24.36563v105.58438h-15.22852v-24.87324h-5.65v24.87324h-13.02148v73.45h64.02046h6.60454h59.325h2.825h45.2v-132.775h-45.2v-14.27397l-14.125,-4.56856v-12.23247c0.01046,-0.7636 -0.28865,-1.49891 -0.82916,-2.03838c-0.54052,-0.53948 -1.2764,-0.83717 -2.03998,-0.82524c-1.55803,0.02435 -2.8022,1.30555 -2.78086,2.86362v10.40615l-11.3,-3.65815v-9.573c0.01046,-0.7636 -0.28865,-1.49891 -0.82916,-2.03838c-0.54052,-0.53948 -1.2764,-0.83717 -2.03998,-0.82524c-1.55803,0.02435 -2.8022,1.30555 -2.78086,2.86362v7.74668zM138.425,25.425l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM62.15,32.13438l87.575,28.32725v137.28838h-25.425v-17.20933c7.98968,-1.3569 14.125,-8.32819 14.125,-16.69067c0,-9.32709 -7.62291,-16.95 -16.95,-16.95c-9.32709,0 -16.95,7.62291 -16.95,16.95c0,8.36248 6.13532,15.33377 14.125,16.69067v17.20933h-25.425v-2.825h-0.25933l0.14346,-0.80005l-1.727,-1.84839l-0.98213,-0.17656l-2.26221,1.13662l-0.30347,1.68838h-0.25933v2.825h-0.95454h-58.37046v-62.15h59.325v2.825h0.25933l-0.14346,0.80005l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.30347,-1.68838h0.25933v-8.475h-31.075zM73.45,59.325v5.65h25.425v-5.65zM73.45,76.275v5.65h64.975v-5.65zM155.375,76.275h39.55v121.475h-39.55zM163.85,84.75l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM175.15,84.75l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM186.45,84.75l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM73.45,93.225v5.65h33.9v-5.65zM115.825,93.225v5.65h22.6v-5.65zM163.85,101.7v8.475h8.475v-8.475zM177.975,101.7v8.475h8.475v-8.475zM73.45,110.175v5.65h64.975v-5.65zM163.85,118.65v8.475h8.475v-8.475zM177.975,118.65v8.475h8.475v-8.475zM104.525,127.125v5.65h33.9v-5.65zM163.85,135.6v8.475h8.475v-8.475zM177.975,135.6v8.475h8.475v-8.475zM39.55,144.075v8.475h14.125v-8.475zM62.15,144.075v8.475h14.125v-8.475zM90.4,146.9l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM121.475,152.55c6.27256,0 11.3,5.02744 11.3,11.3c0,6.27256 -5.02744,11.3 -11.3,11.3c-6.27256,0 -11.3,-5.02744 -11.3,-11.3c0,-6.27256 5.02744,-11.3 11.3,-11.3zM163.85,152.55v8.475h8.475v-8.475zM177.975,152.55v8.475h8.475v-8.475zM90.4,158.2l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM39.55,161.025v8.475h14.125v-8.475zM62.15,161.025v8.475h14.125v-8.475zM90.4,169.5l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839zM163.85,169.5v8.475h8.475v-8.475zM177.975,169.5v8.475h8.475v-8.475zM39.55,177.975v8.475h14.125v-8.475zM62.15,177.975v8.475h14.125v-8.475zM90.4,180.8l-2.26221,1.13662l-0.44692,2.48843l1.727,1.84839l0.98213,0.17656l2.26221,-1.13662l0.44692,-2.48843l-1.727,-1.84839z"], i18n_17, i18n_19, [1, "section-margin"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "width", "100", "height", "100", "viewBox", "0 0 172 172", 2, "fill", "#000000"], ["d", "M0,172v-172h172v172z", "fill", "none"], ["d", "M139.71641,17.16641c-0.10078,0.0084 -0.20996,0.0168 -0.31074,0.03359h-8.25566c-0.5375,0 -1.0498,0.20156 -1.44453,0.5543l-46.32578,42.11816c-1.74688,-1.16738 -3.82129,-1.82246 -5.97969,-1.82246h-40.85c-3.53574,0 -6.45,2.91426 -6.45,6.45v36.55c0,3.53574 2.91426,6.45 6.45,6.45h10.75v8.6h-8.6c-8.28926,0 -15.05,6.76074 -15.05,15.05c0,8.28926 6.76074,15.05 15.05,15.05h60.2c8.28926,0 15.05,-6.76074 15.05,-15.05c0,-8.28926 -6.76074,-15.05 -15.05,-15.05h-8.6v-8.6h6.45c3.53574,0 6.45,-2.91426 6.45,-6.45v-12.18613c0,-2.32637 -0.75586,-4.58555 -2.15,-6.45l-0.0252,-0.03359l36.5752,-55.82441v68.04414h-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,6.92871 2.37676,11.71582 2.37676,11.71582c0.36113,0.72226 1.10859,1.18418 1.92324,1.18418v4.3c0,1.18418 0.96582,2.15 2.15,2.15c2.40195,0 4.3,1.89805 4.3,4.3c0,2.40195 -1.89805,4.3 -4.3,4.3c-2.40195,0 -4.3,-1.89805 -4.3,-4.3c0.0084,-0.77266 -0.39473,-1.49492 -1.0666,-1.88965c-0.67187,-0.38633 -1.49492,-0.38633 -2.1668,0c-0.67187,0.39473 -1.075,1.11699 -1.0666,1.88965c0,4.72832 3.87168,8.6 8.6,8.6c0.26875,-0.0084 0.5291,-0.05879 0.77266,-0.15957c4.06484,-0.38633 7.24785,-3.56094 7.65938,-7.61738c0.10918,-0.26035 0.16797,-0.5375 0.16797,-0.82305c0,-3.96406 -2.77988,-7.18066 -6.45,-8.16328v-2.58672c0.81465,0 1.56211,-0.46191 1.92324,-1.18418c0,0 2.37676,-4.78711 2.37676,-11.71582c0,-1.18418 -0.96582,-2.15 -2.15,-2.15h-2.15v-75.25c0,-0.0084 0,-0.0168 0,-0.0168c0,-0.0084 0,-0.0168 0,-0.0252c0,-0.0168 0,-0.0252 0,-0.04199c-0.03359,-1.17578 -1.00781,-2.10801 -2.18359,-2.09961zM131.98145,21.5h3.7877l-7.43262,11.34629c-0.40313,-0.38633 -0.93222,-0.59629 -1.48652,-0.59629c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,0.86504 0.5207,1.64609 1.31855,1.98203l-8.77637,13.39551c-0.34434,-0.21836 -0.73906,-0.32754 -1.14219,-0.32754c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,0.70547 0.35274,1.36895 0.94063,1.77207l-14.64688,22.34824c-0.37793,-0.30234 -0.85664,-0.47031 -1.34375,-0.47031c-0.95742,0 -1.79726,0.62988 -2.05762,1.54531l-10.41406,-13.87422l10.86758,-9.88496c0.41153,0.45351 0.99102,0.71387 1.6041,0.71387c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-0.5459 -0.20996,-1.0666 -0.57109,-1.46133l15.99062,-14.5293c0.40313,0.58789 1.0666,0.94062 1.78047,0.94062c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-0.63828 -0.28555,-1.25137 -0.78105,-1.65449zM118.25,40.85c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM107.5,49.45c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM98.9,58.05c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM36.55,62.35h25.8c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h10.75c2.03242,0 3.93887,0.95742 5.16504,2.57832l15.05,20.06387c0.25195,0.35274 0.46191,0.72227 0.64668,1.10859c-0.89863,0.27715 -1.51172,1.10859 -1.51172,2.04922c0,1.18418 0.96582,2.15 2.15,2.15v10.75c0,1.21777 -0.93223,2.15 -2.15,2.15h-10.75c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15v8.6h-34.4v-8.6c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15h-15.05c-1.21777,0 -2.15,-0.93223 -2.15,-2.15v-36.55c0,-1.21777 0.93223,-2.15 2.15,-2.15zM98.9,66.65c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,68.8c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,77.4c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM64.5,86c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM73.1,86c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM81.7,86c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM90.3,86c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM137.89395,98.9h1.49492c0.23516,0.04199 0.47031,0.04199 0.69707,0h1.52012c-0.30234,3.30059 -0.78105,5.43379 -1.19258,6.45h-0.32754c-0.12598,-0.0168 -0.24355,-0.03359 -0.36953,-0.03359c-0.10078,0.0084 -0.20996,0.0168 -0.31074,0.03359h-0.31914c-0.41152,-1.01621 -0.89023,-3.14941 -1.19258,-6.45zM60.2,103.2c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,103.2c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM77.4,103.2c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM40.85,120.4h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15h4.3c0,1.18418 0.96582,2.15 2.15,2.15c1.1002,0 2.02402,-0.83984 2.1416,-1.94004c1.37734,0.27715 2.65391,0.83984 3.7793,1.5957c-0.68027,0.84824 -0.61309,2.08281 0.15957,2.86387c0.77266,0.77266 2.00723,0.83984 2.86387,0.15117c0.74746,1.13379 1.30176,2.41035 1.57891,3.78769c-1.0918,0.11758 -1.92324,1.04141 -1.92324,2.1416c0,1.1002 0.83145,2.02402 1.92324,2.1416c-0.27715,1.37734 -0.83144,2.65391 -1.57891,3.7793c-0.36953,-0.29394 -0.83144,-0.46191 -1.31016,-0.47031c-0.57949,-0.0084 -1.14219,0.21836 -1.55371,0.62988c-0.77266,0.77266 -0.83984,2.01563 -0.15957,2.86387c-1.12539,0.75586 -2.40195,1.31856 -3.7793,1.5957c-0.11758,-1.1002 -1.04141,-1.94004 -2.1416,-1.94004c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.18418,0 -2.15,0.96582 -2.15,2.15h-4.3c0,-1.18418 -0.96582,-2.15 -2.15,-2.15c-1.1002,0 -2.02402,0.83984 -2.1416,1.94004c-1.38574,-0.27715 -2.6623,-0.82305 -3.80449,-1.57051c0.70547,-0.85664 0.64668,-2.10801 -0.13437,-2.88906c-0.39473,-0.39473 -0.93223,-0.62148 -1.48652,-0.62988c-0.5123,-0.0084 -1.00781,0.16797 -1.40254,0.49551c-0.74746,-1.14219 -1.29336,-2.41875 -1.57051,-3.80449c1.1002,-0.11758 1.94004,-1.04141 1.94004,-2.1416c0,-1.1002 -0.83984,-2.02402 -1.94004,-2.1416c0.27715,-1.37734 0.82305,-2.6623 1.57051,-3.79609c0.85664,0.69707 2.09961,0.63828 2.88906,-0.14277c0.77266,-0.78105 0.83984,-2.02402 0.13437,-2.88066c1.14219,-0.74746 2.41875,-1.30176 3.80449,-1.57891c0.11758,1.1002 1.04141,1.94004 2.1416,1.94004c1.18418,0 2.15,-0.96582 2.15,-2.15zM38.7,126.85c-2.37676,0 -4.3,1.92324 -4.3,4.3c0,2.37676 1.92324,4.3 4.3,4.3c2.37676,0 4.3,-1.92324 4.3,-4.3c0,-2.37676 -1.92324,-4.3 -4.3,-4.3zM68.8,126.85c-2.37676,0 -4.3,1.92324 -4.3,4.3c0,2.37676 1.92324,4.3 4.3,4.3c2.37676,0 4.3,-1.92324 4.3,-4.3c0,-2.37676 -1.92324,-4.3 -4.3,-4.3zM98.9,126.85c-2.37676,0 -4.3,1.92324 -4.3,4.3c0,2.37676 1.92324,4.3 4.3,4.3c2.37676,0 4.3,-1.92324 4.3,-4.3c0,-2.37676 -1.92324,-4.3 -4.3,-4.3z"], i18n_21, i18n_23, [1, "single-footer-widget"], ["id", "mc_embed_signup"], ["target", "_blank", "action", "https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01", "method", "get", "novalidate", "true", 1, "subscription", "relative"], [1, ""], ["name", "EMAIL", "placeholder", "Email Address", "onfocus", "this.placeholder = ''", "onblur", "this.placeholder = 'Email Address '", "required", "", "type", "email"], [1, "btn", "bb-btn"], ["src", "https://img.icons8.com/dotty/29/000000/send-mass-email.png"], [1, "mt-10", "info"], ["id", "sections-container"], [1, "logged-user-section", "hero-banner"], ["id", "buttons-area", 1, "col-md-6", "col-lg-5", "mb-5", "mb-md-0"], i18n_25, i18n_27, ["id", "image-area", 1, "col-md-6", "col-lg-7", "col-xl-6", "offset-xl-1"], ["src", "assets/img/home/undraw_airport.svg", "alt", "maleta", 1, "img-fluid"], ["id", "questions-area"], ["id", "mySuitcases", 1, "section-margin"], ["overview", ""], [3, "dataLoaded"], [1, "bg-gray", "section-padding", "pwa-container"], [1, "col-lg-7", "col-md-6", "mb-4", "mb-md-0"], [1, "about-img"], ["src", "assets/img/home/undraw_world.svg", "alt", "", 1, "img-fluid"], [1, "col-lg-5", "col-md-6", "align-self-center", "about-content"], i18n_29, i18n_31, ["hidden", "", 1, "pwa-installer__container"], i18n_33, ["id", "notifications", 1, "section-padding", "notification__container"], i18n_35, i18n_37, [1, "col-lg-7", "col-md-6", "mb-4", "mb-md-0", "notification__img-container"], ["src", "assets/img/notifications/notifications.jpg", "alt", "", 1, "img-fluid"]];
  },
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "navbar-component");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, HomeComponent_ng_container_1_Template, 81, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 18, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 17, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, HomeComponent_ng_template_6_Template, 12, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "footer-component");
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.isLogged)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _core_shared_navbar_containers_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavBarComponent, _core_shared_footer_containers_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _core_shared_pwa_installer_pwa_installer_component__WEBPACK_IMPORTED_MODULE_8__.PwaInstallerComponent, _core_shared_web_notification_subscriber_web_notification_subscriber_component__WEBPACK_IMPORTED_MODULE_9__.WebNotificationSubscriberComponent, _create_suitcase_form_create_suitcase_form_component__WEBPACK_IMPORTED_MODULE_10__.CreateSuitcaseFormComponent, _overview_overview_component__WEBPACK_IMPORTED_MODULE_11__.OverviewComponent],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n\n.full-screen[_ngcontent-%COMP%] {\n  height: calc(100% - 175px - 110px);\n}\n\n.container[_ngcontent-%COMP%], .row[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n\n.logged-user-section[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.notification__container[_ngcontent-%COMP%] {\n  height: 700px;\n  max-height: 700px;\n  overflow: hidden;\n}\n.notification__container[_ngcontent-%COMP%]   .notification__img-container[_ngcontent-%COMP%] {\n  margin-top: -60px;\n}\n\n.trip-type__container[_ngcontent-%COMP%] {\n  height: 700px;\n  max-height: 700px;\n  overflow: hidden;\n}\n.trip-type__container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .trip-type__container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n.trip-type__container[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n\n.pwa-container[_ngcontent-%COMP%] {\n  height: 700px;\n  max-height: 700px;\n  overflow: hidden;\n}\n\n#questions-area[_ngcontent-%COMP%] {\n  top: 110%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: none;\n  align-items: center;\n}\n\n.appearFromBottom[_ngcontent-%COMP%] {\n  display: flex !important;\n  animation-name: _ngcontent-%COMP%_appearFromBottom;\n  animation-duration: 2s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_appearFromBottom;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n.disappearToTop[_ngcontent-%COMP%] {\n  animation-name: _ngcontent-%COMP%_disappearToTop;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  -webkit-animation-name: _ngcontent-%COMP%_disappearToTop;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_disappearToTop {\n  0% {\n    position: relative;\n    top: 0px;\n    opacity: 1;\n  }\n  50% {\n    position: relative;\n    top: -550px;\n    opacity: 0.5;\n  }\n  100% {\n    position: relative;\n    top: -1100px;\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_appearFromBottom {\n  0% {\n    position: relative;\n    top: 1100px;\n    opacity: 0;\n  }\n  50% {\n    position: relative;\n    top: 550px;\n    opacity: 0.5;\n  }\n  100% {\n    position: relative;\n    top: 0px;\n    opacity: 1;\n  }\n}\n@media (min-width: 992px) {\n  h1[_ngcontent-%COMP%] {\n    line-height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2hvbWUvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQUE7QUFFQSxZQUFBO0FBS0EsZ0JBQUE7QUFLQSxvQkFBQTtBQWdCQTs7OztTQUFBO0FBT0EsaUJBQUE7QUFPQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDN0JGOztBQWJBO0VBQU8scUJBQUE7RUFBdUIsV0FBQTtFQUFhLFlBQUE7QUFtQjNDOztBQWpCQTtFQUNFLGtDQUFBO0FBb0JGOztBQWpCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSxZQUFBO0FBb0JGOztBQWpCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBb0JGO0FBbEJFO0VBQ0UsaUJBQUE7QUFvQko7O0FBaEJBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFqQkU7RUFDRSxZQUFBO0FBbUJKO0FBakJFO0VBQ0UsaUJBQUE7QUFtQko7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWtCRjs7QUFmQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBa0JGOztBQWJBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7QUFnQkY7O0FBYkE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7QUFnQkY7O0FBYkE7RUFDSTtJQUFNLGtCQUFBO0lBQW1CLFFBQUE7SUFBUSxVQUFBO0VBbUJuQztFQWxCRTtJQUFNLGtCQUFBO0lBQW1CLFdBQUE7SUFBVyxZQUFBO0VBdUJ0QztFQXRCRTtJQUFNLGtCQUFBO0lBQW1CLFlBQUE7SUFBWSxVQUFBO0VBMkJ2QztBQUNGO0FBekJBO0VBQ0U7SUFBTSxrQkFBQTtJQUFtQixXQUFBO0lBQVcsVUFBQTtFQThCcEM7RUE3QkE7SUFBTSxrQkFBQTtJQUFtQixVQUFBO0lBQVUsWUFBQTtFQWtDbkM7RUFqQ0E7SUFBTSxrQkFBQTtJQUFtQixRQUFBO0lBQVEsVUFBQTtFQXNDakM7QUFDRjtBQXBDQTtFQUNFO0lBQ0UsaUJBQUE7RUFzQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbW1vbiB2YXJpYWJsZXMgZm9yIGFsbCB0aGUgYXBwICovXG5cbi8qIFNjcmVlbnMgKi9cbiRkZXNrdG9wOiA5OTJweDtcbiR0YWJsZXQ6ICA3NjhweDtcbiRtb2JpbGU6ICA1NzZweDtcblxuLyogRm9udCBmYW1pbHkgKi9cbiR0aXRsZS1mb250OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4kdGV4dC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuXG4vKiBDb2xvciB2YXJpYWJsZXMgKi9cbiR0aXRsZS1jb2xvcjogIzJhMmEyYTtcbiR0ZXh0LWNvbG9yOiAjODg4ODg4O1xuJHByaW1hcnktY29sb3I6ICNEODhBODM7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQkE2QzY1O1xuJHRlcnRpYXJ5LWNvbG9yOiAjMzk0MzU5O1xuJGxpbmstY29sb3Itc2Vjb25kYXJ5OiAjMDA3YmZmO1xuXG4kZXJyb3ItY29sb3I6ICNjMjQ4M2Q7XG4kc3VjY2Vzcy1jb2xvcjogIzJkNjMzOTtcblxuXG4kYmxhY2s6ICMyNDI0Mjk7XG4kbGluay1jb2xvcjogIzc3Nzc3NztcbiR3aGl0ZTogI2ZmZjtcblxuLyogI0Q4OEE4M1xuI0JBNkM2NVxuI0YyQkU4RFxuIzM5NDM1OVxuIzMwMzI0MiAqL1xuXG5cbi8qIEdvb2dsZSBmb250cyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOjcwMCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCcpO1xuXG5cblxuLy8gU2hhcmVkIHN0eWxlc1xuLm5hdi1saW5re1xuICBjb2xvcjogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuJGRlZmF1bHQtcGFkZGluZzogMjBweDtcbiRtaW4taGVhZGVyLWhlaWdodDogMTEwcHg7XG4kbWF4LWZvb3Rlci1oZWlnaHQ6IDE3NXB4O1xuJG1heC1mb290ZXItaGVpZ2h0LWZ1bGwtc2NyZWVuOiAxNDBweDtcblxuLy8gRk9OVC1TSVpFXG4kZm9udC1zaXplLWJpZy14eDogMjRweDtcbiRmb250LXNpemUtYmlnLXg6IDIwcHg7XG4kZm9udC1zaXplLWJpZzogMThweDtcbiRmb250LXNpemUtbm9ybWFsLXg6IDE2cHg7XG4kZm9udC1zaXplLW5vcm1hbDogMTRweDtcbiRmb250LXNpemUtc21hbGw6IDEycHg7XG4kZm9udC1zaXplLXNtYWxsLXg6IDEwcHg7XG4kZm9udC1zaXplLXNtYWxsLXh4OiA5cHg7XG4kZm9udC1zaXplLXNtYWxsLXh4eDogOHB4O1xuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9fdmFyaWFibGVzXCI7XG5cbjpob3N0IHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCV9XG5cbi5mdWxsLXNjcmVlbiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skbWF4LWZvb3Rlci1oZWlnaHR9IC0gI3skbWluLWhlYWRlci1oZWlnaHR9KTtcbn1cblxuLmNvbnRhaW5lciwgLnJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nZ2VkLXVzZXItc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vdGlmaWNhdGlvbl9fY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWF4LWhlaWdodDogNzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLm5vdGlmaWNhdGlvbl9faW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gIH1cbn1cblxuLnRyaXAtdHlwZV9fY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWF4LWhlaWdodDogNzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnJvdywgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5jb2wtbWQtNiB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gIH1cbn1cblxuLnB3YS1jb250YWluZXIge1xuICBoZWlnaHQ6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3F1ZXN0aW9ucy1hcmVhIHtcbiAgdG9wOiAxMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICBBTklNQVRJT05TICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5hcHBlYXJGcm9tQm90dG9tIHtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBhcHBlYXJGcm9tQm90dG9tO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYXBwZWFyRnJvbUJvdHRvbTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZGlzYXBwZWFyVG9Ub3Age1xuICBhbmltYXRpb24tbmFtZTogZGlzYXBwZWFyVG9Ub3A7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBkaXNhcHBlYXJUb1RvcDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhclRvVG9wIHtcbiAgICAwJSAgIHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOjBweDtvcGFjaXR5OjE7fVxuICAgIDUwJSAge3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6LTU1MHB4O29wYWNpdHk6MC41O31cbiAgICAxMDAlIHtwb3NpdGlvbjogcmVsYXRpdmU7dG9wOi0xMTAwcHg7b3BhY2l0eTowO31cbn1cblxuQGtleWZyYW1lcyBhcHBlYXJGcm9tQm90dG9tIHtcbiAgMCUgICB7cG9zaXRpb246IHJlbGF0aXZlO3RvcDoxMTAwcHg7b3BhY2l0eTowO31cbiAgNTAlICB7cG9zaXRpb246IHJlbGF0aXZlO3RvcDo1NTBweDtvcGFjaXR5OjAuNTt9XG4gIDEwMCUge3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6MHB4O29wYWNpdHk6MTt9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XG4gIGgxe1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('showOverview', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
      opacity: 0,
      height: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
      opacity: 1,
      height: 'auto'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('show => hide', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(FULL_SCREEN_ANIMATION_TIME)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('hide => show', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(FULL_SCREEN_ANIMATION_TIME)])])]
  }
});

/***/ }),

/***/ 3224:
/*!********************************************************************************************************************!*\
  !*** ./src/app/public/home/containers/home/max-suitcases-reached-dialog/max-suitcases-reached-dialog.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaxSuitcasesReachedDialogComponent: () => (/* binding */ MaxSuitcasesReachedDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);





function MaxSuitcasesReachedDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.confirmButton);
  }
}
function MaxSuitcasesReachedDialogComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.errorButton);
  }
}
class MaxSuitcasesReachedDialogComponent {
  constructor(data) {
    this.data = data;
  }
}
MaxSuitcasesReachedDialogComponent.ɵfac = function MaxSuitcasesReachedDialogComponent_Factory(t) {
  return new (t || MaxSuitcasesReachedDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
MaxSuitcasesReachedDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MaxSuitcasesReachedDialogComponent,
  selectors: [["suitcase-max-suitcases-reached-dialog"]],
  decls: 8,
  vars: 4,
  consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "false", "color", "basic", 4, "ngIf"], ["type", "reset", "mat-button", "", "mat-dialog-close", "false", "color", "basic", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", "false", "color", "basic"], ["type", "reset", "mat-button", "", "mat-dialog-close", "false", "color", "basic"]],
  template: function MaxSuitcasesReachedDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MaxSuitcasesReachedDialogComponent_button_6_Template, 2, 1, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MaxSuitcasesReachedDialogComponent_button_7_Template, 2, 1, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.content);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.confirmButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.confirmButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 1306:
/*!***********************************************************************************!*\
  !*** ./src/app/public/home/containers/overview/dialog/remove-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveDialogComponent: () => (/* binding */ RemoveDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);



class RemoveDialogComponent {}
RemoveDialogComponent.ɵfac = function RemoveDialogComponent_Factory(t) {
  return new (t || RemoveDialogComponent)();
};
RemoveDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RemoveDialogComponent,
  selectors: [["app-remove-dialog"]],
  decls: 10,
  vars: 0,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8051128829689219077$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_1 = goog.getMsg("Remove suitcase");
      i18n_0 = MSG_EXTERNAL_8051128829689219077$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟f1e72e97a7d31b20e9d61acfeeb8e9aa114c025b␟8051128829689219077:Remove suitcase`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4581064066393462071$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_3 = goog.getMsg("Are you sure that you wish to remove this suitcase?");
      i18n_2 = MSG_EXTERNAL_4581064066393462071$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟fc57bc86c58ddb009861ef9b07f26a9b36690948␟4581064066393462071:Are you sure that you wish to remove this suitcase?`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_cancel_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_5 = goog.getMsg("Cancel");
      i18n_4 = MSG_EXTERNAL_cancel_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_5;
    } else {
      i18n_4 = $localize`:@@cancel_button␟d7b35c384aecd25a516200d6921836374613dfe7␟2159130950882492111:Cancel`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_remove_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_7 = goog.getMsg("Remove");
      i18n_6 = MSG_EXTERNAL_remove_button$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_DIALOG_REMOVE_DIALOG_COMPONENT_TS_7;
    } else {
      i18n_6 = $localize`:@@remove_button␟019d4bd6a5690f0cfa0ecf346a4e6bf7f0d8debb␟4814285799071780083:Remove`;
    }
    return [["mat-dialog-title", ""], i18n_0, [1, "mat-typography"], i18n_2, ["align", "end"], ["mat-button", "", "mat-dialog-close", "false", "color", "basic"], i18n_4, ["mat-button", "", "mat-dialog-close", "true", "cdkFocusInitial", "", "color", "warn"], i18n_6];
  },
  template: function RemoveDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 7827:
/*!***********************************************************************!*\
  !*** ./src/app/public/home/containers/overview/overview.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_models_suitcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/models/suitcase */ 4535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog/remove-dialog.component */ 1306);
/* harmony import */ var _core_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/config/config */ 2018);
/* harmony import */ var _core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/suitcase.service */ 1805);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);













function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "beach_access");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "filter_hdr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "pets");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "baby_changing_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "beach_access");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "filter_hdr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "sports_soccer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "pets");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "baby_changing_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_2_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_3_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_4_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_5_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_6_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_ng_container_7_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11)(9, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 13)(12, "div", 14)(13, "div", 15)(14, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 18)(19, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_24_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_25_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_26_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_27_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_mat_icon_28_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_Template_mat_icon_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.edit(ctx_r28.suitcaseList[i_r3 + 1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_Template_mat_icon_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.remove(ctx_r31.suitcaseList[i_r3 + 1]._id, i_r3 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r16.suitcaseList[i_r3 + 1].icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "mountain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "beach");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "baby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "pet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "sport");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.suitcaseList[i_r3 + 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.suitcaseList[i_r3 + 1].getPrintDate(ctx_r16.localeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r16.suitcaseList[i_r3 + 1].getPrintPlace());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.suitcaseList[i_r3 + 1].type.beach.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.suitcaseList[i_r3 + 1].type.mountain.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.suitcaseList[i_r3 + 1].type.sport.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.suitcaseList[i_r3 + 1].type.pet.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.suitcaseList[i_r3 + 1].type.baby.selected);
  }
}
function OverviewComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_4_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_5_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_7_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_8_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, OverviewComponent_div_0_ng_container_3_ng_container_1_ng_container_9_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 11)(11, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18)(21, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_26_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_27_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_28_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_29_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, OverviewComponent_div_0_ng_container_3_ng_container_1_mat_icon_30_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21)(32, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_0_ng_container_3_ng_container_1_Template_mat_icon_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.edit(ctx_r34.suitcaseList[i_r3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_0_ng_container_3_ng_container_1_Template_mat_icon_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.remove(ctx_r37.suitcaseList[i_r3]._id, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, OverviewComponent_div_0_ng_container_3_ng_container_1_div_36_Template, 34, 14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r4.suitcaseList[i_r3].icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "mountain");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "beach");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "baby");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "pet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "sport");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.suitcaseList[i_r3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.suitcaseList[i_r3].getPrintDate(ctx_r4.localeId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.suitcaseList[i_r3].getPrintPlace());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3].type.beach.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3].type.mountain.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3].type.sport.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3].type.pet.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3].type.baby.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.suitcaseList[i_r3 + 1]);
  }
}
function OverviewComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewComponent_div_0_ng_container_3_ng_container_1_Template, 37, 15, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r3 % 2 === 0);
  }
}
function OverviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OverviewComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.suitcaseList);
  }
}
class OverviewComponent {
  constructor(_suitcaseService, _dialog, _changeDetector, _router, _snackBar, localeId) {
    this._suitcaseService = _suitcaseService;
    this._dialog = _dialog;
    this._changeDetector = _changeDetector;
    this._router = _router;
    this._snackBar = _snackBar;
    this.localeId = localeId;
    this.dataReady = false;
    this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    const input = {};
    this._suitcaseService.retrieveSuitcaseOverview(input).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(output => output.list)).subscribe(suitcaseList => {
      let otherIcon = 0;
      let mountainIcon = 0;
      let beachIcon = 0;
      let babyIcon = 0;
      let sportIcon = 0;
      let petIcon = 0;
      suitcaseList = suitcaseList.map(suitcase => {
        // assign a default image if it has not one attached
        if (!suitcase.icon && suitcase.items.baby.length > 0 && babyIcon <= otherIcon) {
          suitcase.icon = 'baby';
          babyIcon++;
        } else if (!suitcase.icon && suitcase.items.sport.length > 0 && sportIcon <= otherIcon) {
          suitcase.icon = 'sport';
          sportIcon++;
        } else if (!suitcase.icon && suitcase.items.pet.length > 0 && petIcon <= otherIcon) {
          suitcase.icon = 'pet';
          petIcon++;
        } else if (!suitcase.icon && suitcase.items.mountain.length > 0 && mountainIcon <= otherIcon) {
          suitcase.icon = 'mountain';
          mountainIcon++;
        } else if (!suitcase.icon && suitcase.items.beach.length > 0 && beachIcon <= otherIcon) {
          suitcase.icon = 'beach';
          beachIcon++;
        } else {
          suitcase.icon = 'cultural';
          otherIcon++;
        }
        // create a new class suitcase to be able to use the inner methods
        return new _core_models_suitcase__WEBPACK_IMPORTED_MODULE_0__.Suitcase(suitcase);
      });
      this.suitcaseList = suitcaseList;
      this.suitcaseListTotal = suitcaseList.length;
      this.dataReady = true;
      this._changeDetector.detectChanges();
      this.dataLoaded.emit();
    });
  }
  edit(suitcase) {
    this._suitcaseService.setCurrentSuitcase(suitcase);
    this._router.navigate(['edit-suitcase', suitcase.name], {
      state: {
        id: suitcase._id
      }
    });
  }
  remove(id, index) {
    // confirm it the user is sure he/she wants to remove
    const dialogRef = this._dialog.open(_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_1__.RemoveDialogComponent, {
      height: '200px',
      width: '400px',
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm === 'true') {
        this._suitcaseService.removeSuitcase(id).subscribe(response => {
          this.suitcaseList.splice(index, 1);
          this._changeDetector.detectChanges();
          this._snackBar.open("Una maleta menos...", '', {
            duration: _core_config_config__WEBPACK_IMPORTED_MODULE_2__.GENERAL_SNACKBAR_TIME
          });
        }, error => {
          this._snackBar.open("Vaya, ha habido un problema y no se ha podido eliminar la maleta, si el problema persiste por favor contactanos", '', {
            duration: _core_config_config__WEBPACK_IMPORTED_MODULE_2__.EXTENDED_SNACKBAR_TIME
          });
        });
      }
      dialogRef.close();
    });
  }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
  return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_suitcase_service__WEBPACK_IMPORTED_MODULE_3__.SuitcaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID));
};
OverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OverviewComponent,
  selectors: [["my-suitcase-overview"]],
  outputs: {
    dataLoaded: "dataLoaded"
  },
  decls: 1,
  vars: 1,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8526177210456112054$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_OVERVIEW_COMPONENT_TS__1 = goog.getMsg("My suitcases");
      i18n_0 = MSG_EXTERNAL_8526177210456112054$$____________USERS_AMANSO_GIT_MYSUITCASE_SRC_APP_PUBLIC_HOME_CONTAINERS_OVERVIEW_OVERVIEW_COMPONENT_TS__1;
    } else {
      i18n_0 = $localize`:␟20e6397af2875eae30e7048026c8beeae5845bb5␟8526177210456112054:My suitcases`;
    }
    return [["class", "container", 4, "ngIf"], [1, "container"], ["id", "misMaletas", 1, "overview-title"], i18n_0, [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "overview-card", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "overview-card-overlay"], [1, "overview-title"], [1, "media"], [1, "media-body"], [1, "overview-date"], ["matSuffix", "", 1, "icon"], [1, "align-middle"], [1, "overview-place"], [1, "overview-categories"], ["matSuffix", "", "class", "icon", 4, "ngIf"], [1, "overview-actions"], ["matSuffix", "", 1, "icon", "clickable-icon", "link-icon", 3, "click"], ["class", "col-md-6", 4, "ngIf"], ["src", "assets/img/categories/mountain.gif", "alt", "", 1, "card-img"], ["src", "assets/img/categories/beach.gif", "alt", "", 1, "card-img"], ["src", "assets/img/categories/baby2.gif", "alt", "", 1, "card-img"], ["src", "assets/img/categories/pet.jpeg", "alt", "", 1, "card-img"], ["src", "assets/img/categories/sport.gif", "alt", "", 1, "card-img"], ["src", "assets/img/blog/blog-3.png", "alt", "", 1, "card-img"]];
  },
  template: function OverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OverviewComponent_div_0_Template, 4, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataReady);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchDefault, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);@import url(https://fonts.googleapis.com/css?family=Roboto:400,500);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  cursor: pointer;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card-img[_ngcontent-%COMP%] {\n  height: 250px;\n}\n\n.overview-title[_ngcontent-%COMP%] {\n  color: #D88A83;\n}\n\n.overview-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 30px;\n  position: relative;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%] {\n  background: #fff;\n  bottom: 0;\n  left: 0;\n  opacity: 0.9;\n  padding: 40px;\n  position: absolute;\n  transform: translateY(40px);\n  width: 100%;\n  z-index: -1;\n  transition: all 0.3s ease 0s;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555555;\n  margin-bottom: 10px;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 15px;\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: black;\n  line-height: 1.25;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-title[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-date[_ngcontent-%COMP%], .overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-place[_ngcontent-%COMP%], .overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-categories[_ngcontent-%COMP%] {\n  display: flex;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-place[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-left: 5px;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-actions[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 20px 10px 0 10px;\n}\n.overview-card[_ngcontent-%COMP%]   .overview-card-overlay[_ngcontent-%COMP%]   .overview-actions[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  font-size: 40px;\n  padding: 0;\n}\n.overview-card[_ngcontent-%COMP%]:hover   .overview-card-overlay[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  width: 100%;\n  z-index: 1;\n}\n@media (min-width: 1200px) {\n  .overview-card[_ngcontent-%COMP%]:hover   .overview-card-overlay[_ngcontent-%COMP%] {\n    width: 74%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVibGljL2hvbWUvY29udGFpbmVycy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBQTtBQUVBLFlBQUE7QUFLQSxnQkFBQTtBQUtBLG9CQUFBO0FBZ0JBOzs7O1NBQUE7QUFPQSxpQkFBQTtBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUM3QkY7O0FDZkE7K0ZBQUE7QUErSEUsMEJBQUE7QUFPQSx5QkFBQTtBQU9BLHlCQUFBO0FBT0EsOEJBQUE7QUFjRjsrRkFBQTtBRC9KQTtFQUNFLGFBQUE7QUF1QkY7O0FBcEJBO0VBQ0UsY0RPYztBQ2dCaEI7O0FBcEJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF1QkY7QUFyQkU7RUFDRSxnQkRTSTtFQ1JKLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUNsQkgsNEJBSndCO0FEaUR6QjtBQXhCSTtFQUNFLGdCQUFBO0FBMEJOO0FBdkJJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXlCTjtBQXRCSTtFQUNFLGVBQUE7QUF3Qk47QUFyQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXVCTjtBQXJCTTtFQUNFLHlCQUFBO0FBdUJSO0FBbkJJO0VBQ0UsYUFBQTtBQXFCTjtBQW5CTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFxQlI7QUFqQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBbUJOO0FBakJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQW1CUjtBQWpCUTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBbUJWO0FBWEk7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBYU47QUFYTTtFQUxGO0lBTUksVUFBQTtFQWNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb21tb24gdmFyaWFibGVzIGZvciBhbGwgdGhlIGFwcCAqL1xuXG4vKiBTY3JlZW5zICovXG4kZGVza3RvcDogOTkycHg7XG4kdGFibGV0OiAgNzY4cHg7XG4kbW9iaWxlOiAgNTc2cHg7XG5cbi8qIEZvbnQgZmFtaWx5ICovXG4kdGl0bGUtZm9udDogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuJHRleHQtZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cblxuLyogQ29sb3IgdmFyaWFibGVzICovXG4kdGl0bGUtY29sb3I6ICMyYTJhMmE7XG4kdGV4dC1jb2xvcjogIzg4ODg4ODtcbiRwcmltYXJ5LWNvbG9yOiAjRDg4QTgzO1xuJHNlY29uZGFyeS1jb2xvcjogI0JBNkM2NTtcbiR0ZXJ0aWFyeS1jb2xvcjogIzM5NDM1OTtcbiRsaW5rLWNvbG9yLXNlY29uZGFyeTogIzAwN2JmZjtcblxuJGVycm9yLWNvbG9yOiAjYzI0ODNkO1xuJHN1Y2Nlc3MtY29sb3I6ICMyZDYzMzk7XG5cblxuJGJsYWNrOiAjMjQyNDI5O1xuJGxpbmstY29sb3I6ICM3Nzc3Nzc7XG4kd2hpdGU6ICNmZmY7XG5cbi8qICNEODhBODNcbiNCQTZDNjVcbiNGMkJFOERcbiMzOTQzNTlcbiMzMDMyNDIgKi9cblxuXG4vKiBHb29nbGUgZm9udHMgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDo3MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAnKTtcblxuXG5cbi8vIFNoYXJlZCBzdHlsZXNcbi5uYXYtbGlua3tcbiAgY29sb3I6IHVuc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiRkZWZhdWx0LXBhZGRpbmc6IDIwcHg7XG4kbWluLWhlYWRlci1oZWlnaHQ6IDExMHB4O1xuJG1heC1mb290ZXItaGVpZ2h0OiAxNzVweDtcbiRtYXgtZm9vdGVyLWhlaWdodC1mdWxsLXNjcmVlbjogMTQwcHg7XG5cbi8vIEZPTlQtU0laRVxuJGZvbnQtc2l6ZS1iaWcteHg6IDI0cHg7XG4kZm9udC1zaXplLWJpZy14OiAyMHB4O1xuJGZvbnQtc2l6ZS1iaWc6IDE4cHg7XG4kZm9udC1zaXplLW5vcm1hbC14OiAxNnB4O1xuJGZvbnQtc2l6ZS1ub3JtYWw6IDE0cHg7XG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14OiAxMHB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14eDogOXB4O1xuJGZvbnQtc2l6ZS1zbWFsbC14eHg6IDhweDtcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL3Njc3MvX3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9fbWl4aW5zXCI7XG5cbi5jYXJkLWltZyB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5vdmVydmlldy10aXRsZSB7XG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLm92ZXJ2aWV3LWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAub3ZlcnZpZXctY2FyZC1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xuXG4gICAgaDR7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIHNtYWxse1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM1NTU1NTU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIHB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm92ZXJ2aWV3LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS4yNTtcblxuICAgICAgJjo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3ZlcnZpZXctZGF0ZSwgLm92ZXJ2aWV3LXBsYWNlLCAub3ZlcnZpZXctY2F0ZWdvcmllcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm92ZXJ2aWV3LWFjdGlvbnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDAgMTBweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6aG92ZXJ7XG5cbiAgICAub3ZlcnZpZXctY2FyZC1vdmVybGF5IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTtcblxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTIwMHB4KXtcbiAgICAgICAgd2lkdGg6IDc0JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qIG1peGluIHN0YXJ0XHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCRhcmdzOiBhbGwgMC4zcyBlYXNlIDBzKSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkYXJncztcclxuXHQtbW96LXRyYW5zaXRpb246ICRhcmdzO1xyXG5cdC1vLXRyYW5zaXRpb246ICRhcmdzO1xyXG5cdHRyYW5zaXRpb246ICRhcmdzO1xyXG59XHJcbiAgXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWR1cmF0aW9uKCRhcmdzMSwgJGFyZ3MyKSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAkYXJnczEsICRhcmdzMjtcclxuXHQtbW96LXRyYW5zaXRpb24tZHVyYXRpb246ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdC1vLXRyYW5zaXRpb24tZHVyYXRpb246ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdHRyYW5zaXRpb24tZHVyYXRpb246ICRhcmdzMSwgJGFyZ3MyO1xyXG59XHJcbiAgXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRhcmdzMSwgJGFyZ3MyKSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAkYXJnczEsICRhcmdzMjtcclxuXHQtbW96LXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdC1vLXRyYW5zaXRpb24tZGVsYXk6ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6ICRhcmdzMSwgJGFyZ3MyO1xyXG59XHJcbiAgXHJcbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCRhcmdzMSwgJGFyZ3MyKSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkYXJnczEsICRhcmdzMjtcclxuXHQtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdC1vLXRyYW5zaXRpb24tcHJvcGVydHk6ICRhcmdzMSwgJGFyZ3MyO1xyXG5cdHRyYW5zaXRpb24tcHJvcGVydHk6ICRhcmdzMSwgJGFyZ3MyO1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1peGluIGdyYWRpZW50KCRkZWcsICRhcmdzMSwgJGFyZ3MyKSB7XHJcblx0ICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkYXJnczEsICRhcmdzMik7XHJcblx0ICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkYXJnczEsICRhcmdzMik7XHJcblx0ICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJGRlZywgJGFyZ3MxLCAkYXJnczIpO1xyXG5cdCAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkZWcsICRhcmdzMSwgJGFyZ3MyKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gIGZsaXRlciBtaXhpblxyXG4gIFxyXG4gIEBtaXhpbiBmaWx0ZXIoJGZpbHRlci10eXBlLCRmaWx0ZXItYW1vdW50KSB7IFxyXG5cdC13ZWJraXQtZmlsdGVyOiAkZmlsdGVyLXR5cGUrdW5xdW90ZSgnKCN7JGZpbHRlci1hbW91bnR9KScpO1xyXG5cdC1tb3otZmlsdGVyOiAkZmlsdGVyLXR5cGUrdW5xdW90ZSgnKCN7JGZpbHRlci1hbW91bnR9KScpO1xyXG5cdC1tcy1maWx0ZXI6ICRmaWx0ZXItdHlwZSt1bnF1b3RlKCcoI3skZmlsdGVyLWFtb3VudH0pJyk7XHJcblx0LW8tZmlsdGVyOiAkZmlsdGVyLXR5cGUrdW5xdW90ZSgnKCN7JGZpbHRlci1hbW91bnR9KScpO1xyXG5cdGZpbHRlcjogJGZpbHRlci10eXBlK3VucXVvdGUoJygjeyRmaWx0ZXItYW1vdW50fSknKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuXHRcdCAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuXHRcdCAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuXHRcdCAgIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuXHRcdFx0ICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgfVxyXG4gIFxyXG4gIEBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCR2YWx1ZSkge1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcblx0XHQgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcblx0XHQgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcblx0XHQgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkdmFsdWU7XHJcblx0XHRcdCAgdHJhbnNmb3JtLW9yaWdpbjogJHZhbHVlO1xyXG4gIH1cclxuICBcclxuICBAbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcclxuXHQgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG5cdFx0IC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG5cdFx0XHQgIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICB9XHJcbiAgXHJcbiAgQG1peGluIGNhbGMgKCAkcHJvcGVydHksICRleHByZXNzaW9uICkge1xyXG5cdCAgI3skcHJvcGVydHl9OiAtd2Via2l0LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xyXG5cdCAgI3skcHJvcGVydHl9OiAtbW96LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xyXG5cdCAgI3skcHJvcGVydHl9OiBjYWxjKCN7JGV4cHJlc3Npb259KTtcclxuICB9XHJcbiAgXHJcbiAgQG1peGluIGtleWZyYW1lcyAoICRhbmltYXRpb24tbmFtZSApIHtcclxuXHQgIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG5cdFx0ICBAY29udGVudDtcclxuXHQgIH1cclxuXHQgIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0gIHtcclxuXHRcdCAgQGNvbnRlbnQ7XHJcblx0ICB9XHJcblx0ICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XHJcblx0XHQgIEBjb250ZW50O1xyXG5cdCAgfVxyXG5cdCAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xyXG5cdFx0ICBAY29udGVudDtcclxuXHQgIH1cclxuXHR9XHJcblx0XHJcblx0QG1peGluIGZpbHRlcigkZmlsdGVyKSB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogJGZpbHRlcjtcclxuICAgIC1tb3otZmlsdGVyOiAkZmlsdGVyO1xyXG4gICAgLW8tZmlsdGVyOiAkZmlsdGVyO1xyXG4gICAgLW1zLWZpbHRlcjogJGZpbHRlcjtcclxuICAgIGZpbHRlcjogJGZpbHRlcjtcclxufVxyXG4gIFxyXG4gIC8vIFBsYWNlaG9sZGVyIE1peGluc1xyXG4gIEBtaXhpbiBwbGFjZWhvbGRlciB7XHJcblx0Ji5wbGFjZWhvbGRlciB7XHJcblx0XHRAY29udGVudDtcclxuXHR9XHJcblx0JjotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRcdEBjb250ZW50O1xyXG5cdH1cclxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuXHRcdEBjb250ZW50O1xyXG5cdH1cclxuXHQmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRcdEBjb250ZW50O1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQG1peGluIGFuaW1hdGlvbiAoJGFyZ3MpIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogJGFyZ3M7XHJcblx0ICAgLW1vei1hbmltYXRpb246ICRhcmdzO1xyXG5cdFx0IC1vLWFuaW1hdGlvbjogJGFyZ3M7XHJcblx0XHRcdGFuaW1hdGlvbjogJGFyZ3M7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBMYXlvdXQ6IDEyODBweCAqL1xyXG4gIEBtaXhpbiBtZWRpdW0ge1xyXG5cdEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG5cdCAgQGNvbnRlbnQ7XHJcblx0fVxyXG59XHJcbiAgXHJcbiAgLyogVGFibGV0IExheW91dDogNzY4cHggKi9cclxuICBAbWl4aW4gdGFibGV0IHtcclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHQgIEBjb250ZW50O1xyXG5cdH1cclxufVxyXG4gIFxyXG4gIC8qIE1vYmlsZSBMYXlvdXQ6IDMyMHB4ICovXHJcbiAgQG1peGluIG1vYmlsZSB7XHJcblx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0ICBAY29udGVudDtcclxuXHR9XHJcbn1cclxuICBcclxuICAvKiBXaWRlIE1vYmlsZSBMYXlvdXQ6IDQ4MHB4ICovXHJcbiAgQG1peGluIHdpZGUtbW9iaWxlIHtcclxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdCAgQGNvbnRlbnQ7XHJcblx0fVxyXG59XHJcbiAgXHJcbiAgXHJcbiAgQG1peGluIGNtcSAoJG1pbiwgJG1heCkge1xyXG5cdEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xyXG5cdCAgQGNvbnRlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vKiBtaXhpbiBlbmRcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 1449:
/*!****************************************************!*\
  !*** ./src/app/public/home/home-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/home/home.component */ 9003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




// Root routes of this particular module: HOME.
const routes = [{
  path: '',
  component: _containers_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};
HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2789:
/*!********************************************!*\
  !*** ./src/app/public/home/home.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/shared.module */ 1782);
/* harmony import */ var _containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home/home.component */ 9003);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 1449);
/* harmony import */ var _containers_create_suitcase_form_create_suitcase_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/create-suitcase-form/create-suitcase-form.component */ 4418);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/overview/overview.component */ 7827);
/* harmony import */ var _containers_overview_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/overview/dialog/remove-dialog.component */ 1306);
/* harmony import */ var _containers_home_max_suitcases_reached_dialog_max_suitcases_reached_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/home/max-suitcases-reached-dialog/max-suitcases-reached-dialog.component */ 3224);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);





















class HomeModule {
  constructor() {}
}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [
  // Angular
  _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
  // App
  _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
  // Angular Material
  _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_containers_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _containers_create_suitcase_form_create_suitcase_form_component__WEBPACK_IMPORTED_MODULE_3__.CreateSuitcaseFormComponent, _containers_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__.OverviewComponent, _containers_overview_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_5__.RemoveDialogComponent, _containers_home_max_suitcases_reached_dialog_max_suitcases_reached_dialog_component__WEBPACK_IMPORTED_MODULE_6__.MaxSuitcasesReachedDialogComponent],
    imports: [
    // Angular
    _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    // App
    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
    // Angular Material
    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule, _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 8497:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CARD_CONFIG: () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   MatCard: () => (/* binding */ MatCard),
/* harmony export */   MatCardActions: () => (/* binding */ MatCardActions),
/* harmony export */   MatCardAvatar: () => (/* binding */ MatCardAvatar),
/* harmony export */   MatCardContent: () => (/* binding */ MatCardContent),
/* harmony export */   MatCardFooter: () => (/* binding */ MatCardFooter),
/* harmony export */   MatCardHeader: () => (/* binding */ MatCardHeader),
/* harmony export */   MatCardImage: () => (/* binding */ MatCardImage),
/* harmony export */   MatCardLgImage: () => (/* binding */ MatCardLgImage),
/* harmony export */   MatCardMdImage: () => (/* binding */ MatCardMdImage),
/* harmony export */   MatCardModule: () => (/* binding */ MatCardModule),
/* harmony export */   MatCardSmImage: () => (/* binding */ MatCardSmImage),
/* harmony export */   MatCardSubtitle: () => (/* binding */ MatCardSubtitle),
/* harmony export */   MatCardTitle: () => (/* binding */ MatCardTitle),
/* harmony export */   MatCardTitleGroup: () => (/* binding */ MatCardTitleGroup),
/* harmony export */   MatCardXlImage: () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 5309);





/** Injection token that can be used to provide the default options the card module. */
const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_CARD_CONFIG');
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCard {
  constructor(config) {
    this.appearance = config?.appearance || 'raised';
  }
}
MatCard.ɵfac = function MatCard_Factory(t) {
  return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CARD_CONFIG, 8));
};
MatCard.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-mdc-card", "mdc-card"],
  hostVars: 4,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
    }
  },
  inputs: {
    appearance: "appearance"
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation);--mdc-elevated-card-container-shape:4px;--mdc-outlined-card-container-shape:4px;--mdc-outlined-card-outline-width:1px}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation);--mdc-elevated-card-container-shape:4px;--mdc-outlined-card-container-shape:4px;--mdc-outlined-card-outline-width:1px}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_CARD_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardTitle {}
MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
  return new (t || MatCardTitle)();
};
MatCardTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-mdc-card-title"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
class MatCardTitleGroup {}
MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
  return new (t || MatCardTitleGroup)();
};
MatCardTitleGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-mdc-card-title-group"],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardContent {}
MatCardContent.ɵfac = function MatCardContent_Factory(t) {
  return new (t || MatCardContent)();
};
MatCardContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardContent,
  selectors: [["mat-card-content"]],
  hostAttrs: [1, "mat-mdc-card-content"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardSubtitle {}
MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
  return new (t || MatCardSubtitle)();
};
MatCardSubtitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-mdc-card-subtitle"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardActions {
  constructor() {
    // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
    // as to not conflict with the native `align` attribute.
    /** Position of the actions inside the card. */
    this.align = 'start';
  }
}
MatCardActions.ɵfac = function MatCardActions_Factory(t) {
  return new (t || MatCardActions)();
};
MatCardActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardHeader {}
MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
  return new (t || MatCardHeader)();
};
MatCardHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-mdc-card-header"],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-mdc-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardFooter {}
MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
  return new (t || MatCardFooter)();
};
MatCardFooter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-mdc-card-footer"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      }
    }]
  }], null, null);
})();
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardImage {}
MatCardImage.ɵfac = function MatCardImage_Factory(t) {
  return new (t || MatCardImage)();
};
MatCardImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but small. */
class MatCardSmImage {}
MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
  return new (t || MatCardSmImage)();
};
MatCardSmImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but medium. */
class MatCardMdImage {}
MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
  return new (t || MatCardMdImage)();
};
MatCardMdImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but large. */
class MatCardLgImage {}
MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
  return new (t || MatCardLgImage)();
};
MatCardLgImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but extra-large. */
class MatCardXlImage {}
MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
  return new (t || MatCardXlImage)();
};
MatCardXlImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardAvatar {}
MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
  return new (t || MatCardAvatar)();
};
MatCardAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-mdc-card-avatar"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      }
    }]
  }], null, null);
})();
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {}
MatCardModule.ɵfac = function MatCardModule_Factory(t) {
  return new (t || MatCardModule)();
};
MatCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCardModule
});
MatCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [CARD_DIRECTIVES, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: CARD_DIRECTIVES
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6658:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_CHECKBOX_REQUIRED_VALIDATOR: () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   MatCheckbox: () => (/* binding */ MatCheckbox),
/* harmony export */   MatCheckboxChange: () => (/* binding */ MatCheckboxChange),
/* harmony export */   MatCheckboxModule: () => (/* binding */ MatCheckboxModule),
/* harmony export */   MatCheckboxRequiredValidator: () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   _MatCheckboxBase: () => (/* binding */ _MatCheckboxBase),
/* harmony export */   _MatCheckboxRequiredValidatorModule: () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);








/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate'
  };
}
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by checkbox. */
class MatCheckboxChange {}
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
const _MatCheckboxMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
class _MatCheckboxBase extends _MatCheckboxMixinBase {
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  constructor(idPrefix, elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    this.ariaLabelledby = null;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */
    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    this._onTouched = () => {};
    this._currentAnimationClass = '';
    this._currentCheckState = 0 /* TransitionCheckState.Init */;
    this._controlValueAccessorChangeFn = () => {};
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this.defaultColor = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `${idPrefix}${++nextUniqueId}`;
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (checked != this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (newValue !== this.disabled) {
      this._disabled = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(3 /* TransitionCheckState.Indeterminate */);
      } else {
        this._transitionCheckState(this.checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      }

      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
    // component will be only marked for check, but no actual change detection runs automatically.
    // Instead of going back into the zone in order to trigger a change detection which causes
    // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
    // an explicit change detection for the checkbox view and its children.
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      // Remove the animation class to avoid animation when the checkbox is moved between containers
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1000);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    // Assigning the value again here is redundant, but we have to do it in case it was
    // changed inside the `change` listener which will cause the input to be out of sync.
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.disabled && clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.indeterminate && clickAction !== 'check') {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `mat-checkbox`.
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
  _onBlur() {
    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
    // Angular does not expect events to be raised during change detection, so any state change
    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
    // telling the form control it has been touched until the next tick.
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    // Don't transition if animations are disabled.
    if (this._animationMode === 'NoopAnimations') {
      return '';
    }
    switch (oldState) {
      case 0 /* TransitionCheckState.Init */:
        // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
        // [checked] bound to it.
        if (newState === 1 /* TransitionCheckState.Checked */) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == 3 /* TransitionCheckState.Indeterminate */) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case 2 /* TransitionCheckState.Unchecked */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case 1 /* TransitionCheckState.Checked */:
        return newState === 2 /* TransitionCheckState.Unchecked */ ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case 3 /* TransitionCheckState.Indeterminate */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return '';
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
}
_MatCheckboxBase.ɵfac = function _MatCheckboxBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
_MatCheckboxBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatCheckboxBase,
  viewQuery: function _MatCheckboxBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    id: "id",
    required: "required",
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    _labelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label']
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatCheckbox extends _MatCheckboxBase {
  constructor(elementRef, changeDetectorRef, ngZone, tabIndex, animationMode, options) {
    super('mat-mdc-checkbox-', elementRef, changeDetectorRef, ngZone, tabIndex, animationMode, options);
    this._animationClasses = {
      uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
      uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
      checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
      checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
      indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
      indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked'
    };
  }
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _onInputClick() {
    super._handleInputClick();
  }
  _onTouchTargetClick() {
    super._handleInputClick();
    if (!this.disabled) {
      // Normally the input should be focused already, but if the click
      // comes from the touch target, then we might have to focus it ourselves.
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};
MatCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCheckbox,
  selectors: [["mat-checkbox"]],
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 12,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 19,
  consts: [[1, "mdc-form-field", 3, "click"], [1, "mdc-checkbox"], ["checkbox", ""], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "indeterminate", "disabled", "id", "required", "tabIndex", "blur", "click", "change"], ["input", ""], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"], ["label", ""]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_0_listener($event) {
        return ctx._preventBubblingFromLabel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_3_listener() {
        return ctx._onTouchTargetClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatCheckbox_Template_input_blur_4_listener() {
        return ctx._onBlur();
      })("click", function MatCheckbox_Template_input_click_4_listener() {
        return ctx._onInputClick();
      })("change", function MatCheckbox_Template_input_change_4_listener($event) {
        return ctx._onInteractionEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition == "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--selected", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("name", ctx.name)("value", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple],
  styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}html{--mdc-checkbox-disabled-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-state-layer-opacity:0.16;--mdc-checkbox-selected-hover-state-layer-opacity:0.04;--mdc-checkbox-selected-pressed-state-layer-opacity:0.16;--mdc-checkbox-unselected-focus-state-layer-opacity:0.16;--mdc-checkbox-unselected-hover-state-layer-opacity:0.04;--mdc-checkbox-unselected-pressed-state-layer-opacity:0.16}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-checkbox',
      host: {
        'class': 'mat-mdc-checkbox',
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`,
        '[class.mdc-checkbox--disabled]': 'disabled',
        '[id]': 'id',
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        '[class.mat-mdc-checkbox-disabled]': 'disabled',
        '[class.mat-mdc-checkbox-checked]': 'checked'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['disableRipple', 'color', 'tabIndex'],
      exportAs: 'matCheckbox',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mdc-form-field\"\n     [class.mdc-form-field--align-end]=\"labelPosition == 'before'\"\n     (click)=\"_preventBubblingFromLabel($event)\">\n  <div #checkbox class=\"mdc-checkbox\">\n    <!-- Render this element first so the input is on top. -->\n    <div class=\"mat-mdc-checkbox-touch-target\" (click)=\"_onTouchTargetClick()\"></div>\n    <input #input\n           type=\"checkbox\"\n           class=\"mdc-checkbox__native-control\"\n           [class.mdc-checkbox--selected]=\"checked\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           [attr.name]=\"name\"\n           [attr.value]=\"value\"\n           [checked]=\"checked\"\n           [indeterminate]=\"indeterminate\"\n           [disabled]=\"disabled\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           (blur)=\"_onBlur()\"\n           (click)=\"_onInputClick()\"\n           (change)=\"_onInteractionEvent($event)\"/>\n    <div class=\"mdc-checkbox__ripple\"></div>\n    <div class=\"mdc-checkbox__background\">\n      <svg class=\"mdc-checkbox__checkmark\"\n           focusable=\"false\"\n           viewBox=\"0 0 24 24\"\n           aria-hidden=\"true\">\n        <path class=\"mdc-checkbox__checkmark-path\"\n              fill=\"none\"\n              d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n      </svg>\n      <div class=\"mdc-checkbox__mixedmark\"></div>\n    </div>\n    <div class=\"mat-mdc-checkbox-ripple mat-mdc-focus-indicator\" mat-ripple\n      [matRippleTrigger]=\"checkbox\"\n      [matRippleDisabled]=\"disableRipple || disabled\"\n      [matRippleCentered]=\"true\"></div>\n  </div>\n  <!--\n    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back\n    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced\n    an unnecessary accessibility tree node.\n  -->\n  <label class=\"mdc-label\"\n         #label\n         [for]=\"inputId\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
      styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}html{--mdc-checkbox-disabled-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-state-layer-opacity:0.16;--mdc-checkbox-selected-hover-state-layer-opacity:0.04;--mdc-checkbox-selected-pressed-state-layer-opacity:0.16;--mdc-checkbox-unselected-focus-state-layer-opacity:0.16;--mdc-checkbox-unselected-hover-state-layer-opacity:0.04;--mdc-checkbox-unselected-pressed-state-layer-opacity:0.16}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
MatCheckboxRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(t) {
    return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator);
  };
}();
MatCheckboxRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();

/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
  return new (t || _MatCheckboxRequiredValidatorModule)();
};
_MatCheckboxRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatCheckboxRequiredValidatorModule
});
_MatCheckboxRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatCheckboxRequiredValidator],
      declarations: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
class MatCheckboxModule {}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) {
  return new (t || MatCheckboxModule)();
};
MatCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCheckboxModule
});
MatCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _MatCheckboxRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _MatCheckboxRequiredValidatorModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule],
      declarations: [MatCheckbox]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2226:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/datepicker.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRange: () => (/* binding */ DateRange),
/* harmony export */   DefaultMatCalendarRangeStrategy: () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MAT_DATEPICKER_VALIDATORS: () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   MAT_DATEPICKER_VALUE_ACCESSOR: () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   MAT_DATE_RANGE_SELECTION_STRATEGY: () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MatCalendar: () => (/* binding */ MatCalendar),
/* harmony export */   MatCalendarBody: () => (/* binding */ MatCalendarBody),
/* harmony export */   MatCalendarCell: () => (/* binding */ MatCalendarCell),
/* harmony export */   MatCalendarHeader: () => (/* binding */ MatCalendarHeader),
/* harmony export */   MatDateRangeInput: () => (/* binding */ MatDateRangeInput),
/* harmony export */   MatDateRangePicker: () => (/* binding */ MatDateRangePicker),
/* harmony export */   MatDateSelectionModel: () => (/* binding */ MatDateSelectionModel),
/* harmony export */   MatDatepicker: () => (/* binding */ MatDatepicker),
/* harmony export */   MatDatepickerActions: () => (/* binding */ MatDatepickerActions),
/* harmony export */   MatDatepickerApply: () => (/* binding */ MatDatepickerApply),
/* harmony export */   MatDatepickerCancel: () => (/* binding */ MatDatepickerCancel),
/* harmony export */   MatDatepickerContent: () => (/* binding */ MatDatepickerContent),
/* harmony export */   MatDatepickerInput: () => (/* binding */ MatDatepickerInput),
/* harmony export */   MatDatepickerInputEvent: () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   MatDatepickerIntl: () => (/* binding */ MatDatepickerIntl),
/* harmony export */   MatDatepickerModule: () => (/* binding */ MatDatepickerModule),
/* harmony export */   MatDatepickerToggle: () => (/* binding */ MatDatepickerToggle),
/* harmony export */   MatDatepickerToggleIcon: () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   MatEndDate: () => (/* binding */ MatEndDate),
/* harmony export */   MatMonthView: () => (/* binding */ MatMonthView),
/* harmony export */   MatMultiYearView: () => (/* binding */ MatMultiYearView),
/* harmony export */   MatRangeDateSelectionModel: () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   MatSingleDateSelectionModel: () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   MatStartDate: () => (/* binding */ MatStartDate),
/* harmony export */   MatYearView: () => (/* binding */ MatYearView),
/* harmony export */   matDatepickerAnimations: () => (/* binding */ matDatepickerAnimations),
/* harmony export */   yearsPerPage: () => (/* binding */ yearsPerPage),
/* harmony export */   yearsPerRow: () => (/* binding */ yearsPerRow)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 2698);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9718);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 554);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 4565);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 26);




























/** @docs-private */
const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3)(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_tr_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
  }
}
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8._cellClicked(item_r6, $event));
    })("focus", function MatCalendarBody_tr_1_td_2_Template_button_focus_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10._emitActiveDateChange(item_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-pressed", ctx_r5._isSelected(item_r6.compareValue))("aria-current", ctx_r5.todayValue === item_r6.compareValue ? "date" : null)("aria-describedby", ctx_r5._getDescribedby(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
  }
}
function MatCalendarBody_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 5, 48, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
  }
}
function MatMonthView_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
  }
}
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {}
function MatCalendar_mat_month_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.activeDate = $event);
    })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6._dateSelected($event));
    })("dragStarted", function MatCalendar_mat_month_view_2_Template_mat_month_view_dragStarted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7._dragStarted($event));
    })("dragEnded", function MatCalendar_mat_month_view_2_Template_mat_month_view_dragEnded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8._dragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_mat_year_view_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.activeDate = $event);
    })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12._goToDateInView($event, "month"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
  }
}
function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.activeDate = $event);
    })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16._goToDateInView($event, "year"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {}
const _c2 = ["button"];
function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must import one of the following ` + `modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a ` + `custom implementation.`);
}

/** Datepicker data that requires internationalization. */
class MatDatepickerIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A label for the calendar popup (used by screen readers). */
    this.calendarLabel = 'Calendar';
    /** A label for the button used to open the calendar popup (used by screen readers). */
    this.openCalendarLabel = 'Open calendar';
    /** Label for the button used to close the calendar popup. */
    this.closeCalendarLabel = 'Close calendar';
    /** A label for the previous month button (used by screen readers). */
    this.prevMonthLabel = 'Previous month';
    /** A label for the next month button (used by screen readers). */
    this.nextMonthLabel = 'Next month';
    /** A label for the previous year button (used by screen readers). */
    this.prevYearLabel = 'Previous year';
    /** A label for the next year button (used by screen readers). */
    this.nextYearLabel = 'Next year';
    /** A label for the previous multi-year button (used by screen readers). */
    this.prevMultiYearLabel = 'Previous 24 years';
    /** A label for the next multi-year button (used by screen readers). */
    this.nextMultiYearLabel = 'Next 24 years';
    /** A label for the 'switch to month view' button (used by screen readers). */
    this.switchToMonthViewLabel = 'Choose date';
    /** A label for the 'switch to year view' button (used by screen readers). */
    this.switchToMultiYearViewLabel = 'Choose month and year';
    /**
     * A label for the first date of a range of dates (used by screen readers).
     * @deprecated Provide your own internationalization string.
     * @breaking-change 17.0.0
     */
    this.startDateLabel = 'Start date';
    /**
     * A label for the last date of a range of dates (used by screen readers).
     * @deprecated Provide your own internationalization string.
     * @breaking-change 17.0.0
     */
    this.endDateLabel = 'End date';
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
}
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) {
  return new (t || MatDatepickerIntl)();
};
MatDatepickerIntl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatDatepickerIntl,
  factory: MatDatepickerIntl.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
}
let calendarBodyId = 1;
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Event options that can be used to bind a passive, capturing event. */
const passiveCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Event options that can be used to bind a passive, non-capturing event. */
const passiveEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class MatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    /**
     * Used to focus the active cell after change detection has run.
     */
    this._focusActiveCellAfterViewChecked = false;
    /** The number of columns in the table. */
    this.numCols = 7;
    /** The cell number of the active cell in the table. */
    this.activeCell = 0;
    /** Whether a range is being selected. */
    this.isRange = false;
    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */
    this.cellAspectRatio = 1;
    /** Start of the preview range. */
    this.previewStart = null;
    /** End of the preview range. */
    this.previewEnd = null;
    /** Emits when a new value is selected. */
    this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the preview has changed as a result of a user action. */
    this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the date at the possible start of a drag event. */
    this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
    this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._didDragSinceMouseDown = false;
    /**
     * Event handler for when the user enters an element
     * inside the calendar body (e.g. by hovering in or focus).
     */
    this._enterHandler = event => {
      if (this._skipNextFocus && event.type === 'focus') {
        this._skipNextFocus = false;
        return;
      }
      // We only need to hit the zone when we're selecting a range.
      if (event.target && this.isRange) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({
            value: cell.enabled ? cell : null,
            event
          }));
        }
      }
    };
    this._touchmoveHandler = event => {
      if (!this.isRange) return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      // If the initial target of the touch is a date cell, prevent default so
      // that the move is not handled as a scroll.
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({
        value: cell?.enabled ? cell : null,
        event
      }));
    };
    /**
     * Event handler for when the user's pointer leaves an element
     * inside the calendar body (e.g. by hovering out or blurring).
     */
    this._leaveHandler = event => {
      // We only need to hit the zone when we're selecting a range.
      if (this.previewEnd !== null && this.isRange) {
        if (event.type !== 'blur') {
          this._didDragSinceMouseDown = true;
        }
        // Only reset the preview end value when leaving cells. This looks better, because
        // we have a gap between the cells and the rows and we don't want to remove the
        // range just for it to show up again when the user moves a few pixels to the side.
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({
            value: null,
            event
          }));
        }
      }
    };
    /**
     * Triggered on mousedown or touchstart on a date cell.
     * Respsonsible for starting a drag sequence.
     */
    this._mousedownHandler = event => {
      if (!this.isRange) return;
      this._didDragSinceMouseDown = false;
      // Begin a drag if a cell within the current range was targeted.
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.rawValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
    this._mouseupHandler = event => {
      if (!this.isRange) return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        // Mouseup happened outside of datepicker. Cancel drag.
        this._ngZone.run(() => {
          this.dragEnded.emit({
            value: null,
            event
          });
        });
        return;
      }
      if (cellElement.closest('.mat-calendar-body') !== this._elementRef.nativeElement) {
        // Mouseup happened inside a different month instance.
        // Allow it to handle the event.
        return;
      }
      this._ngZone.run(() => {
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({
          value: cell?.rawValue ?? null,
          event
        });
      });
    };
    /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
    this._touchendHandler = event => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({
          target
        });
      }
    };
    this._id = `mat-calendar-body-${calendarBodyId++}`;
    this._startDateLabelId = `${this._id}-start-date`;
    this._endDateLabelId = `${this._id}-end-date`;
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      // `touchmove` is active since we need to call `preventDefault`.
      element.addEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
      element.addEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
      element.addEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.addEventListener('mouseup', this._mouseupHandler);
        window.addEventListener('touchend', this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    // Ignore "clicks" that are actually canceled drags (eg the user dragged
    // off and then went back to this cell to undo).
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes['numCols'];
    const {
      rows,
      numCols
    } = this;
    if (changes['rows'] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
    element.removeEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
    element.removeEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
    if (this._platform.isBrowser) {
      window.removeEventListener('mouseup', this._mouseupHandler);
      window.removeEventListener('touchend', this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    // Account for the fact that the first row may not have as many cells.
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    // Note that we don't need to null check the start/end
    // here, because the `value` will always be defined.
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute('data-mat-row');
      const col = cell.getAttribute('data-mat-col');
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
}
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) {
  return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
MatCalendarBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCalendarBody,
  selectors: [["", "mat-calendar-body", ""]],
  hostAttrs: [1, "mat-calendar-body"],
  inputs: {
    label: "label",
    rows: "rows",
    todayValue: "todayValue",
    startValue: "startValue",
    endValue: "endValue",
    labelMinRequiredCells: "labelMinRequiredCells",
    numCols: "numCols",
    activeCell: "activeCell",
    isRange: "isRange",
    cellAspectRatio: "cellAspectRatio",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    previewStart: "previewStart",
    previewEnd: "previewEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName"
  },
  outputs: {
    selectedValueChange: "selectedValueChange",
    previewChange: "previewChange",
    activeDateChange: "activeDateChange",
    dragStarted: "dragStarted",
    dragEnded: "dragEnded"
  },
  exportAs: ["matCalendarBody"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  attrs: _c0,
  decls: 6,
  vars: 6,
  consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], [1, "mat-calendar-body-hidden-label", 3, "id"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click", "focus"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
  template: function MatCalendarBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._startDateLabelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.startDateAccessibleName, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._endDateLabelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.endDateAccessibleName, "\n");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-calendar-body]',
      host: {
        'class': 'mat-calendar-body'
      },
      exportAs: 'matCalendarBody',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    This cell is purely decorative, but we can't put `aria-hidden` or `role=\"presentation\"` on it,\n    because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the\n    table cells is maintained by setting the top and bottom padding as a percentage of the width\n    (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <!--\n    Each gridcell in the calendar contains a button, which signals to assistive technology that the\n    cell is interactable, as well as the selection state via `aria-pressed`. See #23476 for\n    background.\n  -->\n  <td\n    *ngFor=\"let item of row; let colIndex = index\"\n    role=\"gridcell\"\n    class=\"mat-calendar-body-cell-container\"\n    [style.width]=\"_cellWidth\"\n    [style.paddingTop]=\"_cellPadding\"\n    [style.paddingBottom]=\"_cellPadding\"\n    [attr.data-mat-row]=\"rowIndex\"\n    [attr.data-mat-col]=\"colIndex\"\n  >\n    <button\n        type=\"button\"\n        class=\"mat-calendar-body-cell\"\n        [ngClass]=\"item.cssClasses\"\n        [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n        [class.mat-calendar-body-disabled]=\"!item.enabled\"\n        [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n        [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n        [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n        [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n        [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n        [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n        [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n        [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n        [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n        [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n        [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n        [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n        [attr.aria-label]=\"item.ariaLabel\"\n        [attr.aria-disabled]=\"!item.enabled || null\"\n        [attr.aria-pressed]=\"_isSelected(item.compareValue)\"\n        [attr.aria-current]=\"todayValue === item.compareValue ? 'date' : null\"\n        [attr.aria-describedby]=\"_getDescribedby(item.compareValue)\"\n        (click)=\"_cellClicked(item, $event)\"\n        (focus)=\"_emitActiveDateChange(item, $event)\">\n        <span class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n          [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n          [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n          [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n          {{item.displayValue}}\n        </span>\n        <span class=\"mat-calendar-body-cell-preview\" aria-hidden=\"true\"></span>\n    </button>\n  </td>\n</tr>\n\n<label [id]=\"_startDateLabelId\" class=\"mat-calendar-body-hidden-label\">\n  {{startDateAccessibleName}}\n</label>\n<label [id]=\"_endDateLabelId\" class=\"mat-calendar-body-hidden-label\">\n  {{endDateAccessibleName}}\n</label>\n",
      styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}[dir=rtl] .mat-calendar-body-label{text-align:right}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    todayValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelMinRequiredCells: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numCols: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cellAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previewStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previewEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    previewChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
  return node?.nodeName === 'TD';
}
/**
 * Gets the date table cell element that is or contains the specified element.
 * Or returns null if element is not part of a date cell.
 */
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute('data-mat-row') != null ? cell : null;
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
/**
 * Extracts the element that actually corresponds to a touch event's location
 * (rather than the element that initiated the sequence of touch events).
 */
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}

/** A class representing a range of dates. */
class DateRange {
  constructor( /** The start date of the range. */
  start, /** The end date of the range. */
  end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
class MatDateSelectionModel {
  constructor( /** The current selection. */
  selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the selection has changed. */
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
}
MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
MatDateSelectionModel.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatDateSelectionModel,
  factory: MatDateSelectionModel.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }];
  }, null);
})();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
class MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
}
MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
  return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
};
MatSingleDateSelectionModel.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatSingleDateSelectionModel,
  factory: MatSingleDateSelectionModel.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }];
  }, null);
})();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
class MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    // Empty ranges are valid.
    if (start == null && end == null) {
      return true;
    }
    // Complete ranges are only valid if both dates are valid and the start is before the end.
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    // Partial ranges are valid if the start/end is valid.
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
}
MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
  return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
};
MatRangeDateSelectionModel.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatRangeDateSelectionModel,
  factory: MatRangeDateSelectionModel.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }];
  }, null);
})();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};

/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
class DefaultMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      // Can't drag from an incomplete range.
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
}
DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
  return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
};
DefaultMatCalendarRangeStrategy.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DefaultMatCalendarRangeStrategy,
  factory: DefaultMatCalendarRangeStrategy.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }];
  }, null);
})();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class MatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Origin of active drag, or null when dragging is not active. */
    this.activeDrag = null;
    /** Emits when a new date is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is selected. */
    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the user initiates a date range drag via mouse or touch. */
    this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the user completes or cancels a date range drag.
     * Emits null when the drag was canceled or the newly selected date range if completed.
     */
    this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes['activeDrag'] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          // Prevent unexpected default actions such as form submission.
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          event.preventDefault();
        }
        return;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE:
        // Abort the current range selection if the user presses escape mid-selection.
        if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event)) {
          this._clearPreview();
          // If a drag is in progress, cancel the drag without changing the
          // current selection.
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation(); // Prevents the overlay from closing.
        }

        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      // We can assume that this will be a range, because preview
      // events aren't fired for single date selections.
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
      // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
      // when navigating one month back using the keyboard which will cause this handler
      // to throw a "changed after checked" error when updating the preview state.
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag) return;
    if (event.value) {
      // Propagate drag effect
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
    // Rotate the labels for days of the week based on the configured first day of the week.
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      // We use the time since the Unix epoch to compare dates in this view, rather than the
      // cell values, because we need to support ranges that span across multiple months/years.
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
}
MatMonthView.ɵfac = function MatMonthView_Factory(t) {
  return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
};
MatMonthView.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatMonthView,
  selectors: [["mat-month-view"]],
  viewQuery: function MatMonthView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName",
    activeDrag: "activeDrag"
  },
  outputs: {
    selectedChange: "selectedChange",
    _userSelection: "_userSelection",
    dragStarted: "dragStarted",
    dragEnded: "dragEnded",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMonthView"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 7,
  vars: 15,
  consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName", "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown"], ["scope", "col"], [1, "cdk-visually-hidden"], ["aria-hidden", "true"]],
  template: function MatMonthView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 5, 2, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) {
        return ctx._dateSelected($event);
      })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_6_listener($event) {
        return ctx._updateActiveDate($event);
      })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) {
        return ctx._previewChanged($event);
      })("dragStarted", function MatMonthView_Template_tbody_dragStarted_6_listener($event) {
        return ctx.dragStarted.emit($event);
      })("dragEnded", function MatMonthView_Template_tbody_dragEnded_6_listener($event) {
        return ctx._dragEnded($event);
      })("keyup", function MatMonthView_Template_tbody_keyup_6_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._weekdays);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMonthView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-month-view',
      exportAs: 'matMonthView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\">\n        <span class=\"cdk-visually-hidden\">{{day.long}}</span>\n        <span aria-hidden=\"true\">{{day.narrow}}</span>\n      </th>\n    </tr>\n    <tr><th aria-hidden=\"true\" class=\"mat-calendar-table-header-divider\" colspan=\"7\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         [startDateAccessibleName]=\"startDateAccessibleName\"\n         [endDateAccessibleName]=\"endDateAccessibleName\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (dragStarted)=\"dragStarted.emit($event)\"\n         (dragEnded)=\"_dragEnded($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class MatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Emits when a new year is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the selected year. This doesn't imply a change on the selected date */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    // We want a range years such that we maximize the number of
    // enabled dates visible at once. This prevents issues where the minimum year
    // is the last item of a page OR the maximum year is the first item of a page.
    // The offset from the active year to the "slot" for the starting year is the
    // *actual* first rendered year in the multi-year view.
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map(year => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        // Note that we only prevent the default action here while the selection happens in
        // `keyup` below. We can't do the selection here, because it can cause the calendar to
        // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
        // because it's too late (see #23305).
        this._selectionKeyPressed = true;
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    // disable if the year is greater than maxDate lower than minDate
    if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    // enable if it reaches here and there's no filter defined
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    // If any date in the year is enabled count the year as enabled.
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
}
MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) {
  return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
};
MatMultiYearView.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatMultiYearView,
  selectors: [["mat-multi-year-view"]],
  viewQuery: function MatMultiYearView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matMultiYearView"],
  decls: 5,
  vars: 7,
  consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
  template: function MatMultiYearView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._yearSelected($event);
      })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
        return ctx._updateActiveDate($event);
      })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    }
  },
  dependencies: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMultiYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-multi-year-view',
      exportAs: 'matMultiYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class MatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Emits when a new month is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the selected month. This doesn't imply a change on the selected date */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        // Note that we only prevent the default action here while the selection happens in
        // `keyup` below. We can't do the selection here, because it can cause the calendar to
        // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
        // because it's too late (see #23305).
        this._selectionKeyPressed = true;
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames('short');
    // First row of months only contains 5 elements so we can fit the year label on the same row.
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    // If any date in the month is enabled count the month as enabled.
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
}
MatYearView.ɵfac = function MatYearView_Factory(t) {
  return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
};
MatYearView.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatYearView,
  selectors: [["mat-year-view"]],
  viewQuery: function MatYearView_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    }
  },
  inputs: {
    activeDate: "activeDate",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass"
  },
  outputs: {
    selectedChange: "selectedChange",
    monthSelected: "monthSelected",
    activeDateChange: "activeDateChange"
  },
  exportAs: ["matYearView"],
  decls: 5,
  vars: 9,
  consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
  template: function MatYearView_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
        return ctx._monthSelected($event);
      })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
        return ctx._updateActiveDate($event);
      })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
        return ctx._handleCalendarBodyKeyup($event);
      })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
        return ctx._handleCalendarBodyKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    }
  },
  dependencies: [MatCalendarBody],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-year-view',
      exportAs: 'matYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
let calendarHeaderId = 1;
/** Default header for MatCalendar */
class MatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = `mat-calendar-header-${calendarHeaderId++}`;
    this._periodButtonLabelId = `${this._id}-period-label`;
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    // Format a label for the window of years displayed in the multi-year calendar view. Use
    // `formatYearRangeLabel` because it is TTS friendly.
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      'month': this._intl.prevMonthLabel,
      'year': this._intl.prevYearLabel,
      'multi-year': this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      'month': this._intl.nextMonthLabel,
      'year': this._intl.nextYearLabel,
      'multi-year': this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    // Otherwise we are in 'multi-year' view.
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    // The offset from the active year to the "slot" for the starting year is the
    // *actual* first rendered year in the multi-year view, and the last year is
    // just yearsPerPage - 1 away.
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
}
MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) {
  return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
MatCalendarHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCalendarHeader,
  selectors: [["mat-calendar-header"]],
  exportAs: ["matCalendarHeader"],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 11,
  consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"], [1, "mat-calendar-hidden-label", 3, "id"]],
  template: function MatCalendarHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
        return ctx.currentPeriodClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_9_listener() {
        return ctx.previousClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_10_listener() {
        return ctx.nextClicked();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._periodButtonLabelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonDescription);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-calendar-header',
      exportAs: 'matCalendarHeader',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            [attr.aria-describedby]=\"_periodButtonLabelId\" aria-live=\"polite\">\n      <span aria-hidden=\"true\">{{periodButtonText}}</span>\n      <svg class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView !== 'month'\"\n           viewBox=\"0 0 10 5\" focusable=\"false\" aria-hidden=\"true\">\n           <polygon points=\"0,0 5,5 10,0\"/>\n      </svg>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n<label [id]=\"_periodButtonLabelId\" class=\"mat-calendar-hidden-label\">{{periodButtonDescription}}</label>\n"
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: MatCalendar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();
/** A calendar that is used as part of the datepicker. */
class MatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    this._moveFocusOnNextTick = false;
    /** Whether the calendar should be started in month or year view. */
    this.startView = 'month';
    /** Emits when the currently selected date changes. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the current view changes.
     */
    this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Emits when any date is selected. */
    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits a new date range value when the user completes a drag drop operation. */
    this._userDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Origin of active drag, or null when dragging is not active. */
    this._activeDrag = null;
    /**
     * Emits whenever there is a state change that the header may need to respond to.
     */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    // Assign to the private property since we don't want to move focus on init.
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    // Ignore date changes that are at a different time on the same day. This fixes issues where
    // the calendar re-renders when there is no meaningful change to [minDate] or [maxDate]
    // (#24435).
    const minDateChange = changes['minDate'] && !this._dateAdapter.sameDate(changes['minDate'].previousValue, changes['minDate'].currentValue) ? changes['minDate'] : undefined;
    const maxDateChange = changes['maxDate'] && !this._dateAdapter.sameDate(changes['maxDate'].previousValue, changes['maxDate'].currentValue) ? changes['maxDate'] : undefined;
    const change = minDateChange || maxDateChange || changes['dateFilter'];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
        // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag) return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    // The return type is explicitly written as a union to ensure that the Closure compiler does
    // not optimize calls to _init(). Without the explicit return type, TypeScript narrows it to
    // only the first component type. See https://github.com/angular/components/issues/22996.
    return this.monthView || this.yearView || this.multiYearView;
  }
}
MatCalendar.ɵfac = function MatCalendar_Factory(t) {
  return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
MatCalendar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCalendar,
  selectors: [["mat-calendar"]],
  viewQuery: function MatCalendar_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
    }
  },
  hostAttrs: [1, "mat-calendar"],
  inputs: {
    headerComponent: "headerComponent",
    startAt: "startAt",
    startView: "startView",
    selected: "selected",
    minDate: "minDate",
    maxDate: "maxDate",
    dateFilter: "dateFilter",
    dateClass: "dateClass",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd",
    startDateAccessibleName: "startDateAccessibleName",
    endDateAccessibleName: "endDateAccessibleName"
  },
  outputs: {
    selectedChange: "selectedChange",
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    viewChanged: "viewChanged",
    _userSelection: "_userSelection",
    _userDragDrop: "_userDragDrop"
  },
  exportAs: ["matCalendar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 5,
  consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag", "activeDateChange", "_userSelection", "dragStarted", "dragEnded", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag", "activeDateChange", "_userSelection", "dragStarted", "dragEnded"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]],
  template: function MatCalendar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 11, "mat-month-view", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentView);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "year");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multi-year");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, MatMonthView, MatYearView, MatMultiYearView],
  styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}.mat-calendar-hidden-label{display:none}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-calendar',
      host: {
        'class': 'mat-calendar'
      },
      exportAs: 'matCalendar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      [startDateAccessibleName]=\"startDateAccessibleName\"\n      [endDateAccessibleName]=\"endDateAccessibleName\"\n      (_userSelection)=\"_dateSelected($event)\"\n      (dragStarted)=\"_dragStarted($event)\"\n      (dragEnded)=\"_dragEnded($event)\"\n      [activeDrag]=\"_activeDrag\"\n      >\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
      styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}.mat-calendar-hidden-label{display:none}"]
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    viewChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userDragDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => enter-dropdown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => enter-dialog', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'none',
    opacity: 1
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('fadeInCalendar', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1
  })),
  // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
  // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
};

/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy');
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
const _MatDatepickerContentBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
});
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MatDatepickerContent extends _MatDatepickerContentBase {
  constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    /** Emits when an animation has finished. */
    this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether there is an in-progress animation. */
    this._isAnimating = false;
    /** Portal with projected action buttons. */
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    // If we're selecting a range and we have a selection strategy, always pass the value through
    // there. Otherwise don't assign null values to the model, unless we're selecting a range.
    // A null value when picking a range means that the user cancelled the selection (e.g. by
    // pressing escape), whereas when selecting a single value it means that the value didn't
    // change. This isn't very intuitive, but it's here for backwards-compatibility.
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    // Delegate closing the overlay to the actions.
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === 'start';
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    // If we have actions, clone the model so that we have the ability to cancel the selection,
    // otherwise update the global model directly. Note that we want to assign this as soon as
    // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
}
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) {
  return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl));
};
MatDatepickerContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDatepickerContent,
  selectors: [["mat-datepicker-content"]],
  viewQuery: function MatDatepickerContent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-content"],
  hostVars: 3,
  hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
        return ctx._handleAnimationEvent($event);
      })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
        return ctx._handleAnimationEvent($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matDatepickerContent"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 26,
  consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]],
  template: function MatDatepickerContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-calendar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
        return ctx.datepicker._selectYear($event);
      })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
        return ctx.datepicker._selectMonth($event);
      })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
        return ctx.datepicker._viewChanged($event);
      })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
        return ctx._handleUserSelection($event);
      })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
        return ctx._handleUserDragDrop($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
        return ctx._closeButtonFocused = true;
      })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
        return ctx._closeButtonFocused = false;
      })("click", function MatDatepickerContent_Template_button_click_3_listener() {
        return ctx.datepicker.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== undefined ? tmp_3_0 : undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkTrapFocus, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, MatCalendar],
  styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
  encapsulation: 2,
  data: {
    animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-content',
      host: {
        'class': 'mat-datepicker-content',
        '[@transformPanel]': '_animationState',
        '(@transformPanel.start)': '_handleAnimationEvent($event)',
        '(@transformPanel.done)': '_handleAnimationEvent($event)',
        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
      },
      animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
      exportAs: 'matDatepickerContent',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['color'],
      template: "<div\n  cdkTrapFocus\n  role=\"dialog\"\n  [attr.aria-modal]=\"true\"\n  [attr.aria-labelledby]=\"_dialogLabelId ?? undefined\"\n  class=\"mat-datepicker-content-container\"\n  [class.mat-datepicker-content-container-with-custom-header]=\"datepicker.calendarHeaderComponent\"\n  [class.mat-datepicker-content-container-with-actions]=\"_actionsPortal\">\n  <mat-calendar\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    [startDateAccessibleName]=\"startDateAccessibleName\"\n    [endDateAccessibleName]=\"endDateAccessibleName\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (viewChanged)=\"datepicker._viewChanged($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\"\n    (_userDragDrop)=\"_handleUserDragDrop($event)\"></mat-calendar>\n\n  <ng-template [cdkPortalOutlet]=\"_actionsPortal\"></ng-template>\n\n  <!-- Invisible close button for screen reader users. -->\n  <button\n    type=\"button\"\n    mat-raised-button\n    [color]=\"color || 'primary'\"\n    class=\"mat-datepicker-close-button\"\n    [class.cdk-visually-hidden]=\"!_closeButtonFocused\"\n    (focus)=\"_closeButtonFocused = true\"\n    (blur)=\"_closeButtonFocused = false\"\n    (click)=\"datepicker.close()\">{{ _closeButtonText }}</button>\n</div>\n",
      styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatDateSelectionModel
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
      }]
    }, {
      type: MatDatepickerIntl
    }];
  }, {
    _calendar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendar]
    }]
  });
})();
/** Base class for a datepicker. */
class MatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    // If an explicit startAt is set we start there, otherwise we start at whatever the currently
    // selected value is.
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
  }
  set color(value) {
    this._color = value;
  }
  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a dropdown and elements have more padding to allow for bigger touch targets.
   */
  get touchUi() {
    return this._touchUi;
  }
  set touchUi(value) {
    this._touchUi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.stateChanges.next(undefined);
    }
  }
  /**
   * Whether to restore focus to the previously-focused element when the calendar is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  get restoreFocus() {
    return this._restoreFocus;
  }
  set restoreFocus(value) {
    this._restoreFocus = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
  }
  /**
   * Classes to be passed to the date picker panel.
   * Supports string and string array values, similar to `ngClass`.
   */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceStringArray)(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value) ? this.open() : this.close();
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT);
    /** The view that the calendar should start in. */
    this.startView = 'month';
    this._touchUi = false;
    /** Preferred position of the datepicker in the X axis. */
    this.xPosition = 'start';
    /** Preferred position of the datepicker in the Y axis. */
    this.yPosition = 'below';
    this._restoreFocus = true;
    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the current view changes.
     */
    this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Emits when the datepicker has been opened. */
    this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the datepicker has been closed. */
    this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._opened = false;
    /** The id for the datepicker calendar. */
    this.id = `mat-datepicker-${datepickerUid++}`;
    /** The element that was focused before the datepicker was opened. */
    this._focusedElementBeforeOpen = null;
    /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
    this._backdropHarnessClass = `${this.id}-backdrop`;
    /** Emits when the datepicker's state changes. */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes['xPosition'] || changes['yPosition'];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(undefined);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('A MatDatepicker can only be associated with a single input.');
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('A MatDatepicker can only be associated with a single actions row.');
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    // Skip reopening if there's an in-progress animation to avoid overlapping
    // sequences which can cause "changed after checked" errors. See #25837.
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Attempted to open an MatDatepicker with no associated input.');
    }
    this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    // Skip reopening if there's an in-progress animation to avoid overlapping
    // sequences which can cause "changed after checked" errors. See #25837.
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this._restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function';
    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        // Since we restore focus after the exit animation, we have to check that
        // the user didn't move focus themselves inside the `close` handler.
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the datepicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the datepicker on focus, the user could be stuck with not being
      // able to close the calendar at all. We work around it by making the logic, that marks
      // the datepicker as closed, async as well.
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop', this._backdropHarnessClass],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`
    }));
    this._getCloseStream(overlayRef).subscribe(event => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    // The `preventDefault` call happens inside the calendar as well, however focus moves into
    // it inside a timeout which can give browsers a chance to fire off a keyboard event in-between
    // that can scroll the page (see #24969). Always block default actions of arrow keys for the
    // entire overlay so the page doesn't get scrolled by accident.
    overlayRef.keydownEvents().subscribe(event => {
      const keyCode = event.keyCode;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    // Update the position once the calendar has rendered. Only relevant in dropdown mode.
    if (!isDialog) {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === 'end' ? 'end' : 'start';
    const secondaryX = primaryX === 'start' ? 'end' : 'start';
    const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
    const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
      // Closing on alt + up is only valid when there's an input associated with the datepicker.
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event) || this.datepickerInput && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, modifier));
    })));
  }
}
MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) {
  return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel));
};
MatDatepickerBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerBase,
  inputs: {
    calendarHeaderComponent: "calendarHeaderComponent",
    startAt: "startAt",
    startView: "startView",
    color: "color",
    touchUi: "touchUi",
    disabled: "disabled",
    xPosition: "xPosition",
    yPosition: "yPosition",
    restoreFocus: "restoreFocus",
    dateClass: "dateClass",
    panelClass: "panelClass",
    opened: "opened"
  },
  outputs: {
    yearSelected: "yearSelected",
    monthSelected: "monthSelected",
    viewChanged: "viewChanged",
    openedStream: "opened",
    closedStream: "closed"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATEPICKER_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: MatDateSelectionModel
    }];
  }, {
    calendarHeaderComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    touchUi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    viewChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class MatDatepicker extends MatDatepickerBase {}
MatDatepicker.ɵfac = /* @__PURE__ */function () {
  let ɵMatDatepicker_BaseFactory;
  return function MatDatepicker_Factory(t) {
    return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(t || MatDatepicker);
  };
}();
MatDatepicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDatepicker,
  selectors: [["mat-datepicker"]],
  exportAs: ["matDatepicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
    provide: MatDatepickerBase,
    useExisting: MatDatepicker
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function MatDatepicker_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker',
      template: '',
      exportAs: 'matDatepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }]
    }]
  }], null, null);
})();

/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
  constructor( /** Reference to the datepicker input component that emitted the event. */
  target, /** Reference to the native input element associated with the datepicker input. */
  targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
}
/** Base class for datepicker inputs. */
class MatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(undefined);
    }
    // We need to null check the `blur` method, because it's undefined during SSR.
    // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
    // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
    // element has been inserted.
    if (newValue && this._isInitialized && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    /** Emits when a `change` event is fired on this `<input>`. */
    this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when an `input` event is fired on this `<input>`. */
    this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the internal state has changed */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._onTouched = () => {};
    this._validatorOnChange = () => {};
    this._cvaOnChange = () => {};
    this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** The form control validator for whether the input parses. */
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        'matDatepickerParse': {
          'text': this._elementRef.nativeElement.value
        }
      };
    };
    /** The form control validator for the date filter. */
    this._filterValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : {
        'matDatepickerFilter': true
      };
    };
    /** The form control validator for the min date. */
    this._minValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
        'matDatepickerMin': {
          'min': min,
          'actual': controlValue
        }
      };
    };
    /** The form control validator for the max date. */
    this._maxValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
        'matDatepickerMax': {
          'max': max,
          'actual': controlValue
        }
      };
    };
    /** Whether the last value set on the input was valid. */
    this._lastValueValid = false;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    // Update the displayed date when the locale changes.
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(undefined);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
    const isAltDownArrow = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    // We need to fire the CVA change event for all
    // nulls, otherwise the validators won't run.
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      // Call the CVA change handler for invalid values
      // since this is what marks the control as dirty.
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    // We may get some incoming values before the model was
    // assigned. Save the value so that we can assign it later.
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter = this._getDateFilter();
    return !filter || filter(value);
  }
}
MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) {
  return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
};
MatDatepickerInputBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerInputBase,
  inputs: {
    value: "value",
    disabled: "disabled"
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}

/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
class MatDatepickerInput extends MatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats, _formField) {
    super(elementRef, dateAdapter, dateFormats);
    this._formField = _formField;
    this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute('aria-labelledby');
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : undefined;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
}
MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) {
  return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
};
MatDatepickerInput.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerInput,
  selectors: [["input", "matDatepicker", ""]],
  hostAttrs: [1, "mat-datepicker-input"],
  hostVars: 6,
  hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatDatepickerInput_change_HostBindingHandler() {
        return ctx._onChange();
      })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
        return ctx._onBlur();
      })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    }
  },
  inputs: {
    matDatepicker: "matDatepicker",
    min: "min",
    max: "max",
    dateFilter: ["matDatepickerFilter", "dateFilter"]
  },
  exportAs: ["matDatepickerInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
    provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
    useExisting: MatDatepickerInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matDatepicker]',
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        'class': 'mat-datepicker-input',
        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(blur)': '_onBlur()',
        '(keydown)': '_onKeydown($event)'
      },
      exportAs: 'matDatepickerInput'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
      }]
    }];
  }, {
    matDatepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matDatepickerFilter']
    }]
  });
})();

/** Can be used to override the icon of a `matDatepickerToggle`. */
class MatDatepickerToggleIcon {}
MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
  return new (t || MatDatepickerToggleIcon)();
};
MatDatepickerToggleIcon.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerToggleIcon,
  selectors: [["", "matDatepickerToggleIcon", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerToggleIcon]'
    }]
  }], null, null);
})();
class MatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === undefined && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes['datepicker']) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    const datepickerToggled = this.datepicker ? (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    this._stateChanges.unsubscribe();
    this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
}
MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) {
  return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};
MatDatepickerToggle.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDatepickerToggle,
  selectors: [["mat-datepicker-toggle"]],
  contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    }
  },
  viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    }
  },
  hostAttrs: [1, "mat-datepicker-toggle"],
  hostVars: 8,
  hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
        return ctx._open($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    }
  },
  inputs: {
    datepicker: ["for", "datepicker"],
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    disabled: "disabled",
    disableRipple: "disableRipple"
  },
  exportAs: ["matDatepickerToggle"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 4,
  vars: 6,
  consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
  template: function MatDatepickerToggle_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
  styles: [".mat-datepicker-toggle{pointer-events:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-toggle',
      host: {
        'class': 'mat-datepicker-toggle',
        '[attr.tabindex]': 'null',
        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        '(click)': '_open($event)'
      },
      exportAs: 'matDatepickerToggle',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"ariaLabel || _intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\"\n    aria-hidden=\"true\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
      styles: [".mat-datepicker-toggle{pointer-events:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"]
    }]
  }], function () {
    return [{
      type: MatDatepickerIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    datepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['for']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _customIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['button']
    }]
  });
})();

// This file contains the `_computeAriaAccessibleName` function, which computes what the *expected*
// ARIA accessible name would be for a given element. Implements a subset of ARIA specification
// [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/).
//
// Specification accname-1.2 can be summarized by returning the result of the first method
// available.
//
//  1. `aria-labelledby` attribute
//     ```
//       <!-- example using aria-labelledby-->
//       <label id='label-id'>Start Date</label>
//       <input aria-labelledby='label-id'/>
//     ```
//  2. `aria-label` attribute (e.g. `<input aria-label="Departure"/>`)
//  3. Label with `for`/`id`
//     ```
//       <!-- example using for/id -->
//       <label for="current-node">Label</label>
//       <input id="current-node"/>
//     ```
//  4. `placeholder` attribute (e.g. `<input placeholder="06/03/1990"/>`)
//  5. `title` attribute (e.g. `<input title="Check-In"/>`)
//  6. text content
//     ```
//       <!-- example using text content -->
//       <label for="current-node"><span>Departure</span> Date</label>
//       <input id="current-node"/>
//     ```
/**
 * Computes the *expected* ARIA accessible name for argument element based on [accname-1.2
 * specification](https://www.w3.org/TR/accname-1.2/). Implements a subset of accname-1.2,
 * and should only be used for the Datepicker's specific use case.
 *
 * Intended use:
 * This is not a general use implementation. Only implements the parts of accname-1.2 that are
 * required for the Datepicker's specific use case. This function is not intended for any other
 * use.
 *
 * Limitations:
 *  - Only covers the needs of `matStartDate` and `matEndDate`. Does not support other use cases.
 *  - See NOTES's in implementation for specific details on what parts of the accname-1.2
 *  specification are not implemented.
 *
 *  @param element {HTMLInputElement} native &lt;input/&gt; element of `matStartDate` or
 *  `matEndDate` component. Corresponds to the 'Root Element' from accname-1.2
 *
 *  @return expected ARIA accessible name of argument &lt;input/&gt;
 */
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
/**
 * Determine if argument node is an Element based on `nodeType` property. This function is safe to
 * use with server-side rendering.
 */
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Determine if argument node is an HTMLInputElement based on `nodeName` property. This funciton is
 * safe to use with server-side rendering.
 */
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === 'INPUT';
}
/**
 * Determine if argument node is an HTMLTextAreaElement based on `nodeName` property. This
 * funciton is safe to use with server-side rendering.
 */
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === 'TEXTAREA';
}
/**
 * Calculate the expected ARIA accessible name for given DOM Node. Given DOM Node may be either the
 * "Root node" passed to `_computeAriaAccessibleName` or "Current node" as result of recursion.
 *
 * @return the accessible name of argument DOM Node
 *
 * @param currentNode node to determine accessible name of
 * @param isDirectlyReferenced true if `currentNode` is the root node to calculate ARIA accessible
 * name of. False if it is a result of recursion.
 */
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  // NOTE: this differs from accname-1.2 specification.
  //  - Does not implement Step 1. of accname-1.2: '''If `currentNode`'s role prohibits naming,
  //    return the empty string ("")'''.
  //  - Does not implement Step 2.A. of accname-1.2: '''if current node is hidden and not directly
  //    referenced by aria-labelledby... return the empty string.'''
  // acc-name-1.2 Step 2.B.: aria-labelledby
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.('aria-labelledby')?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map(idRef => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(' ');
    }
  }
  // acc-name-1.2 Step 2.C.: aria-label
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute('aria-label')?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  // acc-name-1.2 Step 2.D. attribute or element that defines a text alternative
  //
  // NOTE: this differs from accname-1.2 specification.
  // Only implements Step 2.D. for `<label>`,`<input/>`, and `<textarea/>` element. Does not
  // implement other elements that have an attribute or element that defines a text alternative.
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    // use label with a `for` attribute referencing the current node
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map(x => _computeAriaAccessibleNameInternal(x, false)).join(' ');
    }
    // use placeholder if available
    const placeholder = currentNode.getAttribute('placeholder')?.trim();
    if (placeholder) {
      return placeholder;
    }
    // use title if available
    const title = currentNode.getAttribute('title')?.trim();
    if (title) {
      return title;
    }
  }
  // NOTE: this differs from accname-1.2 specification.
  //  - does not implement acc-name-1.2 Step 2.E.: '''if the current node is a control embedded
  //     within the label... then include the embedded control as part of the text alternative in
  //     the following manner...'''. Step 2E applies to embedded controls such as textbox, listbox,
  //     range, etc.
  //  - does not implement acc-name-1.2 step 2.F.: check that '''role allows name from content''',
  //    which applies to `currentNode` and its children.
  //  - does not implement acc-name-1.2 Step 2.F.ii.: '''Check for CSS generated textual content'''
  //    (e.g. :before and :after).
  //  - does not implement acc-name-1.2 Step 2.I.: '''if the current node has a Tooltip attribute,
  //    return its value'''
  // Return text content with whitespace collapsed into a single space character. Accomplish
  // acc-name-1.2 steps 2F, 2G, and 2H.
  return (currentNode.textContent || '').replace(/\s+/g, ' ').trim();
}

/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
class MatDateRangeInputPartBase extends MatDatepickerInputBase {
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    super(_elementRef, dateAdapter, dateFormats);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, {
      optional: true
    });
  }
  ngOnInit() {
    // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
    // injecting its `NgControl` so that the error state is handled correctly. This introduces a
    // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
    // itself. Usually we can work around it for the CVA, but there's no API to do it for the
    // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
    // everything has been resolved.
    // tslint:disable-next-line:no-bitwise
    const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    }
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
}
MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
  return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
};
MatDateRangeInputPartBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDateRangeInputPartBase,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }];
  }, null);
})();
const _MatDateRangeInputBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinErrorState)(MatDateRangeInputPartBase);
/** Input for entering the start date in a `mat-date-range-input`. */
class MatStartDate extends _MatDateRangeInputBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the start date isn't after the end date. */
    this._startValidator = control => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
        'matStartDateInvalid': {
          'end': end,
          'actual': start
        }
      };
    };
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    // Any time the input value is reformatted we need to tell the parent.
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== 'rtl';
    // If the user hits RIGHT (LTR) when at the end of the input (and no
    // selection), move the cursor to the start of the end input.
    if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
}
MatStartDate.ɵfac = function MatStartDate_Factory(t) {
  return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
};
MatStartDate.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatStartDate,
  selectors: [["input", "matStartDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
  hostVars: 5,
  hostBindings: function MatStartDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatStartDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatStartDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  inputs: {
    errorStateMatcher: "errorStateMatcher"
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
    useExisting: MatStartDate,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
    useExisting: MatStartDate,
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStartDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matStartDate]',
      host: {
        'class': 'mat-start-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ['dateChange', 'dateInput'],
      inputs: ['errorStateMatcher']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }];
  }, null);
})();
/** Input for entering the end date in a `mat-date-range-input`. */
class MatEndDate extends _MatDateRangeInputBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the end date isn't before the start date. */
    this._endValidator = control => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
        'matEndDateInvalid': {
          'start': start,
          'actual': end
        }
      };
    };
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range, this);
    }
  }
  _onKeydown(event) {
    const startInput = this._rangeInput._startInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== 'rtl';
    // If the user is pressing backspace on an empty end input, move focus back to the start.
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.BACKSPACE && !element.value) {
      startInput.focus();
    }
    // If the user hits LEFT (LTR) when at the start of the input (and no
    // selection), move the cursor to the end of the start input.
    else if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      const endPosition = startInput._elementRef.nativeElement.value.length;
      startInput._elementRef.nativeElement.setSelectionRange(endPosition, endPosition);
      startInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
}
MatEndDate.ɵfac = function MatEndDate_Factory(t) {
  return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
};
MatEndDate.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatEndDate,
  selectors: [["input", "matEndDate", ""]],
  hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
  hostVars: 5,
  hostBindings: function MatEndDate_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
        return ctx._onInput($event.target.value);
      })("change", function MatEndDate_change_HostBindingHandler() {
        return ctx._onChange();
      })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
        return ctx._onKeydown($event);
      })("blur", function MatEndDate_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    }
  },
  inputs: {
    errorStateMatcher: "errorStateMatcher"
  },
  outputs: {
    dateChange: "dateChange",
    dateInput: "dateInput"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
    useExisting: MatEndDate,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
    useExisting: MatEndDate,
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatEndDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matEndDate]',
      host: {
        'class': 'mat-end-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ['dateChange', 'dateInput'],
      inputs: ['errorStateMatcher']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_RANGE_INPUT_PARENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
      }]
    }];
  }, null);
})();
let nextUniqueId = 0;
class MatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || '';
    const end = this._endInput?._getPlaceholder() || '';
    return start || end ? `${start} ${this.separator} ${end}` : '';
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceBooleanProperty)(value);
    if (newValue !== this._groupDisabled) {
      this._groupDisabled = newValue;
      this.stateChanges.next(undefined);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Unique ID for the group. */
    this.id = `mat-date-range-input-${nextUniqueId++}`;
    /** Whether the control is focused. */
    this.focused = false;
    /** Name of the form control. */
    this.controlType = 'mat-date-range-input';
    this._groupDisabled = false;
    /** Value for the `aria-describedby` attribute of the inputs. */
    this._ariaDescribedBy = null;
    /** Separator text to be shown between the inputs. */
    this.separator = '–';
    /** Start of the comparison range that should be shown in the calendar. */
    this.comparisonStart = null;
    /** End of the comparison range that should be shown in the calendar. */
    this.comparisonEnd = null;
    /** Emits when the input's state has changed. */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    // The datepicker module can be used both with MDC and non-MDC form fields. We have
    // to conditionally add the MDC input class so that the range picker looks correctly.
    if (_formField?._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
      _elementRef.nativeElement.classList.add('mat-mdc-input-element', 'mat-mdc-form-field-input-control', 'mdc-text-field__input');
    }
    // TODO(crisbeto): remove `as any` after #18206 lands.
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._startInput) {
        throw Error('mat-date-range-input must contain a matStartDate input');
      }
      if (!this._endInput) {
        throw Error('mat-date-range-input must contain a matEndDate input');
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    // We don't need to unsubscribe from this, because we
    // know that the input streams will be completed on destroy.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(undefined);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(undefined);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : undefined;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === 'start' ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : '';
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(undefined);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
  }
}
MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) {
  return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
};
MatDateRangeInput.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDateRangeInput,
  selectors: [["mat-date-range-input"]],
  contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
    }
  },
  hostAttrs: ["role", "group", 1, "mat-date-range-input"],
  hostVars: 8,
  hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    }
  },
  inputs: {
    rangePicker: "rangePicker",
    required: "required",
    dateFilter: "dateFilter",
    min: "min",
    max: "max",
    disabled: "disabled",
    separator: "separator",
    comparisonStart: "comparisonStart",
    comparisonEnd: "comparisonEnd"
  },
  exportAs: ["matDateRangeInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
    useExisting: MatDateRangeInput
  }, {
    provide: MAT_DATE_RANGE_INPUT_PARENT,
    useExisting: MatDateRangeInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c6,
  decls: 11,
  vars: 5,
  consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
  template: function MatDateRangeInput_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
        return ctx._updateFocus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("start"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("end"));
    }
  },
  dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus],
  styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-date-range-input',
      exportAs: 'matDateRangeInput',
      host: {
        'class': 'mat-date-range-input',
        '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
        '[class.mat-date-range-input-required]': 'required',
        '[attr.id]': 'id',
        'role': 'group',
        '[attr.aria-labelledby]': '_getAriaLabelledby()',
        '[attr.aria-describedby]': '_ariaDescribedBy',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
        useExisting: MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: MatDateRangeInput
      }],
      template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"_updateFocus($event)\">\n  <div class=\"mat-date-range-input-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue('start')}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-wrapper mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue('end')}}</span>\n  </div>\n</div>\n\n",
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
      }]
    }];
  }, {
    rangePicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    separator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _startInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatStartDate]
    }],
    _endInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatEndDate]
    }]
  });
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
class MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
}
MatDateRangePicker.ɵfac = /* @__PURE__ */function () {
  let ɵMatDateRangePicker_BaseFactory;
  return function MatDateRangePicker_Factory(t) {
    return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(t || MatDateRangePicker);
  };
}();
MatDateRangePicker.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDateRangePicker,
  selectors: [["mat-date-range-picker"]],
  exportAs: ["matDateRangePicker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
    provide: MatDatepickerBase,
    useExisting: MatDateRangePicker
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function MatDateRangePicker_Template(rf, ctx) {},
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangePicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-date-range-picker',
      template: '',
      exportAs: 'matDateRangePicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }]
    }]
  }], null, null);
})();

/** Button that will close the datepicker and assign the current selection to the data model. */
class MatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
}
MatDatepickerApply.ɵfac = function MatDatepickerApply_Factory(t) {
  return new (t || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
};
MatDatepickerApply.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerApply,
  selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
  hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() {
        return ctx._applySelection();
      });
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerApply, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerApply], [matDateRangePickerApply]',
      host: {
        '(click)': '_applySelection()'
      }
    }]
  }], function () {
    return [{
      type: MatDatepickerBase
    }];
  }, null);
})();
/** Button that will close the datepicker and discard the current selection. */
class MatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
}
MatDatepickerCancel.ɵfac = function MatDatepickerCancel_Factory(t) {
  return new (t || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
};
MatDatepickerCancel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatDatepickerCancel,
  selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
  hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() {
        return ctx._datepicker.close();
      });
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerCancel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerCancel], [matDateRangePickerCancel]',
      host: {
        '(click)': '_datepicker.close()'
      }
    }]
  }], function () {
    return [{
      type: MatDatepickerBase
    }];
  }, null);
})();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
class MatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
  }
  ngAfterViewInit() {
    this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    // Needs to be null checked since we initialize it in `ngAfterViewInit`.
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
}
MatDatepickerActions.ɵfac = function MatDatepickerActions_Factory(t) {
  return new (t || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
MatDatepickerActions.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDatepickerActions,
  selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
  viewQuery: function MatDatepickerActions_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
    }
  },
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [[1, "mat-datepicker-actions"]],
  template: function MatDatepickerActions_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    }
  },
  styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-actions, mat-date-range-picker-actions',
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], function () {
    return [{
      type: MatDatepickerBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    _template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();
class MatDatepickerModule {}
MatDatepickerModule.ɵfac = function MatDatepickerModule_Factory(t) {
  return new (t || MatDatepickerModule)();
};
MatDatepickerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatDatepickerModule
});
MatDatepickerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8173:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/progress-bar.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_PROGRESS_BAR_DEFAULT_OPTIONS: () => (/* binding */ MAT_PROGRESS_BAR_DEFAULT_OPTIONS),
/* harmony export */   MAT_PROGRESS_BAR_LOCATION: () => (/* binding */ MAT_PROGRESS_BAR_LOCATION),
/* harmony export */   MAT_PROGRESS_BAR_LOCATION_FACTORY: () => (/* binding */ MAT_PROGRESS_BAR_LOCATION_FACTORY),
/* harmony export */   MatProgressBar: () => (/* binding */ MatProgressBar),
/* harmony export */   MatProgressBarModule: () => (/* binding */ MatProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);







/** Injection token to be used to override the default options for `mat-progress-bar`. */
const MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PROGRESS_BAR_DEFAULT_OPTIONS');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-progress-bar-location', {
  providedIn: 'root',
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
/** @docs-private */
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ''
  };
}
// Boilerplate for applying mixins to MatProgressBar.
/** @docs-private */
const _MatProgressBarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}, 'primary');
class MatProgressBar extends _MatProgressBarBase {
  constructor(elementRef, _ngZone, _changeDetectorRef, _animationMode, defaults) {
    super(elementRef);
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** Flag that indicates whether NoopAnimations mode is set to true. */
    this._isNoopAnimation = false;
    this._value = 0;
    this._bufferValue = 0;
    /**
     * Event emitted when animation of the primary progress bar completes. This event will not
     * be emitted when animations are disabled, nor will it be emitted for modes with continuous
     * animations (indeterminate and query).
     */
    this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._mode = 'determinate';
    /** Event handler for `transitionend` events. */
    this._transitionendHandler = event => {
      if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains('mdc-linear-progress__primary-bar')) {
        return;
      }
      if (this.mode === 'determinate' || this.mode === 'buffer') {
        this._ngZone.run(() => this.animationEnd.next({
          value: this.value
        }));
      }
    };
    this._isNoopAnimation = _animationMode === 'NoopAnimations';
    if (defaults) {
      if (defaults.color) {
        this.color = this.defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(v));
    this._changeDetectorRef.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(v));
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    // Note that we don't technically need a getter and a setter here,
    // but we use it to match the behavior of the existing mat-progress-bar.
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  ngAfterViewInit() {
    // Run outside angular so change detection didn't get triggered on every transition end
    // instead only on the animation that we care about (primary value bar's transitionend)
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener('transitionend', this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener('transitionend', this._transitionendHandler);
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === 'buffer' ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === 'indeterminate' || this.mode === 'query';
  }
}
MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
  return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
};
MatProgressBar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatProgressBar,
  selectors: [["mat-progress-bar"]],
  hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
  hostVars: 8,
  hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
    }
  },
  inputs: {
    color: "color",
    value: "value",
    bufferValue: "bufferValue",
    mode: "mode"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["matProgressBar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 4,
  consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
  template: function MatProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-basis", ctx._getBufferBarFlexBasis());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx._getPrimaryBarTransform());
    }
  },
  styles: ["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill=''/%3E%3C/svg%3E\")}}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-height:4px;--mdc-linear-progress-track-height:4px;--mdc-linear-progress-track-shape:0}.mat-mdc-progress-bar{display:block;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-progress-bar',
      exportAs: 'matProgressBar',
      host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        'tabindex': '-1',
        '[attr.aria-valuenow]': '_isIndeterminate() ? null : value',
        '[attr.mode]': 'mode',
        'class': 'mat-mdc-progress-bar mdc-linear-progress',
        '[class._mat-animation-noopable]': '_isNoopAnimation',
        '[class.mdc-linear-progress--animation-ready]': '!_isNoopAnimation',
        '[class.mdc-linear-progress--indeterminate]': '_isIndeterminate()'
      },
      inputs: ['color'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class=\"mdc-linear-progress__buffer\" aria-hidden=\"true\">\n  <div\n    class=\"mdc-linear-progress__buffer-bar\"\n    [style.flex-basis]=\"_getBufferBarFlexBasis()\"></div>\n  <div class=\"mdc-linear-progress__buffer-dots\"></div>\n</div>\n<div\n  class=\"mdc-linear-progress__bar mdc-linear-progress__primary-bar\"\n  aria-hidden=\"true\"\n  [style.transform]=\"_getPrimaryBarTransform()\">\n  <span class=\"mdc-linear-progress__bar-inner\"></span>\n</div>\n<div class=\"mdc-linear-progress__bar mdc-linear-progress__secondary-bar\" aria-hidden=\"true\">\n  <span class=\"mdc-linear-progress__bar-inner\"></span>\n</div>\n",
      styles: ["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill=''/%3E%3C/svg%3E\")}}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-height:4px;--mdc-linear-progress-track-height:4px;--mdc-linear-progress-track-shape:0}.mat-mdc-progress-bar{display:block;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
class MatProgressBarModule {}
MatProgressBarModule.ɵfac = function MatProgressBarModule_Factory(t) {
  return new (t || MatProgressBarModule)();
};
MatProgressBarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatProgressBarModule
});
MatProgressBarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatProgressBar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_public_home_home_module_ts.js.map