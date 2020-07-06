var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _courseList = _interopRequireDefault(require("./../../../mixins/courseList/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _debounceThrottle = require("./../../../utils/debounce-throttle.js"), _thread = require("./../../../utils/thread.js"), _constants = require("./../../../constants/index.js"), _screen = require("./../../../utils/screen.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, o, i, s, r) {
    try {
        var a = e[s](r), c = a.value;
    } catch (e) {
        return void n(e);
    }
    a.done ? t(c) : Promise.resolve(c).then(o, i);
}

function _asyncToGenerator(a) {
    return function() {
        var e = this, r = arguments;
        return new Promise(function(t, n) {
            var o = a.apply(e, r);
            function i(e) {
                asyncGeneratorStep(o, t, n, i, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(o, t, n, i, s, "throw", e);
            }
            i(void 0);
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

var courseType2Label = {
    class: "团课",
    personal: "私教",
    camp: "CAMP"
}, defaultType = "class", bannerHeight = 428, offsetHeight = 54;

_core.default.page({
    name: "CourseList",
    mixins: _courseList.default,
    _doubleTap: !1,
    _scrollTop: 0,
    data: {
        courseSelectedNavTop: 0,
        selectedCourseType: defaultType,
        isFilterActive: !1,
        tagList: [],
        courseNavMap: {
            class: {
                isFilterActive: !1
            },
            personal: {
                isFilterActive: !1
            },
            camp: {
                isFilterActive: !1
            }
        },
        tabsScrollTop: 0,
        _navigatorFixBgColor: "#333",
        isFixTop: !1,
        navigatorFullHeight: 0,
        top: "",
        navigatorBgColor: "",
        showBanner: !0,
        cityTapFlag: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        courses: function(e) {
            var t = (0, this.$store.selectors.getNewCampShowedStatusOnNavBar)(e, this.currentCity);
            return [ {
                label: courseType2Label.class,
                value: "class"
            }, {
                label: courseType2Label.personal,
                value: "personal"
            }, {
                label: courseType2Label.camp,
                value: "camp",
                isRed: t
            } ];
        },
        currentCity: function(e) {
            return this.$store.selectors.getCurrentCity(e);
        },
        appClassType: function(e) {
            return this.$store.selectors.getAppClassType(e);
        },
        isShowOnlineCamp: function() {
            return "onlineClass" === this.appClassType;
        },
        needSwitchOffline: function() {
            return this.isShowOnlineCamp && this.cityTapFlag;
        },
        isFirstFetchDone: function() {
            var a = !1;
            return function(e) {
                if (a) return a;
                var t = _constants.FetchStatus.SUCCESS, n = this.$store.selectors.getFetchStatus(e), o = n.courseClassListGet, i = n.personalListGet, s = n.campListGet, r = n.onlineCampHomeDataGet;
                return a = o.status === t && this.$isActive || i.status === t || s.status === t || r.status === t;
            };
        }()
    }), {
        shareInfo: function() {
            return {
                title: this.isShowOnlineCamp ? "SUPERMONKEY线上课程" : "超级猩猩健身-".concat(courseType2Label[this.selectedCourseType]),
                url: {
                    page: "CourseList",
                    data: {
                        courseType: this.selectedCourseType,
                        classType: this.isShowOnlineCamp ? "online" : "offline"
                    }
                }
            };
        }
    }),
    watch: {
        isFirstFetchDone: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!0 === t) return this.$app.globalData.firstScreenLoading.firstPageHttpAfterTimestamp = new Date(), 
                        e.next = 4, this.$sleep(10);
                        e.next = 21;
                        break;

                      case 4:
                        return e.prev = 4, e.next = 7, this.$switchClassType();

                      case 7:
                        return e.next = 9, this.$switchBizLocationCity();

                      case 9:
                        e.next = 14;
                        break;

                      case 11:
                        throw e.prev = 11, e.t0 = e.catch(4), e.t0;

                      case 14:
                        return e.prev = 14, e.next = 17, this.$nextTick();

                      case 17:
                        return this.$app.globalData.firstScreenLoading.firstPageFinishedTimestamp = new Date(), 
                        wx.sma.sensorTrack({
                            event: "firstScreenLoading",
                            data: this.$app.globalData.firstScreenLoading
                        }), e.finish(14);

                      case 20:
                        this._switchCourse(this.selectedCourseType);

                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 4, 11, 14, 20 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    },
    beforeRouteUpdate: function() {
        var e = this;
        return setTimeout(function() {
            return e._onShow();
        }, 100), !0;
    },
    attached: function() {
        this.navigatorFullHeight = this.$app.globalData.navigatorFullHeightRpx || 100, this.tabsScrollTop = Math.floor(bannerHeight - this.navigatorFullHeight - offsetHeight);
    },
    onLoad: function() {
        var e = this;
        this.$app.globalData.firstScreenLoading.firstPageTimestamp = new Date(), this.$app.globalData.firstScreenLoading.firstPageHttpBeforeTimestamp = new Date(), 
        this.courseSelectedNavTop = this.$app.globalData.navigatorFullHeightPx, this.$addLoginRegisterCb(function() {
            return e.$invokeChild("class", "onPullDownRefresh");
        });
    },
    onShow: function() {
        this._onShow();
    },
    onPageScroll: function(e) {
        var t = e.scrollTop;
        this._onPageScroll({
            scrollTop: t
        });
    },
    onTabItemTap: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this._doubleTap) {
                        e.next = 5;
                        break;
                    }
                    this.isShowNewerGuide && (this.isShowNewerGuide = !1, this.$store.dispatch(this.$store.actions.setIsNotNewerGuideUser(1))), 
                    this._scrollTop <= 0 ? wx.startPullDownRefresh() : wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 300
                    }), e.next = 9;
                    break;

                  case 5:
                    return this._doubleTap = 1, e.next = 8, (0, _thread.sleep)(300);

                  case 8:
                    this._doubleTap = 0;

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    methods: {
        openFilter: function() {},
        confirmFilter: function() {},
        changeCity: function() {
            this.cityTapFlag = !0, this._switchCourse(this.selectedCourseType);
        },
        pageTap: function() {
            this.isShowNewerGuide && (this.isShowNewerGuide = !1, this.$store.dispatch(this.$store.actions.setIsNotNewerGuideUser(1)));
        },
        handleReload: function() {
            this._onPullDownRefresh({
                isLoading: !0
            });
        },
        switchCourse: function(e) {
            var t = e.value;
            this._switchCourse(t);
        },
        switchFilter: function() {
            this._handleInvokeChild("switchFilter");
        },
        onFilter: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var o = t[0], i = t[1].isFilter;
            this.courseNavMap[o].isFilterActive = i;
        }
    },
    _onlineCampScroll: function(e) {
        var t = Math.floor((0, _screen.px2rpx)(e));
        this._scrollTop = e, this.showBanner && !this.isFixTop && t >= this.tabsScrollTop ? this._setFilterFixStatus(!0) : this.showBanner && this.isFixTop && t < this.tabsScrollTop && this._setFilterFixStatus(!1);
    },
    _setFilterFixStatus: function(e) {
        e ? (this.isFixTop = !0, this.top = "".concat(this.navigatorFullHeight, "rpx"), 
        this.navigatorBgColor = this._navigatorFixBgColor) : (this.isFixTop = !1, this.top = 0, 
        this.navigatorBgColor = "");
    },
    _onShow: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, n, o, i, s, r, a, c;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (c = function(e) {
                        var t = e.tagList, n = void 0 === t ? "" : t;
                        return n ? n.split("|") : [];
                    }, t = this.$route, n = t.data, o = n.courseType, i = void 0 === o ? defaultType : o, 
                    s = n.city, r = n.classType, !(a = t.hasVisited) && s && this.$store.dispatch(this.$store.actions.updateCurrentCity(s)), 
                    a) {
                        e.next = 12;
                        break;
                    }
                    if ("camp" === i) return this.tagList = c(this.$route.data), e.next = 8, this.$nextTick();
                    e.next = 8;
                    break;

                  case 8:
                    "online" === r && this.$store.dispatch(this.$store.actions.updateAppClassType("onlineClass")), 
                    this._switchCourse(i), e.next = 13;
                    break;

                  case 12:
                    this._switchCourse(this.selectedCourseType);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _onPullDownRefresh: function(e) {
        this.isShowOnlineCamp ? (this.$invokeChild("onlineCampHome", "_fetchOnlineCampData"), 
        this.$invokeChild("onlineCampHome", "_fetchGetPromotionPositions")) : this._handleInvokeChild("onPullDownRefresh", e);
    },
    _onPageScroll: (0, _debounceThrottle.throttle)(function(e) {
        var t = e.scrollTop;
        if (this.isShowOnlineCamp) return this._onlineCampScroll(t);
        this._scrollTop = t, this.$invokeChild("stickyCourseNav", "updateScrollTop", t), 
        this._handleInvokeChild("onPageScroll", {
            scrollTop: t
        });
    }, 40),
    _switchCourse: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = function() {
                        var t = this;
                        return new Promise(function(e) {
                            return t.needSwitchOffline && (t.$store.dispatch(t.$store.actions.updateAppClassType("offlineClass")), 
                            t.cityTapFlag = !1, t.$nextTick(function() {
                                return e(!0);
                            })), e(!0);
                        });
                    }, "class" !== t) return e.prev = 2, e.next = 5, this.$loginRegister();
                    e.next = 11;
                    break;

                  case 5:
                    e.next = 11;
                    break;

                  case 7:
                    return e.prev = 7, e.t0 = e.catch(2), this._switchCourse("class"), e.abrupt("return");

                  case 11:
                    return e.next = 13, n.call(this);

                  case 13:
                    this.$route.data.courseType = t, this.selectedCourseType = t, this.isShowOnlineCamp || this._handleInvokeChild("switchCourse", {
                        city: this.currentCity
                    });

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 7 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _handleInvokeChild: function(e, t) {
        "class" === this.selectedCourseType ? this.$invokeChild(this._elementIdMap.CLASS_LIST, e, t) : "camp" === this.selectedCourseType ? this.$invokeChild("camp", e, t) : "personal" === this.selectedCourseType && this.$invokeChild("personal", e, t);
    }
}, {
    info: {
        components: {
            "personal-content": {
                path: "./components/PersonalContent"
            },
            "camp-content": {
                path: "./components/CampContent"
            },
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
            "newer-guide": {
                path: "./../../../components/course/CourseListTooltipNewerGuide"
            },
            "class-content-filter": {
                path: "./../../../components/class/ClassListWithFilter"
            },
            "online-camp": {
                path: "./../../../components/onlineCamp/OnlineCampHome"
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
            "ticket-prompt": {
                path: "./../../../components/common/feedback/TooltipTicket"
            },
            "personal-expire-prompt": {
                path: "./../../../components/common/feedback/TooltipPersonal"
            },
            "follow-public-prompt": {
                path: "./../../../components/common/feedback/NoticeFollowPublic"
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
            "copy-right-bottom": {
                path: "./../../../components/common/other/CopyRightBottom"
            },
            "select-city": {
                path: "./../../../components/common/other/SelectCity"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            },
            "course-selected-navbar": {
                path: "./../../../components/common/navigation/NavbarPageList"
            },
            "sticky-wrapper": {
                path: "./../../../components/common/enrichment/WrapperSticky"
            }
        },
        on: {
            "835-0": [ "changeCity" ],
            "835-1": [ "changeCity" ],
            "835-2": [ "tap" ],
            "835-3": [ "switchCourse", "switchFilter" ],
            "835-5": [ "onFilter", "openFilter", "confirmFilter" ],
            "835-8": [ "onFilter" ],
            "835-9": [ "onFilter" ],
            "835-10": [ "reload" ]
        }
    },
    handlers: {
        "835-0": {
            changeCity: function() {
                var e = arguments[arguments.length - 1];
                this.changeCity(e);
            }
        },
        "835-1": {
            changeCity: function() {
                var e = arguments[arguments.length - 1];
                this.changeCity(e);
            }
        },
        "835-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.pageTap(e);
            }
        },
        "835-3": {
            switchCourse: function() {
                var e = arguments[arguments.length - 1];
                this.switchCourse(e);
            },
            switchFilter: function() {
                var e = arguments[arguments.length - 1];
                this.switchFilter(e);
            }
        },
        "835-5": {
            onFilter: function() {
                var e = arguments[arguments.length - 1];
                this.onFilter("class", e);
            },
            openFilter: function() {
                var e = arguments[arguments.length - 1];
                this.openFilter(e);
            },
            confirmFilter: function() {
                var e = arguments[arguments.length - 1];
                this.confirmFilter(e);
            }
        },
        "835-8": {
            onFilter: function() {
                var e = arguments[arguments.length - 1];
                this.onFilter("personal", e);
            }
        },
        "835-9": {
            onFilter: function() {
                var e = arguments[arguments.length - 1];
                this.onFilter("camp", e);
            }
        },
        "835-10": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});