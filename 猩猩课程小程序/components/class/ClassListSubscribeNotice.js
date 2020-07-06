var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, o, u) {
    try {
        var s = e[o](u), i = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(i) : Promise.resolve(i).then(n, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, u);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

_core.default.component({
    name: "ClassListSubscribeNotice",
    props: {
        msg: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        }
    },
    methods: {
        tap: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t = this;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$reqSubscribeMsgByE(_constants.SCENE0701, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.abrupt("return", t.$store.dispatchAction("subscribeClassSchedule", t.date));

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
        components: {},
        on: {}
    },
    handlers: {
        "1214-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});