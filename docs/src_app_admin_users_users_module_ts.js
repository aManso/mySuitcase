"use strict";
(self["webpackChunkmy_suitcase"] = self["webpackChunkmy_suitcase"] || []).push([["src_app_admin_users_users_module_ts"],{

/***/ 6962:
/*!***************************************************!*\
  !*** ./src/app/admin/users/admin-user.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminUserService: () => (/* binding */ AdminUserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);







class AdminUserService {
  constructor(_http, _router) {
    this._http = _http;
    this._router = _router;
    // TODO replace for config const
    this.URL_API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users/';
  }
  get activeUser() {
    return this._activeUser;
  }
  set activeUser(value) {
    this._activeUser = value;
  }
  getUser(id) {
    return this._http.get(this.URL_API + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (!res) {
        throw new Error('User not found');
      }
      return res;
    }));
  }
  getUsers() {
    return this._http.get(this.URL_API).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (!res) {
        throw new Error('there were not found users!');
      }
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.log(err.message);
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
        if (err.status === 401 || err.status === 500) {
          console.log('unauthorized request');
          this._router.navigate(['/login']);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    }));
  }
  addUser(user) {
    return this._http.post(this.URL_API, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (!res) {
        throw new Error('User couldnt get added');
      }
      return res;
    }));
  }
  updateUser(user) {
    return this._http.put(this.URL_API + user._id, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (!res) {
        throw new Error('User couldnt get updated');
      }
      return res;
    }));
  }
  deleteUser(id) {
    return this._http.delete(this.URL_API + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (!res) {
        throw new Error('User couldnt get deleted');
      }
      return res;
    }));
  }
}
AdminUserService.ɵfac = function AdminUserService_Factory(t) {
  return new (t || AdminUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
AdminUserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AdminUserService,
  factory: AdminUserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7538:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/users/containers/user-detail/user-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDetailComponent: () => (/* binding */ UserDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class UserDetailComponent {
  constructor() {}
  ngOnInit() {}
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) {
  return new (t || UserDetailComponent)();
};
UserDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UserDetailComponent,
  selectors: [["app-user-detail"]],
  decls: 2,
  vars: 0,
  template: function UserDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Detalles de un usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8217:
/*!***************************************************************************!*\
  !*** ./src/app/admin/users/containers/users-list/users-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersListComponent: () => (/* binding */ UsersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _admin_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin-user.service */ 6962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class UsersListComponent {
  constructor(_userService, _changeDetector, _fb) {
    this._userService = _userService;
    this._changeDetector = _changeDetector;
    this._fb = _fb;
  }
  ngOnInit() {
    this.usersForm = this._fb.group({
      userId: null
    });
  }
  // **************** Just for testing *************
  getUsers() {
    this._userService.getUsers().subscribe(userList => {
      this.result = JSON.stringify(userList);
      this._changeDetector.detectChanges();
    }, error => {
      // TODO replace for a info message
      console.error(error);
    });
  }
  getUser() {
    this._userService.getUser(this.usersForm.controls.userId.value).subscribe(user => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    }, error => {
      // TODO replace for a info message
      console.error(error);
    });
  }
  addUser() {
    this._userService.addUser({
      address: {
        country: undefined,
        city: undefined,
        street: undefined,
        number: undefined,
        postCode: undefined,
        coordinates: undefined
      },
      admin: false,
      age: 20,
      email: 'paco@paco.com',
      joiningDate: new Date(),
      name: 'paco',
      password: '1234'
    }).subscribe(user => {
      this.result = user;
      this._changeDetector.detectChanges();
    }, error => {
      // TODO replace for a info message
      console.error(error);
    });
  }
  updateUser() {
    this._userService.getUser(this.usersForm.controls.userId.value).subscribe(user => {
      this.result = JSON.stringify(user);
      this._changeDetector.detectChanges();
    }, error => {
      // TODO replace for a info message
      console.error(error);
    });
  }
  deleteUser() {
    this._userService.deleteUser(this.usersForm.controls.userId.value).subscribe(response => {
      this.result = JSON.stringify(response);
      this.getUsers();
    }, error => {
      // TODO replace for a info message
      console.error(error);
    });
  }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) {
  return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_user_service__WEBPACK_IMPORTED_MODULE_0__.AdminUserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
};
UsersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UsersListComponent,
  selectors: [["app-users-list"]],
  decls: 14,
  vars: 2,
  consts: [[3, "formGroup"], ["type", "text", "id", "userId", "formControlName", "userId", "name", "userId", 1, "form-control"], [3, "click"]],
  template: function UsersListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_2_listener() {
        return ctx.getUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Get users");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_4_listener() {
        return ctx.getUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Get user");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_6_listener() {
        return ctx.addUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "add user");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_8_listener() {
        return ctx.updateUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "update user");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_10_listener() {
        return ctx.deleteUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "delete user");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.usersForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.result, " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  encapsulation: 2
});

/***/ }),

/***/ 6674:
/*!*****************************************************!*\
  !*** ./src/app/admin/users/users-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersRoutingModule: () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _containers_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/users-list/users-list.component */ 8217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




// Root routes of this particular module: USERS.
const routes = [{
  path: '',
  component: _containers_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_0__.UsersListComponent
}];
class UsersRoutingModule {}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) {
  return new (t || UsersRoutingModule)();
};
UsersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: UsersRoutingModule
});
UsersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6563:
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shared/shared.module */ 1782);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-routing.module */ 6674);
/* harmony import */ var _containers_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/users-list/users-list.component */ 8217);
/* harmony import */ var _containers_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/user-detail/user-detail.component */ 7538);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class UsersModule {
  constructor() {}
}
UsersModule.ɵfac = function UsersModule_Factory(t) {
  return new (t || UsersModule)();
};
UsersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: UsersModule
});
UsersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [
  // Angular
  _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_1__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UsersModule, {
    declarations: [_containers_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__.UsersListComponent, _containers_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent],
    imports: [
    // Angular
    _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_1__.UsersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_admin_users_users_module_ts.js.map