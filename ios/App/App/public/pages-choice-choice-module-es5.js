(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choice-choice-module"], {
    /***/
    "9GvP":
    /*!***********************************************!*\
      !*** ./src/app/pages/choice/choice.module.ts ***!
      \***********************************************/

    /*! exports provided: createTranslateLoader, ChoicePageModule */

    /***/
    function GvP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChoicePageModule", function () {
        return ChoicePageModule;
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


      var _choice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choice.page */
      "QnRp");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _choice_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./choice-routing.module */
      "o4DE"); //import { ChoiceRoutingModule, ChoicePageRoutingModule } from './choice-routing.module';


      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
      }

      var ChoicePageModule = function ChoicePageModule() {
        _classCallCheck(this, ChoicePageModule);
      };

      ChoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choice_routing_module__WEBPACK_IMPORTED_MODULE_10__["ChoicePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        })],
        declarations: [_choice_page__WEBPACK_IMPORTED_MODULE_5__["ChoicePage"]]
      })], ChoicePageModule);
      /***/
    },

    /***/
    "IG9+":
    /*!***********************************************!*\
      !*** ./src/app/pages/choice/choice.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function IG9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\nion-content {\n  --background: white\n   !important;\n}\n.stepText {\n  color: #D7ECED;\n}\n.bruno-btn-home {\n  color: #a94541;\n  font-size: 0.6em;\n}\n.bruno-choice {\n  color: #a94541;\n  font-size: 1em;\n}\n.bruno-text-info {\n  color: #ffffff;\n  font-size: 1.3em;\n}\n.bruno-text-info2 {\n  color: #ffffff;\n  font-size: 0.7em;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cameraPreview {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4 !important;\n}\n.contenedorModalTop {\n  z-index: 11;\n}\n.contenedorModalBottom {\n  z-index: 11;\n  bottom: 0;\n}\n.div__background-wave {\n  width: 100%;\n}\n.div__background-wavetop {\n  width: 100%;\n  z-index: -5;\n}\n.div__background-wavebottom {\n  width: 100%;\n  z-index: -5;\n  bottom: 0;\n}\n.div_closebutton {\n  width: 25px;\n  z-index: 999;\n}\n.container-elements {\n  z-index: 2 !important;\n}\n.contenedorBoton {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.btnBottomSendPhoto {\n  position: absolute;\n  bottom: 6vh;\n  padding-bottom: 8px;\n}\n.text-blue {\n  color: #a94541;\n}\n.closeSectionText {\n  font-size: 1.2em;\n}\n@media only screen and (min-width: 300px) {\n  .stepText {\n    font-size: 0.9em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaG9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlGQUFBO0FBQ1I7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJO2FBQUE7QUFFSjtBQUVBO0VBQ0ksY0FBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1BO0VBQ0ksV0FBQTtBQUhKO0FBTUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUE7RUFDSSxXQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBSEo7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUhKO0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxxQkFBQTtBQUhKO0FBTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFNQTtFQUNJLGNBQUE7QUFISjtBQU1BO0VBQ0ksZ0JBQUE7QUFISjtBQU1BO0VBQ0k7SUFDSSxnQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoiY2hvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlXHJcbiAgICAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0ZXBUZXh0IHtcclxuICAgIGNvbG9yOiAjRDdFQ0VEO1xyXG59XHJcblxyXG4uYnJ1bm8tYnRuLWhvbWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG59XHJcblxyXG4uYnJ1bm8tY2hvaWNlIHtcclxuICAgIGNvbG9yOiAjYTk0NTQxO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5icnVuby10ZXh0LWluZm8ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG59XHJcblxyXG4uYnJ1bm8tdGV4dC1pbmZvMiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5jZW50cmFyLXZlcnRpY2FsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgICBcclxufVxyXG5cclxuLmNhbWVyYVByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yTW9kYWxUb3Age1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yTW9kYWxCb3R0b20ge1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdl9fYmFja2dyb3VuZC13YXZldG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZWJvdHRvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC01O1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZGl2X2Nsb3NlYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWVsZW1lbnRzIHtcclxuICAgIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JCb3RvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkJvdHRvbVNlbmRQaG90byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDZ2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAgIC5zdGVwVGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "QnRp":
    /*!*********************************************!*\
      !*** ./src/app/pages/choice/choice.page.ts ***!
      \*********************************************/

    /*! exports provided: ChoicePage */

    /***/
    function QnRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChoicePage", function () {
        return ChoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_choice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./choice.page.html */
      "n+Bv");
      /* harmony import */


      var _choice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./choice.page.scss */
      "IG9+");
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

      var ChoicePage = /*#__PURE__*/function () {
        function ChoicePage(route, translate) {
          _classCallCheck(this, ChoicePage);

          this.route = route;
          this.translate = translate;
          this.routeLink = "scan";
          this.routeLink2 = "consults";
        }

        _createClass(ChoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "returnHome",
          value: function returnHome() {
            this.route.navigate(['home']);
          }
        }, {
          key: "btnChoice",
          value: function btnChoice(type) {
            //this.route.navigate(['camera']);
            this.route.navigate(['scan/' + type]);
          }
        }]);

        return ChoicePage;
      }();

      ChoicePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      ChoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choice',
        template: _raw_loader_choice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChoicePage);
      /***/
    },

    /***/
    "n+Bv":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choice/choice.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function nBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <img class=\"position-absolute div__background-wavetop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n    <div class=\"position-absolute container contenedorModalTop\">\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-2 my-auto text-center\">\r\n                <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-8 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n                <p class=\"my-auto closeSectionText\">{{ 'choice.text' | translate }}</p>\r\n            </div>\r\n            <div class=\"col-2\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container centrar-vertical \" style=\"height: 69.4vh;\">\r\n        <div class=\"row mt-5 stepText mt-5\">\r\n            <div class=\"col-12 mt-5\">\r\n                <div class=\"row\" (click)=\"btnChoice('6')\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-4\">\r\n                        <img class=\"img-fluid\" width=\"100\" src=\"../../../assets/icon/food.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\" col-6 mt-3 bruno-choice\">\r\n                        <h4>{{'choice.food' | translate}}</h4>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 mt-5\">\r\n                <div class=\"row\" (click)=\"btnChoice('3')\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-4\">\r\n                        <img class=\"img-fluid\" width=\"100\" src=\"../../../assets/icon/bpc.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\" col-6 mt-3 bruno-choice\">\r\n                        <h4>{{'choice.bpc' | translate}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 mt-5\">\r\n                <div class=\"row\" (click)=\"btnChoice('3')\">\r\n                    <div class=\"col-2\"></div>\r\n                    <div class=\"col-4\">\r\n                        <img class=\"img-fluid\" width=\"100\" src=\"../../../assets/icon/home.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\" col-6 mt-3 bruno-choice\">\r\n                        <h4>{{'choice.home' | translate}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>       \r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12 text-center fixed-bottom mb-5\">\r\n        <app-button [btnText]=\"'consult.consults' | translate\" [routeLink]=\"this.routeLink2\"></app-button>\r\n    </div>\r\n    <img class=\"position-absolute div__background-wavebottom \" src=\"../../../assets/icon/infoWaveBottom.png \" alt=\" \">\r\n</ion-content>";
      /***/
    },

    /***/
    "o4DE":
    /*!*******************************************************!*\
      !*** ./src/app/pages/choice/choice-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ChoicePageRoutingModule */

    /***/
    function o4DE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChoicePageRoutingModule", function () {
        return ChoicePageRoutingModule;
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


      var _choice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choice.page */
      "QnRp");

      var routes = [{
        path: '',
        component: _choice_page__WEBPACK_IMPORTED_MODULE_3__["ChoicePage"]
      }];

      var ChoicePageRoutingModule = function ChoicePageRoutingModule() {
        _classCallCheck(this, ChoicePageRoutingModule);
      };

      ChoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChoicePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-choice-choice-module-es5.js.map