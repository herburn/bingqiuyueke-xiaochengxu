Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../../types/index.js"), _default = {
    namespace: [ "biz", "pay", "callback" ],
    actions: {
        postWXPaySuccessReceipt: [ _actionTypes.PAY_SUCCESS_RECEIPT, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !1
            };
        } ],
        postWXPayFailureReceipt: [ _actionTypes.PAY_FAILURE_RECEIPT, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !1
            };
        } ]
    }
};

exports.default = _default;