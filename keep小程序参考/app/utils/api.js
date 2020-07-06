var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.account = exports.butler = exports.store = exports.lego = void 0;

var r = e(require("./request")), t = e(require("../config/config")), o = require("./schedule"), n = {
    fetchScheduleTable: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v4/miniprogram/home/schedules/table" + e
        });
    },
    fetchScheduleDynamic: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v4/miniprogram/home/schedules/dynamic" + e
        });
    },
    fetchGymOptions: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v4/miniprogram/home/schedules/gym/options" + e
        });
    },
    fetchCourseOptions: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v4/miniprogram/home/schedules/course/options"
        });
    },
    fetchFilteredSchedule: function(e, t, o, n) {
        return (0, r.default)({
            type: "lego",
            resource: "v4/miniprogram/schedule/filtered/list?baseId=" + e + "&cityCode=" + t + "&longitude=" + o + "&latitude=" + n
        });
    },
    getWxSubscribe: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/wx"
        });
    },
    getUserPackageInfo: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/index/page"
        });
    },
    getPackageHistory: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/list" + e
        });
    },
    getBond: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/receive",
            method: "POST",
            data: e
        });
    },
    updateGyms: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v2/miniprogram/gym/update/checked" + e,
            method: "POST"
        });
    },
    fetchPoi: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v6/miniprogram/gym/poi",
            query: "?gymId=" + (e || "")
        });
    },
    fetchBaseInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v3/miniprogram/gym/base/info",
            query: "?gymId=" + (e || "")
        });
    },
    fetchUserInfo: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/info"
        });
    },
    updateUserInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/update/base/info",
            method: "POST",
            data: e
        });
    },
    fetchUserCourse: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/order/list",
            query: "?tab=" + e + "&lastScheduleTime=" + t
        });
    },
    fetchCourseDetail: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/schedule/" + e + "/detail"
        });
    },
    inviteInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/new/user/invitation/share",
            query: e
        });
    },
    getInviedList: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/new/user/invitation/list"
        });
    },
    fetchCourseConfirmInfo: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v3/miniprogram/schedule/".concat(e, "/order/confirm")
        });
    },
    fetchOrderUserList: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v3/miniprogram/schedule/".concat(e, "/order/userList")
        });
    },
    fetchBookUsers: function(e, t, o) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v3/schedule/book/users?scheduleId=".concat(e, "&lastId=").concat(t, "&limit=").concat(o)
        });
    },
    createOrder: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/" + e + "/book",
            method: "POST",
            data: t
        });
    },
    checkCourseOrderStatus: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/".concat(e, "/info")
        });
    },
    createWaiting: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v2/miniprogram/schedule/".concat(e, "/waiting"),
            method: "POST",
            data: t
        });
    },
    cancelWaiting: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v2/miniprogram/schedule/".concat(e, "/waiting/cancel"),
            method: "POST"
        });
    },
    fetchWaitingDetail: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v2/miniprogram/schedule/".concat(e, "/waiting/detail")
        });
    },
    autoCancelTime: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v3/miniprogram/schedule/".concat(e, "/waiting/auto/cancel"),
            method: "POST",
            data: t
        });
    },
    fetchWechatSignedInfo: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/papay/sign/params"
        });
    },
    syncWechatSignedStatus: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/papay/sign/result"
        });
    },
    orderCourseInfo: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v2/miniprogram/order/detail?orderNo=".concat(e || "", "&scheduleId=").concat(t || "")
        });
    },
    orderDetail: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/detail?orderNo=".concat(e || "", "&scheduleId=").concat(t || "")
        });
    },
    updateOrderImgLike: function(e, t) {
        return (0, r.default)({
            type: "lego",
            method: "POST",
            resource: "v1/miniprogram/order/schedule/image/like/update",
            data: {
                orderNo: e,
                scheduleId: t
            }
        });
    },
    closeClassBagRecommend: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/order/popup/read",
            method: "POST"
        });
    },
    bindWristband: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/bind/wristband",
            method: "POST",
            data: e
        });
    },
    fetchUserCurrentBpm: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/current/bpm"
        });
    },
    changeKeepWristband: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/bind/bracelet",
            method: "POST",
            data: e
        });
    },
    fecthKeepWristband: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/bracelet/coupon"
        });
    },
    createTransferOrder: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/".concat(e, "/transfer"),
            method: "POST"
        });
    },
    orderRefund: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/refund",
            method: "POST",
            data: e
        });
    },
    orderPreRefund: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/".concat(e, "/refund/status")
        });
    },
    userCheckIn: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v2/miniprogram/user/checkin",
            method: "POST",
            data: e
        });
    },
    collectStore: function(e, t, o) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/update/favorite?favoriteId=".concat(e, "&action=").concat(t, "&favoriteType=").concat(o)
        });
    },
    medalCheckin: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/honor/".concat(e, "/checkin")
        });
    },
    checkinInfo: function(e, t, o) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/honor/checkin/info?gymId=".concat(e, "&userId=").concat(t, "&honorType=").concat(o)
        });
    },
    getCoupon: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/share/bind",
            method: "POST",
            data: e
        });
    },
    fetchInvitationInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/invitation/detail/" + e
        });
    },
    acceptInvitation: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/invitation/accept/" + e,
            method: "POST",
            data: t
        });
    },
    fetchCouponInvitationInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/new/user/invitation/card?inviter=" + e
        });
    },
    acceptCouponInvitation: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/receive",
            method: "POST",
            data: e
        });
    },
    publishModalRead: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/popup/finish/schdeule/".concat(e, "/review/read"),
            method: "POST",
            data: t
        });
    },
    fetchPersonalReviewInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/review/question/".concat(e)
        });
    },
    publishComment: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/review",
            method: "POST",
            data: e
        });
    },
    getCommentDetail: function(e, t, o) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/review/".concat(e, "?lastId=").concat(t, "&limit=").concat(o),
            method: "GET"
        });
    },
    getCommentResponseList: function(e, t, o) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/comment/list?reviewId=".concat(e, "&lastId=").concat(t, "&limit=").concat(o)
        });
    },
    deleteComment: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/review/".concat(e, "/delete"),
            method: "GET"
        });
    },
    replyComment: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/comment",
            method: "POST",
            data: e
        });
    },
    getCourseBaseId: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/baseid?scheduleId=".concat(e),
            method: "GET"
        });
    },
    fetchCommentsList: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/review/list",
            method: "GET",
            data: e
        });
    },
    fetchCoachInfo: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v5/miniprogram/coach/".concat(e, "/schedule"),
            method: "GET"
        });
    },
    fetchNewPromotion: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/unread"
        });
    },
    receivePromotion: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/read",
            method: "POST"
        });
    },
    fetchPopup: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/popup?cityCode=".concat(e)
        });
    },
    reportPopup: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/popup/".concat(e, "/read"),
            method: "POST"
        });
    },
    reportNewClassEnvelopes: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/promotion/".concat(e),
            method: "POST"
        });
    },
    previewPopup: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/popup/".concat(e)
        });
    },
    fetchUserCoupon: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/coupon/list?status=".concat(e, "&page=").concat(t, "&pageSize=20")
        });
    },
    verifyCompanyCode: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/enterprise/".concat(e, "/book"),
            method: "POST",
            data: t
        });
    },
    fetchClassBagInfo: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/package/list"
        });
    },
    buyClassBag: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/package/".concat(e, "/submit"),
            method: "POST",
            data: t
        });
    },
    checkClassBagOrder: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/".concat(e)
        });
    },
    fetchClassBagSaveList: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/package/save/money"
        });
    },
    fetchKeepWristband: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/bracelet/".concat(e)
        });
    },
    verifyEnterpriseCode: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/enterprise/package/list?code=".concat(e, "&enterpriseId=").concat(t)
        });
    },
    fetchPackageRefundStatus: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/refund/status"
        });
    },
    fetchPackageRefundReason: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/refund/reason"
        });
    },
    fetchPackageRefundDetail: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/refund/detail"
        });
    },
    applyPackageRefund: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/refund",
            method: "POST",
            data: e
        });
    },
    payWithPackage: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/".concat(e, "/fasttrack/book"),
            method: "POST",
            data: t
        });
    },
    getTrainList: function() {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/tab/list"
        });
    },
    getTrainHistory: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "history";
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/tab/history?limit=".concat(e, "&lastScheduleTime=").concat(t, "&tabName=").concat(o)
        });
    },
    getTrainingInfo: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/training/month"
        });
    },
    getCampHistoryOrder: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/camp/tab/history?limit=".concat(e, "&lastUpdateTime=").concat(t)
        });
    },
    getTrainingData: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/user/training/tab"
        });
    },
    fetchPrizeDetail: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/honor/".concat(e, "/detail?userId=").concat(t)
        });
    },
    fetchTrainingRankSelection: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/gym/rank/selection"
        });
    },
    fetchTrainingRank: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/gym/rank/list?monthAt=".concat(e, "&gymId=").concat(t)
        });
    },
    fetchPrizeRecord: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/honor/history"
        });
    },
    reportWxMegCode: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/msg/record",
            method: "POST",
            data: e
        });
    },
    fetchNewUser: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/new/user/coupon/package/detail?latitude=".concat(e, "&longitude=").concat(t)
        });
    },
    orderNewUser: function() {
        return (0, r.default)({
            type: "jupiter",
            method: "POST",
            resource: "v1/miniprogram/new/user/coupon/package/submit/order"
        });
    },
    pollOrderNewUser: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/new/user/coupon/package/".concat(e, "/status")
        });
    },
    fetchCourseSpreadTab: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/spread/tab"
        });
    },
    fetchClassDetail: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/".concat(e, "/detail?scheduleId=").concat(t)
        });
    },
    fetchCampDetail: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/camp/".concat(e, "/detail")
        });
    },
    createCampWaiting: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/camp/waiting",
            method: "POST",
            data: e
        });
    },
    cancleCampWaiting: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/camp/waiting/cancel",
            method: "POST",
            data: e
        });
    },
    createCampOrder: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/camp/order/submit",
            method: "POST",
            data: e
        });
    },
    campOrderDetail: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/camp/order/detail?orderNo=".concat(e)
        });
    },
    campOrderRefund: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/camp/order/refund",
            method: "POST",
            data: e
        });
    },
    fetchCampBookUsers: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v3/camp/book/users?campId=".concat(e)
        });
    },
    fetchActionPreviewList: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/course/".concat(e, "/step/list")
        });
    },
    fetchBubbles: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v2/miniprogram/home/bubbles"
        });
    },
    postSubscribe: function(e) {
        return (0, r.default)({
            type: "lego",
            method: "POST",
            resource: "v1/miniprogram/course/".concat(e, "/subscribe")
        });
    },
    fetchMessagesCount: function() {
        return (0, r.default)({
            type: "lego",
            method: "GET",
            resource: "v1/miniprogram/comment/new"
        });
    },
    fetchMessages: function(e, t, o) {
        return (0, r.default)({
            type: "lego",
            method: "GET",
            resource: "v1/miniprogram/comment/msg?read=".concat(e, "&lastId=").concat(t, "&limit=").concat(o)
        });
    },
    planAdd: function(e) {
        return (0, r.default)({
            type: "jupiter",
            method: "POST",
            resource: "v1/miniprogram/schedule/".concat(e, "/plan/add")
        }).then(function() {
            (0, o.firstAddPlan)();
            var e = getApp(), r = (0, o.getPathName)();
            e.sensors.track("web_gym_plan_add_click", {
                client: "mini_program",
                source: r
            });
        });
    },
    planRemove: function(e) {
        return (0, r.default)({
            type: "jupiter",
            method: "POST",
            resource: "v1/miniprogram/schedule/".concat(e, "/plan/remove")
        }).then(function() {
            var e = getApp(), r = (0, o.getPathName)();
            e.sensors.track("web_gym_plan_delete_click", {
                client: "mini_program",
                source: r
            });
        });
    },
    changePlanPrt: function(e, t) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/schedule/".concat(e, "/update/priority/").concat(t)
        });
    },
    fetchRecruitDetail: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/recruit/".concat(e, "/detail?courseSpreadId=").concat(t)
        });
    },
    fetchRegistConfirm: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/recruit/apply/detail?scheduleId=".concat(e)
        });
    },
    postRegistConfirm: function(e) {
        return (0, r.default)({
            type: "lego",
            method: "POST",
            resource: "v1/miniprogram/course/recruit/apply",
            data: e
        });
    },
    fetchRecruitResult: function(e, t) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/course/recruit/invitation?scheduleId=".concat(e, "&courseBaseId=").concat(t)
        });
    },
    fetchSomaticGamesReport: function(e) {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/body/game/".concat(e, "/detail")
        });
    },
    postEnterpriseCooperation: function(e) {
        return (0, r.default)({
            type: "jupiter",
            method: "POST",
            resource: "v1/miniprogram/enterprise/cooperation/apply",
            data: e
        });
    },
    fetchApplyResult: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/enterprise/cooperation/".concat(e, "/result")
        });
    },
    fetchLotteryCoupon: function() {
        return (0, r.default)({
            type: "lego",
            resource: "miniprogram/double/eleven/lottery/coupon"
        });
    },
    fetchLotteryDetail: function() {
        return (0, r.default)({
            type: "lego",
            resource: "miniprogram/double/eleven/lottery/detail"
        });
    },
    putLotteryFriend: function(e, t) {
        return (0, r.default)({
            type: "lego",
            method: "PUT",
            resource: "miniprogram/double/eleven/lottery/friend/help",
            data: {
                userId: e || "",
                timestamp: t || ""
            }
        });
    },
    fetchActivityDetail: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/double/eleven/activity/detail"
        });
    },
    subscribeActivity: function() {
        return (0, r.default)({
            type: "lego",
            method: "POST",
            resource: "v1/miniprogram/double/eleven/activity/subscribe"
        });
    },
    fetchDb11Mine: function() {
        return (0, r.default)({
            type: "lego",
            resource: "v1/miniprogram/double/eleven/activity/mine"
        });
    }
};

exports.lego = n;

var u = {
    generalBuy: function(e, t, o) {
        return (0, r.default)({
            type: "store",
            resource: "api/v1/general/buy?orderNo=".concat(e, "&bizType=").concat(t, "&accountType=").concat(o)
        });
    },
    generalCouponCanUseList: function(e, t) {
        return (0, r.default)({
            type: "store",
            resource: "api/v1/general/coupon/canUseList?orderNo=".concat(e, "&bizType=").concat(t)
        });
    },
    generalCouponSync: function(e, t) {
        return (0, r.default)({
            type: "store",
            resource: "api/v1/general/coupon/sync?orderNo=".concat(e.orderNo, "&bizType=").concat(e.bizType, "&couponCode=").concat(t)
        });
    },
    getCouponByPwd: function(e) {
        return (0, r.default)({
            type: "store",
            resource: "api/v1.0/promotion/getCouponByPwd",
            query: "?pwd=" + e
        });
    },
    fetchExchangeClassBag: function(e) {
        return (0, r.default)({
            type: "jupiter",
            resource: "v1/miniprogram/order/package/exchange",
            method: "POST",
            data: e
        });
    },
    getPrePay: function(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return (0, r.default)({
            type: "store",
            resource: "api/v2/prePay",
            query: "?orderNo=" + e + "&bizType=" + t + "&payType=2" + o
        });
    }
};

exports.store = u;

var a = {
    wxLogin: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/login/" + t.default.appId,
            query: "?code=" + e
        });
    },
    getUserInfo: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/userinfo/" + t.default.appId,
            method: "POST",
            data: e
        });
    },
    wxMobileLogin: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/wechat/mobile/login/" + t.default.appId,
            method: "POST",
            data: e
        });
    },
    wxMobileRegister: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/wechat/mobile/register/" + t.default.appId,
            method: "POST",
            data: e
        });
    },
    sendVaptcha: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/sms/" + t.default.appId,
            method: "POST",
            data: e
        });
    },
    sendVoiceCaptcha: function() {
        console.log("VoiceVerification");
    },
    userMobileLogin: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/mobile/login/" + t.default.appId,
            method: "POST",
            data: e
        });
    },
    userMobileRegister: function(e) {
        return (0, r.default)({
            type: "butler",
            resource: "v1/miniapp/mobile/register/" + t.default.appId,
            method: "POST",
            data: e
        });
    }
};

exports.butler = a;

var i = {
    updateUserInfo: function(e) {
        return (0, r.default)({
            type: "account",
            resource: "v2/usersetting",
            method: "POST",
            data: e
        });
    },
    refreshToken: function() {
        return (0, r.default)({
            type: "account",
            resource: "v2/refresh",
            method: "POST"
        });
    }
};

exports.account = i;