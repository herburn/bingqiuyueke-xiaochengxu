var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowFirstBookingNotes",
    props: {
        label: {
            type: String,
            default: ""
        },
        url: {
            type: String,
            default: ""
        }
    },
    methods: {
        tap: function() {
            this.$router.navigateTo({
                page: "WebView",
                data: {
                    h5Url: this.url
                }
            }, !0);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1198-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});