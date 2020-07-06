var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowAddress",
    props: {
        label: {
            type: String,
            default: "地址:"
        },
        value: {
            type: String,
            default: ""
        },
        boxInfo: {
            type: Object,
            default: {}
        }
    },
    methods: {
        tapAddress: function() {
            this.$openMap(this.boxInfo);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1109-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapAddress(e);
            }
        }
    },
    models: {},
    refs: void 0
});