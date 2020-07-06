var _responseRegionConfig;

function _defineProperty(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, TRAINER_DETAIL_BTN = "trainerDetailBtn", TRAINER_SUBSCRIBE = "trainerSubscribe";

responseRegionIdMap.TrainerList = {
    TRAINER_DETAIL_BTN: TRAINER_DETAIL_BTN,
    TRAINER_SUBSCRIBE: TRAINER_SUBSCRIBE
}, responseRegionConfigMap.TrainerList = (_defineProperty(_responseRegionConfig = {}, TRAINER_DETAIL_BTN, {
    id: elementsIdMap.TrainerList.TRAINER_DETAIL_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "30",
            buttonName: "SGO-点击教练详情"
        }
    }
}), _defineProperty(_responseRegionConfig, TRAINER_SUBSCRIBE, {
    id: elementsIdMap.TrainerList.TRAINER_SUBSCRIBE,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "31",
            buttonName: "SGO-订阅按钮"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};