var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "PersonalTextRuleTip",
    props: {
        mode: {
            type: String,
            default: "normal"
        }
    },
    methods: {
        showRule: function() {
            this.$emit("showRule", !0);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1092-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.showRule(e);
            }
        }
    },
    models: {},
    refs: void 0
});