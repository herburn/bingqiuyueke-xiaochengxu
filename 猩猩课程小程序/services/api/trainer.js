Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _TRAINER_INDEX_GET$ON, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _ramda = require("./../../vendor.js")(320), _utils = require("./utils.js"), _common = require("./common.js");

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
        var i = e[o](s), u = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(u) : Promise.resolve(u).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, s = arguments;
        return new Promise(function(r, t) {
            var n = i.apply(e, s);
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

var _default = (_defineProperty(_TRAINER_INDEX_GET$ON = {}, _actionTypes.TRAINER_INDEX_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s, i, u, c, p, _, l, d, m, f, h, T, R, N, E, v, I, x;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.trainerUserId, n = r.sk, a = r.isOnline, o = "".concat(_common.specialBase, "/wxTrainerIndex/getTrainer2"), 
                e.prev = 2, e.next = 5, _common.http.post({
                    url: o,
                    data: {
                        trainerUserId: t,
                        sk: n,
                        isOnline: a
                    }
                });

              case 5:
                return s = e.sent, i = s.main, u = i.currentTime, c = i.rankDate, p = i.isSubscribe, 
                _ = i.campScheduleCount, l = i.checkinClassCount, d = i.checkinClassMins, m = i.thisMonthRankNo, 
                f = i.lastMonthRankNo, h = i.scheduleList, T = i.priceMap, R = i.superCampScheduleList, 
                N = i.personalList, E = (0, _utils.getDateBoxSchedules)(h), v = E.dateBoxSchedulesMap, 
                I = (0, _ramda.map)((0, _ramda.prop)("date"))(h), x = (0, _ramda.map)((0, _ramda.pipe)((0, 
                _ramda.prop)("boxClassSchedulesList"), (0, _ramda.map)((0, _ramda.prop)("boxId"))))(h), 
                e.abrupt("return", {
                    profile: {
                        rankDate: c,
                        checkinClassCount: l,
                        checkinClassMins: d,
                        thisMonthRankNo: m,
                        lastMonthRankNo: f,
                        isSubscribe: p,
                        hasBeenOpenCamp: 0 < _
                    },
                    superCampScheduleList: R,
                    classPriceMap: T,
                    dateBoxSchedulesMap: v,
                    dates: I,
                    boxIdsList: x,
                    currentTime: u,
                    personals: N
                });

              case 25:
                throw e.prev = 25, e.t0 = e.catch(2), console.log("TRAINER_INDEX_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 29:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 25 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_TRAINER_INDEX_GET$ON, _actionTypes.ONLINE_CAMP_TRAINER_LIST_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxOnlineCamp/getTrainerList"), e.prev = 1, 
            e.next = 4, _common.http.get({
                url: r
            });

          case 4:
            return t = e.sent, n = t.main, e.abrupt("return", n);

          case 9:
            throw e.prev = 9, e.t0 = e.catch(1), console.log("ONLINE_CAMP_TRAINER_LIST_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 13:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 9 ] ]);
}))), _TRAINER_INDEX_GET$ON);

exports.default = _default;