function _defineProperty(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, GET_NOW_BTN_MY_TICKET = "getNowBtnMyTicket", NOW_USE_BTN_MY_TICKET = "nowUseBtnMyTicket";

responseRegionIdMap.MyTicket = {}, responseRegionConfigMap.MyTicket = _defineProperty({}, GET_NOW_BTN_MY_TICKET, {
    id: elementsIdMap.MyTicket.GET_NOW_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "2",
            buttonName: "点击领取"
        }
    }
}), responseRegionIdMap.TicketCard = {}, responseRegionConfigMap.TicketCard = _defineProperty({}, NOW_USE_BTN_MY_TICKET, {
    id: elementsIdMap.TicketCard.NOW_USE_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "1",
            buttonName: "立即使用"
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};