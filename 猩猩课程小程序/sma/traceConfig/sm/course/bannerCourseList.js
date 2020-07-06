function _defineProperty(e, I, _) {
    return I in e ? Object.defineProperty(e, I, {
        value: _,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[I] = _, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, OPEN_FILTER_CLASS_LIST_WITH_FILTER = "openFilterClassListWithFilter", ITEM_FILTER_CLASS_LIST_WITH_FILTER = "itemFilterClassListWithFilter", CONFIRM_FILTER_CLASS_LIST_WITH_FILTER = "confirmFilterClassListWithFilter";

responseRegionIdMap.BannerCourseList = {
    OPEN_FILTER_CLASS_LIST_WITH_FILTER: OPEN_FILTER_CLASS_LIST_WITH_FILTER,
    ITEM_FILTER_CLASS_LIST_WITH_FILTER: ITEM_FILTER_CLASS_LIST_WITH_FILTER,
    CONFIRM_FILTER_CLASS_LIST_WITH_FILTER: CONFIRM_FILTER_CLASS_LIST_WITH_FILTER
}, responseRegionConfigMap.BannerCourseList = _defineProperty({}, OPEN_FILTER_CLASS_LIST_WITH_FILTER, {
    id: elementsIdMap.BannerCourseList.CLASS_LIST,
    responseRegionIdMap: {
        openFilter: OPEN_FILTER_CLASS_LIST_WITH_FILTER,
        itemClickFilter: ITEM_FILTER_CLASS_LIST_WITH_FILTER,
        confirmFilter: CONFIRM_FILTER_CLASS_LIST_WITH_FILTER
    },
    openFilter: void 0,
    itemClickFilter: "comData.value",
    confirmFilter: "comData.filter"
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};