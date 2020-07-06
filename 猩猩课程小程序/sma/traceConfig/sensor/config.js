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

var elementsIdMap = require("./../../../elementsId/index.js"), classBiz = require("./class/index.js"), components = require("./components/index.js"), course = require("./course/index.js"), camp = require("./camp/index.js"), novice = require("./novice/index.js"), rank = require("./rank/index.js"), specialRegion = require("./specialRegion/index.js"), superCard = require("./superCard/index.js"), ticket = require("./ticket/index.js"), getDataBindingMapCreator = require("./../utils/getDataBindingMapCreator.js"), responseRegionsIdMap = _objectSpread({}, classBiz.responseRegionIdMap, {}, components.responseRegionIdMap, {}, camp.responseRegionIdMap, {}, course.responseRegionIdMap, {}, novice.responseRegionIdMap, {}, rank.responseRegionIdMap, {}, specialRegion.responseRegionIdMap, {}, superCard.responseRegionIdMap, {}, ticket.responseRegionIdMap), responseRegionsConfigMap = _objectSpread({}, classBiz.responseRegionConfigMap, {}, components.responseRegionConfigMap, {}, course.responseRegionConfigMap, {}, camp.responseRegionConfigMap, {}, novice.responseRegionConfigMap, {}, rank.responseRegionConfigMap, {}, specialRegion.responseRegionConfigMap, {}, superCard.responseRegionConfigMap, {}, ticket.responseRegionConfigMap);

module.exports = {
    dataSuffix: "se",
    elementsIdMap: elementsIdMap,
    responseRegionsIdMap: responseRegionsIdMap,
    responseRegionsConfigMap: responseRegionsConfigMap,
    getDataBindingMap: getDataBindingMapCreator({
        elementsIdMap: elementsIdMap,
        responseRegionsConfigMap: responseRegionsConfigMap
    })
};