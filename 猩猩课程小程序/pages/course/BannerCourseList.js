var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _reduxPlugin = require("./../../plugins/redux/index.js"), _ramda = require("./../../vendor.js")(320), _debounceThrottle = require("./../../utils/debounce-throttle.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, i, r, o, n, a) {
    try {
        var s = e[n](a), c = s.value;
    } catch (e) {
        return void i(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(r, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, i) {
            var r = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(r, t, i, o, n, "next", e);
            }
            function n(e) {
                asyncGeneratorStep(r, t, i, o, n, "throw", e);
            }
            o(void 0);
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

var defaultCity, splitEnrich = (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)([]), (0, 
_ramda.split)("|")), defaultType = "class";

_core.default.page({
    name: "BannerCourseList",
    _doubleTap: !1,
    _scrollTop: 0,
    _citySaved: "",
    _isNovice: 0,
    data: {
        isShowTooltipBackHome: !1,
        courseSelectedNavTop: 0,
        selectedValue: defaultType,
        isFilterActive: !1,
        courses: [ {
            label: "团课",
            value: "class"
        } ],
        courseNavMap: {
            class: {
                isFilterActive: !1,
                city: ""
            },
            personal: {
                isFilterActive: !1,
                city: ""
            },
            camp: {
                isFilterActive: !1,
                city: ""
            }
        },
        filterInfo: {
            categoryInfo: null,
            citiesBoxIds: null,
            durationInfo: null,
            week: null,
            fixedDate: null
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        currentCity: function(e) {
            return this.$store.selectors.getCurrentCity(e);
        }
    })),
    beforeRouteLeave: function(e, t, i) {
        this.isShowTooltipBackHome = !1, i();
    },
    onLoad: function(e) {
        var t, i = this, r = e.courseType, o = void 0 === r ? defaultType : r, n = e.city, a = e.boxId, s = e.citiesBoxes, c = e.target, l = e.type, u = e.firstTypeName, d = e.allFirstTypeName, h = e.classId, p = e.duration, f = e.week, m = e.fixedDate, y = e.isNovice;
        this._isNovice = +y, this._showBackHomeModal(), this._stashCurrentCity(), defaultCity || (defaultCity = n || this.currentCity, 
        [ "class", "personal", "camp" ].forEach(function(e) {
            return i.courseNavMap[e].city = defaultCity;
        })), n && (this.courseNavMap[o].city = n, defaultCity = n), this.selectedValue = o, 
        this.courseSelectedNavTop = this.$app.globalData.navigatorFullHeightPx, this.filterInfo.categoryInfo = function(e) {
            var t = e.target, i = e.type, r = e.firstTypeName, o = e.classId, n = e.allFirstTypeName;
            if (!(t || i || r || o)) return null;
            if (o) return {
                classIds: (0, _ramda.pipe)((0, _ramda.split)("|"), (0, _ramda.map)(Number))(o)
            };
            if (r || n) return {
                firstTypeNames: splitEnrich(r),
                allFirstTypeNames: splitEnrich(n)
            };
            return {
                targetNames: splitEnrich(t),
                typeNames: splitEnrich(i)
            };
        }({
            target: c,
            type: l,
            firstTypeName: u,
            classId: h,
            allFirstTypeName: d
        }), this.filterInfo.citiesBoxIds = function(e) {
            var t = e.city, i = e.boxId, r = e.citiesBoxes;
            if (!i && !r) return null;
            if (i) return [ {
                city: t,
                boxIds: (0, _ramda.split)("|")(i)
            } ];
            var o = (0, _ramda.evolve)({
                boxIds: (0, _ramda.pipe)((0, _ramda.split)("_"), (0, _ramda.reject)((0, _ramda.equals)("ALL")), (0, 
                _ramda.map)(Number))
            }), n = (0, _ramda.pipe)((0, _ramda.split)("-"), (0, _ramda.zipObj)([ "city", "boxIds" ]), o);
            return (0, _ramda.pipe)((0, _ramda.split)("|"), (0, _ramda.map)(n))(r);
        }({
            city: defaultCity,
            boxId: a,
            citiesBoxes: s
        }), this.filterInfo.durationInfo = (t = {
            duration: p
        }.duration) ? {
            durationsList: (0, _ramda.pipe)((0, _ramda.split)("|"), (0, _ramda.map)((0, _ramda.split)("-")))(t)
        } : null, this.filterInfo.week = Number(f) || null, this.filterInfo.fixedDate = m || null;
    },
    onReady: function() {
        this._switchCourse(!0);
    },
    onUnload: function() {
        this._unStashCurrentCity();
    },
    onPageScroll: function(e) {
        var t = e.scrollTop;
        this._onPageScroll({
            scrollTop: t
        });
    },
    methods: {
        itemClickFilter: function() {},
        confirmFilter: function() {},
        openFilter: function() {},
        handleReload: function() {
            this._onPullDownRefresh();
        },
        switchCourse: function(e) {
            var t = e.value;
            this.selectedValue = t, this._switchCourse();
        },
        switchFilter: function() {
            this._handleInvokeChild("switchFilter");
        },
        onFilter: function(e) {
            var t = e.isFilter, i = void 0 !== t && t, r = e.city;
            this.courseNavMap[this.selectedValue].isFilterActive = i, this.courseNavMap[this.selectedValue].city = r;
        }
    },
    _onPullDownRefresh: function() {
        this._handleInvokeChild("onPullDownRefresh");
    },
    _onPageScroll: (0, _debounceThrottle.throttle)(function(e) {
        var t = e.scrollTop;
        this._scrollTop = t, this.$invokeChild("stickyCourseNav", "updateScrollTop", t), 
        this._handleInvokeChild("onPageScroll", {
            scrollTop: t
        });
    }, 40),
    _switchCourse: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, i = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t = 0 < i.length && void 0 !== i[0] && i[0], this._handleInvokeChild("switchCourse", {
                        city: this.courseNavMap[this.selectedValue].city,
                        forceRefresh: t
                    });

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _handleInvokeChild: function(e, t) {
        var i = 1 < arguments.length && void 0 !== t ? t : null;
        "class" === this.selectedValue && this.$invokeChild(this._elementIdMap.CLASS_LIST, e, i);
    },
    _stashCurrentCity: function() {
        this._citySaved = this.currentCity;
    },
    _unStashCurrentCity: function() {
        this.$store.dispatch(this.$store.actions.updateCurrentCity(this._citySaved)), this.$store.dispatch(this.$store.actions.updateClassCurrentCity(this._citySaved));
    },
    _showBackHomeModal: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (1 === this._isNovice) return e.next = 3, this.$sleep(3e4);
                    e.next = 7;
                    break;

                  case 3:
                    return this.isShowTooltipBackHome = !0, e.next = 6, this.$sleep(15e3);

                  case 6:
                    this.isShowTooltipBackHome = !1;

                  case 7:
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
            "unauthorized-msg": {
                path: "./../../components/subscribeMsg/ModalUnauthorizedMsg"
            },
            "reject-msg": {
                path: "./../../components/subscribeMsg/ModalRejectMsg"
            },
            "modal-subscribe-msg-guide1": {
                path: "./../../components/subscribeMsg/ModalSubscribeMsgGuide1"
            },
            "modal-subscribe-msg-guide2": {
                path: "./../../components/subscribeMsg/ModalSubscribeMsgGuide2"
            },
            "class-content-filter": {
                path: "./../../components/class/ClassListWithFilter"
            },
            "page-loading": {
                path: "./../../components/common/loading/LoadingPage"
            },
            "show-toast": {
                path: "./../../components/common/feedback/Toast"
            },
            "show-modal": {
                path: "./../../components/common/feedback/Modal"
            },
            "show-add-wechat-modal": {
                path: "./../../components/common/feedback/ModalAddWeChat"
            },
            "register-user": {
                path: "./../../components/common/feedback/ModalRegisterUser"
            },
            "show-action-sheet": {
                path: "./../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../components/common/dataEntry/PickerView"
            },
            "tooltip-back-home": {
                path: "./../../components/common/feedback/TooltipBackHome"
            },
            "navigator-bar": {
                path: "./../../components/common/navigation/NavigatorBar"
            },
            "course-selected-navbar": {
                path: "./../../components/common/navigation/NavbarPageList"
            },
            "sticky-wrapper": {
                path: "./../../components/common/enrichment/WrapperSticky"
            }
        },
        on: {
            "838-0": [ "switchCourse", "switchFilter" ],
            "838-2": [ "onFilter", "itemClickFilter", "confirmFilter", "openFilter" ],
            "838-6": [ "reload" ]
        }
    },
    handlers: {
        "838-0": {
            switchCourse: function() {
                var e = arguments[arguments.length - 1];
                this.switchCourse(e);
            },
            switchFilter: function() {
                var e = arguments[arguments.length - 1];
                this.switchFilter(e);
            }
        },
        "838-2": {
            onFilter: function() {
                var e = arguments[arguments.length - 1];
                this.onFilter(e);
            },
            itemClickFilter: function() {
                var e = arguments[arguments.length - 1];
                this.itemClickFilter(e);
            },
            confirmFilter: function() {
                var e = arguments[arguments.length - 1];
                this.confirmFilter(e);
            },
            openFilter: function() {
                var e = arguments[arguments.length - 1];
                this.openFilter(e);
            }
        },
        "838-6": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});