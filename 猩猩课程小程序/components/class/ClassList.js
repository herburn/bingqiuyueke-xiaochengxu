var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), R = _interopRequireWildcard(require("./../../vendor.js")(320)), _reduxPlugin = require("./../../plugins/redux/index.js"), _screen = require("./../../utils/screen.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
        r.get || r.set ? Object.defineProperty(t, i, r) : t[i] = e[i];
    }
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, t) {
    var i = [], r = !0, n = !1, o = void 0;
    try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (i.push(a.value), 
        !t || i.length !== t); r = !0) ;
    } catch (e) {
        n = !0, o = e;
    } finally {
        try {
            r || null == s.return || s.return();
        } finally {
            if (n) throw o;
        }
    }
    return i;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

function asyncGeneratorStep(e, t, i, r, n, o, a) {
    try {
        var s = e[o](a), h = s.value;
    } catch (e) {
        return void i(e);
    }
    s.done ? t(h) : Promise.resolve(h).then(r, n);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, i) {
            var r = s.apply(e, a);
            function n(e) {
                asyncGeneratorStep(r, t, i, n, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(r, t, i, n, o, "throw", e);
            }
            n(void 0);
        });
    };
}

function ownKeys(t, e) {
    var i = Object.keys(t);
    return Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(t)), 
    e && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(i, !0).forEach(function(e) {
            _defineProperty(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
    }
    return t;
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var repeat = R.repeat, scan = R.scan, zip = R.zip, pipe = R.pipe, tail = R.tail, init = R.init, add = R.add, converge = R.converge, map = R.map, nth = R.nth, indexOf = R.indexOf, lastIndexOf = R.lastIndexOf, flip = R.flip, head = R.head, last = R.last, nthFlip = flip(nth), layoutRpx = {
    weekNavbarHeight: 143,
    noBoxHeaderSwiperMarginTop: 24,
    subscribeNoticeHeight: 96,
    noviceBannerHeight: 192,
    bannerHeight: 192,
    swiperPaddingBottom: 48,
    boxHeaderHeight: 96,
    scheduleHeight: 168,
    boxEmptyHeight: 168,
    boxPromotionHeight: 168,
    classPromotionHeight: 168
}, layoutPx = null;

_core.default.component({
    name: "ClassList",
    props: {
        isShowHeader: {
            type: Boolean,
            default: !0
        },
        isShowFav: {
            type: Boolean,
            default: !1
        },
        isAllowTrainerNavigate: {
            type: Boolean,
            default: !0
        },
        topPx: {
            type: Number,
            default: 0
        },
        reachBottomCount: {
            type: Number,
            default: 0
        },
        swiperIndex: {
            type: Number,
            default: 0
        },
        weeks: {
            type: Array,
            default: []
        },
        weekMode: {
            type: String,
            default: "week"
        },
        dateBoxesSchedulesList: {
            type: Array,
            default: []
        },
        swiperItemsHeightPx: {
            type: Array,
            default: []
        },
        swiperItemsBoxesListShow: {
            type: Array,
            default: []
        },
        swiperItemsBeforeHeight: {
            type: Array,
            default: []
        },
        classBannerPromotion: {
            type: Array,
            default: []
        },
        classBoxPromotionMap: {
            type: Object,
            default: {}
        },
        classPromotionMap: {
            type: Object,
            default: {}
        },
        from: {
            type: String,
            default: ""
        },
        trainerUserId: {
            type: String,
            default: ""
        },
        swiperItemCampHeightPx: {
            type: Number,
            default: ""
        },
        campSchedules: {
            type: Array,
            default: []
        },
        profile: {
            type: Object,
            default: {}
        },
        pageName: {
            type: String,
            default: ""
        }
    },
    _windowHeight: 0,
    _weeksIsReachBottom: null,
    _weeksScrollTop: null,
    _campNavbarIndex: -1,
    data: {
        isShowNoviceBanner: !1,
        isNovice: !1,
        isShowSubscribeNotice: !1,
        queryFinish: !1,
        weekIndex: 0,
        subscribeNoticeHeight: 0
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        subscribeMap: function(e) {
            return this.$store.selectors.getClassScheduleSubscribeMap(e);
        }
    }), {
        swiperItemHeightPx: function() {
            var e = this.isShowCampItem && this.swiperIndex === this._campNavbarIndex ? this.swiperItemCampHeightPx : this.swiperItemsHeightPx[this.weekIndex] + this.subscribeNoticeHeight;
            return 0 < e ? e : 1e3;
        },
        isShowCampItem: function() {
            return "all" === this.weekMode || "camp" === this.weekMode;
        }
    }),
    watch: {
        topPx: function() {
            this._rejectSwiperHeightPx = this.topPx + layoutPx.weekNavbarHeight, this._defaultSwiperHeightPx = this._windowHeight - this._rejectSwiperHeightPx - layoutPx.swiperPaddingBottom - (this.isShowHeader ? 0 : layoutPx.noBoxHeaderSwiperMarginTop);
        },
        weeks: function(e) {
            this._weeksIsReachBottom = repeat(!1, this.weeks.length), this._weeksScrollTop = repeat(0, this.weeks.length), 
            this._campNavbarIndex = e.length, "online" === this.from && (this.swiperIndex = -1, 
            this.swiperIndex = this.weeks.length, this.weekIndex = this.weeks.length);
        },
        swiperItemsHeightPx: function() {
            var e = this.weekIndex;
            this.weekIndex = -1, this.weekIndex = e;
        }
    },
    attached: function() {
        this._windowHeight = wx.getSystemInfoSync().windowHeight, null === layoutPx && (layoutPx = map(_screen.floorRpx2Px)(layoutRpx)), 
        "CourseList" === this.$root.name && (this.isShowSubscribeNotice = !0, this.subscribeNoticeHeight = layoutPx.subscribeNoticeHeight);
    },
    show: function() {
        (function() {
            var e = this.$store.selectors.getIsNovice(this.$store.getState());
            "CourseList" === this.$root.name ? this.isShowNoviceBanner = e : "BannerCourseList" === this.$root.name && (this.isNovice = e);
        }).call(this);
    },
    ready: function() {
        this._getEntryHeight();
    },
    methods: {
        switchWeek: function(e) {
            var t = e.index;
            this.swiperIndex = -1, this.swiperIndex = t;
        },
        switchSwiper: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var i;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return i = t.$wx.detail.current, this.weekIndex = i, this._weeksIsReachBottom[this.weekIndex] = !1, 
                        this.$forceUpdate(), e.next = 6, this.$nextTick();

                      case 6:
                        this.$emit("onChangeSwiper", {
                            current: i
                        });

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        tapCamp: function() {
            this.swiperIndex = -1, this.swiperIndex = this._campNavbarIndex;
        },
        tapPersonal: function() {
            this.$emit("onTapPersonal");
        }
    },
    extraEvents: {
        onPageScroll: function(e) {
            if (null !== this._weeksScrollTop) {
                this._weeksScrollTop[this.weekIndex] = e, this.$invokeChild("stickyWeekNavbar", "updateScrollTop", e);
                var t = this.swiperItemsHeightPx[this.weekIndex] - (this._defaultSwiperHeightPx + e) <= this.reachBottomCount * layoutPx.scheduleHeight;
                t && !1 === this._weeksIsReachBottom[this.weekIndex] && this.$emit("onReachBottom"), 
                this._weeksIsReachBottom[this.weekIndex] = t;
            }
        },
        getSwiperItemsHeight: function(e) {
            for (var t = e.height, i = e.boxesSchedules, r = e.boxIndex, n = e.classBoxPromotionMap, o = void 0 === n ? {} : n, a = e.classPromotionMap, s = void 0 === a ? {} : a, h = function(e) {
                return !!o[e] * layoutPx.boxPromotionHeight;
            }, c = function(e) {
                return !!s[e] * layoutPx.classPromotionHeight;
            }, l = {
                totalHeight: 0,
                rawHeight: 0,
                boxesHeight: []
            }, u = 0; u < i.length; u++) {
                var p = i[u], d = p.boxInfo.boxId, f = p.schedules;
                l.boxesHeight[u] = this.isShowHeader ? layoutPx.boxHeaderHeight : 0;
                var w = h("NONE") + h(r + u) + h(d) + c("NONE") + c(r + u) + c(d) + f.length * layoutPx.scheduleHeight;
                l.boxesHeight[u] += w || layoutPx.boxEmptyHeight, l.rawHeight += l.boxesHeight[u];
            }
            return l.rawHeight += 0 === t && this.isShowNoviceBanner ? layoutPx.noviceBannerHeight : 0, 
            l.rawHeight += 0 === t && 0 < this.classBannerPromotion.length && !this.isShowNoviceBanner ? layoutPx.bannerHeight : 0, 
            l.totalHeight = Math.max(t + l.rawHeight, this._defaultSwiperHeightPx), l;
        },
        getBoxesShowStatus: function(e) {
            var t = e.curScrollTop, i = e.boxesHeightPx, r = e.boxesSchedulesList, n = t - 2 * this._defaultSwiperHeightPx, o = t + 3 * this._defaultSwiperHeightPx, a = pipe(scan(add, 0), converge(zip, [ init, tail ]))(i), s = map(function(e) {
                var t = _slicedToArray(e, 2), i = t[0];
                return !(t[1] < n || o < i);
            })(a);
            return {
                boxesListShow: function(e, t) {
                    for (var i = [], r = 0, n = 0; n < t.length; n++) {
                        var o = t[n].boxesSchedules;
                        i[n] = [];
                        for (var a = 0; a < o.length; a++) i[n][a] = void 0 === e[r] || e[r], r++;
                    }
                    return i;
                }(s, r),
                beforeHeight: pipe(indexOf(!0), nthFlip(a), head)(s),
                afterHeight: last(last(a)) - pipe(lastIndexOf(!0), nthFlip(a), last)(s)
            };
        }
    },
    _getEntryHeight: function() {
        var i = this, r = this.$wx.createIntersectionObserver({
            thresholds: [ 1 ]
        }), n = this.$wx.createIntersectionObserver({
            thresholds: [ 1 ]
        });
        r.relativeToViewport({
            top: 0,
            bottom: 0
        }).observe("#box-header", function(e) {
            var t = e.boundingClientRect.height;
            layoutPx.boxHeaderHeight = t, r.disconnect();
        }), n.relativeToViewport({
            top: 0,
            bottom: 0
        }).observe("#class-entry", function(e) {
            var t = e.boundingClientRect.height;
            layoutPx.scheduleHeight = t, layoutPx.boxEmptyHeight = t, layoutPx.boxPromotionHeight = t, 
            layoutPx.classPromotionHeight = t, i.queryFinish = !0, n.disconnect();
        });
    }
}, {
    info: {
        components: {
            "camp-item": {
                path: "./../onlineCamp/OnlineCampItem"
            },
            "sticky-wrapper": {
                path: "./../common/enrichment/WrapperSticky"
            },
            banner: {
                path: "./../common/other/BannerTop"
            },
            "subscribe-notice": {
                path: "./ClassListSubscribeNotice"
            },
            "novice-banner": {
                path: "./ClassListBannerNovice"
            },
            "class-day": {
                path: "./ClassListDay"
            },
            "trainer-camp-list": {
                path: "./ClassListTrainerCamp"
            },
            "week-navbar": {
                path: "./../common/navigation/NavbarWeek"
            }
        },
        on: {
            "1183-0": [ "switchWeek", "onTapCamp", "onTapPersonal" ]
        }
    },
    handlers: {
        "1183-0": {
            switchWeek: function() {
                var e = arguments[arguments.length - 1];
                this.switchWeek(e);
            },
            onTapCamp: function() {
                var e = arguments[arguments.length - 1];
                this.tapCamp(e);
            },
            onTapPersonal: function() {
                var e = arguments[arguments.length - 1];
                this.tapPersonal(e);
            }
        },
        "1183-3": {
            change: function() {
                var e = arguments[arguments.length - 1];
                this.switchSwiper(e);
            }
        }
    },
    models: {},
    refs: void 0
});