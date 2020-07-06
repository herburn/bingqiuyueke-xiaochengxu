var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _store = require("./../../../store/index.js"), _ramda = require("./../../../vendor.js")(320), _debounceThrottle = require("./../../../utils/debounce-throttle.js"), _reduxPlugin = require("./../../../plugins/redux/index.js"), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, a, n, r, o, s) {
    try {
        var i = e[o](s), c = i.value;
    } catch (e) {
        return void a(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, r);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, s = arguments;
        return new Promise(function(t, a) {
            var n = i.apply(e, s);
            function r(e) {
                asyncGeneratorStep(n, t, a, r, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, a, r, o, "throw", e);
            }
            r(void 0);
        });
    };
}

function ownKeys(t, e) {
    var a = Object.keys(t);
    return Object.getOwnPropertySymbols && a.push.apply(a, Object.getOwnPropertySymbols(t)), 
    e && (a = a.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), a;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(a, !0).forEach(function(e) {
            _defineProperty(t, e, a[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(a).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
    }
    return t;
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var posterHeight = 540, pageNavHeight = 136;

_core.default.page({
    name: "ClassDetail",
    _preLoad: null,
    _sk: "",
    _scrollTop: 0,
    _pageNavHeightPx: 0,
    _attentionPanelObserver: null,
    data: {
        scheduleId: "",
        navBarBg: "",
        pageNavTopPx: 0,
        pageNavScrollThreshold: 0,
        pageNavIsSticky: !1,
        navItems: [ {
            label: "课程信息",
            value: "class"
        }, {
            label: "注意事项",
            value: "attention"
        } ],
        pageNavActiveIndex: 0
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        detail: function(e) {
            return this.$store.selectors.getClassDetail(e, this.scheduleId);
        }
    }), {
        shareInfo: function() {
            if (!(0, _ramda.isEmpty)(this.detail)) {
                var e = this.detail.posterInfo.posters[0];
                return {
                    title: "我很喜欢的".concat(this.detail.profile.className, "，一起来上课吧！"),
                    url: {
                        page: "ClassDetail",
                        data: {
                            scheduleId: this.scheduleId,
                            sk: this._sk
                        }
                    },
                    imageUrl: e,
                    backgroundImageUrl: e,
                    shareType: _constants.picShareTypeMap.COURSE,
                    picTitle: this.detail.profile.className
                };
            }
        },
        pageBtn: function() {
            if (!(0, _ramda.isEmpty)(this.detail)) {
                var e = this.detail.btnInfo.items;
                return {
                    mode: 1 === e.length ? "single" : "doubleAvg",
                    items: (0, _ramda.map)(function(e) {
                        return {
                            label: e.text,
                            status: function(e) {
                                if (e.navigatorPage) return "enable";
                                if (e.tips) return "enableGrey";
                                return "disable";
                            }(e)
                        };
                    })(e)
                };
            }
        }
    }),
    beforeRouteEnter: function(e, t, a) {
        var n = e.data, r = n.scheduleId, o = n.sk, s = _store.store.dispatchAction("fetchClassDetail", {
            scheduleId: r,
            sk: o
        });
        a(function(e) {
            e._preLoad = s;
        });
    },
    onLoad: function(e) {
        var t = e.scheduleId, a = e.sk;
        wx.hideShareMenu(), this.scheduleId = t, this._sk = a, this._fetchData((0, _ramda.isEmpty)(this.detail)), 
        this.pageNavTopPx = this.$app.globalData.navigatorFullHeightPx - 1, this.pageNavScrollThreshold = this.$rpx2px(posterHeight) - this.$app.globalData.navigatorFullHeightPx, 
        this._pageNavHeightPx = this.$rpx2px(pageNavHeight);
    },
    onShow: function() {
        this.$isReady && this._fetchData();
    },
    onReady: function() {
        var a = this;
        this._attentionPanelObserver = this.$wx.createIntersectionObserver({
            thresholds: [ 0 ]
        }), this._attentionPanelObserver.relativeTo("#pageNavbar", {
            bottom: 8
        }).observe("#attentionPanel", function(e) {
            var t = e.intersectionRatio;
            a.pageNavActiveIndex = 0 < t ? 1 : 0;
        });
    },
    onUnload: function() {
        this._attentionPanelObserver && this._attentionPanelObserver.disconnect();
    },
    onPageScroll: function(e) {
        var t = e.scrollTop;
        this._onPageScroll(t);
    },
    methods: {
        handleReload: function() {
            this._fetchData(!0);
        },
        changeSticky: function(e) {
            var t = e.isSticky;
            this.pageNavIsSticky = t;
        },
        share: function() {
            this.$sharePage(this.shareInfo);
        },
        tapNavActive: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var a;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = t.index, 0 !== (this.pageNavActiveIndex = a)) {
                            e.next = 6;
                            break;
                        }
                        wx.pageScrollTo({
                            scrollTop: this.$rpx2px(posterHeight) - this.$app.globalData.navigatorFullHeightPx + 1
                        }), e.next = 17;
                        break;

                      case 6:
                        if (1 === a) return e.t0 = wx, e.next = 10, this._getAttentionPanelTop();
                        e.next = 17;
                        break;

                      case 10:
                        e.t1 = e.sent, e.t2 = this.$app.globalData.navigatorFullHeightPx, e.t3 = e.t1 - e.t2, 
                        e.t4 = this._pageNavHeightPx, e.t5 = e.t3 - e.t4, e.t6 = {
                            scrollTop: e.t5
                        }, e.t0.pageScrollTo.call(e.t0, e.t6);

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        tapPageBtn: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var a, n, r, o, s;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = t.index, e.next = 3, this.$loginRegister();

                      case 3:
                        (n = this.detail.btnInfo.items)[a].tips ? this.$showToast({
                            title: n[a].tips
                        }) : (r = n[a], o = r.navigatorPage, s = r.navigatorData, this.$router.navigateTo({
                            page: o,
                            data: s
                        }));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    },
    _fetchData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (0 < t.length && void 0 !== t[0] && t[0] && this.$showLoading(), e.prev = 2, 
                    null !== this._preLoad) return e.next = 6, this._preLoad;
                    e.next = 9;
                    break;

                  case 6:
                    this._preLoad = null, e.next = 11;
                    break;

                  case 9:
                    return e.next = 11, this.$store.dispatchAction("fetchClassDetail", {
                        scheduleId: this.scheduleId,
                        sk: this._sk
                    });

                  case 11:
                    return e.next = 13, this.$sleep(100);

                  case 13:
                    this.$sensorTracesEventCapture({
                        type: "view",
                        responseRegionId: this._sensorResponseRegionIdMap.PAGE_CLASS_DETAIL,
                        dataset: {
                            scheduleId: this.scheduleId,
                            status: this.detail.bookingCountStatus,
                            isWaiting: this.detail.isWaiting
                        }
                    }), this.detail.shareEnable && wx.showShareMenu(), this.$hideLoading(), e.next = 21;
                    break;

                  case 18:
                    e.prev = 18, e.t0 = e.catch(2), this.$failLoading();

                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 18 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _onPageScroll: (0, _debounceThrottle.throttle)(function(e) {
        this._scrollTop = 0 < e ? e : 0, e >= this.pageNavScrollThreshold ? this.navBarBg = _constants.navigatorDarkBgColor : this.navBarBg = "", 
        this.$invokeChild("stickyPageNav", "updateScrollTop", e);
    }, 100),
    _getAttentionPanelTop: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var n = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(t, a) {
                        wx.createSelectorQuery().select("#attentionPanel").fields({
                            rect: !0
                        }, function(e) {
                            return e ? t(e.top + n._scrollTop) : a();
                        }).exec();
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {
            "unauthorized-msg": {
                path: "./../../../components/subscribeMsg/ModalUnauthorizedMsg"
            },
            "reject-msg": {
                path: "./../../../components/subscribeMsg/ModalRejectMsg"
            },
            "modal-subscribe-msg-guide1": {
                path: "./../../../components/subscribeMsg/ModalSubscribeMsgGuide1"
            },
            "modal-subscribe-msg-guide2": {
                path: "./../../../components/subscribeMsg/ModalSubscribeMsgGuide2"
            },
            "course-introduce-panel": {
                path: "./../../../components/course/CourseDetailPanelCourseIntroduce"
            },
            "attention-matters-panel": {
                path: "./../../../components/course/CourseDetailPanelAttentionMatters"
            },
            "media-area": {
                path: "./../../../components/course/CourseDetailMediaArea"
            },
            "fitness-step-panel": {
                path: "./../../../components/course/CourseDetailPanelFitnessStep"
            },
            "page-loading": {
                path: "./../../../components/common/loading/LoadingPage"
            },
            "show-toast": {
                path: "./../../../components/common/feedback/Toast"
            },
            "show-modal": {
                path: "./../../../components/common/feedback/Modal"
            },
            "show-add-wechat-modal": {
                path: "./../../../components/common/feedback/ModalAddWeChat"
            },
            "register-user": {
                path: "./../../../components/common/feedback/ModalRegisterUser"
            },
            "new-user-prompt": {
                path: "./../../../components/common/feedback/FloatingActionButtonNewUser"
            },
            "alert-after-share": {
                path: "./../../../components/common/feedback/AlertAfterShare"
            },
            "show-action-sheet": {
                path: "./../../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../../components/common/dataEntry/PickerView"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            },
            "sticky-wrapper": {
                path: "./../../../components/common/enrichment/WrapperSticky"
            },
            "page-navbar": {
                path: "./../../../components/common/navigation/NavbarPageDetail"
            },
            "page-resident-button": {
                path: "./../../../components/common/dataEntry/ButtonPageResident"
            },
            "class-detail-profile-panel": {
                path: "./components/ClassDetailProfilePanel"
            }
        },
        on: {
            "839-0": [ "changeSticky" ],
            "839-1": [ "switchPageNav", "share" ],
            "839-3": [ "tapPageBtn" ],
            "839-4": [ "reload" ]
        }
    },
    handlers: {
        "839-0": {
            changeSticky: function() {
                var e = arguments[arguments.length - 1];
                this.changeSticky(e);
            }
        },
        "839-1": {
            switchPageNav: function() {
                var e = arguments[arguments.length - 1];
                this.tapNavActive(e);
            },
            share: function() {
                var e = arguments[arguments.length - 1];
                this.share(e);
            }
        },
        "839-3": {
            tapPageBtn: function() {
                var e = arguments[arguments.length - 1];
                this.tapPageBtn(e);
            }
        },
        "839-4": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});