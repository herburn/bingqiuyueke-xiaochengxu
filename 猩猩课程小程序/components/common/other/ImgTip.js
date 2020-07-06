var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ImgTip",
    props: {
        tipMsg: {
            type: String,
            default: ""
        },
        imgSrc: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "350rpx"
        },
        height: {
            type: String,
            default: "350rpx"
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