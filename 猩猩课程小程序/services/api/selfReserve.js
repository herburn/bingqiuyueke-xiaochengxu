Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _PERSONAL_RESERVE_ACC, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _ramda = require("./../../vendor.js")(320), _common = require("./common.js");

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
        var s = e[a](c), u = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? r(u) : Promise.resolve(u).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(r, t) {
            var n = s.apply(e, c);
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

var _default = (_defineProperty(_PERSONAL_RESERVE_ACC = {}, _actionTypes.PERSONAL_RESERVE_ACCEPT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.personalClassBookingScheduleId, n = r.sk, o = "".concat(_common.specialBase, "/wxSuperPersonal/acceptBookingTime"), 
                e.prev = 2, a = {
                    personalClassBookingScheduleId: t,
                    sk: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_RESERVE_ACCEPT_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.PERSONAL_RESERVE_REJECT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.personalClassBookingScheduleId, n = r.sk, o = "".concat(_common.specialBase, "/wxSuperPersonal/rejectBookingTime"), 
                e.prev = 2, a = {
                    personalClassBookingScheduleId: t,
                    sk: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_RESERVE_REJECT_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.PERSONAL_RESERVE_CANCEL, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.personalClassBookingScheduleId, n = r.sk, o = "".concat(_common.specialBase, "/wxSuperPersonal/cancelBookingTime"), 
                e.prev = 2, a = {
                    personalClassBookingScheduleId: t,
                    sk: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_RESERVE_REJECT_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.PERSONAL_TRAIN_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/personal/trainHistory"), 
                e.prev = 2, o = {
                    orderId: t
                }, e.next = 6, _common.http.get({
                    url: n,
                    data: o
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_TRAIN_LIST_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.PERSONAL_CANCELED_TRAIN_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/personal/cancelTrainHistory"), 
                e.prev = 2, o = {
                    orderId: t
                }, e.next = 6, _common.http.get({
                    url: n,
                    data: o
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_TRAIN_LIST_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.PERSONAL_RESERVE_VERIFY, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = "".concat(_common.specialBase, "/wxSuperPersonal/verifyBooking"), 
                e.prev = 2, o = {
                    orderId: t
                }, e.next = 6, _common.http.get({
                    url: n,
                    data: o
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("PERSONAL_RESERVE_VERIFY error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.TRAIN_BOOKING_DATE_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, c, s, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = r.startTime, o = "".concat(_common.specialBase, "/personalTrain/booking"), 
                e.prev = 2, a = {
                    orderId: t,
                    startTime: n
                }, e.next = 6, _common.http.post({
                    url: o,
                    data: a
                });

              case 6:
                return c = e.sent, s = c.trainDateList, u = n || s[0].startDate, i = _defineProperty({}, u, (0, 
                _ramda.dissoc)("trainDateList", c)), e.abrupt("return", {
                    trainDateList: s,
                    dateInfo: i
                });

              case 13:
                throw e.prev = 13, e.t0 = e.catch(2), console.log("TRAIN_BOOKING_DATE_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_PERSONAL_RESERVE_ACC, _actionTypes.SUBMIT_TRAIN_BOOKING_DATE_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderId, n = r.startTime, console.log(t, n), o = "".concat(_common.specialBase, "/personalTrain/submitBooking"), 
                e.prev = 3, a = {
                    orderId: t,
                    startTime: n
                }, e.next = 7, _common.http.post({
                    url: o,
                    data: a
                });

              case 7:
                return e.abrupt("return", e.sent);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(3), console.log("SUBMIT_TRAIN_BOOKING_DATE_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _PERSONAL_RESERVE_ACC);

exports.default = _default;