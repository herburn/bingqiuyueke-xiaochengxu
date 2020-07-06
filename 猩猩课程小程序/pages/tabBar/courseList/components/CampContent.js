var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../../tmp/index.js")), _reduxPlugin = require("./../../../../plugins/redux/index.js"), R = _interopRequireWildcard(require("./../../../../vendor.js")(320)), _thread = require("./../../../../utils/thread.js"), _CampFilter = _interopRequireDefault(require("./js/CampFilter.js"));

function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
        i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r];
    }
    return e.default = t, e;
}

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
}

function asyncGeneratorStep(t, e, r, i, n, a, s) {
    try {
        var o = t[a](s), c = o.value;
    } catch (t) {
        return void r(t);
    }
    o.done ? e(c) : Promise.resolve(c).then(i, n);
}

function _asyncToGenerator(o) {
    return function() {
        var t = this, s = arguments;
        return new Promise(function(e, r) {
            var i = o.apply(t, s);
            function n(t) {
                asyncGeneratorStep(i, e, r, n, a, "next", t);
            }
            function a(t) {
                asyncGeneratorStep(i, e, r, n, a, "throw", t);
            }
            n(void 0);
        });
    };
}

function ownKeys(e, t) {
    var r = Object.keys(e);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(e)), 
    t && (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(r, !0).forEach(function(t) {
            _defineProperty(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

function _defineProperty(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var reduce = R.reduce, propOr = R.propOr, concat = R.concat, any = R.any, pluck = R.pluck;

_core.default.component({
    name: "CampContent",
    props: {
        tagList: {
            type: Array,
            default: []
        }
    },
    _curScrollTop: 0,
    _campFilter: null,
    data: {
        showCampFilter: !1,
        compsVisibility: "hidden",
        campIds: [],
        tagFilter: [],
        camps: [],
        onlineCamps: []
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        currentCampCity: function(t) {
            return this.$store.selectors.getCampCurrentCity(t) || "";
        },
        currentGlobalCity: function(t) {
            return this.$store.selectors.getCurrentCity(t) || "";
        },
        tagsMap: function(t) {
            return this.$store.selectors.getCampTags(t) || {};
        },
        hasShowedNewCampStatus: function(t) {
            return this.$store.selectors.getNewCampStatusOnCamp(t, this.currentGlobalCity);
        }
    }), {
        cityTags: function() {
            return this.tagsMap.cityTagMap[this.currentGlobalCity] || [];
        },
        cityCampIds: function() {
            return this.tagsMap.cityTagCampIdMap[this.currentGlobalCity] || [];
        },
        hasScheduleCamps: function() {
            return this.camps.filter(function(t) {
                return 0 < t.scheduleCount;
            });
        },
        emptyScheduleCamps: function() {
            return this.camps.filter(function(t) {
                return 0 === t.scheduleCount;
            });
        },
        isShowNewCampTip: function() {
            return !this.hasShowedNewCampStatus && any(function(t) {
                return 1 <= t.newScheduleCount;
            })(this.camps || []);
        },
        currentSelectedTags: function() {
            return pluck("value")(this.tagFilter.filter(function(t) {
                return t.isActive;
            }));
        },
        campIds: function() {
            var r = this;
            return reduce(function(t, e) {
                return concat(t, propOr([], e)(r.cityCampIds));
            }, [])(this.currentSelectedTags);
        }
    }),
    methods: {
        handleReload: function() {
            this._fetchData();
        },
        handleRoute: function(t) {
            var e = t.page, r = t.data;
            this.$router.navigateTo({
                page: e,
                data: r
            });
        },
        onFilterChange: function(t) {
            switch (t.eventType) {
              case "clear":
                (function() {
                    this._campFilter.clean(), this._setFilterData();
                }).call(this);
                break;

              case "tab":
                break;

              case "confirm":
                (function() {
                    this.showCampFilter = !1, this._campFilter.stash(), this._initList(), this.$emit("onFilter", {
                        isFilter: this._campFilter.isFilterActive
                    });
                }).call(this);
                break;

              case "mask":
                (function() {
                    return e.apply(this, arguments);
                }).call(this);
            }
            function e() {
                return (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
                    return _regeneratorRuntime2.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return this.showCampFilter = !1, t.next = 3, (0, _thread.sleep)(300);

                          case 3:
                            this._campFilter.unStash(), this._setFilterData();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }))).apply(this, arguments);
            }
        },
        onItemTap: function(t) {
            var e = t.label, r = t.value, i = t.isActive;
            this._campFilter.selectTag({
                label: e,
                value: r,
                isActive: i
            }), this._setFilterData();
        },
        goOnlineCourse: function() {
            var t = this;
            this.$showModal({
                title: "提示",
                content: "将切换到线上课程频道，确定\n切换吗？",
                confirmText: "确定",
                cancelText: "点错了",
                isShowCancel: !0,
                success: function() {
                    t.$store.dispatch(t.$store.actions.updateAppClassType("onlineClass")), wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                }
            });
        }
    },
    extraEvents: {
        switchCourse: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t(e) {
                var r, i;
                return _regeneratorRuntime2.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (i = function() {
                            this._campFilter.clean(), this._setFilterData();
                        }, r = e.city, this.currentCampCity) {
                            t.next = 5;
                            break;
                        }
                        return t.next = 5, this._fetchData(r);

                      case 5:
                        r !== this.currentCampCity && this._campFilter && i.call(this), r && this.$store.dispatch(this.$store.actions.setCurrentCity(r)), 
                        this._initCampFilter({
                            tagList: this.tagList
                        }), this._setFilterData(), this._initList(), this.compsVisibility = "visible", this.$emit("onFilter", {
                            isFilter: this._campFilter.isFilterActive
                        }), this.$store.dispatch(this.$store.actions.setNewCampShowOnNavBarStatus({
                            city: r,
                            flag: !1
                        })), 0 < this._curScrollTop && wx.pageScrollTo({
                            scrollTop: this._curScrollTop,
                            duration: 0
                        });

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }(),
        onPullDownRefresh: function() {
            this._fetchData(this.currentGlobalCity);
        },
        switchFilter: function() {
            this.showCampFilter = !0, this._setFilterData();
        },
        onPageScroll: function(t) {
            var e = t.scrollTop;
            this._curScrollTop = e;
        }
    },
    _fetchData: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
            var e, r = arguments;
            return _regeneratorRuntime2.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return e = 0 < r.length && void 0 !== r[0] ? r[0] : "", wx.showLoading({
                        mask: !0
                    }), t.prev = 2, t.next = 5, this.$store.dispatch(this.$store.actions.getCampList(e));

                  case 5:
                    this._initList(), t.next = 11;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(2), this.$failLoading(t.t0.msg);

                  case 11:
                    return t.prev = 11, wx.stopPullDownRefresh(), this.$hideLoading(), t.finish(11);

                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 8, 11, 15 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    _initCampFilter: function(t) {
        var e = (0 < arguments.length && void 0 !== t ? t : {}).tagList;
        this._campFilter ? this._campFilter.update({
            tags: this.cityTags,
            selectedCity: this.currentGlobalCity,
            selectedTags: e.length ? _toConsumableArray(e) : this.currentSelectedTags
        }) : this._campFilter = new _CampFilter.default({
            tags: this.cityTags,
            selectedCity: this.currentGlobalCity,
            selectedTags: _toConsumableArray(e)
        });
    },
    _initList: function() {
        var t = this.$store.getState(), e = this.$store.selectors, r = e.getCamps, i = e.getCampIndexOnlineCampList;
        this.camps = r(t, this.currentGlobalCity, this.campIds), this.onlineCamps = i(t, this.currentGlobalCity);
    },
    _setFilterData: function() {
        var t = this._campFilter.filterInfo.tags;
        this.tagFilter = t;
    }
}, {
    info: {
        components: {
            "camp-card": {
                path: "./../../../../components/camp/CampListCard"
            },
            "img-tip": {
                path: "./../../../../components/common/other/ImgTip"
            },
            "camp-list-popover-filter": {
                path: "./CampListPopoverFilter"
            }
        },
        on: {
            "1031-2": [ "changeFilter", "tapItem" ]
        }
    },
    handlers: {
        "1031-0": {
            tap: function() {
                var t = this;
                t.handleRoute({
                    page: "NewArrivalCampList",
                    data: {
                        city: t.currentGlobalCity
                    }
                });
            }
        },
        "1031-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.goOnlineCourse(t);
            }
        },
        "1031-2": {
            changeFilter: function() {
                var t = arguments[arguments.length - 1];
                this.onFilterChange(t);
            },
            tapItem: function() {
                var t = arguments[arguments.length - 1];
                this.onItemTap(t);
            }
        }
    },
    models: {},
    refs: void 0
});