var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, o, s, i) {
    try {
        var a = e[s](i), c = a.value;
    } catch (e) {
        return void n(e);
    }
    a.done ? t(c) : Promise.resolve(c).then(r, o);
}

function _asyncToGenerator(a) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = a.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(r, t, n, o, s, "throw", e);
            }
            o(void 0);
        });
    };
}

var title = "Opps!请登录...", content = '点击"立即登录"，确认猩球身份，方可继续漫游哦！';

_core.default.component({
    name: "ModalRegisterUser",
    _success: null,
    _cancel: null,
    methods: {
        login: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var n, r, o, s, i;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = t.$wx.detail.errMsg, e.prev = 1, "getUserInfo:ok" === n) return wx.showLoading({
                            mask: !0,
                            title: "登录中..."
                        }), e.next = 6, _core.default.login();
                        e.next = 15;
                        break;

                      case 6:
                        return r = e.sent, e.next = 9, _core.default.getUserInfo({
                            withCredentials: !0
                        });

                      case 9:
                        return o = e.sent, s = this.$store.selectors.getSystemInfo(this.$store.getState()), 
                        e.next = 13, this.$store.dispatch(this.$store.actions.loginRegister({
                            loginInfo: r,
                            userInfo: o,
                            systemInfo: s
                        }));

                      case 13:
                        this._success(), this._close();

                      case 15:
                        e.next = 21;
                        break;

                      case 17:
                        e.prev = 17, e.t0 = e.catch(1), i = e.t0.errMsg, this.$showToast(i);

                      case 21:
                        return e.prev = 21, wx.hideLoading(), e.finish(21);

                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 1, 17, 21, 24 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        cancel: function() {
            this._cancel(), this._close();
        }
    },
    extraEvents: {
        register: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, n = t.success, r = void 0 === n ? function() {} : n, o = t.cancel, s = void 0 === o ? function() {} : o;
            this._success = r, this._cancel = s, this.$invokeChild("registerUserModal", "openShowModal", {
                btnType: "custom",
                title: title,
                content: content
            });
        }
    },
    _close: function() {
        this.$invokeChild("registerUserModal", "closeModal");
    }
}, {
    info: {
        components: {
            "show-modal": {
                path: "./Modal"
            }
        },
        on: {}
    },
    handlers: {
        "1016-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.cancel(e);
            }
        },
        "1016-1": {
            getuserinfo: function() {
                var e = arguments[arguments.length - 1];
                this.login(e);
            }
        }
    },
    models: {},
    refs: void 0
});