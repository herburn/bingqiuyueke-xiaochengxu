function _defineProperty(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, CLASS_LIST_WITH_FILTER = "classListWithFilter";

responseRegionConfigMap.BannerCourseList = _defineProperty({}, CLASS_LIST_WITH_FILTER, {
    id: elementsIdMap.BannerCourseList.CLASS_LIST,
    openFilter: {
        event: "buttonClick",
        schema: {
            buttonId: "4",
            buttonName: "筛选"
        }
    },
    confirmFilter: {
        event: "filter",
        schema: {
            filterContent: "comData.filter"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};