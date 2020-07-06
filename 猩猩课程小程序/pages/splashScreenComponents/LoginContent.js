var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, i, o) {
    try {
        var s = e[i](o), p = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(p) : Promise.resolve(p).then(n, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, t, r, a, i, "throw", e);
            }
            a(void 0);
        });
    };
}

_core.default.component({
    name: "LoginContent",
    extraEvents: {
        onLoad: function(e) {
            var t = e.rtn;
            this.$app.globalData.firstScreenLoading.loginTimestamp = new Date(), this._login(+t);
        },
        onUnload: function() {},
        handleReload: function() {
            this._login();
        }
    },
    _login: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, r, n, a, i, o, s, p, c, l, u, d, h, g = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = 0 < g.length && void 0 !== g[0] ? g[0] : -1, e.prev = 1, e.next = 4, 
                    _core.default.login();

                  case 4:
                    r = e.sent, e.next = 12;
                    break;

                  case 7:
                    return e.prev = 7, e.t0 = e.catch(1), console.error("wx.login", e.t0), this.$failLoading("登录失败，请稍候重试..."), 
                    e.abrupt("return");

                  case 12:
                    if (25 === t) return e.prev = 13, e.next = 16, _core.default.getUserInfo({
                        withCredentials: !0,
                        lang: "zh_CN"
                    });
                    e.next = 24;
                    break;

                  case 16:
                    n = e.sent, e.next = 24;
                    break;

                  case 19:
                    throw e.prev = 19, e.t1 = e.catch(13), a = this.$app.globalData, i = a.extPage, 
                    o = a.extPageData, i in this.$router.authorizePageMap ? (this.$app.globalData.extNeedPageAuthorize = !0, 
                    this.$router.redirectTo({
                        page: i,
                        data: o
                    })) : this.$router.redirectTo({
                        page: "NotLogin"
                    }), e.t1;

                  case 24:
                    return e.prev = 24, this.$app.globalData.firstScreenLoading.loginHttpBeforeTimestamp = new Date(), 
                    e.next = 28, this.$store.dispatch(this.$store.actions.login({
                        loginInfo: r,
                        userInfo: n
                    }));

                  case 28:
                    s = e.sent, p = s.openid, c = s.id, this.$app.globalData.firstScreenLoading.loginHttpAfterTimestamp = new Date(), 
                    this.$app.globalData.firstScreenLoading.openType = this.$app.globalData.firstScreenLoading.isFirst ? 12 : 22, 
                    wx.sma.start({
                        openid: p,
                        userId: c
                    }), e.next = 41;
                    break;

                  case 36:
                    e.prev = 36, e.t2 = e.catch(24), l = e.t2.rtn, u = e.t2.response, 25 === l ? (d = u.data.openid, 
                    h = void 0 === d ? "" : d, null == this.$route.referrerRoute ? (this.$store.dispatch(this.$store.actions.updateUserBasicInfo({
                        openid: h
                    })), this.$store.dispatch(this.$store.actions.setIsUnregistered(!0)), this.$store.dispatchAction("setIsNovice", !0), 
                    this.$router.redirectTo({
                        page: "SplashScreenUnregistered"
                    }), this.$app.globalData.firstScreenLoading.openType = this.$app.globalData.firstScreenLoading.isFirst ? 10 : 20) : this.$router.redirectTo({
                        page: "NotLogin"
                    }), wx.sma.start({
                        openid: h
                    })) : (this.$app.globalData.firstScreenLoading.isHttpFail = !0, this.$failLoading());

                  case 41:
                    return e.prev = 41, this.$app.globalData.firstScreenLoading.loginFinishedTimestamp = new Date(), 
                    e.finish(41);

                  case 44:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 7 ], [ 13, 19 ], [ 24, 36, 41, 44 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});