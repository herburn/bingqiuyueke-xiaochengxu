var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _ramda = require("./../../vendor.js")(320), _api = _interopRequireDefault(require("./../../services/api/index.js")), _constants = require("./../../constants/index.js"), _reduxPlugin = require("./../../plugins/redux/index.js"), _thread = require("./../../utils/thread.js"), _version = require("./../../utils/version.js"), _semaphore = require("./../../utils/semaphore.js"), _router = require("./../../router/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, a, n, s, o) {
    try {
        var i = e[s](o), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(a, n);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var a = i.apply(e, o);
            function n(e) {
                asyncGeneratorStep(a, t, r, n, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(a, t, r, n, s, "throw", e);
            }
            n(void 0);
        });
    };
}

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

var gIsFinishInit = !1, gPage = "", gPageData = null, gExternalParams = null, gHandledParams = null, isUnregistered = !1, internalJump = !1, gMutexSemaphore = new _semaphore.Semaphore("mutex", {
    initialCount: 1
}), gPersistSemaphore = new _semaphore.Semaphore("persist", {
    isPromise: !0
}), gDecodeParamsSemaphore = new _semaphore.Semaphore("params", {
    isPromise: !0
}), gUnloadSemaphore = new _semaphore.Semaphore("unload", {
    isPromise: !0
}), loadTimeout = 3500, is0or1 = internalJump ? "1" : "0";

_core.default.component({
    name: "SplashScreenContent",
    _loadTimeoutPromise: null,
    data: {
        defaultShow: !1,
        statusText: "进入页面"
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        persistResume: function(e) {
            return this.$store.selectors.getPersistResume(e);
        }
    })),
    watch: {
        persistResume: {
            handler: function(e) {
                e && (0, _semaphore.release)(gPersistSemaphore);
            },
            immediate: !0
        }
    },
    extraEvents: {
        onLoad: function(e) {
            isUnregistered = 1 == +e.isUnregistered, internalJump = 1 == +e.internalJump, this.$app.globalData.firstScreenLoading["splashScreen".concat(is0or1, "Timestamp")] = new Date(), 
            this._loadTimeoutPromise = (0, _thread.sleep)(loadTimeout), this.statusText = "装载页面", 
            this._checkMiniUpdate(), (this.$app.globalData.extNeedPageAuthorize = !1, _semaphore.reset)(gDecodeParamsSemaphore), 
            (0, _semaphore.reset)(gUnloadSemaphore), this._decodeParams(e), this._initialize();
        },
        onUnload: function() {
            (0, _semaphore.release)(gUnloadSemaphore);
        },
        handleReload: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        gDecodeParamsSemaphore.currentValue || this._decodeParams(gExternalParams), this._initialize();

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }()
    },
    _checkMiniUpdate: function() {
        try {
            var r = wx.getUpdateManager();
            r.onUpdateReady(_asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, _semaphore.waitSingle)(gMutexSemaphore);

                      case 2:
                        return e.next = 4, (0, _thread.sleep)(1e3);

                      case 4:
                        return e.prev = 4, e.next = 7, _core.default.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？"
                        });

                      case 7:
                        t = e.sent, t.confirm && r.applyUpdate();

                      case 10:
                        return e.prev = 10, (0, _semaphore.release)(gMutexSemaphore), e.finish(10);

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 4, , 10, 13 ] ]);
            })));
        } catch (e) {
            console.log("updateManager", e);
        }
    },
    _decodeParams: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, a, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = function(e) {
                        gPage = (gHandledParams = e).url || this.$router.homePage;
                        var t = this.$router.getRealPageInfo({
                            page: gPage,
                            data: e
                        }), r = t.pagePath, a = t.pageData;
                        gPageData = (0, _ramda.omit)([ "url", "scene" ], a), e.url && (this.$app.globalData.extPage = gPage, 
                        this.$app.globalData.extPageData = gPageData), console.log("url", "".concat(r, "?").concat((0, 
                        _router.encodeParams)(gPageData)));
                    }, a = function() {
                        return (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                            var r, a, n;
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (r = t.scene) return e.prev = 2, this.$app.globalData.firstScreenLoading.sceneBeforeTimestamp = new Date(), 
                                    e.next = 6, _api.default.http.get({
                                        url: "https://busi.supermonkey.com.cn/waRedirect/scene",
                                        data: {
                                            scene: r
                                        }
                                    });
                                    e.next = 18;
                                    break;

                                  case 6:
                                    return a = e.sent, n = a.jumpPage, this.$app.globalData.firstScreenLoading.sceneAfterTimestamp = new Date(), 
                                    e.abrupt("return", _objectSpread({}, t, {}, (0, _router.decodeParams)(n)));

                                  case 12:
                                    throw e.prev = 12, e.t0 = e.catch(2), this.$app.globalData.firstScreenLoading.isHttpFail = !0, 
                                    this.$failLoading(), console.log("_decodeParams e", e.t0), e.t0;

                                  case 18:
                                    return e.abrupt("return", t);

                                  case 19:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 2, 12 ] ]);
                        }))).apply(this, arguments);
                    }, r = function(e) {
                        return a.apply(this, arguments);
                    }, internalJump) return (0, _semaphore.release)(gDecodeParamsSemaphore), e.abrupt("return");
                    e.next = 6;
                    break;

                  case 6:
                    return "inviterUserId" in t && this.$store.dispatch(this.$store.actions.setExternalInviter((0, 
                    _ramda.pick)([ "inviterUserId", "inviterKey" ])(t))), this.statusText = "开始解析参数", 
                    t = (0, _ramda.map)(decodeURIComponent, t), gExternalParams = t, e.t0 = n, e.t1 = this, 
                    e.next = 14, r.call(this, t);

                  case 14:
                    e.t2 = e.sent, e.t0.call.call(e.t0, e.t1, e.t2), this.statusText = "完成解析参数", (0, 
                    _semaphore.release)(gDecodeParamsSemaphore);

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _initialize: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, r, a, n, s, o;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = function() {
                        return (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.statusText = "完成初始化系统";
                                    try {
                                        this.$router.redirectTo({
                                            page: gPage,
                                            data: gPageData
                                        });
                                    } catch (e) {
                                        console.log("_navigate error", e);
                                    }

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }))).apply(this, arguments);
                    }, s = function() {
                        return o.apply(this, arguments);
                    }, n = function() {
                        return (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                            var t, r;
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (r = function() {
                                        return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.abrupt("return", this.$store.dispatch(this.$store.actions.getPromotionInitInfo()));

                                                  case 1:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, this);
                                        }))).apply(this, arguments);
                                    }, t = function() {
                                        return r.apply(this, arguments);
                                    }, e.prev = 2, gIsFinishInit) {
                                        e.next = 20;
                                        break;
                                    }
                                    return this.$store.dispatch(this.$store.actions.getLocationCity()).catch(_constants.noop), 
                                    this.$app.globalData.firstScreenLoading["initHttp".concat(is0or1, "BeforeTimestamp")] = new Date(), 
                                    e.next = 8, this.$store.dispatch(this.$store.actions.globals.getInitInfo(gHandledParams));

                                  case 8:
                                    return this.$app.globalData.firstScreenLoading["initHttp".concat(is0or1, "AfterTimestamp")] = new Date(), 
                                    this.$app.globalData.firstScreenLoading.openType = this.$app.globalData.firstScreenLoading.isFirst ? 11 : 21, 
                                    e.prev = 10, this.$app.globalData.firstScreenLoading.promotionHttpBeforeTimestamp = new Date(), 
                                    e.next = 14, Promise.race([ t.call(this), this._loadTimeoutPromise ]);

                                  case 14:
                                    this.$app.globalData.firstScreenLoading.promotionHttpAfterTimestamp = new Date(), 
                                    e.next = 19;
                                    break;

                                  case 17:
                                    e.prev = 17, e.t0 = e.catch(10);

                                  case 19:
                                    gIsFinishInit = !0;

                                  case 20:
                                    e.next = 27;
                                    break;

                                  case 22:
                                    throw e.prev = 22, e.t1 = e.catch(2), e.t1.rtn in _api.default.errorCode ? this.$emit("onLogin") : (this.$app.globalData.firstScreenLoading.isHttpFail = !0, 
                                    this.$failLoading()), console.log("initInfo e", e.t1), e.t1;

                                  case 27:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 2, 22 ], [ 10, 17 ] ]);
                        }))).apply(this, arguments);
                    }, a = function() {
                        return n.apply(this, arguments);
                    }, r = function() {
                        var e;
                        try {
                            e = wx.getSystemInfoSync(), this.$store.dispatch(this.$store.actions.setSystemInfo(e));
                        } catch (e) {
                            console.log("getSystemInfoSync error", e);
                        }
                        if (e && (0, _version.compareVersion)(e.version, "6.5.8") < 1) throw this.$router.redirectTo({
                            page: "LowerVersion"
                        }), new Error("版本过低");
                    }, t = function() {
                        if (-1 === this.$store.selectors.getUserInfo(this.$store.getState()).id) throw this.$router.redirectTo({
                            page: "Login"
                        }), "userInfo 没有信息";
                    }, this.statusText = "开始初始化系统", e.next = 9, (0, _semaphore.waitSingle)(gPersistSemaphore);

                  case 9:
                    return isUnregistered || t.call(this), r.call(this), e.next = 13, (0, _semaphore.waitRace)([ (0, 
                    _semaphore.waitAll)([ gDecodeParamsSemaphore, gMutexSemaphore ]), gUnloadSemaphore ]);

                  case 13:
                    if ("unload" === e.sent) return e.abrupt("return");
                    e.next = 16;
                    break;

                  case 16:
                    if (!gPage) {
                        e.next = 32;
                        break;
                    }
                    if (e.prev = 17, isUnregistered) {
                        e.next = 21;
                        break;
                    }
                    return e.next = 21, a.call(this);

                  case 21:
                    return e.next = 23, s.call(this);

                  case 23:
                    e.next = 27;
                    break;

                  case 25:
                    e.prev = 25, e.t0 = e.catch(17);

                  case 27:
                    return e.prev = 27, this.$app.globalData.firstScreenLoading["splashScreen".concat(is0or1, "FinishedTimestamp")] = new Date(), 
                    e.finish(27);

                  case 30:
                    e.next = 33;
                    break;

                  case 32:
                    this.defaultShow = !0;

                  case 33:
                    (0, _semaphore.release)(gMutexSemaphore);

                  case 34:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 17, 25, 27, 30 ] ]);
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