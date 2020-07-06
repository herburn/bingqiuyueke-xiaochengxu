var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _reduxPlugin = require("./../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, i, u) {
    try {
        var s = e[i](u), a = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(a) : Promise.resolve(a).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, u);
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
    name: "BookingFloatingActionButtonInviteFriend",
    props: {
        courseType: {
            type: String,
            default: "class"
        },
        scheduleId: {
            type: String,
            default: ""
        },
        isShow: {
            type: Boolean,
            default: !0
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        scheduleInfo: function(e) {
            return this.$store.selectors.getScheduleById(e, this.scheduleId) || {};
        }
    })),
    methods: {
        onTap: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, r;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = function() {
                            return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                var t, r, n, o, i;
                                return _regeneratorRuntime2.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, this.$showActionSheet({
                                            itemList: [ {
                                                content: "再次预约，赠送好友",
                                                isShare: !1
                                            }, {
                                                content: "推荐本节课程给好友",
                                                isShare: !0
                                            } ]
                                        });

                                      case 2:
                                        t = e.sent, r = this.scheduleInfo, n = r.startTime, o = r.scheduleId, i = r.sk, 
                                        0 === t && ((0, _moment.default)(n).diff((0, _moment.default)(), "hours") < 1 ? this.$showToast("开课前1小时，不支持赠课") : this.$router.navigateTo({
                                            page: "GiveClassBookingConfirm",
                                            data: {
                                                scheduleId: o,
                                                sk: i
                                            }
                                        }));

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this);
                            }))).apply(this, arguments);
                        }, t = function() {
                            return r.apply(this, arguments);
                        }, this.$emit("onInvitePromptTap"), "class" === this.courseType && t.call(this);

                      case 4:
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
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1064-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.onTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});