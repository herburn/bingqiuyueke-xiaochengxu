Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateSelectors = void 0;

var _utils = require("./utils.js"), _ramda = require("./../../../vendor.js")(320), reselect = _interopRequireWildcard(require("./../../../vendor.js")(328));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
    }
    return r.default = e, r;
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

function _updateSelectors(e, r, t) {
    if (t.selectors && r(t.namespace)) {
        var o = t.selectors(_objectSpread({
            getSelector: _utils.lazyExecute.bind(null, e)
        }, reselect));
        (0, _utils.setPath)(t.namespace, o, e), Object.assign(e, o);
    }
}

var updateSelectorsCurry = (0, _ramda.curry)(_updateSelectors);

exports.updateSelectors = updateSelectorsCurry;