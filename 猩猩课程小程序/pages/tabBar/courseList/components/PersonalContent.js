var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../../tmp/index.js")), _reduxPlugin = require("./../../../../plugins/redux/index.js"), R = _interopRequireWildcard(require("./../../../../vendor.js")(320)), _PersonalFilter = _interopRequireDefault(require("./js/PersonalFilter.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r];
    }
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, i, s, a, n) {
    try {
        var o = e[a](n), l = o.value;
    } catch (e) {
        return void r(e);
    }
    o.done ? t(l) : Promise.resolve(l).then(i, s);
}

function _asyncToGenerator(o) {
    return function() {
        var e = this, n = arguments;
        return new Promise(function(t, r) {
            var i = o.apply(e, n);
            function s(e) {
                asyncGeneratorStep(i, t, r, s, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(i, t, r, s, a, "throw", e);
            }
            s(void 0);
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

var map = R.map, ALLCITY = "全城", ALLTAG = "全部";

_core.default.component({
    name: "PersonalContent",
    _city: "",
    _area: ALLCITY,
    __scrollTop: 0,
    _boxIds: [],
    _campIds: [],
    _boxNames: [ ALLTAG ],
    _campNames: [ ALLTAG ],
    _personalFilter: null,
    _closeFilterCb: null,
    data: {
        isShowFilter: !1,
        filterTabItems: [ {
            label: "门店",
            value: "box",
            isActive: !0,
            badgeNum: 0
        }, {
            label: "课程",
            value: "class",
            isActive: !1,
            badgeNum: 0
        } ],
        boxFilter: [],
        classFilter: [],
        tabNumInfo: {
            boxSelectedNum: 0,
            courseSelectedNum: 0
        },
        personalList: [],
        currentCity: "",
        imgSrc: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/page-status-icon/glass.png",
        ready: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isPersonalCity: function(e) {
            return this.$store.selectors.getIsPersonalCity(e, this.currentCity);
        }
    }), {
        isListEmpty: function() {
            return 0 === this.personalList.length;
        },
        emptyTipMsg: function() {
            return this.isPersonalCity ? "暂无内容" : "当前城市暂无私教，看看其他课程吧！";
        }
    }),
    watch: {},
    methods: {
        changeFilter: function(e) {
            var t = e.eventType, r = e.data;
            switch (t) {
              case "tab":
                this.filterTabItems = map(function(e) {
                    return _objectSpread({}, e, {
                        isActive: e.value === r.value
                    });
                })(this.filterTabItems);
                break;

              case "clear":
                this._personalFilter.clean();
                break;

              case "confirm":
                (function() {
                    this._closeFilterCb && this._closeFilterCb(), this._closeFilterCb = null, this.isShowFilter = !1, 
                    this._personalFilter.stash();
                    var e = this._personalFilter.filterResult, t = e.city, r = e.area, i = e.boxIds, s = e.campIds, a = e.boxNames, n = e.campNames, o = this._city;
                    this._city = t, this.currentCity = t, this._area = r, this._boxIds = i, this._campIds = s, 
                    this._boxNames = a, this._campNames = n, this._initListData();
                    var l = 0 < this.tabNumInfo.boxSelectedNum || 0 < this.tabNumInfo.courseSelectedNum;
                    this.$emit("onFilter", {
                        isFilter: l,
                        city: this._city
                    }), t !== o && this._fetchData(this.currentCity);
                }).call(this, r);
                break;

              case "mask":
                console.log("mask..."), this._personalFilter.unStash(), this._closeFilterCb && this._closeFilterCb(), 
                this._closeFilterCb = null, this.isShowFilter = !1;
            }
            this._updateFilterData();
        },
        tapItem: function(e) {
            var t = e.eventType, r = e.data;
            switch (t) {
              case "box":
                (function(e) {
                    switch (e.type) {
                      case "area":
                        this._personalFilter.selectArea(e);
                        break;

                      case "box":
                        this._personalFilter.selectBox(e);
                    }
                }).call(this, r);
                break;

              case "class":
                (function(e) {
                    "course" === e.type && this._personalFilter.selectCourse(e);
                }).call(this, r);
            }
            this._updateFilterData();
        },
        openMap: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, r, i, s, a, n, o = arguments;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = (t = 0 < o.length && void 0 !== o[0] ? o[0] : {}).latitude, i = t.longitude, 
                        s = t.boxname, a = t.address, n = t.addressGuide, this.$openMap({
                            latitude: r,
                            longitude: i,
                            boxname: s,
                            address: a,
                            addressGuide: n
                        });

                      case 3:
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
    extraEvents: {
        onPageScroll: function(e) {
            var t = e.scrollTop;
            this._scrollTop = t;
        },
        onPullDownRefresh: function() {
            this._fetchData(this.currentCity);
        },
        switchCourse: function(e) {
            var t = e.city;
            this._city = t, !this.isListEmpty && this.currentCity === t || (this._resetData(), 
            this.$emit("onFilter", {
                isFilter: !1,
                city: this._city
            }), this._fetchData(t)), this.currentCity = t, 0 < this._scrollTop && wx.pageScrollTo({
                scrollTop: this._scrollTop
            });
        },
        switchFilter: function() {
            this.isShowFilter = !0;
        }
    },
    _fetchData: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    wx.showLoading({
                        mask: !0
                    }), this.$store.dispatch(this.$store.actions.getPersonalList({
                        city: t
                    })).then(function() {
                        wx.stopPullDownRefresh(), wx.hideLoading(), r._initListData(), r._initClassFilter(), 
                        r._updateFilterData(), r.ready = !0;
                    }).catch(function(e) {
                        console.log("getPersonalList error", e), r._personalFilter = null, r.ready = !0, 
                        r.$failLoading();
                    });

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _initClassFilter: function() {
        var e = this.$store.getState(), t = this.$store.selectors, r = t.getPersonalBoxAreaInfo, i = t.getPersonalCamps;
        this._personalFilter ? this._personalFilter.update({
            boxData: r(e),
            coursesData: i(e),
            filterInfo: {
                city: this._city,
                area: this._area,
                boxNames: this._boxNames,
                campNames: this._campNames
            }
        }) : this._personalFilter = new _PersonalFilter.default({
            boxData: r(e),
            coursesData: i(e)
        });
    },
    _updateFilterData: function() {
        var e = this._personalFilter.filterInfo, t = e.tabBoxes, r = e.tabCourses, i = e.tabNumInfo;
        this.tabNumInfo = i, this.filterTabItems[0].badgeNum = i.boxSelectedNum, this.filterTabItems[1].badgeNum = i.courseSelectedNum, 
        this.boxFilter = [ [ {
            title: "地区",
            items: t.areas
        } ], [ {
            title: "选择门店(可多选)",
            items: t.boxes
        } ] ], this.classFilter = [ r, [] ];
    },
    _initListData: function() {
        var e = this.$store.getState(), t = this.$store.selectors, r = t.getPersonalScheduleList, i = t.getPersonalListCurrentCity;
        "" === this._city && (this._city = i(e)), this.personalList = r(e, this._city, this._area, this._boxIds, this._campIds);
    },
    _resetData: function() {
        this._boxIds = [], this._campIds = [], this._area = ALLCITY, this._boxNames = [ ALLTAG ], 
        this._campNames = [ ALLTAG ];
    }
}, {
    info: {
        components: {
            "img-tip": {
                path: "./../../../../components/common/other/ImgTip"
            },
            "personal-filter": {
                path: "./PersonalFilter"
            },
            "personal-class-entry": {
                path: "./../../../../components/personal/PersonalListEntity"
            },
            "new-personal-user-prompt": {
                path: "./../../../../components/personal/PersonalFloatingActionButtonNewUser"
            },
            "select-column-three": {
                path: "./../../../../components/common/combination/SelectColumnThree"
            }
        },
        on: {
            "1030-1": [ "tapItem", "changeFilter" ]
        }
    },
    handlers: {
        "1030-0": {
            tap: function(e) {
                this.openMap(e.boxInfo);
            }
        },
        "1030-1": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem(e);
            },
            changeFilter: function() {
                var e = arguments[arguments.length - 1];
                this.changeFilter(e);
            }
        }
    },
    models: {},
    refs: void 0
});