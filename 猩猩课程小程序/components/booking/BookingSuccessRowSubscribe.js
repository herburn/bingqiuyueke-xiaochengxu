var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingSuccessRowSubscribe",
    props: {
        navigateInfo: {
            type: Object,
            default: {
                orderId: "",
                title: "",
                dateTime: ""
            }
        },
        courseType: {
            type: String,
            default: ""
        }
    },
    data: {},
    created: function() {},
    methods: {
        onTap: function() {
            this.$navigateToMsgManagementCourse({
                orderId: this.navigateInfo.orderId,
                title: this.navigateInfo.title,
                dateTime: this.navigateInfo.dateTime
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1195-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.onTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});