Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _LOGIN$LOGIN_REGISTER, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _ramda = require("./../../vendor.js")(320), _actionTypes = require("./../../store/types/index.js"), _model = require("./../../utils/model.js"), _loginInfo = _interopRequireDefault(require("./../../models/loginInfo.js")), _common = require("./common.js");

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

function asyncGeneratorStep(e, r, t, n, o, i, a) {
    try {
        var s = e[i](a), u = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? r(u) : Promise.resolve(u).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(r, t) {
            var n = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, r, t, o, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, r, t, o, i, "throw", e);
            }
            o(void 0);
        });
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

var _default = (_defineProperty(_LOGIN$LOGIN_REGISTER = {}, _actionTypes.LOGIN, login), 
_defineProperty(_LOGIN$LOGIN_REGISTER, _actionTypes.LOGIN_REGISTER, login), _LOGIN$LOGIN_REGISTER);

function login(e) {
    return _login.apply(this, arguments);
}

function _login() {
    return (_login = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, i, a, s, u, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.systemInfo, n = r.loginInfo, o = r.userInfo, i = void 0 === o ? {} : o, 
                a = "".concat(_common.loginBase, "/waUser/login"), e.prev = 2, e.next = 5, _common.http.post({
                    url: a,
                    data: _objectSpread({}, t, {
                        code: n.code
                    }, (0, _ramda.pick)([ "encryptedData", "iv" ])(i))
                });

              case 5:
                return s = e.sent, u = s.userinfo, c = s.Cookie, setTimeout(function() {
                    return trackSensor(i, u);
                }, 100), e.abrupt("return", {
                    loginInfo: (0, _model.copyModel)(_loginInfo.default)(u),
                    Cookie: c
                });

              case 12:
                throw e.prev = 12, e.t0 = e.catch(2), console.log("login error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 16:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 12 ] ]);
    }))).apply(this, arguments);
}

function trackSensor(e, r) {
    var t = r.openid, n = r.userId;
    try {
        if ((0, _ramda.isEmpty)(e)) wx.sma.sensorTrack({
            event: "login",
            data: {
                openid: t
            }
        }); else {
            var o = getApp().$wepy.globalData.query.register_channel;
            wx.sma.sensor.updateUserData({
                sm_user_id: n,
                first_visit_time: (0, _moment.default)().format("YYYY-MM-DD HH:mm:ss.SSS")
            }), wx.sma.sensorTrack({
                event: "register",
                data: {
                    openid: t,
                    channel: o
                }
            });
        }
    } catch (e) {
        console.error("trackSensor", e);
    }
}

exports.default = _default;