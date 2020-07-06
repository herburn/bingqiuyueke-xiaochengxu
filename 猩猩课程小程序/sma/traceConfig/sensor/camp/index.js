function ownKeys(n, e) {
    var o = Object.keys(n);
    return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(n)), 
    e && (o = o.filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })), o;
}

function _objectSpread(n) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(o, !0).forEach(function(e) {
            _defineProperty(n, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : ownKeys(o).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return n;
}

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var campContent = require("./campContent.js"), onlineCampHome = require("./onlineCampHome.js"), onlineCampItem = require("./onlineCampItem.js"), onlineCourseList = require("./onlineCourseList.js"), onlineCampDetail = require("./onlineCampDetail.js"), trainerList = require("./trainerList.js"), campBookingConfirm = require("./campBookingConfirm.js");

module.exports = {
    responseRegionIdMap: _objectSpread({}, campContent.responseRegionIdMap, {}, onlineCampHome.responseRegionIdMap, {}, onlineCampItem.responseRegionIdMap, {}, onlineCourseList.responseRegionIdMap, {}, onlineCampDetail.responseRegionIdMap, {}, campBookingConfirm.responseRegionIdMap, {}, trainerList),
    responseRegionConfigMap: _objectSpread({}, campContent.responseRegionConfigMap, {}, onlineCampHome.responseRegionConfigMap, {}, onlineCampItem.responseRegionConfigMap, {}, onlineCourseList.responseRegionConfigMap, {}, onlineCampDetail.responseRegionConfigMap, {}, campBookingConfirm.responseRegionConfigMap, {}, trainerList)
};