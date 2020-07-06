Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _http = _interopRequireDefault(require("./http.js")), _dependent = require("./dependent.js"), _types = require("./../../store/actions/types.js"), _model = require("./utils/model.js"), _loginInfo = _interopRequireDefault(require("./../../model/loginInfo.js")), _ramda = _interopRequireDefault(require("./../../../../vendor.js")(320));

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

function asyncGeneratorStep(e, r, t, n, o, i, u) {
    try {
        var a = e[i](u), c = a.value;
    } catch (e) {
        return void t(e);
    }
    a.done ? r(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(a) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = a.apply(e, u);
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

var pick = _ramda.default.pick, _default = _defineProperty({}, _types.LOGIN, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, i, u, a, c, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.systemInfo, n = r.loginInfo, o = r.userInfo, i = void 0 === o ? {} : o, 
                u = "".concat(_dependent.loginUrl), e.prev = 2, e.next = 5, _http.default.get({
                    url: u,
                    data: _objectSpread({}, t, {
                        code: n.code
                    }, pick([ "encryptedData", "iv" ])(i))
                });

              case 5:
                return a = e.sent, c = a.userinfo, s = a.Cookie, e.abrupt("return", {
                    loginInfo: (0, _model.copyModel)(_loginInfo.default)(c),
                    Cookie: s
                });

              case 11:
                throw e.prev = 11, e.t0 = e.catch(2), console.log("login error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 11 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}());

exports.default = _default;