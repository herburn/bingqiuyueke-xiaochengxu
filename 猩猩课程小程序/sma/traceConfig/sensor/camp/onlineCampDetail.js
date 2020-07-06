var _responseRegionConfig;

function _defineProperty(e, n, a) {
    return n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = a, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, PAGE_ONLINE_CAMP_DETAIL = "pageOnlineCampDetail", PAGE_BTN_ONLINE_CAMP_DETAIL = "pageBtnOnlineCampDetail";

responseRegionIdMap.OnlineCampDetail = {
    PAGE_ONLINE_CAMP_DETAIL: PAGE_ONLINE_CAMP_DETAIL,
    PAGE_BTN_ONLINE_CAMP_DETAIL: PAGE_BTN_ONLINE_CAMP_DETAIL
}, responseRegionConfigMap.OnlineCampDetail = (_defineProperty(_responseRegionConfig = {}, PAGE_ONLINE_CAMP_DETAIL, {
    view: {
        event: "viewCampDetail",
        schema: function(e) {
            return {
                campId: e.campId,
                campType: e.campType
            };
        }
    }
}), _defineProperty(_responseRegionConfig, PAGE_BTN_ONLINE_CAMP_DETAIL, {
    id: elementsIdMap.OnlineCampDetail.PAGE_BTN,
    bindingMap: {
        campId: "{{ campId }}",
        status: "{{ campDetail.scheduleStatus }}"
    },
    tapPageBtn: {
        event: function(e) {
            return "立即报名" === (e.comData.item || {}).label ? "campReservation" : "scheduleSubscribe";
        },
        schema: function(e) {
            var n = e.comData, a = e.campId, i = e.status, p = (n.item || {}).label;
            return "立即报名" === p ? {
                scheduleId: void 0,
                campId: a,
                campType: "线上",
                scheduleState: i
            } : "已开启更新提醒" === p || "已开启提示" === p ? {
                scheduleState: "取消订阅",
                campType: "线上"
            } : "更新时提醒我" === p || "暂无营期，点击开启更新提醒" === p ? {
                scheduleState: "订阅",
                campType: "线上"
            } : {};
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};