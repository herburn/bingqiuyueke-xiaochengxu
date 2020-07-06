Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _GIVE_CLASS_BOOKING_D, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js"), _ramda = require("./../../vendor.js")(320), _extraR = require("./../../utils/extraR.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function asyncGeneratorStep(e, r, t, n, o, a, u) {
    try {
        var c = e[a](u), s = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(s) : Promise.resolve(s).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, u);
            function o(e) {
                asyncGeneratorStep(n, r, t, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, r, t, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var _default = (_defineProperty(_GIVE_CLASS_BOOKING_D = {}, _actionTypes.GIVE_CLASS_BOOKING_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/wxClass/getClassBookingDetail"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return o = e.sent, a = o.main, u = (0, _ramda.pick)([ "booking", "userorder", "expireRefundTime", "waitingCount", "waitingOrder", "bookingOrderNumber", "refundAmount", "notes", "isFirstTimeBooking", "customerServiceScheduleId", "schedulePhoto", "giftInfo" ]), 
                c = (0, _extraR.renameKeys)({
                    userorder: "order",
                    bookingOrderNumber: "bookingNumbers",
                    customerServiceScheduleId: "chatSessionId"
                }), e.abrupt("return", (0, _ramda.pipe)(u, c)(a));

              case 12:
                throw e.prev = 12, e.t0 = e.catch(2), console.log("GIVE_CLASS_BOOKING_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 16:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 12 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/wxClass/getClassBookingDetail"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return o = e.sent, a = o.main, u = a.booking, c = (0, _ramda.pick)([ "userorder", "booking", "notes", "giftInfo", "refundAmount" ]), 
                s = (0, _extraR.renameKeys)({
                    userorder: "order"
                }), e.abrupt("return", _objectSpread({}, (0, _ramda.pipe)(c, s)(a), {
                    scheduleId: u.scheduleId
                }));

              case 13:
                throw e.prev = 13, e.t0 = e.catch(2), console.log("GIVE_CLASS_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 17:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 13 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.MY_GIVEN_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.month, n = void 0 === t ? "" : t, o = "".concat(_common.generalBase, "/wxOrder/mySentGiftList"), 
                e.prev = 2, a = {
                    month: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return u = e.sent, e.abrupt("return", u);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("MY_GIVEN_LIST_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 10 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_RECEIVE_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/wxClass/getClassGiftBookingInfo"), e.prev = 1, 
                e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("GIVE_CLASS_RECEIVE_INFO_GET err", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 11:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 7 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_CONFIRM_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/wxClass/getClassGiftBookingConfirmInfo"), 
                e.prev = 1, e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, o = n.main, e.abrupt("return", o);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(1), console.log("GIVE_CLASS_CONFIRM_INFO_GET err", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_BALANCE_PAY_PUT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.balanceUsed, o = r.ticketId, a = r.sk, u = "".concat(_common.generalBase, "/pay/submitClassBooking"), 
                e.prev = 2, c = {
                    orderType: 4,
                    payType: "balance",
                    gift: 1,
                    bookingCount: 1,
                    scheduleId: t,
                    sk: a,
                    balanceUsed: n,
                    ticketId: o
                }, e.next = 6, _common.http.post({
                    url: u,
                    data: c
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("GIVE_CLASS_BALANCE_PAY_PUT error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_REFUND_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/order/applyRefund"), 
                e.prev = 2, e.next = 5, _common.http.post({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("GIVE_CLASS_REFUND_POST error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_GIVE_CLASS_BOOKING_D, _actionTypes.GIVE_CLASS_RECEIVE_PUT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/wxClass/applyClassGiftBooking"), 
                e.prev = 2, e.next = 5, _common.http.post({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("GIVE_CLASS_RECEIVE_PUT error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _GIVE_CLASS_BOOKING_D);

exports.default = _default;