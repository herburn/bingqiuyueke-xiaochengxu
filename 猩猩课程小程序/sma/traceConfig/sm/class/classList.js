var _responseRegionConfig2;

function _defineProperty(e, s, n) {
    return s in e ? Object.defineProperty(e, s, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[s] = n, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), promotion = require("./../promotion/index.js"), CLASS_BEFORE_OPEN_PROMOTION = promotion.CLASS_BEFORE_OPEN_PROMOTION, CLASS_ADS_PROMOTION = promotion.CLASS_ADS_PROMOTION, params = promotion.params, responseRegionIdMap = {}, responseRegionConfigMap = {}, WEEK_WEEK_NAVBAR = "weekWeekNavbar";

responseRegionIdMap.ClassList = {
    WEEK_WEEK_NAVBAR: WEEK_WEEK_NAVBAR
}, responseRegionConfigMap.ClassList = _defineProperty({}, WEEK_WEEK_NAVBAR, {
    id: elementsIdMap.ClassList.WEEK_NAVBAR,
    change: "comData.date"
}), responseRegionIdMap.ClassListBox = {
    CLASS_BEFORE_OPEN_PROMOTION: CLASS_BEFORE_OPEN_PROMOTION,
    CLASS_ADS_PROMOTION: CLASS_ADS_PROMOTION
}, responseRegionConfigMap.ClassListBox = (_defineProperty(_responseRegionConfig2 = {}, CLASS_BEFORE_OPEN_PROMOTION, {
    id: elementsIdMap.ClassListBox.CLASS_BEFORE_OPEN,
    clickBehavior: params,
    onDebounceView: params
}), _defineProperty(_responseRegionConfig2, CLASS_ADS_PROMOTION, {
    id: elementsIdMap.ClassListBox.CLASS_ADS,
    clickBehavior: params,
    onDebounceView: params
}), _responseRegionConfig2);

var NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE = "noviceBannerClassListBannerNovice";

responseRegionIdMap.ClassListBannerNovice = {
    NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE: NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE
}, responseRegionConfigMap.ClassListBannerNovice = _defineProperty({}, NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE, {
    id: elementsIdMap.ClassListBannerNovice.NOVICE_BANNER,
    tap: void 0
});

var BTN_CLASS_LIST_CLASS_ENTITY = "btnClassListClassEntity";

responseRegionIdMap.ClassListClassEntity = {
    BTN_CLASS_LIST_CLASS_ENTITY: BTN_CLASS_LIST_CLASS_ENTITY
}, responseRegionConfigMap.ClassListClassEntity = _defineProperty({}, BTN_CLASS_LIST_CLASS_ENTITY, {
    id: elementsIdMap.ClassListClassEntity.SCHEDULE_BTN,
    bindingMap: {
        collectData: "{{ schedule.collectData }}"
    },
    tap: "collectData"
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};