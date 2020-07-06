var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var responseRegionIdMap = {}, responseRegionConfigMap = {}, config = {
    tap: {
        event: "buttonClick",
        schema: [ "buttonId", "buttonName" ]
    }
}, BOX_TAB_BAR = "boxTabBar", COURSE_TAB_BAR = "courseTabBar", MY_BOOKING_TAB_BAR = "myBookingTabBar", MY_TAB_BAR = "myTabBar";

responseRegionIdMap.TabBar = {
    BOX_TAB_BAR: BOX_TAB_BAR,
    COURSE_TAB_BAR: COURSE_TAB_BAR,
    MY_BOOKING_TAB_BAR: MY_BOOKING_TAB_BAR,
    MY_TAB_BAR: MY_TAB_BAR
}, responseRegionConfigMap.TabBar = (_defineProperty(_responseRegionConfig = {}, BOX_TAB_BAR, config), 
_defineProperty(_responseRegionConfig, COURSE_TAB_BAR, config), _defineProperty(_responseRegionConfig, MY_BOOKING_TAB_BAR, config), 
_defineProperty(_responseRegionConfig, MY_TAB_BAR, config), _responseRegionConfig), 
module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};