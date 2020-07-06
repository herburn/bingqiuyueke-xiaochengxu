Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var _default = {
    namespace: [ "globals", "login" ],
    actions: {
        login: [ _actionTypes.LOGIN, function(e) {
            var t = e.userInfo, n = e.loginInfo;
            return {
                systemInfo: wx.getSystemInfoSync(),
                loginInfo: n,
                userInfo: t
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                isPromise: {
                    success: !0
                },
                statusName: "loginPost"
            };
        } ]
    },
    sagas: _defineProperty({}, _actionTypes.LOGIN_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, n) {
        var r, o, a, s, i, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, o = t.__resolve, a = n.put, s = n.call, i = r.loginInfo, u = r.Cookie, 
                e.next = 5, a({
                    type: _actionTypes.COOKIE_PUT,
                    payload: u
                });

              case 5:
                return e.next = 7, a({
                    type: _actionTypes.LOGININFO_PUT,
                    payload: i
                });

              case 7:
                return e.next = 9, s(o, i);

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }))
};

exports.default = _default;