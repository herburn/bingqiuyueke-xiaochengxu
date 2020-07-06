function ownKeys(r, e) {
    var o = Object.keys(r);
    return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(r)), 
    e && (o = o.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), o;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(o, !0).forEach(function(e) {
            _defineProperty(r, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(o).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return r;
}

function _defineProperty(e, r, o) {
    return r in e ? Object.defineProperty(e, r, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = o, e;
}

var bookingSuccess = require("./bookingSuccess.js"), bookingOnlineTip = require("./bookingOnlineTip.js"), bookingSuccessBody = require("./bookingSuccessBody.js");

module.exports = _objectSpread({}, bookingSuccess, {}, bookingOnlineTip, {}, bookingSuccessBody);