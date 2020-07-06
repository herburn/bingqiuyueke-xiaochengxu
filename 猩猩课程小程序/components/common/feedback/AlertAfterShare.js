var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _screen = require("./../../../utils/screen.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
    name: "AlertAfterShare",
    props: {},
    data: {
        isMaskShow: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        hasClosed: function(e) {
            return this.$store.selectors.getAfterSharePromptStatus(e);
        }
    }), {
        isBiggerRatio: function() {
            return (0, _screen.isBiggerRatio)();
        },
        promtSrc: function() {
            return this.isBiggerRatio ? "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/after-share-prompt-129-5s.png" : "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/after-share-prompt-129-x.png";
        }
    }),
    methods: {
        noop: function() {},
        closePrompt: function() {
            this.$store.dispatch(this.$store.actions.setIsCloseAfterSharePrompt(!0));
        }
    },
    extraEvents: {
        openPrompt: function() {
            this.isMaskShow = !0;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1026-0": {
            touchmove: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1026-1": {
            tap: function() {
                this.isMaskShow = !1;
            }
        },
        "1026-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.closePrompt(e);
            }
        },
        "1026-3": {
            tap: function() {
                this.isMaskShow = !1;
            }
        }
    },
    models: {},
    refs: void 0
});