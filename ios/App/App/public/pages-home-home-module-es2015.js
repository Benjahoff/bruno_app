(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.bruno-text-home {\n  color: #a94541;\n  font-size: 0.4em;\n}\n.bruno-text-info {\n  color: #a94541;\n  font-size: 1.8em;\n}\n.alert-class {\n  --background: #a94541 !important;\n}\n.alert-ok {\n  color: #a94541 !important;\n}\n.div__width-logo {\n  width: 12em;\n}\n.container-btn {\n  position: relative;\n  text-align: center;\n}\n.btn-home {\n  width: 40% !important;\n}\n.text-btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.div__background {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-position-x: center;\n  background-image: url('fondoInicio.png');\n}\n.div__background-wave {\n  height: 100vh;\n  width: 100%;\n}\n.img__width-icon {\n  min-width: 40px;\n  width: 50px;\n}\n.container-elements {\n  z-index: 2;\n}\n@media only screen and (min-width: 300px) {\n  .bruno-text-home {\n    font-size: 0.3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RkFBQTtBQUNSO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUVJLGdDQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtBQUFKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUE7RUFDSSxVQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5icnVuby10ZXh0LWhvbWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbiAgICBmb250LXNpemU6IDAuNGVtO1xyXG59XHJcblxyXG4uYnJ1bm8tdGV4dC1pbmZvIHtcclxuICAgIGNvbG9yOiAjYTk0NTQxO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuLmFsZXJ0LWNsYXNzXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2E5NDU0MSAhaW1wb3J0YW50OyAgXHJcbn1cclxuICAgIFxyXG4uYWxlcnQtb2t7XHJcbiAgICBjb2xvcjogI2E5NDU0MSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2X193aWR0aC1sb2dvIHtcclxuICAgIHdpZHRoOiAxMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJ0bntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1ob21le1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZW50cmFyLXZlcnRpY2FsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb25kb0luaWNpby5wbmcnKTtcclxufVxyXG5cclxuLmRpdl9fYmFja2dyb3VuZC13YXZlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltZ19fd2lkdGgtaWNvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1lbGVtZW50cyB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuYnJ1bm8tdGV4dC1ob21lIHtcclxuICAgICAgICBmb250LXNpemU6IDAuM2VtO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: createTranslateLoader, HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"bprimary\">\r\n\r\n    <!-- <div class=\"position-absolute \">\r\n    </div> -->\r\n    <!--  <img class=\"div__background-wave position-absolute\" src=\"../../../assets/images/ola.png\" alt=\"\" srcset=\"\"> -->\r\n\r\n    <div class=\"container div__background\">\r\n        <div class=\"centrar-vertical\" style=\"height: 100vh;\">\r\n<!--             <app-language></app-language>\r\n -->            <div class=\" container-elements\">\r\n                <div class=\"row \">\r\n                    <div class=\"col-12 text-center\">\r\n                        <img src=\"../../../assets/Pantalla Inicio/Logo Bruno.png\" alt=\"\" class=\"div__width-logo\">\r\n                    </div>\r\n                    <div class=\"col-12 mt-4\">\r\n                        <div class=\"row px-4 justify-content-center\">\r\n                            <div class=\"col-3 text-center bruno-text-info\">\r\n                                <img class=\"img__width-icon\" src=\"../../../assets/Pantalla Inicio/Selecciona una categoria.png\" alt=\"\">\r\n                                <p class=\"mt-2 bruno-text-home\">{{'home.check' | translate | uppercase }}</p>\r\n                            </div>\r\n                            <div class=\"col-3 text-center bruno-text-info\">\r\n                                <img class=\"img__width-icon\" src=\"../../../assets/Pantalla Inicio/Hacer una foto.png\" alt=\"\">\r\n                                <p class=\"mt-2 bruno-text-home\">{{'home.scan' | translate | uppercase}}</p>\r\n                            </div>\r\n                            <div class=\"col-3 text-center bruno-text-info\">\r\n                                <img class=\"img__width-icon\" src=\"../../../assets/Pantalla Inicio/Conoce los ingredientes.png\" alt=\"\">\r\n                                <p class=\"mt-2 bruno-text-home\">{{'home.result' | translate | uppercase}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 container-btn text-center mt-3\">\r\n                        <img (emitClick)=\"redirect()\" src=\"../../../assets/Botones/Boton1.png\" class=\"btn-home\" >\r\n                        <div class=\"text-btn\" (click)=\"redirect()\">{{'home.button' | translate}}</div>\r\n                    </div>\r\n                    <!-- <span class=\"badge bg-danger mt-5\">Danger</span> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/scan.service */ "1IZq");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let HomePage = class HomePage {
    constructor(translate, route, _scanService, device, alertController) {
        this.translate = translate;
        this.route = route;
        this._scanService = _scanService;
        this.device = device;
        this.alertController = alertController;
        this.times = 0;
        this.routeLink = "scan-info";
    }
    ngOnInit() {
        const data = {
            device: this.device.uuid
        };
        this._scanService.getTimes(data).subscribe((resp) => {
            console.log(resp);
            if (resp.times) {
                console.log(this.times);
                this.presentAlertConfirm();
            }
            if (resp.satisfaccion == "" || resp.satisfaccion == "tarde") {
                this.presentAlertConfirmSatisfaccion();
            }
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant("feedback.text1"),
                message: this.translate.instant("feedback.text2") + '<br><strong>' + this.translate.instant("feedback.text3") + '</strong>',
                animated: true,
                cssClass: 'alert-class',
                buttons: [
                    {
                        text: this.translate.instant("feedback.confirm"),
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.setFeedback('ok');
                            window.open(this.translate.instant("feedback.linkFeedback"), '_system');
                        }
                    },
                    {
                        text: this.translate.instant("feedback.cancel"),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.setFeedback('cancel');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setFeedback(tipo) {
        const data = {
            device: this.device.uuid,
            tipo: tipo
        };
        this._scanService.setFeedback(data).subscribe((resp) => {
            console.log(tipo);
        });
    }
    redirect() {
        if (this.routeLink) {
            this.route.navigate([this.routeLink]);
        }
    }
    presentAlertConfirmSatisfaccion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant("check.title"),
                //message: this.translate.instant("feedback.text2")+'<br><strong>'+this.translate.instant("feedback.text3")+'</strong>',
                animated: true,
                cssClass: 'alert-class',
                buttons: [
                    {
                        text: this.translate.instant("check.answer1"),
                        cssClass: 'secondary',
                        handler: () => {
                            this.setFeedback('muy');
                        }
                    },
                    {
                        text: this.translate.instant("check.answer2"),
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.setFeedbackSatisfaccion('poco');
                        }
                    },
                    {
                        text: this.translate.instant("check.answer3"),
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.setFeedbackSatisfaccion('nada');
                        }
                    },
                    {
                        text: this.translate.instant("check.answer4"),
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.setFeedbackSatisfaccion('tarde');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setFeedbackSatisfaccion(tipo) {
        const data = {
            device: this.device.uuid,
            tipo: tipo
        };
        this._scanService.setFeedbackSatisfaccion(data).subscribe((resp) => {
            console.log(tipo);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_scan_service__WEBPACK_IMPORTED_MODULE_5__["ScanService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map