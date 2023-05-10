(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_bs-element_bs-element_module_ts"],{

/***/ 680:
/*!****************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsElementRoutingModule": () => (/* binding */ BsElementRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-element.component */ 8122);




const routes = [{
  path: '',
  component: _bs_element_component__WEBPACK_IMPORTED_MODULE_0__.BsElementComponent
}];
let BsElementRoutingModule = class BsElementRoutingModule {};
BsElementRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BsElementRoutingModule);


/***/ }),

/***/ 8122:
/*!***********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsElementComponent": () => (/* binding */ BsElementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _bs_element_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-element.component.html?ngResource */ 3760);
/* harmony import */ var _bs_element_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-element.component.scss?ngResource */ 4782);
/* harmony import */ var _bs_element_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bs_element_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 4903);
var _class;





let BsElementComponent = (_class = class BsElementComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
BsElementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-bs-element',
  template: _bs_element_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
  styles: [(_bs_element_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BsElementComponent);


/***/ }),

/***/ 1663:
/*!********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsElementModule": () => (/* binding */ BsElementModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 1679);
/* harmony import */ var _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-element-routing.module */ 680);
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-element.component */ 8122);







let BsElementModule = class BsElementModule {};
BsElementModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_1__.BsElementRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule],
  declarations: [_bs_element_component__WEBPACK_IMPORTED_MODULE_2__.BsElementComponent]
})], BsElementModule);


/***/ }),

/***/ 4782:
/*!************************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.scss?ngResource ***!
  \************************************************************************/
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

/***/ 3760:
/*!************************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header>\r\n    <!-- Main jumbotron for a primary marketing message or call to action -->\r\n    <div class=\"jumbotron\">\r\n        <h1>Hello, world!</h1>\r\n        <p>\r\n            This is a template for a simple marketing or informational website. It includes a large callout called a\r\n            jumbotron and three supporting pieces of content. Use it as a starting point to create something more\r\n            unique.\r\n        </p>\r\n        <p>\r\n            <a class=\"btn btn-primary btn-lg\" href=\"javascript:void(0)\" role=\"button\">Learn more »</a>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Buttons</h1>\r\n        <hr />\r\n    </div>\r\n    <p>\r\n        <button class=\"btn btn-lg btn-default\" type=\"button\">Default</button>\r\n        <button class=\"btn btn-lg btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-lg btn-secondary\" type=\"button\">Secondary</button>\r\n        <button class=\"btn btn-lg btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-lg btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-lg btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-lg btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-lg btn-link\" type=\"button\">Link</button>\r\n    </p>\r\n    <p>\r\n        <button class=\"btn btn-default\" type=\"button\">Default</button>\r\n        <button class=\"btn btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-secondary\" type=\"button\">Secondary</button>\r\n        <button class=\"btn btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-link\" type=\"button\">Link</button>\r\n    </p>\r\n    <p>\r\n        <button class=\"btn btn-sm btn-default\" type=\"button\">Default</button>\r\n        <button class=\"btn btn-sm btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-sm btn-secondary\" type=\"button\">Secondary</button>\r\n        <button class=\"btn btn-sm btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-sm btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-sm btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-sm btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-sm btn-link\" type=\"button\">Link</button>\r\n    </p>\r\n\r\n    <br />\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Thumbnails</h1>\r\n        <hr />\r\n    </div>\r\n    <img alt=\"\" class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" />\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Dropdown menus</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"dropdown theme-dropdown clearfix\" ngbDropdown>\r\n        <button class=\"btn btn-secondary\" ngbDropdownToggle>\r\n            Dropdown\r\n        </button>\r\n        <div aria-labelledby=\"dropdownMenu1\" class=\"dropdown-menu\" ngbDropdownMenu>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n        </div>\r\n    </div>\r\n    <br />\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Navbars</h1>\r\n    </div>\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n        <button class=\"navbar-toggler\" type=\"button\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input aria-label=\"Search\" class=\"form-control mr-sm-2\" placeholder=\"Search\" type=\"text\" />\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n    <br />\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\r\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n        <button class=\"navbar-toggler\" type=\"button\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                </li>\r\n            </ul>\r\n            <form class=\"form-inline my-2 my-lg-0\">\r\n                <input aria-label=\"Search\" class=\"form-control mr-sm-2\" placeholder=\"Search\" type=\"text\" />\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Alerts</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"alert alert-success\">\r\n        <strong>Well done!</strong> You successfully read this important alert message.\r\n    </div>\r\n    <div class=\"alert alert-info\">\r\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n    </div>\r\n    <div class=\"alert alert-warning\"><strong>Warning!</strong> Best check yo self, you're not looking too good.</div>\r\n    <div class=\"alert alert-danger\"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Progress bars</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"progress\">\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"25\"\r\n            class=\"progress-bar\"\r\n            role=\"progressbar\"\r\n            style=\"width: 25%; height: 10px;\"\r\n        ></div>\r\n    </div>\r\n    <br />\r\n    <div class=\"progress\">\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"25\"\r\n            class=\"progress-bar bg-success\"\r\n            role=\"progressbar\"\r\n            style=\"width: 25%;\"\r\n        ></div>\r\n    </div>\r\n    <br />\r\n    <div class=\"progress\">\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"50\"\r\n            class=\"progress-bar bg-info\"\r\n            role=\"progressbar\"\r\n            style=\"width: 50%;\"\r\n        ></div>\r\n    </div>\r\n    <br />\r\n    <div class=\"progress\">\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"15\"\r\n            class=\"progress-bar\"\r\n            role=\"progressbar\"\r\n            style=\"width: 15%;\"\r\n        ></div>\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"30\"\r\n            class=\"progress-bar bg-success\"\r\n            role=\"progressbar\"\r\n            style=\"width: 30%;\"\r\n        ></div>\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"20\"\r\n            class=\"progress-bar bg-info\"\r\n            role=\"progressbar\"\r\n            style=\"width: 20%;\"\r\n        ></div>\r\n    </div>\r\n    <br />\r\n    <div class=\"progress\">\r\n        <div\r\n            aria-valuemax=\"100\"\r\n            aria-valuemin=\"0\"\r\n            aria-valuenow=\"100\"\r\n            class=\"progress-bar progress-bar-striped bg-danger\"\r\n            role=\"progressbar\"\r\n            style=\"width: 100%;\"\r\n        ></div>\r\n    </div>\r\n    <br />\r\n\r\n    <div class=\"page-header\">\r\n        <h1>List groups</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">Cras justo odio</li>\r\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n                <li class=\"list-group-item\">Morbi leo risus</li>\r\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n                <li class=\"list-group-item\">Vestibulum at eros</li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"list-group\">\r\n                <a class=\"list-group-item active\" href=\"javascript:void(0)\">Cras justo odio</a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">Dapibus ac facilisis in</a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">Morbi leo risus</a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">Porta ac consectetur ac</a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">Vestibulum at eros</a>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"list-group\">\r\n                <a class=\"list-group-item active\" href=\"javascript:void(0)\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">\r\n                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\r\n                    </p>\r\n                </a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">\r\n                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\r\n                    </p>\r\n                </a>\r\n                <a class=\"list-group-item\" href=\"javascript:void(0)\">\r\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\r\n                    <p class=\"list-group-item-text\">\r\n                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.\r\n                    </p>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n    </div>\r\n\r\n    <div class=\"page-header\">\r\n        <h1>Cards</h1>\r\n        <hr />\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-primary mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Primary card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-secondary mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Secondary card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-success mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Success card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-danger mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Danger card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-warning mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Warning card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-info mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Info card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card bg-light mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Light card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card text-white bg-dark mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Dark card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Header</div>\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Dark card title</h4>\r\n                    <p class=\"card-text\">\r\n                        Some quick example text to build on the card title and make up the bulk of the card's content.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.col-sm-4 -->\r\n    </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_bs-element_bs-element_module_ts.js.map