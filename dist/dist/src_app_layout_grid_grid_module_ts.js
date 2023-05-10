(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_grid_grid_module_ts"],{

/***/ 60980:
/*!****************************************************!*\
  !*** ./src/app/layout/grid/grid-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridRoutingModule": () => (/* binding */ GridRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.component */ 41501);




const routes = [{
  path: '',
  component: _grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent
}];
let GridRoutingModule = class GridRoutingModule {};
GridRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], GridRoutingModule);


/***/ }),

/***/ 41501:
/*!***********************************************!*\
  !*** ./src/app/layout/grid/grid.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.component.html?ngResource */ 50918);
/* harmony import */ var _grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.component.scss?ngResource */ 9247);
/* harmony import */ var _grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
var _class;





let GridComponent = (_class = class GridComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
GridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-grid',
  template: _grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
  styles: [(_grid_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GridComponent);


/***/ }),

/***/ 36605:
/*!********************************************!*\
  !*** ./src/app/layout/grid/grid.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridModule": () => (/* binding */ GridModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 51679);
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-routing.module */ 60980);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ 41501);






let GridModule = class GridModule {};
GridModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _grid_routing_module__WEBPACK_IMPORTED_MODULE_1__.GridRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
  declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent]
})], GridModule);


/***/ }),

/***/ 9247:
/*!************************************************************!*\
  !*** ./src/app/layout/grid/grid.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50918:
/*!************************************************************!*\
  !*** ./src/app/layout/grid/grid.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Bootstrap Grid'\" [icon]=\"'fa-wrench'\"></app-page-header>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-12\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-6\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-6\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-4\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-4\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-4\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-2\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-1 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-1\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-8 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-8\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-4 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-4\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-6\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 text-xs-center\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-body\">\r\n                    .col-xl-3\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_grid_grid_module_ts.js.map