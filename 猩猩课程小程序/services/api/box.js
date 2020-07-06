Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _BOX_LIST_GET$BOX_ADD, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function asyncGeneratorStep(e, r, t, n, o, a, c) {
    try {
        var u = e[a](c), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, o);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, c);
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

var _default = (_defineProperty(_BOX_LIST_GET$BOX_ADD = {}, _actionTypes.BOX_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, c, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/wxBox/getBoxList3"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: {
                        city: r
                    }
                });

              case 4:
                return n = e.sent, o = n.main, a = o.boxList, c = o.areaTags, u = o.currentCity, 
                e.abrupt("return", {
                    storeList: a,
                    storesAreaInfo: c,
                    currentCity: u
                });

              case 10:
                throw e.prev = 10, e.t0 = e.catch(1), console.log("BOX_LIST_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 10 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_ADDFAV_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.boxId, n = r.sk, o = "".concat(_common.specialBase, "/box/addFav"), 
                e.prev = 2, a = {
                    boxId: t,
                    sk: n
                }, e.next = 6, _common.http.post({
                    url: o,
                    data: a
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("BOX_ADDFAV_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_DELFAV_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.boxId, n = r.sk, console.log("BOX_DELFAV_POST:"), o = "".concat(_common.specialBase, "/box/delFav"), 
                e.prev = 3, a = {
                    boxId: t,
                    sk: n
                }, e.next = 7, _common.http.post({
                    url: o,
                    data: a
                });

              case 7:
                return e.abrupt("return", e.sent);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(3), console.log("BOX_DELFAV_POST error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 10 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_BOOKING_TIME_CHECK, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/box/bookingNowCheck2"), e.prev = 1, 
                e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("BOX_BOOKING_TIME_CHECK error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.boxId, n = r.sk, o = "".concat(_common.specialBase, "/wxBox/getBoxDetail"), 
                e.prev = 2, a = {
                    boxId: t,
                    sk: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return e.abrupt("return", {});

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("BOX_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_BOOKING_CONFIRM_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, c, u, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.boxId, n = r.startTime, o = r.sk, a = "".concat(_common.specialBase, "/wxBox/getBoxBookingConfirmInfo2"), 
                e.prev = 2, c = {
                    boxId: t,
                    startTime: n,
                    sk: o
                }, e.next = 6, _common.http.post({
                    url: a,
                    data: c
                });

              case 6:
                return u = e.sent, s = u.main, e.abrupt("return", {
                    main: s
                });

              case 11:
                throw e.prev = 11, e.t0 = e.catch(2), console.log("BOX_BOOKING_CONFIRM_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 11 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_PAY_INFO_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/pay/submitBoxBooking"), e.prev = 1, 
                e.next = 4, _common.http.post({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("BOX_PAY_INFO_POST error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_BOOKING_SUCCESS_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/wxBox/getBoxBookingSuccessInfo"), e.prev = 1, 
                e.next = 4, _common.http.post({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("BOX_BOOKING_SUCCESS_INFO_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOOKING_DETAIL_BOX_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/wxBox/getBoxBookingDetail"), 
                e.prev = 2, o = {
                    orderId: t
                }, e.next = 6, _common.http.get({
                    url: n,
                    data: o
                });

              case 6:
                return a = e.sent, c = a.main, e.abrupt("return", {
                    main: c
                });

              case 11:
                throw e.prev = 11, e.t0 = e.catch(2), console.log("BOOKING_DETAIL_BOX_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 11 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.BOX_REFUND_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/wxOrder/applyRefund"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("BOX_REFUND_INFO_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BOX_LIST_GET$BOX_ADD, _actionTypes.APPLY_BOX_REFUND, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/order/applyRefund"), e.prev = 1, e.next = 4, 
                _common.http.post({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("APPLY_BOX_REFUND error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 8 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _BOX_LIST_GET$BOX_ADD);

exports.default = _default;