var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowSubscribeMsg",
    props: {
        params: {
            type: Object,
            default: {
                orderId: "",
                title: "",
                dateTime: ""
            }
        }
    },
    methods: {
        tap: function() {
            this.$navigateToMsgManagementCourse(this.params);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1088-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});