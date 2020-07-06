var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CourseDetailPanelAttentionMatters",
    options: {
        styleIsolation: "isolated"
    },
    props: {
        notes: {
            type: Array,
            default: []
        }
    }
}, {
    info: {
        components: {
            agreement: {
                path: "./CourseTextAgreement"
            },
            "text-render-paragraph": {
                path: "./../common/dataDisplay/TextRenderParagraph"
            },
            "panel-title": {
                path: "./CourseDetailPanelTitle"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});