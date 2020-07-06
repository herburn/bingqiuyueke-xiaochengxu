var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowPrice",
    props: {
        orderAmount: {
            type: Number,
            default: 0
        },
        needAmount: {
            type: Number,
            default: 0
        },
        payWay: {
            type: String,
            default: ""
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