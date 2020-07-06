function _defineProperty(e, n, s) {
    return n in e ? Object.defineProperty(e, n, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = s, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, TRAINER_SUBSCRIBE = "trainerSubscribe";

responseRegionIdMap.ClassListTrainerCamp = {
    TRAINER_SUBSCRIBE: TRAINER_SUBSCRIBE
}, responseRegionConfigMap.ClassListTrainerCamp = _defineProperty({}, TRAINER_SUBSCRIBE, {
    id: elementsIdMap.ClassListTrainerCamp.TRAINER_SUBSCRIBE,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "6",
            buttonName: "SGO-订阅按钮"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};