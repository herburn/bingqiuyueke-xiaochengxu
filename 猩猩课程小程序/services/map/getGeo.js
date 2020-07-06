Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _thread = require("./../../utils/thread.js"), _amapWx = _interopRequireDefault(require("./amap-wx.js")), _getLocation = _interopRequireDefault(require("./getLocation.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, r) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, r) {
    var t = [], n = !0, a = !1, o = void 0;
    try {
        for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (t.push(u.value), 
        !r || t.length !== r); n = !0) ;
    } catch (e) {
        a = !0, o = e;
    } finally {
        try {
            n || null == i.return || i.return();
        } finally {
            if (a) throw o;
        }
    }
    return t;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

function asyncGeneratorStep(e, r, t, n, a, o, u) {
    try {
        var i = e[o](u), c = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(c) : Promise.resolve(c).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = i.apply(e, u);
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

var TIMEOUT = 5e3, map = new _amapWx.default.AMapWX({
    key: "c39d8f4dc368b602cc068c898d3cec2c"
}), getGeo = function() {
    var i, c, s;
    return function() {
        var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
            var t, n, a, o, u;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (u = function(e) {
                        var r = e.longitude, t = e.latitude;
                        return new Promise(function(o, n) {
                            map.getRegeo({
                                location: "".concat(r, ",").concat(t),
                                success: function(e) {
                                    var r = _slicedToArray(e, 1)[0].regeocodeData.addressComponent, t = r.country, n = r.province, a = r.city;
                                    o({
                                        country: t,
                                        province: n,
                                        city: a
                                    });
                                },
                                fail: function(e) {
                                    var r = e.errCode, t = e.errMsg;
                                    return n({
                                        rtn: r,
                                        errCode: r,
                                        msg: t,
                                        errMsg: t
                                    });
                                }
                            });
                        });
                    }, t = (0, _thread.sleep)(TIMEOUT), void 0 === r) return e.next = 5, (0, _getLocation.default)();
                    e.next = 6;
                    break;

                  case 5:
                    r = e.sent;

                  case 6:
                    if (n = r.longitude, a = r.latitude, i === n && c === a) return e.abrupt("return", s);
                    e.next = 9;
                    break;

                  case 9:
                    return e.next = 11, Promise.race([ u(r), t ]);

                  case 11:
                    if ((o = e.sent) === TIMEOUT) throw {
                        rtn: 5001,
                        errMsg: "获取城市定位超时"
                    };
                    e.next = 14;
                    break;

                  case 14:
                    return i = n, c = a, s = o, e.abrupt("return", s);

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function(e) {
            return r.apply(this, arguments);
        };
    }();
}(), _default = getGeo;

exports.default = _default;