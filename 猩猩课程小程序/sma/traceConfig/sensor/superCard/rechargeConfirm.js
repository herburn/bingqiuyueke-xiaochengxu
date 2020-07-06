var _responseRegionConfig;

function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, OPEN_NOTE_BTN_RECHARGE_CONFIRM = "openNoteBtnRechargeConfirm", RECHARGE_BTN_RECHARGE_CONFIRM = "rechargeBtnRechargeConfirm", RECHARGE_SAVE_MONEY_BTN_RECHARGE_CONFIRM = "rechargeSaveMoneyBtnRechargeConfirm";

responseRegionIdMap.RechargeConfirm = {}, responseRegionConfigMap.RechargeConfirm = (_defineProperty(_responseRegionConfig = {}, OPEN_NOTE_BTN_RECHARGE_CONFIRM, {
    id: elementsIdMap.RechargeConfirm.HEADER,
    openNote: {
        event: "buttonClick",
        schema: {
            buttonId: "1",
            buttonName: "充值须知"
        }
    },
    openSaveMoneyModal: {
        event: "buttonClick",
        schema: {
            buttonId: "2",
            buttonName: "节省金额"
        }
    }
}), _defineProperty(_responseRegionConfig, RECHARGE_BTN_RECHARGE_CONFIRM, {
    id: elementsIdMap.RechargeConfirm.RECHARGE,
    bindingMap: {
        selectedIndex: "{{ selectedIndex }}",
        prices: "{{ confirmInfo.prices }}"
    },
    tapPageBtn: {
        event: "deposit",
        schema: {
            priceId: function(e, n, o) {
                var r = o.selectedIndex;
                return 100 * o.prices[r].price;
            },
            depositPosition: "充值页面"
        }
    }
}), _defineProperty(_responseRegionConfig, RECHARGE_SAVE_MONEY_BTN_RECHARGE_CONFIRM, {
    id: elementsIdMap.RechargeConfirm.RECHARGE_SAVE_MONEY,
    bindingMap: {
        selectedIndex: "{{ selectedIndex }}",
        prices: "{{ confirmInfo.prices }}"
    },
    recharge: {
        event: "deposit",
        schema: {
            priceId: function(e, n, o) {
                var r = o.selectedIndex;
                return 100 * o.prices[r].price;
            },
            depositPosition: "节省金额弹窗"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};