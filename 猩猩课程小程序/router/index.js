Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "encodeParams", {
    enumerable: !0,
    get: function() {
        return _core.encodeParams;
    }
}), Object.defineProperty(exports, "encodeUrl", {
    enumerable: !0,
    get: function() {
        return _core.encodeUrl;
    }
}), Object.defineProperty(exports, "decodeParams", {
    enumerable: !0,
    get: function() {
        return _core.decodeParams;
    }
}), Object.defineProperty(exports, "decodePage", {
    enumerable: !0,
    get: function() {
        return _core.decodePage;
    }
}), Object.defineProperty(exports, "decodeUrl", {
    enumerable: !0,
    get: function() {
        return _core.decodeUrl;
    }
}), exports.default = exports.router = void 0;

var _core = require("./core/index.js"), config = _interopRequireWildcard(require("./config.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
    }
    return r.default = e, r;
}

var router = (0, _core.createSmRouter)(config), _default = exports.router = router;

exports.default = _default;