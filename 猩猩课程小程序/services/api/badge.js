Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _BADGE_INFO_GET$BADGE, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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

function asyncGeneratorStep(e, r, t, n, a, o, u) {
    try {
        var c = e[o](u), s = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, u);
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

var _default = (_defineProperty(_BADGE_INFO_GET$BADGE = {}, _actionTypes.BADGE_INFO_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxBadge/getBadgeCategoryList"), e.prev = 1, 
            e.next = 4, _common.http.post({
                url: r
            });

          case 4:
            return e.abrupt("return", e.sent);

          case 7:
            throw e.prev = 7, e.t0 = e.catch(1), console.log("BADGE_INFO_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 11:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 7 ] ]);
}))), _defineProperty(_BADGE_INFO_GET$BADGE, _actionTypes.BADGE_DETAIL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.badgeId, n = r.sk, a = "".concat(_common.specialBase, "/wxBadge/getBadgeDetail"), 
                e.prev = 2, o = {
                    badgeId: t,
                    sk: n
                }, e.next = 6, _common.http.post({
                    url: a,
                    data: o
                });

              case 6:
                return u = e.sent, e.abrupt("return", u);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("BADGE_INFO_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _defineProperty(_BADGE_INFO_GET$BADGE, _actionTypes.BADGE_USER_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/wxBadge/getBadgeHallUserList"), e.prev = 1, 
                e.next = 4, _common.http.post({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, e.abrupt("return", n);

              case 8:
                throw e.prev = 8, e.t0 = e.catch(1), console.log("BADGE_USER_LIST_GET error", e.t0.rtn, e.t0.msg), 
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
}()), _BADGE_INFO_GET$BADGE);

exports.default = _default;