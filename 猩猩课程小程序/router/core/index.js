Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "encodeParams", {
    enumerable: !0,
    get: function() {
        return _urlParse.encodeParams;
    }
}), Object.defineProperty(exports, "encodeUrl", {
    enumerable: !0,
    get: function() {
        return _urlParse.encodeUrl;
    }
}), Object.defineProperty(exports, "decodeParams", {
    enumerable: !0,
    get: function() {
        return _urlParse.decodeParams;
    }
}), Object.defineProperty(exports, "decodePage", {
    enumerable: !0,
    get: function() {
        return _urlParse.decodePage;
    }
}), Object.defineProperty(exports, "decodeUrl", {
    enumerable: !0,
    get: function() {
        return _urlParse.decodeUrl;
    }
}), Object.defineProperty(exports, "createSmRouter", {
    enumerable: !0,
    get: function() {
        return _SmRouter.default;
    }
}), Object.defineProperty(exports, "guard", {
    enumerable: !0,
    get: function() {
        return _guard.default;
    }
}), Object.defineProperty(exports, "createComponentGuard", {
    enumerable: !0,
    get: function() {
        return _guard.createComponentGuard;
    }
}), Object.defineProperty(exports, "routeManager", {
    enumerable: !0,
    get: function() {
        return _routeManager.default;
    }
}), Object.defineProperty(exports, "config", {
    enumerable: !0,
    get: function() {
        return _config.default;
    }
});

var _urlParse = require("./utils/urlParse.js"), _SmRouter = _interopRequireDefault(require("./SmRouter.js")), _guard = _interopRequireWildcard(require("./guard/index.js")), _routeManager = _interopRequireDefault(require("./routeManager.js")), _config = _interopRequireDefault(require("./config.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}