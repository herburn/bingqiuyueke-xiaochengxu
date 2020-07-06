var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmRowMiniChallenge",
    props: {
        actInfo: {
            type: Object,
            default: {}
        },
        show: {
            type: Boolean,
            default: !1
        }
    },
    data: {
        selected: !1
    },
    methods: {
        changeStatus: function() {
            this.selected = !this.selected, this.$emit("changeStatus", {
                value: this.selected
            });
        },
        showRule: function() {
            this.$emit("showRule", "");
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1091-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.showRule(e);
            }
        },
        "1091-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.changeStatus(e);
            }
        },
        "1091-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.changeStatus(e);
            }
        }
    },
    models: {},
    refs: void 0
});