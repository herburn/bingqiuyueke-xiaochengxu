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

var box = require("./box/index.js"), classBiz = require("./class/index.js"), camp = require("./camp/index.js"), components = require("./components/index.js"), course = require("./course/index.js"), novice = require("./novice/index.js"), rank = require("./rank/index.js"), superCard = require("./superCard/index.js"), ticket = require("./ticket/index.js");

module.exports = _objectSpread({}, box, {}, classBiz, {}, camp, {}, components, {}, course, {}, novice, {}, rank, {}, superCard, {}, ticket);