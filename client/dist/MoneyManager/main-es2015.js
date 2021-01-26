(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+iht":
/*!*********************************************************************!*\
  !*** ./src/app/system/shared/components/navbar/navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/system", "bill"]; };
const _c1 = function () { return ["/system", "bus"]; };
const _c2 = function () { return ["/system", "schedule"]; };
const _c3 = function () { return ["/system", "worker"]; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 25, vars: 8, consts: [[1, "sidebar"], [1, "sidebar-container"], [1, "sidebar-header"], [1, "brand"], [1, "logo"], [1, "fas", "fa-user-circle", "fa-2x"], [1, "menu"], [1, "nav", "metismenu"], ["routerLinkActive", "active"], [3, "routerLink"], [1, "fas", "fa-city"], [1, "fas", "fa-bus"], [1, "fas", "fa-clipboard-list"], [1, "fas", "fa-user-tie"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Admin panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Worker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/bBG":
/*!********************************************************!*\
  !*** ./src/app/system/shared/services/bill.service.ts ***!
  \********************************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_core_base_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/core/base-api */ "BC34");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BillService extends _shared_core_base_api__WEBPACK_IMPORTED_MODULE_1__["BaseApi"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    getBill() {
        return this.get('bill');
    }
    updateBill(bill) {
        return this.put('bill', bill);
    }
    getCurrency(base = 'PLN') {
        return this.httpClient.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
    }
    transferBill(transfer) {
        return this.put('bill/transfer', transfer);
    }
}
BillService.ɵfac = function BillService_Factory(t) { return new (t || BillService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BillService, factory: BillService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/JS/node-api/client/src/main.ts */"zUnb");


/***/ }),

/***/ "1EIj":
/*!***************************************************************************!*\
  !*** ./src/app/system/project/project-detail/project-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/category.model */ "qYEU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/project.service */ "hLEM");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/category.service */ "56VU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category.component */ "JTzZ");
/* harmony import */ var _project_charts_project_charts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../project-charts/project-charts.component */ "HHjX");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../history-page/history-page.component */ "4pQW");

















const _c0 = ["pdf"];
function ProjectDetailComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.name, " ");
} }
function ProjectDetailComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} }
function ProjectDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Earnings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Profit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Relevance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-progress-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 9, ctx_r2.project.earnings, "1.0-2"), " ", ctx_r2.project.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 12, ctx_r2.project.consumption, "1.0-2"), " ", ctx_r2.project.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 15, ctx_r2.project.profit / ctx_r2.project.plannedProfit * 100, "1.0-1"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 18, ctx_r2.project.profit, "1.0-2"), " ", ctx_r2.project.currency, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](47, 21, ctx_r2.project.relevance, "1.1-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.project.relevance);
} }
function ProjectDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-category", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ProjectDetailComponent_div_8_Template_app_category_refresh_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Earnings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-project-charts", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumption ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-project-charts", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectId", ctx_r3.project._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.incomeChartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.outcomeChartData);
} }
function ProjectDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-history-page", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ProjectDetailComponent_div_9_Template_app_history_page_refresh_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectId", ctx_r4.project._id);
} }
const _c1 = function () { return ["/system", "project"]; };
class ProjectDetailComponent {
    constructor(route, projectService, categoryService, dialog) {
        this.route = route;
        this.projectService = projectService;
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.isLoaded = false;
        this.outcomeChartData = [];
        this.incomeChartData = [];
    }
    ngOnInit() {
        this.isLoaded = false;
        this.sub1 = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((params) => this.projectService.getProjectById(params.id))).subscribe((pro) => {
            this.project = pro;
            this.calculateChartData();
        });
    }
    calculateChartData() {
        this.categoryService.getCategoryByProjectId(this.project._id)
            .subscribe(categories => {
            this.outcomeChartData = categories.map(cat => new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_2__["ChartCategory"](cat, 'outcome'));
            this.incomeChartData = categories.map(cat => new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_2__["ChartCategory"](cat, 'income'));
        });
        this.isLoaded = true;
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ProjectDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], viewQuery: function ProjectDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pdf = _t.first);
    } }, decls: 10, vars: 7, consts: [[1, "pull-left"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "fa", "fa-arrow-left", "fa-lg"], [1, "title-block"], ["class", "title pull-left", 4, "ngIf"], [1, "section"], ["style", "margin-left: 47%;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "title", "pull-left"], [1, "sparkline", "bar"], [2, "margin-left", "47%"], [1, "row"], [1, "col", "col-xs-12", "col-sm-6", "col-md-3", "col-xl-3"], [1, "card-margin"], [1, "value"], ["mode", "determinate", "color", "primary", "value", "100"], [2, "width", "100%", "text-align", "right"], ["matTooltip", "Relatively to planned profit", 1, "popup"], ["mode", "determinate", "color", "accent", 3, "value"], [1, "col", "col-xs-12", "col-sm-12", "col-md-4", "col-xl-4"], [3, "projectId", "refresh"], [2, "color", "green"], [3, "data"], [2, "color", "red"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_h3_4_Template, 3, 1, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailComponent_div_7_Template, 49, 24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailComponent_div_8_Template, 30, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDetailComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"], _project_charts_project_charts_component__WEBPACK_IMPORTED_MODULE_14__["ProjectChartsComponent"], _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_15__["HistoryPageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: [".value[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 24px;\n  \n  text-overflow: ellipsis;\n  font-weight: 400;\n}\n\n.card-margin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.popup[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n  .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #5cb85c;\n}\n\n  .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1kZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsdWUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jYXJkLW1hcmdpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnBvcHVwIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-detail',
                templateUrl: './project-detail.component.html',
                styleUrls: ['./project-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { pdf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pdf']
        }] }); })();


/***/ }),

/***/ "1W3X":
/*!**************************************************************!*\
  !*** ./src/app/system/bill/bill-card/bill-card.component.ts ***!
  \**************************************************************/
/*! exports provided: BillCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillCardComponent", function() { return BillCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class BillCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
BillCardComponent.ɵfac = function BillCardComponent_Factory(t) { return new (t || BillCardComponent)(); };
BillCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillCardComponent, selectors: [["app-bill-card"]], inputs: { bill: "bill", currency: "currency" }, decls: 26, vars: 8, consts: [[1, "col", "col-xs-12", "col-sm-12", "col-md-6", "col-xl-6"], [1, "container"], [1, "row"], [1, "col", "col-xs-12", "col-sm-12", "col-md-12", "col-xl-12"], [1, "card-margin"], [1, "value"], ["mode", "determinate", "value", "100"], [1, "w-100"]], template: function BillCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PLN Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "EUR Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 2, ctx.bill[0].value, "1.0-2"), " z\u0142");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 5, ctx.bill[1].value, "1.0-2"), " \u20AC");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 24px;\n  \n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n\n.card-margin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2JpbGwvYmlsbC1jYXJkL2JpbGwtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2JpbGwvYmlsbC1jYXJkL2JpbGwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmQtbWFyZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-card',
                templateUrl: './bill-card.component.html',
                styleUrls: ['./bill-card.component.scss']
            }]
    }], function () { return []; }, { bill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4pQW":
/*!***************************************************************!*\
  !*** ./src/app/system/history-page/history-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function() { return HistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_event_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/event.model */ "qMux");
/* harmony import */ var _edit_history_form_edit_history_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-history-form/edit-history-form.component */ "CCYV");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/event.service */ "7/C4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "WG3B");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");










const _c0 = ["grid"];
function HistoryPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryPageComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 6);
} }
function HistoryPageComponent_kendo_grid_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryPageComponent_kendo_grid_2_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.editHandler(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r4.isRowSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r4.isRowSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r4.isRowSelected);
} }
const _c1 = function () { return { "font-size": "17px" }; };
function HistoryPageComponent_kendo_grid_2_kendo_grid_column_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-grid-column", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function HistoryPageComponent_kendo_grid_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.getClass(dataItem_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataItem_r10.type, " ");
} }
function HistoryPageComponent_kendo_grid_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNum_r11 = ctx.pageNum;
    const totalPages_r12 = ctx.totalPages;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.projectName, " Report (history) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Page ", pageNum_r11, " of ", totalPages_r12, " ");
} }
const _c2 = function () { return { enabled: true }; };
const _c3 = function () { return { "font-size": "1.2rem" }; };
const _c4 = function () { return { date: "long" }; };
function HistoryPageComponent_kendo_grid_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-grid", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HistoryPageComponent_kendo_grid_2_Template_kendo_grid_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onGridSelectionChange($event); })("add", function HistoryPageComponent_kendo_grid_2_Template_kendo_grid_add_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addHandler(); })("edit", function HistoryPageComponent_kendo_grid_2_Template_kendo_grid_edit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.editHandler(); })("remove", function HistoryPageComponent_kendo_grid_2_Template_kendo_grid_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.removeHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoryPageComponent_kendo_grid_2_ng_template_2_Template, 8, 7, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "kendo-grid-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-grid-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "kendo-grid-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HistoryPageComponent_kendo_grid_2_kendo_grid_column_6_Template, 1, 2, "kendo-grid-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "kendo-grid-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "kendo-grid-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HistoryPageComponent_kendo_grid_2_ng_template_9_Template, 2, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "kendo-grid-pdf", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "kendo-grid-pdf-margin", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HistoryPageComponent_kendo_grid_2_ng_template_12_Template, 5, 3, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kendoGridBinding", ctx_r2.events)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("pageable", true)("pageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4))("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.projectId === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fileName", ctx_r2.fileName)("allPages", true)("repeatHeaders", true)("landscape", true)("scale", 0.8);
} }
class HistoryPageComponent {
    constructor(eventService, dialog) {
        this.eventService = eventService;
        this.dialog = dialog;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoaded = false;
        this.isRowSelected = false;
    }
    ngOnInit() {
        if (this.projectId === undefined) {
            this.sub1 = this.eventService.getEvents().subscribe((events) => {
                events.filter(ev => ev.date = new Date(ev.date));
                // @ts-ignore
                const sortedActivities = events.sort((a, b) => a.date - b.date);
                // console.log(sortedActivities);
                this.events = sortedActivities;
                this.isLoaded = true;
            });
        }
        else {
            this.sub1 = this.eventService.getEventByProjectId(this.projectId)
                .subscribe(x => {
                x.filter(ev => ev.date = new Date(ev.date));
                // @ts-ignore
                const sortedActivities = x.sort((a, b) => a.date - b.date);
                this.events = sortedActivities;
                this.isLoaded = true;
            });
        }
    }
    ngAfterViewInit() {
        if (this.print === true) {
            this.fileName = this.printName + '(history).pdf';
            setTimeout(() => {
                if (this.isLoaded === true) {
                    this.exportToPDF();
                }
            }, 3000);
        }
    }
    onGridSelectionChange(event) {
        this.selectedRow = event.selectedRows[0].dataItem;
        this.isRowSelected = true;
    }
    openDialog(value, isNew, isDisabled) {
        const dialogRef = this.dialog.open(_edit_history_form_edit_history_form_component__WEBPACK_IMPORTED_MODULE_2__["EditHistoryFormComponent"], {
            data: {
                isNew,
                value,
                isDisabled,
                project: this.projectId
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != null) {
                this.saveHandler(result, isNew);
            }
        });
    }
    addHandler() {
        this.editDataItem = new _shared_models_event_model__WEBPACK_IMPORTED_MODULE_1__["HistoryEvent"]();
        this.isNew = true;
        this.openDialog(this.editDataItem, this.isNew);
    }
    editHandler(isDisabled) {
        this.isNew = false;
        this.openDialog(this.selectedRow, this.isNew, isDisabled);
    }
    removeHandler() {
        this.eventService.deleteEvent(this.selectedRow._id).subscribe(() => this.onRefresh());
    }
    saveHandler(result, isNew) {
        if (isNew === true) {
            this.eventService.addEvent(result).subscribe(() => this.onRefresh());
        }
        else if (isNew === false) {
            this.eventService.updateEvent(result).subscribe(() => this.onRefresh());
        }
    }
    exportToPDF() {
        this.grid.saveAsPDF();
        this.refresh.emit(true);
    }
    onRefresh() {
        this.isLoaded = false;
        this.refresh.emit(true);
        this.ngOnInit();
    }
    getClass(item) {
        return {
            label: true,
            'label-danger': item.type === 'OUTCOME',
            'label-success': item.type === 'INCOME'
        };
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }
}
HistoryPageComponent.ɵfac = function HistoryPageComponent_Factory(t) { return new (t || HistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
HistoryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryPageComponent, selectors: [["app-history-page"]], viewQuery: function HistoryPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, inputs: { projectId: "projectId", projectName: "projectName", print: "print", printName: "printName" }, outputs: { refresh: "refresh" }, decls: 3, vars: 3, consts: [["class", "title-block", 4, "ngIf"], ["style", "margin-left: 47%;", 4, "ngIf"], [3, "kendoGridBinding", "height", "selectable", "pageable", "pageSize", "selectionChange", "add", "edit", "remove", 4, "ngIf"], [1, "title-block"], [1, "title", "pull-left"], [1, "sparkline", "bar"], [2, "margin-left", "47%"], [3, "kendoGridBinding", "selectable", "pageable", "pageSize", "selectionChange", "add", "edit", "remove"], ["grid", "kendoGrid"], ["kendoGridToolbarTemplate", ""], ["field", "amount", "title", "Amount", "width", "120", 3, "headerStyle"], ["field", "bill", "title", "Bill", "width", "120", 3, "headerStyle"], ["field", "date", "title", "Date", "width", "120", 3, "format", "headerStyle"], ["field", "project", "title", "Project", "width", "120", 3, "headerStyle", 4, "ngIf"], ["field", "category", "title", "Category", "width", "130", 3, "headerStyle"], ["field", "type", "title", "Type", "width", "120", 3, "headerStyle"], ["kendoGridCellTemplate", ""], ["paperSize", "A4", 3, "fileName", "allPages", "repeatHeaders", "landscape", "scale"], ["top", "2cm", "left", "1cm", "right", "1cm", "bottom", "2cm"], ["kendoGridPDFTemplate", ""], ["kendoGridAddCommand", "", 3, "primary"], ["kendoButton", "", 3, "primary", "disabled", "click"], ["kendoGridEditCommand", "", 3, "primary", "disabled"], ["kendoGridRemoveCommand", "", 3, "primary", "disabled"], ["field", "project", "title", "Project", "width", "120", 3, "headerStyle"], [3, "ngClass"], [1, "page-template"], [1, "header1"], [1, "footer1"]], template: function HistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HistoryPageComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistoryPageComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoryPageComponent_kendo_grid_2_Template, 13, 25, "kendo-grid", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectId === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["DataBindingDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["CellTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["PDFComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["PDFMarginComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["PDFTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["AddCommandDirective"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["FocusableDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["EditCommandDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["RemoveCommandDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.whole-cell[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 12px;\n  \n}\n\n.button-right[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 6px;\n}\n\n  .k-grid tr.k-state-selected > td {\n  background-color: DarkGrey;\n  font-weight: 500;\n}\n\napp-history-page[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.page-template[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.page-template[_ngcontent-%COMP%]   .header1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  right: 30px;\n  border-bottom: 1px solid #362e88;\n  color: black;\n  background-color: white;\n}\n\n.page-template[_ngcontent-%COMP%]   .footer1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  right: 30px;\n  border-top: 1px solid #362e88;\n  text-align: center;\n  color: #362e88;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hpc3RvcnktcGFnZS9oaXN0b3J5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFBbUIscUJBQUE7QUFFckI7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2hpc3RvcnktcGFnZS9oaXN0b3J5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2hvbGUtY2VsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTJweDsgLyogZGVwZW5kcyBvbiB0aGVtZSAqL1xufVxuXG4uYnV0dG9uLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG46Om5nLWRlZXAgLmstZ3JpZCB0ci5rLXN0YXRlLXNlbGVjdGVkID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JleTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYXBwLWhpc3RvcnktcGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtdGVtcGxhdGUge1xuICAvL2ZvbnQtZmFtaWx5OiBcIkRlamFWdSBTYW5zXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5wYWdlLXRlbXBsYXRlIC5oZWFkZXIxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM2MmU4ODtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2UtdGVtcGxhdGUgLmZvb3RlcjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzYyZTg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzYyZTg4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history-page',
                templateUrl: './history-page.component.html',
                styleUrls: ['./history-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { projectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projectName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['grid']
        }] }); })();


/***/ }),

/***/ "56VU":
/*!************************************************************!*\
  !*** ./src/app/system/shared/services/category.service.ts ***!
  \************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _shared_core_base_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/core/base-api */ "BC34");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CategoriesService extends _shared_core_base_api__WEBPACK_IMPORTED_MODULE_0__["BaseApi"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    addCategory(category) {
        return this.post('categories', category);
    }
    getCategories() {
        return this.get('categories');
    }
    updateCategory(category) {
        return this.put(`categories/${category._id}`, category);
    }
    deleteCategory(id) {
        return this.delete(`categories/${id}`);
    }
    getCategoryById(id) {
        return this.get(`categories/${id}`);
    }
    getCategoryByProjectId(id) {
        return this.get(`categories/pro/${id}`);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7/C4":
/*!*********************************************************!*\
  !*** ./src/app/system/shared/services/event.service.ts ***!
  \*********************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_core_base_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/core/base-api */ "BC34");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class EventsService extends _shared_core_base_api__WEBPACK_IMPORTED_MODULE_1__["BaseApi"] {
    constructor(http) {
        super(http);
        this.http = http;
    }
    addEvent(event) {
        return this.post('events', event);
    }
    getEvents() {
        return this.get('events');
    }
    getEventById(id) {
        return this.get(`events/${id}`);
    }
    deleteEvent(id) {
        return this.delete(`events/${id}`);
    }
    updateEvent(event) {
        return this.put(`events/${event._id}`, event);
    }
    getEventByProjectId(id) {
        return this.get(`events/pro/${id}`);
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "70oj":
/*!************************************************!*\
  !*** ./src/app/shared/models/message.model.ts ***!
  \************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzdA":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthorizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 10, vars: 0, consts: [[1, "auth"], [1, "auth-container"], [1, "card"], [1, "auth-header"], [1, "auth-title"], [1, "logo"], [1, "fas", "fa-user-tie"], [1, "auth-content"]], template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Money Manger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".auth[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  background-image: url('new-york-city.jpg');\n  background-size: 100% 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.auth-container[_ngcontent-%COMP%] {\n  width: 450px;\n  min-height: 330px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n}\n\n.auth-container[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid #52bcd3;\n}\n\n.auth-container[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  color: #97a4b1;\n  padding: 20px;\n  line-height: 30px;\n  font-size: 26px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.auth-container[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%] {\n  padding: 30px 50px;\n  min-height: 260px;\n}\n\n.auth-container[_ngcontent-%COMP%]   .forgot-btn[_ngcontent-%COMP%] {\n  line-height: 28px;\n}\n\n.auth-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.auth-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\n.auth-container[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4f5f6f;\n}\n\n@media (max-width: 767px) {\n  .auth-container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    left: 0;\n    top: 0;\n    transform: inherit;\n    margin: 0;\n    margin-bottom: 10px;\n  }\n\n  .auth-container[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBRUEsa0JBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9uZXcteW9yay1jaXR5LmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvXG59XG5cbi5hdXRoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWluLWhlaWdodDogMzMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSlcbn1cblxuLmF1dGgtY29udGFpbmVyIC5hdXRoLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MmJjZDNcbn1cblxuLmF1dGgtY29udGFpbmVyIC5hdXRoLXRpdGxlIHtcbiAgY29sb3I6ICM5N2E0YjE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMFxufVxuXG4uYXV0aC1jb250YWluZXIgLmF1dGgtY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgbWluLWhlaWdodDogMjYwcHhcbn1cblxuLmF1dGgtY29udGFpbmVyIC5mb3Jnb3QtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDI4cHhcbn1cblxuLmF1dGgtY29udGFpbmVyIC5jaGVja2JveCBsYWJlbCB7XG4gIHBhZGRpbmc6IDBcbn1cblxuLmF1dGgtY29udGFpbmVyIC5jaGVja2JveCBhIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wXG59XG5cbi5hdXRoLWNvbnRhaW5lciAuY2hlY2tib3ggc3BhbiB7XG4gIGNvbG9yOiAjNGY1ZjZmXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgfVxuXG4gIC5hdXRoLWNvbnRhaW5lciAuYXV0aC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHhcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorization',
                templateUrl: './authorization.component.html',
                styleUrls: ['./authorization.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BC34":
/*!*****************************************!*\
  !*** ./src/app/shared/core/base-api.ts ***!
  \*****************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BaseApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // private baseUrl = 'http://localhost:5000/api/';
        // private baseUrl = 'http://192.168.0.11:5000/api/';
        this.baseUrl = '/api/';
    }
    static getHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: `jwt ${JSON.parse(localStorage.getItem('token'))}`,
            user: JSON.parse(localStorage.getItem('user'))
        });
    }
    getUrl(url = '') {
        return this.baseUrl + url;
    }
    get(url = '') {
        return this.httpClient.get(this.getUrl(url), {
            headers: BaseApi.getHeaders()
        });
    }
    post(url = '', data = {}) {
        return this.httpClient.post(this.getUrl(url), data, {
            headers: BaseApi.getHeaders()
        });
    }
    put(url = '', data = {}) {
        return this.httpClient.put(this.getUrl(url), data, {
            headers: BaseApi.getHeaders()
        });
    }
    delete(url = '') {
        return this.httpClient.delete(this.getUrl(url), {
            headers: BaseApi.getHeaders()
        });
    }
}
BaseApi.ɵfac = function BaseApi_Factory(t) { return new (t || BaseApi)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BaseApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseApi, factory: BaseApi.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseApi, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "CCYV":
/*!**************************************************************************************!*\
  !*** ./src/app/system/history-page/edit-history-form/edit-history-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditHistoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHistoryFormComponent", function() { return EditHistoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_models_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/event.model */ "qMux");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/category.service */ "56VU");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/project.service */ "hLEM");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















function EditHistoryFormComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHistoryFormComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.editForm.invalid);
} }
class EditHistoryFormComponent {
    constructor(dialogRef, categoryService, projectService, data) {
        this.dialogRef = dialogRef;
        this.categoryService = categoryService;
        this.projectService = projectService;
        this.data = data;
        this.viewMod = false;
        this.listType = ['INCOME', 'OUTCOME'];
        this.listBill = ['PLN', 'EUR'];
        this.projects = [];
        this.categories = [];
        this.listCategory = [];
        this.listProject = [];
        this.readonlyPro = false;
        this.readonlyCat = false;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            bill: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        if (data.isNew === false) {
            this.editForm.patchValue({
                _id: data.value._id,
                type: data.value.type,
                amount: data.value.amount,
                project: data.value.project,
                category: data.value.category,
                date: new Date(data.value.date),
                description: data.value.description,
                bill: data.value.bill
            });
            if (data.isDisabled === true) {
                this.editForm.disable();
                this.viewMod = true;
            }
        }
    }
    ngOnInit() {
        this.sub1 = this.categoryService.getCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(categories => categories.map(category => this.categories.push(category)))).subscribe();
        if (this.data.project !== undefined) {
            console.log(this.data.project, 'qwe');
        }
        this.sub2 = this.projectService.getProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(projects => projects.map(pro => this.listProject.push(pro.name))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(projects => projects.map(pro => this.projects.push(pro)))).subscribe(() => {
            if (this.editForm.get('project').value !== null) {
                this.setValues(this.editForm.get('project').value, 'edit');
            }
            else if (this.editForm.get('project').value === null) {
                this.setValues(this.editForm.get('project').value, 'new');
            }
        });
        this.editForm.get('project').valueChanges.subscribe(projectValue => this.setValues(projectValue, 'reset'));
    }
    setValues(projectValue, mode) {
        this.listCategory = [];
        if (mode === 'reset') {
            this.editForm.get('category').setValue('');
        }
        if (mode !== 'new') {
            const project = this.projects
                .find(pro => pro.name === projectValue);
            this.editForm.get('bill').setValue(project.currency);
            this.categories.filter(category => category.projectId.includes(project._id))
                .filter(cat => this.listCategory.push(cat.name));
        }
        if (mode === 'edit') {
            // this.editForm.get('category').disable();
            // this.readonly = true;
            this.readonlyPro = true;
            this.readonlyCat = true;
        }
        if (mode === 'new' && this.data.project !== undefined) {
            const project = this.projects
                .find(pro => pro._id === this.data.project);
            this.editForm.get('project').setValue(project.name);
            // this.editForm.get('project').disable();
            this.readonlyPro = true;
        }
    }
    onSave() {
        const bus = new _shared_models_event_model__WEBPACK_IMPORTED_MODULE_3__["HistoryEvent"](this.editForm.value);
        this.dialogRef.close(bus);
    }
    onCancel() {
        this.dialogRef.close();
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
}
EditHistoryFormComponent.ɵfac = function EditHistoryFormComponent_Factory(t) { return new (t || EditHistoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditHistoryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditHistoryFormComponent, selectors: [["app-edit-history-form"]], decls: 47, vars: 13, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col", "col-lg-6"], [1, "form-group"], ["for", "project", 1, "control-label"], ["formControlName", "project", "width", "100", 3, "data", "readonly"], ["for", "category", 1, "control-label"], ["formControlName", "category", "width", "100", 3, "data", "readonly"], ["for", "amount", 1, "control-label"], ["formControlName", "amount", 3, "min", "autoCorrect"], ["for", "bill", 1, "control-label"], ["formControlName", "bill", "width", "100", "readonly", "true", 3, "data"], ["for", "type", 1, "control-label"], ["formControlName", "type", "width", "100", 3, "data"], ["for", "date", 1, "control-label"], ["formControlName", "date", 3, "format"], [1, "col", "col-lg-12"], ["for", "description", 1, "control-label"], ["type", "text", "formControlName", "description", 1, "k-textbox"], ["mat-dialog-actions", ""], ["mat-button", "", 2, "width", "48%", 3, "click"], ["mat-button", "", "style", "width: 48%", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 2, "width", "48%", 3, "disabled", "click"]], template: function EditHistoryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-dropdownlist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "kendo-dropdownlist", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "kendo-numerictextbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "kendo-dropdownlist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "kendo-dropdownlist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "kendo-datepicker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHistoryFormComponent_Template_button_click_44_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EditHistoryFormComponent_button_46_Template, 2, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.isNew ? "Add new Event" : "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listProject)("readonly", ctx.readonlyPro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listCategory)("readonly", ctx.readonlyCat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listBill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", "dd-MMM-yyyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.viewMod ? "Close" : "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewMod);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["NumericTextBoxComponent"], _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_9__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: ["input[type=text][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.k-dropdown[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 200px;\n}\n\n.k-dateinput[_ngcontent-%COMP%], .k-datepicker[_ngcontent-%COMP%], .k-datetimepicker[_ngcontent-%COMP%], .k-timepicker[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 200px;\n}\n\n.k-numerictextbox[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hpc3RvcnktcGFnZS9lZGl0LWhpc3RvcnktZm9ybS9lZGl0LWhpc3RvcnktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQyxXQUFBO0FBRW5DOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vaGlzdG9yeS1wYWdlL2VkaXQtaGlzdG9yeS1mb3JtL2VkaXQtaGlzdG9yeS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgbWF0LWZvcm0tZmllbGQgeyB3aWR0aDogMTAwJTsgfVxuXG4uay1kcm9wZG93biwgLmstZHJvcGRvd250cmVlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuXG4uay1kYXRlaW5wdXQsIC5rLWRhdGVwaWNrZXIsIC5rLWRhdGV0aW1lcGlja2VyLCAuay10aW1lcGlja2VyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmstbnVtZXJpY3RleHRib3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditHistoryFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-history-form',
                templateUrl: './edit-history-form.component.html',
                styleUrls: ['./edit-history-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] }, { type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "F1JP":
/*!**********************************************************************!*\
  !*** ./src/app/authorization/registration/registration.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/user.model */ "KJJU");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function RegistrationComponent_span_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email cannot be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the correct email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email already taken.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_span_7_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_span_7_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_span_7_span_3_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email")["errors"]["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email")["errors"]["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email")["errors"]["sameEmail"]);
} }
function RegistrationComponent_span_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password cannot be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_span_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" The password must contain at least ", ctx_r7.form.get("password")["errors"]["minlength"]["requiredLength"], " characters. Now ", ctx_r7.form.get("password")["errors"]["minlength"]["actualLength"], " ");
} }
function RegistrationComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegistrationComponent_span_12_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_span_12_span_2_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password")["errors"]["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password")["errors"]["minlength"] && ctx_r1.form.get("password")["errors"]["minlength"]["requiredLength"]);
} }
function RegistrationComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company name cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class RegistrationComponent {
    constructor(usersService, router, snackBar) {
        this.usersService = usersService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            agree: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue])
        });
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 7000, verticalPosition: 'bottom'
        });
    }
    onSubmit() {
        const { email, password, name } = this.form.value;
        const user = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](email, password, name);
        this.usersService.createNewUser(user)
            .subscribe(() => {
            this.router.navigate(['/login'], { queryParams: {
                    nowCanLogin: true
                }
            });
        }, (err) => {
            this.openSnackBar(err.error.message);
            this.form.reset();
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 30, vars: 18, consts: [[1, "text-xs-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "email"], ["id", "email", "placeholder", "Enter your email", "formControlName", "email"], ["class", "form-help-text", 4, "ngIf"], ["for", "password"], ["id", "password", "placeholder", "Enter your password", "formControlName", "password"], ["for", "name"], ["id", "name", "placeholder", "Enter your company name", "formControlName", "name"], ["id", "agree", "formControlName", "agree", "color", "primary"], [1, "form-group"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "width", "100%", 3, "disabled"], [1, "text-muted", "text-xs-center"], [3, "routerLink"], [1, "form-help-text"], [4, "ngIf"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registration for access...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-textbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegistrationComponent_span_7_Template, 4, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "kendo-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_span_12_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "kendo-textbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegistrationComponent_span_17_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I agree with the rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign in!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.form.get("name").invalid && ctx.form.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid && ctx.form.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.form.get("agree").invalid && ctx.form.get("agree").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/login");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["TextBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".k-textbox[_ngcontent-%COMP%] {\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstdGV4dGJveCB7XG4gIHdpZHRoOiAzNTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.scss']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Gyw8":
/*!*******************************************************!*\
  !*** ./src/app/system/shared/models/project.model.ts ***!
  \*******************************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor(item) {
        if (item != null) {
            this._id = item._id;
            this.name = item.name;
            this.earnings = item.earnings;
            this.consumption = item.consumption;
            this.profit = item.profit;
            this.plannedProfit = item.plannedProfit;
            this.relevance = item.relevance;
            this.currency = item.currency;
            this.active = item.active;
            this.userId = item.userId;
        }
    }
}


/***/ }),

/***/ "HHjX":
/*!***************************************************************************!*\
  !*** ./src/app/system/project/project-charts/project-charts.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectChartsComponent", function() { return ProjectChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");



const _c0 = function (a0) { return [a0, 400]; };
class ProjectChartsComponent {
    constructor() {
        this.colorScheme = {
            domain: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF']
        };
    }
    ngOnInit() {
    }
}
ProjectChartsComponent.ɵfac = function ProjectChartsComponent_Factory(t) { return new (t || ProjectChartsComponent)(); };
ProjectChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectChartsComponent, selectors: [["app-project-charts"]], inputs: { data: "data" }, decls: 3, vars: 11, consts: [[1, "chart-center"], ["containerRef", ""], [3, "view", "animations", "results", "legend", "scheme", "legendPosition", "explodeSlices", "labels", "doughnut"]], template: function ProjectChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-charts-pie-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, _r0.offsetWidth))("animations", true)("results", ctx.data)("legend", true)("scheme", ctx.colorScheme)("legendPosition", "below")("explodeSlices", false)("labels", true)("doughnut", false);
    } }, directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"]], styles: [".chart-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1jaGFydHMvcHJvamVjdC1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9wcm9qZWN0L3Byb2plY3QtY2hhcnRzL3Byb2plY3QtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-charts',
                templateUrl: './project-charts.component.html',
                styleUrls: ['./project-charts.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JTzZ":
/*!******************************************************************************!*\
  !*** ./src/app/system/project/project-detail/category/category.component.ts ***!
  \******************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/category.model */ "qYEU");
/* harmony import */ var _edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-category-form/edit-category-form.component */ "VJnU");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/category.service */ "56VU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "WG3B");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");









const _c0 = ["grid"];
function CategoryComponent_kendo_grid_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_kendo_grid_0_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.editHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_kendo_grid_0_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.removeHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r2.isRowSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !(ctx_r2.isRowSelected && ctx_r2.isSelectedRowBlank));
} }
function CategoryComponent_kendo_grid_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNum_r7 = ctx.pageNum;
    const totalPages_r8 = ctx.totalPages;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.projectName, " Report (categories) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Page ", pageNum_r7, " of ", totalPages_r8, " ");
} }
const _c1 = function () { return { enabled: true }; };
const _c2 = function () { return { "font-size": "14px" }; };
function CategoryComponent_kendo_grid_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-grid", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CategoryComponent_kendo_grid_0_Template_kendo_grid_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onGridSelectionChange($event); })("add", function CategoryComponent_kendo_grid_0_Template_kendo_grid_add_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryComponent_kendo_grid_0_ng_template_2_Template, 6, 5, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "kendo-grid-column", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "kendo-grid-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "kendo-grid-column", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "kendo-grid-pdf", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "kendo-grid-pdf-margin", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryComponent_kendo_grid_0_ng_template_8_Template, 5, 3, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 458, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.categories)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fileName", ctx_r0.fileName)("repeatHeaders", true)("landscape", false)("scale", 1);
} }
class CategoryComponent {
    constructor(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoaded = false;
        this.isRowSelected = false;
        this.isSelectedRowBlank = false;
    }
    ngOnInit() {
        this.sub1 = this.categoryService.getCategoryByProjectId(this.projectId).subscribe((categories) => {
            this.categories = categories;
            this.isLoaded = true;
        });
    }
    ngAfterViewInit() {
        if (this.print === true) {
            this.fileName = this.printName + '(category).pdf';
            setTimeout(() => {
                if (this.isLoaded === true) {
                    this.exportToPDF();
                }
            }, 3000);
        }
    }
    exportToPDF() {
        this.grid.saveAsPDF();
        this.refresh.emit(true);
    }
    onGridSelectionChange(event) {
        this.selectedRow = event.selectedRows[0].dataItem;
        this.isSelectedRowBlank = this.selectedRow.income === 0 && this.selectedRow.outcome === 0;
        this.isRowSelected = true;
    }
    openDialog(value, isNew) {
        const dialogRef = this.dialog.open(_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_2__["EditCategoryFormComponent"], {
            data: {
                isNew,
                value
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != null) {
                this.saveHandler(result, isNew);
            }
        });
    }
    addHandler() {
        this.editDataItem = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]();
        this.isNew = true;
        this.openDialog(this.editDataItem, this.isNew);
    }
    editHandler() {
        this.isNew = false;
        this.openDialog(this.selectedRow, this.isNew);
    }
    removeHandler() {
        this.categoryService.deleteCategory(this.selectedRow._id).subscribe(() => this.onRefresh());
    }
    saveHandler(result, isNew) {
        if (isNew === true) {
            result.projectId = this.projectId;
            this.categoryService.addCategory(result).subscribe(() => this.onRefresh());
        }
        else if (isNew === false) {
            this.categoryService.updateCategory(result).subscribe(() => this.onRefresh());
        }
    }
    onRefresh() {
        this.isLoaded = false;
        this.refresh.emit(true);
        this.ngOnInit();
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], viewQuery: function CategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grid = _t.first);
    } }, inputs: { projectId: "projectId", projectName: "projectName", printName: "printName", print: "print" }, outputs: { refresh: "refresh" }, decls: 1, vars: 1, consts: [[3, "data", "height", "selectable", "selectionChange", "add", 4, "ngIf"], [3, "data", "selectable", "selectionChange", "add"], ["grid", "kendoGrid"], ["kendoGridToolbarTemplate", ""], ["field", "name", "title", "Name", "width", "100", 3, "headerStyle"], ["field", "income", "title", "Income", "width", "110", 3, "headerStyle"], ["field", "outcome", "title", "Outcome", "width", "115", 3, "headerStyle"], ["paperSize", "A4", 3, "fileName", "repeatHeaders", "landscape", "scale"], ["top", "2cm", "left", "1cm", "right", "1cm", "bottom", "2cm"], ["kendoGridPDFTemplate", ""], ["kendoGridAddCommand", "", 3, "primary"], ["kendoButton", "", 3, "primary", "disabled", "click"], [1, "page-template"], [1, "header1"], [1, "footer1"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryComponent_kendo_grid_0_Template, 9, 15, "kendo-grid", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["PDFComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["PDFMarginComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["PDFTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["AddCommandDirective"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_7__["Button"]], styles: [".page-template[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.page-template[_ngcontent-%COMP%]   .header1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  right: 30px;\n  border-bottom: 1px solid #362e88;\n  color: black;\n  background-color: white;\n}\n\n.page-template[_ngcontent-%COMP%]   .footer1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  right: 30px;\n  border-top: 1px solid #362e88;\n  text-align: center;\n  color: #362e88;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1kZXRhaWwvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9wcm9qZWN0L3Byb2plY3QtZGV0YWlsL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGVtcGxhdGUge1xuICAvL2ZvbnQtZmFtaWx5OiBcIkRlamFWdSBTYW5zXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5wYWdlLXRlbXBsYXRlIC5oZWFkZXIxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM2MmU4ODtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2UtdGVtcGxhdGUgLmZvb3RlcjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzYyZTg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzYyZTg4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return [{ type: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { projectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projectName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['grid']
        }] }); })();


/***/ }),

/***/ "Js9C":
/*!*****************************************************!*\
  !*** ./src/app/system/project/project.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/project.model */ "Gyw8");
/* harmony import */ var _project_edit_form_project_edit_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-edit-form/project-edit-form.component */ "qBCg");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/project.service */ "hLEM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "WG3B");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");












function ProjectComponent_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
} }
function ProjectComponent_kendo_grid_8_ng_template_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_kendo_grid_8_ng_template_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.removeHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
} }
function ProjectComponent_kendo_grid_8_ng_template_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_kendo_grid_8_ng_template_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.closeProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
} }
function ProjectComponent_kendo_grid_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_kendo_grid_8_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_kendo_grid_8_ng_template_1_button_6_Template, 2, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectComponent_kendo_grid_8_ng_template_1_button_7_Template, 2, 1, "button", 20);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r2.isRowSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", true)("disabled", !ctx_r2.isRowSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isRowSelected && ctx_r2.isSelectedRowBlank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isRowSelected && ctx_r2.isSelectedRowActive && !ctx_r2.isSelectedRowBlank);
} }
function ProjectComponent_kendo_grid_8_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, dataItem_r15.earnings, "1.0-2"), " ", dataItem_r15.currency, " ");
} }
function ProjectComponent_kendo_grid_8_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" -", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, dataItem_r16.consumption, "1.0-2"), " ", dataItem_r16.currency, " ");
} }
function ProjectComponent_kendo_grid_8_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, dataItem_r17.profit, "1.0-2"), " ", dataItem_r17.currency, " ");
} }
const _c0 = function () { return { "font-size": "17px" }; };
function ProjectComponent_kendo_grid_8_kendo_grid_column_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kendo-grid-column", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { enabled: true }; };
const _c2 = function () { return { "font-size": "1.2rem" }; };
function ProjectComponent_kendo_grid_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-grid", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ProjectComponent_kendo_grid_8_Template_kendo_grid_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onGridSelectionChange($event); })("add", function ProjectComponent_kendo_grid_8_Template_kendo_grid_add_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addHandler(); })("edit", function ProjectComponent_kendo_grid_8_Template_kendo_grid_edit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.editHandler(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_kendo_grid_8_ng_template_1_Template, 8, 7, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kendo-grid-column", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "kendo-grid-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectComponent_kendo_grid_8_ng_template_4_Template, 3, 7, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "kendo-grid-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_kendo_grid_8_ng_template_6_Template, 3, 7, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "kendo-grid-column", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectComponent_kendo_grid_8_ng_template_8_Template, 3, 5, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "kendo-grid-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectComponent_kendo_grid_8_kendo_grid_column_10_Template, 1, 2, "kendo-grid-column", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.projects)("selectable", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", "# \\%")("headerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showClosed);
} }
class ProjectComponent {
    constructor(projectService, router, dialog) {
        this.projectService = projectService;
        this.router = router;
        this.dialog = dialog;
        this.isLoaded = true;
        this.isRowSelected = false;
        this.isSelectedRowBlank = false;
        this.isSelectedRowActive = false;
        this.showClosed = false;
    }
    ngOnInit() {
        if (!this.showClosed) {
            this.sub1 = this.projectService.getActiveProjects()
                .subscribe(projects => this.projects = projects);
        }
        else {
            this.sub1 = this.projectService.getProjects()
                .subscribe(projects => this.projects = projects);
        }
    }
    onGridSelectionChange(event) {
        this.selectedRow = event.selectedRows[0].dataItem;
        this.isSelectedRowBlank = this.selectedRow.earnings === 0 && this.selectedRow.consumption === 0;
        this.isSelectedRowActive = this.selectedRow.active;
        this.isRowSelected = true;
    }
    test(event) {
        // console.log(event.checked);
        this.showClosed = event.checked;
        this.onRefresh();
    }
    closeProject() {
        this.selectedRow.active = false;
        console.log(this.selectedRow);
        this.projectService.updateProject(this.selectedRow).subscribe(() => this.onRefresh());
    }
    openProject() {
        this.router.navigate(['system/project', this.selectedRow._id]);
    }
    openDialog(value, isNew) {
        const dialogRef = this.dialog.open(_project_edit_form_project_edit_form_component__WEBPACK_IMPORTED_MODULE_2__["ProjectEditFormComponent"], {
            data: {
                isNew,
                value
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != null) {
                console.log(result);
                this.saveHandler(result, isNew);
            }
        });
    }
    addHandler() {
        this.editDataItem = new _shared_models_project_model__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.isNew = true;
        this.openDialog(this.editDataItem, this.isNew);
    }
    editHandler() {
        this.isNew = false;
        this.openDialog(this.selectedRow, this.isNew);
    }
    removeHandler() {
        this.projectService.deleteProject(this.selectedRow._id).subscribe(() => this.onRefresh());
    }
    saveHandler(result, isNew) {
        if (isNew === true) {
            this.projectService.addProject(result).subscribe(() => this.onRefresh());
        }
        else if (isNew === false) {
            this.projectService.updateProject(result).subscribe(() => this.onRefresh());
        }
    }
    onRefresh() {
        this.ngOnInit();
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 9, vars: 2, consts: [[1, "title-block"], [1, "title", "pull-left"], [1, "sparkline", "bar"], [1, "pull-right"], ["color", "primary", 1, "example-margin", 3, "change"], ["style", "margin-left: 47%;", 4, "ngIf"], [3, "data", "height", "selectable", "selectionChange", "add", "edit", 4, "ngIf"], [2, "margin-left", "47%"], [3, "data", "selectable", "selectionChange", "add", "edit"], ["kendoGridToolbarTemplate", ""], ["field", "name", "title", "Name", "width", "120", 3, "headerStyle"], ["field", "earnings", "title", "Earnings", "width", "125", 3, "headerStyle"], ["kendoGridCellTemplate", ""], ["field", "consumption", "title", "Consumption", "width", "160", 3, "headerStyle"], ["field", "profit", "title", "Profit", "width", "120", 3, "headerStyle"], ["field", "relevance", "title", "Relevance", "width", "135", 3, "format", "headerStyle"], ["field", "active", "title", "Active", "width", "135", 3, "headerStyle", 4, "ngIf"], ["kendoButton", "", 3, "primary", "disabled", "click"], ["kendoGridAddCommand", "", 3, "primary"], ["kendoGridEditCommand", "", 3, "primary", "disabled"], ["kendoButton", "", 3, "primary", "click", 4, "ngIf"], ["kendoButton", "", 3, "primary", "click"], ["field", "active", "title", "Active", "width", "135", 3, "headerStyle"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProjectComponent_Template_mat_slide_toggle_change_5_listener($event) { return ctx.test($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " (Show closed projects) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectComponent_kendo_grid_8_Template, 11, 17, "kendo-grid", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ToolbarTemplateDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["ColumnComponent"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["CellTemplateDirective"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_10__["Button"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["AddCommandDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["FocusableDirective"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["EditCommandDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: [".k-grid tr.k-state-selected > td {\n  background-color: DarkGrey;\n  font-weight: 500;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmstZ3JpZCB0ci5rLXN0YXRlLXNlbGVjdGVkID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JleTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "KJJU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, password, name, 
    // tslint:disable-next-line:variable-name
    _id) {
        this.email = email;
        this.password = password;
        this.name = name;
        this._id = _id;
    }
}


/***/ }),

/***/ "MtGO":
/*!***************************************************!*\
  !*** ./src/app/system/report/report.component.ts ***!
  \***************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/project.service */ "hLEM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../history-page/history-page.component */ "4pQW");
/* harmony import */ var _project_project_detail_category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../project/project-detail/category/category.component */ "JTzZ");















function ReportComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select project");
} }
function ReportComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pro_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pro_r6.name, " ");
} }
function ReportComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Done");
} }
function ReportComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-history-page", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ReportComponent_div_39_Template_app_history_page_refresh_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("print", ctx_r4.isPrintEv)("projectId", ctx_r4.proId)("printName", ctx_r4.printName)("projectName", ctx_r4.proName);
} }
function ReportComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-category", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ReportComponent_div_40_Template_app_category_refresh_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("print", ctx_r5.isPrintCat)("projectId", ctx_r5.proId)("printName", ctx_r5.printName)("projectName", ctx_r5.proName);
} }
class ReportComponent {
    // tslint:disable-next-line:variable-name
    constructor(_formBuilder, projectService, router) {
        this._formBuilder = _formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.isLinear = true;
        this.isPrintCat = false;
        this.isPrintEv = false;
        this.qwe = {
            name: 'All',
            value: 'undefined'
        };
    }
    ngOnInit() {
        this.sub1 = this.projectService.getProjects().subscribe(projects => this.pros = projects);
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    set() {
        this.printName = this.secondFormGroup.value.secondCtrl;
        if (this.firstFormGroup.value.firstCtrl === 'undefined') {
            this.proId = undefined;
            this.isPrintEv = true;
        }
        else {
            const project = this.pros.find(x => x._id === this.firstFormGroup.value.firstCtrl);
            this.proName = project.name;
            this.proId = this.firstFormGroup.value.firstCtrl;
            this.isPrintCat = true;
            this.isPrintEv = true;
        }
    }
    onRefresh() {
        setTimeout(() => {
            this.router.navigateByUrl('/system', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/system/report']);
            });
        }, 1000);
    }
    ngOnDestroy() {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 41, vars: 11, consts: [[1, "title-block"], [1, "title", "pull-left"], [1, "sparkline", "bar"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["for", "project", 1, "control-label"], ["formControlName", "firstCtrl", "required", ""], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "matStepperNext", ""], ["label", "PDF name", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "disabled", "click"], ["style", "position: absolute; left: -1000px; top: 0;", 4, "ngIf"], [2, "position", "absolute", "left", "-1000px", "top", "0"], [2, "position", "absolute", "left", "-3000px", "top", "0", 3, "print", "projectId", "printName", "projectName", "refresh"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-vertical-stepper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportComponent_ng_template_8_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportComponent_mat_option_15_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-step", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReportComponent_ng_template_31_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Are you ready to print?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_37_listener() { return ctx.set(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReportComponent_div_39_Template, 2, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReportComponent_div_40_Template, 2, 4, "div", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.qwe.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.qwe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.firstFormGroup.invalid && ctx.secondFormGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPrintEv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPrintCat);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperPrevious"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_11__["HistoryPageComponent"], _project_project_detail_category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'MoneyManager';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRI/":
/*!*********************************************************************!*\
  !*** ./src/app/system/shared/components/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");








class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.date = new Date();
    }
    ngOnInit() {
        this.user = JSON.parse(window.localStorage.getItem('user'));
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [["color", "primary"], ["mat-icon-button", "", 1, "example-icon", 3, "click"], [1, "example-app-name"], ["mode", "side"], ["snav", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Responsive App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nobis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "VJnU":
/*!***********************************************************************************************************!*\
  !*** ./src/app/system/project/project-detail/category/edit-category-form/edit-category-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryFormComponent", function() { return EditCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/models/category.model */ "qYEU");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








class EditCategoryFormComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            income: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            outcome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            projectId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        if (data.isNew === false) {
            this.editForm.patchValue({
                _id: data.value._id,
                name: data.value.name,
                income: data.value.income,
                outcome: data.value.outcome,
                projectId: data.value.projectId
            });
        }
    }
    ngOnInit() {
        if (this.data.isNew === true) {
            this.editForm.patchValue({
                income: 0,
                outcome: 0
            });
        }
    }
    onSave() {
        const category = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_3__["Category"](this.editForm.value);
        this.dialogRef.close(category);
    }
    onCancel() {
        this.dialogRef.close();
    }
}
EditCategoryFormComponent.ɵfac = function EditCategoryFormComponent_Factory(t) { return new (t || EditCategoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditCategoryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCategoryFormComponent, selectors: [["app-edit-category-form"]], decls: 26, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col", "col-lg-12"], [1, "form-group"], ["for", "name", 1, "control-label"], ["type", "text", "formControlName", "name", 1, "k-textbox"], [1, "col", "col-lg-6"], ["for", "income", 1, "control-label"], ["type", "text", "formControlName", "income", 1, "k-textbox", 3, "readonly"], ["for", "outcome", 1, "control-label"], ["type", "text", "formControlName", "outcome", 1, "k-textbox", 3, "readonly"], ["mat-dialog-actions", ""], ["mat-button", "", 2, "width", "48%", 3, "click"], ["mat-button", "", 2, "width", "48%", 3, "disabled", "click"]], template: function EditCategoryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Outcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCategoryFormComponent_Template_button_click_22_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCategoryFormComponent_Template_button_click_24_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.isNew ? "Add new Category" : "Edit Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["input[type=text][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1kZXRhaWwvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS1mb3JtL2VkaXQtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQyxXQUFBO0FBRW5DIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1kZXRhaWwvY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS1mb3JtL2VkaXQtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIG1hdC1mb3JtLWZpZWxkIHsgd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCategoryFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-category-form',
                templateUrl: './edit-category-form.component.html',
                styleUrls: ['./edit-category-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authorization/authorization.module */ "jfod");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/authorization.service */ "bXUF");
/* harmony import */ var _system_system_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system/system.module */ "wS5z");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_8__["AuthorizationService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_6__["AuthorizationModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _system_system_module__WEBPACK_IMPORTED_MODULE_9__["SystemModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_6__["AuthorizationModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _system_system_module__WEBPACK_IMPORTED_MODULE_9__["SystemModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_6__["AuthorizationModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _system_system_module__WEBPACK_IMPORTED_MODULE_9__["SystemModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"]
                ],
                providers: [_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_8__["AuthorizationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aMdM":
/*!**************************************************************!*\
  !*** ./src/app/system/bill/bill-rate/bill-rate.component.ts ***!
  \**************************************************************/
/*! exports provided: BillRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRateComponent", function() { return BillRateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "WG3B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BillRateComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, ctx_r0.currency.rates[i_r1], ".4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currency.date);
} }
class BillRateComponent {
    constructor() {
        this.currencies = ['USD', 'EUR'];
    }
    ngOnInit() {
    }
}
BillRateComponent.ɵfac = function BillRateComponent_Factory(t) { return new (t || BillRateComponent)(); };
BillRateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillRateComponent, selectors: [["app-bill-rate"]], inputs: { currency: "currency" }, decls: 25, vars: 2, consts: [[1, "col", "col-xs-12", "col-sm-12", "col-md-6", "col-xl-6", "history-col"], [1, "card"], [1, "card-block"], [1, "title-block"], [1, "title"], [1, "row", "row-sm", "stats-container"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"]], template: function BillRateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Exchange Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BillRateComponent_tr_24_Template, 8, 6, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currency.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencies);
    } }, directives: [_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__["TableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9iaWxsL2JpbGwtcmF0ZS9iaWxsLXJhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillRateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-rate',
                templateUrl: './bill-rate.component.html',
                styleUrls: ['./bill-rate.component.scss']
            }]
    }], function () { return []; }, { currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "b7kl":
/*!********************************************************!*\
  !*** ./src/app/authorization/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/message.model */ "70oj");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_span_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email cannot be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the correct email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_span_7_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_span_7_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email")["errors"]["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email")["errors"]["email"]);
} }
function LoginComponent_span_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password cannot be empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" The password must contain at least ", ctx_r5.form.get("password")["errors"]["minlength"]["requiredLength"], " characters. Now ", ctx_r5.form.get("password")["errors"]["minlength"]["actualLength"], " ");
} }
function LoginComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_span_12_span_1_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_span_12_span_2_Template, 2, 2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password")["errors"]["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password")["errors"]["minlength"] && ctx_r1.form.get("password")["errors"]["minlength"]["requiredLength"]);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class LoginComponent {
    constructor(usersService, authService, router, route, snackBar) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.message = new _shared_models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('danger', '');
        this.route.queryParams
            .subscribe((params) => {
            if (params.nowCanLogin) {
                this.openSnackBar('Now u can login!');
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 7000, verticalPosition: 'bottom'
        });
    }
    onSubmit() {
        const formData = this.form.value;
        this.usersService.login(formData)
            .subscribe((user) => {
            this.openSnackBar('OK!');
            window.localStorage.setItem('token', JSON.stringify(user.token));
            window.localStorage.setItem('user', JSON.stringify(user.userId));
            this.authService.login();
            this.router.navigate(['/system', 'bill']);
        }, (err) => {
            this.openSnackBar(err.error.message);
            this.form.reset();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 11, consts: [[1, "text-xs-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "email"], ["id", "email", "placeholder", "Type your email here", "formControlName", "email"], ["class", "form-help-text", 4, "ngIf"], ["for", "password"], ["id", "password", "placeholder", "Type your password here", "formControlName", "password"], [1, "form-group"], ["mat-raised-button", "", "type", "submit", "color", "primary", 2, "width", "100%", 3, "disabled"], [1, "text-muted", "text-xs-center"], [3, "routerLink"], [1, "form-help-text"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in to start work...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "kendo-textbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "kendo-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Haven't you have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Register now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.form.get("email").invalid && ctx.form.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/registration");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["TextBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.k-textbox[_ngcontent-%COMP%] {\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemF0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5rLXRleHRib3gge1xuICB3aWR0aDogMzUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "bXUF":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/authorization.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
class AuthorizationService {
    constructor() {
        this.isAuthenticated = false;
    }
    login() {
        this.isAuthenticated = true;
    }
    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }
    isLoggedIn() {
        return this.isAuthenticated;
    }
}


/***/ }),

/***/ "hLEM":
/*!***********************************************************!*\
  !*** ./src/app/system/shared/services/project.service.ts ***!
  \***********************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _shared_core_base_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/core/base-api */ "BC34");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProjectService extends _shared_core_base_api__WEBPACK_IMPORTED_MODULE_0__["BaseApi"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    addProject(project) {
        return this.post('projects', project);
    }
    getProjects() {
        return this.get('projects');
    }
    getActiveProjects() {
        return this.get('projects/active');
    }
    updateProject(project) {
        return this.put(`projects/${project._id}`, project);
    }
    getProjectById(id) {
        return this.get(`projects/${id}`);
    }
    deleteProject(id) {
        return this.delete(`projects/${id}`);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jfod":
/*!*******************************************************!*\
  !*** ./src/app/authorization/authorization.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function() { return AuthorizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _authorization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.component */ "AzdA");
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization-routing.module */ "klcE");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "b7kl");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "F1JP");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");












class AuthorizationModule {
}
AuthorizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthorizationModule });
AuthorizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthorizationModule_Factory(t) { return new (t || AuthorizationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRoutingModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["InputsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthorizationModule, { declarations: [_authorization_component__WEBPACK_IMPORTED_MODULE_2__["AuthorizationComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRoutingModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["InputsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _authorization_component__WEBPACK_IMPORTED_MODULE_2__["AuthorizationComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRoutingModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_7__["InputsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "klcE":
/*!***************************************************************!*\
  !*** ./src/app/authorization/authorization-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthorizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationRoutingModule", function() { return AuthorizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authorization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization.component */ "AzdA");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "b7kl");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "F1JP");







const routes = [
    { path: '', component: _authorization_component__WEBPACK_IMPORTED_MODULE_2__["AuthorizationComponent"], children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] }
        ] }
];
class AuthorizationRoutingModule {
}
AuthorizationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthorizationRoutingModule });
AuthorizationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthorizationRoutingModule_Factory(t) { return new (t || AuthorizationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthorizationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_base_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/base-api */ "BC34");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UsersService extends _core_base_api__WEBPACK_IMPORTED_MODULE_1__["BaseApi"] {
    constructor(httpClient) {
        super(httpClient);
        this.httpClient = httpClient;
    }
    login(user) {
        return this.httpClient.post('http://bilous.website:5000/api/auth/login', user);
    }
    createNewUser(user) {
        return this.httpClient.post('http://bilous.website:5000/api/auth/register', user);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "q+5c":
/*!********************************************************************************!*\
  !*** ./src/app/system/bill/bill-transfer-form/bill-transfer-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: BillTransferFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillTransferFormComponent", function() { return BillTransferFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










class BillTransferFormComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.transferData = [];
        this.qwe = 1;
        this.transferData.push(this.data.bills[0]);
        this.transferData.push(this.data.bills[1]);
    }
    ngOnInit() {
    }
    change() {
        this.transferData.reverse();
    }
    onSave() {
        const transferEvent = {
            from: this.transferData[0],
            to: this.transferData[1],
            value: this.qwe,
            rate: this.data.currency
        };
        this.dialogRef.close(transferEvent);
    }
    onCancel() {
        this.dialogRef.close();
    }
}
BillTransferFormComponent.ɵfac = function BillTransferFormComponent_Factory(t) { return new (t || BillTransferFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
BillTransferFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillTransferFormComponent, selectors: [["app-bill-transfer-form"]], decls: 42, vars: 17, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mat-typography"], [1, "container"], [1, "row"], [1, "col", "col-xs-12", "col-sm-12", "col-md-12", "col-xl-12"], [1, "card-margin"], [1, "value"], ["mode", "determinate", "value", "100"], [1, "text-margin"], ["name", "value", 2, "margin-bottom", "15px", 3, "min", "autoCorrect", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-exchange", "fa-lg"], ["mat-dialog-actions", ""], ["mat-button", "", 2, "width", "45%", 3, "click"]], template: function BillTransferFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "kendo-numerictextbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BillTransferFormComponent_Template_kendo_numerictextbox_ngModelChange_22_listener($event) { return ctx.qwe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillTransferFormComponent_Template_button_click_23_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillTransferFormComponent_Template_button_click_38_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillTransferFormComponent_Template_button_click_40_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.transferData[0].currency, " Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 8, ctx.transferData[0].value, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rate: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 11, ctx.data.currency, "1.0-3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("autoCorrect", true)("ngModel", ctx.qwe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.transferData[1].currency, " Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 14, ctx.transferData[1].value, "1.0-2"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__["NumericTextBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["input[type=text][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-margin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.text-margin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 20px;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n\n.k-numerictextbox[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2JpbGwvYmlsbC10cmFuc2Zlci1mb3JtL2JpbGwtdHJhbnNmZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQyxXQUFBO0FBRW5DOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vYmlsbC9iaWxsLXRyYW5zZmVyLWZvcm0vYmlsbC10cmFuc2Zlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgbWF0LWZvcm0tZmllbGQgeyB3aWR0aDogMTAwJTsgfVxuXG4uY2FyZC1tYXJnaW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0LW1hcmdpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5rLW51bWVyaWN0ZXh0Ym94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillTransferFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill-transfer-form',
                templateUrl: './bill-transfer-form.component.html',
                styleUrls: ['./bill-transfer-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qBCg":
/*!*********************************************************************************!*\
  !*** ./src/app/system/project/project-edit-form/project-edit-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditFormComponent", function() { return ProjectEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_project_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/project.model */ "Gyw8");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class ProjectEditFormComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.listBill = ['PLN', 'EUR'];
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            earnings: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            consumption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            profit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            plannedProfit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            relevance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
        if (data.isNew === false) {
            this.editForm.patchValue({
                _id: data.value._id,
                name: data.value.name,
                earnings: data.value.earnings,
                consumption: data.value.consumption,
                profit: data.value.profit,
                plannedProfit: data.value.plannedProfit,
                relevance: data.value.relevance,
                currency: data.value.currency,
                active: data.value.active
            });
        }
    }
    ngOnInit() {
        console.log(this.data);
        if (this.data.isNew === true) {
            this.editForm.patchValue({
                earnings: 0,
                consumption: 0,
                profit: 0,
                relevance: 0
            });
        }
    }
    onSave() {
        const category = new _shared_models_project_model__WEBPACK_IMPORTED_MODULE_3__["Project"](this.editForm.value);
        this.dialogRef.close(category);
    }
    onCancel() {
        this.dialogRef.close();
    }
}
ProjectEditFormComponent.ɵfac = function ProjectEditFormComponent_Factory(t) { return new (t || ProjectEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProjectEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectEditFormComponent, selectors: [["app-project-edit-form"]], decls: 47, vars: 11, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", "", 3, "formGroup"], [1, "row"], [1, "col", "col-lg-4"], [1, "form-group"], ["for", "name", 1, "control-label"], ["type", "text", "formControlName", "name", 1, "k-textbox"], ["for", "currency", 1, "control-label"], ["formControlName", "currency", "width", "100", 3, "data", "readonly"], ["for", "plannedProfit", 1, "control-label"], ["formControlName", "plannedProfit", 3, "min", "autoCorrect"], [1, "col", "col-lg-6"], ["for", "earnings", 1, "control-label"], ["type", "text", "formControlName", "earnings", 1, "k-textbox", 3, "readonly"], ["for", "consumption", 1, "control-label"], ["type", "text", "formControlName", "consumption", 1, "k-textbox", 3, "readonly"], ["for", "profit", 1, "control-label"], ["formControlName", "profit", 3, "readonly"], ["for", "relevance", 1, "control-label"], ["formControlName", "relevance", 3, "readonly"], ["mat-dialog-actions", ""], ["mat-button", "", 2, "width", "48%", 3, "click"], ["mat-button", "", 2, "width", "48%", 3, "disabled", "click"]], template: function ProjectEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "kendo-dropdownlist", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Planned Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "kendo-numerictextbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Consumption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "kendo-numerictextbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Relevance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "kendo-numerictextbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectEditFormComponent_Template_button_click_43_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectEditFormComponent_Template_button_click_45_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.isNew ? "Add new Project" : "Edit Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.listBill)("readonly", !ctx.data.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("autoCorrect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownListComponent"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_5__["NumericTextBoxComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["input[type=text][_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.k-dropdown[_ngcontent-%COMP%], .k-dropdowntree[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 200px;\n}\n\n.k-numerictextbox[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1lZGl0LWZvcm0vcHJvamVjdC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUMsV0FBQTtBQUVuQzs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL3Byb2plY3QvcHJvamVjdC1lZGl0LWZvcm0vcHJvamVjdC1lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLCBtYXQtZm9ybS1maWVsZCB7IHdpZHRoOiAxMDAlOyB9XG5cbi5rLWRyb3Bkb3duLCAuay1kcm9wZG93bnRyZWUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uay1udW1lcmljdGV4dGJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectEditFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-edit-form',
                templateUrl: './project-edit-form.component.html',
                styleUrls: ['./project-edit-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qIYr":
/*!***********************************************!*\
  !*** ./src/app/system/bill/bill.component.ts ***!
  \***********************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _bill_transfer_form_bill_transfer_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill-transfer-form/bill-transfer-form.component */ "q+5c");
/* harmony import */ var _shared_services_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/bill.service */ "/bBG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _bill_card_bill_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bill-card/bill-card.component */ "1W3X");
/* harmony import */ var _bill_rate_bill_rate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bill-rate/bill-rate.component */ "aMdM");











function BillComponent_mat_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} }
function BillComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bill-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-bill-rate", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bill", ctx_r1.bill)("currency", ctx_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currency", ctx_r1.currency);
} }
class BillComponent {
    constructor(billService, dialog) {
        this.billService = billService;
        this.dialog = dialog;
        this.isLoaded = false;
    }
    ngOnInit() {
        this.sub1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.billService.getBill(), this.billService.getCurrency()).subscribe((data) => {
            this.bill = data[0];
            this.currency = data[1];
            this.isLoaded = true;
        });
    }
    onRefresh() {
        this.isLoaded = false;
        this.ngOnInit();
    }
    transfer() {
        const { rates } = this.currency;
        const qwe = this.bill;
        const dialogRef = this.dialog.open(_bill_transfer_form_bill_transfer_form_component__WEBPACK_IMPORTED_MODULE_2__["BillTransferFormComponent"], {
            data: {
                bills: qwe,
                currency: rates.EUR
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != null) {
                this.billService.transferBill(result).subscribe(() => this.onRefresh());
            }
        });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
}
BillComponent.ɵfac = function BillComponent_Factory(t) { return new (t || BillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_bill_service__WEBPACK_IMPORTED_MODULE_3__["BillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
BillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillComponent, selectors: [["app-bill"]], decls: 13, vars: 2, consts: [[1, "pull-left"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-exchange", "fa-lg"], [1, "pull-right"], [1, "fa", "fa-refresh", "fa-lg"], [1, "title-block"], [1, "title", "pull-left"], [1, "sparkline", "bar"], [1, "section"], ["style", "margin-left: 47%;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [2, "margin-left", "47%"], [1, "row"], [3, "bill", "currency"], [3, "currency"]], template: function BillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillComponent_Template_button_click_1_listener() { return ctx.transfer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillComponent_Template_button_click_4_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Bill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BillComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BillComponent_div_12_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _bill_card_bill_card_component__WEBPACK_IMPORTED_MODULE_8__["BillCardComponent"], _bill_rate_bill_rate_component__WEBPACK_IMPORTED_MODULE_9__["BillRateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9iaWxsL2JpbGwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bill',
                templateUrl: './bill.component.html',
                styleUrls: ['./bill.component.scss']
            }]
    }], function () { return [{ type: _shared_services_bill_service__WEBPACK_IMPORTED_MODULE_3__["BillService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "qMux":
/*!*****************************************************!*\
  !*** ./src/app/system/shared/models/event.model.ts ***!
  \*****************************************************/
/*! exports provided: HistoryEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryEvent", function() { return HistoryEvent; });
class HistoryEvent {
    constructor(item) {
        if (item != null) {
            this._id = item._id;
            this.type = item.type;
            this.amount = item.amount;
            this.project = item.project;
            this.category = item.category;
            this.date = item.date;
            this.bill = item.bill;
            this.description = item.description;
            this.userId = item.userId;
        }
    }
}


/***/ }),

/***/ "qYEU":
/*!********************************************************!*\
  !*** ./src/app/system/shared/models/category.model.ts ***!
  \********************************************************/
/*! exports provided: Category, ChartCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartCategory", function() { return ChartCategory; });
class Category {
    constructor(item) {
        if (item != null) {
            this._id = item._id;
            this.name = item.name;
            this.income = item.income;
            this.outcome = item.outcome;
            this.projectId = item.projectId;
            this.userId = item.userId;
        }
    }
}
class ChartCategory {
    constructor(category, type) {
        if (category != null) {
            if (type === 'income') {
                this.name = category.name;
                this.value = category.income;
            }
            else if (type === 'outcome') {
                this.name = category.name;
                this.value = category.outcome;
            }
            else {
                return null;
            }
        }
    }
}


/***/ }),

/***/ "spXI":
/*!********************************************!*\
  !*** ./src/app/system/system.component.ts ***!
  \********************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authorization.service */ "bXUF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");












const _c0 = function () { return ["/system", "bill"]; };
const _c1 = function () { return ["/system", "history"]; };
const _c2 = function () { return ["/system", "project"]; };
const _c3 = function () { return ["/system", "report"]; };
class SystemComponent {
    constructor(changeDetectorRef, media, authService, router) {
        this.authService = authService;
        this.router = router;
        this.date = new Date();
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
SystemComponent.ɵfac = function SystemComponent_Factory(t) { return new (t || SystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SystemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemComponent, selectors: [["app-system"]], decls: 42, vars: 13, consts: [[1, "main-wrapper"], [1, "app"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", "aria-label", "icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-container"], ["mode", "side", 1, "side", 3, "mode"], ["snav", ""], ["routerLinkActive", "active", 3, "routerLink"], ["mat-list-icon", ""], ["matLine", ""], [1, "content", "dashboard-page"]], template: function SystemComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Money Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_9_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Bill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "article", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n  left: 0;\n  background-color: #f0f3f6;\n  box-shadow: 0 0 3px #ccc;\n  transition: left 0.3s ease, padding-left 0.3s ease;\n  overflow: hidden;\n}\n\n.app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 110px 30px 90px 30px;\n  min-height: 100vh;\n}\n\n@media (min-width: 1200px) {\n  .app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 120px 50px 100px 50px;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 110px 30px 90px 30px;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 95px 20px 75px 20px;\n  }\n}\n\n@media (max-width: 767px) {\n  .app[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 65px 10px 65px 10px;\n  }\n}\n\n@media (max-width: 991px) {\n  .app[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n\n@media (max-width: 991px) {\n  .app.sidebar-open[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n\n.app.blank[_ngcontent-%COMP%] {\n  background-color: #667380;\n}\n\n.side[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n}\n\n.sidebar-container[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 51px;\n  width: 100%;\n  left: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.side[_ngcontent-%COMP%]   mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: MidnightBlue !important;\n  color: #fff !important;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.header-block[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3N5c3RlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBRUEsa0RBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSw4QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLDZCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsNEJBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSw0QkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGVBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxPQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLHlCQUFBO0FBTkY7O0FBUUE7RUFFRSxZQUFBO0FBTkY7O0FBU0E7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtBQVRGOztBQVlBO0VBQ0U7MEZBQUE7RUFFQSxPQUFBO0FBVEY7O0FBWUE7RUFDRTsrREFBQTtFQUVBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9zeXN0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgLy9wYWRkaW5nLWxlZnQ6IDIzMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjY7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IC4zcyBlYXNlLCBwYWRkaW5nLWxlZnQgLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGxlZnQgLjNzIGVhc2UsIHBhZGRpbmctbGVmdCAuM3MgZWFzZTtcbiAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uYXBwIC5jb250ZW50IHtcbiAgcGFkZGluZzogMTEwcHggMzBweCA5MHB4IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFwcCAuY29udGVudCB7XG4gICAgcGFkZGluZzogMTIwcHggNTBweCAxMDBweCA1MHB4XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5hcHAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDExMHB4IDMwcHggOTBweCAzMHB4XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFwcCAuY29udGVudCB7XG4gICAgcGFkZGluZzogOTVweCAyMHB4IDc1cHggMjBweFxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXBwIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiA2NXB4IDEwcHggNjVweCAxMHB4XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5hcHAge1xuICAgIHBhZGRpbmctbGVmdDogMFxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYXBwLnNpZGViYXItb3BlbiB7XG4gICAgbGVmdDogMFxuICB9XG59XG5cbi5hcHAuYmxhbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY3MzgwXG59XG4uc2lkZSB7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LDQsNCwwLjA4KTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZSBhIHtcbiAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiA1MXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuXG59XG5cbi5zaWRlIG1hdC1saXN0LWl0ZW0uYWN0aXZlICB7XG4gIGJhY2tncm91bmQtY29sb3I6IE1pZG5pZ2h0Qmx1ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1saXN0LWJhc2Uge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHhcbn1cblxuXG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-system',
                templateUrl: './system.component.html',
                styleUrls: ['./system.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }, { type: _shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wS5z":
/*!*****************************************!*\
  !*** ./src/app/system/system.module.ts ***!
  \*****************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-routing.module */ "wVTn");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.component */ "spXI");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header.component */ "TRI/");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "+iht");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill/bill.component */ "qIYr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _bill_bill_card_bill_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bill/bill-card/bill-card.component */ "1W3X");
/* harmony import */ var _shared_services_bill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/bill.service */ "/bBG");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _bill_bill_rate_bill_rate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bill/bill-rate/bill-rate.component */ "aMdM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./history-page/history-page.component */ "4pQW");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "WG3B");
/* harmony import */ var _shared_services_event_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/event.service */ "7/C4");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/category.service */ "56VU");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "yq7R");
/* harmony import */ var _history_page_edit_history_form_edit_history_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./history-page/edit-history-form/edit-history-form.component */ "CCYV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "Xm0J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "ZwAT");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "xoAz");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/services/project.service */ "hLEM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./project/project.component */ "Js9C");
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ "1EIj");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _project_project_charts_project_charts_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./project/project-charts/project-charts.component */ "HHjX");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _project_project_detail_category_category_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./project/project-detail/category/category.component */ "JTzZ");
/* harmony import */ var _project_project_detail_category_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./project/project-detail/category/edit-category-form/edit-category-form.component */ "VJnU");
/* harmony import */ var _bill_bill_transfer_form_bill_transfer_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./bill/bill-transfer-form/bill-transfer-form.component */ "q+5c");
/* harmony import */ var _project_project_edit_form_project_edit_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./project/project-edit-form/project-edit-form.component */ "qBCg");
/* harmony import */ var _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @progress/kendo-angular-pdf-export */ "L+F7");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./report/report.component */ "MtGO");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");

















































class SystemModule {
}
SystemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SystemModule });
SystemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SystemModule_Factory(t) { return new (t || SystemModule)(); }, providers: [_shared_services_bill_service__WEBPACK_IMPORTED_MODULE_13__["BillService"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["ColumnResizingService"], _shared_services_event_service__WEBPACK_IMPORTED_MODULE_20__["EventsService"], _shared_services_category_service__WEBPACK_IMPORTED_MODULE_21__["CategoriesService"], _shared_services_project_service__WEBPACK_IMPORTED_MODULE_31__["ProjectService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _system_routing_module__WEBPACK_IMPORTED_MODULE_2__["SystemRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["BodyModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__["DialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__["DropDownsModule"],
            _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_29__["DatePickerModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_30__["NumericTextBoxModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_37__["PieChartModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_43__["PDFExportModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["PDFModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_45__["MatStepperModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_46__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_47__["MatSlideToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemModule, { declarations: [_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__["BillComponent"],
        _bill_bill_card_bill_card_component__WEBPACK_IMPORTED_MODULE_12__["BillCardComponent"],
        _bill_bill_rate_bill_rate_component__WEBPACK_IMPORTED_MODULE_16__["BillRateComponent"],
        _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_18__["HistoryPageComponent"],
        _history_page_edit_history_form_edit_history_form_component__WEBPACK_IMPORTED_MODULE_23__["EditHistoryFormComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_33__["ProjectComponent"],
        _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_34__["ProjectDetailComponent"],
        _project_project_charts_project_charts_component__WEBPACK_IMPORTED_MODULE_36__["ProjectChartsComponent"],
        _project_project_detail_category_category_component__WEBPACK_IMPORTED_MODULE_39__["CategoryComponent"],
        _project_project_detail_category_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_40__["EditCategoryFormComponent"],
        _bill_bill_transfer_form_bill_transfer_form_component__WEBPACK_IMPORTED_MODULE_41__["BillTransferFormComponent"],
        _project_project_edit_form_project_edit_form_component__WEBPACK_IMPORTED_MODULE_42__["ProjectEditFormComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_44__["ReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _system_routing_module__WEBPACK_IMPORTED_MODULE_2__["SystemRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["BodyModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
        _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__["DialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__["DropDownsModule"],
        _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_29__["DatePickerModule"],
        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_30__["NumericTextBoxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_37__["PieChartModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
        _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_43__["PDFExportModule"],
        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["PDFModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_45__["MatStepperModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_46__["MatInputModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_47__["MatSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _system_routing_module__WEBPACK_IMPORTED_MODULE_2__["SystemRoutingModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["BodyModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                    _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_22__["ButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
                    _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_25__["DialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__["DropDownsModule"],
                    _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_29__["DatePickerModule"],
                    _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_30__["NumericTextBoxModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_37__["PieChartModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                    _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_43__["PDFExportModule"],
                    _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["PDFModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_45__["MatStepperModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_46__["MatInputModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_47__["MatSlideToggleModule"]
                ],
                declarations: [
                    _system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _bill_bill_component__WEBPACK_IMPORTED_MODULE_6__["BillComponent"],
                    _bill_bill_card_bill_card_component__WEBPACK_IMPORTED_MODULE_12__["BillCardComponent"],
                    _bill_bill_rate_bill_rate_component__WEBPACK_IMPORTED_MODULE_16__["BillRateComponent"],
                    _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_18__["HistoryPageComponent"],
                    _history_page_edit_history_form_edit_history_form_component__WEBPACK_IMPORTED_MODULE_23__["EditHistoryFormComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_33__["ProjectComponent"],
                    _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_34__["ProjectDetailComponent"],
                    _project_project_charts_project_charts_component__WEBPACK_IMPORTED_MODULE_36__["ProjectChartsComponent"],
                    _project_project_detail_category_category_component__WEBPACK_IMPORTED_MODULE_39__["CategoryComponent"],
                    _project_project_detail_category_edit_category_form_edit_category_form_component__WEBPACK_IMPORTED_MODULE_40__["EditCategoryFormComponent"],
                    _bill_bill_transfer_form_bill_transfer_form_component__WEBPACK_IMPORTED_MODULE_41__["BillTransferFormComponent"],
                    _project_project_edit_form_project_edit_form_component__WEBPACK_IMPORTED_MODULE_42__["ProjectEditFormComponent"],
                    _report_report_component__WEBPACK_IMPORTED_MODULE_44__["ReportComponent"]
                ],
                providers: [_shared_services_bill_service__WEBPACK_IMPORTED_MODULE_13__["BillService"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["ColumnResizingService"], _shared_services_event_service__WEBPACK_IMPORTED_MODULE_20__["EventsService"], _shared_services_category_service__WEBPACK_IMPORTED_MODULE_21__["CategoriesService"], _shared_services_project_service__WEBPACK_IMPORTED_MODULE_31__["ProjectService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wVTn":
/*!*************************************************!*\
  !*** ./src/app/system/system-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function() { return SystemRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system.component */ "spXI");
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill/bill.component */ "qIYr");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-page/history-page.component */ "4pQW");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "Js9C");
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ "1EIj");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report/report.component */ "MtGO");










const routes = [
    { path: 'system', component: _system_component__WEBPACK_IMPORTED_MODULE_2__["SystemComponent"], children: [
            { path: 'bill', component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_3__["BillComponent"] },
            { path: 'history', component: _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_4__["HistoryPageComponent"] },
            { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
            { path: 'project/:id', component: _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailComponent"] },
            { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"] }
        ] }
];
class SystemRoutingModule {
}
SystemRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SystemRoutingModule });
SystemRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SystemRoutingModule_Factory(t) { return new (t || SystemRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map