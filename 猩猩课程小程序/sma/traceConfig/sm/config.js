function ownKeys(n, e) {
    var r = Object.keys(n);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(n)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable;
    })), r;
}

function _objectSpread(n) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(n, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return n;
}

function _defineProperty(e, n, r) {
    return n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e;
}

var elementsIdMap = require("./../../../elementsId/index.js"), box = require("./box/index.js"), classBiz = require("./class/index.js"), components = require("./components/index.js"), course = require("./course/index.js"), superCard = require("./superCard/index.js"), getDataBindingMapCreator = require("./../utils/getDataBindingMapCreator.js"), responseRegionsIdMap = _objectSpread({}, box.responseRegionIdMap, {}, classBiz.responseRegionIdMap, {}, components.responseRegionIdMap, {}, course.responseRegionIdMap, {}, superCard.responseRegionIdMap), responseRegionsConfigMap = _objectSpread({}, box.responseRegionConfigMap, {}, classBiz.responseRegionConfigMap, {}, components.responseRegionConfigMap, {}, course.responseRegionConfigMap, {}, superCard.responseRegionConfigMap);

module.exports = {
    dataSuffix: "sm",
    elementsIdMap: elementsIdMap,
    responseRegionsIdMap: responseRegionsIdMap,
    responseRegionsConfigMap: responseRegionsConfigMap,
    getDataBindingMap: getDataBindingMapCreator({
        elementsIdMap: elementsIdMap,
        responseRegionsConfigMap: responseRegionsConfigMap
    })
};