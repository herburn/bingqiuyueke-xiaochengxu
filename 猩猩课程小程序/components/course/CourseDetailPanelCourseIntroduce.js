var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CourseDetailPanelCourseIntroduce",
    props: {
        title: {
            type: String,
            default: ""
        },
        introduce: {
            type: String,
            default: ""
        },
        tags: {
            type: Array,
            default: []
        },
        gallery: {
            type: Array,
            default: []
        },
        thumbnailGallery: {
            type: Array,
            default: []
        },
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
    methods: {
        previewGallery: function(e, t) {
            wx.previewImage({
                current: e[t],
                urls: e
            });
        }
    }
}, {
    info: {
        components: {
            faq: {
                path: "./CourseDetailPanelFAQ"
            },
            "filter-text": {
                path: "./../common/dataDisplay/TextParseHtml"
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
    handlers: {
        "1045-0": {
            tap: function(e) {
                var t = this;
                t.previewGallery(t.gallery, e);
            }
        }
    },
    models: {},
    refs: void 0
});