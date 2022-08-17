(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consult-consult-module"], {
    /***/
    "BUPX":
    /*!***********************************************!*\
      !*** ./src/app/pages/consult/consult.page.ts ***!
      \***********************************************/

    /*! exports provided: ConsultPage */

    /***/
    function BUPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultPage", function () {
        return ConsultPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_consult_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./consult.page.html */
      "Fw9D");
      /* harmony import */


      var _consult_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./consult.page.scss */
      "w4UH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _utils_endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils/endpoint */
      "GIzf");
      /* harmony import */


      var _services_scan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/scan.service */
      "1IZq");

      var ConsultPage = /*#__PURE__*/function () {
        function ConsultPage(route, translate, _scanService) {
          _classCallCheck(this, ConsultPage);

          this.route = route;
          this.translate = translate;
          this._scanService = _scanService;
          this.ruta = "".concat(_utils_endpoint__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"], "/");
        }

        _createClass(ConsultPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getConsult();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.getConsult();
          }
        }, {
          key: "returnHome",
          value: function returnHome() {
            localStorage.removeItem("consult");
            this.route.navigate(['consults']);
          }
        }, {
          key: "getConsult",
          value: function getConsult() {
            this.isCollapsedimg = false;
            this.isCollapseding = false;
            this.isCollapsedtex = false;
            this.isLoading = true;
            this.myConsult = JSON.parse(localStorage['consult'] || '{}');
            this.recargar(this.myConsult);
            this.isLoading = false;
          }
        }, {
          key: "changeExpande",
          value: function changeExpande(item) {
            console.log(item, "item1");
            item['collapse'] = !item['collapse'];
            console.log(item, "item2");
          }
        }, {
          key: "recargar",
          value: function recargar(consulta) {
            console.log(consulta);
            this.ingredientes = consulta['ingredientes'];
          }
        }, {
          key: "downloadPDF",
          value: function downloadPDF(id) {
            this.isCollapseding = false;
            this.isCollapsedtex = false;
            this.isCollapsedimg = false;

            this._scanService.generatePdfConsultLink(id).subscribe(function (resp) {
              window.open(resp['link']);
            });
          }
        }, {
          key: "collapseIng",
          value: function collapseIng() {
            this.isCollapsedimg = false;
            this.isCollapsedtex = false;
            this.isCollapseding = !this.isCollapseding;
          }
        }, {
          key: "collapseImg",
          value: function collapseImg() {
            this.isCollapseding = false;
            this.isCollapsedtex = false;
            this.isCollapsedimg = !this.isCollapsedimg;
          }
        }, {
          key: "collapseTex",
          value: function collapseTex() {
            this.isCollapseding = false;
            this.isCollapsedtex = false;
            this.isCollapsedtex = !this.isCollapsedtex;
          }
        }]);

        return ConsultPage;
      }();

      ConsultPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _services_scan_service__WEBPACK_IMPORTED_MODULE_7__["ScanService"]
        }];
      };

      ConsultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-consult',
        template: _raw_loader_consult_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consult_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConsultPage);
      /***/
    },

    /***/
    "Fw9D":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consult/consult.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fw9D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color=\"\">\r\n  <img class=\"position-absolute div__background-wavetop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n  <div class=\"position-absolute container contenedorModalTop\">\r\n      <div class=\"row mt-4\">\r\n          <div class=\"col-2 my-auto text-center\">\r\n              <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"col-8 bruno-btn-home my-auto text-center text-white bruno-text-info2\">\r\n              <p class=\"my-auto closeSectionText\">{{ 'consult.consult' | translate }} </p>              \r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n      </div>\r\n  </div>\r\n  <div class=\"container centrar-vertical listaHeight mt-4\">\r\n    <div class=\"row mt-5 stepText mt-5\" *ngIf=\"isLoading\">\r\n      <ion-spinner name=\"lines\"></ion-spinner>\r\n    </div>      \r\n    <div class=\"row mt-5 stepText mt-5\" *ngIf=\"!isLoading\">\r\n      <div class=\"d-grid gap-2 mt-5\">\r\n        <button class=\"btn btn-outline-dark\">{{'consult.date' | translate}} {{myConsult['fecha'] | date: 'dd/MM/y HH:mm:ss'}} # {{myConsult['id']}}</button>\r\n        <button class=\"btn btn-outline-dark\" (click)=\"collapseIng()\" [attr.aria-expanded]=\"isCollapseding\" aria-controls=\"collapseBasic\">{{'result.ingredient' | translate}}</button>\r\n        <app-expandable expandHeight=\"100%\" [expanded]=\"isCollapseding\">              \r\n          <div class=\"d-grid gap-2 mt-1\" *ngFor=\"let item of ingredientes\">\r\n            <div class=\"row\">\r\n              <div class=\"col-10\">\r\n                <button class=\"btn btn-sm\" [ngStyle]=\"{'color': item['color_ingrediente']}\" (click)=\"item['collapse'] = !item['collapse']\" \r\n                        [attr.aria-expanded]=\"!item['collapse']\" aria-controls=\"collapseBasic\" *ngIf=\"item['sinonimo']!=''\">{{item['sinonimo']}}\r\n                </button>                \r\n              </div>\r\n              <div class=\"col-2\">\r\n                <div [ngStyle]=\"{'background-color': item['color']}\" class=\"text-center riesgo\">!</div>\r\n              </div>\r\n            </div>\r\n            <app-expandable expandHeight=\"100%\" [expanded]=\"!item['collapse']\"  *ngIf=\"item['sinonimo']!=''\">                  \r\n              <div class=\"well well-lg card card-block card-header\">\r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\">{{'history.matching' | translate}}: {{item['reconocimiento']}}%</small>                                                  \r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\">{{'history.ingredient' | translate}}: {{item['nombre']}}</small>\r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\"><strong>{{'history.report' | translate}}:</strong></small>\r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\">{{item['reporte']}}</small>\r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\"><strong>{{'history.reference' | translate}}:</strong></small>\r\n                <small [ngStyle]=\"{'color': item['color_reporte']}\">{{item['referencia']}}</small>                \r\n              </div>                \r\n            </app-expandable>                    \r\n          </div>      \r\n        </app-expandable>\r\n        <button class=\"btn btn-outline-dark\" (click)=\"collapseImg()\"\r\n                [attr.aria-expanded]=\"isCollapsedimg\" aria-controls=\"collapseBasic\">{{'consult.image' | translate}}\r\n        </button>                    \r\n        <app-expandable expandHeight=\"100%\" [expanded]=\"isCollapsedimg\">\r\n          <img class=\" div_closebutton\" src=\"{{ruta}}{{myConsult['image_url']}}\" alt=\"\">\r\n        </app-expandable>\r\n        <button class=\"btn btn-outline-dark\" (click)=\"collapseTex()\"\r\n                [attr.aria-expanded]=\"isCollapsedtex\" aria-controls=\"collapseBasic\">{{'consult.textmaching' | translate}}\r\n        </button>                    \r\n        <app-expandable expandHeight=\"100%\" [expanded]=\"isCollapsedtex\">\r\n          <p>{{myConsult['texto']}}</p>\r\n        </app-expandable>\r\n        <button class=\"btn btn-outline-dark\" (click)=\"downloadPDF(myConsult['id'])\">PDF</button>\r\n      </div>          \r\n    </div>\r\n  </div> \r\n   \r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "MOtD":
    /*!*********************************************************!*\
      !*** ./src/app/pages/consult/consult-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ConsultPageRoutingModule */

    /***/
    function MOtD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultPageRoutingModule", function () {
        return ConsultPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _consult_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consult.page */
      "BUPX");

      var routes = [{
        path: '',
        component: _consult_page__WEBPACK_IMPORTED_MODULE_3__["ConsultPage"]
      }];

      var ConsultPageRoutingModule = function ConsultPageRoutingModule() {
        _classCallCheck(this, ConsultPageRoutingModule);
      };

      ConsultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConsultPageRoutingModule);
      /***/
    },

    /***/
    "RbE5":
    /*!*************************************************!*\
      !*** ./src/app/pages/consult/consult.module.ts ***!
      \*************************************************/

    /*! exports provided: createTranslateLoader, ConsultPageModule */

    /***/
    function RbE5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultPageModule", function () {
        return ConsultPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _consult_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./consult-routing.module */
      "MOtD");
      /* harmony import */


      var _consult_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consult.page */
      "BUPX");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
      }

      var ConsultPageModule = function ConsultPageModule() {
        _classCallCheck(this, ConsultPageModule);
      };

      ConsultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _consult_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        })],
        declarations: [_consult_page__WEBPACK_IMPORTED_MODULE_6__["ConsultPage"]]
      })], ConsultPageModule);
      /***/
    },

    /***/
    "w4UH":
    /*!*************************************************!*\
      !*** ./src/app/pages/consult/consult.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function w4UH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".listaHeight {\n  top: 30%;\n  height: 90vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.riesgo {\n  border-radius: 50%;\n  margin-top: 3%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25zdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImNvbnN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RhSGVpZ2h0IHtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnJpZXNnb3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-consult-consult-module-es5.js.map