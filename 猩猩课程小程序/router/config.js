function ownKeys(a, e) {
    var s = Object.keys(a);
    return Object.getOwnPropertySymbols && s.push.apply(s, Object.getOwnPropertySymbols(a)), 
    e && (s = s.filter(function(e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable;
    })), s;
}

function _objectSpread(a) {
    for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(s, !0).forEach(function(e) {
            _defineProperty(a, e, s[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : ownKeys(s).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
        });
    }
    return a;
}

function _defineProperty(e, a, s) {
    return a in e ? Object.defineProperty(e, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = s, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.authorizePageMap = exports.routeMap = exports.tabPageMap = exports.homePage = void 0;

var homePage = "CourseList";

exports.homePage = homePage;

var tabPageMap = {
    BoxList: !0,
    CourseList: !0,
    MyBooking: !0,
    My: !0,
    ClassList: !0,
    MyReservation: !0
};

exports.tabPageMap = tabPageMap;

var routeMap = {
    SplashScreen: "/pages/SplashScreen",
    BoxList: "/pages/tabBar/boxList/BoxList",
    CourseList: "/pages/tabBar/courseList/CourseList",
    MyBooking: "/pages/tabBar/myBooking/MyBooking",
    My: "/pages/tabBar/My",
    BoxDetail: "/pagesSubPackage/box/pages/BoxDetail",
    BoxCourseList: "/pagesSubPackage/box/pages/BoxCourseList",
    BoxBookingConfirm: "/pagesSubPackage/box/pages/BoxBookingConfirm",
    BoxBookingSuccess: "/pagesSubPackage/box/pages/BoxBookingSuccess",
    ReservationBoxDetail: "/pagesSubPackage/box/pages/BoxBookingDetail",
    BoxBookingDetail: "/pagesSubPackage/box/pages/BoxBookingDetail",
    BannerCourseList: "/pages/course/BannerCourseList",
    BannerClassList: "BannerCourseList",
    ClassList: {
        page: "CourseList",
        data: {
            courseType: "class"
        }
    },
    BoxClassList: {
        page: "BoxCourseList",
        data: {
            courseType: "class"
        }
    },
    ClassDetail: function(e) {
        var a = +e.data.orderType;
        return 6 == a ? "PersonalDetail" : 7 == a ? "CampDetail" : "/pages/class/detail/ClassDetail";
    },
    ClassBookingConfirm: {
        path: "/pages/class/booking/ClassBookingConfirm",
        meta: "test"
    },
    ClassWaitBookingConfirm: function(e) {
        return {
            page: "ClassBookingConfirm",
            data: _objectSpread({}, e.data, {
                isWaiting: 1
            })
        };
    },
    ClassBookingSuccess: "/pages/class/booking/ClassBookingSuccess",
    ClassBookingDetail: "/pages/class/booking/ClassBookingDetail",
    PersonalList: function() {
        return {
            page: "CourseList",
            data: {
                courseType: "personal"
            }
        };
    },
    BoxPersonalList: {
        page: "BoxCourseList",
        data: {
            courseType: "personal"
        }
    },
    PersonalDetail: "/pagesSubPackage/personal/pages/PersonalDetail",
    PersonalBookingConfirm: "/pagesSubPackage/personal/pages/PersonalBookingConfirm",
    PersonalBookingSuccess: "/pagesSubPackage/personal/pages/PersonalBookingSuccess",
    PersonalBookingDetail: "/pagesSubPackage/personal/pages/PersonalBookingDetail",
    SelfPersonalBooking: "/pagesSubPackage/personal/pages/SelfPersonalBooking",
    SelfPersonalBookingResult: "/pagesSubPackage/personal/pages/SelfPersonalBookingResult",
    OldPersonalBookingDetail: "/pagesSubPackage/personal/pages/OldPersonalBookingDetail",
    BookingPersonDetail: "/pagesSubPackage/personal/pages/OldPersonalBookingDetail",
    PersonalTrainingRecord: "/pagesSubPackage/personal/pages/PersonalTrainingRecord",
    PersonalCanceledTraining: "/pagesSubPackage/personal/pages/PersonalCanceledTraining",
    CampList: {
        page: "CourseList",
        data: {
            courseType: "camp"
        }
    },
    BoxCampList: {
        page: "BoxCourseList",
        data: {
            courseType: "camp"
        }
    },
    NewArrivalCampList: "/pagesSubPackage/camp/pages/NewArrivalCampList",
    CampDetail: "/pagesSubPackage/camp/pages/CampDetail",
    OnlineCampDetail: "/pagesSubPackage/camp/pages/OnlineCampDetail",
    CampBookingConfirm: "/pagesSubPackage/camp/pages/CampBookingConfirm",
    CampBookingSuccess: "/pagesSubPackage/camp/pages/CampBookingSuccess",
    CampBookingDetail: "/pagesSubPackage/camp/pages/CampBookingDetail",
    MyGiveClass: "/pagesSubPackage/giveClass/pages/MyGiveClass",
    GiveClassReceiveStatus: "/pagesSubPackage/giveClass/pages/GiveClassReceiveStatus",
    GiveClassBookingSuccess: "/pagesSubPackage/giveClass/pages/GiveClassBookingSuccess",
    GiveClassBookingConfirm: "/pagesSubPackage/giveClass/pages/GiveClassBookingConfirm",
    GiveClassBookingDetail: "/pagesSubPackage/giveClass/pages/GiveClassBookingDetail",
    MyGiveClassDetail: "/pagesSubPackage/giveClass/pages/MyGiveClassDetail",
    TrainerList: "/pagesSubPackage/trainer/pages/TrainerList",
    TrainerIndex: "/pagesSubPackage/trainer/pages/TrainerIndex",
    TrainerCourseList: "/pagesSubPackage/trainer/pages/TrainerCourseList",
    BookingRecordList: "/pagesSubPackage/bookingRecord/pages/BookingRecordList",
    BookingRecordCanceledList: "/pagesSubPackage/bookingRecord/pages/BookingRecordCanceledList",
    RechargeConfirm: {
        path: "/pagesSubPackage/superCard/pages/RechargeConfirm",
        beforeEnter: function(e, a, s) {
            "RechargeConfirm" === e.page && "B" === this.$store.selectors.getRechargeABCategory(this.$store.getState()) ? s({
                page: "RechargeConfirmB",
                jumpMethodName: e.jumpMethodName
            }) : s();
        }
    },
    RechargeConfirmB: "/pagesSubPackage/superCard/pages/RechargeConfirmB",
    RechargeResult: "/pagesSubPackage/superCard/pages/RechargeResult",
    EditUserInfo: "/pagesSubPackage/superCard/pages/EditUserInfo",
    VIPRights: "/pagesSubPackage/vip/pages/VIPRights",
    VIPExplain: "/pagesSubPackage/vip/pages/VIPExplain",
    VIPSuperRecords: "/pagesSubPackage/vip/pages/VIPSuperRecords",
    InvalidTicketList: "/pagesSubPackage/ticket/pages/InvalidTicketList",
    MyTicket: "/pagesSubPackage/ticket/pages/MyTicket",
    UseTicket: "/pagesSubPackage/ticket/pages/UseTicket",
    SuperRank: "/pagesSubPackage/rank/pages/SuperRank",
    GroupRank: "/pagesSubPackage/rank/pages/GroupRank",
    NoviceClassList: "/pagesSubPackage/novice/pages/NoviceClassList",
    NoviceClassDetail: "/pagesSubPackage/novice/pages/NoviceClassDetail",
    NoviceBannerClassList: {
        page: "BannerClassList",
        data: {
            isNovice: 1
        }
    },
    OnLineCourse: "/pagesSubPackage/camp/pages/OnLineCourse",
    MsgManagement: "/pagesSubPackage/subscribeMessage/pages/MsgManagement",
    MsgManagementCourse: "/pagesSubPackage/subscribeMessage/pages/MsgManagementCourse",
    SplashScreenUnregistered: {
        page: "SplashScreen",
        data: {
            contentType: "splashScreen",
            internalJump: 1,
            isUnregistered: 1
        }
    },
    Login: {
        page: "SplashScreen",
        data: {
            contentType: "login",
            internalJump: 1
        }
    },
    NotLogin: {
        page: "SplashScreen",
        data: {
            contentType: "notLogin",
            internalJump: 1
        }
    },
    ServiceUnavailable: {
        page: "SplashScreen",
        data: {
            contentType: "serviceUnavailable",
            internalJump: 1
        }
    },
    BindPhone: "/pagesSubPackage/common/pages/BindPhone",
    BindPhoneBridge: "/pagesSubPackage/common/pages/BindPhoneBridge",
    CustomService: "/pagesSubPackage/common/pages/CustomService",
    LowerVersion: "/pagesSubPackage/common/pages/LowerVersion",
    NoticeList: "/pagesSubPackage/common/pages/NoticeList",
    ShareMiniScan: "/pagesSubPackage/common/pages/ShareMiniScan",
    WebView: "/pagesSubPackage/common/pages/WebView",
    BadgeIndex: "/pagesSubPackage/others/pages/badge/BadgeIndex",
    BadgeDetail: "/pagesSubPackage/others/pages/badge/BadgeDetail",
    BadgeTypeList: "/pagesSubPackage/others/pages/badge/BadgeTypeList",
    ExchangeSuperAllianceTicket: "/pagesSubPackage/others/pages/superAllianceTicket/ExchangeSuperAllianceTicket",
    BalanceRecords: "/pagesSubPackage/balanceRecords/pages/BalanceRecords",
    ApplyReturnCard: "/pagesSubPackage/balanceRecords/pages/ApplyReturnCard",
    InvoiceHistory: "/pagesSubPackage/invoice/pages/InvoiceHistory",
    PayOrderList: "/pagesSubPackage/invoice/pages/PayOrderList",
    PayOrderListInvoice: "/pagesSubPackage/invoice/pages/PayOrderListInvoice",
    InvoiceAgreement: "/pagesSubPackage/invoice/pages/InvoiceAgreement",
    ChooseTaxpayer: "/pagesSubPackage/invoice/pages/ChooseTaxpayer",
    PersonalClassDetail: "PersonalDetail",
    MyReservation: "MyBooking",
    ReservationClassDetail: function(e) {
        return "giveClass" === e.data.courseType ? "MyGiveClassDetail" : "ClassBookingDetail";
    },
    ReservationPersonDetail: "PersonalBookingDetail",
    ReservationPersonDetailNew: "PersonalBookingDetail",
    ReservationCampDetail: "CampBookingDetail",
    ReservationRecordList: "BookingRecordList",
    ReservationRecordCanceledList: "BookingRecordCanceledList",
    CampListFresh: "NewArrivalCampList",
    MyGivenGift: "MyGiveClass",
    ReservationMyGiveDetail: "MyGiveClassDetail",
    ReservationClassGiveDetail: "GiveClassBookingDetail",
    GiveBookingSuccess: "GiveClassBookingSuccess",
    ClassGiveBookingConfirm: "GiveClassBookingConfirm",
    GiveReceiveStatus: "GiveClassReceiveStatus",
    Badge: "BadgeIndex",
    UserInfo: "EditUserInfo",
    Rank: "SuperRank",
    RankGroup: "GroupRank",
    ExpireTicketList: "InvalidTicketList",
    CardBalance: "BalanceRecords"
};

exports.routeMap = routeMap;

var authorizePageMap = {};

exports.authorizePageMap = authorizePageMap;