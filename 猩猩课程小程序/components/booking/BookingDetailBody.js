var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailBody",
    options: {
        multipleSlots: !0
    },
    props: {
        theme: {
            type: String,
            default: ""
        },
        notes: {
            type: Array,
            default: []
        },
        isShowTips: {
            type: Boolean,
            default: !1
        },
        hasBottom: {
            type: Boolean,
            default: !0
        },
        hasAddContent: {
            type: Boolean,
            default: !1
        }
    },
    methods: {
        routerLink: function(e) {
            var t = e.page, o = e.method, a = void 0 === o ? "navigateTo" : o, r = e.data;
            this.$router[a]({
                page: t,
                data: r
            });
        }
    }
}, {
    info: {
        components: {
            agreement: {
                path: "./../course/CourseTextAgreement"
            },
            "text-render-paragraph": {
                path: "./../common/dataDisplay/TextRenderParagraph"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});