var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../../tmp/index.js")), _router = _interopRequireDefault(require("./../../../../router/index.js")), _reduxPlugin = require("./../../../../plugins/redux/index.js"), _constants = require("./../../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, i, a) {
    try {
        var s = e[i](a), c = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, t, r, o, i, "throw", e);
            }
            o(void 0);
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

_core.default.component({
    name: "BoxCard",
    props: {
        storeInfo: {
            type: Object,
            default: {
                images: [],
                branchName: "",
                address: "",
                fav: 0,
                newStoreDiscount: 0
            }
        },
        city: {
            type: String,
            default: ""
        },
        boxAdsMap: {
            type: Object,
            default: {}
        }
    },
    data: {
        referenceNoneType: _constants.referenceNoneType,
        giftIcon: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/gift-ani-icon.png"
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isUnregistered: function(e) {
            return this.$store.selectors.getIsUnregistered(e);
        },
        favStatus: function(e) {
            var t;
            return this.storeInfo && (null === (t = this.$store.selectors.getBoxExtraById(e, this.storeInfo.boxId)) || void 0 === t ? void 0 : t.favStatus) || 0;
        }
    })),
    methods: {
        goStoreDetail: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, r, n;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = this.storeInfo, r = t.boxId, n = t.sk, 1 === t.display && _router.default.navigateTo({
                            page: "BoxDetail",
                            data: {
                                boxId: r,
                                sk: n,
                                city: this.city
                            }
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
        handleStoreFavClick: function(e) {
            var t = e.boxId, r = e.sk, n = e.fav;
            this.$emit("storeFavClick", {
                boxId: t,
                sk: r,
                fav: n
            });
        },
        clickBehaviorSuccess: function(e) {
            e.info;
        }
    }
}, {
    info: {
        components: {
            "click-behavior": {
                path: "./../../../../components/common/enrichment/ClickBehavior"
            },
            "observer-promotion-view": {
                path: "./../../../../components/common/enrichment/ObserverView"
            }
        },
        on: {}
    },
    handlers: {
        "1019-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.goStoreDetail(e);
            }
        },
        "1019-1": {
            tap: function() {
                var e = this;
                e.handleStoreFavClick(e.storeInfo);
            }
        }
    },
    models: {},
    refs: void 0
});