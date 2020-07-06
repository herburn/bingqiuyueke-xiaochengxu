function ownKeys(r, e) {
    var n = Object.keys(r);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), n;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(r, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return r;
}

function _defineProperty(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e;
}

var campContent = require("./campContent.js"), onlineCampHome = require("./onlineCampHome.js"), onlineCampItem = require("./onlineCampItem.js"), onlineCourseList = require("./onlineCourseList.js"), onlineCampDetail = require("./onlineCampDetail.js"), campBookingConfirm = require("./campBookingConfirm.js"), trainerList = require("./trainerList.js");

module.exports = _objectSpread({}, campContent, {}, onlineCampHome, {}, onlineCampItem, {}, onlineCourseList, {}, onlineCampDetail, {}, trainerList, {}, campBookingConfirm);