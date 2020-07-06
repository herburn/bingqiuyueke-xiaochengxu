var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _ramda = require("./../../vendor.js")(320), _screen = require("./../../utils/screen.js"), _reduxPlugin = require("./../../plugins/redux/index.js"), _constants = require("./../../constants/index.js"), _ClassFilter = _interopRequireDefault(require("./js/ClassFilter.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
        return s;
    }
}

function asyncGeneratorStep(e, t, s, i, r, a, n) {
    try {
        var o = e[a](n), l = o.value;
    } catch (e) {
        return void s(e);
    }
    o.done ? t(l) : Promise.resolve(l).then(i, r);
}

function _asyncToGenerator(o) {
    return function() {
        var e = this, n = arguments;
        return new Promise(function(t, s) {
            var i = o.apply(e, n);
            function r(e) {
                asyncGeneratorStep(i, t, s, r, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(i, t, s, r, a, "throw", e);
            }
            r(void 0);
        });
    };
}

function ownKeys(t, e) {
    var s = Object.keys(t);
    return Object.getOwnPropertySymbols && s.push.apply(s, Object.getOwnPropertySymbols(t)), 
    e && (s = s.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), s;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(s, !0).forEach(function(e) {
            _defineProperty(t, e, s[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : ownKeys(s).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
        });
    }
    return t;
}

function _defineProperty(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}

var scheduleStep = 10, lazyLoadPreCount = 7, courseSelectedNavbarHeight = 100;

_core.default.component({
    name: "ClassListWithFilter",
    props: {
        isShowFav: {
            type: Boolean,
            default: !1
        },
        isBanner: {
            type: Boolean,
            default: !1
        },
        filterTabs: {
            type: Array,
            default: [ {
                label: "课程",
                value: "class",
                status: "enable"
            }, {
                label: "门店",
                value: "box",
                status: "enable"
            }, {
                label: "时段",
                value: "duration",
                status: "enable"
            } ]
        },
        filterInfo: {
            type: Object,
            default: {
                categoryInfo: null,
                citiesBoxIds: null,
                durationInfo: null,
                week: null,
                fixedDate: null
            }
        }
    },
    _firstLoad: !0,
    _weekStates: null,
    _weekIndex: 0,
    _isLazyLoading: !1,
    _curScrollTop: 0,
    _swiperItemsBoxesHeightPx: null,
    _classFilter: null,
    data: {
        classListTopPx: 0,
        weeks: [],
        swiperIndex: 0,
        lazyLoadPreCount: lazyLoadPreCount,
        dateBoxesSchedulesList: [],
        bottomTextMode: "",
        swiperItemsHeightPx: [],
        swiperItemsBoxesListShow: [],
        swiperItemsBeforeHeight: [],
        isInitPromotionDone: !1,
        isShowFilter: !1,
        bannerCategoryFilter: {},
        bannerBoxFilter: {},
        bannerDurationFilter: {},
        bannerIsShowFinished: !1,
        bannerFilterTabValueSelected: "class",
        bannerFilterTabInfo: {},
        filterTabItems: [ {
            label: "课程",
            value: "class",
            isActive: !0,
            badgeNum: 0
        }, {
            label: "门店",
            value: "box",
            isActive: !1,
            badgeNum: 0
        }, {
            label: "时段",
            value: "duration",
            isActive: !1,
            badgeNum: 0
        } ],
        categoryFilter: [],
        boxFilter: [],
        durationFilter: []
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        currentCity: function(e) {
            return this.$store.selectors.getClassCurrentCity(e);
        },
        classBannerPromotion: function(e) {
            var t = this.$store.selectors.getClassBannerPromotion(e, this.currentCity);
            return this.isInitPromotionDone && !this.isBanner ? t : _objectSpread({}, t, {
                promotionMap: []
            });
        },
        classBoxPromotion: function(e) {
            var t = this.$store.selectors.getClassBoxPromotion(e);
            return this.isInitPromotionDone && !this.isBanner ? t : _objectSpread({}, t, {
                promotionMap: {}
            });
        },
        classPromotion: function(e) {
            var t = this.$store.selectors.getClassPromotion(e);
            return this.isInitPromotionDone && !this.isBanner ? t : _objectSpread({}, t, {
                promotionMap: {}
            });
        }
    })),
    show: function() {
        this._checkInitPromotionDone();
    },
    attached: function() {
        this.classListTopPx = this.$app.globalData.navigatorFullHeightPx + (0, _screen.floorRpx2Px)(courseSelectedNavbarHeight);
    },
    methods: {
        changeSwiper: function(e) {
            var t = e.current;
            this._weekIndex = t, this._changeSwiper(t);
        },
        lazyLoad: function() {
            if (!this._isLazyLoading) {
                this._isLazyLoading = !0;
                try {
                    this._loadDateBoxesSchedules(this._weekIndex);
                } catch (e) {
                    console.error("lazyLoad", e);
                } finally {
                    this._isLazyLoading = !1;
                }
            }
        },
        changeBannerFilter: function(e) {
            var t = e.eventType, s = e.data;
            switch (t) {
              case "itemClick":
                (function(e) {
                    var t = e.type, s = e.item;
                    switch (t) {
                      case "target":
                        this._classFilter.selectTarget(s);
                        break;

                      case "classType":
                        this._classFilter.selectType(s);
                        break;

                      case "class":
                        this._classFilter.selectFirstType(s);
                    }
                }).call(this, s), function(e) {
                    var t = e.type, s = e.item;
                    switch (t) {
                      case "city":
                        this._classFilter.selectCity(s);
                        break;

                      case "area":
                        this._classFilter.selectArea(s);
                        break;

                      case "box":
                        this._classFilter.selectBox(s);
                    }
                }.call(this, s), function(e) {
                    var t = e.type, s = e.item;
                    "duration" === t && this._classFilter.selectDuration(s);
                }.call(this, s), this.$emit("itemClickFilter", {
                    value: s.item.value
                });
                break;

              case "toggleShowEndClass":
                this._classFilter.selectIsShowFinished();
                break;

              case "tabChange":
                this.bannerFilterTabValueSelected = s.value;
                break;

              case "clear":
                this._classFilter.clean();
                break;

              case "confirm":
                this._triggerFilter(), this.isShowFilter = !1, this.$emit("confirmFilter", {
                    filter: {
                        targets: this._classFilter.targetsSelected,
                        types: this._classFilter.typesSelected,
                        firstTypes: this._classFilter.firstTypesSelected,
                        city: this._classFilter.citySelected,
                        area: this._classFilter.areaSelected,
                        boxes: this._classFilter.boxesSelected,
                        durations: this._classFilter.durationsSelected,
                        isShowFinished: this._classFilter.isShowFinished
                    }
                });
                break;

              case "maskClick":
                this._classFilter.unStash(), this.isShowFilter = !1;
            }
            function i() {
                return (i = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.currentCity === this._classFilter.citySelected) {
                                e.next = 8;
                                break;
                            }
                            if (this._getIsFetchedByClassCity(this._classFilter.citySelected)) return this._initListData(), 
                            e.next = 5, this.$sleep(1);
                            e.next = 5;
                            break;

                          case 5:
                            this._fetchData(this._classFilter.citySelected), e.next = 9;
                            break;

                          case 8:
                            this._initListData();

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }))).apply(this, arguments);
            }
            this._updateFilter(), "confirm" === t && function() {
                return i.apply(this, arguments);
            }.call(this);
        },
        changeFilter: function(e) {
            var t = e.eventType, s = e.data;
            switch (t) {
              case "tab":
                (function(e) {
                    var t = e.value, s = !0, i = !1, r = void 0;
                    try {
                        for (var a, n = this.filterTabItems[Symbol.iterator](); !(s = (a = n.next()).done); s = !0) {
                            var o = a.value;
                            o.isActive = o.value === t;
                        }
                    } catch (e) {
                        i = !0, r = e;
                    } finally {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (i) throw r;
                        }
                    }
                }).call(this, s);
                break;

              case "clear":
                this._classFilter.clean();
                break;

              case "confirm":
                this._triggerFilter(), this.isShowFilter = !1, this.$emit("confirmFilter", {
                    filter: {
                        targets: this._classFilter.targetsSelected,
                        types: this._classFilter.typesSelected,
                        firstTypes: this._classFilter.firstTypesSelected,
                        city: this._classFilter.citySelected,
                        area: this._classFilter.areaSelected,
                        boxes: this._classFilter.boxesSelected,
                        durations: this._classFilter.durationsSelected,
                        isShowFinished: this._classFilter.isShowFinished
                    }
                });
                break;

              case "mask":
                this._classFilter.unStash(), this.isShowFilter = !1;
            }
            this._updateFilter(), "confirm" === t && this._initListData();
        },
        tapItem: function(e, t) {
            switch (e) {
              case "category":
                (function(e) {
                    switch (e.type) {
                      case "target":
                        this._classFilter.selectTarget(e);
                        break;

                      case "type":
                        this._classFilter.selectType(e);
                        break;

                      case "firstTypeName":
                        this._classFilter.selectFirstType(e);
                    }
                }).call(this, t);
                break;

              case "box":
                (function(e) {
                    switch (e.type) {
                      case "area":
                        this._classFilter.selectArea(e);
                        break;

                      case "box":
                        this._classFilter.selectBox(e);
                    }
                }).call(this, t);
                break;

              case "duration":
                (function(e) {
                    "duration" === e.type ? this._classFilter.selectDuration(e) : this._classFilter.selectIsShowFinished(e);
                }).call(this, t);
            }
            this._updateFilter();
        }
    },
    extraEvents: {
        onPageScroll: function(e) {
            var t = e.scrollTop;
            null !== this._weekStates && (this.$invokeChild("classList", "onPageScroll", t), 
            this._curScrollTop = t, this._weekStates[this._weekIndex].scrollTop = t, function(e, t) {
                var s = this.$invokeChild("classList", "getBoxesShowStatus", {
                    curScrollTop: t,
                    boxesHeightPx: this._swiperItemsBoxesHeightPx[e],
                    boxesSchedulesList: this.dateBoxesSchedulesList[e].boxesSchedulesList
                }), i = s.boxesListShow, r = s.beforeHeight, a = this.swiperItemsBoxesListShow[e];
                if (a.length !== i.length || a.toString() !== i.toString()) {
                    for (var n = 0; n < i.length; n++) void 0 !== a[n] && a[n].toString() === i[n].toString() || this.swiperItemsBoxesListShow[e].splice(n, 1, i[n]);
                    this.swiperItemsBeforeHeight.splice(e, 1, r);
                }
            }.call(this, this._weekIndex, t));
        },
        onPullDownRefresh: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, wx.showLoading({
                            mask: !0
                        }), this._checkInitPromotionDone(), e.next = 5, this.$sleep(2e3 * Math.random());

                      case 5:
                        return e.next = 7, this._fetchData(this.currentCity);

                      case 7:
                        wx.stopPullDownRefresh(), e.next = 12;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(0);

                      case 12:
                        return e.prev = 12, wx.stopPullDownRefresh(), wx.hideLoading(), e.finish(12);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 10, 12, 16 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        switchCourse: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var s, i, r;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (s = t.city, i = t.forceRefresh, r = void 0 !== i && i, this._checkInitPromotionDone(), 
                        !this.currentCity || this.currentCity !== s || r) return e.next = 5, this._fetchData(s, r);
                        e.next = 7;
                        break;

                      case 5:
                        e.next = 20;
                        break;

                      case 7:
                        if (this._firstLoad) return wx.showLoading({
                            mask: !0
                        }), e.next = 11, this.$sleep(100);
                        e.next = 17;
                        break;

                      case 11:
                        return this._initData(), e.next = 14, this.$nextTick();

                      case 14:
                        wx.hideLoading(), e.next = 20;
                        break;

                      case 17:
                        return e.next = 19, this.$sleep(10);

                      case 19:
                        wx.pageScrollTo({
                            scrollTop: this._curScrollTop,
                            duration: 0
                        });

                      case 20:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        switchFilter: function() {
            this.isShowFilter = !0, this._classFilter.stash(), this.$emit("openFilter");
        }
    },
    _fetchData: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var s, i, r, a, n = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ((s = 1 < n.length && void 0 !== n[1] && n[1]) || !this._getIsFetchedByClassCity(t)) return s = !0, 
                    e.next = 5, this.$distribute({
                        fixedTime: [ 0, 66 ],
                        randomTime: [ 3e3, 96 ],
                        showText: function(e) {
                            return "课表下载中".concat(e, "%");
                        },
                        showLoading: function(e) {
                            return wx.showLoading({
                                title: e,
                                mask: !0
                            });
                        }
                    });
                    e.next = 7;
                    break;

                  case 5:
                    (i = e.sent) || wx.showLoading({
                        mask: !0
                    });

                  case 7:
                    return e.prev = 7, r = this.$store.dispatch(this.$store.actions.fetchClassSchedules({
                        city: t
                    })), a = this._fetchGetPromotionPositions([ _constants.CLASS_BANNER, _constants.CLASS_BEFORE_OPEN, _constants.CLASS_ADS ]), 
                    e.next = 12, Promise.all([ r, a ]);

                  case 12:
                    if (this._initData(), i) return wx.showLoading({
                        title: i,
                        mask: !0
                    }), e.next = 17, this.$sleep(500);
                    e.next = 17;
                    break;

                  case 17:
                    s && wx.hideLoading(), e.next = 23;
                    break;

                  case 20:
                    e.prev = 20, e.t0 = e.catch(7), this.$failLoading();

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 7, 20 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _fetchGetPromotionPositions: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var s, i;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (i = function(e) {
                        var t = (0, _constants.getPositionExtParams)(e);
                        e === _constants.CLASS_BEFORE_OPEN ? this.classBoxPromotion.isPositionActive && !this.classBoxPromotion.isRelateIdExist && s.push({
                            positionId: _constants.CLASS_BEFORE_OPEN,
                            ext: t
                        }) : e === _constants.CLASS_ADS ? this.classPromotion.isPositionActive && !this.classPromotion.isRelateIdExist && s.push({
                            positionId: _constants.CLASS_ADS,
                            ext: t
                        }) : e === _constants.CLASS_BANNER && this.classBannerPromotion.isPositionActive && !this.classBannerPromotion.isRelateIdExist && s.push({
                            positionId: _constants.CLASS_BANNER,
                            ext: t
                        });
                    }, s = [], t.forEach(i.bind(this)), 0 < s.length) return e.prev = 4, e.next = 7, 
                    this.$store.dispatch(this.$store.actions.getPromotionsByPositionId(s));
                    e.next = 11;
                    break;

                  case 7:
                    e.next = 11;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(4);

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 4, 9 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _checkInitPromotionDone: function() {
        var e = this.$store.selectors.getFetchStatus(this.$store.getState(), "promotionInitGet").status;
        this.isInitPromotionDone = e === _constants.FetchStatus.DONE;
    },
    _initData: function() {
        this._initClassFilter(), this._updateFilter(), this._initListData(), this._triggerFilter(), 
        this._firstLoad = !1;
    },
    _initClassFilter: function() {
        var e = this.$store.getState(), t = this.$store.selectors;
        function s(s, e) {
            var t = e.getClassTargetNames, i = e.getClassTypeNames, r = e.getFirstTypeNamesBySelected, a = e.getClassIdsByFirstTypes;
            return {
                targetNames: t(s),
                typeNames: i(s),
                getFirstTypeNamesBySelected: function(e, t) {
                    return r(s, _toConsumableArray(e), _toConsumableArray(t));
                },
                getClassIdsByFirstTypes: function(e, t) {
                    return a(s, e, _toConsumableArray(t));
                }
            };
        }
        function i(i, e) {
            var t = e.getClassCities, s = e.getClassAreasByCity, r = e.getClassBoxNamesByArea, a = e.getClassBoxIdsByNames, n = e.getClassCurrentCity, o = e.getBoxSmallById;
            return {
                cities: t(i),
                getAreasByCity: function(e) {
                    return s(i, e);
                },
                getBoxesByArea: function(e, t) {
                    return r(i, e, t);
                },
                getBoxIdsByName: function(e, t, s) {
                    return a(i, e, t, s);
                },
                getBoxSmallById: function(e) {
                    return o(i, e);
                },
                citySelected: n(i)
            };
        }
        function r() {
            return {};
        }
        this._classFilter ? this._classFilter.update({
            categoryData: s.call(this, e, t),
            boxData: i.call(this, e, t),
            durationData: r.call(this),
            filterInfo: this.filterInfo
        }) : this._classFilter = new _ClassFilter.default({
            categoryData: s.call(this, e, t),
            boxData: i.call(this, e, t),
            durationData: r.call(this),
            filterInfo: this.filterInfo
        });
    },
    _initListData: function() {
        (function() {
            var e = this.$store.getState();
            this.weeks = _toConsumableArray(this.$store.selectors.getClassDates(e)), function() {
                var e = this, t = this.filterInfo.fixedDate, s = this.filterInfo.week;
                if (t) {
                    var i = (this.filterInfo.fixedDate = null, _moment.default)(t), r = _moment.default.duration(i - (0, 
                    _moment.default)(this.weeks[0])).asDays();
                    0 < r && r <= 5 && (s = i.isoWeekday());
                }
                if (s) {
                    var a = (this.filterInfo.week = null, _ramda.findIndex)(function(e) {
                        return (0, _moment.default)(e).isoWeekday() === s;
                    })(this.weeks);
                    -1 !== a && this.$nextTick(function() {
                        return e._updateSwiperIndex(a);
                    });
                }
            }.call(this);
            var t = (0, _ramda.applySpec)({
                date: _ramda.identity,
                boxIndex: (0, _ramda.always)(0),
                scrollTop: (0, _ramda.always)(0)
            });
            this._weekStates = (0, _ramda.map)(t)(this.weeks);
        }).call(this), function() {
            this.dateBoxesSchedulesList = (0, _ramda.map)(function(e) {
                return {
                    date: e,
                    boxesSchedulesList: []
                };
            })(this.weeks), this.swiperItemsHeightPx = (0, _ramda.repeat)(0, this.weeks.length), 
            this._swiperItemsBoxesHeightPx = (0, _ramda.times)(function() {
                return [];
            }, this.weeks.length), this.swiperItemsBoxesListShow = (0, _ramda.times)(function() {
                return [];
            }, this.weeks.length), this.swiperItemsBeforeHeight = (0, _ramda.repeat)(0, this.weeks.length);
        }.call(this), this._changeSwiper(this._weekIndex);
    },
    _changeSwiper: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var s, i, r, a, n, o, l, c;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (s = [ [ 0, 1 ], [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5 ] ], 
                    r = !(i = !0), a = void 0, e.prev = 4, n = s[t][Symbol.iterator](); !(i = (o = n.next()).done); i = !0) l = o.value, 
                    0 === this._weekStates[l].boxIndex && this._loadDateBoxesSchedules(l);
                    e.next = 12;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(4), r = !0, a = e.t0;

                  case 12:
                    e.prev = 12, e.prev = 13, i || null == n.return || n.return();

                  case 15:
                    if (e.prev = 15, r) throw a;
                    e.next = 18;
                    break;

                  case 18:
                    return e.finish(15);

                  case 19:
                    return e.finish(12);

                  case 20:
                    c = this._weekStates[t].scrollTop, this._curScrollTop !== c && wx.pageScrollTo({
                        scrollTop: c,
                        duration: 0
                    });

                  case 22:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 4, 8, 12, 20 ], [ 13, , 15, 19 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    _loadDateBoxesSchedules: function(e) {
        var t = this._weekStates[e], s = t.date, i = t.boxIndex;
        if (i < this._getBoxIds(e).length) {
            var r = function(e, t, s) {
                var i = this.$store.getState(), r = this.$store.selectors.getBoxesSchedulesByFilter, a = {
                    classIdsFilter: this._classFilter.classIds,
                    durations: this._classFilter.period,
                    isShowFinished: this._classFilter.isShowFinished
                }, n = {
                    startBoxIndex: t,
                    scheduleCount: scheduleStep
                };
                return r(i, e, this._getBoxIds(s), a, n);
            }.call(this, s, i, e);
            this._weekStates[e].boxIndex += r.length, function(e, t, s) {
                var i = {
                    height: this.swiperItemsHeightPx[e],
                    boxesSchedules: t,
                    boxIndex: s,
                    classBoxPromotionMap: this.classBoxPromotion.promotionMap,
                    classPromotionMap: this.classPromotion.promotionMap
                }, r = this.$invokeChild("classList", "getSwiperItemsHeight", i);
                this.swiperItemsHeightPx.splice(e, 1, r.totalHeight), Array.prototype.push.apply(this._swiperItemsBoxesHeightPx[e], r.boxesHeight);
            }.call(this, e, r, i), this.bottomTextMode = "loading", this.dateBoxesSchedulesList[e].boxesSchedulesList.push({
                id: i,
                boxesSchedules: r
            });
        }
        this._weekStates[e].boxIndex >= this._getBoxIds(e).length && (this.bottomTextMode = "bottom");
    },
    _updateFilter: function() {
        if (this.isBanner) this.bannerCategoryFilter = this._classFilter.category, this.bannerBoxFilter = this._classFilter.box, 
        this.bannerDurationFilter = this._classFilter.durations, this.bannerIsShowFinished = this._classFilter.isShowFinished, 
        this.bannerFilterTabInfo = {
            class: this._classFilter.categorySelectedLen,
            box: this._classFilter.boxSelectedLen,
            duration: this._classFilter.durationSelectedLen
        }; else {
            this.filterTabItems[0].badgeNum = this._classFilter.categorySelectedLen, this.filterTabItems[1].badgeNum = this._classFilter.boxSelectedLen, 
            this.filterTabItems[2].badgeNum = this._classFilter.durationSelectedLen, this.categoryFilter = [ [ {
                title: "训练目标",
                items: this._classFilter.category.targets
            }, {
                title: "课程类型",
                items: this._classFilter.category.types
            } ], [ {
                title: "选择课程(可多选)",
                items: this._classFilter.category.classes
            } ] ], this.boxFilter = [ [ {
                title: "地区",
                items: this._classFilter.box.areas
            } ], [ {
                title: "选择门店(可多选)",
                items: this._classFilter.box.boxes
            } ] ];
            var e = [ {
                label: "显示已结束的课程",
                value: "isShowFinished",
                isActive: this._classFilter.isShowFinished
            } ];
            this.durationFilter = [ this._classFilter.durations, e ];
        }
    },
    _triggerFilter: function() {
        this.$emit("onFilter", {
            city: this._classFilter.citySelected,
            isFilter: this._classFilter.isFilter
        });
    },
    _updateSwiperIndex: function(e) {
        this.swiperIndex = -1, this.swiperIndex = e;
    },
    _getIsFetchedByClassCity: function(e) {
        return this.$store.selectors.getIsFetchedByClassCity(this.$store.getState(), e);
    },
    _getBoxIds: function(e) {
        var t = this.$store, s = t.getState, i = t.selectors.getClassBoxIdsByNames, r = this._classFilter, a = r.isFilter, n = r.citySelected;
        return a ? this._classFilter.boxIds : i(s(), n, "全城|".concat(this._weekStates[e].date), null);
    }
}, {
    info: {
        components: {
            "class-list": {
                path: "./ClassList"
            },
            "banner-class-filter": {
                path: "./ClassListPopoverFilter"
            },
            "class-filter": {
                path: "./../common/feedback/PopoverLayoutFilter"
            },
            "bottom-text": {
                path: "./../common/dataDisplay/TextBottom"
            },
            "select-two-filter": {
                path: "./../common/combination/SelectColumnTwo"
            },
            "select-one-filter": {
                path: "./../common/combination/SelectColumnOne"
            }
        },
        on: {
            "1032-0": [ "onChangeSwiper", "onReachBottom" ],
            "1032-2": [ "classFilterChange" ],
            "1032-3": [ "changeFilter" ],
            "1032-4": [ "tapItem" ],
            "1032-5": [ "tapItem" ],
            "1032-6": [ "tapItem" ]
        }
    },
    handlers: {
        "1032-0": {
            onChangeSwiper: function() {
                var e = arguments[arguments.length - 1];
                this.changeSwiper(e);
            },
            onReachBottom: function() {
                var e = arguments[arguments.length - 1];
                this.lazyLoad(e);
            }
        },
        "1032-2": {
            classFilterChange: function() {
                var e = arguments[arguments.length - 1];
                this.changeBannerFilter(e);
            }
        },
        "1032-3": {
            changeFilter: function() {
                var e = arguments[arguments.length - 1];
                this.changeFilter(e);
            }
        },
        "1032-4": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("category", e);
            }
        },
        "1032-5": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("box", e);
            }
        },
        "1032-6": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("duration", e);
            }
        }
    },
    models: {},
    refs: void 0
});