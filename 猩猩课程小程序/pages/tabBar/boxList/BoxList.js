var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _store = require("./../../../store/index.js"), _screen = require("./../../../utils/screen.js"), _reduxPlugin = require("./../../../plugins/redux/index.js"), _constants = require("./../../../constants/index.js"), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _boxFilter = _interopRequireDefault(require("./js/boxFilter.js"));

function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, i) : {};
        o.get || o.set ? Object.defineProperty(e, i, o) : e[i] = t[i];
    }
    return e.default = t, e;
}

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function ownKeys(e, t) {
    var i = Object.keys(e);
    return Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(e)), 
    t && (i = i.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(i, !0).forEach(function(t) {
            _defineProperty(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var init = R.init, bannerHeight = 428, filterHeight = 108, ALLAREA = "全城", ALLTHEME = "全部";

_core.default.page({
    name: "BoxList",
    _shareInfo: {
        title: "超级猩猩健身-门店",
        url: {
            page: "BoxList"
        }
    },
    _fav: 0,
    _scrollTop: 0,
    _boxFilter: null,
    _city: null,
    _filterFixScrollTop: 0,
    _navigatorFixBgColor: "#333",
    _hasCurrentCity: !1,
    data: {
        city: "",
        ready: !1,
        defaultTheme: ALLTHEME,
        isShowFilter: !1,
        filterTabItems: [ {
            label: "地区",
            value: "box",
            isActive: !0,
            badgeNum: 0
        }, {
            label: "主题",
            value: "class",
            isActive: !1,
            badgeNum: 0
        } ],
        boxFilter: [],
        themeFilter: [],
        isFixFilter: !1,
        navigatorFullHeight: 0,
        filterTop: 0,
        doubleTap: 0,
        filterInfo: {
            city: "",
            area: ALLAREA,
            theme: ALLTHEME
        },
        navigatorBgColor: "",
        showBanner: !0,
        contentPadding: "24rpx",
        referenceNoneType: _constants.referenceNoneType
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        storeList: function(t) {
            var e = this.filterInfo, i = e.city, o = e.area, r = e.theme;
            return _store.store.selectors.getFilterStoresInfo(t, "".concat(i, "市"), o, r) || [];
        },
        banners: function(t) {
            var e = this.filterInfo, i = e.city, o = e.area;
            return _store.store.selectors.getBoxBanners(t, _constants.BOX_BANNER, {
                city: "".concat(i, "市"),
                area: o === ALLAREA ? "ALL" : o
            });
        },
        boxAdsMap: function(t) {
            return _store.store.selectors.getBoxAds(t) || {};
        },
        boxPromotions: function(t) {
            return _store.store.selectors.getPromotionsByPositionId(t, _constants.BOX_ADS) || {
                promotions: []
            };
        },
        currentCity: function(t) {
            return init(_store.store.selectors.getCurrentCity(t) || "");
        }
    }), {
        bannerList: function() {
            return this.banners.promotions;
        },
        cityText: function() {
            return "".concat(this.filterInfo.city).concat(this.filterInfo.area);
        }
    }),
    watch: {
        bannerList: function(t, e) {
            t !== e && (this.banners.isPositionActive && 0 !== t.length ? (this._setFilterFixStatus(!1), 
            this.showBanner = !0, this.contentPadding = "24rpx") : (this._setFilterFixStatus(!0), 
            this.showBanner = !1, this.contentPadding = "".concat(this.navigatorFullHeight + filterHeight + 24, "rpx")));
        },
        currentCity: function() {
            this._hasCurrentCity && (this._getShowedCity(), this._initBoxFilter());
        }
    },
    attached: function() {
        this.navigatorFullHeight = this.$app.globalData.navigatorFullHeightRpx || 100, this._filterFixScrollTop = Math.floor(bannerHeight - this.navigatorFullHeight - filterHeight / 2);
    },
    onLoad: function() {
        this.$showLoading(), this._getData(), this._fetchPromotionPositions([ _constants.BOX_BANNER, _constants.BOX_ADS ]);
    },
    onShow: function() {
        if (this._hasCurrentCity && this.currentCity !== this._city) {
            this._initBoxFilter(), this._city = this.currentCity;
            var t = this._boxFilter.filterResult, e = t.city, i = t.area, o = t.theme;
            this.filterInfo = {
                city: e,
                area: i,
                theme: o
            };
        }
    },
    onPageScroll: function(t) {
        var e = t.scrollTop, i = (0, _screen.px2rpx)(e);
        this.isShowFilter || (this._scrollTop = e), this.showBanner && !this.isFixFilter && i >= this._filterFixScrollTop ? this._setFilterFixStatus(!0) : this.showBanner && this.isFixFilter && i < this._filterFixScrollTop && this._setFilterFixStatus(!1);
    },
    onTabItemTap: function() {
        var t = this;
        this.doubleTap ? _core.default.pageScrollTo({
            scrollTop: 0,
            duration: 300
        }) : (this.doubleTap = 1, setTimeout(function() {
            t.doubleTap = 0;
        }, 300));
    },
    methods: {
        changeFilter: function(t) {
            var e = t.eventType, i = t.data;
            switch (e) {
              case "tab":
                var o = !0, r = !1, s = void 0;
                try {
                    for (var n, a = this.filterTabItems[Symbol.iterator](); !(o = (n = a.next()).done); o = !0) {
                        var c = n.value;
                        c.isActive = c.value === i.value;
                    }
                } catch (t) {
                    r = !0, s = t;
                } finally {
                    try {
                        o || null == a.return || a.return();
                    } finally {
                        if (r) throw s;
                    }
                }
                break;

              case "confirm":
                (function() {
                    this._closeFilterCb && this._closeFilterCb(), this._closeFilterCb = null, this.isShowFilter = !1, 
                    this._boxFilter.stash(), this._updateFilterData();
                    var t = this._boxFilter.filterResult, e = t.city, i = t.area, o = t.theme;
                    this._city = e, this.filterInfo = {
                        city: e,
                        area: i,
                        theme: o
                    }, this.$store.dispatch(this.$store.actions.updateCurrentCity("".concat(e, "市")));
                }).call(this, i);
                break;

              case "mask":
                this._closeFilterCb && this._closeFilterCb(), this._closeFilterCb = null, this.isShowFilter = !1, 
                this._boxFilter.unStash(), this._updateFilterData();
            }
        },
        tapItem: function(t) {
            var e = t.eventType, i = t.data;
            switch (e) {
              case "box":
                (function(t) {
                    var e = t.type, i = t.value;
                    switch (e) {
                      case "city":
                        this._boxFilter.selectCity(i);
                        break;

                      case "area":
                        this._boxFilter.selectArea(i);
                    }
                }).call(this, i);
                break;

              case "theme":
                (function(t) {
                    var e = t.type, i = t.value;
                    "theme" === e && this._boxFilter.selectTheme(i);
                }).call(this, i);
            }
            this._updateFilterData();
        },
        handleReload: function() {
            this.$showLoading(), this._getData(), this._fetchPromotionPositions([ _constants.BOX_BANNER, _constants.BOX_ADS ]);
        },
        showCityFilter: function() {
            this.filterTabItems[0].isActive = !0, this.filterTabItems[1].isActive = !1, this.isShowFilter = !0;
        },
        showThemeFilter: function() {
            this.filterTabItems[0].isActive = !1, this.filterTabItems[1].isActive = !0, this.isShowFilter = !0;
        },
        storeFavClick: function(t) {
            var e = this, i = t.boxId, o = t.fav, r = t.sk, s = 0 === o ? "setStoreFav" : "delStoreFav";
            this._fav = o, _store.store.dispatch(_store.store.actions[s]({
                boxId: i,
                fav: o,
                sk: r
            })).then(function() {
                var t = 0 === e._fav ? "已收藏并置顶该猩店" : "已取消置顶该猩店";
                e.$showToast({
                    title: t
                });
            }).catch(function(t) {
                console.log(t), e.$showToast({
                    title: "网络出错，请稍候重试"
                });
            });
        }
    },
    _getShowedCity: function() {
        var t = this.currentCity;
        this._city = this.currentCity, this.filterInfo = _objectSpread({}, this.filterInfo, {
            city: t
        });
    },
    _getData: function() {
        var e = this, t = this.currentCity;
        _store.store.dispatch(_store.store.actions.getBoxList("".concat(t, "市"))).then(function() {
            e.$hideLoading(), e._getShowedCity(), e.ready = !0, e.$switchBizLocationCity(), 
            e._hasCurrentCity = !0, e._initBoxFilter();
        }).catch(function(t) {
            console.log(t), e.ready = !1, e.$failLoading();
        });
    },
    _setFilterFixStatus: function(t) {
        t ? (this.isFixFilter = !0, this.filterTop = "".concat(this.navigatorFullHeight, "rpx"), 
        this.navigatorBgColor = this._navigatorFixBgColor) : (this.isFixFilter = !1, this.filterTop = 0, 
        this.navigatorBgColor = "");
    },
    _fetchPromotionPositions: function(t) {
        var i = [];
        t.forEach(function(t) {
            if (t === _constants.BOX_BANNER && this.banners.isPositionActive && !this.banners.isRelateIdExist) {
                var e = (0, _constants.getPositionExtParams)(_constants.BOX_BANNER);
                i.push({
                    positionId: _constants.BOX_BANNER,
                    ext: e
                });
            } else t === _constants.BOX_ADS && this.boxPromotions.isPositionActive && !this.boxPromotions.isRelateIdExist && i.push({
                positionId: _constants.BOX_ADS,
                ext: {
                    boxId: "ALL"
                }
            });
        }.bind(this)), 0 < i.length && _store.store.dispatch(_store.store.actions.getPromotionsByPositionId(i));
    },
    _initBoxFilter: function() {
        var t = this.$store.getState(), e = (0, this.$store.selectors.getStoreAreasInfo)(t);
        this._boxFilter ? this._boxFilter.update(this.currentCity, e) : this._boxFilter = new _boxFilter.default(this.currentCity, e), 
        this._updateFilterData();
    },
    _updateFilterData: function() {
        var t = this._boxFilter.filterInfo, e = t.cities, i = t.areas, o = t.themes;
        this.boxFilter = [ [ {
            title: "城市",
            items: e
        } ], [ {
            title: "选择地区",
            items: i
        } ] ], this.themeFilter = o;
    }
}, {
    info: {
        components: {
            "box-card": {
                path: "./components/BoxCard"
            },
            "box-filter": {
                path: "./components/BoxFilter"
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
            banner: {
                path: "./../../../components/common/other/BannerTop"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            }
        },
        on: {
            "834-2": [ "storeFavClick" ],
            "834-3": [ "tapItem", "changeFilter" ],
            "834-5": [ "reload" ]
        }
    },
    handlers: {
        "834-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.showCityFilter(t);
            }
        },
        "834-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.showThemeFilter(t);
            }
        },
        "834-2": {
            storeFavClick: function() {
                var t = arguments[arguments.length - 1];
                this.storeFavClick(t);
            }
        },
        "834-3": {
            tapItem: function() {
                var t = arguments[arguments.length - 1];
                this.tapItem(t);
            },
            changeFilter: function() {
                var t = arguments[arguments.length - 1];
                this.changeFilter(t);
            }
        },
        "834-5": {
            reload: function() {
                var t = arguments[arguments.length - 1];
                this.handleReload(t);
            }
        }
    },
    models: {},
    refs: void 0
});