var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _reduxPlugin = require("./../../plugins/redux/index.js"), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var s = e[a](i), u = s.value;
    } catch (e) {
        return void n(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(r, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = s.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, t, n, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

_core.default.component({
    name: "OnlineCampHome",
    props: {
        showBanner: {
            type: Boolean,
            default: !0
        },
        schedule: {
            type: Object,
            default: {}
        },
        isFixTop: {
            type: Boolean,
            default: !1
        },
        top: {
            type: String,
            default: ""
        }
    },
    data: {
        title: "SUPERMONKEY",
        autoplay: !0,
        currentBannerIndex: 0,
        hasBadge: !1,
        hasSubText: !0,
        bottomTextMode: "bottom",
        info: {
            navigateType: "OUTER",
            navigateAppId: "wx60d176f873ca2d67",
            navigateURL: "pages/personal-center/index?id=3528961269"
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        hotCampList: function(e) {
            return this.$store.selectors.getHotCampList(e) || "";
        },
        campScheduleList: function(e) {
            return this.$store.selectors.getCampScheduleList(e) || "";
        },
        campTotalCount: function(e) {
            return this.$store.selectors.getCampTotalCount(e) || 0;
        },
        scheduleTotalCount: function(e) {
            return this.$store.selectors.getScheduleTotalCount(e) || 0;
        },
        bannerInfo: function(e) {
            return this.$store.selectors.getBannerList(e) || 0;
        }
    })),
    watch: {},
    created: function() {
        this._fetchOnlineCampData(), this._fetchGetPromotionPositions();
    },
    methods: {
        handleReload: function() {
            this._fetchOnlineCampData(), this._fetchGetPromotionPositions();
        },
        handleRouter: function(e) {
            var t = e.page, n = e.data, r = e.method, o = void 0 === r ? "navigateTo" : r;
            this.$router[o]({
                page: t,
                data: n
            });
        },
        onBannerChange: function(e) {
            this.currentBannerIndex = e.$wx.detail.current;
        },
        noop: function() {}
    },
    extraEvents: {},
    _fetchOnlineCampData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, wx.showLoading({
                        mask: !0
                    }), e.next = 4, this.$store.dispatch(this.$store.actions.getOnlineCampHomeData());

                  case 4:
                    return e.abrupt("return", e.sent);

                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), this.$failLoading(e.t0.msg);

                  case 10:
                    return e.prev = 10, wx.stopPullDownRefresh(), this.$hideLoading(), e.finish(10);

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 7, 10, 14 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _fetchGetPromotionPositions: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = this.bannerInfo, n = t.isDefaultRule, !t.isPositionActive) {
                        e.next = 5;
                        break;
                    }
                    if (n) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 5, this.$store.dispatch(this.$store.actions.getPromotionsByPositionId([ {
                        positionId: _constants.ONLINE_CAMP_BANNER,
                        ext: {}
                    } ]));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {
            "camp-card": {
                path: "./../camp/CampListCard"
            },
            banner: {
                path: "./../common/other/BannerTop"
            },
            "click-behavior": {
                path: "./../common/enrichment/ClickBehavior"
            },
            "online-camp-item": {
                path: "./OnlineCampItem"
            },
            "bottom-text": {
                path: "./../common/dataDisplay/TextBottom"
            }
        },
        on: {}
    },
    handlers: {
        "1033-0": {
            tap: function() {
                this.handleRouter({
                    page: "OnLineCourse",
                    data: {
                        courseType: "course"
                    }
                });
            }
        },
        "1033-1": {
            tap: function() {
                this.handleRouter({
                    page: "OnLineCourse",
                    data: {
                        courseType: "camp"
                    }
                });
            }
        },
        "1033-2": {
            tap: function() {
                this.handleRouter({
                    page: "TrainerList"
                });
            }
        },
        "1033-3": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1033-4": {
            tap: function() {
                this.handleRouter({
                    page: "OnLineCourse",
                    data: {
                        courseType: "course"
                    }
                });
            }
        },
        "1033-5": {
            tap: function() {
                this.handleRouter({
                    page: "OnLineCourse",
                    data: {
                        courseType: "camp"
                    }
                });
            }
        }
    },
    models: {},
    refs: void 0
});