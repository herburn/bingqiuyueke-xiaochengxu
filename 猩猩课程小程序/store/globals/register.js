Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../types/index.js");

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

var _default = {
    namespace: [ "globals", "register" ],
    actions: {
        loginRegister: [ _actionTypes.LOGIN_REGISTER, function(e) {
            return {
                loginInfo: e.loginInfo,
                userInfo: e.userInfo,
                systemInfo: e.systemInfo
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                isPromise: {
                    success: !0
                }
            };
        } ]
    },
    sagas: _defineProperty({}, _actionTypes.LOGIN_REGISTER_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var o, s, a, i, u, c, l, f, p, _, I;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = t.payload, s = t.__resolve, a = r.put, i = r.call, u = r.select, c = n.getSelector, 
                l = n.actions, f = o.loginInfo, p = o.Cookie, e.next = 6, a({
                    type: _actionTypes.COOKIE_PUT,
                    payload: p
                });

              case 6:
                return e.next = 8, a({
                    type: _actionTypes.LOGININFO_PUT,
                    payload: f
                });

              case 8:
                return e.next = 10, u(c("getExternalInviter"));

              case 10:
                return _ = e.sent, e.next = 13, a.resolve(l.getInitInfo(_));

              case 13:
                return I = e.sent, e.prev = 14, e.next = 17, a.resolve(l.getPromotionInitInfo());

              case 17:
                e.next = 22;
                break;

              case 19:
                e.prev = 19, e.t0 = e.catch(14), console.log("LOGIN_REGISTER_SUCCESS getPromotionInitInfo error");

              case 22:
                return e.next = 24, i(s, I);

              case 24:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 14, 19 ] ]);
    }))
};

exports.default = _default;