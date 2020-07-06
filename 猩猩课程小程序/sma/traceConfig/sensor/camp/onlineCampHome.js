var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, COURSE_TAB = "courseItemTab", CAMP_TAB = "campTab", TRAINER_TAB = "trainerTab", LIVE_TAB = "liveTab", ALL_COURSE = "allCourse", ALL_CAMP = "allCamp", BOOKING_BTN = "bookingBtn";

responseRegionIdMap.OnlineCampHome = {
    COURSE_TAB: COURSE_TAB,
    CAMP_TAB: CAMP_TAB,
    TRAINER_TAB: TRAINER_TAB,
    LIVE_TAB: LIVE_TAB,
    ALL_COURSE: ALL_COURSE,
    ALL_CAMP: ALL_CAMP,
    BOOKING_BTN: BOOKING_BTN
}, responseRegionConfigMap.OnlineCampHome = (_defineProperty(_responseRegionConfig = {}, COURSE_TAB, {
    id: elementsIdMap.OnlineCampHome.COURSE_TAB,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "11",
            buttonName: "SGO-课程按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, CAMP_TAB, {
    id: elementsIdMap.OnlineCampHome.CAMP_TAB,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "12",
            buttonName: "SGO-营期按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, TRAINER_TAB, {
    id: elementsIdMap.OnlineCampHome.TRAINER_TAB,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "13",
            buttonName: "SGO-教练按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, LIVE_TAB, {
    id: elementsIdMap.OnlineCampHome.LIVE_TAB,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "14",
            buttonName: "SGO-Live按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, ALL_COURSE, {
    id: elementsIdMap.OnlineCampHome.ALL_COURSE,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "15",
            buttonName: "SGO-全部课程按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, ALL_CAMP, {
    id: elementsIdMap.OnlineCampHome.ALL_CAMP,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "17",
            buttonName: "SGO-全部营期按钮"
        }
    }
}), _defineProperty(_responseRegionConfig, BOOKING_BTN, {
    id: elementsIdMap.OnlineCampHome.BOOKING_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "20",
            buttonName: "SGO-Live按钮"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};