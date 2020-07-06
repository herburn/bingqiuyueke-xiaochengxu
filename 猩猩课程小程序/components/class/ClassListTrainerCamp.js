var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, o, i) {
    try {
        var u = e[o](i), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, i);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

_core.default.component({
    name: "ClassListTrainerCamp",
    props: {
        profile: {
            type: Object,
            default: {}
        },
        campSchedules: {
            type: Array,
            default: []
        },
        from: {
            type: String,
            default: ""
        },
        trainerUserId: {
            type: String,
            default: ""
        }
    },
    computed: {
        campTip: function() {
            return 0 < this.campSchedules.length ? "—— 已显示全部课程 ——" : "offline" === this.from ? "Ta暂时没有可报名的CAMP..." : "Ta时间紧张，最近没有线上课";
        }
    },
    methods: {
        subscribeCamp: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var r = this;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$reqSubscribeMsgByE(_constants.SCENE0701, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", r.$store.dispatchAction("subscribeCampSchedule", {
                                        date: (0, _moment.default)().format("YYYY-MM-DD"),
                                        trainerUserId: r.trainerUserId
                                    }));

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        })));

                      case 2:
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
        components: {
            "camp-item": {
                path: "./../onlineCamp/OnlineCampItem"
            }
        },
        on: {}
    },
    handlers: {
        "1217-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.subscribeCamp(e);
            }
        }
    },
    models: {},
    refs: void 0
});