(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"], {
    /***/
    "/s3u":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */

    /***/
    function s3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "dTEF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"];
      });

      var Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "wzPO")).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "3mz4":
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
      \*****************************************************************/

    /*! no exports provided */

    /***/
    function mz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "6/gD":
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /*! exports provided: PhotoService */

    /***/
    function gD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
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


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/camera */
      "/s3u");
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/filesystem */
      "F7bV");
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/storage */
      "YwB3");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService() {
          _classCallCheck(this, PhotoService);

          this.photos = [];
          this.images = [];
          this.PHOTO_STORAGE = "fotos";

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };
        }

        _createClass(PhotoService, [{
          key: "addNewToGallery",
          value: function addNewToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var fotoCapturada;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                        allowEditing: false,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                        quality: 80
                      }).then(function (fc) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var saveImageFile;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.savePhoto(fc);

                                case 2:
                                  saveImageFile = _context.sent;
                                  this.photos.unshift(saveImageFile);
                                  /* Storage.set({
                                    key: this.PHOTO_STORAGE,
                                    value: JSON.stringify(this.photos)
                                  }) */

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      })["catch"](function () {
                        console.log("error");
                        return false;
                      });

                    case 2:
                      fotoCapturada = _context2.sent;

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "selectToGallery",
          value: function selectToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var fotoCapturada;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.photos = [];
                      _context4.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                        allowEditing: false,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos,
                        quality: 80
                      }).then(function (fc) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var saveImageFile;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return this.savePhoto(fc);

                                case 2:
                                  saveImageFile = _context3.sent;
                                  this.photos.unshift(saveImageFile);
                                  /* Storage.set({
                                    key: this.PHOTO_STORAGE,
                                    value: JSON.stringify(this.photos)
                                  }) */

                                case 4:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      })["catch"](function () {
                        console.log("error");
                        return false;
                      });

                    case 3:
                      fotoCapturada = _context4.sent;

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "savePhoto",
          value: function savePhoto(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var base64Data, fileName, savedFile;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.readAsBase64(cameraPhoto);

                    case 2:
                      base64Data = _context5.sent;
                      fileName = new Date().getTime + '.jpeg';
                      _context5.next = 6;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].writeFile({
                        path: fileName,
                        data: base64Data,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
                      });

                    case 6:
                      savedFile = _context5.sent;
                      this.savedFile = base64Data;
                      this.webPath = cameraPhoto.webPath;
                      return _context5.abrupt("return", {
                        filepath: fileName,
                        webViewPath: cameraPhoto.webPath
                      });

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "readAsBase64",
          value: function readAsBase64(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var response, blob;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return fetch(cameraPhoto.webPath);

                    case 2:
                      response = _context6.sent;
                      _context6.next = 5;
                      return response.blob();

                    case 5:
                      blob = _context6.sent;
                      _context6.next = 8;
                      return this.convertBlobToBase64(blob);

                    case 8:
                      return _context6.abrupt("return", _context6.sent);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadSaved",
          value: function loadSaved() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listPhotos, _iterator, _step, photo, readFile;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"].get({
                        key: this.PHOTO_STORAGE
                      });

                    case 2:
                      listPhotos = _context7.sent;
                      this.photos = JSON.parse(listPhotos.value) || [];
                      _iterator = _createForOfIteratorHelper(this.photos);
                      _context7.prev = 5;

                      _iterator.s();

                    case 7:
                      if ((_step = _iterator.n()).done) {
                        _context7.next = 15;
                        break;
                      }

                      photo = _step.value;
                      _context7.next = 11;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
                      });

                    case 11:
                      readFile = _context7.sent;
                      photo.webViewPath = "data:image/jpeg;base64,".concat(readFile.data);

                    case 13:
                      _context7.next = 7;
                      break;

                    case 15:
                      _context7.next = 20;
                      break;

                    case 17:
                      _context7.prev = 17;
                      _context7.t0 = _context7["catch"](5);

                      _iterator.e(_context7.t0);

                    case 20:
                      _context7.prev = 20;

                      _iterator.f();

                      return _context7.finish(20);

                    case 23:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[5, 17, 20, 23]]);
            }));
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PhotoService);
      /***/
    },

    /***/
    "F7bV":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
      \**************************************************************/

    /*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding, Filesystem */

    /***/
    function F7bV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return Filesystem;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "cyLK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Directory", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["Directory"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Encoding", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["Encoding"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemDirectory"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemEncoding"];
      });

      var Filesystem = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Filesystem', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "B5q2")).then(function (m) {
            return new m.FilesystemWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "FUe0":
    /*!****************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/index.js ***!
      \****************************************************/

    /*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */

    /***/
    function FUe0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorException", function () {
        return CapacitorException;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function () {
        return CapacitorPlatforms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExceptionCode", function () {
        return ExceptionCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebView", function () {
        return WebView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPlatform", function () {
        return addPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerPlugin", function () {
        return registerPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setPlatform", function () {
        return setPlatform;
      });
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var addPlatform = CapacitorPlatforms.addPlatform;
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var setPlatform = CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(ExceptionCode || (ExceptionCode = {}));

      var CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(CapacitorException, _Error);

        var _super = _createSuper(CapacitorException);

        function CapacitorException(message, code) {
          var _this3;

          _classCallCheck(this, CapacitorException);

          _this3 = _super.call(this, message);
          _this3.message = message;
          _this3.code = code;
          return _this3;
        }

        return CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var capCustomPlatform = win.CapacitorCustomPlatform || null;
        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        /**
         * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
         */

        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatform() !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context8.next = 11;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context8.next = 7;
                        break;
                      }

                      _context8.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context8.t0 = jsImplementation = _context8.sent;
                      _context8.next = 8;
                      break;

                    case 7:
                      _context8.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context8.t0;
                      _context8.next = 20;
                      break;

                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context8.next = 20;
                        break;
                      }

                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context8.next = 18;
                        break;
                      }

                      _context8.next = 15;
                      return jsImplementations['web']();

                    case 15:
                      _context8.t1 = jsImplementation = _context8.sent;
                      _context8.next = 19;
                      break;

                    case 18:
                      _context8.t1 = jsImplementation = jsImplementations['web'];

                    case 19:
                      jsImplementation = _context8.t1;

                    case 20:
                      return _context8.abrupt("return", jsImplementation);

                    case 21:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          return _context9.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return call;

                      case 2:
                        callbackId = _context10.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context11.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'toJSON':
                  return function () {
                    return {};
                  };

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      var registerPlugin = Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var Plugins = Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var registerWebPlugin = function registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var WebPlugin = /*#__PURE__*/function () {
        function WebPlugin(config) {
          _classCallCheck(this, WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this4 = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        return _context12.abrupt("return", _this4.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context13.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));

                function value() {
                  return _value.apply(this, arguments);
                }

                return value;
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function () {
            var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var listener;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.listeners = {};

                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }

                      this.windowListeners = {};

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function removeAllListeners() {
              return _removeAllListeners.apply(this, arguments);
            }

            return removeAllListeners;
          }()
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this5 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this5.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function () {
            var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(eventName, listenerFunc) {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      listeners = this.listeners[eventName];

                      if (listeners) {
                        _context15.next = 3;
                        break;
                      }

                      return _context15.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener

                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function removeListener(_x, _x2) {
              return _removeListener.apply(this, arguments);
            }

            return removeListener;
          }()
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return WebPlugin;
      }();

      var WebView = /*#__PURE__*/registerPlugin('WebView'); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "Fo4Z":
    /*!*******************************************!*\
      !*** ./src/app/pages/scan/scan.module.ts ***!
      \*******************************************/

    /*! exports provided: createTranslateLoader, ScanPageModule */

    /***/
    function Fo4Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanPageModule", function () {
        return ScanPageModule;
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


      var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scan-routing.module */
      "uNsd");
      /* harmony import */


      var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scan.page */
      "NpPW");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
      }

      var ScanPageModule = function ScanPageModule() {
        _classCallCheck(this, ScanPageModule);
      };

      ScanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
          }
        })],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
      })], ScanPageModule);
      /***/
    },

    /***/
    "NpPW":
    /*!*****************************************!*\
      !*** ./src/app/pages/scan/scan.page.ts ***!
      \*****************************************/

    /*! exports provided: ScanPage */

    /***/
    function NpPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanPage", function () {
        return ScanPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./scan.page.html */
      "eF8J");
      /* harmony import */


      var _scan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scan.page.scss */
      "vH3q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/scan.service */
      "1IZq");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "xS7M");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/photo.service */
      "6/gD");

      var ScanPage = /*#__PURE__*/function () {
        function ScanPage(ac, route, _scanService, photoService, translate, device) {
          _classCallCheck(this, ScanPage);

          this.ac = ac;
          this.route = route;
          this._scanService = _scanService;
          this.photoService = photoService;
          this.translate = translate;
          this.device = device;
          /* Captured image  */

          this.image = null;
          this.printLoad = false;
          /* Check if the camera is active */

          this.cameraActive = false;
          /* Check if the button must redirect or emit an event */
          //routeLink = false;

          /* Response ingredients list */

          this.ingredientsList = null;
        }

        _createClass(ScanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
                      //Add 'implements OnInit' to the class.
                      this.ac.params.subscribe(function (routeParams) {
                        _this6.type = routeParams.type;
                      });

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
          /**
           * Everytime that the user enter into this view this method is executed
           */

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.langs = this.translate.currentLang;
                      this.ingredientsList = null;
                      this.cameraActive = true; //await this.addPhotoToGallery()
                      //this.openCamera();

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "tekeAgain",
          value: function tekeAgain() {
            this.cameraActive = true;
          }
          /**
           * Open the camera
           */

          /* openCamera(){
            const cameraPreviewOptions: CameraPreviewOptions = {
              position: 'rear',
              parent: 'cameraPreview',
              className: 'cameraPreview',
              toBack: true
            };
            CameraPreview.start(cameraPreviewOptions).then(()=>{
              this.cameraActive = true;
            }, (err)=>{
              console.log("error apertura camara");
            }
            );
          } */

          /**
           * Stop the camera
           */

          /* async stopCamera(){
            await CameraPreview.stop();
            this.cameraActive = false;
          } */

          /**
           * Capture image
           */

          /* async captureImage(){
            const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
              quality: 90
            }
            const result = await CameraPreview.capture(cameraPreviewPictureOptions);
            this.image = 'data:image/jpeg;base64,' + result.value;
            this.stopCamera();
          } */

          /**
           * Return to home page
           */

        }, {
          key: "returnHome",
          value: function returnHome() {
            this.route.navigate(['scan-info']);
            /* this.stopCamera().then( r => {
            }); */
          }
        }, {
          key: "returnChoice",
          value: function returnChoice() {
            this.route.navigate(['scan-info']);
            /* this.stopCamera().then( r => {
            }); */
          }
          /**
           * Request to the backend to save photo and analize ingredients
           */

        }, {
          key: "sendPhoto",
          value: function sendPhoto() {
            var _this7 = this;

            //this.stopCamera().then( r => {
            this.isLoading = true;
            console.log(this.photoService.savedFile);
            console.log(this.photoService.webPath);
            var imagedata = this.photoService.savedFile.split(',')[1]; //
            //image: 'prueba',
            //image: imagedata,

            var data = {
              image: imagedata,
              code: '2y12U9.BrhUsFQvQzCXNQOWrAe4wIG9qo9H4DZ.BdJUQvTeQv/LKtC89eBRUNO',
              device: this.device.uuid,
              lang: this.langs,
              type: this.type
            };
            console.log('Los datos', data);

            this._scanService.sendPhoto(data).subscribe(function (resp) {
              _this7.isLoading = false;
              _this7.ingredientsList = resp['data']; //this.ingredientsList['product'] = [];
              //this.ingredientsList['product'] = product['default']['data']['product'];

              _this7.consultaId = resp['consulta'];
              console.log('Lista ', _this7.ingredientsList);
            }, function (err) {
              console.warn(err);
              _this7.isLoading = false;
            }); //});

          }
        }, {
          key: "downloadFile",
          value: function downloadFile() {
            var _this8 = this;

            this._scanService.generatePdfConsultLink(this.consultaId).subscribe(function (resp) {
              window.open(resp['link']);
              _this8.printLoad = false;
            }, function (err) {
              _this8.printLoad = false;
            });
          }
        }, {
          key: "addPhotoToGallery",
          value: function addPhotoToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.photoService.addNewToGallery();

                    case 2:
                      if (!(this.photoService.photos.length == 0)) {
                        _context18.next = 5;
                        break;
                      }

                      //this.returnChoice()
                      this.cameraActive = true;
                      return _context18.abrupt("return");

                    case 5:
                      console.log(this.photoService);
                      this.image = this.photoService.photos[0].webViewPath || [];
                      this.cameraActive = false;

                    case 8:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "selectToGallery",
          value: function selectToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.photoService.selectToGallery();

                    case 2:
                      if (!(this.photoService.photos.length == 0)) {
                        _context19.next = 5;
                        break;
                      }

                      //this.returnChoice()
                      this.cameraActive = true;
                      return _context19.abrupt("return");

                    case 5:
                      console.log(this.photoService);
                      this.image = this.photoService.photos[0].webViewPath || [];
                      this.cameraActive = false;

                    case 8:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "selectFile",
          value: function selectFile() {
            this.route.navigate(['select-file/' + this.type]);
          }
        }]);

        return ScanPage;
      }();

      ScanPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_5__["ScanService"]
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
        }];
      };

      ScanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scan',
        template: _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ScanPage);
      /***/
    },

    /***/
    "YwB3":
    /*!***********************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
      \***********************************************************/

    /*! exports provided: Storage */

    /***/
    function YwB3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "3mz4");
      /* empty/unused harmony star reexport */


      var Storage = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Storage', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "srMn")).then(function (m) {
            return new m.StorageWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "cyLK":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
      \********************************************************************/

    /*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding */

    /***/
    function cyLK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Directory", function () {
        return Directory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Encoding", function () {
        return Encoding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return FilesystemDirectory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return FilesystemEncoding;
      });

      var Directory;

      (function (Directory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */
        Directory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory.
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["Data"] = "DATA";
        /**
         * The Library directory
         * On iOS it will use the Library directory.
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.1.0
         */

        Directory["Library"] = "LIBRARY";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         *
         * @since 1.0.0
         */

        Directory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */

        Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(Directory || (Directory = {}));

      var Encoding;

      (function (Encoding) {
        /**
         * Eight-bit UCS Transformation Format
         *
         * @since 1.0.0
         */
        Encoding["UTF8"] = "utf8";
        /**
         * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
         * Unicode character set
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["ASCII"] = "ascii";
        /**
         * Sixteen-bit UCS Transformation Format, byte order identified by an
         * optional byte-order mark
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["UTF16"] = "utf16";
      })(Encoding || (Encoding = {}));
      /**
       * @deprecated Use `Directory`.
       * @since 1.0.0
       */


      var FilesystemDirectory = Directory;
      /**
       * @deprecated Use `Encoding`.
       * @since 1.0.0
       */

      var FilesystemEncoding = Encoding; //# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    "dTEF":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType */

    /***/
    function dTEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });

      var CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo fron the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "eF8J":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function eF8J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"overflowHidden\" color=\"white\">\r\n    <div *ngIf=\"!isLoading\">\r\n\r\n        <section *ngIf=\"cameraActive\">\r\n            <div class=\"position-absolute contenedorModalTop\">\r\n                <img class=\"div__background-wavetop contenedorModalTop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"position-absolute container contenedorModalTop\">\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-2 my-auto text-center\">\r\n                        <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"col-8 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n                        <p class=\"my-auto closeSectionText\">{{'scan.text' | translate | uppercase}}</p>\r\n                    </div>\r\n                    <div class=\"col-2\"></div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <ion-img [src]=\"image\" *ngIf=\"image && !cameraActive &&  ingredientsList === null\"></ion-img>\r\n        <div class=\"position-absolute contenedorModalBottom\" *ngIf=\"ingredientsList === null\">\r\n            <img class=\"div__background-wavebottom\" src=\"../../../assets/icon/infoWaveBottom.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"contenedorBoton\" *ngIf=\"cameraActive &&  ingredientsList === null\">\r\n            <img class=\"btnPhoto\" src=\"../../../assets/IMG-3050.jpg\" alt=\"\">\r\n            <app-button class=\"btnBottomSendPhoto\"  [btnText]=\"'scan.take' | translate\" (emitClick)=\"addPhotoToGallery()\"></app-button>\r\n            <app-button class=\"btnBottomUploadPhoto\" [btnText]=\"'scan.upload' | translate\" (emitClick)=\"selectToGallery()\"></app-button>\r\n        </div>\r\n\r\n        <div class=\"contenedorBoton\" *ngIf=\"image && !cameraActive &&  ingredientsList === null\">\r\n            <div class=\"col-12 bruno-text-info2 divTextoFoto my-auto text-center mt-3 mb-4\">\r\n                <p class=\"my-auto closeSectionTextPhoto\">{{'scan.question' | translate}}</p>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-6 text-center\">\r\n                    <app-button class=\"tryAgainButton\" [btnText]=\"'scan.repeat' | translate\" (emitClick)=\"tekeAgain()\"></app-button>\r\n                </div>\r\n                <div class=\"col-6 text-center\">\r\n                    <app-button class=\"btnBottomUploadPhoto\" [btnText]=\"'scan.send' | translate\" [loading]=\"isLoading\" (emitClick)=\"sendPhoto()\"></app-button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <app-list *ngIf=\"ingredientsList !== null && !isLoading\" [ingredientsList]=\"ingredientsList\" (pdfButtonEvent)=\"downloadFile()\" (listButtonEvent)=\"returnChoice()\"></app-list>\r\n    </div>\r\n    <app-wait *ngIf=\"isLoading\"></app-wait>\r\n</ion-content>";
      /***/
    },

    /***/
    "uNsd":
    /*!***************************************************!*\
      !*** ./src/app/pages/scan/scan-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ScanPageRoutingModule */

    /***/
    function uNsd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function () {
        return ScanPageRoutingModule;
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


      var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scan.page */
      "NpPW");

      var routes = [{
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
      }];

      var ScanPageRoutingModule = function ScanPageRoutingModule() {
        _classCallCheck(this, ScanPageRoutingModule);
      };

      ScanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ScanPageRoutingModule);
      /***/
    },

    /***/
    "vH3q":
    /*!*******************************************!*\
      !*** ./src/app/pages/scan/scan.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function vH3q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\nion-content {\n  --background: white !important;\n}\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.bruno-btn-home {\n  color: #a94541;\n  font-size: 0.6em;\n  z-index: 12;\n}\n.bruno-text-info2 {\n  color: #a94541;\n  font-size: 0.7em;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cameraPreview {\n  top: 20%;\n  width: 100%;\n  height: 100%;\n  z-index: 4 !important;\n}\n.img-line {\n  width: 80%;\n}\n.contenedorModalTop {\n  z-index: 11;\n}\n.div__background-wave {\n  width: 100%;\n}\n.div__background-wavetop {\n  width: 100%;\n  z-index: -5;\n}\n.div_closebutton {\n  width: 25px;\n  z-index: 999;\n}\n.container-elements {\n  z-index: 2 !important;\n}\n.contenedorBoton {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n.btnBottomSendPhoto {\n  position: absolute;\n  z-index: 99 !important;\n  left: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.btnPhoto {\n  position: absolute;\n  top: 10%;\n  left: 0%;\n}\n.btnBottomUploadPhoto {\n  position: absolute;\n  right: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.btnBottomSendPhotoUP {\n  position: absolute;\n  right: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.text-blue {\n  color: #a94541;\n}\n.closeSectionText {\n  font-size: 1.2em;\n  position: absolute;\n  bottom: -3vh;\n  padding-bottom: 8px;\n}\n.closeSectionTextPhoto {\n  font-size: 1.2em;\n  padding-bottom: 8px;\n}\n.divTextoFoto {\n  position: absolute;\n  bottom: 9vh;\n  width: 100%;\n  z-index: 12;\n}\n.contenedorModalBottom {\n  z-index: 11;\n  bottom: 0;\n}\n.tryAgainButton {\n  font-size: 0.8em !important;\n  position: absolute;\n  left: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.cameraPreview {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.image-overlay {\n  z-index: 1;\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  width: 50%;\n}\n#capture {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% - 25px);\n  z-index: 11;\n}\n#close {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% - 175px);\n  z-index: 11;\n}\n#flip {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% + 125px);\n  z-index: 11;\n}\n.overflowHidden {\n  overflow-y: hidden;\n}\n@media screen and (min-height: 739px) {\n  .btnPhoto {\n    top: 15%;\n    left: -22%;\n    transform: scale(1.5);\n  }\n}\n@media screen and (min-height: 844px) {\n  .btnPhoto {\n    top: 18%;\n    left: -17%;\n    transform: scale(1.6);\n  }\n}\n@media screen and (min-height: 910px) {\n  .btnPhoto {\n    top: 17%;\n    left: -18%;\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSx5RkFBQTtBQUpSO0VBQ0ksOEJBQUE7QUFFSjtBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBR0E7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFKO0FBR0E7RUFDSSxVQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUpKO0FBT0E7RUFDSSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTko7QUFTQTtFQUNJLGNBQUE7QUFOSjtBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxnQkFBQTtFQUlBLG1CQUFBO0FBVko7QUFhQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVko7QUFhQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBVko7QUFhQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBWEo7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWEo7QUFjQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWEo7QUFjQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQVhKO0FBY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBY0E7RUFDSSxrQkFBQTtBQVhKO0FBZUE7RUFDSTtJQUNJLFFBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUFaTjtBQUNGO0FBZUE7RUFDSTtJQUNJLFFBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUFiTjtBQUNGO0FBZ0JBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VBZE47QUFDRiIsImZpbGUiOiJzY2FuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5icnVuby1idG4taG9tZSB7XHJcbiAgICBjb2xvcjogI2E5NDU0MTtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLmJydW5vLXRleHQtaW5mbzIge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4uY2VudHJhci12ZXJ0aWNhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNhbWVyYVByZXZpZXcge1xyXG4gICAgdG9wOjIwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWxpbmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JNb2RhbFRvcCB7XHJcbiAgICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmRpdl9fYmFja2dyb3VuZC13YXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGl2X19iYWNrZ3JvdW5kLXdhdmV0b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtNTtcclxufVxyXG5cclxuLmRpdl9jbG9zZWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1lbGVtZW50cyB7XHJcbiAgICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbmVkb3JCb3RvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bkJvdHRvbVNlbmRQaG90byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xyXG4gICAgLy90b3A6IDYwJTtcclxuICAgIGxlZnQ6IDEwJTsgXHJcbiAgICBib3R0b206IDR2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG59XHJcblxyXG4uYnRuUGhvdG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG59XHJcblxyXG4uYnRuQm90dG9tVXBsb2FkUGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDQwJTtcclxuICAgIHJpZ2h0OiAxMCU7IFxyXG4gICAgYm90dG9tOiA0dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bkJvdHRvbVNlbmRQaG90b1VQIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDR2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3RvcDogNDAlOyAgICBcclxuICAgIGJvdHRvbTogLTN2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0UGhvdG8ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDQwJTsgICAgXHJcbiAgICAvL2JvdHRvbTogNHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmRpdlRleHRvRm90b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JNb2RhbEJvdHRvbSB7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnRyeUFnYWluQnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7IFxyXG4gICAgYm90dG9tOiA0dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FtZXJhUHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5pbWFnZS1vdmVybGF5IHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNjYXB0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4jY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4jZmxpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlICsgMTI1cHgpO1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5vdmVyZmxvd0hpZGRlbiB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vczhcclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4taGVpZ2h0OiA3MzlweCApIHtcclxuICAgIC5idG5QaG90b3tcclxuICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICBsZWZ0OiAtMjIlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIH1cclxufVxyXG4vL3hyIDEycHJvIHBpeGVsXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLWhlaWdodDogODQ0cHggKSB7XHJcbiAgICAuYnRuUGhvdG97XHJcbiAgICAgICAgdG9wOiAxOCU7XHJcbiAgICAgICAgbGVmdDogLTE3JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XHJcbiAgICB9XHJcbn1cclxuLy9zMjAgVWx0cmFcclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4taGVpZ2h0OiA5MTBweCApIHtcclxuICAgIC5idG5QaG90b3tcclxuICAgICAgICB0b3A6IDE3JTtcclxuICAgICAgICBsZWZ0OiAtMTglO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-scan-scan-module-es5.js.map