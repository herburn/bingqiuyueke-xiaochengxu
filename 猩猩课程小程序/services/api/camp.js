Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _CAMP_LIST_GET$CAMP_D, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../vendor.js")(320)), _normalizr = require("./../../vendor.js")(321), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
}

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

function asyncGeneratorStep(e, r, t, n, a, o, c) {
    try {
        var u = e[o](c), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, c);
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

var merge = R.merge, pipe = R.pipe, values = R.values, flatten = R.flatten, pick = R.pick, baseUrl = "".concat(_common.specialBase, "/wxSuperCamp"), _default = (_defineProperty(_CAMP_LIST_GET$CAMP_D = {}, _actionTypes.CAMP_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, c, u, s, i, p, _, l, m, f, d, y;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(baseUrl, "/getCampSelectList3"), e.prev = 1, e.next = 4, _common.http.get({
                    url: t,
                    data: {
                        city: r
                    }
                });

              case 4:
                return n = e.sent, a = n.main, o = a.campList, c = a.areaTags, u = c.tags, s = c.cityList, 
                i = a.currentCity, p = a.onlineCampList, _ = void 0 === p ? [] : p, l = new _normalizr.schema.Entity("campMap", {}, {
                    idAttribute: function(e) {
                        return "".concat(e.city, "|").concat(e.campId);
                    }
                }), m = new _normalizr.schema.Entity("cityTagMap", {}, {
                    idAttribute: "city",
                    processStrategy: function(e) {
                        return e.tags;
                    }
                }), f = pipe(values, flatten)(u), d = (0, _normalizr.normalize)(f, [ m ]), y = (0, 
                _normalizr.normalize)(o, [ l ]), e.abrupt("return", {
                    currentCity: i,
                    cityTagMap: d.entities.cityTagMap,
                    cities: s,
                    campsSmallMap: y.entities.campMap,
                    campIds: y.result,
                    onlineCampList: _
                });

              case 15:
                throw e.prev = 15, e.t0 = e.catch(1), console.log("CAMP_LIST_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 19:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 15 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.sk, n = r.campId, a = r.scheduleId, o = "".concat(baseUrl, "/getCampScheduleSelectList2"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: o,
                    data: {
                        sk: t,
                        campId: n,
                        scheduleId: a
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CAMP_DETAIL_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_BOOKING_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, c, u, s, i, p, _;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(baseUrl, "/getSuperCampBookingDetail2"), e.prev = 2, 
                e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return a = e.sent, o = a.main, c = o.bookingListShow, u = o.userorder, s = o.superCampSchedule, 
                i = new _normalizr.schema.Entity("orderMap", {}, {
                    idAttribute: "orderId"
                }), p = merge({}, _objectSpread({}, pick([ "checkinList", "customerServiceScheduleId", "refundAmount", "qrcode" ])(o), {}, c, {}, u, {}, s)), 
                _ = (0, _normalizr.normalize)(p, i), e.abrupt("return", {
                    orderMap: _
                });

              case 14:
                throw e.prev = 14, e.t0 = e.catch(2), console.log("CAMP_BOOKING_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 18:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 14 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.BOX_CAMP_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, c, u, s, i, p;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(baseUrl, "/getBoxCampSelectList"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, a = n.main, o = a.boxname, c = a.boxCampList, u = a.allCampList, 
                s = new _normalizr.schema.Entity("campsSmall", {}, {
                    idAttribute: function(e) {
                        return "".concat(e.city, "|").concat(e.campId);
                    }
                }), i = (0, _normalizr.normalize)(c, [ s ]), p = (0, _normalizr.normalize)(u, [ s ]), 
                e.abrupt("return", {
                    boxName: o,
                    boxCamps: i.result,
                    allBoxCamps: p.result,
                    boxCampsSmallMap: i.entities.campsSmall,
                    allCampsSmallMap: p.entities.campsSmall
                });

              case 15:
                throw e.prev = 15, e.t0 = e.catch(1), console.log("BOX_CAMP_LIST_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 19:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 15 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_BOOKING_CONFIRM_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, c, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.scheduleId, n = r.sk, a = "".concat(baseUrl, "/getSuperCampBookingConfirmInfo2"), 
                e.prev = 2, o = {
                    scheduleId: t,
                    sk: n
                }, e.next = 6, _common.http.get({
                    url: a,
                    data: o
                });

              case 6:
                return c = e.sent, u = c.main, e.abrupt("return", u);

              case 11:
                throw e.prev = 11, e.t0 = e.catch(2), console.log("CAMP_BOOKING_CONFIRM_INFO_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_SUBSCRIBE_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(baseUrl, "/subscribeCamp"), e.prev = 1, e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("CAMP_SUBSCRIBE_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_UNSUBSCRIBE_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(baseUrl, "/unsubscribeCamp"), e.prev = 1, e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("CAMP_UNSUBSCRIBE_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_REFUND_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/wxOrder/applyRefund"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: n,
                    data: {
                        orderId: t
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("CAMP_REFUND_INFO_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_APPLY_REFUND_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/order/applyRefund"), e.prev = 1, e.next = 4, 
                _common.http.post({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("CAMP_APPLY_REFUND_POST error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_BOOKING_SUCCESS_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(baseUrl, "/getSuperCampBookingSuccessInfo"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("CAMP_BOOKING_SUCCESS_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_BOOKING_CONFIRM_BALANCE_PAY_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/pay/submitSuperCampBooking"), e.prev = 1, 
                n = _objectSpread({}, r, {
                    orderType: 7,
                    payType: "balance"
                }), e.next = 5, _common.http.post({
                    url: t,
                    data: n
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("CAMP_PAY_PUT error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_CAMP_LIST_GET$CAMP_D, _actionTypes.CAMP_BOOKING_CONFIRM_WX_PAY_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/pay/submitSuperCampBooking"), e.prev = 1, 
                n = _objectSpread({}, r, {
                    orderType: 7,
                    payType: "wxpay"
                }), e.next = 5, _common.http.post({
                    url: t,
                    data: n
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("CAMP_PAY_PUT error", e.t0.rtn, e.t0.msg), 
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
}()), _CAMP_LIST_GET$CAMP_D);

exports.default = _default;