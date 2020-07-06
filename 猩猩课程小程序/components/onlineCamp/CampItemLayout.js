var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _helper = require("./../../plugins/redux/helper.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, s, o, a) {
    try {
        var c = e[o](a), i = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(i) : Promise.resolve(i).then(n, s);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = c.apply(e, a);
            function s(e) {
                asyncGeneratorStep(n, t, r, s, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, s, o, "throw", e);
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

_core.default.component({
    name: "CampItemLayout",
    props: {
        isModal: {
            type: Boolean,
            default: !1
        },
        schedule: {
            type: Object,
            default: {}
        }
    },
    data: {
        extraData: {}
    },
    computed: _objectSpread({}, (0, _helper.mapSelectors)({
        selectScheduleId: function(e) {
            return this.$store.selectors.getSelectedScheduleId(e) || "";
        }
    }), {
        isShowNewBadge: function() {
            return this.schedule.isNew && 2 !== this.schedule.scheduleStatus && 3 !== this.schedule.scheduleStatus;
        },
        isSelectedSchedule: function() {
            return this.selectScheduleId === this.schedule.scheduleId;
        },
        isDisableClick: function() {
            return 3 === this.schedule.scheduleStatus;
        }
    }),
    watch: {
        schedule: function(e) {
            var t = e || {}, r = t.boxId, n = t.scheduleId, s = t.trainerUserId;
            this.extraData = {
                boxId: r,
                scheduleId: n,
                trainerUserId: s
            };
        }
    },
    methods: {
        handleTap: function() {
            this.isModal ? this.isDisableClick ? this.$showToast("来晚了，已无法报名啦！") : this.$emit("selectSchedule", this.schedule) : this.$router.navigateTo({
                page: 3 === this.schedule.campType ? "OnlineCampDetail" : "CampDetail",
                data: {
                    sk: this.schedule.campInfo.sk,
                    campId: this.schedule.campInfo.campId,
                    city: this.schedule.city
                }
            });
        },
        onApply: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var r, n;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return r = t.scheduleId, n = t.sk, e.next = 3, this.$loginRegister();

                      case 3:
                        r && n && this.$router.navigateTo({
                            page: "CampBookingConfirm",
                            data: {
                                scheduleId: r,
                                sk: n
                            }
                        });

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    }
}, {
    info: {
        components: {
            face: {
                path: "./../common/dataDisplay/Face"
            }
        },
        on: {}
    },
    handlers: {
        "1209-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.handleTap(e);
            }
        },
        "1209-1": {
            tap: function() {
                var e = this;
                e.onApply({
                    scheduleId: e.schedule.scheduleId,
                    sk: e.schedule.sk
                });
            }
        }
    },
    models: {},
    refs: void 0
});