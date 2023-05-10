(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_tables_tables_module_ts"],{

/***/ 8481:
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesRoutingModule": () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component */ 4629);




const routes = [{
  path: '',
  component: _tables_component__WEBPACK_IMPORTED_MODULE_0__.TablesComponent
}];
let TablesRoutingModule = class TablesRoutingModule {};
TablesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TablesRoutingModule);


/***/ }),

/***/ 4629:
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesComponent": () => (/* binding */ TablesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component.html?ngResource */ 2953);
/* harmony import */ var _tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.component.scss?ngResource */ 196);
/* harmony import */ var _tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 4903);
var _class;





let TablesComponent = (_class = class TablesComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
TablesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tables',
  template: _tables_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
  styles: [(_tables_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TablesComponent);


/***/ }),

/***/ 7452:
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 1679);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables-routing.module */ 8481);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ 4629);






let TablesModule = class TablesModule {};
TablesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__.TablesRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
  declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_2__.TablesComponent]
})], TablesModule);


/***/ }),

/***/ 196:
/*!****************************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2953:
/*!****************************************************************!*\
  !*** ./src/app/layout/tables/tables.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-6 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Basic example\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Table head options</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-inverse\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-default\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Bordered table</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@TwBootstrap</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">4</th>\r\n                                <td colspan=\"2\">Larry the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Small table</div>\r\n                <table class=\"table table-sm\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-xl-6 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Inverse table</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-inverse\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Striped Rows</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Page</th>\r\n                                <th>Visits</th>\r\n                                <th>% New Visits</th>\r\n                                <th>Revenue</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>/index.html</td>\r\n                                <td>1265</td>\r\n                                <td>32.3%</td>\r\n                                <td>$321.33</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/about.html</td>\r\n                                <td>261</td>\r\n                                <td>33.3%</td>\r\n                                <td>$234.12</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/sales.html</td>\r\n                                <td>665</td>\r\n                                <td>21.3%</td>\r\n                                <td>$16.34</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/blog.html</td>\r\n                                <td>9516</td>\r\n                                <td>89.3%</td>\r\n                                <td>$1644.43</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/404.html</td>\r\n                                <td>23</td>\r\n                                <td>34.3%</td>\r\n                                <td>$23.52</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/services.html</td>\r\n                                <td>421</td>\r\n                                <td>60.3%</td>\r\n                                <td>$724.32</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/blog/post.html</td>\r\n                                <td>1233</td>\r\n                                <td>93.2%</td>\r\n                                <td>$126.34</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Hoverable rows</div>\r\n                <table class=\"card-body table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Contextual classes</div>\r\n                <table class=\"card-body table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"table-active\">\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr class=\"table-success\">\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr class=\"table-info\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr class=\"table-warning\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr class=\"table-danger\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_tables_tables_module_ts.js.map