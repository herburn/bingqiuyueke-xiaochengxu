var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CourseDetailPanelTitle",
    props: {
        iconClass: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "标题"
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