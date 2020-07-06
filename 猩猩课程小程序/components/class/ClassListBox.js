var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassListBox",
    props: {
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
        boxSchedules: {
            type: Object,
            default: {}
        },
        index: {
            type: Number,
            default: -1
        },
        topClassBoxPromotion: {
            type: Object,
            value: null
        },
        noneClassBoxPromotion: {
            type: Object,
            value: null
        },
        classBoxPromotion: {
            type: Object,
            value: null
        },
        topClassPromotion: {
            type: Object,
            value: null
        },
        noneClassPromotion: {
            type: Object,
            value: null
        },
        classPromotion: {
            type: Object,
            value: null
        }
    },
    data: {}
}, {
    info: {
        components: {
            "observer-promotion-view": {
                path: "./../common/enrichment/ObserverView"
            },
            "click-behavior": {
                path: "./../common/enrichment/ClickBehavior"
            },
            "class-box-header": {
                path: "./ClassListBoxHeader"
            },
            "class-empty": {
                path: "./ClassListClassEntityEmpty"
            },
            "class-entry": {
                path: "./ClassListClassEntity"
            },
            "class-box-promotion": {
                path: "./ClassListBoxPromotion"
            },
            "class-promotion": {
                path: "./ClassListClassPromotion"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});