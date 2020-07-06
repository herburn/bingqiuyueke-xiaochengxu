Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _types = require("./../actions/types.js"), _dependent = require("./../dependent.js");

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

var state = {
    systemInfo: {},
    loginInfo: {},
    redirectPath: "pages/Stores"
}, reducers = (_defineProperty(_reducers = {}, _types.SYSTEMINFO_PUT, function(e, r) {
    return _objectSpread({}, e, {
        systemInfo: r.payload
    });
}), _defineProperty(_reducers, _types.LOGININFO_PUT, function(e, r) {
    return _objectSpread({}, e, {
        loginInfo: r.payload
    });
}), _defineProperty(_reducers, _types.COOKIE_PUT, function(e, r) {
    var t = r.payload;
    try {
        _dependent.wx.setStorageSync("cookie", t);
    } catch (e) {
        _dependent.wx.setStorageSync("cookie", t);
    }
    return e;
}), _defineProperty(_reducers, _types.REDIRECT_PATH_PUT, function(e, r) {
    return _objectSpread({}, e, {
        redirectPath: r.payload
    });
}), _reducers), _default = {
    state: state,
    reducers: reducers
};

exports.default = _default;