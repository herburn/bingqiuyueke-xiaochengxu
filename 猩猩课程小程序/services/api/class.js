Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _CLASS_SCHEDULE_LIST_, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _ramda = require("./../../vendor.js")(320), _extraR = require("./../../utils/extraR.js"), _common = require("./common.js"), _utils = require("./utils.js");

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

function asyncGeneratorStep(e, r, t, n, a, o, s) {
    try {
        var c = e[o](s), u = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, s = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, s);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = (_defineProperty(_CLASS_SCHEDULE_LIST_ = {}, _actionTypes.CLASS_SCHEDULE_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i, p, _, l, d, m, f, S, y, g, T, h, C, v, L, I, E, B, x, A, N, O, w, b;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return b = function(e) {
                    var r, t, n = e.cityAddonMap, a = e.cityList, o = e.cityMap, s = a, c = {}, u = {}, i = !0, p = !1, _ = void 0;
                    try {
                        for (var l, d = (0, _ramda.values)(o)[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                            var m = l.value, f = !0, S = !1, y = void 0;
                            try {
                                for (var g, T = m[Symbol.iterator](); !(f = (g = T.next()).done); f = !0) {
                                    var h = g.value, C = h.city, v = h.area, L = h.boxList;
                                    b(C, v), r = G(C, v), t = L, u[r] = t;
                                }
                            } catch (e) {
                                S = !0, y = e;
                            } finally {
                                try {
                                    f || null == T.return || T.return();
                                } finally {
                                    if (S) throw y;
                                }
                            }
                        }
                    } catch (e) {
                        p = !0, _ = e;
                    } finally {
                        try {
                            i || null == d.return || d.return();
                        } finally {
                            if (p) throw _;
                        }
                    }
                    for (var I = 0, E = Object.keys(n); I < E.length; I++) {
                        var B = E[I], x = n[B], A = x.recentBookingBoxList, N = void 0 === A ? [] : A, O = x.nearByCityBoxList, w = void 0 === O ? [] : O;
                        0 < w.length && (c[B].splice(1, 0, "附近"), u[G(B, "附近")] = w), 0 < N.length && (c[B].splice(1, 0, "去过"), 
                        u[G(B, "去过")] = N);
                    }
                    return {
                        cities: s,
                        areasMapByCity: c,
                        boxesMapByCityArea: u
                    };
                    function b(e, r) {
                        e in c ? c[e].push(r) : c[e] = [ r ];
                    }
                    function G(e, r) {
                        return "".concat(e, "|").concat(r);
                    }
                }, w = function(e) {
                    var r = (0, _ramda.converge)((0, _ramda.flip)(_ramda.reduce)({}), [ function(e) {
                        var t = e.firstTypeName;
                        return function(e, r) {
                            return r in e ? e[r].push(t) : e[r] = [ t ], e;
                        };
                    }, (0, _ramda.prop)("targetTagNameList") ]);
                    return (0, _ramda.applySpec)({
                        firstTypeNames: (0, _ramda.map)((0, _ramda.prop)("firstTypeName")),
                        classIdsMapByFirstTypeName: (0, _ramda.reduce)(function(e, r) {
                            var t = r.firstTypeName, n = r.classIdList;
                            return e[t] = n, e;
                        }, {}),
                        firstTypesMapByTypeName: (0, _ramda.reduce)(function(e, r) {
                            var t = r.classTagName, n = r.firstTypeName;
                            t in e ? e[t].push(n) : e[t] = [ n ];
                            return e;
                        }, {}),
                        firstTypesMapByTargetName: (0, _ramda.pipe)((0, _ramda.map)(r), _ramda.last)
                    })(e);
                }, t = r.city, n = "".concat(_common.specialBase, "/wxClass/getClassSelectList5"), 
                e.prev = 4, e.next = 7, _common.http.get({
                    url: n,
                    data: {
                        city: t
                    }
                });

              case 7:
                return a = e.sent, o = a.main, s = o.scheduleList, c = o.favBoxIds, u = o.priceMap, 
                i = o.currentTime, p = o.currentCity, _ = o.classTargetTagNameList, l = o.classTagNameList, 
                d = o.categoryFirstTypeList, m = void 0 === d ? [] : d, f = o.boxArea, S = o.hasNewCamp, 
                y = a.classScheduleSubscribeMap, g = (0, _utils.getDateBoxSchedules)(s), T = g.dateBoxSchedulesMap, 
                h = g.dateBoxIdMap, C = (0, _ramda.map)((0, _ramda.prop)("date"))(s), v = w(m), 
                L = v.firstTypeNames, I = v.firstTypesMapByTargetName, E = v.firstTypesMapByTypeName, 
                B = v.classIdsMapByFirstTypeName, x = b(f), A = x.cities, N = x.areasMapByCity, 
                O = x.boxesMapByCityArea, e.abrupt("return", {
                    classPriceMap: u,
                    dateBoxSchedulesMap: T,
                    favBoxIds: c,
                    dates: C,
                    targetNames: _,
                    typeNames: l,
                    firstTypeNames: L,
                    firstTypesMapByTargetName: I,
                    firstTypesMapByTypeName: E,
                    classIdsMapByFirstTypeName: B,
                    cities: A,
                    areasMapByCity: N,
                    boxesMapByCityArea: (0, _ramda.merge)(O, (0, _extraR.mapKeys)((0, _ramda.concat)("".concat(p, "|全城|")), h)),
                    currentTime: i,
                    currentCity: p,
                    hasNewCamp: S,
                    classScheduleSubscribeMap: y
                });

              case 28:
                throw e.prev = 28, e.t0 = e.catch(4), console.log("CLASS_SCHEDULE_LIST_GET error", e.t0.rtn, e.t0.msg, e.t0), 
                e.t0;

              case 32:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 4, 28 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.BOX_CLASS_SCHEDULE_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i, p, _, l;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.boxId, n = r.sk, a = "".concat(_common.specialBase, "/wxClass/getBoxClassList2"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: a,
                    data: {
                        boxId: t,
                        sk: n
                    }
                });

              case 5:
                return o = e.sent, s = o.main, c = s.scheduleList, u = s.priceMap, i = s.currentTime, 
                p = (0, _utils.getDateBoxSchedules)(c), _ = p.dateBoxSchedulesMap, l = (0, _ramda.map)((0, 
                _ramda.prop)("date"))(c), e.abrupt("return", {
                    classPriceMap: u,
                    dateBoxSchedulesMap: _,
                    dates: l,
                    currentTime: i
                });

              case 15:
                throw e.prev = 15, e.t0 = e.catch(2), console.log("BOX_CLASS_SCHEDULE_LIST_GET error", e.t0.rtn, e.t0.msg, e.t0), 
                e.t0;

              case 19:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 15 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.sk, a = "".concat(_common.specialBase, "/wxClass/getScheduleDetail2"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: a,
                    data: {
                        scheduleId: t,
                        sk: n
                    }
                });

              case 5:
                return o = e.sent, s = o.main, c = s.priceMap, u = s.notes, i = s.waitingCount, 
                e.abrupt("return", {
                    priceMap: c,
                    notes: u,
                    waitingCount: i
                });

              case 13:
                throw e.prev = 13, e.t0 = e.catch(2), console.log("CLASS_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_CONFIRM_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.sk, a = "".concat(_common.specialBase, "/wxClass/getClassBookingConfirmInfo2"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: a,
                    data: {
                        scheduleId: t,
                        sk: n
                    }
                });

              case 5:
                return o = e.sent, s = o.main, 1 < (c = s.privilegeList).length && 1 !== (u = (0, 
                _ramda.indexOf)("default")(c)) && (i = c[u], c[u] = c[1], c[1] = i), e.abrupt("return", s);

              case 12:
                throw e.prev = 12, e.t0 = e.catch(2), console.log("CLASS_BOOKING_CONFIRM_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_CONFIRM_WX_PAY_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.sk, a = r.needAmount, o = r.bookingCount, s = r.ticketId, 
                c = r.privilegeNo, u = "".concat(_common.generalBase, "/pay/submitClassBooking"), 
                e.prev = 2, i = {
                    orderType: 4,
                    scheduleId: t,
                    sk: n,
                    needAmount: a,
                    payType: "wxpay",
                    bookingCount: o,
                    ticketId: s,
                    gift: 0,
                    privilegeNo: c
                }, e.next = 6, _common.http.post({
                    url: u,
                    data: i
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("CLASS_BOOKING_CONFIRM_WX_PAY_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_CONFIRM_BALANCE_PAY_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.sk, a = r.balanceUsed, o = r.bookingCount, s = r.ticketId, 
                c = r.privilegeNo, u = "".concat(_common.generalBase, "/pay/submitClassBooking"), 
                e.prev = 2, i = {
                    orderType: 4,
                    scheduleId: t,
                    sk: n,
                    balanceUsed: a,
                    payType: "balance",
                    bookingCount: o,
                    ticketId: s,
                    gift: 0,
                    privilegeNo: c
                }, e.next = 6, _common.http.post({
                    url: u,
                    data: i
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("CLASS_BOOKING_CONFIRM_BALANCE_PAY_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_SUCCESS_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/wxClass/getClassBookingSuccessInfo"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CLASS_BOOKING_SUCCESS_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/wxClass/getClassBookingDetail"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return a = e.sent, o = a.main, s = (0, _ramda.pick)([ "booking", "userorder", "expireRefundTime", "waitingCount", "waitingOrder", "bookingOrderNumber", "refundAmount", "notes", "isFirstTimeBooking", "customerServiceScheduleId", "schedulePhoto" ]), 
                c = (0, _extraR.renameKeys)({
                    userorder: "order",
                    bookingOrderNumber: "bookingNumbers",
                    customerServiceScheduleId: "chatSessionId"
                }), e.abrupt("return", (0, _ramda.pipe)(s, c)(o));

              case 12:
                throw e.prev = 12, e.t0 = e.catch(2), console.log("CLASS_BOOKING_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_REFUND_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/wxOrder/applyRefund"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CLASS_BOOKING_REFUND_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_BOOKING_REFUND_POST, function() {
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
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CLASS_BOOKING_REFUND_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_EVALUATION_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.generalBase, "/scheduleComment/getScheduleCommentDetail"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CLASS_BOOKING_REFUND_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CLASS_SCHEDULE_LIST_, _actionTypes.CLASS_EVALUATION_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/scheduleComment/submitScheduleComment"), 
                e.prev = 1, console.log("data:", r), e.next = 5, _common.http.post({
                    url: t,
                    data: r
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("CLASS_EVALUATION_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _CLASS_SCHEDULE_LIST_);

exports.default = _default;