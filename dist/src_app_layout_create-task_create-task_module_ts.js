(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_create-task_create-task_module_ts"],{

/***/ 6688:
/*!******************************************************************!*\
  !*** ./src/app/layout/create-task/create-task-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskRoutingModule": () => (/* binding */ CreateTaskRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _create_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task.component */ 2035);




const routes = [{
  path: '',
  component: _create_task_component__WEBPACK_IMPORTED_MODULE_0__.CreateTaskComponent
}];
let CreateTaskRoutingModule = class CreateTaskRoutingModule {};
CreateTaskRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CreateTaskRoutingModule);


/***/ }),

/***/ 2035:
/*!*************************************************************!*\
  !*** ./src/app/layout/create-task/create-task.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskComponent": () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_task_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task.component.html?ngResource */ 3214);
/* harmony import */ var _create_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task.component.scss?ngResource */ 7791);
/* harmony import */ var _create_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_create_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 3382);
/* harmony import */ var angular_toasts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-toasts */ 7240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
var _class;








let CreateTaskComponent = (_class = class CreateTaskComponent {
  constructor(fb, apiService, toast, activatedRoute) {
    this.fb = fb;
    this.apiService = apiService;
    this.toast = toast;
    this.activatedRoute = activatedRoute;
  }
  ngOnInit() {
    this.taskForm = this.fb.group({
      description: '',
      date: ''
    });
    this.taskId = this.activatedRoute.snapshot.params['id'];
    if (this.taskId) {
      this.apiService.getTask(this.taskId).subscribe(task => {
        this.task = task;
        this.taskForm.patchValue({
          description: task['description'],
          date: `${task['date']}T${task['time']}`
        });
      });
    }
    this.title = this.taskId ? 'Update Task' : 'Create Task';
  }
  submitTask() {
    if (this.taskId) {
      this.updateTask();
      return;
    }
    const payload = {
      description: this.taskForm.get('description').value,
      date: this.taskForm.get('date').value.split('T')[0],
      time: this.taskForm.get('date').value.split('T')[1]
    };
    this.apiService.createTask(payload).subscribe(el => {
      this.toast.success('Success', 'New Task Created');
      this.taskForm.reset();
    }, () => {
      this.toast.error('Error', 'Task cannot be created right now');
    });
  }
  updateTask() {
    const payload = {
      description: this.taskForm.get('description').value,
      date: this.taskForm.get('date').value.split('T')[0],
      time: this.taskForm.get('date').value.split('T')[1],
      completed: this.task.completed
    };
    this.apiService.updateTask(this.taskId, payload).subscribe(el => {
      this.toast.success('Success', 'Task updated successfully');
    }, () => {
      this.toast.error('Error', 'Task cannot be updated n right now');
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
}, {
  type: angular_toasts__WEBPACK_IMPORTED_MODULE_4__.AngularToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}], _class);
CreateTaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-create-task',
  template: _create_task_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_create_task_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CreateTaskComponent);


/***/ }),

/***/ 4342:
/*!**********************************************************!*\
  !*** ./src/app/layout/create-task/create-task.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskModule": () => (/* binding */ CreateTaskModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _create_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task.component */ 2035);
/* harmony import */ var _create_task_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task-routing.module */ 6688);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 1679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








let CreateTaskModule = class CreateTaskModule {};
CreateTaskModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_create_task_component__WEBPACK_IMPORTED_MODULE_0__.CreateTaskComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _create_task_routing_module__WEBPACK_IMPORTED_MODULE_1__.CreateTaskRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule]
})], CreateTaskModule);


/***/ }),

/***/ 7791:
/*!**************************************************************************!*\
  !*** ./src/app/layout/create-task/create-task.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".submit-button {\n  margin-right: 10px;\n}\n\n.date-time-picker {\n  margin-bottom: 10px;\n}\n\n.date-time-input-label {\n  margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/layout/create-task/create-task.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AACA;EACI,kBAAA;AAEJ","sourcesContent":[".submit-button {\r\n    margin-right: 10px;\r\n}\r\n\r\n.date-time-picker{\r\n    margin-bottom: 10px;\r\n}\r\n.date-time-input-label{\r\n    margin-right: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3214:
/*!**************************************************************************!*\
  !*** ./src/app/layout/create-task/create-task.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-page-header [heading]=\"title\" [showBreadcrums]=\"false\" [icon]=\"'fa-edit'\"></app-page-header>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <form [formGroup]=\"taskForm\" role=\"form\">\r\n            <fieldset class=\"form-group\">\r\n                <label>Task Description</label>\r\n                <textarea formControlName=\"description\" class=\"form-control\"></textarea>\r\n                <p class=\"help-block\">Description About the task</p>\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n                <label class=\"date-time-input-label\">Date And Time: </label>\r\n                <input class=\"date-time-picker\" type=\"datetime-local\" formControlName=\"date\" />\r\n            </fieldset>\r\n\r\n            <button (click)=\"submitTask()\" class=\"btn btn-primary submit-button\"\r\n                [disabled]=\"!taskForm.get('description').value || !taskForm.get('date').value\" type=\"submit\">Submit</button>\r\n            <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"taskForm.reset()\">Reset Button</button>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_create-task_create-task_module_ts.js.map