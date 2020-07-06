var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

_core.default.component({
    name: "ClassBookingDetailFinishedContent",
    props: {
        bookingDetail: {
            type: Object,
            default: {}
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
            "price-row": {
                path: "./../../../../components/booking/BookingDetailRowPrice"
            },
            "person-num-row": {
                path: "./../../../../components/booking/BookingDetailRowPeopleNumber"
            },
            "checkin-row": {
                path: "./../../../../components/booking/BookingDetailRowCheckin"
            },
            "entry-password-row": {
                path: "./../../../../components/booking/BookingDetailRowEntryPassword"
            },
            "course-photo-row": {
                path: "./../../../../components/booking/BookingDetailRowCoursePhoto"
            },
            "booking-num-row": {
                path: "./../../../../components/booking/BookingDetailRowBookingNumber"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});