var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CourseDetailPanelFAQ",
    props: {
        faqs: {
            type: Array,
            default: []
        }
    }
}, {
    info: {
        components: {
            "panel-title": {
                path: "./CourseDetailPanelTitle"
            },
            "multi-line-text": {
                path: "./../common/dataDisplay/TextMultiLineWithUnfold"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});