var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _screen = require("./../../../utils/screen.js"), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

_core.default.component({
    name: "FloatingActionButtonNewUser",
    props: {},
    data: {
        isMaskShow: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isNewUserBonus: function(e) {
            return this.$store.selectors.getNewUserBonus(e);
        }
    }), {
        isBiggerRatio: function() {
            return (0, _screen.isBiggerRatio)();
        },
        newPromtSrc: function() {
            return this.isBiggerRatio ? "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/new-user-prompt-5s.png" : "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/new-user-prompt-x.png";
        }
    }),
    created: function() {},
    methods: {
        toggleMask: function() {
            this.isMaskShow = !this.isMaskShow;
        },
        noop: _constants.noop,
        linkMyTicket: function() {
            this.isMaskShow = !1, this.$router.navigateTo({
                page: "MyTicket"
            }), this.$store.dispatch(this.$store.actions.setIsGetNewUserBonus(0));
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1025-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.toggleMask(e);
            }
        },
        "1025-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.toggleMask(e);
            }
        },
        "1025-2": {
            touchmove: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1025-3": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.linkMyTicket(e);
            }
        },
        "1025-4": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.toggleMask(e);
            }
        }
    },
    models: {},
    refs: void 0
});