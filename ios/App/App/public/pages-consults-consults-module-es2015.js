(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consults-consults-module"],{

/***/ "0Ch5":
/*!***************************************************!*\
  !*** ./src/app/pages/consults/consults.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".listaHeight {\n  top: 30%;\n  /* height: 50vh; */\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25zdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY29uc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RhSGVpZ2h0IHtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgLyogaGVpZ2h0OiA1MHZoOyAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "6Jug":
/*!*************************************************!*\
  !*** ./src/app/pages/consults/consults.page.ts ***!
  \*************************************************/
/*! exports provided: ConsultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultsPage", function() { return ConsultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consults_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consults.page.html */ "W2bp");
/* harmony import */ var _consults_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consults.page.scss */ "0Ch5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_scan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/scan.service */ "1IZq");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");








let ConsultsPage = class ConsultsPage {
    constructor(route, translate, _scanService, device) {
        this.route = route;
        this.translate = translate;
        this._scanService = _scanService;
        this.device = device;
    }
    ngOnInit() {
        this.getConsults();
    }
    returnHome() {
        this.route.navigate(['choice']);
    }
    getConsults() {
        //let ee = '5c87d62135d7f8b4'
        // this.device.uuid
        const data = {
            device: this.device.uuid
        };
        this.isLoading = true;
        this._scanService.getConsults(data).subscribe(resp => {
            this.isLoading = false;
            console.log(resp);
            this.consults = resp['consults'];
        }, err => {
            console.warn(err);
            this.isLoading = false;
        });
    }
    verConsulta(item) {
        localStorage.setItem("consult", JSON.stringify(item));
        this.route.navigate(['consult']);
    }
};
ConsultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_scan_service__WEBPACK_IMPORTED_MODULE_6__["ScanService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"] }
];
ConsultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-consults',
        template: _raw_loader_consults_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consults_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConsultsPage);



/***/ }),

/***/ "MNqO":
/*!***************************************************!*\
  !*** ./src/app/pages/consults/consults.module.ts ***!
  \***************************************************/
/*! exports provided: createTranslateLoader, ConsultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultsPageModule", function() { return ConsultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _consults_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consults-routing.module */ "NwbH");
/* harmony import */ var _consults_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consults.page */ "6Jug");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let ConsultsPageModule = class ConsultsPageModule {
};
ConsultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consults_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ],
        declarations: [_consults_page__WEBPACK_IMPORTED_MODULE_6__["ConsultsPage"]]
    })
], ConsultsPageModule);



/***/ }),

/***/ "NwbH":
/*!***********************************************************!*\
  !*** ./src/app/pages/consults/consults-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ConsultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultsPageRoutingModule", function() { return ConsultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _consults_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consults.page */ "6Jug");




const routes = [
    {
        path: '',
        component: _consults_page__WEBPACK_IMPORTED_MODULE_3__["ConsultsPage"]
    }
];
let ConsultsPageRoutingModule = class ConsultsPageRoutingModule {
};
ConsultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultsPageRoutingModule);



/***/ }),

/***/ "W2bp":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consults/consults.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"\">\r\n  <img class=\"position-absolute div__background-wavetop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n  <div class=\"position-absolute container contenedorModalTop\">\r\n      <div class=\"row mt-4\">\r\n          <div class=\"col-2 my-auto text-center\">\r\n              <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-8 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n              <p class=\"my-auto closeSectionText\">{{ 'consult.consults' | translate }}</p>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"container centrar-vertical listaHeight mt-4\" style=\"height: 69.4vh;\">\r\n        <div class=\"row mt-5 stepText mt-5\" *ngIf=\"isLoading\">            \r\n            <ion-spinner name=\"lines\"></ion-spinner>            \r\n        </div>  \r\n        <div class=\"row mt-5 stepText mt-5\" *ngIf=\"!isLoading\">\r\n            <div class=\"d-grid gap-2 mt-5\" *ngIf=\"consults.length > 0\">\r\n              <button class=\"btn btn-outline-dark\" *ngFor=\"let item of consults\" (click)=\"verConsulta(item)\">{{item['fecha'] | date: 'dd/MM/y HH:mm:ss'}}</button>\r\n            </div>\r\n            <div class=\"col-12 mt-5\" *ngIf=\"consults.length == 0\">\r\n                <p>{{ 'consult.empty' | translate }}</p>  \r\n            </div>          \r\n        </div>\r\n    </div>  \r\n    <img class=\"position-absolute div__background-wavebottom \" src=\"../../../assets/icon/infoWaveBottom.png \" alt=\" \">\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-consults-consults-module-es2015.js.map