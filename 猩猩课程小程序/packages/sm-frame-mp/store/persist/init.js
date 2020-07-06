Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = init;

var _dependent = require("./../dependent.js"), _storageApi = _interopRequireDefault(require("./storageApi.js")), _ramda = _interopRequireDefault(require("./../../../../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var map = _ramda.default.map, prop = _ramda.default.prop, pipe = _ramda.default.pipe, values = _ramda.default.values;

function init(e) {
    (0, _dependent.persistInit)(_objectSpread({
        storageApi: _storageApi.default,
        cacheMapTransform: (0, _dependent.createCacheMapTransform)(e.expireKey, e.cacheMapExpiresAt),
        rootStorage: _dependent.storage.createStorage(_storageApi.default),
        mapStorage: _dependent.storage.createMapStorage(_storageApi.default, pipe(map(prop("name")), values)(e.cacheMap))
    }, e));
}