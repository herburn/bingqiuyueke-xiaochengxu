var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassBookingDetailRefundContent",
    props: {
        bookingDetail: {
            type: Object,
            default: {}
        }
    },
    methods: {
        tapPageBtn: function() {
            1 < getCurrentPages().length ? this.$router.navigateBack() : this.$router.backHome();
        }
    }
}, {
    info: {
        components: {
            "booking-detail-body": {
                path: "./../../../../components/booking/BookingDetailBody"
            },
            "booking-detail-header": {
                path: "./../../../../components/booking/BookingDetailHeader"
            },
            "refund-status": {
                path: "./../../../../components/booking/BookingDetailRowRefundStatus"
            },
            "price-row": {
                path: "./../../../../components/booking/BookingDetailRowPrice"
            },
            "person-num-row": {
                path: "./../../../../components/booking/BookingDetailRowPeopleNumber"
            }
        },
        on: {}
    },
    handlers: {
        "1065-0": {
            tapPageBtn: function() {
                var e = arguments[arguments.length - 1];
                this.tapPageBtn(e);
            }
        }
    },
    models: {},
    refs: void 0
});