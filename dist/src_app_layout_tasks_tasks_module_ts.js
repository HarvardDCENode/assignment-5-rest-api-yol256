(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_tasks_tasks_module_ts"],{

/***/ 8267:
/*!******************************************************!*\
  !*** ./src/app/layout/tasks/tasks-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksRoutingModule": () => (/* binding */ TasksRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component */ 1109);




const routes = [{
  path: '',
  component: _tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent
}];
let TasksRoutingModule = class TasksRoutingModule {};
TasksRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TasksRoutingModule);


/***/ }),

/***/ 1109:
/*!*************************************************!*\
  !*** ./src/app/layout/tasks/tasks.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tasks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component.html?ngResource */ 9205);
/* harmony import */ var _tasks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.component.scss?ngResource */ 6734);
/* harmony import */ var _tasks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tasks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 3382);
/* harmony import */ var angular_toasts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-toasts */ 7240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
var _class;







let TasksComponent = (_class = class TasksComponent {
  constructor(apiService, toast, route) {
    this.apiService = apiService;
    this.toast = toast;
    this.route = route;
  }
  ngOnInit() {
    this.apiService.getTasks().subscribe(response => {
      this.tasks = response['tasks'];
    });
  }
  markComplete(id, payload) {
    payload.completed = true;
    this.apiService.updateTask(id, payload).subscribe(() => {
      this.toast.success('Success', 'Task marked as completed');
    }, () => {
      this.toast.error('Error', 'Task cannot be marked as complete right now');
    });
  }
  updateTask(id) {
    this.route.navigateByUrl(`/update-task/${id}`);
  }
  deleteTask(id, index) {
    this.apiService.deleteTask(id).subscribe(() => {
      this.tasks.splice(index, 1);
      this.toast.success('Success', 'Task deleted successfully.');
    });
  }
}, _class.ctorParameters = () => [{
  type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
}, {
  type: angular_toasts__WEBPACK_IMPORTED_MODULE_3__.AngularToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}], _class);
TasksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tasks',
  template: _tasks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tasks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TasksComponent);


/***/ }),

/***/ 4352:
/*!**********************************************!*\
  !*** ./src/app/layout/tasks/tasks.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksModule": () => (/* binding */ TasksModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component */ 1109);
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-routing.module */ 8267);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 1679);






let TasksModule = class TasksModule {};
TasksModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__.TasksRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule]
})], TasksModule);


/***/ }),

/***/ 6734:
/*!**************************************************************!*\
  !*** ./src/app/layout/tasks/tasks.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mark-complete {\n  margin-right: 10px;\n}\n\n.delete-button {\n  margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/layout/tasks/tasks.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAEA;EACI,iBAAA;AACJ","sourcesContent":[".mark-complete{\r\n    margin-right: 10px;\r\n}\r\n\r\n.delete-button{\r\n    margin-left: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9205:
/*!**************************************************************!*\
  !*** ./src/app/layout/tasks/tasks.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-page-header [heading]=\"'Tasks'\" [showBreadcrums]=\"false\" [icon]=\"'fa-table'\"></app-page-header>\n\n<div class=\"card mb-3\">\n    <div class=\"card-header\">\n        All Tasks\n    </div>\n    <div class=\"card-body table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Description</th>\n                    <th>Status</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let task of tasks; let i =index\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td>{{task.description}}</td>\n                    <td>\n                        <span *ngIf=\"task.completed\" style=\"color:green\">Complete</span>\n                        <span *ngIf=\"!task.completed\" style=\"color:red\">Incomplete</span>\n                    </td>\n                    <td>{{task.date}}</td>\n                    <td>{{task.time}}</td>\n                    <td> <button class=\"btn btn-success mark-complete\" (click)=\"markComplete(task._id,task)\"\n                            *ngIf=\"!task.completed\" type=\"submit\">Mark Complete</button> <button\n                            (click)=\"updateTask(task._id)\" class=\"btn btn-primary\">Update\n                            Task</button> <button (click)=\"deleteTask(task._id,i)\"\n                            class=\"btn btn-danger delete-button\">Delete\n                            Task</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_tasks_tasks_module_ts.js.map