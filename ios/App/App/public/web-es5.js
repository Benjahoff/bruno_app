(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
    /***/
    "B5q2":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/web.js ***!
      \************************************************************/

    /*! exports provided: FilesystemWeb */

    /***/
    function B5q2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemWeb", function () {
        return FilesystemWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      function resolve(path) {
        var posix = path.split('/').filter(function (item) {
          return item !== '.';
        });
        var newPosix = [];
        posix.forEach(function (item) {
          if (item === '..' && newPosix.length > 0 && newPosix[newPosix.length - 1] !== '..') {
            newPosix.pop();
          } else {
            newPosix.push(item);
          }
        });
        return newPosix.join('/');
      }

      function isPathParent(parent, children) {
        parent = resolve(parent);
        children = resolve(children);
        var pathsA = parent.split('/');
        var pathsB = children.split('/');
        return parent !== children && pathsA.every(function (value, index) {
          return value === pathsB[index];
        });
      }

      var FilesystemWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(FilesystemWeb, _capacitor_core__WEBP);

        var _super = _createSuper(FilesystemWeb);

        function FilesystemWeb() {
          var _this;

          _classCallCheck(this, FilesystemWeb);

          _this = _super.apply(this, arguments);
          _this.DB_VERSION = 1;
          _this.DB_NAME = 'Disc';
          _this._writeCmds = ['add', 'put', 'delete'];
          return _this;
        }

        _createClass(FilesystemWeb, [{
          key: "initDb",
          value: function () {
            var _initDb = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this._db !== undefined)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", this._db);

                    case 2:
                      if ('indexedDB' in window) {
                        _context.next = 4;
                        break;
                      }

                      throw this.unavailable("This browser doesn't support IndexedDB");

                    case 4:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this2.DB_NAME, _this2.DB_VERSION);
                        request.onupgradeneeded = FilesystemWeb.doUpgrade;

                        request.onsuccess = function () {
                          _this2._db = request.result;
                          resolve(request.result);
                        };

                        request.onerror = function () {
                          return reject(request.error);
                        };

                        request.onblocked = function () {
                          console.warn('db blocked');
                        };
                      }));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function initDb() {
              return _initDb.apply(this, arguments);
            }

            return initDb;
          }()
        }, {
          key: "dbRequest",
          value: function () {
            var _dbRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(cmd, args) {
              var readFlag;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                      return _context2.abrupt("return", this.initDb().then(function (conn) {
                        return new Promise(function (resolve, reject) {
                          var tx = conn.transaction(['FileStorage'], readFlag);
                          var store = tx.objectStore('FileStorage');
                          var req = store[cmd].apply(store, _toConsumableArray(args));

                          req.onsuccess = function () {
                            return resolve(req.result);
                          };

                          req.onerror = function () {
                            return reject(req.error);
                          };
                        });
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function dbRequest(_x, _x2) {
              return _dbRequest.apply(this, arguments);
            }

            return dbRequest;
          }()
        }, {
          key: "dbIndexRequest",
          value: function () {
            var _dbIndexRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(indexName, cmd, args) {
              var readFlag;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                      return _context3.abrupt("return", this.initDb().then(function (conn) {
                        return new Promise(function (resolve, reject) {
                          var tx = conn.transaction(['FileStorage'], readFlag);
                          var store = tx.objectStore('FileStorage');
                          var index = store.index(indexName);
                          var req = index[cmd].apply(index, _toConsumableArray(args));

                          req.onsuccess = function () {
                            return resolve(req.result);
                          };

                          req.onerror = function () {
                            return reject(req.error);
                          };
                        });
                      }));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function dbIndexRequest(_x3, _x4, _x5) {
              return _dbIndexRequest.apply(this, arguments);
            }

            return dbIndexRequest;
          }()
        }, {
          key: "getPath",
          value: function getPath(directory, uriPath) {
            var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
            var fsPath = '';
            if (directory !== undefined) fsPath += '/' + directory;
            if (uriPath !== '') fsPath += '/' + cleanedUriPath;
            return fsPath;
          }
        }, {
          key: "clear",
          value: function () {
            var _clear = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var conn, tx, store;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.initDb();

                    case 2:
                      conn = _context4.sent;
                      tx = conn.transaction(['FileStorage'], 'readwrite');
                      store = tx.objectStore('FileStorage');
                      store.clear();

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function clear() {
              return _clear.apply(this, arguments);
            }

            return clear;
          }()
          /**
           * Read a file from disk
           * @param options options for the file read
           * @return a promise that resolves with the read file data result
           */

        }, {
          key: "readFile",
          value: function () {
            var _readFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
              var path, entry;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path); // const encoding = options.encoding;

                      _context5.next = 3;
                      return this.dbRequest('get', [path]);

                    case 3:
                      entry = _context5.sent;

                      if (!(entry === undefined)) {
                        _context5.next = 6;
                        break;
                      }

                      throw Error('File does not exist.');

                    case 6:
                      return _context5.abrupt("return", {
                        data: entry.content ? entry.content : ''
                      });

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function readFile(_x6) {
              return _readFile.apply(this, arguments);
            }

            return readFile;
          }()
          /**
           * Write a file to disk in the specified location on device
           * @param options options for the file write
           * @return a promise that resolves with the file write result
           */

        }, {
          key: "writeFile",
          value: function () {
            var _writeFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
              var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      data = options.data;
                      doRecursive = options.recursive;
                      _context6.next = 5;
                      return this.dbRequest('get', [path]);

                    case 5:
                      occupiedEntry = _context6.sent;

                      if (!(occupiedEntry && occupiedEntry.type === 'directory')) {
                        _context6.next = 8;
                        break;
                      }

                      throw Error('The supplied path is a directory.');

                    case 8:
                      encoding = options.encoding;
                      parentPath = path.substr(0, path.lastIndexOf('/'));
                      _context6.next = 12;
                      return this.dbRequest('get', [parentPath]);

                    case 12:
                      parentEntry = _context6.sent;

                      if (!(parentEntry === undefined)) {
                        _context6.next = 19;
                        break;
                      }

                      subDirIndex = parentPath.indexOf('/', 1);

                      if (!(subDirIndex !== -1)) {
                        _context6.next = 19;
                        break;
                      }

                      parentArgPath = parentPath.substr(subDirIndex);
                      _context6.next = 19;
                      return this.mkdir({
                        path: parentArgPath,
                        directory: options.directory,
                        recursive: doRecursive
                      });

                    case 19:
                      now = Date.now();
                      pathObj = {
                        path: path,
                        folder: parentPath,
                        type: 'file',
                        size: data.length,
                        ctime: now,
                        mtime: now,
                        content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                      };
                      _context6.next = 23;
                      return this.dbRequest('put', [pathObj]);

                    case 23:
                      return _context6.abrupt("return", {
                        uri: pathObj.path
                      });

                    case 24:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function writeFile(_x7) {
              return _writeFile.apply(this, arguments);
            }

            return writeFile;
          }()
          /**
           * Append to a file on disk in the specified location on device
           * @param options options for the file append
           * @return a promise that resolves with the file write result
           */

        }, {
          key: "appendFile",
          value: function () {
            var _appendFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options) {
              var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, subDirIndex, parentArgPath, pathObj;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      data = options.data; // const encoding = options.encoding;

                      parentPath = path.substr(0, path.lastIndexOf('/'));
                      now = Date.now();
                      ctime = now;
                      _context7.next = 7;
                      return this.dbRequest('get', [path]);

                    case 7:
                      occupiedEntry = _context7.sent;

                      if (!(occupiedEntry && occupiedEntry.type === 'directory')) {
                        _context7.next = 10;
                        break;
                      }

                      throw Error('The supplied path is a directory.');

                    case 10:
                      _context7.next = 12;
                      return this.dbRequest('get', [parentPath]);

                    case 12:
                      parentEntry = _context7.sent;

                      if (!(parentEntry === undefined)) {
                        _context7.next = 19;
                        break;
                      }

                      subDirIndex = parentPath.indexOf('/', 1);

                      if (!(subDirIndex !== -1)) {
                        _context7.next = 19;
                        break;
                      }

                      parentArgPath = parentPath.substr(subDirIndex);
                      _context7.next = 19;
                      return this.mkdir({
                        path: parentArgPath,
                        directory: options.directory,
                        recursive: true
                      });

                    case 19:
                      if (occupiedEntry !== undefined) {
                        data = occupiedEntry.content + data;
                        ctime = occupiedEntry.ctime;
                      }

                      pathObj = {
                        path: path,
                        folder: parentPath,
                        type: 'file',
                        size: data.length,
                        ctime: ctime,
                        mtime: now,
                        content: data
                      };
                      _context7.next = 23;
                      return this.dbRequest('put', [pathObj]);

                    case 23:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function appendFile(_x8) {
              return _appendFile.apply(this, arguments);
            }

            return appendFile;
          }()
          /**
           * Delete a file from disk
           * @param options options for the file delete
           * @return a promise that resolves with the deleted file data result
           */

        }, {
          key: "deleteFile",
          value: function () {
            var _deleteFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
              var path, entry, entries;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      _context8.next = 3;
                      return this.dbRequest('get', [path]);

                    case 3:
                      entry = _context8.sent;

                      if (!(entry === undefined)) {
                        _context8.next = 6;
                        break;
                      }

                      throw Error('File does not exist.');

                    case 6:
                      _context8.next = 8;
                      return this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)]);

                    case 8:
                      entries = _context8.sent;

                      if (!(entries.length !== 0)) {
                        _context8.next = 11;
                        break;
                      }

                      throw Error('Folder is not empty.');

                    case 11:
                      _context8.next = 13;
                      return this.dbRequest('delete', [path]);

                    case 13:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function deleteFile(_x9) {
              return _deleteFile.apply(this, arguments);
            }

            return deleteFile;
          }()
          /**
           * Create a directory.
           * @param options options for the mkdir
           * @return a promise that resolves with the mkdir result
           */

        }, {
          key: "mkdir",
          value: function () {
            var _mkdir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(options) {
              var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      doRecursive = options.recursive;
                      parentPath = path.substr(0, path.lastIndexOf('/'));
                      depth = (path.match(/\//g) || []).length;
                      _context9.next = 6;
                      return this.dbRequest('get', [parentPath]);

                    case 6:
                      parentEntry = _context9.sent;
                      _context9.next = 9;
                      return this.dbRequest('get', [path]);

                    case 9:
                      occupiedEntry = _context9.sent;

                      if (!(depth === 1)) {
                        _context9.next = 12;
                        break;
                      }

                      throw Error('Cannot create Root directory');

                    case 12:
                      if (!(occupiedEntry !== undefined)) {
                        _context9.next = 14;
                        break;
                      }

                      throw Error('Current directory does already exist.');

                    case 14:
                      if (!(!doRecursive && depth !== 2 && parentEntry === undefined)) {
                        _context9.next = 16;
                        break;
                      }

                      throw Error('Parent directory must exist');

                    case 16:
                      if (!(doRecursive && depth !== 2 && parentEntry === undefined)) {
                        _context9.next = 20;
                        break;
                      }

                      parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                      _context9.next = 20;
                      return this.mkdir({
                        path: parentArgPath,
                        directory: options.directory,
                        recursive: doRecursive
                      });

                    case 20:
                      now = Date.now();
                      pathObj = {
                        path: path,
                        folder: parentPath,
                        type: 'directory',
                        size: 0,
                        ctime: now,
                        mtime: now
                      };
                      _context9.next = 24;
                      return this.dbRequest('put', [pathObj]);

                    case 24:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function mkdir(_x10) {
              return _mkdir.apply(this, arguments);
            }

            return mkdir;
          }()
          /**
           * Remove a directory
           * @param options the options for the directory remove
           */

        }, {
          key: "rmdir",
          value: function () {
            var _rmdir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(options) {
              var path, directory, recursive, fullPath, entry, readDirResult, _iterator, _step, _entry, entryPath, entryObj;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      path = options.path, directory = options.directory, recursive = options.recursive;
                      fullPath = this.getPath(directory, path);
                      _context10.next = 4;
                      return this.dbRequest('get', [fullPath]);

                    case 4:
                      entry = _context10.sent;

                      if (!(entry === undefined)) {
                        _context10.next = 7;
                        break;
                      }

                      throw Error('Folder does not exist.');

                    case 7:
                      if (!(entry.type !== 'directory')) {
                        _context10.next = 9;
                        break;
                      }

                      throw Error('Requested path is not a directory');

                    case 9:
                      _context10.next = 11;
                      return this.readdir({
                        path: path,
                        directory: directory
                      });

                    case 11:
                      readDirResult = _context10.sent;

                      if (!(readDirResult.files.length !== 0 && !recursive)) {
                        _context10.next = 14;
                        break;
                      }

                      throw Error('Folder is not empty');

                    case 14:
                      _iterator = _createForOfIteratorHelper(readDirResult.files);
                      _context10.prev = 15;

                      _iterator.s();

                    case 17:
                      if ((_step = _iterator.n()).done) {
                        _context10.next = 32;
                        break;
                      }

                      _entry = _step.value;
                      entryPath = "".concat(path, "/").concat(_entry);
                      _context10.next = 22;
                      return this.stat({
                        path: entryPath,
                        directory: directory
                      });

                    case 22:
                      entryObj = _context10.sent;

                      if (!(entryObj.type === 'file')) {
                        _context10.next = 28;
                        break;
                      }

                      _context10.next = 26;
                      return this.deleteFile({
                        path: entryPath,
                        directory: directory
                      });

                    case 26:
                      _context10.next = 30;
                      break;

                    case 28:
                      _context10.next = 30;
                      return this.rmdir({
                        path: entryPath,
                        directory: directory,
                        recursive: recursive
                      });

                    case 30:
                      _context10.next = 17;
                      break;

                    case 32:
                      _context10.next = 37;
                      break;

                    case 34:
                      _context10.prev = 34;
                      _context10.t0 = _context10["catch"](15);

                      _iterator.e(_context10.t0);

                    case 37:
                      _context10.prev = 37;

                      _iterator.f();

                      return _context10.finish(37);

                    case 40:
                      _context10.next = 42;
                      return this.dbRequest('delete', [fullPath]);

                    case 42:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[15, 34, 37, 40]]);
            }));

            function rmdir(_x11) {
              return _rmdir.apply(this, arguments);
            }

            return rmdir;
          }()
          /**
           * Return a list of files from the directory (not recursive)
           * @param options the options for the readdir operation
           * @return a promise that resolves with the readdir directory listing result
           */

        }, {
          key: "readdir",
          value: function () {
            var _readdir = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(options) {
              var path, entry, entries, names;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      _context11.next = 3;
                      return this.dbRequest('get', [path]);

                    case 3:
                      entry = _context11.sent;

                      if (!(options.path !== '' && entry === undefined)) {
                        _context11.next = 6;
                        break;
                      }

                      throw Error('Folder does not exist.');

                    case 6:
                      _context11.next = 8;
                      return this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)]);

                    case 8:
                      entries = _context11.sent;
                      names = entries.map(function (e) {
                        return e.substring(path.length + 1);
                      });
                      return _context11.abrupt("return", {
                        files: names
                      });

                    case 11:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function readdir(_x12) {
              return _readdir.apply(this, arguments);
            }

            return readdir;
          }()
          /**
           * Return full File URI for a path and directory
           * @param options the options for the stat operation
           * @return a promise that resolves with the file stat result
           */

        }, {
          key: "getUri",
          value: function () {
            var _getUri = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(options) {
              var path, entry;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      _context12.next = 3;
                      return this.dbRequest('get', [path]);

                    case 3:
                      entry = _context12.sent;

                      if (!(entry === undefined)) {
                        _context12.next = 8;
                        break;
                      }

                      _context12.next = 7;
                      return this.dbRequest('get', [path + '/']);

                    case 7:
                      entry = _context12.sent;

                    case 8:
                      return _context12.abrupt("return", {
                        uri: (entry === null || entry === void 0 ? void 0 : entry.path) || path
                      });

                    case 9:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function getUri(_x13) {
              return _getUri.apply(this, arguments);
            }

            return getUri;
          }()
          /**
           * Return data about a file
           * @param options the options for the stat operation
           * @return a promise that resolves with the file stat result
           */

        }, {
          key: "stat",
          value: function () {
            var _stat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(options) {
              var path, entry;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      path = this.getPath(options.directory, options.path);
                      _context13.next = 3;
                      return this.dbRequest('get', [path]);

                    case 3:
                      entry = _context13.sent;

                      if (!(entry === undefined)) {
                        _context13.next = 8;
                        break;
                      }

                      _context13.next = 7;
                      return this.dbRequest('get', [path + '/']);

                    case 7:
                      entry = _context13.sent;

                    case 8:
                      if (!(entry === undefined)) {
                        _context13.next = 10;
                        break;
                      }

                      throw Error('Entry does not exist.');

                    case 10:
                      return _context13.abrupt("return", {
                        type: entry.type,
                        size: entry.size,
                        ctime: entry.ctime,
                        mtime: entry.mtime,
                        uri: entry.path
                      });

                    case 11:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function stat(_x14) {
              return _stat.apply(this, arguments);
            }

            return stat;
          }()
          /**
           * Rename a file or directory
           * @param options the options for the rename operation
           * @return a promise that resolves with the rename result
           */

        }, {
          key: "rename",
          value: function () {
            var _rename = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(options) {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", this._copy(options, true));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function rename(_x15) {
              return _rename.apply(this, arguments);
            }

            return rename;
          }()
          /**
           * Copy a file or directory
           * @param options the options for the copy operation
           * @return a promise that resolves with the copy result
           */

        }, {
          key: "copy",
          value: function () {
            var _copy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(options) {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", this._copy(options, false));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function copy(_x16) {
              return _copy2.apply(this, arguments);
            }

            return copy;
          }()
        }, {
          key: "requestPermissions",
          value: function () {
            var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", {
                        publicStorage: 'granted'
                      });

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));

            function requestPermissions() {
              return _requestPermissions.apply(this, arguments);
            }

            return requestPermissions;
          }()
        }, {
          key: "checkPermissions",
          value: function () {
            var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      return _context17.abrupt("return", {
                        publicStorage: 'granted'
                      });

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));

            function checkPermissions() {
              return _checkPermissions.apply(this, arguments);
            }

            return checkPermissions;
          }()
          /**
           * Function that can perform a copy or a rename
           * @param options the options for the rename operation
           * @param doRename whether to perform a rename or copy operation
           * @return a promise that resolves with the result
           */

        }, {
          key: "_copy",
          value: function () {
            var _copy3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(options) {
              var _this3 = this;

              var doRename,
                  toDirectory,
                  to,
                  from,
                  fromDirectory,
                  fromPath,
                  toPath,
                  toObj,
                  toPathComponents,
                  _toPath,
                  toParentDirectory,
                  fromObj,
                  updateTime,
                  ctime,
                  file,
                  contents,
                  _iterator2,
                  _step2,
                  filename,
                  _args19 = arguments;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      doRename = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : false;
                      toDirectory = options.toDirectory;
                      to = options.to, from = options.from, fromDirectory = options.directory;

                      if (!(!to || !from)) {
                        _context19.next = 5;
                        break;
                      }

                      throw Error('Both to and from must be provided');

                    case 5:
                      // If no "to" directory is provided, use the "from" directory
                      if (!toDirectory) {
                        toDirectory = fromDirectory;
                      }

                      fromPath = this.getPath(fromDirectory, from);
                      toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                      if (!(fromPath === toPath)) {
                        _context19.next = 10;
                        break;
                      }

                      return _context19.abrupt("return");

                    case 10:
                      if (!isPathParent(fromPath, toPath)) {
                        _context19.next = 12;
                        break;
                      }

                      throw Error('To path cannot contain the from path');

                    case 12:
                      _context19.prev = 12;
                      _context19.next = 15;
                      return this.stat({
                        path: to,
                        directory: toDirectory
                      });

                    case 15:
                      toObj = _context19.sent;
                      _context19.next = 29;
                      break;

                    case 18:
                      _context19.prev = 18;
                      _context19.t0 = _context19["catch"](12);
                      // To location does not exist, ensure the directory containing "to" location exists and is a directory
                      toPathComponents = to.split('/');
                      toPathComponents.pop();
                      _toPath = toPathComponents.join('/'); // Check the containing directory of the "to" location exists

                      if (!(toPathComponents.length > 0)) {
                        _context19.next = 29;
                        break;
                      }

                      _context19.next = 26;
                      return this.stat({
                        path: _toPath,
                        directory: toDirectory
                      });

                    case 26:
                      toParentDirectory = _context19.sent;

                      if (!(toParentDirectory.type !== 'directory')) {
                        _context19.next = 29;
                        break;
                      }

                      throw new Error('Parent directory of the to path is a file');

                    case 29:
                      if (!(toObj && toObj.type === 'directory')) {
                        _context19.next = 31;
                        break;
                      }

                      throw new Error('Cannot overwrite a directory with a file');

                    case 31:
                      _context19.next = 33;
                      return this.stat({
                        path: from,
                        directory: fromDirectory
                      });

                    case 33:
                      fromObj = _context19.sent;

                      // Set the mtime/ctime of the supplied path
                      updateTime = /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(path, ctime, mtime) {
                          var fullPath, entry;
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  fullPath = _this3.getPath(toDirectory, path);
                                  _context18.next = 3;
                                  return _this3.dbRequest('get', [fullPath]);

                                case 3:
                                  entry = _context18.sent;
                                  entry.ctime = ctime;
                                  entry.mtime = mtime;
                                  _context18.next = 8;
                                  return _this3.dbRequest('put', [entry]);

                                case 8:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18);
                        }));

                        return function updateTime(_x18, _x19, _x20) {
                          return _ref.apply(this, arguments);
                        };
                      }();

                      ctime = fromObj.ctime ? fromObj.ctime : Date.now();
                      _context19.t1 = fromObj.type;
                      _context19.next = _context19.t1 === 'file' ? 39 : _context19.t1 === 'directory' ? 51 : 86;
                      break;

                    case 39:
                      _context19.next = 41;
                      return this.readFile({
                        path: from,
                        directory: fromDirectory
                      });

                    case 41:
                      file = _context19.sent;

                      if (!doRename) {
                        _context19.next = 45;
                        break;
                      }

                      _context19.next = 45;
                      return this.deleteFile({
                        path: from,
                        directory: fromDirectory
                      });

                    case 45:
                      _context19.next = 47;
                      return this.writeFile({
                        path: to,
                        directory: toDirectory,
                        data: file.data
                      });

                    case 47:
                      if (!doRename) {
                        _context19.next = 50;
                        break;
                      }

                      _context19.next = 50;
                      return updateTime(to, ctime, fromObj.mtime);

                    case 50:
                      return _context19.abrupt("return");

                    case 51:
                      if (!toObj) {
                        _context19.next = 53;
                        break;
                      }

                      throw Error('Cannot move a directory over an existing object');

                    case 53:
                      _context19.prev = 53;
                      _context19.next = 56;
                      return this.mkdir({
                        path: to,
                        directory: toDirectory,
                        recursive: false
                      });

                    case 56:
                      if (!doRename) {
                        _context19.next = 59;
                        break;
                      }

                      _context19.next = 59;
                      return updateTime(to, ctime, fromObj.mtime);

                    case 59:
                      _context19.next = 63;
                      break;

                    case 61:
                      _context19.prev = 61;
                      _context19.t2 = _context19["catch"](53);

                    case 63:
                      _context19.next = 65;
                      return this.readdir({
                        path: from,
                        directory: fromDirectory
                      });

                    case 65:
                      contents = _context19.sent.files;
                      _iterator2 = _createForOfIteratorHelper(contents);
                      _context19.prev = 67;

                      _iterator2.s();

                    case 69:
                      if ((_step2 = _iterator2.n()).done) {
                        _context19.next = 75;
                        break;
                      }

                      filename = _step2.value;
                      _context19.next = 73;
                      return this._copy({
                        from: "".concat(from, "/").concat(filename),
                        to: "".concat(to, "/").concat(filename),
                        directory: fromDirectory,
                        toDirectory: toDirectory
                      }, doRename);

                    case 73:
                      _context19.next = 69;
                      break;

                    case 75:
                      _context19.next = 80;
                      break;

                    case 77:
                      _context19.prev = 77;
                      _context19.t3 = _context19["catch"](67);

                      _iterator2.e(_context19.t3);

                    case 80:
                      _context19.prev = 80;

                      _iterator2.f();

                      return _context19.finish(80);

                    case 83:
                      if (!doRename) {
                        _context19.next = 86;
                        break;
                      }

                      _context19.next = 86;
                      return this.rmdir({
                        path: from,
                        directory: fromDirectory
                      });

                    case 86:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this, [[12, 18], [53, 61], [67, 77, 80, 83]]);
            }));

            function _copy(_x17) {
              return _copy3.apply(this, arguments);
            }

            return _copy;
          }()
        }], [{
          key: "doUpgrade",
          value: function doUpgrade(event) {
            var eventTarget = event.target;
            var db = eventTarget.result;

            switch (event.oldVersion) {
              case 0:
              case 1:
              default:
                {
                  if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                  }

                  var store = db.createObjectStore('FileStorage', {
                    keyPath: 'path'
                  });
                  store.createIndex('by_folder', 'folder');
                }
            }
          }
        }]);

        return FilesystemWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      FilesystemWeb._debug = true; //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "srMn":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/storage/dist/esm/web.js ***!
      \*********************************************************/

    /*! exports provided: StorageWeb */

    /***/
    function srMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageWeb", function () {
        return StorageWeb;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "FUe0");

      var StorageWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
        _inherits(StorageWeb, _capacitor_core__WEBP2);

        var _super2 = _createSuper(StorageWeb);

        function StorageWeb() {
          var _this4;

          _classCallCheck(this, StorageWeb);

          _this4 = _super2.apply(this, arguments);
          _this4.group = 'CapacitorStorage';
          return _this4;
        }

        _createClass(StorageWeb, [{
          key: "configure",
          value: function () {
            var _configure = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(_ref2) {
              var group;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      group = _ref2.group;

                      if (typeof group === 'string') {
                        this.group = group;
                      }

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function configure(_x21) {
              return _configure.apply(this, arguments);
            }

            return configure;
          }()
        }, {
          key: "get",
          value: function () {
            var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(options) {
              var value;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      value = this.impl.getItem(this.applyPrefix(options.key));
                      return _context21.abrupt("return", {
                        value: value
                      });

                    case 2:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function get(_x22) {
              return _get.apply(this, arguments);
            }

            return get;
          }()
        }, {
          key: "set",
          value: function () {
            var _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(options) {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      this.impl.setItem(this.applyPrefix(options.key), options.value);

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function set(_x23) {
              return _set.apply(this, arguments);
            }

            return set;
          }()
        }, {
          key: "remove",
          value: function () {
            var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(options) {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      this.impl.removeItem(this.applyPrefix(options.key));

                    case 1:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function remove(_x24) {
              return _remove.apply(this, arguments);
            }

            return remove;
          }()
        }, {
          key: "keys",
          value: function () {
            var _keys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this5 = this;

              var keys;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      keys = this.rawKeys().map(function (k) {
                        return k.substring(_this5.prefix.length);
                      });
                      return _context24.abrupt("return", {
                        keys: keys
                      });

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function keys() {
              return _keys.apply(this, arguments);
            }

            return keys;
          }()
        }, {
          key: "clear",
          value: function () {
            var _clear2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _iterator3, _step3, key;

              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _iterator3 = _createForOfIteratorHelper(this.rawKeys());

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          key = _step3.value;
                          this.impl.removeItem(key);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                    case 2:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function clear() {
              return _clear2.apply(this, arguments);
            }

            return clear;
          }()
        }, {
          key: "migrate",
          value: function () {
            var _migrate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var _a, migrated, existing, oldprefix, keys, _iterator4, _step4, oldkey, key, value, _yield$this$get, currentValue;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      migrated = [];
                      existing = [];
                      oldprefix = '_cap_';
                      keys = Object.keys(this.impl).filter(function (k) {
                        return k.indexOf(oldprefix) === 0;
                      });
                      _iterator4 = _createForOfIteratorHelper(keys);
                      _context26.prev = 5;

                      _iterator4.s();

                    case 7:
                      if ((_step4 = _iterator4.n()).done) {
                        _context26.next = 24;
                        break;
                      }

                      oldkey = _step4.value;
                      key = oldkey.substring(oldprefix.length);
                      value = (_a = this.impl.getItem(oldkey)) !== null && _a !== void 0 ? _a : '';
                      _context26.next = 13;
                      return this.get({
                        key: key
                      });

                    case 13:
                      _yield$this$get = _context26.sent;
                      currentValue = _yield$this$get.value;

                      if (!(typeof currentValue === 'string')) {
                        _context26.next = 19;
                        break;
                      }

                      existing.push(key);
                      _context26.next = 22;
                      break;

                    case 19:
                      _context26.next = 21;
                      return this.set({
                        key: key,
                        value: value
                      });

                    case 21:
                      migrated.push(key);

                    case 22:
                      _context26.next = 7;
                      break;

                    case 24:
                      _context26.next = 29;
                      break;

                    case 26:
                      _context26.prev = 26;
                      _context26.t0 = _context26["catch"](5);

                      _iterator4.e(_context26.t0);

                    case 29:
                      _context26.prev = 29;

                      _iterator4.f();

                      return _context26.finish(29);

                    case 32:
                      return _context26.abrupt("return", {
                        migrated: migrated,
                        existing: existing
                      });

                    case 33:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this, [[5, 26, 29, 32]]);
            }));

            function migrate() {
              return _migrate.apply(this, arguments);
            }

            return migrate;
          }()
        }, {
          key: "removeOld",
          value: function () {
            var _removeOld = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var oldprefix, keys, _iterator5, _step5, oldkey;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      oldprefix = '_cap_';
                      keys = Object.keys(this.impl).filter(function (k) {
                        return k.indexOf(oldprefix) === 0;
                      });
                      _iterator5 = _createForOfIteratorHelper(keys);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          oldkey = _step5.value;
                          this.impl.removeItem(oldkey);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                    case 4:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function removeOld() {
              return _removeOld.apply(this, arguments);
            }

            return removeOld;
          }()
        }, {
          key: "impl",
          get: function get() {
            return window.localStorage;
          }
        }, {
          key: "prefix",
          get: function get() {
            return this.group === 'NativeStorage' ? '' : "".concat(this.group, ".");
          }
        }, {
          key: "rawKeys",
          value: function rawKeys() {
            var _this6 = this;

            return Object.keys(this.impl).filter(function (k) {
              return k.indexOf(_this6.prefix) === 0;
            });
          }
        }, {
          key: "applyPrefix",
          value: function applyPrefix(key) {
            return this.prefix + key;
          }
        }]);

        return StorageWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]); //# sourceMappingURL=web.js.map

      /***/

    },

    /***/
    "wzPO":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
      \********************************************************/

    /*! exports provided: CameraWeb, Camera */

    /***/
    function wzPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraWeb", function () {
        return CameraWeb;
      });
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

      var CameraWeb = /*#__PURE__*/function (_capacitor_core__WEBP3) {
        _inherits(CameraWeb, _capacitor_core__WEBP3);

        var _super3 = _createSuper(CameraWeb);

        function CameraWeb() {
          _classCallCheck(this, CameraWeb);

          return _super3.apply(this, arguments);
        }

        _createClass(CameraWeb, [{
          key: "getPhoto",
          value: function () {
            var _getPhoto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(options) {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      return _context30.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(resolve, reject) {
                          var actionSheet;
                          return regeneratorRuntime.wrap(function _callee29$(_context29) {
                            while (1) {
                              switch (_context29.prev = _context29.next) {
                                case 0:
                                  if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                                    _this7.fileInputExperience(options, resolve);
                                  } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                                    actionSheet = document.querySelector('pwa-action-sheet');

                                    if (!actionSheet) {
                                      actionSheet = document.createElement('pwa-action-sheet');
                                      document.body.appendChild(actionSheet);
                                    }

                                    actionSheet.header = options.promptLabelHeader || 'Photo';
                                    actionSheet.cancelable = false;
                                    actionSheet.options = [{
                                      title: options.promptLabelPhoto || 'From Photos'
                                    }, {
                                      title: options.promptLabelPicture || 'Take Picture'
                                    }];
                                    actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
                                      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e) {
                                        var selection;
                                        return regeneratorRuntime.wrap(function _callee28$(_context28) {
                                          while (1) {
                                            switch (_context28.prev = _context28.next) {
                                              case 0:
                                                selection = e.detail;

                                                if (selection === 0) {
                                                  _this7.fileInputExperience(options, resolve);
                                                } else {
                                                  _this7.cameraExperience(options, resolve, reject);
                                                }

                                              case 2:
                                              case "end":
                                                return _context28.stop();
                                            }
                                          }
                                        }, _callee28);
                                      }));

                                      return function (_x28) {
                                        return _ref4.apply(this, arguments);
                                      };
                                    }());
                                  } else {
                                    _this7.cameraExperience(options, resolve, reject);
                                  }

                                case 1:
                                case "end":
                                  return _context29.stop();
                              }
                            }
                          }, _callee29);
                        }));

                        return function (_x26, _x27) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30);
            }));

            function getPhoto(_x25) {
              return _getPhoto.apply(this, arguments);
            }

            return getPhoto;
          }()
        }, {
          key: "pickImages",
          value: function () {
            var _pickImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(_options) {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      return _context32.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(resolve) {
                          return regeneratorRuntime.wrap(function _callee31$(_context31) {
                            while (1) {
                              switch (_context31.prev = _context31.next) {
                                case 0:
                                  _this8.multipleFileInputExperience(resolve);

                                case 1:
                                case "end":
                                  return _context31.stop();
                              }
                            }
                          }, _callee31);
                        }));

                        return function (_x30) {
                          return _ref5.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));

            function pickImages(_x29) {
              return _pickImages.apply(this, arguments);
            }

            return pickImages;
          }()
        }, {
          key: "cameraExperience",
          value: function () {
            var _cameraExperience = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(options, resolve, reject) {
              var _this9 = this;

              var cameraModal;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      if (!customElements.get('pwa-camera-modal')) {
                        _context34.next = 16;
                        break;
                      }

                      cameraModal = document.createElement('pwa-camera-modal');
                      cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front ? 'user' : 'environment';
                      document.body.appendChild(cameraModal);
                      _context34.prev = 4;
                      _context34.next = 7;
                      return cameraModal.componentOnReady();

                    case 7:
                      cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(e) {
                          var photo;
                          return regeneratorRuntime.wrap(function _callee33$(_context33) {
                            while (1) {
                              switch (_context33.prev = _context33.next) {
                                case 0:
                                  photo = e.detail;

                                  if (!(photo === null)) {
                                    _context33.next = 5;
                                    break;
                                  }

                                  reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                                  _context33.next = 14;
                                  break;

                                case 5:
                                  if (!(photo instanceof Error)) {
                                    _context33.next = 9;
                                    break;
                                  }

                                  reject(photo);
                                  _context33.next = 14;
                                  break;

                                case 9:
                                  _context33.t0 = resolve;
                                  _context33.next = 12;
                                  return _this9._getCameraPhoto(photo, options);

                                case 12:
                                  _context33.t1 = _context33.sent;
                                  (0, _context33.t0)(_context33.t1);

                                case 14:
                                  cameraModal.dismiss();
                                  document.body.removeChild(cameraModal);

                                case 16:
                                case "end":
                                  return _context33.stop();
                              }
                            }
                          }, _callee33);
                        }));

                        return function (_x34) {
                          return _ref6.apply(this, arguments);
                        };
                      }());
                      cameraModal.present();
                      _context34.next = 14;
                      break;

                    case 11:
                      _context34.prev = 11;
                      _context34.t0 = _context34["catch"](4);
                      this.fileInputExperience(options, resolve);

                    case 14:
                      _context34.next = 18;
                      break;

                    case 16:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                      this.fileInputExperience(options, resolve);

                    case 18:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this, [[4, 11]]);
            }));

            function cameraExperience(_x31, _x32, _x33) {
              return _cameraExperience.apply(this, arguments);
            }

            return cameraExperience;
          }()
        }, {
          key: "fileInputExperience",
          value: function fileInputExperience(options, resolve) {
            var input = document.querySelector('#_capacitor-camera-input');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input';
              input.type = 'file';
              input.hidden = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var file = input.files[0];
                var format = 'jpeg';

                if (file.type === 'image/png') {
                  format = 'png';
                } else if (file.type === 'image/gif') {
                  format = 'gif';
                }

                if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
                  var reader = new FileReader();
                  reader.addEventListener('load', function () {
                    if (options.resultType === 'dataUrl') {
                      resolve({
                        dataUrl: reader.result,
                        format: format
                      });
                    } else if (options.resultType === 'base64') {
                      var b64 = reader.result.split(',')[1];
                      resolve({
                        base64String: b64,
                        format: format
                      });
                    }

                    cleanup();
                  });
                  reader.readAsDataURL(file);
                } else {
                  resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                  cleanup();
                }
              });
            }

            input.accept = 'image/*';
            input.capture = true;

            if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
              input.removeAttribute('capture');
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
              input.capture = 'user';
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
              input.capture = 'environment';
            }

            input.click();
          }
        }, {
          key: "multipleFileInputExperience",
          value: function multipleFileInputExperience(resolve) {
            var input = document.querySelector('#_capacitor-camera-input-multiple');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input-multiple';
              input.type = 'file';
              input.hidden = true;
              input.multiple = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var photos = []; // eslint-disable-next-line @typescript-eslint/prefer-for-of

                for (var i = 0; i < input.files.length; i++) {
                  var file = input.files[i];
                  var format = 'jpeg';

                  if (file.type === 'image/png') {
                    format = 'png';
                  } else if (file.type === 'image/gif') {
                    format = 'gif';
                  }

                  photos.push({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                }

                resolve({
                  photos: photos
                });
                cleanup();
              });
            }

            input.accept = 'image/*';
            input.click();
          }
        }, {
          key: "_getCameraPhoto",
          value: function _getCameraPhoto(photo, options) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              var format = photo.type.split('/')[1];

              if (options.resultType === 'uri') {
                resolve({
                  webPath: URL.createObjectURL(photo),
                  format: format,
                  saved: false
                });
              } else {
                reader.readAsDataURL(photo);

                reader.onloadend = function () {
                  var r = reader.result;

                  if (options.resultType === 'dataUrl') {
                    resolve({
                      dataUrl: r,
                      format: format,
                      saved: false
                    });
                  } else {
                    resolve({
                      base64String: r.split(',')[1],
                      format: format,
                      saved: false
                    });
                  }
                };

                reader.onerror = function (e) {
                  reject(e);
                };
              }
            });
          }
        }, {
          key: "checkPermissions",
          value: function () {
            var _checkPermissions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              var permission;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                        _context35.next = 2;
                        break;
                      }

                      throw this.unavailable('Permissions API not available in this browser');

                    case 2:
                      _context35.prev = 2;
                      _context35.next = 5;
                      return window.navigator.permissions.query({
                        name: 'camera'
                      });

                    case 5:
                      permission = _context35.sent;
                      return _context35.abrupt("return", {
                        camera: permission.state,
                        photos: 'granted'
                      });

                    case 9:
                      _context35.prev = 9;
                      _context35.t0 = _context35["catch"](2);
                      throw this.unavailable('Camera permissions are not available in this browser');

                    case 12:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this, [[2, 9]]);
            }));

            function checkPermissions() {
              return _checkPermissions2.apply(this, arguments);
            }

            return checkPermissions;
          }()
        }, {
          key: "requestPermissions",
          value: function () {
            var _requestPermissions2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function requestPermissions() {
              return _requestPermissions2.apply(this, arguments);
            }

            return requestPermissions;
          }()
        }]);

        return CameraWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Camera = new CameraWeb(); //# sourceMappingURL=web.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map