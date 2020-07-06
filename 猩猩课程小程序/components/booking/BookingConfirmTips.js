var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmTips",
    options: {
        multipleSlots: !0
    },
    props: {
        type: {
            type: String,
            default: ""
        },
        tips: {
            type: Object,
            default: {}
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
    handlers: {},
    models: {},
    refs: void 0
});