var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var defaultBg = "https://img.supermonkey.com.cn/zdl/157078750262.jpg";

_core.default.component({
    name: "BookingConfirmLayout",
    options: {
        multipleSlots: !0
    },
    props: {
        bgSrc: {
            type: String,
            default: defaultBg
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