Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../vendor.js")(0)), _router = require("./../router/index.js"), _ramda = require("./../vendor.js")(320), _getLocation = _interopRequireDefault(require("./../services/map/getLocation.js"));

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

function asyncGeneratorStep(e, r, t, n, o, a, i) {
    try {
        var c = e[a](i), u = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, i);
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

var _default = {
    requestHandlers: {
        locationHandler: function() {
            var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                var t, n, o, a, i, c, u;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = r.header, n = r.meta, o = n.isGetLocation, a = n.isForceGetLocation, o) return e.prev = 2, 
                        e.next = 5, (0, _getLocation.default)(a);
                        e.next = 14;
                        break;

                      case 5:
                        i = e.sent, c = i.latitude, u = i.longitude, r.header = _objectSpread({}, t, {
                            Cookie: "latitude=".concat(c, "; longitude=").concat(u, ";")
                        }), e.next = 14;
                        break;

                      case 11:
                        e.prev = 11, e.t0 = e.catch(2), console.log("无法获取位置信息", e.t0);

                      case 14:
                        return e.abrupt("return", r);

                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 2, 11 ] ]);
            }));
            return function(e) {
                return r.apply(this, arguments);
            };
        }(),
        logHandler: _ramda.identity
    },
    responseHandlers: {
        errorCodeHandler: function(e) {
            var r = e.rtn, t = e.data;
            switch (r) {
              case 11:
              case 21:
              case 25:
                _router.router.redirectTo({
                    page: "Login",
                    data: {
                        rtn: r
                    }
                });
                break;

              case 1503:
                _router.router.redirectTo({
                    page: "ServiceUnavailable",
                    data: {
                        errMsg: t.msg
                    }
                });
            }
            if ((0, _ramda.contains)(r, [ 11, 21, 25, 1503 ])) {
                var n = new Error("rtn(".concat(r, ") not zero"));
                throw n.rtn = r, n.msg = t.msg, n.errMsg = t.msg, n.response = e, n;
            }
            return e;
        }
    }
};

exports.default = _default;