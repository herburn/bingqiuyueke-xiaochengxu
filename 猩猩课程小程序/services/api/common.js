Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "http", {
    enumerable: !0,
    get: function() {
        return _api.http;
    }
}), Object.defineProperty(exports, "interceptors", {
    enumerable: !0,
    get: function() {
        return _api.interceptors;
    }
}), Object.defineProperty(exports, "errorCode", {
    enumerable: !0,
    get: function() {
        return _api.errorCode;
    }
}), exports.mockBase = exports.specialBase = exports.generalBase = exports.loginBase = void 0;

var _api = require("./../../imports/api.js"), _configs = require("./../../configs/index.js"), loginBase = _configs.httpConfig.loginBase;

exports.loginBase = loginBase;

var generalBase = _configs.httpConfig.generalBase;

exports.generalBase = generalBase;

var specialBase = _configs.httpConfig.specialBase;

exports.specialBase = specialBase;

var mockBase = "http://yapi.internal.supermonkey.com.cn/mock/127";

exports.mockBase = mockBase;