(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");




const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"] },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__["HeroesComponent"] }
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component.ngfactory */ "./src/app/messages/messages.component.ngfactory.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["routerLink", "/dashboard"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "a", [["routerLink", "/heroes"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Heroes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "app-messages", [], null, null, null, _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MessagesComponent_0"], _messages_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MessagesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, null, 0, _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"], [_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]], null, null)], function (_ck, _v) { var currVal_3 = "/dashboard"; _ck(_v, 4, 0, currVal_3); var currVal_6 = "/heroes"; _ck(_v, 7, 0, currVal_6); _ck(_v, 10, 0); _ck(_v, 12, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).href; _ck(_v, 6, 0, currVal_4, currVal_5); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link {\n  color: #334953;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpYW5waWV0cm8vV29ya3NwYWNlL2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0VGO0FEQUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNHRjtBRERBO0VBQ0UsY0FBQTtBQ0lGO0FERkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNLRjtBREhBO0VBQ0UsY0FBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xuICBjb2xvcjogIzMzNDk1Mztcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cbiIsIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICMzMzQ5NTM7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component.ngfactory */ "./src/app/dashboard/dashboard.component.ngfactory.js");
/* harmony import */ var _hero_detail_hero_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component.ngfactory */ "./src/app/hero-detail/hero-detail.component.ngfactory.js");
/* harmony import */ var _heroes_heroes_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component.ngfactory */ "./src/app/heroes/heroes.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api/interfaces */ "./node_modules/angular-in-memory-web-api/interfaces.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-in-memory-web-api/http-client-in-memory-web-api.module */ "./node_modules/angular-in-memory-web-api/http-client-in-memory-web-api.module.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DashboardComponentNgFactory"], _hero_detail_hero_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponentNgFactory"], _heroes_heroes_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["HeroesComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_10__["InMemoryDbService"], _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_12__["httpClientInMemBackendServiceFactory"], [angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_10__["InMemoryDbService"], angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_10__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_12__["HttpClientInMemoryWebApiModule"], angular_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_12__["HttpClientInMemoryWebApiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "", redirectTo: "/dashboard", pathMatch: "full" }, { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] }, { path: "detail/:id", component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_17__["HeroDetailComponent"] }, { path: "heroes", component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_18__["HeroesComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_in_memory_web_api_interfaces__WEBPACK_IMPORTED_MODULE_10__["InMemoryBackendConfig"], { dataEncapsulation: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function() { return RenderType_DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function() { return View_DashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function() { return View_DashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function() { return DashboardComponentNgFactory; });
/* harmony import */ var _dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.scss.shim.ngstyle */ "./src/app/dashboard/dashboard.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hero_search_hero_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero-search/hero-search.component.ngfactory */ "./src/app/hero-search/hero-search.component.ngfactory.js");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_DashboardComponent = [_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["class", "col-1-4"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "module hero"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/detail/", _v.context.$implicit.id, ""); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_3); }); }
function View_DashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Top Heroes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "grid grid-pad"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-hero-search", [], null, null, null, _hero_search_hero_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_HeroSearchComponent_0"], _hero_search_hero_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_HeroSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_5__["HeroSearchComponent"], [_hero_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.heroes; _ck(_v, 4, 0, currVal_0); _ck(_v, 6, 0); }, null); }
function View_DashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], [_hero_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[class*=col-][_ngcontent-%COMP%] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*=col-][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.grid[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #3f525c;\n  border-radius: 2px;\n}\n.module[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module[_ngcontent-%COMP%] {\n    font-size: 10px;\n    max-height: 75px;\n  }\n}\n@media (max-width: 1024px) {\n  .grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .module[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpYW5waWV0cm8vV29ya3NwYWNlL2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURDQTtFQUNFLGdCQUFBO0FDRUY7QURBQTtFQUNFLHFCQUFBO0FDR0Y7QUREQTtFQUdFLHNCQUFBO0FDSUY7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLRjtBREhBO0VBQ0Usa0JBQUE7QUNNRjtBREpBO0VBQ0UsU0FBQTtBQ09GO0FETEE7RUFDRSxVQUFBO0FDUUY7QUROQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1NGO0FEUEE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDVUY7QURSQTtFQUNFLGVBQUE7QUNXRjtBRFRBO0VBQ0UsbUJBQUE7QUNZRjtBRFZBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUNhRjtBQUNGO0FEWkE7RUFDRTtJQUNFLFNBQUE7RUNjRjs7RURaQTtJQUNFLGVBQUE7RUNlRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTI1YztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuIiwiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5bY2xhc3MqPWNvbC1dIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5bY2xhc3MqPWNvbC1dOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyaWQge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuXG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5ncmlkLXBhZCA+IFtjbGFzcyo9Y29sLV06bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubW9kdWxlIHtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn0iXX0= */"];



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class DashboardComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
}


/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_HeroDetailComponent, View_HeroDetailComponent_0, View_HeroDetailComponent_Host_0, HeroDetailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeroDetailComponent", function() { return RenderType_HeroDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroDetailComponent_0", function() { return View_HeroDetailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroDetailComponent_Host_0", function() { return View_HeroDetailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponentNgFactory", function() { return HeroDetailComponentNgFactory; });
/* harmony import */ var _hero_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-detail.component.scss.shim.ngstyle */ "./src/app/hero-detail/hero-detail.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HeroDetailComponent = [_hero_detail_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeroDetailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeroDetailComponent, data: {} });

function View_HeroDetailComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " Details"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["id: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["name: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "input", [["placeholder", "name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.hero.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["go back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["save"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.hero.name; _ck(_v, 14, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.hero.name)); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.hero.id; _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_HeroDetailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeroDetailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hero; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HeroDetailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero-detail", [], null, null, null, View_HeroDetailComponent_0, RenderType_HeroDetailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _hero_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroDetailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hero-detail", _hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"], View_HeroDetailComponent_Host_0, { hero: "hero" }, {}, []);



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        this.getHero();
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
}


/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_HeroSearchComponent, View_HeroSearchComponent_0, View_HeroSearchComponent_Host_0, HeroSearchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeroSearchComponent", function() { return RenderType_HeroSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroSearchComponent_0", function() { return View_HeroSearchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroSearchComponent_Host_0", function() { return View_HeroSearchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponentNgFactory", function() { return HeroSearchComponentNgFactory; });
/* harmony import */ var _hero_search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-search.component.scss.shim.ngstyle */ "./src/app/hero-search/hero-search.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hero_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HeroSearchComponent = [_hero_search_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeroSearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeroSearchComponent, data: {} });

function View_HeroSearchComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/detail/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_3); }); }
function View_HeroSearchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["id", "search-component"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "label", [["for", "search-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hero Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [["searchBox", 1]], null, 0, "input", [["id", "search-box"]], null, [[null, "input"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.search(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "ul", [["class", "search-result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_HeroSearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).transform(_co.heroes$)); _ck(_v, 7, 0, currVal_0); }, null); }
function View_HeroSearchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-hero-search", [], null, null, null, View_HeroSearchComponent_0, RenderType_HeroSearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hero_search_component__WEBPACK_IMPORTED_MODULE_4__["HeroSearchComponent"], [_hero_service__WEBPACK_IMPORTED_MODULE_5__["HeroService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroSearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-hero-search", _hero_search_component__WEBPACK_IMPORTED_MODULE_4__["HeroSearchComponent"], View_HeroSearchComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #607d8b;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: white;\n}\n#search-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n}\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpYW5waWV0cm8vV29ya3NwYWNlL2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2hlcm8tc2VhcmNoL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZXJvLXNlYXJjaC9oZXJvLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7QUNFRjtBREFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNHRjtBREFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tc2VhcmNoL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4Yjtcbn1cblxuLnNlYXJjaC1yZXN1bHQgbGkgYSB7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG4jc2VhcmNoLWJveCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG51bC5zZWFyY2gtcmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuIiwiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4Yjtcbn1cblxuLnNlYXJjaC1yZXN1bHQgbGkgYSB7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3NlYXJjaC1ib3gge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.heroService.searchHeroes(term)));
    }
}


/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






class HeroService {
    constructor(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.heroesUrl = 'api/heroes';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getHeroes() {
        return this.http.get(this.heroesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getHeroes', [])));
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getHero id=${id}`)));
    }
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`updated hero id=${hero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateHero')));
    }
    /** POST: add a new hero to the server */
    addHero(hero) {
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newHero) => this.log(`added hero w/ id=${newHero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(`${this.heroesUrl}/?name=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`found heroes matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchHeroes', [])));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
}
HeroService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function HeroService_Factory() { return new HeroService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: HeroService, providedIn: "root" });


/***/ }),

/***/ "./src/app/heroes/heroes.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/heroes/heroes.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_HeroesComponent, View_HeroesComponent_0, View_HeroesComponent_Host_0, HeroesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeroesComponent", function() { return RenderType_HeroesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroesComponent_0", function() { return View_HeroesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeroesComponent_Host_0", function() { return View_HeroesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponentNgFactory", function() { return HeroesComponentNgFactory; });
/* harmony import */ var _heroes_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroes.component.scss.shim.ngstyle */ "./src/app/heroes/heroes.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_HeroesComponent = [_heroes_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeroesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeroesComponent, data: {} });

function View_HeroesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "badge"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [["class", "delete"], ["title", "delete hero"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.delete(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["x"]))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/detail/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.id; _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_4); }); }
function View_HeroesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Heroes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hero name: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, [["heroName", 1]], null, 0, "input", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.add(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).value);
        var pd_0 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).value = "") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" add "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "ul", [["class", "heroes"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeroesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.heroes; _ck(_v, 10, 0, currVal_0); }, null); }
function View_HeroesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-heroes", [], null, null, null, View_HeroesComponent_0, RenderType_HeroesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"], [_hero_service__WEBPACK_IMPORTED_MODULE_5__["HeroService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeroesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-heroes", _heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"], View_HeroesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/heroes/heroes.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/heroes/heroes.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #607d8b;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpYW5waWV0cm8vV29ya3NwYWNlL2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQ0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRUY7QURDQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNFRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0VGO0FEQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uaGVyb2VzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ZW07XG59XG4uaGVyb2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLmhlcm9lcyBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uaGVyb2VzIGE6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cblxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTA2MTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1pbi13aWR0aDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVyb2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cblxuLmhlcm9lcyBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uaGVyb2VzIGE6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cblxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTA2MTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1pbi13aWR0aDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
    }
    getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
    }
    ngOnInit() {
        this.getHeroes();
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name }).subscribe(hero => {
            this.heroes.push(hero);
        });
    }
    delete(hero) {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}


/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes) {
        return heroes.length > 0
            ? Math.max(...heroes.map(hero => hero.id)) + 1
            : 11;
    }
}
InMemoryDataService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function InMemoryDataService_Factory() { return new InMemoryDataService(); }, token: InMemoryDataService, providedIn: "root" });


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MessageService_Factory() { return new MessageService(); }, token: MessageService, providedIn: "root" });


/***/ }),

/***/ "./src/app/messages/messages.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/messages/messages.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_MessagesComponent, View_MessagesComponent_0, View_MessagesComponent_Host_0, MessagesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MessagesComponent", function() { return RenderType_MessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessagesComponent_0", function() { return View_MessagesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MessagesComponent_Host_0", function() { return View_MessagesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponentNgFactory", function() { return MessagesComponentNgFactory; });
/* harmony import */ var _messages_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.component.scss.shim.ngstyle */ "./src/app/messages/messages.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_MessagesComponent = [_messages_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MessagesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MessagesComponent, data: {} });

function View_MessagesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MessagesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "clear"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.messageService.clear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["clear"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessagesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages; _ck(_v, 6, 0, currVal_0); }, null); }
function View_MessagesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MessagesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.messageService.messages.length; _ck(_v, 1, 0, currVal_0); }, null); }
function View_MessagesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-messages", [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MessagesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-messages", _messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"], View_MessagesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/messages/messages.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/messages/messages.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["h2[_ngcontent-%COMP%] {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 2em;\n}\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpYW5waWV0cm8vV29ya3NwYWNlL2FuZ3VsYXIvYW5ndWxhci10b3VyLW9mLWhlcm9lcy9zcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENBO0VBQ0UsV0FBQTtBQ0VGO0FEQUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNHRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHRjtBRERBO0VBQ0UseUJBQUE7QUNJRjtBREZBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0tGO0FESEE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuYnV0dG9uLmNsZWFyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5idXR0b24uY2xlYXIge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbiIsIi8qIE1lc3NhZ2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuXG5ib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5idXR0b24uY2xlYXIge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbmJ1dHRvbi5jbGVhciB7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() { }
}


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gianpietro/Workspace/angular/angular-tour-of-heroes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map