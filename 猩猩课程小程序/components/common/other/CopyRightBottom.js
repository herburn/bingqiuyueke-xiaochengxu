var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var version = "2.17.2";

_core.default.component({
    name: "CopyRightBottom",
    props: {
        isShowVersion: {
            type: Boolean,
            default: !1
        }
    },
    data: {
        version: "当前版本号 V ".concat(version),
        text: "Copyright © 2014-2020  Supermonkey All Rights Reserved. "
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