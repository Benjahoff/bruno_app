
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "phonegap-plugin-mobile-accessibility.MobileAccessibilityNotifications",
          "file": "plugins/phonegap-plugin-mobile-accessibility/www/MobileAccessibilityNotifications.js",
          "pluginId": "phonegap-plugin-mobile-accessibility",
        "clobbers": [
          "MobileAccessibilityNotifications"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection"
        ]
        },
      {
          "id": "cordova-plugin-native-spinner.SpinnerDialog",
          "file": "plugins/cordova-plugin-native-spinner/www/SpinnerDialog.js",
          "pluginId": "cordova-plugin-native-spinner",
        "clobbers": [
          "SpinnerDialog"
        ]
        },
      {
          "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
          "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
          "pluginId": "phonegap-plugin-mobile-accessibility",
        "clobbers": [
          "window.MobileAccessibility"
        ]
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device": "2.0.4-dev",
      "cordova-plugin-native-spinner": "1.1.3",
      "cordova-plugin-network-information": "3.0.1-dev",
      "es6-promise-plugin": "4.2.2",
      "phonegap-plugin-mobile-accessibility": "1.0.5-dev"
    };
    // BOTTOM OF METADATA
    });
    