var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "Switch",
    props: {
        isActive: {
            type: Boolean,
            default: !1
        },
        data: {
            type: Object,
            default: {}
        }
    },
    data: {},
    computed: {},
    watch: {},
    methods: {
        handleChange: function() {
            this.$emit("change", {
                isActive: this.isActive,
                data: this.data
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1070-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.handleChange(e);
            }
        }
    },
    models: {},
    refs: void 0
});