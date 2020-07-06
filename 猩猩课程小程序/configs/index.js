Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _exportNames = {
    version: !0,
    logReportConfig: !0,
    debugConfig: !0,
    httpConfig: !0,
    socketConfig: !0
};

Object.defineProperty(exports, "version", {
    enumerable: !0,
    get: function() {
        return _envConfig.version;
    }
}), Object.defineProperty(exports, "logReportConfig", {
    enumerable: !0,
    get: function() {
        return _envConfig.logReportConfig;
    }
}), Object.defineProperty(exports, "debugConfig", {
    enumerable: !0,
    get: function() {
        return _envConfig.debugConfig;
    }
}), Object.defineProperty(exports, "httpConfig", {
    enumerable: !0,
    get: function() {
        return _envConfig.httpConfig;
    }
}), Object.defineProperty(exports, "socketConfig", {
    enumerable: !0,
    get: function() {
        return _envConfig.socketConfig;
    }
});

var _envConfig = require("./envConfig/index.js"), _cacheConfig = require("./cacheConfig.js");

Object.keys(_cacheConfig).forEach(function(e) {
    "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(_exportNames, e) || Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return _cacheConfig[e];
        }
    }));
});