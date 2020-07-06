var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, OPEN_SUPER_CARD_BTN_SUPER_RANK = "openSuperCardBtnSuperRank", SHARE_GROUP_BTN_SUPER_RANK = "shareGroupBtnSuperRank";

responseRegionIdMap.SuperRank = {}, responseRegionConfigMap.SuperRank = (_defineProperty(_responseRegionConfig = {}, OPEN_SUPER_CARD_BTN_SUPER_RANK, {
    id: elementsIdMap.SuperRank.OPEN_SUPER_CARD,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "1",
            buttonName: "开通超猩卡"
        }
    }
}), _defineProperty(_responseRegionConfig, SHARE_GROUP_BTN_SUPER_RANK, {
    id: elementsIdMap.SuperRank.SHARE_GROUP,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "2",
            buttonName: "转发到群"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};