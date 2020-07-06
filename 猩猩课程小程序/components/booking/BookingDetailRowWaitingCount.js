var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowWaitingCount",
    props: {
        waitInfo: {
            type: Object,
            default: {}
        }
    },
    methods: {
        tap: function() {
            this.$router.navigateTo({
                page: "WebView",
                h5Url: this.url
            }, !0);
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