var _core = _interopRequireDefault(require("./../../tmp/index.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailModalBookingNumber",
    props: {
        bookingNumberInfo: {
            type: Object,
            default: {
                bookingNumbers: [],
                trainer: {
                    face: "",
                    name: ""
                }
            }
        }
    },
    data: {
        currentTime: ""
    },
    attached: function() {
        this.currentTime = (0, _moment.default)().format("HH:mm:ss");
    },
    methods: {
        noop: _constants.noop,
        tap: function() {
            this.$emit("closeDialog");
        }
    }
}, {
    info: {
        components: {
            face: {
                path: "./../common/dataDisplay/Face"
            }
        },
        on: {}
    },
    handlers: {
        "1219-0": {
            touchmove: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1219-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});