function _defineProperty(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), promotion = require("./../promotion/index.js"), SUPERMONKEY_CARD_MENU_ROW = promotion.SUPERMONKEY_CARD_MENU_ROW, params = promotion.params, responseRegionIdMap = {}, responseRegionConfigMap = {};

responseRegionIdMap.My = {
    SUPERMONKEY_CARD_MENU_ROW: SUPERMONKEY_CARD_MENU_ROW
}, responseRegionConfigMap.My = _defineProperty({}, SUPERMONKEY_CARD_MENU_ROW, {
    id: elementsIdMap.My.SUPERMONKEY_CARD_MENU_ROW,
    clickBehavior: params
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};