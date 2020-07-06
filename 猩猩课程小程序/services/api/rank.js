Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _SUPER_RANK_GET$SUPER, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js"), _md = _interopRequireDefault(require("./../../vendor.js")(327)), R = _interopRequireWildcard(require("./../../vendor.js")(320)), _moment = _interopRequireDefault(require("./../../vendor.js")(315));

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

function asyncGeneratorStep(e, r, t, n, o, a, u) {
    try {
        var p = e[a](u), i = p.value;
    } catch (e) {
        return void t(e);
    }
    p.done ? r(i) : Promise.resolve(i).then(n, o);
}

function _asyncToGenerator(p) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = p.apply(e, u);
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

var pipe = R.pipe, map = R.map, isNil = R.isNil, complement = R.complement, filter = R.filter, indexBy = R.indexBy, prop = R.prop, applySpec = R.applySpec, isNotNil = complement(isNil), formatNumber = function(e) {
    var r = Number(e);
    return Number.isNaN(r) ? e : r.toLocaleString("en-US");
}, _default = (_defineProperty(_SUPER_RANK_GET$SUPER = {}, _actionTypes.SUPER_RANK_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n, o, a, u, p, i, c, s, l, _, f, m, R, d, y;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.generalBase, "/waSuperRank/getMySuperRank"), e.prev = 1, 
            e.next = 4, _common.http.get({
                url: r
            });

          case 4:
            return t = e.sent, n = t.totalRank, o = t.monthRank, a = t.yearRank, u = t.myRank, 
            p = u.totalRank, i = u.yearRank, c = u.monthRank, s = u.yearWorkoutMins, l = u.monthWorkoutMins, 
            _ = u.totalWorkoutMins, f = u.balance, m = u.upRank, u.formatedUpRank = formatNumber(m), 
            R = [ _objectSpread({
                type: "monthRank",
                workoutMins: l,
                ranking: formatNumber(c)
            }, o), _objectSpread({
                type: "yearRank",
                workoutMins: s,
                ranking: formatNumber(i)
            }, a), _objectSpread({
                type: "totalRank",
                workoutMins: _,
                ranking: formatNumber(p)
            }, n) ], d = function(e) {
                return 0 < f ? filter(isNotNil)([ e.prevRank ? _objectSpread({}, e.prevRank, {
                    label: "前一名"
                }) : void 0, _objectSpread({}, e.nextRank, {
                    label: "后一名"
                }) ]) : [ {
                    face: "",
                    workoutMins: "--",
                    label: "前一名"
                }, {
                    face: "",
                    workoutMins: "--",
                    label: "后一名"
                } ];
            }, y = pipe(map(applySpec({
                type: prop("type"),
                workoutMins: prop("workoutMins"),
                ranking: prop("ranking"),
                top3: prop("top3"),
                list: d
            })), indexBy(prop("type")))(R), console.log("result", y), e.abrupt("return", _objectSpread({}, y, {
                myRank: u
            }));

          case 18:
            throw e.prev = 18, e.t0 = e.catch(1), console.error("SUPER_RANK_GET error", e.t0, e.t0.rtn, e.t0.msg), 
            e.t0;

          case 22:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 18 ] ]);
}))), _defineProperty(_SUPER_RANK_GET$SUPER, _actionTypes.SUPER_RANK_POSTER_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n, o, a, u, p, i = arguments;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t = (r = 0 < i.length && void 0 !== i[0] ? i[0] : {}).type, n = r.data, o = "".concat(_common.generalBase, "/waSuperRank/getUserPost"), 
            e.prev = 2, a = "", 2 === t && (a = (0, _md.default)("U".concat(n, "P"))), e.next = 7, 
            _common.http.get({
                url: o,
                data: {
                    type: t,
                    data: n,
                    md5: a
                }
            });

          case 7:
            return u = e.sent, p = u.url, e.abrupt("return", {
                imageUrl: p,
                type: t
            });

          case 12:
            throw e.prev = 12, e.t0 = e.catch(2), console.log("SUPER_RANK_POSTER_GET error", e.t0, e.t0.rtn, e.t0.msg), 
            e.t0;

          case 16:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 2, 12 ] ]);
}))), _defineProperty(_SUPER_RANK_GET$SUPER, _actionTypes.GROUP_RANK_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.generalBase, "/waSuperRank/getGroupRank"), e.prev = 1, 
                e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, o = n.curMonth, n.curMonth = (0, _moment.default)(o).format("YYYY年M月排名"), 
                e.abrupt("return", n);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(1), console.log("GROUP_RANK_GET error", e.t0, e.t0.rtn, e.t0.msg), 
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
}()), _SUPER_RANK_GET$SUPER);

exports.default = _default;