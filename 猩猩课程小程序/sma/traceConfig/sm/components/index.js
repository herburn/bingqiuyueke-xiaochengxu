function ownKeys(o, e) {
    var r = Object.keys(o);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(o)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(o, e).enumerable;
    })), r;
}

function _objectSpread(o) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(o, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return o;
}

function _defineProperty(e, o, r) {
    return o in e ? Object.defineProperty(e, o, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = r, e;
}

var booking = require("./booking/index.js"), common = require("./common/index.js");

module.exports = {
    responseRegionIdMap: _objectSpread({}, booking.responseRegionIdMap, {}, common.responseRegionIdMap),
    responseRegionConfigMap: _objectSpread({}, booking.responseRegionConfigMap, {}, common.responseRegionConfigMap)
};