(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_form_form_module_ts"],{

/***/ 1864:
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRoutingModule": () => (/* binding */ FormRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ 19);




const routes = [{
  path: '',
  component: _form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent
}];
let FormRoutingModule = class FormRoutingModule {};
FormRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FormRoutingModule);


/***/ }),

/***/ 19:
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component.html?ngResource */ 5793);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss?ngResource */ 9737);
/* harmony import */ var _form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 4903);
var _class;





let FormComponent = (_class = class FormComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-form',
  template: _form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
  styles: [(_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FormComponent);


/***/ }),

/***/ 2569:
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": () => (/* binding */ FormModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 1679);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-routing.module */ 1864);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ 19);






let FormModule = class FormModule {};
FormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _form_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
  declarations: [_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent]
})], FormModule);


/***/ }),

/***/ 9737:
/*!************************************************************!*\
  !*** ./src/app/layout/form/form.component.scss?ngResource ***!
  \************************************************************/
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

/***/ 5793:
/*!************************************************************!*\
  !*** ./src/app/layout/form/form.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <form role=\"form\">\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text Input</label>\r\n                    <input class=\"form-control\" />\r\n                    <p class=\"help-block\">Example block-level help text here.</p>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text Input with Placeholder</label>\r\n                    <input class=\"form-control\" placeholder=\"Enter text\" />\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Static Control</label>\r\n                    <p class=\"form-control-static\">email@example.com</p>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label for=\"exampleInputFile\">File input</label>\r\n                    <input class=\"form-control-file\" id=\"exampleInputFile\" type=\"file\" />\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text area</label>\r\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Checkboxes</label>\r\n                    <div class=\"checkbox\">\r\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 1 </label>\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 2 </label>\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 3 </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Inline Checkboxes</label>\r\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />1 </label>\r\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />2 </label>\r\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />3 </label>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Radio Buttons</label>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input checked=\"\" id=\"optionsRadios1\" name=\"optionsRadios\" type=\"radio\" value=\"option1\" />\r\n                            Radio 1\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input id=\"optionsRadios2\" name=\"optionsRadios\" type=\"radio\" value=\"option2\" /> Radio 2\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input id=\"optionsRadios3\" name=\"optionsRadios\" type=\"radio\" value=\"option3\" /> Radio 3\r\n                        </label>\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Inline Radio Buttons</label>\r\n                    <label class=\"radio-inline\">\r\n                        <input\r\n                            checked=\"\"\r\n                            id=\"optionsRadiosInline1\"\r\n                            name=\"optionsRadiosInline\"\r\n                            type=\"radio\"\r\n                            value=\"option1\"\r\n                        />1\r\n                    </label>\r\n                    <label class=\"radio-inline\">\r\n                        <input id=\"optionsRadiosInline2\" name=\"optionsRadiosInline\" type=\"radio\" value=\"option2\" />2\r\n                    </label>\r\n                    <label class=\"radio-inline\">\r\n                        <input id=\"optionsRadiosInline3\" name=\"optionsRadiosInline\" type=\"radio\" value=\"option3\" />3\r\n                    </label>\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Selects</label>\r\n                    <select class=\"form-control\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Multiple Selects</label>\r\n                    <select class=\"form-control\" multiple=\"\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                    </select>\r\n                </fieldset>\r\n\r\n                <button class=\"btn btn-secondary\" type=\"submit\">Submit Button</button>\r\n                <button class=\"btn btn-secondary\" type=\"reset\">Reset Button</button>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <h4>Disabled Form States</h4>\r\n\r\n            <form role=\"form\">\r\n                <fieldset disabled=\"\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"disabledSelect\">Disabled input</label>\r\n                        <input\r\n                            class=\"form-control\"\r\n                            disabled=\"\"\r\n                            id=\"disabledInput\"\r\n                            placeholder=\"Disabled input\"\r\n                            type=\"text\"\r\n                        />\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"disabledSelect\">Disabled select menu</label>\r\n                        <select class=\"form-control\" id=\"disabledSelect\">\r\n                            <option>Disabled select</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"checkbox\">\r\n                        <label> <input type=\"checkbox\" /> Disabled Checkbox </label>\r\n                    </div>\r\n\r\n                    <button class=\"btn btn-primary\" type=\"submit\">Disabled Button</button>\r\n                </fieldset>\r\n            </form>\r\n            <br />\r\n\r\n            <h4>Form Validation</h4>\r\n\r\n            <form role=\"form\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\r\n                    <input class=\"form-control is-valid\" id=\"inputSuccess\" type=\"text\" />\r\n                    <div class=\"valid-feedback\">\r\n                        Input success message\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\r\n                    <input class=\"form-control is-invalid\" id=\"inputError\" type=\"text\" />\r\n                    <div class=\"invalid-feedback\">\r\n                        Input error message\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <h4>Input Groups</h4>\r\n\r\n            <form role=\"form\">\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n                    </div>\r\n                    <!-- <span class=\"input-group-addon\">@</span> -->\r\n                    <input class=\"form-control\" placeholder=\"Username\" type=\"text\" />\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <input class=\"form-control\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">.00</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-eur\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Font Awesome Icon\" type=\"text\" />\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\r\n                    </div>\r\n                    <input class=\"form-control\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">.00</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <input class=\"form-control\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <p>\r\n                For complete documentation, please visit\r\n                <a href=\"https://getbootstrap.com/docs/4.0/components/forms/\" target=\"_blank\"\r\n                    >Bootstrap's Form Documentation</a\r\n                >.\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_form_form_module_ts.js.map