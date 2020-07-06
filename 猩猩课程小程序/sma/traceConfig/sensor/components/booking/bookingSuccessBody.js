var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, PREV_PIC_BTN = "prevPicBtn", ADD_FRIEND_BTN = "addFriendBtn", RECEIVE_MSG_BTN = "receiveMsgBtn", BACK_TBN = "backTbn", RESERVATION_RECORDS_BTN = "reservationRecordsBtn";

responseRegionIdMap.BookingSuccessBody = {
    BACK_TBN: BACK_TBN,
    RESERVATION_RECORDS_BTN: RESERVATION_RECORDS_BTN
}, responseRegionConfigMap.BookingSuccessBody = (_defineProperty(_responseRegionConfig = {}, ADD_FRIEND_BTN, {
    id: elementsIdMap.BookingSuccessBody.ADD_FRIEND_BTN,
    bindingMap: {
        courseType: "{{ courseType }}"
    },
    tap: {
        event: function(e) {
            return "onlineCamp" === e.courseType ? "buttonClick" : "unknown";
        },
        schema: function(e) {
            return "onlineCamp" === e.courseType ? {
                buttonId: "48",
                buttonName: "SGO-点击加好友聊聊"
            } : {};
        }
    }
}), _defineProperty(_responseRegionConfig, BACK_TBN, {
    id: elementsIdMap.BookingSuccessBody.BACK_TBN,
    bindingMap: {
        courseType: "{{ courseType }}"
    },
    tap: {
        event: function(e) {
            return "onlineCamp" === e.courseType ? "buttonClick" : "unknown";
        },
        schema: function(e) {
            return "onlineCamp" === e.courseType ? {
                buttonId: "46",
                buttonName: "SGO-点击返回继续预约"
            } : {};
        }
    }
}), _defineProperty(_responseRegionConfig, RESERVATION_RECORDS_BTN, {
    id: elementsIdMap.BookingSuccessBody.RESERVATION_RECORDS_BTN,
    bindingMap: {
        courseType: "{{ courseType }}"
    },
    tap: {
        event: function(e) {
            return "onlineCamp" === e.courseType ? "buttonClick" : "unknown";
        },
        schema: function(e) {
            return "onlineCamp" === e.courseType ? {
                buttonId: "46",
                buttonName: "SGO-点击返回继续预约"
            } : {};
        }
    }
}), _responseRegionConfig), responseRegionIdMap.BookingOnlineTip = {
    PREV_PIC_BTN: PREV_PIC_BTN
}, responseRegionConfigMap.BookingOnlineTip = _defineProperty({}, PREV_PIC_BTN, {
    id: elementsIdMap.BookingOnlineTip.PREV_PIC_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "43",
            buttonName: "SGO-点击二维码图片"
        }
    }
}), responseRegionIdMap.BookingSuccessRowSubscribe = {
    RECEIVE_MSG_BTN: RECEIVE_MSG_BTN
}, responseRegionConfigMap.BookingSuccessRowSubscribe = _defineProperty({}, RECEIVE_MSG_BTN, {
    id: elementsIdMap.BookingSuccessRowSubscribe.RECEIVE_MSG_BTN,
    bindingMap: {
        courseType: "{{ courseType }}"
    },
    tap: {
        event: function(e) {
            return "onlineCamp" === e.courseType ? "buttonClick" : "unknown";
        },
        schema: function(e) {
            return "onlineCamp" === e.courseType ? {
                buttonId: "44",
                buttonName: "SGO-点击接收"
            } : {};
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};