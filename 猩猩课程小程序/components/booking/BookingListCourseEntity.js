var _core = _interopRequireDefault(require("./../../tmp/index.js")), _router = require("./../../router/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingListCourseEntity",
    props: {
        order: {
            type: Object,
            default: {
                isMultipleLessons: !1,
                trainerEnableJump: !0,
                orderId: "",
                date: "",
                week: "",
                duration: "",
                isGift: 0,
                boxname: "",
                checkIn: 1,
                className: "",
                status: -1
            }
        },
        btnText: {
            type: String,
            default: "查看"
        },
        type: {
            type: String,
            default: ""
        }
    },
    _reservationDetailMap: {
        1: "BoxBookingDetail",
        4: "ClassBookingDetail",
        5: "CampBookingDetail",
        6: "OldPersonalBookingDetail",
        7: "CampBookingDetail",
        20: "PersonalBookingDetail",
        101: "GiveClassBookingDetail",
        102: "MyGiveClassDetail"
    },
    data: {
        navigatorPage: "",
        navigatorData: {},
        notCheckIn: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/not-check-in.png",
        willOutdated: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/status-outdated-soon.png",
        outdated: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/status-outdated.png"
    },
    computed: {},
    watch: {
        order: function(e, t) {
            e !== t && (this.navigatorData = {
                trainerUserId: e.trainerId || e.trainerUserId,
                sk: e.sk
            }, this.navigatorPage = e.trainerEnableJump ? "TrainerIndex" : "");
        }
    },
    methods: {
        infoTap: function() {
            this._navigateBookingDetail(this.order);
        }
    },
    _navigateBookingDetail: function(e) {
        var t = e.orderType, a = e.orderId, o = e.sk;
        1 === e.isGift && (t = 101), 2 === e.isGift && (t = 102), _router.router.navigateTo({
            page: this._reservationDetailMap[t],
            data: {
                orderId: a,
                sk: o
            }
        });
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
        "1038-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.infoTap(e);
            }
        },
        "1038-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.infoTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});