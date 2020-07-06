var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, NOW_BOOKING_BTN = "nowBookingBtn", TRAINER_FILTER = "trainerFilter", TOGGLE_CAN_BOOKING = "toggleCanBooking";

responseRegionIdMap.SelectCampModal = {
    NOW_BOOKING_BTN: NOW_BOOKING_BTN,
    TRAINER_FILTER: TRAINER_FILTER,
    TOGGLE_CAN_BOOKING: TOGGLE_CAN_BOOKING
}, responseRegionConfigMap.SelectCampModal = (_defineProperty(_responseRegionConfig = {}, NOW_BOOKING_BTN, {
    id: elementsIdMap.SelectCampModal.NOW_BOOKING_BTN,
    bindingMap: {
        selectSchedule: "{{ selectScheduleInfo }}"
    },
    tap: {
        event: "campReservation",
        schema: function(e) {
            var n = e.selectSchedule, o = n.campId, t = n.scheduleStatus;
            return {
                scheduleId: n.scheduleId,
                campId: o,
                campType: "线上",
                scheduleState: t
            };
        }
    }
}), _defineProperty(_responseRegionConfig, TRAINER_FILTER, {
    id: elementsIdMap.SelectCampModal.TRAINER_FILTER,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "36",
            buttonName: "SGO-教练筛选"
        }
    }
}), _defineProperty(_responseRegionConfig, TOGGLE_CAN_BOOKING, {
    id: elementsIdMap.SelectCampModal.TOGGLE_CAN_BOOKING,
    change: {
        event: "buttonClick",
        schema: {
            buttonId: "37",
            buttonName: "SGO-点击只显示可报名"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};