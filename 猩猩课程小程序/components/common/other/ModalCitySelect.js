var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _ramda = require("./../../../vendor.js")(320), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function asyncGeneratorStep(t, e, n, r, i, o, a) {
    try {
        var s = t[o](a), u = s.value;
    } catch (t) {
        return void n(t);
    }
    s.done ? e(u) : Promise.resolve(u).then(r, i);
}

function _asyncToGenerator(s) {
    return function() {
        var t = this, a = arguments;
        return new Promise(function(e, n) {
            var r = s.apply(t, a);
            function i(t) {
                asyncGeneratorStep(r, e, n, i, o, "next", t);
            }
            function o(t) {
                asyncGeneratorStep(r, e, n, i, o, "throw", t);
            }
            i(void 0);
        });
    };
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), 
    t && (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(n, !0).forEach(function(t) {
            _defineProperty(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

_core.default.component({
    name: "ModalCitySelect",
    props: {
        isShow: {
            type: Boolean,
            default: !1
        }
    },
    data: {
        locationAuthStatus: 500,
        navigatorFullHeightPxStr: "60px",
        isActivated: !1,
        menuButtonHeightPxStr: "32px",
        closeSizePxStr: "20px"
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        currentCity: function(t) {
            return (0, _ramda.init)(this.$store.selectors.getCurrentCity(t));
        },
        locationCity: function(t) {
            return (0, _ramda.init)(this.$store.selectors.getLocationCity(t));
        },
        locationStatus: function(t) {
            if (0 === this.locationAuthStatus) return -1;
            if (500 === this.locationAuthStatus) return -2;
            var e = this.$store.selectors.getLocationCity(t);
            return "" === e ? -2 : (0, _ramda.contains)(e, this.$store.selectors.getCities(t)) ? 1 : 0;
        },
        cities: function(t) {
            return (0, _ramda.map)(_ramda.init)(this.$store.selectors.getCities(t));
        }
    })),
    attached: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
            return _regeneratorRuntime2.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return this._initHeightStyle(), t.next = 3, this.$checkAuth({
                        auth: "scope.userLocation"
                    });

                  case 3:
                    this.locationAuthStatus = t.sent;

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    methods: {
        noop: _constants.noop,
        tapCity: function(t) {
            this.$emit("tapCity", "".concat(t, "市"));
        },
        tapOnlineClass: function() {
            this.$emit("tapOnlineClass", "");
        },
        openLocationAuth: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
                var e;
                return _regeneratorRuntime2.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, _core.default.openSetting();

                      case 3:
                        if (e = t.sent, e.authSetting["scope.userLocation"]) return this.locationAuthStatus = 1, 
                        wx.showLoading({
                            mask: !0,
                            title: "定位中"
                        }), t.next = 10, this.$store.dispatch(this.$store.actions.getLocationCity());
                        t.next = 10;
                        break;

                      case 10:
                        t.next = 15;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(0), this.locationAuthStatus = 500;

                      case 15:
                        return t.prev = 15, wx.hideLoading(), t.finish(15);

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 0, 12, 15, 18 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }()
    },
    _initHeightStyle: function() {
        var t = this.$app.globalData.navigatorFullHeightPx;
        this.navigatorFullHeightPxStr = "".concat(t, "px");
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1188-0": {
            touchmove: function() {
                var t = arguments[arguments.length - 1];
                this.noop(t);
            }
        },
        "1188-1": {
            tap: function() {
                var t = this;
                t.tapCity(t.locationCity);
            }
        },
        "1188-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.openLocationAuth(t);
            }
        },
        "1188-3": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.tapOnlineClass(t);
            }
        },
        "1188-4": {
            tap: function(t) {
                this.tapCity(t);
            }
        }
    },
    models: {},
    refs: void 0
});