function _defineProperty(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, ATTEND_CLASS_GUIDE_IMAGES_NOVICE_DETAIL = "attendClassGuideImagesNoviceDetail";

responseRegionIdMap.NoviceClassDetailAttendGuide = {
    ATTEND_CLASS_GUIDE_IMAGES_NOVICE_DETAIL: ATTEND_CLASS_GUIDE_IMAGES_NOVICE_DETAIL
}, responseRegionConfigMap.NoviceClassDetailAttendGuide = _defineProperty({}, ATTEND_CLASS_GUIDE_IMAGES_NOVICE_DETAIL, {
    id: elementsIdMap.NoviceClassDetailAttendGuide.ATTEND_CLASS_GUIDE_IMAGES,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "4",
            buttonName: "到店上课指南"
        }
    }
});

var BTN_CHECK_SCHEDULE_NOVICE_DETAIL = "btnCheckScheduleNoviceDetail";

responseRegionIdMap.NoviceClassDetail = {
    BTN_CHECK_SCHEDULE_NOVICE_DETAIL: BTN_CHECK_SCHEDULE_NOVICE_DETAIL
}, responseRegionConfigMap.NoviceClassDetail = _defineProperty({}, BTN_CHECK_SCHEDULE_NOVICE_DETAIL, {
    id: elementsIdMap.NoviceClassDetail.BTN_CHECK_SCHEDULE,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "3",
            buttonName: "查看课表"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};