var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, a, n, r, i, o) {
    try {
        var u = e[i](o), s = u.value;
    } catch (e) {
        return void a(e);
    }
    u.done ? t(s) : Promise.resolve(s).then(n, r);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, a) {
            var n = u.apply(e, o);
            function r(e) {
                asyncGeneratorStep(n, t, a, r, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, t, a, r, i, "throw", e);
            }
            r(void 0);
        });
    };
}

_core.default.component({
    name: "Face",
    props: {
        face: {
            type: String,
            default: ""
        },
        isAllowNavigate: {
            type: Boolean,
            default: !0
        },
        navigatorPage: {
            type: String,
            default: ""
        },
        navigatorData: {
            type: Object,
            default: null
        },
        size: {
            type: String,
            default: ""
        },
        extraData: {
            type: Object,
            default: null
        }
    },
    _navigateFlag: !0,
    data: {
        classMap: {
            large: "sm-avatar-l",
            small: "sm-avatar-s"
        }
    },
    methods: {
        tap: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t = this;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.isAllowNavigate) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return e.next = 4, this.$loginRegister();

                      case 4:
                        this.navigatorPage && this._navigateFlag && (this._navigateFlag = !1, this.$router.navigateTo({
                            page: this.navigatorPage,
                            data: this.navigatorData,
                            complete: function() {
                                t._navigateFlag = !0, t.$emit("onFaceTap");
                            }
                        }));

                      case 5:
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
        "1039-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});