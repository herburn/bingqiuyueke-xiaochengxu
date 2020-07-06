var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _reduxPlugin = require("./../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, s, a) {
    try {
        var i = e[s](a), u = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(u) : Promise.resolve(u).then(n, o);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(n, t, r, o, s, "throw", e);
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
    name: "ClassListBoxHeader",
    props: {
        isShowFav: {
            type: Boolean,
            default: !1
        },
        boxInfo: {
            type: Object,
            default: {
                boxId: -1,
                sk: "",
                favStatus: 0,
                name: "",
                address: "",
                longitude: 0,
                latitude: 0,
                addressGuide: ""
            }
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isUnregistered: function(e) {
            return this.$store.selectors.getIsUnregistered(e);
        },
        favStatus: function(e) {
            var t;
            return this.boxInfo && this.isShowFav && (null === (t = this.$store.selectors.getBoxExtraById(e, this.boxInfo.boxId)) || void 0 === t ? void 0 : t.favStatus) || 0;
        }
    })),
    methods: {
        tapFav: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, r, n;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.isShowFav || this.isUnregistered) return e.abrupt("return");
                        e.next = 2;
                        break;

                      case 2:
                        if (e.prev = 2, t = this.boxInfo, r = t.boxId, n = t.sk, 1 === this.favStatus) return e.next = 7, 
                        this.$store.dispatch(this.$store.actions.delStoreFav({
                            boxId: r,
                            sk: n
                        }));
                        e.next = 10;
                        break;

                      case 7:
                        this.$showToast("已取消收藏，此后将不再置顶"), e.next = 13;
                        break;

                      case 10:
                        return e.next = 12, this.$store.dispatch(this.$store.actions.setStoreFav({
                            boxId: r,
                            sk: n
                        }));

                      case 12:
                        this.$showToast("已收藏该猩店，此后将为您置顶显示");

                      case 13:
                        e.next = 18;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(2), this.$showToast("操作失败");

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 15 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        tapBoxMao: function() {
            this.$openMap(this.boxInfo);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1221-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapFav(e);
            }
        },
        "1221-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapBoxMao(e);
            }
        }
    },
    models: {},
    refs: void 0
});