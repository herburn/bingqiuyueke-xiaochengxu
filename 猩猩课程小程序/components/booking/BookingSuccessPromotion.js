var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingSuccessPromotion",
    props: {
        positionInfo: {
            type: Object,
            default: {}
        }
    },
    data: {},
    watch: {}
}, {
    info: {
        components: {
            "click-behavior": {
                path: "./../common/enrichment/ClickBehavior"
            },
            "observer-promotion-view": {
                path: "./../common/enrichment/ObserverView"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});