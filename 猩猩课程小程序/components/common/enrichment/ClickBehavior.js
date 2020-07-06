var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _version = require("./../../../utils/version.js"), _clickBehavior = _interopRequireDefault(require("./../../../utils/clickBehavior.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, i, t, n, r, o, a) {
    try {
        var s = e[o](a), c = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? i(c) : Promise.resolve(c).then(n, r);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(i, t) {
            var n = s.apply(e, a);
            function r(e) {
                asyncGeneratorStep(n, i, t, r, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, i, t, r, o, "throw", e);
            }
            r(void 0);
        });
    };
}

var compatibilityVersion = null;

_core.default.component({
    name: "ClickBehavior",
    props: {
        info: {
            type: Object,
            default: {
                navigateType: "",
                navigateAppId: "",
                navigateURL: "",
                positionId: ""
            }
        }
    },
    data: {
        compatibilityVersion: null
    },
    attached: function() {
        if (null === compatibilityVersion) try {
            var e = wx.getSystemInfoSync().SDKVersion;
            compatibilityVersion = 0 <= (0, _version.compareVersion)(e, "2.0.7") && -1 === (0, 
            _version.compareVersion)(e, "2.3.0");
        } catch (e) {}
        this.compatibilityVersion = compatibilityVersion;
    },
    methods: {
        tap: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.info.navigateType) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (this.$emit("clickBehavior", {
                            info: this.info
                        }, {
                            bubbles: !0
                        }), this.compatibilityVersion && "OUTER" === this.info.navigateType) {
                            e.next = 13;
                            break;
                        }
                        return e.prev = 4, e.next = 7, (0, _clickBehavior.default)(this.info);

                      case 7:
                        this.$emit("clickBehaviorSuccess", {
                            info: this.info
                        }), e.next = 13;
                        break;

                      case 10:
                        e.prev = 10, e.t0 = e.catch(4), this.$emit("clickBehaviorFail", {
                            info: this.info
                        });

                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 4, 10 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        success: function() {
            this.$emit("clickBehaviorSuccess", {
                info: this.info
            });
        },
        fail: function() {
            this.$emit("clickBehaviorFail", {
                info: this.info
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1043-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        },
        "1043-1": {
            success: function() {
                var e = arguments[arguments.length - 1];
                this.success(e);
            },
            fail: function() {
                var e = arguments[arguments.length - 1];
                this.fail(e);
            }
        }
    },
    models: {},
    refs: void 0
});