(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"],{

/***/ "/s3u":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "wzPO")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "3mz4":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "6/gD":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/filesystem */ "F7bV");
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ "YwB3");





let PhotoService = class PhotoService {
    constructor() {
        this.photos = [];
        this.images = [];
        this.PHOTO_STORAGE = "fotos";
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fotoCapturada = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                allowEditing: false,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 80
            })
                .then((fc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const saveImageFile = yield this.savePhoto(fc);
                this.photos.unshift(saveImageFile);
                /* Storage.set({
                  key: this.PHOTO_STORAGE,
                  value: JSON.stringify(this.photos)
                }) */
            }))
                .catch(() => {
                console.log("error");
                return false;
            });
        });
    }
    selectToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.photos = [];
            const fotoCapturada = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                allowEditing: false,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos,
                quality: 80
            })
                .then((fc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const saveImageFile = yield this.savePhoto(fc);
                this.photos.unshift(saveImageFile);
                /* Storage.set({
                  key: this.PHOTO_STORAGE,
                  value: JSON.stringify(this.photos)
                }) */
            }))
                .catch(() => {
                console.log("error");
                return false;
            });
        });
    }
    savePhoto(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const base64Data = yield this.readAsBase64(cameraPhoto);
            const fileName = new Date().getTime + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
            });
            this.savedFile = base64Data;
            this.webPath = cameraPhoto.webPath;
            return {
                filepath: fileName,
                webViewPath: cameraPhoto.webPath,
            };
        });
    }
    readAsBase64(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    loadSaved() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const listPhotos = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"].get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(listPhotos.value) || [];
            for (let photo of this.photos) {
                const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                    path: photo.filepath,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
                });
                photo.webViewPath = `data:image/jpeg;base64,${readFile.data}`;
            }
        });
    }
};
PhotoService.ctorParameters = () => [];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ "F7bV":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "cyLK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["Directory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["Encoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemEncoding"]; });


const Filesystem = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Filesystem', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "B5q2")).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "FUe0":
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorException", function() { return CapacitorException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function() { return CapacitorPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionCode", function() { return ExceptionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlatform", function() { return addPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlatform", function() { return setPlatform; });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
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
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
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
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
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
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "Fo4Z":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/*! exports provided: createTranslateLoader, ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scan-routing.module */ "uNsd");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan.page */ "NpPW");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let ScanPageModule = class ScanPageModule {
};
ScanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })
], ScanPageModule);



/***/ }),

/***/ "NpPW":
/*!*****************************************!*\
  !*** ./src/app/pages/scan/scan.page.ts ***!
  \*****************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scan.page.html */ "eF8J");
/* harmony import */ var _scan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan.page.scss */ "vH3q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/scan.service */ "1IZq");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/photo.service */ "6/gD");









let ScanPage = class ScanPage {
    constructor(ac, route, _scanService, photoService, translate, device) {
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
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            this.ac.params.subscribe((routeParams) => {
                this.type = routeParams.type;
            });
        });
    }
    /**
     * Everytime that the user enter into this view this method is executed
     */
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.langs = this.translate.currentLang;
            this.ingredientsList = null;
            this.cameraActive = true;
            //await this.addPhotoToGallery()
            //this.openCamera();
        });
    }
    tekeAgain() {
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
    returnHome() {
        this.route.navigate(['scan-info']);
        /* this.stopCamera().then( r => {
        }); */
    }
    returnChoice() {
        this.route.navigate(['scan-info']);
        /* this.stopCamera().then( r => {
        }); */
    }
    /**
     * Request to the backend to save photo and analize ingredients
     */
    sendPhoto() {
        //this.stopCamera().then( r => {
        this.isLoading = true;
        console.log(this.photoService.savedFile);
        console.log(this.photoService.webPath);
        let imagedata = this.photoService.savedFile.split(',')[1];
        //
        //image: 'prueba',
        //image: imagedata,
        const data = {
            image: imagedata,
            code: '2y12U9.BrhUsFQvQzCXNQOWrAe4wIG9qo9H4DZ.BdJUQvTeQv/LKtC89e',
            device: this.device.uuid,
            lang: this.langs,
            type: this.type,
        };
        console.log('Los datos', data);
        this._scanService.sendPhoto(data).subscribe((resp) => {
            this.isLoading = false;
            this.ingredientsList = resp['data'];
            //this.ingredientsList['product'] = [];
            //this.ingredientsList['product'] = product['default']['data']['product'];
            this.consultaId = resp['consulta'];
            console.log('Lista ', this.ingredientsList);
        }, (err) => {
            console.warn(err);
            this.isLoading = false;
        });
        //});
    }
    downloadFile() {
        this._scanService.generatePdfConsultLink(this.consultaId).subscribe((resp) => {
            window.open(resp['link']);
            this.printLoad = false;
        }, (err) => {
            this.printLoad = false;
        });
    }
    addPhotoToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoService.addNewToGallery();
            if (this.photoService.photos.length == 0) {
                //this.returnChoice()
                this.cameraActive = true;
                return;
            }
            console.log(this.photoService);
            this.image = this.photoService.photos[0].webViewPath || [];
            this.cameraActive = false;
        });
    }
    selectToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoService.selectToGallery();
            if (this.photoService.photos.length == 0) {
                //this.returnChoice()
                this.cameraActive = true;
                return;
            }
            console.log(this.photoService);
            this.image = this.photoService.photos[0].webViewPath || [];
            this.cameraActive = false;
        });
    }
    selectFile() {
        this.route.navigate(['select-file/' + this.type]);
    }
};
ScanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_scan_service__WEBPACK_IMPORTED_MODULE_5__["ScanService"] },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_8__["PhotoService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"] }
];
ScanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scan',
        template: _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScanPage);



/***/ }),

/***/ "YwB3":
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "3mz4");
/* empty/unused harmony star reexport */
const Storage = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Storage', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "srMn")).then(m => new m.StorageWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "cyLK":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
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
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "dTEF":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
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
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "eF8J":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"overflowHidden\" color=\"white\">\r\n    <div *ngIf=\"!isLoading\">\r\n\r\n        <section *ngIf=\"cameraActive\">\r\n            <div class=\"position-absolute contenedorModalTop\">\r\n                <img class=\"div__background-wavetop contenedorModalTop\" src=\"../../../assets/icon/infoWaveTop.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"position-absolute container contenedorModalTop\">\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-2 my-auto text-center\">\r\n                        <img class=\" div_closebutton\" (click)=\"returnHome()\" src=\"../../../assets/icon/close.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"col-8 bruno-btn-home my-auto text-center bruno-text-info2\">\r\n                        <p class=\"my-auto closeSectionText\">{{'scan.text' | translate | uppercase}}</p>\r\n                    </div>\r\n                    <div class=\"col-2\"></div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <ion-img [src]=\"image\" *ngIf=\"image && !cameraActive &&  ingredientsList === null\"></ion-img>\r\n        <div class=\"position-absolute contenedorModalBottom\" *ngIf=\"ingredientsList === null\">\r\n            <img class=\"div__background-wavebottom\" src=\"../../../assets/icon/infoWaveBottom.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"contenedorBoton\" *ngIf=\"cameraActive &&  ingredientsList === null\">\r\n            <img class=\"btnPhoto\" src=\"../../../assets/IMG-3050.jpg\" alt=\"\">\r\n            <app-button class=\"btnBottomSendPhoto\"  [btnText]=\"'scan.take' | translate\" (emitClick)=\"addPhotoToGallery()\"></app-button>\r\n            <app-button class=\"btnBottomUploadPhoto\" [btnText]=\"'scan.upload' | translate\" (emitClick)=\"selectToGallery()\"></app-button>\r\n        </div>\r\n\r\n        <div class=\"contenedorBoton\" *ngIf=\"image && !cameraActive &&  ingredientsList === null\">\r\n            <div class=\"col-12 bruno-text-info2 divTextoFoto my-auto text-center mt-3 mb-4\">\r\n                <p class=\"my-auto closeSectionTextPhoto\">{{'scan.question' | translate}}</p>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-6 text-center\">\r\n                    <app-button class=\"tryAgainButton\" [btnText]=\"'scan.repeat' | translate\" (emitClick)=\"tekeAgain()\"></app-button>\r\n                </div>\r\n                <div class=\"col-6 text-center\">\r\n                    <app-button class=\"btnBottomUploadPhoto\" [btnText]=\"'scan.send' | translate\" [loading]=\"isLoading\" (emitClick)=\"sendPhoto()\"></app-button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <app-list *ngIf=\"ingredientsList !== null && !isLoading\" [ingredientsList]=\"ingredientsList\" (pdfButtonEvent)=\"downloadFile()\" (listButtonEvent)=\"returnChoice()\"></app-list>\r\n    </div>\r\n    <app-wait *ngIf=\"isLoading\"></app-wait>\r\n</ion-content>");

/***/ }),

/***/ "uNsd":
/*!***************************************************!*\
  !*** ./src/app/pages/scan/scan-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ScanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function() { return ScanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan.page */ "NpPW");




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ "vH3q":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\");\nion-content {\n  --background: white !important;\n}\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n}\n.bruno-btn-home {\n  color: #a94541;\n  font-size: 0.6em;\n  z-index: 12;\n}\n.bruno-text-info2 {\n  color: #a94541;\n  font-size: 0.7em;\n}\n.centrar-vertical {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cameraPreview {\n  top: 20%;\n  width: 100%;\n  height: 100%;\n  z-index: 4 !important;\n}\n.img-line {\n  width: 80%;\n}\n.contenedorModalTop {\n  z-index: 11;\n}\n.div__background-wave {\n  width: 100%;\n}\n.div__background-wavetop {\n  width: 100%;\n  z-index: -5;\n}\n.div_closebutton {\n  width: 25px;\n  z-index: 999;\n}\n.container-elements {\n  z-index: 2 !important;\n}\n.contenedorBoton {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n.btnBottomSendPhoto {\n  position: absolute;\n  left: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.btnPhoto {\n  position: absolute;\n  top: 10%;\n  left: 0%;\n}\n.btnBottomUploadPhoto {\n  position: absolute;\n  right: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.btnBottomSendPhotoUP {\n  position: absolute;\n  right: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.text-blue {\n  color: #a94541;\n}\n.closeSectionText {\n  font-size: 1.2em;\n  position: absolute;\n  bottom: -3vh;\n  padding-bottom: 8px;\n}\n.closeSectionTextPhoto {\n  font-size: 1.2em;\n  padding-bottom: 8px;\n}\n.divTextoFoto {\n  position: absolute;\n  bottom: 9vh;\n  width: 100%;\n  z-index: 12;\n}\n.contenedorModalBottom {\n  z-index: 11;\n  bottom: 0;\n}\n.tryAgainButton {\n  font-size: 0.8em !important;\n  position: absolute;\n  left: 10%;\n  bottom: 4vh;\n  padding-bottom: 8px;\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.cameraPreview {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.image-overlay {\n  z-index: 1;\n  position: absolute;\n  left: 25%;\n  top: 25%;\n  width: 50%;\n}\n#capture {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% - 25px);\n  z-index: 11;\n}\n#close {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% - 175px);\n  z-index: 11;\n}\n#flip {\n  position: absolute;\n  bottom: 30px;\n  width: 50px;\n  height: 50px;\n  left: calc(50% + 125px);\n  z-index: 11;\n}\n.overflowHidden {\n  overflow-y: hidden;\n}\n@media screen and (min-height: 739px) {\n  .btnPhoto {\n    top: 15%;\n    left: -22%;\n    transform: scale(1.5);\n  }\n}\n@media screen and (min-height: 844px) {\n  .btnPhoto {\n    top: 18%;\n    left: -17%;\n    transform: scale(1.6);\n  }\n}\n@media screen and (min-height: 910px) {\n  .btnPhoto {\n    top: 17%;\n    left: -18%;\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSx5RkFBQTtBQUpSO0VBQ0ksOEJBQUE7QUFFSjtBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBR0E7RUFDSSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFKO0FBR0E7RUFDSSxVQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtBQUFKO0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSEo7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFKSjtBQU9BO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTEo7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0E7RUFDSSxjQUFBO0FBTko7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVBO0VBQ0ksZ0JBQUE7RUFJQSxtQkFBQTtBQVZKO0FBYUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZKO0FBYUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQVZKO0FBYUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVhKO0FBY0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFYSjtBQWNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFYSjtBQWNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYSjtBQWNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYSjtBQWNBO0VBQ0ksa0JBQUE7QUFYSjtBQWVBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VBWk47QUFDRjtBQWVBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VBYk47QUFDRjtBQWdCQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQWROO0FBQ0YiLCJmaWxlIjoic2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYnJ1bm8tYnRuLWhvbWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcbi5icnVuby10ZXh0LWluZm8yIHtcclxuICAgIGNvbG9yOiAjYTk0NTQxO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmNlbnRyYXItdmVydGljYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYW1lcmFQcmV2aWV3IHtcclxuICAgIHRvcDoyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1saW5lIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yTW9kYWxUb3Age1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5kaXZfX2JhY2tncm91bmQtd2F2ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdl9fYmFja2dyb3VuZC13YXZldG9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTU7XHJcbn1cclxuXHJcbi5kaXZfY2xvc2VidXR0b24ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5jb250YWluZXItZWxlbWVudHMge1xyXG4gICAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW5lZG9yQm90b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG5Cb3R0b21TZW5kUGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDYwJTtcclxuICAgIGxlZnQ6IDEwJTsgXHJcbiAgICBib3R0b206IDR2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG59XHJcblxyXG4uYnRuUGhvdG97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG59XHJcblxyXG4uYnRuQm90dG9tVXBsb2FkUGhvdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDQwJTtcclxuICAgIHJpZ2h0OiAxMCU7IFxyXG4gICAgYm90dG9tOiA0dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bkJvdHRvbVNlbmRQaG90b1VQIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICBib3R0b206IDR2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUge1xyXG4gICAgY29sb3I6ICNhOTQ1NDE7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3RvcDogNDAlOyAgICBcclxuICAgIGJvdHRvbTogLTN2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jbG9zZVNlY3Rpb25UZXh0UGhvdG8ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDQwJTsgICAgXHJcbiAgICAvL2JvdHRvbTogNHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmRpdlRleHRvRm90b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JNb2RhbEJvdHRvbSB7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnRyeUFnYWluQnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiAxMCU7IFxyXG4gICAgYm90dG9tOiA0dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FtZXJhUHJldmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5pbWFnZS1vdmVybGF5IHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNjYXB0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4jY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4jZmxpcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlICsgMTI1cHgpO1xyXG4gICAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5vdmVyZmxvd0hpZGRlbiB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vczhcclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4taGVpZ2h0OiA3MzlweCApIHtcclxuICAgIC5idG5QaG90b3tcclxuICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICBsZWZ0OiAtMjIlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIH1cclxufVxyXG4vL3hyIDEycHJvIHBpeGVsXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWluLWhlaWdodDogODQ0cHggKSB7XHJcbiAgICAuYnRuUGhvdG97XHJcbiAgICAgICAgdG9wOiAxOCU7XHJcbiAgICAgICAgbGVmdDogLTE3JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XHJcbiAgICB9XHJcbn1cclxuLy9zMjAgVWx0cmFcclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4taGVpZ2h0OiA5MTBweCApIHtcclxuICAgIC5idG5QaG90b3tcclxuICAgICAgICB0b3A6IDE3JTtcclxuICAgICAgICBsZWZ0OiAtMTglO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-scan-scan-module-es2015.js.map