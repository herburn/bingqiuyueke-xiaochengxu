var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "OnlineCourseDetailPanelCourseIntroduce",
    props: {
        trainingEffect: {
            type: Array,
            default: []
        },
        suitablePeople: {
            type: Array,
            default: []
        },
        faqs: {
            type: Array,
            default: []
        }
    },
    data: {},
    computed: {},
    methods: {}
}, {
    info: {
        components: {
            faq: {
                path: "./CourseDetailPanelFAQ"
            },
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