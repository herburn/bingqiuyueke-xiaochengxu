function _defineProperty(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), promotion = require("./../promotion/index.js"), BOX_BANNER_PROMOTION = promotion.BOX_BANNER_PROMOTION, BOX_ADS_PROMOTION = promotion.BOX_ADS_PROMOTION, params = promotion.params, responseRegionIdMap = {}, responseRegionConfigMap = {};

responseRegionIdMap.BoxList = {
    BOX_BANNER_PROMOTION: BOX_BANNER_PROMOTION
}, responseRegionConfigMap.BoxList = _defineProperty({}, BOX_BANNER_PROMOTION, {
    id: elementsIdMap.BoxList.BOX_BANNER,
    clickBehavior: params,
    onDebounceView: params
}), responseRegionIdMap.BoxCard = {
    BOX_ADS_PROMOTION: BOX_ADS_PROMOTION
}, responseRegionConfigMap.BoxCard = _defineProperty({}, BOX_ADS_PROMOTION, {
    id: elementsIdMap.BoxCard.BOX_ADS,
    clickBehavior: params,
    onDebounceView: params
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};