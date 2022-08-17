(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-info-scan-info-module"],{

/***/ "1dDs":
/*!*****************************************************!*\
  !*** ./src/app/pages/scan-info/scan-info.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.stepText {\n  color: #D7ECED;\n  overflow-y: hidden;\n}\n.bruno-btn-home {\n  color: #a94541;\n  font-size: 0.6em;\n}\n.container-btn {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.no-disp {\n  filter: grayscale(1) !important;\n}\n.text-btn {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 0.7em;\n}\n.bruno-text-info {\n  color: #ffffff;\n  font-size: 1.3em;\n}\n.txt-white {\n  color: #ffffff !important;\n  font-size: 1.7em !important;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-zoom {\n  width: 205px !important;\n}\n.cameraPreview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4 !important;\n}\n.contenedorModalTop {\n  z-index: 11;\n}\n.contenedorModalBottom {\n  z-index: 11;\n  bottom: 0;\n}\n.div__background-wave {\n  width: 100%;\n}\n.div__background-wavetop {\n  width: 100%;\n  z-index: -5;\n}\n.div__background-wavebottom {\n  width: 100%;\n  z-index: -5;\n  bottom: 0;\n}\n.icon {\n  filter: drop-shadow(-2px 2px 15px #74c5c9);\n}\n.div_closebutton {\n  width: 30px;\n  z-index: 999;\n}\n.container-elements {\n  z-index: 2 !important;\n}\n.backWhite {\n  background-color: #ffffff !important;\n  z-index: 100;\n}\n.contenedorBoton {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.btnBottomSendPhoto {\n  position: absolute;\n  bottom: 6vh;\n  padding-bottom: 8px;\n}\n.text-blue {\n  color: #a94541;\n}\n.shadow {\n  border-radius: 50%;\n  box-shadow: 10px 10px 5px 12px lightblue;\n}\n.closeSectionText {\n  font-size: 1.2em;\n}\n@media only screen and (min-width: 300px) {\n  .stepText {\n    font-size: 0.9em;\n    margin-bottom: 60px;\n  }\n}\n@media screen and (min-height: 739px) {\n  .img-zoom {\n    width: 300px !important;\n  }\n\n  .icon {\n    width: 120px;\n  }\n}\n@media screen and (min-height: 844px) {\n  .img-zoom {\n    width: 320px !important;\n  }\n\n  .icon {\n    width: 135px;\n  }\n}\n@media screen and (min-height: 910px) {\n  .img-zoom {\n    width: 350px !important;\n  }\n\n  .marginNull {\n    margin-top: 0 !important;\n  }\n\n  .icon {\n    width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2FuLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ1I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksK0JBQUE7QUFDSjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHSjtBQUFBO0VBQ0ksdUJBQUE7QUFHSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBR0o7QUFBQTtFQUNJLFdBQUE7QUFHSjtBQUFBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFHSjtBQUFBO0VBQ0ksV0FBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUdKO0FBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFHSjtBQUFBO0VBQ0ksMENBQUE7QUFHSjtBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSjtBQUFBO0VBQ0kscUJBQUE7QUFHSjtBQURBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FBSUo7QUFGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUZBO0VBQ0ksY0FBQTtBQUtKO0FBRkE7RUFDSSxrQkFBQTtFQUNBLHdDQUFBO0FBS0o7QUFIQTtFQUNJLGdCQUFBO0FBTUo7QUFIQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQU1OO0FBQ0Y7QUFEQTtFQUNJO0lBQ0ksdUJBQUE7RUFHTjs7RUFERTtJQUNJLFlBQUE7RUFJTjtBQUNGO0FBREE7RUFDSTtJQUNJLHVCQUFBO0VBR047O0VBREU7SUFDSSxZQUFBO0VBSU47QUFDRjtBQURBO0VBQ0k7SUFDSSx1QkFBQTtFQUdOOztFQURFO0lBQ0ksd0JBQUE7RUFJTjs7RUFGRTtJQUNJLFlBQUE7RUFLTjtBQUNGIiwiZmlsZSI6InNjYW4taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN0ZXBUZXh0IHtcclxuICAgIGNvbG9yOiAjRDdFQ0VEO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uYnJ1bm8tYnRuLWhvbWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJ0bntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5vLWRpc3Age1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmJydW5vLXRleHQtaW5mbyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn1cclxuXHJcbi50eHQtd2hpdGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW0gIWltcG9ydGFudDtcclxufVxyXG4uY2VudHJhci12ZXJ0aWNhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLXpvb217XHJcbiAgICB3aWR0aDogMjA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbWVyYVByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yTW9kYWxUb3Age1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yTW9kYWxCb3R0b20ge1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdl9fYmFja2dyb3VuZC13YXZldG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZWJvdHRvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC01O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTJweCAycHggMTVweCByZ2IoMTE2LCAxOTcsIDIwMSkpO1xyXG59XHJcblxyXG4uZGl2X2Nsb3NlYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWVsZW1lbnRzIHtcclxuICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG4uYmFja1doaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5jb250ZW5lZG9yQm90b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5Cb3R0b21TZW5kUGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA2dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udGV4dC1ibHVlIHtcclxuICAgIGNvbG9yOiAjYTk0NTQxO1xyXG59XHJcblxyXG4uc2hhZG93e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAxMnB4IGxpZ2h0Ymx1ZTtcclxufVxyXG4uY2xvc2VTZWN0aW9uVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuc3RlcFRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vczhcclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4taGVpZ2h0OiA3MzlweCApIHtcclxuICAgIC5pbWctem9vbXtcclxuICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxufVxyXG4vL3hyIDEycHJvIHBpeGVsXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLWhlaWdodDogODQ0cHggKSB7XHJcbiAgICAuaW1nLXpvb217XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgfVxyXG59XHJcbi8vczIwIFVsdHJhXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLWhlaWdodDogOTEwcHggKSB7XHJcbiAgICAuaW1nLXpvb217XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luTnVsbHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "3Vkk":
/*!***************************************************!*\
  !*** ./src/app/pages/scan-info/scan-info.page.ts ***!
  \***************************************************/
/*! exports provided: ScanInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanInfoPage", function() { return ScanInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scan_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scan-info.page.html */ "uIY0");
/* harmony import */ var _scan_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan-info.page.scss */ "1dDs");
/* harmony import */ var _components_modal_busqueda_modal_busqueda_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal-busqueda/modal-busqueda.page */ "UUui");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let ScanInfoPage = class ScanInfoPage {
    constructor(modalCtrl, route, translate) {
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.translate = translate;
        this.routeLink = "choice";
    }
    ngOnInit() {
    }
    returnHome() {
        this.route.navigate(['home']);
    }
    redirect() {
        /* if(this.loading){
          return;
        }
        this.emitClick.emit(); */
        if (this.routeLink) {
            this.route.navigate([this.routeLink]);
        }
    }
    btnChoice(type) {
        this.route.navigate(['scan/' + type]);
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_busqueda_modal_busqueda_page__WEBPACK_IMPORTED_MODULE_3__["ModalBusquedaPage"]
            });
            yield modal.present();
        });
    }
};
ScanInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
ScanInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-scan-info',
        template: _raw_loader_scan_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scan_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScanInfoPage);



/***/ }),

/***/ "iuPZ":
/*!*************************************************************!*\
  !*** ./src/app/pages/scan-info/scan-info-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ScanInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanInfoPageRoutingModule", function() { return ScanInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scan_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-info.page */ "3Vkk");




const routes = [
    {
        path: '',
        component: _scan_info_page__WEBPACK_IMPORTED_MODULE_3__["ScanInfoPage"]
    }
];
let ScanInfoPageRoutingModule = class ScanInfoPageRoutingModule {
};
ScanInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanInfoPageRoutingModule);



/***/ }),

/***/ "qpqf":
/*!*****************************************************!*\
  !*** ./src/app/pages/scan-info/scan-info.module.ts ***!
  \*****************************************************/
/*! exports provided: createTranslateLoader, ScanInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanInfoPageModule", function() { return ScanInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _scan_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-info-routing.module */ "iuPZ");
/* harmony import */ var _scan_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan-info.page */ "3Vkk");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let ScanInfoPageModule = class ScanInfoPageModule {
};
ScanInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scan_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanInfoPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ],
        declarations: [_scan_info_page__WEBPACK_IMPORTED_MODULE_6__["ScanInfoPage"]]
    })
], ScanInfoPageModule);



/***/ }),

/***/ "uIY0":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan-info/scan-info.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"light\">\r\n    <img class=\"position-absolute div__background-wavetop\" src=\"../../../assets/v1.1/FONDOS/Fondo titulo.png\" alt=\"\">\r\n    <div class=\"position-absolute container contenedorModalTop\">\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col  my-auto text-center\">\r\n                <img class=\"div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/v1.1/BOTONES/Atras.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-8 bruno-btn-home my-auto text-center \">\r\n                <h3 class=\"my-auto closeSectionText txt-white\">{{'choice.text' | translate}}</h3>\r\n            </div>\r\n            <div class=\"col\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container centrar-vertical \"  style=\"height: 100vh;\">\r\n        <div class=\"row stepText\">\r\n            <div class=\"col-12  justify-content-center text-center\">\r\n                <div>\r\n                    <img class=\"img-fluid icon\" width=\"100\" src=\"../../../assets/Categorias/Alimentos.png\" alt=\"Food\" (click)=\"btnChoice('6')\">\r\n                    <h5 class=\"text-blue\">{{'choice.food' | translate}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 mt-2 justify-content-center text-center\">\r\n                <div>\r\n                    <img class=\"img-fluid icon\" width=\"100\" src=\"../../../assets/Categorias/Higiene.png\" alt=\"Higiene\"  (click)=\"btnChoice('3')\">\r\n                    <h5 class=\"text-blue\">{{'choice.higiene' | translate}}</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"position-absolute contenedorModalBottom\" >\r\n            <img class=\"div__background-wavebottom\" src=\"../../../assets/icon/infoWaveBottom.png\" alt=\"\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n<!--     <img class=\"position-absolute div__background-wavebottom\" src=\"../../../assets/icon/infoWaveBottom.png\" alt=\"\">\r\n -->\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-scan-info-scan-info-module-es2015.js.map