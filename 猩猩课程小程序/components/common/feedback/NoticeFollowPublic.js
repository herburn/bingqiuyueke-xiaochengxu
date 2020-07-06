var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, o, r, n, i, c) {
    try {
        var s = e[i](c), u = s.value;
    } catch (e) {
        return void o(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(r, n);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(t, o) {
            var r = s.apply(e, c);
            function n(e) {
                asyncGeneratorStep(r, t, o, n, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(r, t, o, n, i, "throw", e);
            }
            n(void 0);
        });
    };
}

function ownKeys(t, e) {
    var o = Object.keys(t);
    return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t)), 
    e && (o = o.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(o, !0).forEach(function(e) {
            _defineProperty(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ownKeys(o).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return t;
}

function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var isShow = !0;

_core.default.component({
    name: "NoticeFollowPublic",
    data: {
        isShow: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isSatisfyShowFollowNotice: function(e) {
            return this.$store.selectors.isSatisfyShowTooltip(e, "noticeFollow");
        }
    })),
    watch: {
        isSatisfyShowFollowNotice: {
            immediate: !0,
            handler: function() {
                var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, this.$sleep(1);

                          case 2:
                            this.isShow = isShow && this.isSatisfyShowFollowNotice;

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
    methods: {
        openNotice: function() {
            this.$invokeChild("follow-modal", "showFollowModal");
        },
        closePrompt: function() {
            isShow = !1, this.isShow = !1;
        }
    }
}, {
    info: {
        components: {
            "follow-public-modal": {
                path: "./AlertFollowPublic"
            }
        },
        on: {}
    },
    handlers: {
        "1024-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.closePrompt(e);
            }
        },
        "1024-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.openNotice(e);
            }
        }
    },
    models: {},
    refs: void 0
});