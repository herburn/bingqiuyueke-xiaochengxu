Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ONLINE_CAMP_HOME_DAT, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function asyncGeneratorStep(e, t, r, n, a, o, c) {
    try {
        var u = e[o](c), _ = u.value;
    } catch (e) {
        return void r(e);
    }
    u.done ? t(_) : Promise.resolve(_).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(t, r) {
            var n = u.apply(e, c);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = (_defineProperty(_ONLINE_CAMP_HOME_DAT = {}, _actionTypes.ONLINE_CAMP_HOME_DATA_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var t;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = "".concat(_common.specialBase, "/wxOnlineCamp/getCampAndClassList"), 
            e.prev = 1, e.next = 4, _common.http.get({
                url: t
            });

          case 4:
            return e.abrupt("return", e.sent);

          case 7:
            throw e.prev = 7, e.t0 = e.catch(1), console.log("ONLINE_CAMP_HOME_DATA_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 11:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 7 ] ]);
}))), _defineProperty(_ONLINE_CAMP_HOME_DAT, _actionTypes.ONLINE_COURSE_LIST_GET, function() {
    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = "".concat(_common.specialBase, "/wxOnlineCamp/getCampList"), e.prev = 1, 
                e.next = 4, _common.http.get({
                    url: r,
                    data: t
                });

              case 4:
                return n = e.sent, a = n.main, e.abrupt("return", a);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(1), console.log("ONLINE_COURSE_LIST_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}()), _defineProperty(_ONLINE_CAMP_HOME_DAT, _actionTypes.ONLINE_CAMP_LIST_GET, function() {
    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = "".concat(_common.specialBase, "/wxOnlineCamp/getCampScheduleList"), 
                e.prev = 1, e.next = 4, _common.http.get({
                    url: r,
                    data: t
                });

              case 4:
                return n = e.sent, a = n.main, e.abrupt("return", a);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(1), console.log("ONLINE_CAMP_LIST_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}()), _defineProperty(_ONLINE_CAMP_HOME_DAT, _actionTypes.ONLINE_CAMP_DETAIL_GET, function() {
    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.sk, n = t.campId, a = "".concat(_common.specialBase, "/wxOnlineCamp/getCampScheduleDetail"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: a,
                    data: {
                        sk: r,
                        campId: n
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("ONLINE_CAMP_DETAIL_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ] ]);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}()), _defineProperty(_ONLINE_CAMP_HOME_DAT, _actionTypes.ONLINE_CAMP_DETAIL_SCHEDULE_GET, function() {
    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.sk, n = t.campId, a = "".concat(_common.specialBase, "/wxOnlineCamp/bookingOnDetailPage"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: a,
                    data: {
                        sk: r,
                        campId: n
                    }
                });

              case 5:
                return e.abrupt("return", e.sent);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(2), console.log("ONLINE_CAMP_DETAIL_SCHEDULE_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 8 ] ]);
    }));
    return function(e) {
        return t.apply(this, arguments);
    };
}()), _ONLINE_CAMP_HOME_DAT);

exports.default = _default;