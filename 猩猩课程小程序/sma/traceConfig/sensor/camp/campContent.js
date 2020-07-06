function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, ALL_ONLINE_COURSE_BTN = "allOnlineCourseBtn";

responseRegionIdMap.CampContent = {
    ALL_ONLINE_COURSE_BTN: ALL_ONLINE_COURSE_BTN
}, responseRegionConfigMap.CampContent = _defineProperty({}, ALL_ONLINE_COURSE_BTN, {
    id: elementsIdMap.CampContent.ALL_ONLINE_COURSE_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "7",
            buttonName: "SGO-全部线上课程"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};