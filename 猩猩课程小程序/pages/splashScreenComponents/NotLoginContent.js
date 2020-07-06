var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, n, t, r, o, a, i) {
    try {
        var s = e[a](i), u = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? n(u) : Promise.resolve(u).then(r, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(n, t) {
            var r = s.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, n, t, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, n, t, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

_core.default.component({
    name: "NotLoginContent",
    methods: {
        getUserInfo: function() {
            var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(n) {
                var t, r, o, a, i;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("getUserInfo:ok" === n.$wx.detail.errMsg) return e.prev = 2, e.next = 5, _core.default.login();
                        e.next = 20;
                        break;

                      case 5:
                        return t = e.sent, e.next = 8, _core.default.getUserInfo({
                            withCredentials: !0
                        });

                      case 8:
                        return r = e.sent, e.next = 11, this.$store.dispatch(this.$store.actions.login({
                            userInfo: r,
                            loginInfo: t
                        }));

                      case 11:
                        o = e.sent, a = o.openid, i = o.id, wx.sma.start({
                            openid: a,
                            userId: i
                        }), e.next = 20;
                        break;

                      case 17:
                        e.prev = 17, e.t0 = e.catch(2), this.$failLoading("登录失败，请重试");

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 17 ] ]);
            }));
            return function(e) {
                return n.apply(this, arguments);
            };
        }()
    },
    extraEvents: {
        onLoad: function() {},
        onUnload: function() {},
        handleReload: function() {}
    }
}, {
    info: {
        components: {
            "navigator-bar": {
                path: "./../../components/common/navigation/NavigatorBar"
            },
            "img-tip": {
                path: "./../../components/common/other/ImgTip"
            }
        },
        on: {}
    },
    handlers: {
        "1006-0": {
            getuserinfo: function() {
                var e = arguments[arguments.length - 1];
                this.getUserInfo(e);
            }
        }
    },
    models: {},
    refs: void 0
});