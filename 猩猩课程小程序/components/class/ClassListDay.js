var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassListDay",
    props: {
        boxesSchedulesList: {
            type: Array,
            default: []
        },
        boxesListShow: {
            type: Array,
            default: []
        },
        beforeHeight: {
            type: Number,
            default: 0
        },
        isShowHeader: {
            type: Boolean,
            default: !0
        },
        isShowFav: {
            type: Boolean,
            default: !1
        },
        isAllowTrainerNavigate: {
            type: Boolean,
            default: !0
        },
        isNovice: {
            type: Boolean,
            default: !1
        },
        classBoxPromotionMap: {
            type: Object,
            default: {}
        },
        classPromotionMap: {
            type: Object,
            default: {}
        }
    }
}, {
    info: {
        components: {
            "class-box": {
                path: "./ClassListBox"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});