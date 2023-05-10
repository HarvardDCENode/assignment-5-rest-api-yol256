(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_layout_bs-component_bs-component_module_ts"],{

/***/ 61324:
/*!********************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentRoutingModule": () => (/* binding */ BsComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-component.component */ 85960);




const routes = [{
  path: '',
  component: _bs_component_component__WEBPACK_IMPORTED_MODULE_0__.BsComponentComponent
}];
let BsComponentRoutingModule = class BsComponentRoutingModule {};
BsComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BsComponentRoutingModule);


/***/ }),

/***/ 85960:
/*!***************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentComponent": () => (/* binding */ BsComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bs_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-component.component.html?ngResource */ 69459);
/* harmony import */ var _bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-component.component.scss?ngResource */ 23941);
/* harmony import */ var _bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let BsComponentComponent = (_class = class BsComponentComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
BsComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-bs-component',
  template: _bs_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_bs_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BsComponentComponent);


/***/ }),

/***/ 65765:
/*!************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsComponentModule": () => (/* binding */ BsComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-component-routing.module */ 61324);
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-component.component */ 85960);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 88103);









let BsComponentModule = class BsComponentModule {};
BsComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__.BsComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
  declarations: [_bs_component_component__WEBPACK_IMPORTED_MODULE_2__.BsComponentComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ButtonsComponent, _components__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _components__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent, _components__WEBPACK_IMPORTED_MODULE_3__.DatePickerComponent, _components__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent, _components__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _components__WEBPACK_IMPORTED_MODULE_3__.PopOverComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ProgressbarComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, _components__WEBPACK_IMPORTED_MODULE_3__.RatingComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TooltipComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TimepickerComponent]
})], BsComponentModule);


/***/ }),

/***/ 31080:
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component.html?ngResource */ 7307);
/* harmony import */ var _alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component.scss?ngResource */ 63832);
/* harmony import */ var _alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let AlertComponent = (_class = class AlertComponent {
  constructor() {
    this.alerts = [];
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert'
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert'
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert'
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert'
    });
  }
  ngOnInit() {}
  closeAlert(alert) {
    const index = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}, _class.ctorParameters = () => [], _class);
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-alert',
  template: _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AlertComponent);


/***/ }),

/***/ 67901:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": () => (/* binding */ ButtonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.component.html?ngResource */ 35830);
/* harmony import */ var _buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.component.scss?ngResource */ 48188);
/* harmony import */ var _buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
var _class;





let ButtonsComponent = (_class = class ButtonsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.model = 1;
  }
  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 'middle'
    });
  }
}, _class.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder
}], _class);
ButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-buttons',
  template: _buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ButtonsComponent);


/***/ }),

/***/ 94846:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseComponent": () => (/* binding */ CollapseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _collapse_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.component.html?ngResource */ 9013);
/* harmony import */ var _collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapse.component.scss?ngResource */ 7134);
/* harmony import */ var _collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let CollapseComponent = class CollapseComponent {
  constructor() {
    this.isCollapsed = false;
  }
};
CollapseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-collapse',
  template: _collapse_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_collapse_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CollapseComponent);


/***/ }),

/***/ 17820:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _date_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-picker.component.html?ngResource */ 95097);
/* harmony import */ var _date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker.component.scss?ngResource */ 75940);
/* harmony import */ var _date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let DatePickerComponent = (_class = class DatePickerComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
DatePickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-date-picker',
  template: _date_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_date_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DatePickerComponent);


/***/ }),

/***/ 79624:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component.html?ngResource */ 12950);
/* harmony import */ var _dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.component.scss?ngResource */ 61691);
/* harmony import */ var _dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let DropdownComponent = (_class = class DropdownComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
DropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-dropdown',
  template: _dropdown_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dropdown_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DropdownComponent);


/***/ }),

/***/ 88103:
/*!*********************************************************!*\
  !*** ./src/app/layout/bs-component/components/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent),
/* harmony export */   "ButtonsComponent": () => (/* reexport safe */ _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ButtonsComponent),
/* harmony export */   "CollapseComponent": () => (/* reexport safe */ _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent),
/* harmony export */   "DatePickerComponent": () => (/* reexport safe */ _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent),
/* harmony export */   "ModalComponent": () => (/* reexport safe */ _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent),
/* harmony export */   "PaginationComponent": () => (/* reexport safe */ _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent),
/* harmony export */   "PopOverComponent": () => (/* reexport safe */ _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__.PopOverComponent),
/* harmony export */   "ProgressbarComponent": () => (/* reexport safe */ _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressbarComponent),
/* harmony export */   "RatingComponent": () => (/* reexport safe */ _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__.RatingComponent),
/* harmony export */   "TabsComponent": () => (/* reexport safe */ _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__.TabsComponent),
/* harmony export */   "TimepickerComponent": () => (/* reexport safe */ _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__.TimepickerComponent),
/* harmony export */   "TooltipComponent": () => (/* reexport safe */ _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__.TooltipComponent)
/* harmony export */ });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ 67901);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ 31080);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ 24292);
/* harmony import */ var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse/collapse.component */ 94846);
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-picker/date-picker.component */ 17820);
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown/dropdown.component */ 79624);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.component */ 90499);
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pop-over/pop-over.component */ 26450);
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progressbar/progressbar.component */ 20125);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ 61866);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rating/rating.component */ 67154);
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltip/tooltip.component */ 36);
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timepicker/timepicker.component */ 17486);














/***/ }),

/***/ 24292:
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component.html?ngResource */ 51191);
/* harmony import */ var _modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss?ngResource */ 73077);
/* harmony import */ var _modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
var _class;





let ModalComponent = (_class = class ModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  open(content) {
    this.modalService.open(content).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}, _class.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal
}], _class);
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modal',
  template: _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ModalComponent);


/***/ }),

/***/ 90499:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component.html?ngResource */ 67093);
/* harmony import */ var _pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.component.scss?ngResource */ 85302);
/* harmony import */ var _pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let PaginationComponent = (_class = class PaginationComponent {
  constructor() {
    this.defaultPagination = 1;
    this.advancedPagination = 1;
    this.paginationSize = 1;
    this.disabledPagination = 1;
    this.isDisabled = true;
  }
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}, _class.ctorParameters = () => [], _class);
PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-pagination',
  template: _pagination_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_pagination_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PaginationComponent);


/***/ }),

/***/ 26450:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverComponent": () => (/* binding */ PopOverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pop_over_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-over.component.html?ngResource */ 68065);
/* harmony import */ var _pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over.component.scss?ngResource */ 17488);
/* harmony import */ var _pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let PopOverComponent = (_class = class PopOverComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
PopOverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-pop-over',
  template: _pop_over_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_pop_over_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PopOverComponent);


/***/ }),

/***/ 20125:
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressbarComponent": () => (/* binding */ ProgressbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _progressbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressbar.component.html?ngResource */ 83886);
/* harmony import */ var _progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.component.scss?ngResource */ 26410);
/* harmony import */ var _progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let ProgressbarComponent = (_class = class ProgressbarComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
ProgressbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-progressbar',
  template: _progressbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_progressbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProgressbarComponent);


/***/ }),

/***/ 67154:
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.component.html?ngResource */ 91735);
/* harmony import */ var _rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss?ngResource */ 35136);
/* harmony import */ var _rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let RatingComponent = (_class = class RatingComponent {
  constructor() {
    this.currentRate = 8;
  }
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-rating',
  template: _rating_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_rating_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], RatingComponent);


/***/ }),

/***/ 61866:
/*!***********************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 36948);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 60311);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let TabsComponent = (_class = class TabsComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 17486:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimepickerComponent": () => (/* binding */ TimepickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _timepicker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timepicker.component.html?ngResource */ 15461);
/* harmony import */ var _timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timepicker.component.scss?ngResource */ 63377);
/* harmony import */ var _timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TimepickerComponent = class TimepickerComponent {
  constructor() {
    this.defaultTime = {
      hour: 13,
      minute: 30
    };
    this.meridianTime = {
      hour: 13,
      minute: 30
    };
    this.meridian = true;
    this.SecondsTime = {
      hour: 13,
      minute: 30,
      second: 30
    };
    this.seconds = true;
    this.customTime = {
      hour: 13,
      minute: 30,
      second: 0
    };
    this.hourStep = 1;
    this.minuteStep = 15;
    this.secondStep = 30;
  }
  toggleSeconds() {
    this.seconds = !this.seconds;
  }
  toggleMeridian() {
    this.meridian = !this.meridian;
  }
};
TimepickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-timepicker',
  template: _timepicker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_timepicker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TimepickerComponent);


/***/ }),

/***/ 36:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tooltip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.component.html?ngResource */ 41514);
/* harmony import */ var _tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.component.scss?ngResource */ 13031);
/* harmony import */ var _tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
var _class;




let TooltipComponent = (_class = class TooltipComponent {
  constructor() {}
  ngOnInit() {}
}, _class.ctorParameters = () => [], _class);
TooltipComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tooltip',
  template: _tooltip_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tooltip_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TooltipComponent);


/***/ }),

/***/ 23941:
/*!****************************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 63832:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48188:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7134:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75940:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host ::ng-deep .datepicker-input .custom-select {\n  width: 50%;\n}", "",{"version":3,"sources":["webpack://./src/app/layout/bs-component/components/date-picker/date-picker.component.scss"],"names":[],"mappings":"AACI;EACI,UAAA;AAAR","sourcesContent":[":host ::ng-deep .datepicker-input {\r\n    .custom-select {\r\n        width: 50%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61691:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73077:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85302:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 17488:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26410:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 35136:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60311:
/*!************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63377:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13031:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 69459:
/*!****************************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <app-page-header [heading]=\"'Bootstrap Component'\" [icon]=\"'fa-th-list'\"></app-page-header>\r\n    <app-modal></app-modal>\r\n    <app-alert></app-alert>\r\n    <app-buttons></app-buttons>\r\n    <app-collapse></app-collapse>\r\n    <app-date-picker></app-date-picker>\r\n    <app-dropdown></app-dropdown>\r\n    <app-pagination></app-pagination>\r\n    <app-pop-over></app-pop-over>\r\n    <app-progressbar></app-progressbar>\r\n    <app-tabs></app-tabs>\r\n    <app-tooltip></app-tooltip>\r\n    <app-timepicker></app-timepicker>\r\n    <app-rating></app-rating>\r\n</div>\r\n";

/***/ }),

/***/ 7307:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Buttons</div>\r\n            <div class=\"card-body\">\r\n                <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{ alert.message }}</ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 35830:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mb-3\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Radio Button group (<strong>Using ngModel</strong>)</div>\r\n            <div class=\"card-body\">\r\n                <div [(ngModel)]=\"model\" class=\"btn-group btn-group-toggle mb-3\" name=\"radioBasic\" ngbRadioGroup>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                        <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                        <input ngbButton type=\"radio\" value=\"middle\" /> Middle\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                        <input [value]=\"false\" ngbButton type=\"radio\" /> Right\r\n                    </label>\r\n                </div>\r\n                <div class=\"alert alert-info mb-0\"><strong>Selected Value: </strong>{{ model }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Radio Button group (<strong>Ractive Forms</strong>)</div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"radioGroupForm\" class=\"mb-3\">\r\n                    <div class=\"btn-group btn-group-toggle\" formControlName=\"model\" name=\"radioBasic\" ngbRadioGroup>\r\n                        <label class=\"btn-primary\" ngbButtonLabel>\r\n                            <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\r\n                        </label>\r\n                        <label class=\"btn-primary\" ngbButtonLabel>\r\n                            <input ngbButton type=\"radio\" value=\"middle\" /> Middle\r\n                        </label>\r\n                        <label class=\"btn-primary\" ngbButtonLabel>\r\n                            <input [value]=\"false\" ngbButton type=\"radio\" /> Right\r\n                        </label>\r\n                    </div>\r\n                </form>\r\n                <div class=\"alert alert-info mb-0\">\r\n                    <strong>Selected Value: </strong>{{ radioGroupForm.value.model }}\r\n                </div>\r\n                <!-- <form [formGroup]=\"radioGroupForm\">\r\n                    <div ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                        </label>\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" value=\"middle\"> Middle\r\n                        </label>\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" [value]=\"false\"> Right\r\n                        </label>\r\n                    </div>\r\n                </form> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 9013:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Collapse</div>\r\n            <div class=\"card-body\">\r\n                <p>\r\n                    <button\r\n                        (click)=\"isCollapsed = !isCollapsed\"\r\n                        [attr.aria-expanded]=\"!isCollapsed\"\r\n                        aria-controls=\"collapseExample\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        type=\"button\"\r\n                    >\r\n                        Toggle\r\n                    </button>\r\n                </p>\r\n                <div [ngbCollapse]=\"isCollapsed\" id=\"collapseExample\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            You can collapse this card by clicking Toggle\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 95097:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Date Picker</div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-inline mb-3\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group datepicker-input\">\r\n                            <input\r\n                                #d=\"ngbDatepicker\"\r\n                                [(ngModel)]=\"model\"\r\n                                class=\"form-control\"\r\n                                name=\"dp\"\r\n                                ngbDatepicker\r\n                                placeholder=\"yyyy-mm-dd\"\r\n                            />\r\n                            <button (click)=\"d.toggle()\" class=\"input-group-addon\" type=\"button\">\r\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                                <span class=\"fa fa-calendar\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"alert alert-info mb-0\"><strong>Model: </strong> {{ model | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 12950:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Dropdown</div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"d-inline-block dropdown\" ngbDropdown>\r\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\r\n                    <div ngbDropdownMenu>\r\n                        <button class=\"dropdown-item\">Action</button>\r\n                        <button class=\"dropdown-item\">Another Action</button>\r\n                        <button class=\"dropdown-item\">Something else is here</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n                <div class=\"d-inline-block dropdown\" ngbDropdown placement=\"top-right\">\r\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropup</button>\r\n                    <div ngbDropdownMenu>\r\n                        <button class=\"dropdown-item\">Action</button>\r\n                        <button class=\"dropdown-item\">Another Action</button>\r\n                        <button class=\"dropdown-item\">Something else is here</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr />\r\n        <p class=\"mb-2\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\r\n            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\r\n            <div ngbDropdownMenu>\r\n                <button class=\"dropdown-item\">Action</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n            </div>\r\n        </div>\r\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\r\n            <button (click)=\"$event.stopPropagation(); myDrop.open()\" class=\"btn btn-outline-success\">\r\n                Open from outside\r\n            </button>\r\n        </div>\r\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\r\n            <button (click)=\"$event.stopPropagation(); myDrop.close()\" class=\"btn btn-outline-danger\">\r\n                Close from outside\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 51191:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Modal</div>\r\n            <!-- Large modal -->\r\n            <div class=\"card-body\">\r\n                <button (click)=\"open(content)\" class=\"btn btn-primary\">Large modal</button>\r\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Modal title</h4>\r\n                        <button (click)=\"d('Cross click')\" aria-label=\"Close\" class=\"close\" type=\"button\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <p>One fine body&hellip;</p>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button (click)=\"c('Close click')\" class=\"btn btn-secondary\" type=\"button\">Close</button>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 67093:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Basic Pagination</div>\r\n            <div class=\"card-body\">\r\n                <div class=\"text-uppercase text-muted fs-12\">Default pagination</div>\r\n                <ngb-pagination [(page)]=\"defaultPagination\" [collectionSize]=\"70\"></ngb-pagination>\r\n                <div class=\"text-uppercase text-muted fs-12\">directionLinks = false</div>\r\n                <ngb-pagination\r\n                    [(page)]=\"defaultPagination\"\r\n                    [collectionSize]=\"70\"\r\n                    [directionLinks]=\"false\"\r\n                ></ngb-pagination>\r\n                <div class=\"text-uppercase text-muted fs-12\">boundaryLinks = true</div>\r\n                <ngb-pagination\r\n                    [(page)]=\"defaultPagination\"\r\n                    [boundaryLinks]=\"true\"\r\n                    [collectionSize]=\"70\"\r\n                ></ngb-pagination>\r\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ defaultPagination }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Advanced Pagination</div>\r\n            <div class=\"card-body\">\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = false</div>\r\n                <ngb-pagination\r\n                    [(page)]=\"advancedPagination\"\r\n                    [boundaryLinks]=\"true\"\r\n                    [collectionSize]=\"120\"\r\n                    [maxSize]=\"5\"\r\n                ></ngb-pagination>\r\n\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true</div>\r\n                <ngb-pagination\r\n                    [(page)]=\"advancedPagination\"\r\n                    [boundaryLinks]=\"true\"\r\n                    [collectionSize]=\"120\"\r\n                    [maxSize]=\"5\"\r\n                    [rotate]=\"true\"\r\n                ></ngb-pagination>\r\n\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true, ellipses = false</div>\r\n                <ngb-pagination\r\n                    [(page)]=\"advancedPagination\"\r\n                    [boundaryLinks]=\"true\"\r\n                    [collectionSize]=\"120\"\r\n                    [ellipses]=\"false\"\r\n                    [maxSize]=\"5\"\r\n                    [rotate]=\"true\"\r\n                ></ngb-pagination>\r\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ advancedPagination }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Pagination size</div>\r\n            <div class=\"card-body\">\r\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"lg\"></ngb-pagination>\r\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\"></ngb-pagination>\r\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"sm\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Disabled pagination</div>\r\n            <div class=\"card-body\">\r\n                <p>Pagination control can be disabled:</p>\r\n                <ngb-pagination\r\n                    [(page)]=\"disabledPagination\"\r\n                    [collectionSize]=\"70\"\r\n                    [disabled]=\"isDisabled\"\r\n                ></ngb-pagination>\r\n                <hr />\r\n                <button (click)=\"toggleDisabled()\" class=\"btn btn-outline-primary\">\r\n                    Toggle disabled\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 68065:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header\">\r\n        Pop over\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <button\r\n            class=\"btn btn-secondary\"\r\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            placement=\"top\"\r\n            popoverTitle=\"Popover on top\"\r\n            type=\"button\"\r\n        >\r\n            Popover on top\r\n        </button>\r\n\r\n        <button\r\n            class=\"btn btn-secondary\"\r\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            placement=\"right\"\r\n            popoverTitle=\"Popover on right\"\r\n            type=\"button\"\r\n        >\r\n            Popover on right\r\n        </button>\r\n\r\n        <button\r\n            class=\"btn btn-secondary\"\r\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            placement=\"bottom\"\r\n            popoverTitle=\"Popover on bottom\"\r\n            type=\"button\"\r\n        >\r\n            Popover on bottom\r\n        </button>\r\n\r\n        <button\r\n            class=\"btn btn-secondary\"\r\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            placement=\"left\"\r\n            popoverTitle=\"Popover on left\"\r\n            type=\"button\"\r\n        >\r\n            Popover on left\r\n        </button>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 83886:
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header\">Progressbar</div>\r\n    <div class=\"card-body\">\r\n        <p>\r\n            <ngb-progressbar [value]=\"50\" type=\"info\"></ngb-progressbar>\r\n        </p>\r\n        <p>\r\n            <ngb-progressbar [max]=\"200\" [value]=\"150\" showValue=\"true\" type=\"warning\"></ngb-progressbar>\r\n        </p>\r\n        <p>\r\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\"></ngb-progressbar>\r\n        </p>\r\n        <p>\r\n            <ngb-progressbar [value]=\"25\" type=\"success\">25</ngb-progressbar>\r\n        </p>\r\n        <p>\r\n            <ngb-progressbar [value]=\"50\" type=\"info\">Copying file <b>2 of 4</b>...</ngb-progressbar>\r\n        </p>\r\n        <p>\r\n            <ngb-progressbar [animated]=\"true\" [striped]=\"true\" [value]=\"75\" type=\"warning\"><i>50%</i></ngb-progressbar>\r\n        </p>\r\n        <p class=\"mb-0\">\r\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\">Completed!</ngb-progressbar>\r\n        </p>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 91735:
/*!****************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Rating (<strong>Basic demo</strong>)</div>\r\n    <div class=\"card-body\">\r\n        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n        <hr />\r\n        <pre>Rate: <b>{{currentRate}}</b></pre>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 36948:
/*!************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mt-3\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Tabset</div>\r\n            <div class=\"card-body\">\r\n                <ngb-tabset>\r\n                    <ngb-tab title=\"Simple\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>\r\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\r\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\r\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\r\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\r\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <p>\r\n                                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson\r\n                                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo\r\n                                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud\r\n                                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes\r\n                                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson\r\n                                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente\r\n                                accusamus tattooed echo park.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab [disabled]=\"true\" title=\"Disabled\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>\r\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\r\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\r\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\r\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\r\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Pills</div>\r\n            <div class=\"card-body\">\r\n                <ngb-tabset type=\"pills\">\r\n                    <ngb-tab title=\"Simple\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>\r\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\r\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\r\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\r\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\r\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                        <ng-template ngbTabContent\r\n                            >Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                            <p>\r\n                                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson\r\n                                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo\r\n                                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud\r\n                                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes\r\n                                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson\r\n                                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente\r\n                                accusamus tattooed echo park.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab [disabled]=\"true\" title=\"Disabled\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>\r\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\r\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\r\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\r\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\r\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\r\n                            </p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 15461:
/*!************************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row mt-3\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"defaultTime\"></ngb-timepicker>\r\n                <div class=\"alert alert-info\"><b>Selected time: </b>{{ defaultTime | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                <button (click)=\"toggleMeridian()\" class=\"btn btn-sm btn-outline-{{ meridian ? 'success' : 'danger' }}\">\r\n                    Meridian - {{ meridian ? 'ON' : 'OFF' }}\r\n                </button>\r\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ meridianTime | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Seconds</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"SecondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\r\n                <button (click)=\"toggleSeconds()\" class=\"btn btn-sm btn-outline-{{ seconds ? 'success' : 'danger' }}\">\r\n                    Seconds - {{ seconds ? 'ON' : 'OFF' }}\r\n                </button>\r\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ SecondsTime | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6 mt-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Custom Step</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker\r\n                    [(ngModel)]=\"customTime\"\r\n                    [hourStep]=\"hourStep\"\r\n                    [minuteStep]=\"minuteStep\"\r\n                    [secondStep]=\"secondStep\"\r\n                    [seconds]=\"true\"\r\n                ></ngb-timepicker>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeHourStep\">Hour Step</label>\r\n                        <input [(ngModel)]=\"hourStep\" class=\"form-control\" type=\"number\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeMinuteStep\">Minute Step</label>\r\n                        <input [(ngModel)]=\"minuteStep\" class=\"form-control\" type=\"number\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeSecondStep\">Second Step</label>\r\n                        <input [(ngModel)]=\"secondStep\" class=\"form-control\" type=\"number\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ customTime | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 41514:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Tooltip\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on top\" placement=\"top\" type=\"button\">\r\n            Tooltip on top\r\n        </button>\r\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on right\" placement=\"right\" type=\"button\">\r\n            Tooltip on right\r\n        </button>\r\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on bottom\" placement=\"bottom\" type=\"button\">\r\n            Tooltip on bottom\r\n        </button>\r\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on left\" placement=\"left\" type=\"button\">\r\n            Tooltip on left\r\n        </button>\r\n        <ng-template #StaticTipContent><em>Tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n        <button [ngbTooltip]=\"StaticTipContent\" class=\"btn btn-secondary\" data-html=\"true\" type=\"button\">\r\n            Tooltip with HTML\r\n        </button>\r\n    </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_layout_bs-component_bs-component_module_ts.js.map