(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8Io":
/*!*******************************************************************!*\
  !*** ./src/app/shared/setting-layout/setting-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingLayoutComponent", function() { return SettingLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Util_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/storage */ "s2Rq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/auth.service */ "Cs9t");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");














function SettingLayoutComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](config_r2.active ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", config_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](config_r2.title);
} }
const _c0 = function () { return ["/reports"]; };
const _settings = [
    //{url:'/GlobalConfiguration/', title:'Global configuration', active:false},
    { url: '/ReportConfiguration/', title: 'Report configuration', active: false },
];
class SettingLayoutComponent {
    constructor(route, auth) {
        this.route = route;
        this.auth = auth;
        this.settings = _settings;
        this.user = Object(_Util_storage__WEBPACK_IMPORTED_MODULE_1__["getFromStorage"])('user');
        this.logout = () => {
            this.auth.logout();
        };
    }
    ngOnInit() {
        this.route.events.subscribe(() => {
            let _url = this.route.url.substr(0, this.route.url.lastIndexOf('/') + 1);
            this.settings.forEach(element => {
                element.active = (element.url == _url);
            });
        });
    }
}
SettingLayoutComponent.ɵfac = function SettingLayoutComponent_Factory(t) { return new (t || SettingLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
SettingLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingLayoutComponent, selectors: [["app-setting-layout"]], decls: 23, vars: 5, consts: [["color", "primary", 1, "header"], [1, "example-spacer"], ["mat-flat-button", "", "type", "button", 3, "routerLink"], ["vertical", "", 2, "height", "30px"], ["mat-flat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "subnav"], ["fxFlex", "", "fxLayout", "", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "15px", 1, "navigation-items"], [4, "ngFor", "ngForOf"], [1, "container"], ["mat-button", "", 3, "routerLink"]], template: function SettingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KPI LC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingLayoutComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingLayoutComponent_li_19_Template, 3, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user ? ctx.user.name : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.settings);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  background: transparent;\n  color: white;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-right: 14px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 7vh;\n  background: #2a699f;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #000;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 88vh;\n}\n\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  margin: 3vh;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.mat-search_icons.mat-search_icon-close[_ngcontent-%COMP%], .mat-search_icons.mat-search_icon-search[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na.active[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.subnav[_ngcontent-%COMP%] {\n  background: #000;\n  height: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NldHRpbmctbGF5b3V0L3NldHRpbmctbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDRyxXQUFBO0VBQ0EsbUJBQUE7QUFDSDs7QUFFQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQUNEOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBRUksZUFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2V0dGluZy1sYXlvdXQvc2V0dGluZy1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE0cHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbi5oZWFkZXIge1xyXG4gICBoZWlnaHQ6N3ZoO1xyXG4gICBiYWNrZ3JvdW5kOiAjMmE2OTlmO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuIGJhY2tncm91bmQ6I2ZhZmFmYTtcclxuIGNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0Ojg4dmg7XHJcblxyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGVudHtcclxuICAgIG1hcmdpbjogM3ZoO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbi5tYXQtc2VhcmNoX2ljb25zLm1hdC1zZWFyY2hfaWNvbi1jbG9zZSwgLm1hdC1zZWFyY2hfaWNvbnMubWF0LXNlYXJjaF9pY29uLXNlYXJjaFxyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogICMwMDA7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4ubmF2aWdhdGlvbi1pdGVtc3tcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdWJuYXYge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGhlaWdodDogNXZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting-layout',
                templateUrl: './setting-layout.component.html',
                styleUrls: ['./setting-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "+btF":
/*!**********************************************!*\
  !*** ./src/app/shared/Util/criteria-date.ts ***!
  \**********************************************/
/*! exports provided: CriteriaDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaDate", function() { return CriteriaDate; });
/* harmony import */ var _criteria_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criteria-base */ "WhBP");

class CriteriaDate extends _criteria_base__WEBPACK_IMPORTED_MODULE_0__["CriteriaBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'date';
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\belkamili\Documents\Visual Studio 2015\Projects\GROUPECAT\catlcr-web\src\main.ts */"zUnb");


/***/ }),

/***/ "0M3A":
/*!***********************************************!*\
  !*** ./src/app/reporting/reporting.module.ts ***!
  \***********************************************/
/*! exports provided: ReportingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingModule", function() { return ReportingModule; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/reports.component */ "xDns");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reporting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting-routing.module */ "ZL0r");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-mat-search-bar */ "oWl+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./report/report.component */ "Oou9");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
























class ReportingModule {
}
ReportingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportingModule });
ReportingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReportingModule_Factory(t) { return new (t || ReportingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_16__["NgMatSearchBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _reporting_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportingModule, { declarations: [_report_report_component__WEBPACK_IMPORTED_MODULE_20__["ReportComponent"],
        _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_16__["NgMatSearchBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _reporting_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReportingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _report_report_component__WEBPACK_IMPORTED_MODULE_20__["ReportComponent"],
                    _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_16__["NgMatSearchBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _reporting_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "0MCZ":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Util_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/storage */ "s2Rq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/auth.service */ "Cs9t");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");












const _c0 = function () { return ["/reports"]; };
function LayoutComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/ReportConfiguration"]; };
function LayoutComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class LayoutComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.notHome = true;
        this.user = Object(_Util_storage__WEBPACK_IMPORTED_MODULE_1__["getFromStorage"])('user');
        this.logout = () => {
            this.auth.logout();
        };
        this.notHome = (router.url.indexOf('/reports') === -1 || '/' !== router.url[router.url.length - 1]);
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 26, vars: 4, consts: [["color", "primary", 1, "header"], ["href", "http://frgnbwebr7.cat.groupecat.com/CATLCR/Configuration/Reports.aspx", "target", "_self", "mat-icon-button", "", "title", "Return to the old application", "aria-roledescription", "Return to the old application"], [1, "example-spacer"], ["mat-flat-button", "", "type", "button", 3, "routerLink", 4, "ngIf"], ["vertical", "", 2, "height", "30px"], ["mat-flat-button", "", "type", "button"], ["mat-flat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "container"], ["mat-flat-button", "", "type", "button", 3, "routerLink"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KPI LC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LayoutComponent_button_7_Template, 3, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LayoutComponent_button_13_Template, 3, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-sidenav-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user ? ctx.user.name : "", " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  background: transparent;\n  color: white;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-right: 14px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 7vh;\n  background: #2a699f;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 93vh;\n}\n\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  margin: 3vh;\n  overflow: hidden;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.mat-search_icons.mat-search_icon-close[_ngcontent-%COMP%], .mat-search_icons.mat-search_icon-search[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNHLFdBQUE7RUFDQSxtQkFBQTtBQUNIOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFFSSxlQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTRweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuLmhlYWRlciB7XHJcbiAgIGhlaWdodDo3dmg7XHJcbiAgIGJhY2tncm91bmQ6ICMyYTY5OWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0Ojkzdmg7XHJcblxyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGVudHtcclxuICAgIG1hcmdpbjogM3ZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4ubWF0LXNlYXJjaF9pY29ucy5tYXQtc2VhcmNoX2ljb24tY2xvc2UsIC5tYXQtc2VhcmNoX2ljb25zLm1hdC1zZWFyY2hfaWNvbi1zZWFyY2hcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "0Oce":
/*!*************************************************!*\
  !*** ./src/app/shared/models/criteria.model.ts ***!
  \*************************************************/
/*! exports provided: controlTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlTypes", function() { return controlTypes; });
const controlTypes = [
    { value: 1, text: 'Date' },
    { value: 2, text: 'Free text' },
    { value: 3, text: 'List' }
];


/***/ }),

/***/ "4DD9":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/boolean.pipe.ts ***!
  \**********************************************/
/*! exports provided: BooleanPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanPipe", function() { return BooleanPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BooleanPipe {
    transform(value) {
        return value ? 'Yes' : 'No';
    }
}
BooleanPipe.ɵfac = function BooleanPipe_Factory(t) { return new (t || BooleanPipe)(); };
BooleanPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "booleanPipe", type: BooleanPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooleanPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'booleanPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "53Ol":
/*!*************************************************************!*\
  !*** ./src/app/shared/Services/criteria-control.service.ts ***!
  \*************************************************************/
/*! exports provided: CriteriaControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaControlService", function() { return CriteriaControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CriteriaControlService {
    constructor(fb) {
        this.fb = fb;
    }
    toFormGroup(criterias) {
        const group = {};
        criterias.forEach(crit => {
            group[crit.key] = crit.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](crit.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](crit.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    }
}
CriteriaControlService.ɵfac = function CriteriaControlService_Factory(t) { return new (t || CriteriaControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CriteriaControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CriteriaControlService, factory: CriteriaControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriaControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-pass/init-pass.component */ "vCi5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "bsvf");






const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'initpass', component: _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_0__["InitPassComponent"] },
    { path: 'initpass/:code', component: _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_0__["InitPassComponent"] }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "7QTd":
/*!************************************************************************************!*\
  !*** ./src/app/setting/category-configuration/category-configuration.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryConfigurationComponent", function() { return CategoryConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CategoryConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
}
CategoryConfigurationComponent.ɵfac = function CategoryConfigurationComponent_Factory(t) { return new (t || CategoryConfigurationComponent)(); };
CategoryConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryConfigurationComponent, selectors: [["app-category-configuration"]], decls: 2, vars: 0, template: function CategoryConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category-configuration works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvY2F0ZWdvcnktY29uZmlndXJhdGlvbi9jYXRlZ29yeS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-configuration',
                templateUrl: './category-configuration.component.html',
                styleUrls: ['./category-configuration.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "850k":
/*!*****************************************************!*\
  !*** ./src/app/shared/page404/page404.component.ts ***!
  \*****************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 1, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "URL NOT FOUND");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    api: {
        //baseUrl: 'http://localhost:11514/api'
        baseUrl:'http://freqxwsql04.cat.groupecat.com/api'
    },
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

/***/ "CLWf":
/*!****************************************************!*\
  !*** ./src/app/shared/Pipes/report-status.pipe.ts ***!
  \****************************************************/
/*! exports provided: ReportStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStatusPipe", function() { return ReportStatusPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_report_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/report.model */ "YScL");



class ReportStatusPipe {
    transform(value) {
        return _models_report_model__WEBPACK_IMPORTED_MODULE_1__["reportStatus"][value];
    }
}
ReportStatusPipe.ɵfac = function ReportStatusPipe_Factory(t) { return new (t || ReportStatusPipe)(); };
ReportStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "reportStatusPipe", type: ReportStatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportStatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'reportStatusPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "Cfxq":
/*!*********************************************************************!*\
  !*** ./src/app/shared/criteria-config/criteria-config.component.ts ***!
  \*********************************************************************/
/*! exports provided: CriteriaConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaConfigComponent", function() { return CriteriaConfigComponent; });
/* harmony import */ var _models_criteria_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/criteria.model */ "0Oce");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_criteria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/criteria.service */ "b1pM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












const _c0 = ["sourceList"];
const _c1 = ["Type"];
function CriteriaConfigComponent_div_0_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r5.text);
} }
function CriteriaConfigComponent_div_0_mat_form_field_20_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.label);
} }
function CriteriaConfigComponent_div_0_mat_form_field_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Referential");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CriteriaConfigComponent_div_0_mat_form_field_20_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 20, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.form.controls.referential.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.referentials);
} }
function CriteriaConfigComponent_div_0_mat_slide_toggle_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select Multiple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r4.form.controls.multiple.value);
} }
function CriteriaConfigComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CriteriaConfigComponent_div_0_mat_option_19_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CriteriaConfigComponent_div_0_mat_form_field_20_Template, 5, 4, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CriteriaConfigComponent_div_0_mat_slide_toggle_23_Template, 2, 1, "mat-slide-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 60, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.form.controls.order.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 20, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.form.controls.label.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 20, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.form.controls.controlType.value)("compareWith", ctx_r0.attributeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0._controlTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.value == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.form.controls.required.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.value == 3);
} }
class CriteriaConfigComponent {
    constructor(criteriaService) {
        this.criteriaService = criteriaService;
        this._controlTypes = _models_criteria_model__WEBPACK_IMPORTED_MODULE_0__["controlTypes"];
        this.attributeDisplay = (attr1, attr2) => {
            if (attr1 == attr2) {
                return this._controlTypes.filter(s => s.value == attr2)[0].text;
            }
        };
    }
    ngOnInit() {
        this.criteriaService.getCriteriaReferentials().subscribe(data => {
            this.referentials = data;
        }, (jsonData) => { }, () => { });
    }
}
CriteriaConfigComponent.ɵfac = function CriteriaConfigComponent_Factory(t) { return new (t || CriteriaConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_criteria_service__WEBPACK_IMPORTED_MODULE_2__["CriteriaService"])); };
CriteriaConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CriteriaConfigComponent, selectors: [["app-criteria-config"]], viewQuery: function CriteriaConfigComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sources = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.types = _t);
    } }, inputs: { form: "form" }, decls: 1, vars: 1, consts: [["class", "criteria-config-line", "fxLayout", "row wrap", "fxLayoutGap", "15px", 3, "formGroup", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "15px", 1, "criteria-config-line", 3, "formGroup"], ["type", "hidden", "asp-for", "timestamp", "value", "form.controls.timestamp.value"], ["type", "hidden", "formControlName", "id", "value", "form.controls.id.value"], ["formControlName", "name", "type", "hidden"], ["formControlName", "reportID", "type", "hidden"], ["formControlName", "dataType", "type", "hidden"], ["appearance", "legacy"], ["matInput", "", "type", "number", "placeholder", "label", "formControlName", "order", 3, "value"], ["appearance", "fill"], ["matInput", "", "placeholder", "label", "formControlName", "label", 3, "value"], ["formControlName", "controlType", 3, "value", "compareWith"], ["Type", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 3, "width", 4, "ngIf"], ["color", "primary", "formControlName", "required", 3, "checked"], ["color", "primary", "formControlName", "multiple", 3, "checked", 4, "ngIf"], [3, "value"], ["formControlName", "referential", 3, "value"], ["color", "primary", "formControlName", "multiple", 3, "checked"]], template: function CriteriaConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CriteriaConfigComponent_div_0_Template, 24, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".criteria-config-line[_ngcontent-%COMP%] {\n  margin: 15px 0 15px 0;\n  padding: 5px;\n  background: #E7E7E7;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n  background: #fafafa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NyaXRlcmlhLWNvbmZpZy9jcml0ZXJpYS1jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcml0ZXJpYS1jb25maWcvY3JpdGVyaWEtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY3JpdGVyaWEtY29uZmlnLWxpbmUge1xyXG4gICAgbWFyZ2luOjE1cHggMCAxNXB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kIDogI0U3RTdFNztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CriteriaConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-criteria-config',
                templateUrl: './criteria-config.component.html',
                styleUrls: ['./criteria-config.component.scss']
            }]
    }], function () { return [{ type: _Services_criteria_service__WEBPACK_IMPORTED_MODULE_2__["CriteriaService"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sources: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['sourceList']
        }], types: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['Type']
        }] }); })();


/***/ }),

/***/ "CkPC":
/*!***************************************************!*\
  !*** ./src/app/shared/Services/report.service.ts ***!
  \***************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-helper.service */ "ZxkQ");



class ReportService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    updateReport(report) {
        return this.httpHelper.post(`/report/update`, report);
    }
    getReports() {
        return this.httpHelper.get(`/report`);
    }
    getCategories() {
        return this.httpHelper.get(`/report/categories`);
    }
    getReport(id, forConfig = false) {
        const href = `/report/ID/${id}/forConfig/${forConfig}`;
        return this.httpHelper.get(href);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"] }]; }, null); })();


/***/ }),

/***/ "Cs9t":
/*!*************************************************!*\
  !*** ./src/app/shared/Services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _Util_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util/storage */ "s2Rq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const API_BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.baseUrl;
class AuthService {
    constructor(_httpClient, router) {
        this._httpClient = _httpClient;
        this.router = router;
        this.authenticate = (login) => {
            const href = API_BASE_URL + '/auth/Authenticate';
            let isAuth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this._httpClient.post(href, login).subscribe((data) => {
                if (data) {
                    Object(_Util_storage__WEBPACK_IMPORTED_MODULE_3__["saveToStorage"])("user", data, true);
                    isAuth.next(true);
                }
                else {
                    isAuth.next(false);
                }
            }, error => {
                isAuth.next(error);
            });
            return isAuth;
        };
    }
    logout(redirectToLogin = true) {
        Object(_Util_storage__WEBPACK_IMPORTED_MODULE_3__["removeFromStorage"])("user");
        if (redirectToLogin) {
            this.router.navigate(['/login']);
        }
    }
    sendInitPass(value) {
        const href = API_BASE_URL + '/auth/send';
        let result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._httpClient.post(href, value).subscribe((sent) => {
            result.next(sent);
        });
        return result;
    }
    initPass(value) {
        const href = API_BASE_URL + '/auth/init';
        let result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._httpClient.post(href, value).subscribe((sent) => {
            result.next(sent);
        });
        return result;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Dx9Q":
/*!*******************************************************!*\
  !*** ./src/app/shared/criteria/criteria.component.ts ***!
  \*******************************************************/
/*! exports provided: CriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaComponent", function() { return CriteriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Services_referential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/referential.service */ "KdUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");














const _c0 = ["allSelected"];
function CriteriaComponent_div_0_mat_form_field_2_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getError(ctx_r4.criteria.key));
} }
function CriteriaComponent_div_0_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CriteriaComponent_div_0_mat_form_field_2_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.valuechanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriteriaComponent_div_0_mat_form_field_2_mat_error_4_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 80, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.criteria.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.criteria.key)("type", ctx_r1.criteria.type)("formControlName", ctx_r1.criteria.key)("required", ctx_r1.criteria.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.form.controls[ctx_r1.criteria.key].valid);
} }
function CriteriaComponent_div_0_mat_form_field_3_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CriteriaComponent_div_0_mat_form_field_3_mat_option_8_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.toggleAllSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", -1);
} }
function CriteriaComponent_div_0_mat_form_field_3_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CriteriaComponent_div_0_mat_form_field_3_mat_option_9_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.togglePerOne(ctx_r14.allSelected.viewValue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.key, " ");
} }
function CriteriaComponent_div_0_mat_form_field_3_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.getError(ctx_r9.criteria.key));
} }
function CriteriaComponent_div_0_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-mat-select-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CriteriaComponent_div_0_mat_form_field_3_mat_option_8_Template, 3, 1, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CriteriaComponent_div_0_mat_form_field_3_mat_option_9_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CriteriaComponent_div_0_mat_form_field_3_mat_error_10_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 80, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.criteria.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.criteria.key)("multiple", ctx_r2.criteria.multiple)("required", ctx_r2.criteria.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.bankMultiFilterCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filteredOptions && ctx_r2.filteredOptions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.filteredOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.form.controls[ctx_r2.criteria.key].valid);
} }
function CriteriaComponent_div_0_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CriteriaComponent_div_0_mat_form_field_4_Template_input_dateChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.dateChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 80, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.criteria.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.criteria.key)("formControlName", ctx_r3.criteria.key)("matDatepicker", _r16)("required", ctx_r3.criteria.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r16);
} }
function CriteriaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CriteriaComponent_div_0_mat_form_field_2_Template, 5, 8, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CriteriaComponent_div_0_mat_form_field_3_Template, 11, 10, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CriteriaComponent_div_0_mat_form_field_4_Template, 7, 8, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.criteria.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
} }
class CriteriaComponent {
    constructor(rs) {
        this.rs = rs;
        this.criteria = null;
        this.criteriaValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filteredOptions = [];
        this.selectedOptions = [];
        this.bankMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.getError = (field) => {
            return this.form.get(field).hasError('required') ? 'This criteria is mandatory' : '';
        };
        this.valuechanged = (event) => {
            // this.selectedOptions = [];
            // if(Array.isArray(event.value))
            //   if(!event.value.includes(-1)) {
            //     event.value.forEach(value => {
            //       if(!this.selectedOptions.includes(this.filteredOptions.find(s => s.value == value)))
            //         this.selectedOptions.push(this.filteredOptions.find(s => s.value == value));
            //     })
            //   }
            this.criteria.value = (Array.isArray(event.value) && event.value.includes(-1)) ? '-1' : event.value;
            this.criteriaValueChange.emit(this.criteria);
        };
    }
    filterBanksMulti() {
        // get the search keyword
        let search = this.bankMultiFilterCtrl.value;
        if (!search)
            return;
        else
            search = search.toLowerCase();
        this._filter(search);
    }
    ngOnInit() {
        // listen for search field value changes
        this.bankMultiFilterCtrl.valueChanges
            .subscribe(() => {
            this.filterBanksMulti();
        });
        if (this.criteria) {
            this.autoComplete = { id: this.criteria.referential, skip: 0, take: 10, predicate: '' };
            this.filteredOptions = this.criteria.options;
        }
    }
    _filter(value) {
        let options;
        this.autoComplete.predicate = value;
        this.rs.getOptions(this.autoComplete).subscribe((data) => {
            this.filteredOptions = data;
            this.selectedOptions.forEach(option => {
                if (!this.filteredOptions.find(s => s.value == option.value)) {
                    this.filteredOptions.splice(0, 0, option);
                }
            });
            if (this.allSelected.selected) {
                this.form.controls[this.criteria.key].patchValue([...this.filteredOptions.map(item => item.value), -1]);
                this.selectedOptions = this.filteredOptions;
            }
        });
    }
    dateChanged(event) {
        this.criteria.value = event.value.toDateString();
        this.criteriaValueChange.emit(this.criteria);
    }
    togglePerOne(all) {
        if (this.allSelected.selected) {
            this.allSelected.deselect();
            return false;
        }
        //  if(this.form.controls[this.criteria.key].value.length==this.filteredOptions.length)
        //    this.allSelected.select();
        this.selectedOptions = [];
        let _value = this.form.controls[this.criteria.key].value;
        if (Array.isArray(_value))
            if (!_value.includes(-1)) {
                _value.forEach(value => {
                    if (!this.selectedOptions.includes(this.filteredOptions.find(s => s.value == value)))
                        this.selectedOptions.push(this.filteredOptions.find(s => s.value == value));
                });
            }
        this.criteria.value = (Array.isArray(_value) && _value.includes(-1)) ? '-1' : _value;
        this.criteriaValueChange.emit(this.criteria);
    }
    toggleAllSelection() {
        if (this.allSelected.selected) {
            this.form.controls[this.criteria.key].patchValue([...this.filteredOptions.map(item => item.value), -1]);
        }
        else {
            this.form.controls[this.criteria.key].patchValue([]);
            this.selectedOptions = [];
        }
        let _value = this.form.controls[this.criteria.key].value;
        this.selectedOptions = [];
        if (Array.isArray(_value))
            if (!_value.includes(-1)) {
                _value.forEach(value => {
                    if (!this.selectedOptions.includes(this.filteredOptions.find(s => s.value == value)))
                        this.selectedOptions.push(this.filteredOptions.find(s => s.value == value));
                });
            }
        this.criteria.value = (Array.isArray(_value) && _value.includes(-1)) ? '-1' : _value;
        this.criteriaValueChange.emit(this.criteria);
    }
}
CriteriaComponent.ɵfac = function CriteriaComponent_Factory(t) { return new (t || CriteriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_referential_service__WEBPACK_IMPORTED_MODULE_2__["ReferentialService"])); };
CriteriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CriteriaComponent, selectors: [["app-criteria"]], viewQuery: function CriteriaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.allSelected = _t.first);
    } }, inputs: { criteria: "criteria", form: "form" }, outputs: { criteriaValueChange: "criteriaValueChange" }, decls: 1, vars: 1, consts: [["fxLayout", "column wrap", "fxLauoutAlign", "space-between center", "fxLayoutGap", "20px", 3, "formGroup", 4, "ngIf"], ["fxLayout", "column wrap", "fxLauoutAlign", "space-between center", "fxLayoutGap", "20px", 3, "formGroup"], [3, "ngSwitch"], ["appearance", "fill", 3, "width", 4, "ngSwitchCase"], ["appearance", "fill"], ["matInput", "", "placeholder", "", 3, "id", "type", "formControlName", "required", "change"], [4, "ngIf"], [3, "formControlName", "multiple", "required"], ["placeholderLabel", "search...", "noEntriesFoundLabel", "no matching record found", 3, "formControl"], ["ngxMatSelectSearchClear", ""], [3, "value", "click", 4, "ngIf"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["allSelected", ""], ["matInput", "", 3, "id", "formControlName", "matDatepicker", "required", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function CriteriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CriteriaComponent_div_0_Template, 5, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["MatSelectSearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcml0ZXJpYS9jcml0ZXJpYS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-criteria',
                templateUrl: './criteria.component.html',
                styleUrls: ['./criteria.component.scss']
            }]
    }], function () { return [{ type: _Services_referential_service__WEBPACK_IMPORTED_MODULE_2__["ReferentialService"] }]; }, { criteria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], criteriaValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], allSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['allSelected']
        }] }); })();


/***/ }),

/***/ "KdUa":
/*!********************************************************!*\
  !*** ./src/app/shared/Services/referential.service.ts ***!
  \********************************************************/
/*! exports provided: ReferentialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferentialService", function() { return ReferentialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-helper.service */ "ZxkQ");



class ReferentialService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    getOptions(model) {
        return this.httpHelper.get('/referential/options', { params: model });
    }
}
ReferentialService.ɵfac = function ReferentialService_Factory(t) { return new (t || ReferentialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"])); };
ReferentialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReferentialService, factory: ReferentialService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferentialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_helper_service__WEBPACK_IMPORTED_MODULE_1__["HttpHelperService"] }]; }, null); })();


/***/ }),

/***/ "KgFZ":
/*!***********************************************!*\
  !*** ./src/app/shared/guards/report.guard.ts ***!
  \***********************************************/
/*! exports provided: ReportGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGuard", function() { return ReportGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Util_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/storage */ "s2Rq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Services/auth.service */ "Cs9t");





class ReportGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    /*
      to see if the given route can be activated,
      this one here is checking if a user can activate authenticated routes
     */
    canActivate(route, state) {
        const user = Object(_Util_storage__WEBPACK_IMPORTED_MODULE_1__["getFromStorage"])('user');
        // for any other URL if user is logged-in then continue
        if (user && user.isAuthenticated)
            return true;
        if (state.url === '/login' || state.url.split('/').indexOf('initpass') !== -1)
            return true;
        this.router.navigate(['/login']);
        return false;
    }
    /*|
      to check if the child routes can be activated,
      in this case it is providing role guard service
     */
    canActivateChild(childRoute, state) {
        const user = Object(_Util_storage__WEBPACK_IMPORTED_MODULE_1__["getFromStorage"])('user');
        if (user) {
            // the admin role can access all routes while the other users can only access dashboard route
            if (!user.isAdmin && state.url === '/ReportConfiguration') {
                this.router.navigate(['/reports']);
                return false;
            }
            return true;
        }
        else {
            // if user is not loggedn in delete storage and navigate to login page
            this.authService.logout();
        }
        return false;
    }
}
ReportGuard.ɵfac = function ReportGuard_Factory(t) { return new (t || ReportGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ReportGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportGuard, factory: ReportGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Kx7V":
/*!********************************************************************!*\
  !*** ./src/app/setting/global-setting/global-setting.component.ts ***!
  \********************************************************************/
/*! exports provided: GlobalSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettingComponent", function() { return GlobalSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalSettingComponent {
    constructor() { }
    ngOnInit() {
    }
}
GlobalSettingComponent.ɵfac = function GlobalSettingComponent_Factory(t) { return new (t || GlobalSettingComponent)(); };
GlobalSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalSettingComponent, selectors: [["app-global-setting"]], decls: 2, vars: 0, template: function GlobalSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "global-setting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvZ2xvYmFsLXNldHRpbmcvZ2xvYmFsLXNldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalSettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-setting',
                templateUrl: './global-setting.component.html',
                styleUrls: ['./global-setting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MKPL":
/*!********************************************************************************!*\
  !*** ./src/app/setting/report-configuration/report-configuration.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReportConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportConfigurationComponent", function() { return ReportConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modals/exit-dirty/exit-dirty.component */ "XpoD");
/* harmony import */ var src_app_shared_models_report_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/report.model */ "YScL");
/* harmony import */ var src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/criteria.service */ "b1pM");
/* harmony import */ var src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Services/report.service */ "CkPC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/criteria-config/criteria-config.component */ "Cfxq");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _shared_Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/Pipes/moment.pipe */ "o2u7");

























function ReportConfigurationComponent_form_0_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", report_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r5.label);
} }
function ReportConfigurationComponent_form_0_div_19_div_28_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subreportForm_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", subreportForm_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subreportForm_r8.controls.name.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subreportForm_r8.controls.label.value);
} }
function ReportConfigurationComponent_form_0_div_19_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sub reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportConfigurationComponent_form_0_div_19_div_28_tr_8_Template, 13, 5, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.form.controls.subreports.controls);
} }
function ReportConfigurationComponent_form_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Server");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "momentPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReportConfigurationComponent_form_0_div_19_div_28_Template, 9, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.timestamp.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.label.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.reportPath.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.reportServer.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.name.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.form.controls.category.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 20, ctx_r2.form.controls.updated.value, "MMMM Do YYYY, h:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.report.subreports.length > 0);
} }
function ReportConfigurationComponent_form_0_app_criteria_config_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-criteria-config", 40);
} if (rf & 2) {
    const criteriaForm_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", criteriaForm_r10)("form", criteriaForm_r10);
} }
function ReportConfigurationComponent_form_0_mat_tab_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Schedule this report for mailing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Current month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Current year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Before x days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Before x months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Before x years");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Between x days and y days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Between x months and y months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Between x years and y years");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.report);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
} }
function ReportConfigurationComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReportConfigurationComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Report name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReportConfigurationComponent_form_0_Template_mat_select_selectionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.navigate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportConfigurationComponent_form_0_mat_option_5_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-toolbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReportConfigurationComponent_form_0_div_19_Template, 29, 23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReportConfigurationComponent_form_0_app_criteria_config_22_Template, 1, 2, "app-criteria-config", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportConfigurationComponent_form_0_mat_tab_23_Template, 25, 3, "mat-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reports);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.report);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.report);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.report);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.form.controls.criterias.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
} }
class ReportConfigurationComponent {
    constructor(cs, rs, route, _snackBar, fb, router, dialog) {
        this.cs = cs;
        this.rs = rs;
        this.route = route;
        this._snackBar = _snackBar;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.rs.getReports().subscribe(data => {
            this.reports = data;
        });
        route.params.subscribe(val => {
            this.rs.getReport(this.route.snapshot.paramMap.get('id'), true).subscribe(data => {
                this.report = data;
                this.buildForm();
            }, (jsonData) => { }, () => { });
        });
    }
    openDialog(url) {
        const dialogRef = this.dialog.open(src_app_shared_modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_2__["ExitDirtyComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            if (result == true)
                this.router.navigate([url]);
        });
    }
    ngAfterViewInit() {
    }
    navigate(event) {
        let value = event.value;
        if (value == undefined)
            return;
        let _url = `/ReportConfiguration/${value}`;
        if (this.form.dirty) {
            this.openDialog(_url);
        }
        else {
            this.router.navigate([_url]);
        }
    }
    ngOnInit() {
    }
    buildForm() {
        var criterias = this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order);
        const criteriaGroup = criterias.map(x => this.fb.group({
            timestamp: this.fb.control(x.timestamp),
            id: this.fb.control(x.id),
            label: this.fb.control(x.label, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: this.fb.control(x.name),
            controlType: this.fb.control(x.controlType, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            referential: this.fb.control(x.referential),
            multiple: this.fb.control(x.multiple),
            order: this.fb.control(x.order),
            required: this.fb.control(x.required),
            reportID: this.fb.control(x.reportID),
            dataType: this.fb.control(x.dataType)
        }));
        const subreportGroup = this.report.subreports.map(x => this.fb.group({
            label: this.fb.control(x.label, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: this.fb.control(x.name),
            parentReportID: this.fb.control(x.parentReportID),
            id: this.fb.control(x.id),
            categoryID: this.fb.control(x.categoryID),
            timestamp: this.fb.control(x.timestamp),
            reportPath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.reportPath),
            reportServer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.reportServer),
            subreport: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.subreport)
        }));
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            timestamp: this.fb.control(this.report.timestamp),
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.report.label, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.report.name, disabled: true }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.report.category.name, disabled: true }),
            updated: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.report.updatedOn, disabled: true }),
            reportPath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.report.reportPath, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            reportServer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.report.reportServer, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            subreports: this.fb.array(subreportGroup),
            criterias: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](criteriaGroup)
        });
    }
    validator(ctrl) {
        const validator = this.form.get(ctrl).validator({});
        if (validator && validator.required) {
            return true;
        }
        return false;
    }
    onSubmit() {
        Object.assign(this.report, this.form.value);
        this.report.status = src_app_shared_models_report_model__WEBPACK_IMPORTED_MODULE_3__["reportStatus"].Supported;
        this.report.updatedOn = new Date();
        this.rs.updateReport(this.report).subscribe(respons => {
            this.report = respons;
            this._snackBar.open('Successfully saved !', '', { duration: 6000, panelClass: ['alert-success'] });
        });
    }
}
ReportConfigurationComponent.ɵfac = function ReportConfigurationComponent_Factory(t) { return new (t || ReportConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__["CriteriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
ReportConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportConfigurationComponent, selectors: [["app-report-configuration"]], decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "legacy"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "report-config"], [1, "reportcard-header"], [1, "reportviewer-header"], [1, "example-spacer"], ["align", "end"], ["fxLayout", "row", "fxLayoutGap", "15px"], ["type", "submit", "mat-flat-button", "", 3, "disabled"], [1, "input-form-content"], ["label", "General", 3, "disabled"], [1, "config-container"], ["fxLayout", "row", "fxGapLayout", "20px", "style", "padding:20px 20px 20px 0", 4, "ngIf"], ["label", "Criteria", 3, "disabled"], [3, "formGroup", "form", 4, "ngFor", "ngForOf"], ["label", "Scheduler", 3, "disabled", 4, "ngIf"], [3, "value"], ["fxLayout", "row", "fxGapLayout", "20px", 2, "padding", "20px 20px 20px 0"], ["fxLayout", "column"], ["type", "hidden", "formControlName", "timestamp", 3, "value"], ["matInput", "", "formControlName", "label", "required", "", 3, "value"], ["matInput", "", "formControlName", "reportPath", "required", "", 3, "value"], ["matInput", "", "formControlName", "reportServer", "required", "", 3, "value"], ["matInput", "", "formControlName", "name", 3, "value"], ["matInput", "", "formControlName", "category", 3, "value"], ["matInput", "", "formControlName", "updated", 3, "value"], ["class", "report-parts", 4, "ngIf"], [1, "report-parts"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["type", "hidden", "formControlName", "id", "value", "subreportForm.controls.id.value"], ["type", "hidden", "formControlName", "parentReportID", "value", "subreportForm.controls.parentReportID.value"], ["type", "hidden", "formControlName", "categoryID", "value", "subreportForm.controls.categoryID.value"], ["type", "hidden", "formControlName", "subreport", "value", "subreportForm.controls.subreport.value"], ["type", "hidden", "formControlName", "timestamp", "value", "subreportForm.controls.timestamp.value"], ["type", "hidden", "formControlName", "reportPath", "value", "subreportForm.controls.reportPath.value"], ["type", "hidden", "formControlName", "reportServer", "value", "subreportForm.controls.reportServer.value"], [3, "formGroup", "form"], ["label", "Scheduler", 3, "disabled"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"]], template: function ReportConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReportConfigurationComponent_form_0_Template, 24, 10, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTab"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _shared_criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_20__["CriteriaConfigComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggle"]], pipes: [_shared_Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_22__["MomentPipe"]], styles: [".input-form-content[_ngcontent-%COMP%] {\n  height: 66vh;\n  max-height: 66vh;\n}\n\n.config-container[_ngcontent-%COMP%] {\n  height: 60vh;\n  max-height: 60vh;\n  overflow: auto;\n  overflow-x: hidden;\n  padding-left: 10px;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white !important;\n  border-radius: 5px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.toolbar-actions[_ngcontent-%COMP%] {\n  height: 7vh;\n}\n\n.report-parts[_ngcontent-%COMP%] {\n  flex: 1 auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 5% 0 5%;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #673ab7;\n  color: white;\n  height: 40px;\n  width: 12.5%;\n  table-layout: fixed;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e7e7e7;\n}\n\n.reportviewer-header[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 7vh;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\n.reportcard-header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n  .mat-card-header-text {\n  margin: 0px !important;\n  padding: 0px;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.mat-card.criterias[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n  \n}\n\n.mat-card.report-config[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-radius: 0px;\n}\n\n.report-config[_ngcontent-%COMP%] {\n  flex: 1 auto;\n  height: 74vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9yZXBvcnQtY29uZmlndXJhdGlvbi9yZXBvcnQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFPQTtFQUNJLGNBQUE7QUFKSjs7QUFrQkE7RUFDSSxXQUFBO0FBZko7O0FBb0JBO0VBQ0ksWUFBQTtBQWpCSjs7QUFvQkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFqQko7O0FBcUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxnQ0FBQTtBQWxCSjs7QUFxQkE7RUFFSSxXQUFBO0VBQ0EsV0FBQTtBQW5CSjs7QUFzQkE7RUFDSSxrQkFBQTtBQW5CSjs7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW5CSjs7QUFzQkE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFuQko7O0FBc0JFO0VBQ0Usc0JBQUE7QUFuQko7O0FBc0JBO0VBQ0ksZ0JBQUE7RUFDQSwrSEFBQTtBQW5CSjs7QUFzQkE7RUFDSSxZQUFBO0VBRUEsa0JBQUE7QUFwQko7O0FBdUJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXBCSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvcmVwb3J0LWNvbmZpZ3VyYXRpb24vcmVwb3J0LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZm9ybS1jb250ZW50IHtcclxuICAgIGhlaWdodDo2NnZoO1xyXG4gICAgbWF4LWhlaWdodDo2NnZoO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjNjczYWI3O1xyXG59XHJcblxyXG4uY29uZmlnLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6NjB2aDtcclxuICAgIG1heC1oZWlnaHQ6NjB2aDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbi8vIC5tYXQtY2FyZC1oZWFkZXIge1xyXG4vLyAgICAgLy8gbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4vLyB9XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuLy8gICAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgICAvL2JhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi50b29sYmFyLWFjdGlvbnMge1xyXG4gICAgaGVpZ2h0Ojd2aDtcclxuICAgIC8vYmFja2dyb3VuZDogIzY3M2FiNztcclxuICAgIC8vbWFyZ2luLWxlZnQ6MnB4O1xyXG59XHJcblxyXG4ucmVwb3J0LXBhcnRzIHtcclxuICAgIGZsZXg6MSBhdXRvO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46MCA1JSAwIDUlO1xyXG4gICAgLy9ib3JkZXI6MXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICAgIGJhY2tncm91bmQ6IzY3M2FiNztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICB3aWR0aDoxMi41JTtcclxuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcclxufVxyXG5cclxudGFibGUgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2U3ZTdlNztcclxufVxyXG5cclxuLnJlcG9ydHZpZXdlci1oZWFkZXIge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0Ojd2aDtcclxufVxyXG5cclxuLm1hdC1mbGF0LWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcblxyXG4ucmVwb3J0Y2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDsgIFxyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jYXJkLmNyaXRlcmlhczpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyAqL1xyXG59XHJcblxyXG4ubWF0LWNhcmQucmVwb3J0LWNvbmZpZyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvL2JhY2tncm91bmQ6IFx0IzAwMDAzMztcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcblxyXG4ucmVwb3J0LWNvbmZpZyB7XHJcbiAgICBmbGV4IDogMSBhdXRvO1xyXG4gICAgaGVpZ2h0Ojc0dmg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-configuration',
                templateUrl: './report-configuration.component.html',
                styleUrls: ['./report-configuration.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__["CriteriaService"] }, { type: src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Oou9":
/*!******************************************************!*\
  !*** ./src/app/reporting/report/report.component.ts ***!
  \******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_Util_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Util/storage */ "s2Rq");
/* harmony import */ var src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Services/criteria.service */ "b1pM");
/* harmony import */ var src_app_shared_Services_criteria_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Services/criteria-control.service */ "53Ol");
/* harmony import */ var src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Services/report.service */ "CkPC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _shared_criteria_criteria_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/criteria/criteria.component */ "Dx9Q");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/report-viewer/report-viewer.component */ "m2le");




















const _c0 = ["reportCard"];
function ReportComponent_mat_card_2_mat_card_content_4_app_criteria_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-criteria", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("criteriaValueChange", function ReportComponent_mat_card_2_mat_card_content_4_app_criteria_1_Template_app_criteria_criteriaValueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.criteriaValueChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("criteria", criteria_r11)("form", ctx_r10.form);
} }
function ReportComponent_mat_card_2_mat_card_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_mat_card_2_mat_card_content_4_app_criteria_1_Template, 1, 2, "app-criteria", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.criterias);
} }
function ReportComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Criterias");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportComponent_mat_card_2_mat_card_content_4_Template, 2, 1, "mat-card-content", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
function ReportComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.displayCiteria(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.displayCiteria(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.report.label);
} }
function ReportComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6)("disabled", !ctx_r5.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.isFullscreen ? "fullscreen_exit" : "fullscreen");
} }
function ReportComponent_mat_tab_group_25_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-tab", 29);
} if (rf & 2) {
    const rpt_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", rpt_r21.label);
} }
function ReportComponent_mat_tab_group_25_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ReportComponent_mat_tab_group_25_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.refresh($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportComponent_mat_tab_group_25_mat_tab_1_Template, 1, 1, "mat-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.report.subreports);
} }
function ReportComponent_app_report_viewer_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-report-viewer", 30);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reportserver", ctx_r8.displayedReport.reportServer)("reporturl", ctx_r8.displayedReport.reportPath)("report", ctx_r8.displayedReport)("parameters", ctx_r8.parameters)("language", ctx_r8.language)("height", ctx_r8.height);
} }
class ReportComponent {
    constructor(cs, ccs, rs, route) {
        this.cs = cs;
        this.ccs = ccs;
        this.rs = rs;
        this.route = route;
        this.user = Object(src_app_shared_Util_storage__WEBPACK_IMPORTED_MODULE_3__["getFromStorage"])("user");
        this.criteriaShown = true;
        this.language = "en-us";
        this.height = '80.2vh';
        this.displayCiteria = () => {
            this.criteriaShown = !this.criteriaShown;
        };
        this.getFormValues = () => {
            const params = [];
            this.criterias.forEach(crit => {
                let val = this.form.controls[crit.key].value;
                val = (Array.isArray(val) && val.includes(-1)) ? '-1' : val;
                params.push({
                    criteriaId: crit.id,
                    key: crit.key,
                    value: ((crit.controlType == 'date') ? moment__WEBPACK_IMPORTED_MODULE_2__(val).format('yyyy-MM-DD') :
                        (Array.isArray(val)) ? val.join(',') : val),
                    scheduler: false
                });
            });
            this.cs.saveSearchCriterias(params).subscribe(saved => {
                if (saved)
                    this.parameters = params;
            });
        };
        this.isFullscreen = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.rs.getReport(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            this.report = data;
            if (this.report.subreports.length > 0) {
                this.report.subreports = this.report.subreports.sort((a, b) => a.order - b.order);
                this.displayedReport = this.report.subreports[0];
                this.height = '72.8vh';
            }
            else
                this.displayedReport = this.report;
            this.criterias = this.cs.getCriterias(this.report.criterias.filter(s => !s.hidden).sort((a, b) => a.order - b.order));
            this.form = this.ccs.toFormGroup(this.criterias);
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.getFormValues();
    }
    criteriaValueChanged(event) {
        if (this.form.valid) {
            this.getFormValues();
        }
    }
    refresh(event) {
        if (this.form.valid) {
            this.displayedReport = this.report.subreports[event];
            this.getFormValues();
        }
    }
    export(format) {
        let _url = `${this.report.reportServer}?${this.report.reportPath}`;
        _url += `&uid=${encodeURI(this.user.id)}`;
        _url += `&rid=${encodeURI(this.report.id)}`;
        // this.parameters.forEach(param => {
        //   // let _val: string;
        //   // if(Array.isArray(param.value)) _val = param.value.join(',');
        //   // else _val = param.value;
        //   _url += `&${encodeURI(param.key)}=${encodeURI(param.value)}`;
        // })
        //_url += this.report
        _url += `&rs:Format=${format}`;
        window.location.href = _url;
    }
    openFullscreen() {
        // Use this.divRef.nativeElement here to request fullscreen
        const elem = this.divRef.nativeElement;
        if (this.isFullscreen) {
            this.isFullscreen = false;
            const cancellFullScreen = document.exitFullscreen;
            cancellFullScreen.call(document);
        }
        else {
            this.isFullscreen = true;
            const requestFullScreen = elem.requestFullscreen || elem.webkitRequestFullScreen
                || elem.mozRequestFullScreen || elem.msRequestFullScreen;
            requestFullScreen.call(elem);
        }
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__["CriteriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_criteria_control_service__WEBPACK_IMPORTED_MODULE_5__["CriteriaControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], viewQuery: function ReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divRef = _t.first);
    } }, decls: 27, vars: 8, consts: [[1, "form", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLauoutAlign", "space-between center", 1, "main-container"], ["class", "criterias", 4, "ngIf"], [1, "report"], ["reportCard", ""], [1, "reportcard-header"], [1, "reportviewer-header"], ["fxLayout", "column", "fxLauoutAlign", "space-between center"], ["class", "arrow", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "example-spacer"], ["align", "end"], ["fxLayout", "row", "fxLayoutGap", "15px", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "input-form-content"], [3, "selectedIndexChange", 4, "ngIf"], [3, "reportserver", "reporturl", "report", "parameters", "language", "height", 4, "ngIf"], [1, "criterias"], [1, "input-form-header"], ["class", "input-form-content", 4, "ngIf"], [3, "criteria", "form", "criteriaValueChange", 4, "ngFor", "ngForOf"], [3, "criteria", "form", "criteriaValueChange"], [1, "arrow", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "15px"], ["type", "button", "mat-flat-button", "", 3, "matMenuTriggerFor", "disabled"], ["type", "button", "mat-flat-button", "", 3, "click"], [3, "selectedIndexChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "reportserver", "reporturl", "report", "parameters", "language", "height"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReportComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportComponent_mat_card_2_Template, 5, 1, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReportComponent_mat_icon_9_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReportComponent_mat_icon_10_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportComponent_span_12_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportComponent_div_15_Template, 7, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_18_listener() { return ctx.export("ExcelOpenXML"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_21_listener() { return ctx.export("pdf"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportComponent_mat_tab_group_25_Template, 2, 1, "mat-tab-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportComponent_app_report_viewer_26_Template, 1, 6, "app-report-viewer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.criteriaShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.criteriaShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.criteriaShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report && ctx.report.subreports && ctx.report.subreports.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayedReport);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_criteria_criteria_component__WEBPACK_IMPORTED_MODULE_13__["CriteriaComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTab"], _shared_report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ReportViewerComponent"]], styles: [".main-container {\n  flex: 1 auto;\n}\n\n.criterias {\n  width: 280px;\n  height: 87vh;\n}\n\n.input-form-content {\n  overflow: hidden;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.mat-card.criterias {\n  border-radius: 0px;\n  background: transparent;\n}\n\n.arrow {\n  cursor: pointer;\n}\n\n.mat-card.criterias:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n  /* box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); */\n}\n\n.mat-card.report {\n  padding: 0px;\n  border-radius: 0px;\n}\n\n.report {\n  flex: 1 auto;\n  height: 87vh;\n  overflow: hidden;\n}\n\n::ng-deep .mat-card-header-text {\n  margin: 0px;\n  padding: 0px;\n}\n\n.mat-card-header-text {\n  margin: 0px !important;\n}\n\n.report {\n  flex: 1 auto;\n  height: 87vh;\n  overflow: hidden;\n}\n\n.reportviewer-header {\n  margin: 0px;\n  height: 7vh;\n}\n\n.mat-flat-button {\n  border-radius: 0px;\n}\n\n.reportcard-header {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0aW5nL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBRUksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFJQTtFQUdJLGtCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsK0hBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFFQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFPRTtFQUNFLHNCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFFSSxXQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRpbmcvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICAgIGZsZXg6IDEgYXV0bztcclxufVxyXG5cclxuLmNyaXRlcmlhcyB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDo4N3ZoO1xyXG59XHJcblxyXG4uaW5wdXQtZm9ybS1jb250ZW50IHtcclxuICAgIC8vaGVpZ2h0Ojg4dmg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG5cclxuLm1hdC1jYXJkLmNyaXRlcmlhcyB7XHJcbiAgICAvL3BhZGRpbmc6IDBweDtcclxuICAgIC8vYmFja2dyb3VuZDogXHQjMDAwMDMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQuY3JpdGVyaWFzOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6bm9uZTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7ICovXHJcbn1cclxuXHJcbi5tYXQtY2FyZC5yZXBvcnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiBcdCMwMDAwMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG5cclxuLnJlcG9ydCB7XHJcbiAgICBmbGV4IDogMSBhdXRvO1xyXG4gICAgaGVpZ2h0Ojg3dmg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcG9ydCB7XHJcbiAgICBmbGV4IDogMSBhdXRvO1xyXG4gICAgaGVpZ2h0Ojg3dmg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5yZXBvcnR2aWV3ZXItaGVhZGVyIHtcclxuICAgIC8vYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDo3dmg7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG5cclxuLnJlcG9ydGNhcmQtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_shared_Services_criteria_service__WEBPACK_IMPORTED_MODULE_4__["CriteriaService"] }, { type: src_app_shared_Services_criteria_control_service__WEBPACK_IMPORTED_MODULE_5__["CriteriaControlService"] }, { type: src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { divRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['reportCard', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page404/page404.component */ "850k");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "0MCZ");
/* harmony import */ var _criteria_criteria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criteria/criteria.component */ "Dx9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-mat-search-bar */ "oWl+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _setting_layout_setting_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./setting-layout/setting-layout.component */ "+8Io");
/* harmony import */ var _criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./criteria-config/criteria-config.component */ "Cfxq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Pipes/moment.pipe */ "o2u7");
/* harmony import */ var _pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/boolean.pipe */ "4DD9");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./report-viewer/report-viewer.component */ "m2le");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Pipes/report-status.pipe */ "CLWf");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-mat-select-infinite-scroll */ "5PC7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/exit-dirty/exit-dirty.component */ "XpoD");




































class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__["NgMatSearchBarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["MatSelectInfiniteScrollModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]
        ], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_criteria_criteria_component__WEBPACK_IMPORTED_MODULE_6__["CriteriaComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
        _setting_layout_setting_layout_component__WEBPACK_IMPORTED_MODULE_20__["SettingLayoutComponent"],
        _criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_21__["CriteriaConfigComponent"],
        _Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_23__["MomentPipe"],
        _pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_24__["BooleanPipe"],
        _report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_28__["ReportViewerComponent"],
        _Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_30__["ReportStatusPipe"],
        _modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_34__["ExitDirtyComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__["NgMatSearchBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["MatSelectInfiniteScrollModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
        _criteria_criteria_component__WEBPACK_IMPORTED_MODULE_6__["CriteriaComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        _criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_21__["CriteriaConfigComponent"],
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_23__["MomentPipe"],
        _pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_24__["BooleanPipe"],
        _Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_30__["ReportStatusPipe"],
        _report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_28__["ReportViewerComponent"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
        _modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_34__["ExitDirtyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                declarations: [
                    _criteria_criteria_component__WEBPACK_IMPORTED_MODULE_6__["CriteriaComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                    _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
                    _setting_layout_setting_layout_component__WEBPACK_IMPORTED_MODULE_20__["SettingLayoutComponent"],
                    _criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_21__["CriteriaConfigComponent"],
                    _Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_23__["MomentPipe"],
                    _pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_24__["BooleanPipe"],
                    _report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_28__["ReportViewerComponent"],
                    _Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_30__["ReportStatusPipe"],
                    _modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_34__["ExitDirtyComponent"],
                ],
                exports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                    _criteria_criteria_component__WEBPACK_IMPORTED_MODULE_6__["CriteriaComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                    _criteria_config_criteria_config_component__WEBPACK_IMPORTED_MODULE_21__["CriteriaConfigComponent"],
                    _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_23__["MomentPipe"],
                    _pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_24__["BooleanPipe"],
                    _Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_30__["ReportStatusPipe"],
                    _report_viewer_report_viewer_component__WEBPACK_IMPORTED_MODULE_28__["ReportViewerComponent"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
                    _modals_exit_dirty_exit_dirty_component__WEBPACK_IMPORTED_MODULE_34__["ExitDirtyComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_10__["NgMatSearchBarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_31__["NgxMatSelectSearchModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                    ng_mat_select_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["MatSelectInfiniteScrollModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        //this.criterias$ = service.getQuestions();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-ui-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["::ng-deep snack-bar-container.alert-red {\n  padding: 20px;\n  background-color: red;\n  color: white;\n}\n\n::ng-deep snack-bar-container.alert-success {\n  padding: 20px;\n  background-color: #04d159;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHNuYWNrLWJhci1jb250YWluZXIuYWxlcnQtcmVke1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHNuYWNrLWJhci1jb250YWluZXIuYWxlcnQtc3VjY2Vzc3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgMjA5LCA4OSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WBM+":
/*!********************************************!*\
  !*** ./src/app/shared/Util/interceptor.ts ***!
  \********************************************/
/*! exports provided: interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptor", function() { return interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "s2Rq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/auth.service */ "Cs9t");






class interceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${Object(_storage__WEBPACK_IMPORTED_MODULE_2__["getFromStorage"])("user").token}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, caught) => {
            if (err.status === 401) {
                this.auth.logout();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err);
            }
            throw err;
        }));
    }
}
interceptor.ɵfac = function interceptor_Factory(t) { return new (t || interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
interceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: interceptor, factory: interceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](interceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Wef7":
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var _category_configuration_category_configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-configuration/category-configuration.component */ "7QTd");
/* harmony import */ var _global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-setting/global-setting.component */ "Kx7V");
/* harmony import */ var _report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-configuration/report-configuration.component */ "MKPL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    { path: 'GlobalConfiguration', component: _global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_1__["GlobalSettingComponent"] },
    { path: 'CategoryConfiguration', component: _category_configuration_category_configuration_component__WEBPACK_IMPORTED_MODULE_0__["CategoryConfigurationComponent"] },
    { path: 'ReportConfiguration', component: _report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ReportConfigurationComponent"] },
    { path: 'ReportConfiguration/:id', component: _report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_2__["ReportConfigurationComponent"] }
];
class SettingRoutingModule {
}
SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettingRoutingModule });
SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SettingRoutingModule_Factory(t) { return new (t || SettingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SettingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "WhBP":
/*!**********************************************!*\
  !*** ./src/app/shared/Util/criteria-base.ts ***!
  \**********************************************/
/*! exports provided: CriteriaBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaBase", function() { return CriteriaBase; });
class CriteriaBase {
    constructor(options = {}) {
        this.id = options.id;
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.referential = options.referential;
        this.multiple = options.multiple;
    }
}


/***/ }),

/***/ "XpoD":
/*!******************************************************************!*\
  !*** ./src/app/shared/modals/exit-dirty/exit-dirty.component.ts ***!
  \******************************************************************/
/*! exports provided: ExitDirtyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitDirtyComponent", function() { return ExitDirtyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class ExitDirtyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExitDirtyComponent.ɵfac = function ExitDirtyComponent_Factory(t) { return new (t || ExitDirtyComponent)(); };
ExitDirtyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExitDirtyComponent, selectors: [["app-exit-dirty"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ExitDirtyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "There is unsaved changed in the form, do you want to proceed ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbHMvZXhpdC1kaXJ0eS9leGl0LWRpcnR5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitDirtyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exit-dirty',
                templateUrl: './exit-dirty.component.html',
                styleUrls: ['./exit-dirty.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YScL":
/*!***********************************************!*\
  !*** ./src/app/shared/models/report.model.ts ***!
  \***********************************************/
/*! exports provided: reportStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportStatus", function() { return reportStatus; });
var reportStatus;
(function (reportStatus) {
    reportStatus[reportStatus["Unsupported"] = 0] = "Unsupported";
    reportStatus[reportStatus["Supported"] = 1] = "Supported";
    reportStatus[reportStatus["Inactive"] = 2] = "Inactive";
})(reportStatus || (reportStatus = {}));


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init-pass/init-pass.component */ "vCi5");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_8__["InitPassComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _init_pass_init_pass_component__WEBPACK_IMPORTED_MODULE_8__["InitPassComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _reporting_reporting_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporting/reporting.module */ "0M3A");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _setting_setting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting/setting.module */ "nWY6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-mat-search-bar */ "oWl+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _shared_Util_ErrorHandler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/Util/ErrorHandler */ "eEKo");
/* harmony import */ var _shared_Util_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/Util/interceptor */ "WBM+");




























const ngxUiLoaderConfig = {
    "bgsColor": "rgba(206,177,177,0.09)",
    "bgsOpacity": 0.2,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "cube-grid",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "#4e93ff",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "cube-grid",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#4e93ff",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"],
            useClass: _shared_Util_ErrorHandler__WEBPACK_IMPORTED_MODULE_24__["ErrorAlerter"],
        },
        _shared_Util_interceptor__WEBPACK_IMPORTED_MODULE_25__["interceptor"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _reporting_reporting_module__WEBPACK_IMPORTED_MODULE_1__["ReportingModule"],
            _setting_setting_module__WEBPACK_IMPORTED_MODULE_8__["SettingModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__["AuthModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_20__["NgMatSearchBarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderRouterModule"].forRoot({ showForeground: true }),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _reporting_reporting_module__WEBPACK_IMPORTED_MODULE_1__["ReportingModule"],
        _setting_setting_module__WEBPACK_IMPORTED_MODULE_8__["SettingModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__["AuthModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_20__["NgMatSearchBarModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderRouterModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderHttpModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _reporting_reporting_module__WEBPACK_IMPORTED_MODULE_1__["ReportingModule"],
                    _setting_setting_module__WEBPACK_IMPORTED_MODULE_8__["SettingModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_23__["AuthModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                    ng_mat_search_bar__WEBPACK_IMPORTED_MODULE_20__["NgMatSearchBarModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderRouterModule"].forRoot({ showForeground: true }),
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_22__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"],
                        useClass: _shared_Util_ErrorHandler__WEBPACK_IMPORTED_MODULE_24__["ErrorAlerter"],
                    },
                    _shared_Util_interceptor__WEBPACK_IMPORTED_MODULE_25__["interceptor"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZL0r":
/*!*******************************************************!*\
  !*** ./src/app/reporting/reporting-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingRoutingModule", function() { return ReportingRoutingModule; });
/* harmony import */ var _shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/guards/report.guard */ "KgFZ");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/report.component */ "Oou9");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/reports.component */ "xDns");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    { path: '', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"] },
    { path: 'report/:id', component: _report_report_component__WEBPACK_IMPORTED_MODULE_1__["ReportComponent"], canActivate: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_0__["ReportGuard"]] },
];
class ReportingRoutingModule {
}
ReportingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportingRoutingModule });
ReportingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ReportingRoutingModule_Factory(t) { return new (t || ReportingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReportingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZxkQ":
/*!********************************************************!*\
  !*** ./src/app/shared/Services/http-helper.service.ts ***!
  \********************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _Util_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util/storage */ "s2Rq");







const API_BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.baseUrl;
const USER = 'user';
class HttpHelperService {
    constructor(http) {
        this.http = http;
    }
    /**
   * Performs a request with `get` http method.
   * default query params (pagination) are added to each get request
   * @param url the url
   * @param options the request options
   */
    get(url, options) {
        if (options == null) {
            options = {};
        }
        if (options.headers == null) {
            options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        }
        // IE 11 caches get requests, to avoid this we set these Http headers
        options.headers = options.headers.set('Cache-Control', 'no-cache').set('Pragma', 'no-cache');
        return this.http
            .get(API_BASE_URL + url, this.requestOptions(Object.assign(Object.assign({}, options), { params: Object.assign({}, (options ? options.params : {})) })));
    }
    /**
     * Performs a request with `post` http method.
     * @param url the url
     * @param body the body
     * @param options the request options
     */
    post(url, body, options, isUpload) {
        return this.http
            .post(API_BASE_URL + url, body, this.requestOptions(options, isUpload));
    }
    /**
     * Wrapper for an upload file post request, to handle progress events, etc
     * @param url the url
     * @param file - the file to be uploaded
     * @param options the request options
     */
    upload(url, file, options) {
        // pass file to uploaded as formData
        const formData = new FormData();
        formData.append('file', file);
        const uploadOptions = {
            reportProgress: true,
            observe: 'events'
        };
        return this.post(url, formData, Object.assign(Object.assign({}, options), uploadOptions), true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Sent:
                    return { status: 'progress', progress: 0 };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', progress };
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response:
                    return { status: 'completed', completedResponse: event.body };
                default:
                    return `Unhandled Event: ${event.type}`;
            }
        }));
    }
    /**
     * Performs a request with `put` http method.
     * @param url the url
     * @param body the body
     * @param options the request options
     */
    put(url, body, options, isUpload) {
        return this.http
            .put(API_BASE_URL + url, body, this.requestOptions(options, isUpload));
    }
    /**
     * Performs a request with `delete` http method.
     * @param url the url
     * @param options the request options
     */
    delete(url, options) {
        return this.http
            .delete(API_BASE_URL + url, this.requestOptions(options));
    }
    /**
     * Configure request options.
     * @param options - request options
     * @param isUpload the flag if the request is made for upload
     */
    requestOptions(options, isUpload) {
        if (options == null) {
            options = {};
        }
        if (options.headers == null) {
            options.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        }
        if (options.params != null) {
            if (typeof (options.params) === 'string') {
                options.params.forEach((value, key) => {
                    if (value || (typeof (value) === 'string' && value.length === 0)) {
                        delete options.params[key];
                    }
                });
            }
        }
        const accessTokenUser = Object(_Util_storage__WEBPACK_IMPORTED_MODULE_4__["getFromStorage"])(USER);
        // add the access token to headers if it user is authenticated
        if (accessTokenUser.token) {
            options.headers = options.headers.set('Authorization', 'Bearer ' + accessTokenUser.token);
        }
        if (!options.headers.has('Content-type') && !isUpload) {
            options.headers = options.headers.set('Content-Type', 'application/json');
        }
        return options;
    }
}
HttpHelperService.ɵfac = function HttpHelperService_Factory(t) { return new (t || HttpHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpHelperService, factory: HttpHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "b1pM":
/*!*****************************************************!*\
  !*** ./src/app/shared/Services/criteria.service.ts ***!
  \*****************************************************/
/*! exports provided: CriteriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaService", function() { return CriteriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Util_criteria_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/criteria-dropdown */ "utVU");
/* harmony import */ var _Util_criteria_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util/criteria-date */ "+btF");
/* harmony import */ var _http_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-helper.service */ "ZxkQ");





class CriteriaService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    saveSearchCriterias(params) {
        return this.httpHelper.post('/criteria/saveValues', params);
    }
    getCriteriaReferentials() {
        return this.httpHelper.get('/referential');
    }
    updateCriterias(criterias) {
        return this.httpHelper.put('/criteria/bulkupdate', criterias);
    }
    // TODO: get from a remote source of question metadata
    getCriterias(actualCriterias) {
        const crits = [];
        actualCriterias.forEach((criteria, index) => {
            switch (criteria.controlType) {
                case 1:
                    crits.push(new _Util_criteria_date__WEBPACK_IMPORTED_MODULE_2__["CriteriaDate"]({
                        key: criteria.name,
                        label: criteria.label,
                        required: criteria.required,
                        order: index,
                        value: criteria.defaultValue,
                        id: criteria.id
                    }));
                    break;
                case 3:
                    crits.push(new _Util_criteria_dropdown__WEBPACK_IMPORTED_MODULE_1__["CriteriaDropdown"]({
                        key: criteria.name,
                        label: criteria.label,
                        required: criteria.required,
                        order: index,
                        value: criteria.defaultValue,
                        referential: criteria.referential,
                        options: criteria.options,
                        multiple: criteria.multiple,
                        id: criteria.id
                    }));
                    break;
            }
        });
        //CriteriaBase<string>
        // const criterias: CriteriaBase<string>[] = [
        //   new CriteriaDropdown({
        //     key: 'brave',
        //     label: 'Bravery Rating',
        //     options: [
        //       {key: 'solid',  value: 'Solid'},
        //       {key: 'great',  value: 'Great'},
        //       {key: 'good',   value: 'Good'},
        //       {key: 'unproven', value: 'Unproven'}
        //     ],
        //     order: 3
        //   }),
        //   new CriteriaTextbox({
        //     key: 'firstName',
        //     label: 'First name',
        //     value: 'Bombasto',
        //     required: true,
        //     order: 1
        //   }),
        // ];
        return crits.sort((a, b) => a.order - b.order);
    }
}
CriteriaService.ɵfac = function CriteriaService_Factory(t) { return new (t || CriteriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"])); };
CriteriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CriteriaService, factory: CriteriaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_helper_service__WEBPACK_IMPORTED_MODULE_3__["HttpHelperService"] }]; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/auth.service */ "Cs9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








const _c0 = function () { return ["/initpass"]; };
class LoginComponent {
    constructor(authS, router) {
        this.authS = authS;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    submit() {
        if (this.form.valid) {
            this.logins = { password: this.form.controls['password'].value, login: this.form.controls['login'].value };
            this.authS.authenticate(this.logins).subscribe((result) => {
                if (result == true) {
                    this.router.navigate(['/reports']);
                }
                else {
                    this.error = result.error.error;
                }
            });
        }
    }
    ngAfterViewInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "body"], [1, "grad"], [1, "header"], [1, "login"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column wrap", "fxLauoutAlign", "space-between center", "fxLayoutGap", "10px"], ["type", "text", "formControlName", "login", "placeholder", "login", "name", "user", "required", "", 2, "width", "100%"], ["type", "password", "formControlName", "password", "placeholder", "password", "name", "password", "required", "", 2, "width", "100%"], ["align", "end"], ["type", "submit", "mat-flat-button", "", 2, "width", "100%"], [1, "error"], [2, "text-align", "right", "color", "aliceblue"], ["mat-button", "", "target", "_self", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " CAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".body[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  background: #2a699f;\n  height: 100vh;\n  z-index: 0;\n}\n\n.grad[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n  \n  z-index: 1;\n  opacity: 0.7;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 35px);\n  left: calc(50% - 255px);\n  z-index: 2;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 35px;\n  font-weight: 200;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5379fa !important;\n}\n\n.login[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 75px);\n  left: calc(50% - 50px);\n  height: 150px;\n  width: 350px;\n  padding: 10px;\n  z-index: 2;\n}\n\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n}\n\n.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n  margin-top: 10px;\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active {\n  opacity: 0.6;\n}\n\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n[_ngcontent-%COMP%]::-moz-input-placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0QsYUFBQTtFQUNDLFVBQUE7QUFDRjs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvSUFBQTtFQUE4SCxvQkFBQTtFQUM5SCxVQUFBO0VBQ0MsWUFBQTtBQUVGOztBQUNBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUVEOztBQUNBO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVEOztBQUNBO0VBQ0MseUJBQUE7QUFFRDs7QUFDQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFFRDs7QUFDQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVEOztBQUNBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRDs7QUFnQkE7RUFDQyxZQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsWUFBQTtBQWJEOztBQWdCQTtFQUNDLGFBQUE7RUFDQSwwQ0FBQTtBQWJEOztBQWdCQTtFQUNDLGFBQUE7RUFDQSwwQ0FBQTtBQWJEOztBQWdCQTtFQUNDLGFBQUE7QUFiRDs7QUFnQkE7RUFDRywrQkFBQTtBQWJIOztBQWdCQTtFQUNHLCtCQUFBO0FBYkg7O0FBZ0JBO0VBQ0UsVUFBQTtBQWJGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiMyYTY5OWY7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZ3JhZHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMCwwLDAsMCkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgwLDAsMCwwLjY1KSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuXHR6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmhlYWRlcntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiBjYWxjKDUwJSAtIDM1cHgpO1xyXG5cdGxlZnQ6IGNhbGMoNTAlIC0gMjU1cHgpO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oZWFkZXIgZGl2e1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDM1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmhlYWRlciBkaXYgc3BhbntcclxuXHRjb2xvcjogIzUzNzlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW57XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG5cdGhlaWdodDogMTUwcHg7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9dGV4dF17XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyAubG9naW4gaW5wdXRbdHlwZT1idXR0b25de1xyXG4vLyBcdC8vIHdpZHRoOiAyNjBweDtcclxuLy8gXHQvLyBoZWlnaHQ6IDM1cHg7XHJcbi8vIFx0Ly8gYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gXHQvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4vLyBcdC8vIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gXHQvLyBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vIFx0Ly8gY29sb3I6ICNhMThkNmM7XHJcbi8vIFx0Ly8gZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG4vLyBcdC8vIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gXHQvLyBmb250LXdlaWdodDogNDAwO1xyXG4vLyBcdC8vIHBhZGRpbmc6IDZweDtcclxuLy8gXHQvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmhvdmVye1xyXG5cdG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmV7XHJcblx0b3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxufVxyXG5cclxuOjotbW96LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOnJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "eEKo":
/*!*********************************************!*\
  !*** ./src/app/shared/Util/ErrorHandler.ts ***!
  \*********************************************/
/*! exports provided: ErrorAlerter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorAlerter", function() { return ErrorAlerter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class ErrorAlerter {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    handleError(error) {
        this._snackBar.open(error.message, '', { duration: 6000, panelClass: ['alert-red'] });
    }
}
ErrorAlerter.ɵfac = function ErrorAlerter_Factory(t) { return new (t || ErrorAlerter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ErrorAlerter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorAlerter, factory: ErrorAlerter.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorAlerter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "m2le":
/*!*****************************************************************!*\
  !*** ./src/app/shared/report-viewer/report-viewer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReportViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportViewerComponent", function() { return ReportViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["form"];
function ReportViewerComponent_INPUT_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "INPUT", 9);
} if (rf & 2) {
    const param_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", param_r3.key)("value", param_r3.value);
} }
class ReportViewerComponent {
    constructor(router, _httpClient, serializer, dom, ngxService) {
        this.router = router;
        this._httpClient = _httpClient;
        this.serializer = serializer;
        this.dom = dom;
        this.ngxService = ngxService;
        this.config = { attributes: true, childList: true, subtree: true };
        this.refresh = () => {
            this.formy.nativeElement.submit();
            this.ngxService.start();
            this.parameters;
        };
        this.observer = new MutationObserver(this.refresh);
        this.loaded = () => {
            this.ngxService.stop();
        };
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.url = `${this.reportserver}/Pages/ReportViewer.aspx?${this.reporturl}`;
        if (this.formy)
            this.observer.observe(this.formy.nativeElement, this.config);
    }
    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
        }
    }
}
ReportViewerComponent.ɵfac = function ReportViewerComponent_Factory(t) { return new (t || ReportViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"])); };
ReportViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportViewerComponent, selectors: [["app-report-viewer"]], viewQuery: function ReportViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formy = _t.first);
    } }, inputs: { reportserver: "reportserver", reporturl: "reporturl", width: "width", height: "height", parameters: "parameters", report: "report", language: "language" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 4, consts: [["ngNoForm", "", "method", "POST", "target", "frame", 3, "action"], ["form", ""], ["type", "hidden", "name", "rs:Command", "value", "Render"], ["type", "hidden", "name", "rc:LinkTarget", "value", "main"], ["type", "hidden", "name", "rs:Format", "value", "HTML5.0"], ["type", "hidden", "name", "rc:Parameters", "value", "false"], ["type", "hidden", 3, "name", "value", 4, "ngFor", "ngForOf"], ["name", "frame", "frameborder", "0", "scrolling", "no", 1, "report-viewer", 3, "load"], ["reportingviewer", ""], ["type", "hidden", 3, "name", "value"]], template: function ReportViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "INPUT", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "INPUT", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "INPUT", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportViewerComponent_INPUT_6_Template, 1, 2, "INPUT", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iframe", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ReportViewerComponent_Template_iframe_load_7_listener() { return ctx.loaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parameters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".report-viewer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#ParametersRowReportViewerControl[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#ReportViewerControl_ToggleParam[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JlcG9ydC12aWV3ZXIvcmVwb3J0LXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9yZXBvcnQtdmlld2VyL3JlcG9ydC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0LXZpZXdlciB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuXHJcbiNQYXJhbWV0ZXJzUm93UmVwb3J0Vmlld2VyQ29udHJvbCB7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4jUmVwb3J0Vmlld2VyQ29udHJvbF9Ub2dnbGVQYXJhbSB7XHJcbiAgZGlzcGxheTpub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-viewer',
                templateUrl: './report-viewer.component.html',
                styleUrls: ['./report-viewer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }]; }, { reportserver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reporturl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }] }); })();


/***/ }),

/***/ "nWY6":
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setting-routing.module */ "Wef7");
/* harmony import */ var _report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-configuration/report-configuration.component */ "MKPL");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./global-setting/global-setting.component */ "Kx7V");
/* harmony import */ var _category_configuration_category_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category-configuration/category-configuration.component */ "7QTd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















class SettingModule {
}
SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SettingModule });
SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function SettingModule_Factory(t) { return new (t || SettingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SettingModule, { declarations: [_report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_13__["ReportConfigurationComponent"], _global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_17__["GlobalSettingComponent"], _category_configuration_category_configuration_component__WEBPACK_IMPORTED_MODULE_18__["CategoryConfigurationComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](SettingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                declarations: [_report_configuration_report_configuration_component__WEBPACK_IMPORTED_MODULE_13__["ReportConfigurationComponent"], _global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_17__["GlobalSettingComponent"], _category_configuration_category_configuration_component__WEBPACK_IMPORTED_MODULE_18__["CategoryConfigurationComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingRoutingModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "o2u7":
/*!*********************************************!*\
  !*** ./src/app/shared/Pipes/moment.pipe.ts ***!
  \*********************************************/
/*! exports provided: MomentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function() { return MomentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class MomentPipe {
    transform(value, dateFormat) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(value).format(dateFormat);
    }
}
MomentPipe.ɵfac = function MomentPipe_Factory(t) { return new (t || MomentPipe)(); };
MomentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "momentPipe", type: MomentPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'momentPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "s2Rq":
/*!****************************************!*\
  !*** ./src/app/shared/Util/storage.ts ***!
  \****************************************/
/*! exports provided: saveToStorage, getFromStorage, removeFromStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToStorage", function() { return saveToStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromStorage", function() { return getFromStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStorage", function() { return removeFromStorage; });
/**
 * saves the key, value to storage
 * default persistence is false
 */
function saveToStorage(key, value, persist = false) {
    const jsonData = JSON.stringify(value);
    sessionStorage.setItem(key, jsonData);
    if (persist) {
        localStorage.setItem(key, jsonData);
    }
}
/**
 * gets the key, value from storage
 */
function getFromStorage(key) {
    let value = sessionStorage.getItem(key);
    if (!value) {
        value = localStorage.getItem(key);
    }
    return value !== 'undefined' ? JSON.parse(value) : null;
}
/**
 * removes the key, value from storage
 */
function removeFromStorage(key) {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
}


/***/ }),

/***/ "utVU":
/*!**************************************************!*\
  !*** ./src/app/shared/Util/criteria-dropdown.ts ***!
  \**************************************************/
/*! exports provided: CriteriaDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaDropdown", function() { return CriteriaDropdown; });
/* harmony import */ var _criteria_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criteria-base */ "WhBP");

class CriteriaDropdown extends _criteria_base__WEBPACK_IMPORTED_MODULE_0__["CriteriaBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'dropdown';
    }
}


/***/ }),

/***/ "vCi5":
/*!*******************************************************!*\
  !*** ./src/app/auth/init-pass/init-pass.component.ts ***!
  \*******************************************************/
/*! exports provided: InitPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPassComponent", function() { return InitPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Services/auth.service */ "Cs9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function InitPassComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InitPassComponent_form_9_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submitSend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Send initialisation link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function InitPassComponent_form_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Init password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InitPassComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InitPassComponent_form_10_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.submitInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InitPassComponent_form_10_div_1_Template, 5, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.formInit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.token);
} }
class InitPassComponent {
    constructor(authS, router, route) {
        this.authS = authS;
        this.router = router;
        this.route = route;
        this.token = this.route.snapshot.paramMap.get('code');
    }
    ngOnInit() {
        this.formInit = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.formSend = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    submitSend() {
        if (this.formSend.valid) {
            this.authS.sendInitPass({ mail: this.formSend.controls['email'].value }).subscribe((result) => {
                if (result) {
                    this.router.navigate(['/login']);
                }
                else
                    this.error = "This email is not registered";
            });
        }
    }
    submitInit() {
        if (this.formInit.valid) {
            this.authS.initPass({ 'password': this.formInit.controls['password'].value, 'token': this.token }).subscribe((result) => {
                if (result) {
                    this.router.navigate(['/login']);
                }
                else
                    this.error = "Error occurend";
            });
        }
    }
}
InitPassComponent.ɵfac = function InitPassComponent_Factory(t) { return new (t || InitPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
InitPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitPassComponent, selectors: [["app-init-pass"]], decls: 11, vars: 2, consts: [[1, "body"], [1, "grad"], [1, "header"], [1, "login"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxLayout", "column wrap", "fxLauoutAlign", "space-between center", "fxLayoutGap", "10px"], ["type", "email", "formControlName", "email", "placeholder", "email", "name", "email", "required", "", 2, "width", "100%"], ["align", "end"], ["type", "submit", "mat-flat-button", "", 2, "width", "100%"], [1, "error"], ["fxLayout", "column wrap", "fxLauoutAlign", "space-between center", "fxLayoutGap", "10px", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "new password", "name", "user", 2, "width", "100%"]], template: function InitPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Groupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " CAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InitPassComponent_form_9_Template, 8, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InitPassComponent_form_10_Template, 2, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.token);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".body[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  background: #2a699f;\n  height: 100vh;\n  z-index: 0;\n}\n\n.grad[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));\n  \n  z-index: 1;\n  opacity: 0.7;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 35px);\n  left: calc(50% - 255px);\n  z-index: 2;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 35px;\n  font-weight: 200;\n}\n\n.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5379fa !important;\n}\n\n.login[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 75px);\n  left: calc(50% - 50px);\n  height: 150px;\n  width: 350px;\n  padding: 10px;\n  z-index: 2;\n}\n\n.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n}\n\n.login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 2px;\n  color: #fff;\n  font-family: \"Exo\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 4px;\n  margin-top: 10px;\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:active {\n  opacity: 0.6;\n}\n\n.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.login[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n[_ngcontent-%COMP%]::-moz-input-placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9pbml0LXBhc3MvaW5pdC1wYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDRCxhQUFBO0VBQ0MsVUFBQTtBQUNGOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9JQUFBO0VBQThILG9CQUFBO0VBQzlILFVBQUE7RUFDQyxZQUFBO0FBRUY7O0FBQ0E7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBRUQ7O0FBQ0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUQ7O0FBQ0E7RUFDQyx5QkFBQTtBQUVEOztBQUNBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUVEOztBQUNBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUQ7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVEOztBQWdCQTtFQUNDLFlBQUE7QUFiRDs7QUFnQkE7RUFDQyxZQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLDBDQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsYUFBQTtFQUNBLDBDQUFBO0FBYkQ7O0FBZ0JBO0VBQ0MsYUFBQTtBQWJEOztBQWdCQTtFQUNHLCtCQUFBO0FBYkg7O0FBZ0JBO0VBQ0csK0JBQUE7QUFiSDs7QUFnQkE7RUFDRSxVQUFBO0FBYkYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2luaXQtcGFzcy9pbml0LXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDojMmE2OTlmO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmdyYWR7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDAsMCwwLDApKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMCwwLDAsMC42NSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0ei1pbmRleDogMTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSAzNXB4KTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDI1NXB4KTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaGVhZGVyIGRpdntcclxuXHRmbG9hdDogbGVmdDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgZGl2IHNwYW57XHJcblx0Y29sb3I6ICM1Mzc5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2lue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IGNhbGMoNTAlIC0gNzVweCk7XHJcblx0bGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdHdpZHRoOiAzNTBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9ZW1haWxde1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0cGFkZGluZzogNHB4O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8vIC5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl17XHJcbi8vIFx0Ly8gd2lkdGg6IDI2MHB4O1xyXG4vLyBcdC8vIGhlaWdodDogMzVweDtcclxuLy8gXHQvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyBcdC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbi8vIFx0Ly8gY3Vyc29yOiBwb2ludGVyO1xyXG4vLyBcdC8vIGJvcmRlci1yYWRpdXM6IDJweDtcclxuLy8gXHQvLyBjb2xvcjogI2ExOGQ2YztcclxuLy8gXHQvLyBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcbi8vIFx0Ly8gZm9udC1zaXplOiAxNnB4O1xyXG4vLyBcdC8vIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vIFx0Ly8gcGFkZGluZzogNnB4O1xyXG4vLyBcdC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXJ7XHJcblx0b3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZXtcclxuXHRvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl06Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG59XHJcblxyXG46Oi1tb3otaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6cmVkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-init-pass',
                templateUrl: './init-pass.component.html',
                styleUrls: ['./init-pass.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/page404/page404.component */ "850k");
/* harmony import */ var _shared_setting_layout_setting_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/setting-layout/setting-layout.component */ "+8Io");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/layout.component */ "0MCZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/report.guard */ "KgFZ");








const routes = [
    {
        path: '',
        canActivate: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__["ReportGuard"]],
        children: [
            { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) }
        ]
    },
    {
        path: '',
        canActivate: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__["ReportGuard"]],
        canActivateChild: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__["ReportGuard"]],
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./reporting/reporting.module */ "0M3A")).then(m => m.ReportingModule) }
        ]
    },
    {
        path: '',
        component: _shared_setting_layout_setting_layout_component__WEBPACK_IMPORTED_MODULE_1__["SettingLayoutComponent"],
        canActivate: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__["ReportGuard"]],
        canActivateChild: [_shared_guards_report_guard__WEBPACK_IMPORTED_MODULE_5__["ReportGuard"]],
        children: [
            { path: '', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./setting/setting.module */ "nWY6")).then(m => m.SettingModule) }
        ]
    },
    { path: '**', component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], children: [{ path: '**', component: _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__["Page404Component"] }] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xDns":
/*!********************************************************!*\
  !*** ./src/app/reporting/reports/reports.component.ts ***!
  \********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var src_app_shared_Util_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Util/storage */ "s2Rq");
/* harmony import */ var src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Services/report.service */ "CkPC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _shared_Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/Pipes/moment.pipe */ "o2u7");
/* harmony import */ var _shared_Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/Pipes/report-status.pipe */ "CLWf");
/* harmony import */ var _shared_pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/pipes/boolean.pipe */ "4DD9");




























function ReportsComponent_mat_form_field_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r18.name);
} }
function ReportsComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ReportsComponent_mat_form_field_1_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportsComponent_mat_form_field_1_mat_option_5_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 150, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
const _c0 = function (a0) { return [a0]; };
function ReportsComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Configure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.targetConfig))("disabled", ctx_r1.disabled);
} }
function ReportsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.name, " ");
} }
function ReportsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.label, " ");
} }
function ReportsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "momentPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r23.updatedOn, "dddd D MMM YYYY"), " ");
} }
function ReportsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "reportStatusPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r24.status), " ");
} }
function ReportsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.category.name, " ");
} }
function ReportsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Scheduled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "booleanPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r26.scheduled), " ");
} }
function ReportsComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
const _c1 = function (a0) { return { "highlight": a0 }; };
function ReportsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_tr_41_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.highlight(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r15.ID == row_r27.id));
} }
class ReportsComponent {
    constructor(rs, _snackBar) {
        this.rs = rs;
        this._snackBar = _snackBar;
        this.displayedColumns = ['name', 'label', 'category', 'scheduled', 'updatedOn', 'status'];
        this.user = Object(src_app_shared_Util_storage__WEBPACK_IMPORTED_MODULE_6__["getFromStorage"])('user');
        this.disabled = true;
        this.target = "";
        this.targetConfig = "";
        rs.getCategories().subscribe(data => {
            this.categories = data;
        });
    }
    ngAfterViewInit() {
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            this.isLoadingResults = true;
            return this.rs.getReports();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.length;
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            this._snackBar.open(error.error, '', { duration: 6000, panelClass: ['alert-red'] });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(data => {
            this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data);
            this.data.paginator = this.paginator;
            this.data.sort = this.sort;
            this.data.filterPredicate = (el, filter) => {
                var _a;
                return el.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || ((_a = el.category) === null || _a === void 0 ? void 0 : _a.id) == filter;
            };
        });
    }
    ngOnInit() {
    }
    highlight(row) {
        this.ID = row.id;
        this.disabled = this.ID == '';
        this.target = "/report/" + this.ID;
        this.targetConfig = "/ReportConfiguration/" + this.ID;
    }
    search(event) {
        var _a;
        var value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
        if (value == undefined)
            value = event.value;
        if (value == undefined)
            return;
        const filterValue = value;
        this.data.filter = filterValue.trim().toLowerCase();
        if (this.data.paginator) {
            this.data.paginator.firstPage();
        }
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["app-reports"]], viewQuery: function ReportsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 43, vars: 12, consts: [["fxLayout", "row", "fxLayoutGap", "15px"], ["appearance", "legacy", 3, "width", 4, "ngIf"], ["appearance", "legacy"], ["matInput", "", "placeholder", "Enter report name", 3, "keyup"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], [1, "reports"], [1, "reportcard-header"], [1, "reportviewer-header"], [1, "example-spacer"], ["align", "end"], ["type", "button", "mat-flat-button", "", "type", "button", 3, "routerLink", "disabled"], ["type", "button", "mat-flat-button", "", "type", "button", 3, "routerLink", "disabled", 4, "ngIf"], [1, "mat-elevation-z8"], ["mat-table", "", "mat-table", "", "matSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "label"], ["matColumnDef", "updatedOn"], ["matColumnDef", "status"], ["matColumnDef", "category"], ["matColumnDef", "scheduled"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize"], [3, "selectionChange"], ["Category", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportsComponent_mat_form_field_1_Template, 6, 3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Report name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ReportsComponent_Template_input_keyup_5_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsComponent_Template_mat_icon_click_6_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReportsComponent_button_18_Template, 2, 4, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportsComponent_th_23_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReportsComponent_td_24_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportsComponent_th_26_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReportsComponent_td_27_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReportsComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReportsComponent_td_30_Template, 3, 4, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReportsComponent_th_32_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReportsComponent_td_33_Template, 3, 3, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportsComponent_th_35_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ReportsComponent_td_36_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReportsComponent_th_38_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReportsComponent_td_39_Template, 3, 3, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReportsComponent_tr_40_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReportsComponent_tr_41_Template, 1, 3, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 400, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.target))("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 7);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"]], pipes: [_shared_Pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_21__["MomentPipe"], _shared_Pipes_report_status_pipe__WEBPACK_IMPORTED_MODULE_22__["ReportStatusPipe"], _shared_pipes_boolean_pipe__WEBPACK_IMPORTED_MODULE_23__["BooleanPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: #ccc;\n  \n  color: white !important;\n}\n\n.reports[_ngcontent-%COMP%] {\n  flex: 1 auto;\n}\n\n.reportviewer-header[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.reportcard-header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.mat-card.reports[_ngcontent-%COMP%] {\n  padding: 0px;\n  border-radius: 0px;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n  .mat-card-header-text {\n  margin: 0px !important;\n  padding: 0px;\n}\n\n.input-form-content[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n  snack-bar-container.alert-red {\n  padding: 20px;\n  background-color: red;\n  color: white;\n}\n\n  snack-bar-container.alert-success {\n  padding: 20px;\n  background-color: #04d159;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0aW5nL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFHRTtFQUNFLGdCQUFBO0VBQWlCLFVBQUE7RUFDakIsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUVJLFdBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDRSxZQUFBO0VBRUEsa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFFRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRpbmcvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhpZ2hsaWdodHtcclxuICAgIGJhY2tncm91bmQ6I2NjYzsgLyogZ3JlZW4gKi9cclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucmVwb3J0cyB7XHJcbiAgICBmbGV4IDogMSBhdXRvO1xyXG4gICAgLy9oZWlnaHQ6Nzl2aDtcclxufVxyXG5cclxuLnJlcG9ydHZpZXdlci1oZWFkZXIge1xyXG4gICAgLy9iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucmVwb3J0Y2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC5yZXBvcnRzIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLy9iYWNrZ3JvdW5kOiBcdCMwMDAwMzM7XHJcbiAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czowcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1mb3JtLWNvbnRlbnQge1xyXG4gIC8vbWF4LWhlaWdodDo3MHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5hbGVydC1yZWR7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgc25hY2stYmFyLWNvbnRhaW5lci5hbGVydC1zdWNjZXNze1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAyMDksIDg5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports',
                templateUrl: './reports.component.html',
                styleUrls: ['./reports.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_Services_report_service__WEBPACK_IMPORTED_MODULE_7__["ReportService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


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
//# sourceMappingURL=main.js.map