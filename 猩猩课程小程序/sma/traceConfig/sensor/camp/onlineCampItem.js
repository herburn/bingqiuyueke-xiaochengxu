function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, BOOKING_BTN = "bookingBtn", CAMP_TITLE_BTN = "campTitleBtn";

responseRegionIdMap.OnlineCampItem = {
    CAMP_TITLE_BTN: CAMP_TITLE_BTN
}, responseRegionConfigMap.OnlineCampItem = _defineProperty({}, CAMP_TITLE_BTN, {
    id: elementsIdMap.OnlineCampItem.CAMP_TITLE_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "4",
            buttonName: "SGO-点击课程名称"
        }
    }
}), responseRegionIdMap.CampItemLayout = {
    BOOKING_BTN: BOOKING_BTN
}, responseRegionConfigMap.CampItemLayout = _defineProperty({}, BOOKING_BTN, {
    id: elementsIdMap.CampItemLayout.BOOKING_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "5",
            buttonName: "SGO-点击报名"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};