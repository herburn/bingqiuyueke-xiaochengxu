var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, a, n, r, o, i) {
    try {
        var s = e[o](i), u = s.value;
    } catch (e) {
        return void a(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, r);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, a) {
            var n = s.apply(e, i);
            function r(e) {
                asyncGeneratorStep(n, t, a, r, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, a, r, o, "throw", e);
            }
            r(void 0);
        });
    };
}

_core.default.component({
    name: "ClassListClassEntity",
    props: {
        isAllowTrainerNavigate: {
            type: Boolean,
            default: !0
        },
        isNovice: {
            type: Boolean,
            default: !1
        },
        schedule: {
            type: Object,
            default: {
                id: -1,
                trainerInfo: {},
                scheduleInfo: {},
                btnInfo: {},
                markInfo: {},
                collectData: {}
            }
        }
    },
    methods: {
        tapContent: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, a, n, r, o;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.schedule.scheduleInfo, a = t.navigatorPage, n = t.navigatorData, r = t.noviceNavigatorPage, 
                        o = t.noviceNavigatorData, this.isNovice) return e.next = 4, this.$loginRegister();
                        e.next = 4;
                        break;

                      case 4:
                        this.isNovice && "" !== r && "BannerCourseList" === this.$route.page ? this.$router.navigateTo({
                            page: r,
                            data: o
                        }) : "" !== a && this.$router.navigateTo({
                            page: a,
                            data: n
                        });

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        tapBtn: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t, a, n, r, o;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.$loginRegister();

                      case 2:
                        t = this.schedule.btnInfo, a = t.navigatorPage, n = t.navigatorData, r = t.noviceNavigatorPage, 
                        o = t.noviceNavigatorData, this.isNovice && "" !== r && "BannerCourseList" === this.$route.page ? this.$router.navigateTo({
                            page: r,
                            data: o
                        }) : "" !== a && this.$router.navigateTo({
                            page: a,
                            data: n
                        });

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
        components: {
            face: {
                path: "./../common/dataDisplay/Face"
            }
        },
        on: {}
    },
    handlers: {
        "1223-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapContent(e);
            }
        },
        "1223-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapBtn(e);
            }
        }
    },
    models: {},
    refs: void 0
});