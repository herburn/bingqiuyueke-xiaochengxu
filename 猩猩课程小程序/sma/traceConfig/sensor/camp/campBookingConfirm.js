function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, PAGE_ORDER_TTN = "pageOrderTtn";

responseRegionIdMap.CampBookingConfirm = {
    PAGE_ORDER_TTN: PAGE_ORDER_TTN
}, responseRegionConfigMap.CampBookingConfirm = _defineProperty({}, PAGE_ORDER_TTN, {
    id: elementsIdMap.CampBookingConfirm.PAGE_ORDER_TTN,
    bindingMap: {
        confirmInfo: "{{ confirmInfo }}",
        ticketId: "{{ ticketId }}",
        leftPay: "{{ leftToPay }}",
        scheduleId: "{{ scheduleId }}"
    },
    tapPageBtn: {
        event: function(e) {
            return e.comData.item.label.indexOf("猩章") < 0 ? "campConfirmOrder" : "unknown";
        },
        schema: function(e) {
            var n = e.ticketId, o = e.confirmInfo, i = e.leftPay;
            return {
                scheduleId: e.scheduleId,
                campType: "线上",
                orderAmount: o.price.price,
                dealRealPrice: i,
                ticketId: "" === n.length ? void 0 : n
            };
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};