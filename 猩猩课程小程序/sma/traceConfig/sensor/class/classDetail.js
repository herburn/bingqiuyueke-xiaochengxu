var _responseRegionConfig;

function _defineProperty(e, n, i) {
    return n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = i, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, PAGE_CLASS_DETAIL = "pageClassDetail", PAGE_BTN_CLASS_DETAIL = "pageBtnClassDetail";

responseRegionIdMap.ClassDetail = {
    PAGE_CLASS_DETAIL: PAGE_CLASS_DETAIL,
    PAGE_BTN_CLASS_DETAIL: PAGE_BTN_CLASS_DETAIL
}, responseRegionConfigMap.ClassDetail = (_defineProperty(_responseRegionConfig = {}, PAGE_CLASS_DETAIL, {
    view: {
        event: "viewClassDetail",
        schema: function(e) {
            var n = e.scheduleId, i = e.status;
            return {
                scheduleId: n,
                classState: e.isWaiting ? "等候" : [ "预约", "紧张", "满员", "结束", "已开始" ][i]
            };
        }
    }
}), _defineProperty(_responseRegionConfig, PAGE_BTN_CLASS_DETAIL, {
    id: elementsIdMap.ClassDetail.PAGE_BTN,
    bindingMap: {
        scheduleId: "{{ scheduleId }}",
        profile: "{{ detail.profile }}"
    },
    tapPageBtn: {
        event: function(e) {
            var n = e.comData;
            return "赠课给好友" === n.item.label ? "classPresent" : "立即约课" === n.item.label ? "reservation" : -1 !== n.item.label.indexOf("等候") ? "classWait" : "unknown";
        },
        schema: function(e) {
            var n = e.scheduleId, i = e.profile, s = e.comData;
            return "赠课给好友" === s.item.label ? {
                scheduleId: n,
                superCardPrice: i.superCardPrice
            } : "立即约课" === s.item.label ? {
                scheduleId: n,
                classState: "预约",
                superCardPrice: i.superCardPrice
            } : -1 !== s.item.label.indexOf("等候") ? {
                scheduleId: n,
                superCardPrice: i.superCardPrice,
                waitingCount: i.waitingCount
            } : {};
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};