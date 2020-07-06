var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, CAMP = "camp", WEEK_ITEM = "weekItem";

responseRegionIdMap.NavbarWeek = {
    CAMP: CAMP,
    WEEK_ITEM: WEEK_ITEM
}, responseRegionConfigMap.NavbarWeek = (_defineProperty(_responseRegionConfig = {}, WEEK_ITEM, {
    id: elementsIdMap.NavbarWeek.WEEK_ITEM,
    bindingMap: {
        pageName: "{{ pageName }}"
    },
    tap: {
        event: function(e) {
            return "trainerIndex" === e.pageName ? "buttonClick" : "";
        },
        schema: function(e) {
            return "trainerIndex" === e.pageName ? {
                buttonId: "2",
                buttonName: "SGO-日期"
            } : {};
        }
    }
}), _defineProperty(_responseRegionConfig, CAMP, {
    id: elementsIdMap.NavbarWeek.CAMP,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "3",
            buttonName: "SGO-CAMP按钮"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};