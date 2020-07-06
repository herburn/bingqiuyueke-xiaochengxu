Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../../../types/index.js"), _detail = _interopRequireDefault(require("./detail/index.js")), _confirm = _interopRequireDefault(require("./confirm/index.js")), _success = _interopRequireDefault(require("./success/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var booking = {
    namespace: [ "biz", "class", "booking" ],
    actions: {
        payWXByClass: [ _actionTypes.CLASS_BOOKING_CONFIRM_WX_PAY_POST, function(e) {
            return {
                scheduleId: e.scheduleId,
                sk: e.sk,
                needAmount: e.needAmount,
                bookingCount: e.bookingCount,
                ticketId: e.ticketId,
                privilegeNo: e.privilegeNo
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ],
        payBalanceByClass: [ _actionTypes.CLASS_BOOKING_CONFIRM_BALANCE_PAY_POST, function(e) {
            return {
                scheduleId: e.scheduleId,
                sk: e.sk,
                balanceUsed: e.balanceUsed,
                bookingCount: e.bookingCount,
                ticketId: e.ticketId,
                privilegeNo: e.privilegeNo
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ]
    }
}, _default = {
    booking: booking,
    detail: _detail.default,
    confirm: _confirm.default,
    success: _success.default
};

exports.default = _default;