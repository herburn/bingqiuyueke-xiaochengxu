var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, i, a) {
    try {
        var s = e[i](a), u = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, o);
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

var isShow = !0;

_core.default.component({
    name: "TooltipTicket",
    data: {
        isShow: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        expireTicketNumber: function(e) {
            return this.$store.selectors.getExpireTicketNumber(e);
        },
        isSatisfyShowTicket: function(e) {
            return this.$store.selectors.isSatisfyShowTooltip(e, "ticket");
        },
        isShowTabBarRedDot: function(e) {
            var t = this.$store.selectors, r = t.getExpireTicketNumber, n = t.getNewTicketNumber, o = t.getNewBadgeNumber, i = t.getMyInviteInfoNumber;
            return r(e) + n(e) + o(e) + i(e);
        }
    })),
    watch: {
        isShowTabBarRedDot: {
            immediate: !0,
            handler: function() {
                var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, this.$sleep(1);

                          case 2:
                            this._updateTabBarRedDot();

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
        }
    },
    show: function() {
        this._updateTabBarRedDot();
    },
    _updateTabBarRedDot: function() {
        isShow ? (this.isShow = this.isSatisfyShowTicket, "My" === this.$root.name ? (isShow = !1, 
        this.isShow = !1, wx.hideTabBarRedDot({
            index: 3
        })) : this.$router.tabPageMap[this.$root.name] && 0 < this.isShowTabBarRedDot && wx.showTabBarRedDot({
            index: 3
        })) : this.isShow = !1;
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});