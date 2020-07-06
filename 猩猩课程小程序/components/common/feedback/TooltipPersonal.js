var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js");

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
    name: "TooltipPersonal",
    data: {
        show: !1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isSatisfyShowPersonal: function(e) {
            return this.$store.selectors.isSatisfyShowTooltip(e, "personal");
        }
    })),
    show: function() {
        "MyBooking" === this.$root.name && this.isSatisfyShowPersonal && this.$store.dispatch(this.$store.actions.setPersonalExpireStatus(0));
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});