function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, ONLINE_COURSE_BTN = "onlineCourseBtn";

responseRegionIdMap.ModalCitySelect = {
    ONLINE_COURSE_BTN: ONLINE_COURSE_BTN
}, responseRegionConfigMap.ModalCitySelect = _defineProperty({}, ONLINE_COURSE_BTN, {
    id: elementsIdMap.ModalCitySelect.ONLINE_COURSE_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "9",
            buttonName: "SGO-城市列表"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};