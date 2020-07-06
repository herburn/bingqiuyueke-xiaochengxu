var _core = _interopRequireDefault(require("./../../../../tmp/index.js")), _reduxPlugin = require("./../../../../plugins/redux/index.js");

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
    name: "ClassDetailProfilePanel",
    props: {
        profile: {
            type: Object,
            default: {}
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isUnregistered: function(e) {
            return this.$store.selectors.getIsUnregistered(e);
        }
    })),
    methods: {
        tapMapHandler: function() {
            this.$openMap(this.profile.location);
        },
        tapRegister: function() {
            this.$loginRegister();
        }
    }
}, {
    info: {
        components: {
            face: {
                path: "./../../../../components/common/dataDisplay/Face"
            },
            "multi-line-text": {
                path: "./../../../../components/common/dataDisplay/TextMultiLineWithUnfold"
            }
        },
        on: {}
    },
    handlers: {
        "1051-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapMapHandler(e);
            }
        },
        "1051-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapRegister(e);
            }
        }
    },
    models: {},
    refs: void 0
});