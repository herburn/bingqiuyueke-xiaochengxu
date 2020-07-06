Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "globalsReducer", {
    enumerable: !0,
    get: function() {
        return _reducers.globals;
    }
}), Object.defineProperty(exports, "persistReducer", {
    enumerable: !0,
    get: function() {
        return _imports.persistReducer;
    }
}), exports.apiServiceReducer = void 0;

var _reducers = require("./../store/reducers/index.js"), _imports = require("./../imports.js");

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

var apiReducer = {
    state: _objectSpread({}, _reducers.apiService.state, {}, _imports.apiServiceReducer.state),
    reducers: _objectSpread({}, _reducers.apiService.reducers, {}, _imports.apiServiceReducer.reducers)
};

exports.apiServiceReducer = apiReducer;