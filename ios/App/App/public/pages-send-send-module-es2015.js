(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-send-module"],{

/***/ "IAvS":
/*!***************************************************!*\
  !*** ./src/app/pages/send/send-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SendPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPageRoutingModule", function() { return SendPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./send.page */ "mFFx");




const routes = [
    {
        path: '',
        component: _send_page__WEBPACK_IMPORTED_MODULE_3__["SendPage"]
    }
];
let SendPageRoutingModule = class SendPageRoutingModule {
};
SendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SendPageRoutingModule);



/***/ }),

/***/ "aSh7":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/send/send.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"bblue\">\r\n    <img class=\"position-absolute div__background-wavetop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n    <div class=\"position-absolute container contenedorModalTop\">\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-2 my-auto text-center\">\r\n                <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-8 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n                <p class=\"my-auto closeSectionText\">{{ 'send.title' | translate }}</p>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container centrar-vertical\">\r\n        <div class=\"row mt-5 \" *ngIf=\"!enviado\">\r\n            <form class=\"form-floating mb-3 needs-validation\">\r\n                <div class=\"form-floating mb-3\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"floatingInput\" placeholder=\"'send.name' | translate \" [ngClass]=\"{'is-invalid': nombre == ''}\" name=\"message\" [(ngModel)]='nombre' (keyup)=\"validarForm()\">\r\n                    <label for=\"floatingInput\">*{{'send.name' | translate }}</label>\r\n                </div>\r\n                <div class=\"form-floating mb-3\">\r\n                    <input type=\"email\" class=\"form-control\" id=\"floatingInput\" placeholder=\"'send.product' | translate \" [ngClass]=\"{'is-invalid': product == ''}\" name=\"message\" [(ngModel)]='product' (keyup)=\"validarForm()\">\r\n                    <label for=\"floatingInput\">*{{'send.product' | translate }}</label>\r\n                </div>\r\n                <div class=\"form-floating mb-3\">\r\n                    <input type=\"email\" class=\"form-control\" id=\"floatingInput\" placeholder=\"'send.mail' | translate \" [ngClass]=\"{'is-invalid': mail.indexOf('@') < 1 || mail.indexOf('.') < 1}\" name=\"message\" [(ngModel)]='mail' (keyup)=\"validarForm()\">\r\n                    <label for=\"floatingInput\">*{{'send.mail' | translate }}</label>\r\n                </div>\r\n                <div class=\"form-floating\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"floatingPassword\" placeholder=\"'send.message' | translate\" [ngClass]=\"{'is-invalid': message == ''}\" name=\"message\" [(ngModel)]='message' (keyup)=\"validarForm()\">\r\n                    <label for=\"floatingPassword\">*{{'send.message' | translate }}</label>\r\n                </div>\r\n                <div *ngIf=\"validacion\" class=\"alert alert-warning mt-2\" role=\"alert\">\r\n                    {{'send.datos' | translate}}\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"row mt-5 text-center\" *ngIf=\"enviado\">\r\n            <div class=\"col-12 my-auto text-center\">\r\n                <img class=\"div_alertbutton\" src=\"../../../assets/icon/warning.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-12 bruno-btn-home mt-3 my-auto text-center bruno-text-info2\">\r\n                <p class=\"my-auto closeSectionText\">{{ nombre | titlecase }}</p>\r\n            </div>\r\n            <div class=\"col-12 bruno-btn-home mt-3 my-auto text-center bruno-text-info2\">\r\n                <p class=\"my-auto closeSectionText\">{{ 'send.text1' | translate }}</p>\r\n            </div>\r\n            <div class=\"col-12 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n                <p class=\"my-auto closeSectionText\">{{ 'send.text2' | translate }}</p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center mt-3\">\r\n                <div class=\"col-12 spinner-grow text-info my-auto text-center\" role=\"status\">\r\n                    <span class=\"visually-hidden\">Loading...</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container btnBottomSendPhoto\" *ngIf=\"!enviado && !validacion\">\r\n        <app-button class=\"\" [btnText]=\"'send.button' | translate\" [primary]=\"true\" [loading]=\"isLoading\" (emitClick)=\"sendMessage()\"></app-button>\r\n    </div>\r\n    <img class=\"position-absolute div__background-wavebottom \" src=\"../../../assets/icon/infoWaveBottom.png \" alt=\" \">\r\n</ion-content>");

/***/ }),

/***/ "mFFx":
/*!*****************************************!*\
  !*** ./src/app/pages/send/send.page.ts ***!
  \*****************************************/
/*! exports provided: SendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPage", function() { return SendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_send_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./send.page.html */ "aSh7");
/* harmony import */ var _send_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send.page.scss */ "u8M3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/scan.service */ "1IZq");







let SendPage = class SendPage {
    constructor(route, _scanService, translate) {
        this.route = route;
        this._scanService = _scanService;
        this.translate = translate;
        this.isLoading = false;
        this.nombre = '';
        this.product = '';
        this.mail = '';
        this.message = '';
        this.validacion = true;
        this.enviado = false;
    }
    ngOnInit() {
    }
    returnHome() {
        this.route.navigate(['choice']);
    }
    validarForm() {
        if ((this.nombre == "") || (this.product == "") || (this.mail == "") || (this.message == "") || (this.mail.indexOf("@") < 1) || (this.mail.indexOf(".") < 1)) {
            this.validacion = true;
        }
        else {
            this.validacion = false;
        }
    }
    sendMessage() {
        //this.validarForm();
        if (!this.validacion) {
            this.isLoading = true;
            const data = {
                name: this.nombre,
                product: this.product,
                mail: this.mail,
                message: this.message
            };
            console.log("Los datos", data);
            this._scanService.sendMessage(data).subscribe(resp => {
                this.isLoading = false;
                this.enviado = true;
                var refreshIntervalId = setInterval(function () {
                    clearInterval(refreshIntervalId);
                    this.route.navigate(['choice']);
                }.bind(this), 5000);
            }, err => {
                console.warn(err);
                this.isLoading = false;
            });
        }
    }
};
SendPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_6__["ScanService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
SendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-send',
        template: _raw_loader_send_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_send_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SendPage);



/***/ }),

/***/ "u8M3":
/*!*******************************************!*\
  !*** ./src/app/pages/send/send.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.stepText {\n  color: #D7ECED;\n}\n.bruno-btn-home {\n  color: #a94541;\n  font-size: 0.6em;\n}\n.bruno-text-info {\n  color: #ffffff;\n  font-size: 1.3em;\n}\n.bruno-text-info2 {\n  color: #ffffff;\n  font-size: 0.7em;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 600px;\n}\n.cameraPreview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4 !important;\n}\n.contenedorModalTop {\n  z-index: 11;\n}\n.contenedorModalBottom {\n  z-index: 11;\n  bottom: 0;\n}\n.div__background-wave {\n  width: 100%;\n}\n.div__background-wavetop {\n  width: 100%;\n  z-index: -5;\n}\n.div__background-wavebottom {\n  width: 100%;\n  z-index: -5;\n  bottom: 0;\n}\n.div_closebutton {\n  width: 25px;\n  z-index: 999;\n}\n.div_alertbutton {\n  width: 50px;\n  z-index: 999;\n}\n.container-elements {\n  z-index: 2 !important;\n}\n.contenedorBoton {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.text-blue {\n  color: #a94541;\n}\n.closeSectionText {\n  font-size: 1.2em;\n}\n.btnBottomSendPhoto {\n  position: absolute;\n  width: 100%;\n  bottom: 6vh;\n  padding-bottom: 8px;\n}\n@media only screen and (min-width: 300px) {\n  .stepText {\n    font-size: 0.9em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNSO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxxQkFBQTtBQUNKO0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNlbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdGVwVGV4dCB7XHJcbiAgICBjb2xvcjogI0Q3RUNFRDtcclxufVxyXG5cclxuLmJydW5vLWJ0bi1ob21lIHtcclxuICAgIGNvbG9yOiAjYTk0NTQxO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxufVxyXG5cclxuLmJydW5vLXRleHQtaW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcbi5icnVuby10ZXh0LWluZm8yIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmNlbnRyYXItdmVydGljYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYW1lcmFQcmV2aWV3IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVuZWRvck1vZGFsVG9wIHtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4uY29udGVuZWRvck1vZGFsQm90dG9tIHtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZGl2X19iYWNrZ3JvdW5kLXdhdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZXRvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC01O1xyXG59XHJcblxyXG4uZGl2X19iYWNrZ3JvdW5kLXdhdmVib3R0b20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtNTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmRpdl9jbG9zZWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmRpdl9hbGVydGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1lbGVtZW50cyB7XHJcbiAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yQm90b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5idG5Cb3R0b21TZW5kUGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDZ2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAgIC5zdGVwVGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "uHcA":
/*!*******************************************!*\
  !*** ./src/app/pages/send/send.module.ts ***!
  \*******************************************/
/*! exports provided: createTranslateLoader, SendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendPageModule", function() { return SendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _send_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-routing.module */ "IAvS");
/* harmony import */ var _send_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./send.page */ "mFFx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let SendPageModule = class SendPageModule {
};
SendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _send_routing_module__WEBPACK_IMPORTED_MODULE_6__["SendPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            })
        ],
        declarations: [_send_page__WEBPACK_IMPORTED_MODULE_7__["SendPage"]]
    })
], SendPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-send-send-module-es2015.js.map