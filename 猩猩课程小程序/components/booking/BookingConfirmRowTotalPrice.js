var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmRowTotalPrice",
    props: {
        labelText: {
            type: String,
            default: "总价："
        },
        mode: {
            type: String,
            default: "normal"
        },
        price: {
            type: String,
            default: ""
        },
        firstPrice: {
            type: String,
            default: ""
        },
        underlinePrice: {
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