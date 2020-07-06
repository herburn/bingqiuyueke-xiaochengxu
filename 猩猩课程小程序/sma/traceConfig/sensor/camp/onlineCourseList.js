var _responseRegionConfig, _responseRegionConfig2;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, SWITCH_ALL_CAMP = "switchAllCamp", COURSE_FILTER_BTN = "courseFilterBtn", SWITCH_ALL_COURSE = "switchAllCourse", TRAINER_FILTER_BTN = "trainerFilterBtn", SHOW_CAN_BOOKING_BTN = "showCanBookingBtn";

responseRegionIdMap.OnlineCourseList = {
    SWITCH_ALL_CAMP: SWITCH_ALL_CAMP,
    COURSE_FILTER_BTN: COURSE_FILTER_BTN
}, responseRegionConfigMap.OnlineCourseList = (_defineProperty(_responseRegionConfig = {}, SWITCH_ALL_CAMP, {
    id: elementsIdMap.OnlineCourseList.SWITCH_ALL_CAMP,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "27",
            buttonName: "SGO-点击切换到全部营期"
        }
    }
}), _defineProperty(_responseRegionConfig, COURSE_FILTER_BTN, {
    id: elementsIdMap.OnlineCourseList.COURSE_FILTER_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "28",
            buttonName: "SGO-点击课程筛选"
        }
    }
}), _responseRegionConfig), responseRegionIdMap.OnlineCampList = {
    SWITCH_ALL_COURSE: SWITCH_ALL_COURSE,
    TRAINER_FILTER_BTN: TRAINER_FILTER_BTN,
    SHOW_CAN_BOOKING_BTN: SHOW_CAN_BOOKING_BTN
}, responseRegionConfigMap.OnlineCampList = (_defineProperty(_responseRegionConfig2 = {}, SWITCH_ALL_COURSE, {
    id: elementsIdMap.OnlineCampList.SWITCH_ALL_COURSE,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "21",
            buttonName: "SGO-点击切换到全部课程"
        }
    }
}), _defineProperty(_responseRegionConfig2, TRAINER_FILTER_BTN, {
    id: elementsIdMap.OnlineCampList.TRAINER_FILTER_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "22",
            buttonName: "SGO-点击教练筛选"
        }
    }
}), _defineProperty(_responseRegionConfig2, SHOW_CAN_BOOKING_BTN, {
    id: elementsIdMap.OnlineCampList.SHOW_CAN_BOOKING_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "23",
            buttonName: "SGO-点击只显示可报名"
        }
    }
}), _responseRegionConfig2), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};