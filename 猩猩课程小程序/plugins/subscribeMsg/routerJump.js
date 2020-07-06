Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _pageMap, _ramda = require("./../../vendor.js")(320), _constants = require("./../../constants/index.js");

function _defineProperty(e, a, o) {
    return a in e ? Object.defineProperty(e, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = o, e;
}

var pageMap = (_defineProperty(_pageMap = {}, _constants.CLASS_BOOKING_PAGE, (0, 
_ramda.flip)(_ramda.contains)([ "ClassBookingSuccess", "ClassBookingDetail" ])), 
_defineProperty(_pageMap, _constants.CAMP_BOOKING_PAGE, (0, _ramda.flip)(_ramda.contains)([ "CampBookingSuccess", "CampBookingDetail" ])), 
_defineProperty(_pageMap, _constants.BOX_BOOKING_PAGE, (0, _ramda.flip)(_ramda.contains)([ "BoxBookingSuccess", "BoxBookingDetail" ])), 
_pageMap), _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$navigateToMsgManagementCourse = redirectToMsgManagementCourse;
            }
        });
    }
};

function redirectToMsgManagementCourse(e) {
    var a, o, t = e.orderId, n = e.title, i = e.dateTime, r = 0;
    for (var s in pageMap) if (pageMap[s](this.$root.name)) {
        r = s;
        break;
    }
    (null !== (a = this.$root.bookingDetail) && void 0 !== a && a.waitInfo || 0 < (null === (o = this.$root.info) || void 0 === o ? void 0 : o.waitingCount)) && (r = _constants.CLASS_WAIT_BOOKING_PAGE), 
    this.$router.navigateTo({
        page: "MsgManagementCourse",
        data: {
            orderId: t,
            source: r,
            pageType: (0, _ramda.contains)("BookingSuccess", this.$root.name) ? "BookingSuccess" : "BookingDetail",
            pageInfo: {
                title: n,
                dateTime: i
            }
        }
    });
}

exports.default = _default;