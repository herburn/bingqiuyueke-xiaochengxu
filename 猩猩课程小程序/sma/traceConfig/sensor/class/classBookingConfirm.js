var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, PEOPLE_NUM_CLASS_BOOKING_CONFIRM = "peopleNumClassBookingConfirm", SUBMIT_CLASS_BOOKING_CONFIRM = "submitClassBookingConfirm";

responseRegionIdMap.ClassBookingConfirm = {
    PEOPLE_NUM_CLASS_BOOKING_CONFIRM: PEOPLE_NUM_CLASS_BOOKING_CONFIRM,
    SUBMIT_CLASS_BOOKING_CONFIRM: SUBMIT_CLASS_BOOKING_CONFIRM
}, responseRegionConfigMap.ClassBookingConfirm = (_defineProperty(_responseRegionConfig = {}, PEOPLE_NUM_CLASS_BOOKING_CONFIRM, {
    id: elementsIdMap.ClassBookingConfirm.PEOPLE_NUM,
    confirmNum: {
        event: "classConfirmOrder",
        schema: {
            bookingCount: "comData.item.value"
        }
    }
}), _defineProperty(_responseRegionConfig, SUBMIT_CLASS_BOOKING_CONFIRM, {
    submit: {
        event: "classConfirmOrder",
        schema: "data"
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};