Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = watchLogin;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _sagas = require("./sagas.js"), _types = require("./../actions/types.js"), _dependent = require("./../dependent.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _marked = _regeneratorRuntime2.default.mark(handleLogin), _marked2 = _regeneratorRuntime2.default.mark(handleLoginError), _marked3 = _regeneratorRuntime2.default.mark(watchLogin);

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var all = _sagas.ReduxSagaEffects.all, takeEvery = _sagas.ReduxSagaEffects.takeEvery, put = _sagas.ReduxSagaEffects.put, call = _sagas.ReduxSagaEffects.call;

function login(e) {
    return new Promise(function(t, r) {
        _dependent.wx.login(_objectSpread({}, e, {
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                r(e);
            }
        }));
    });
}

function getUserInfo(e) {
    return new Promise(function(t, r) {
        _dependent.wx.getUserInfo(_objectSpread({}, e, {
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                r(e);
            }
        }));
    });
}

function redirectTo(e) {
    return new Promise(function(t, r) {
        _dependent.wx.redirectTo(_objectSpread({}, e, {
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                r(e);
            }
        }));
    });
}

function handleLogin(t) {
    var r, n, a;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return t.type, r = t.payload, t.requestPayload, t.meta, n = r.loginInfo, a = r.Cookie, 
            e.next = 4, put({
                type: _types.COOKIE_PUT,
                payload: a
            });

          case 4:
            return e.next = 6, put({
                type: _types.LOGININFO_PUT,
                payload: n
            });

          case 6:
            return e.next = 8, call(redirectTo, {
                url: "/pages/SplashScreen?login=1"
            });

          case 8:
          case "end":
            return e.stop();
        }
    }, _marked);
}

function handleLoginError(t) {
    var r, n, a, o, s;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (t.type, r = t.error, n = t.requestPayload, t.meta, 25 === r.rtn) return a = n.systemInfo, 
            o = n.userInfo, e.next = 5, call(login);
            e.next = 19;
            break;

          case 5:
            return s = e.sent, e.prev = 6, e.next = 9, call(getUserInfo, {
                withCredentials: !0,
                lang: "zh_CN"
            });

          case 9:
            o = e.sent, e.next = 16;
            break;

          case 12:
            return e.prev = 12, e.t0 = e.catch(6), e.next = 16, call(redirectTo, {
                url: "/pages/NotLogin"
            });

          case 16:
            if (o) return e.next = 19, put({
                type: _types.LOGIN,
                payload: {
                    systemInfo: a,
                    loginInfo: s,
                    userInfo: o
                },
                meta: {
                    isFetch: !0,
                    isLatest: !0
                }
            });
            e.next = 19;
            break;

          case 19:
          case "end":
            return e.stop();
        }
    }, _marked2, null, [ [ 6, 12 ] ]);
}

function watchLogin() {
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, all([ takeEvery(_types.LOGIN_SUCCESS, handleLogin) ]);

          case 2:
          case "end":
            return e.stop();
        }
    }, _marked3);
}