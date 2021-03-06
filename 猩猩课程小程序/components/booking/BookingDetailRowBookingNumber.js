var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowBookingNumber",
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
        flex: "none"
    },
    methods: {
        tap: function() {
            this.flex = "block";
        },
        closeDialog: function() {
            this.flex = "none";
        }
    }
}, {
    info: {
        components: {
            "booking-number-modal": {
                path: "./BookingDetailModalBookingNumber"
            }
        },
        on: {
            "1205-1": [ "closeDialog" ]
        }
    },
    handlers: {
        "1205-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        },
        "1205-1": {
            closeDialog: function() {
                var e = arguments[arguments.length - 1];
                this.closeDialog(e);
            }
        }
    },
    models: {},
    refs: void 0
});