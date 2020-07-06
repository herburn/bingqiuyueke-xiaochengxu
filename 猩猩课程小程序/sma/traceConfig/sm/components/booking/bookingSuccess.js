function _defineProperty(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), promotion = require("./../../promotion/index.js"), COURSE_BOOKING_SUCCESS_PROMOTION = promotion.COURSE_BOOKING_SUCCESS_PROMOTION, params = promotion.params, responseRegionIdMap = {}, responseRegionConfigMap = {};

responseRegionIdMap.BookingSuccessPromotion = {
    COURSE_BOOKING_SUCCESS_PROMOTION: COURSE_BOOKING_SUCCESS_PROMOTION
}, responseRegionConfigMap.BookingSuccessPromotion = _defineProperty({}, COURSE_BOOKING_SUCCESS_PROMOTION, {
    id: elementsIdMap.BookingSuccessPromotion.COURSE_BOOKING_SUCCESS,
    clickBehavior: params,
    onDebounceView: params
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};