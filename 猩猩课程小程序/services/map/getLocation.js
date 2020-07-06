Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _thread = require("./../../utils/thread.js"), _moment = _interopRequireDefault(require("./../../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, u, a, o) {
    try {
        var i = e[a](o), s = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(s) : Promise.resolve(s).then(n, u);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, o);
            function u(e) {
                asyncGeneratorStep(n, t, r, u, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, t, r, u, a, "throw", e);
            }
            u(void 0);
        });
    };
}

var getLocation = function() {
    var s, c = null;
    return function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, u, a, o, i;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = function() {
                        return 15 <= _moment.default.duration((0, _moment.default)() - _moment.default.unix(s.lastUnix)).asMinutes();
                    }, o = function() {
                        return (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                            var t, r;
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, _core.default.getSetting();

                                  case 2:
                                    return t = e.sent, r = t.authSetting, e.abrupt("return", !1 === r["scope.userLocation"]);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))).apply(this, arguments);
                    }, a = function() {
                        return o.apply(this, arguments);
                    }, e.next = 5, a();

                  case 5:
                    if (e.sent) throw {
                        rtn: 5e3,
                        errMsg: "定理位置信息未授权"
                    };
                    e.next = 7;
                    break;

                  case 7:
                    if (!s || t || i()) return null === c && (c = _core.default.getLocation({
                        type: "gcj02"
                    })), e.next = 11, Promise.race([ c, (0, _thread.sleep)(3e3) ]);
                    e.next = 19;
                    break;

                  case 11:
                    if (3e3 === (r = e.sent)) throw {
                        rtn: 5001,
                        errMsg: "getLocation timeout"
                    };
                    e.next = 16;
                    break;

                  case 16:
                    n = r.longitude, u = r.latitude, s = {
                        longitude: n,
                        latitude: u,
                        lastUnix: (c = null, _moment.default)().unix()
                    };

                  case 19:
                    return e.abrupt("return", s);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }();
}(), _default = getLocation;

exports.default = _default;