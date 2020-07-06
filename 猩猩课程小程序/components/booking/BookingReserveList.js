var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingReserveList",
    props: {
        reserveList: {
            type: Array,
            default: []
        },
        orderId: {
            type: String,
            default: ""
        },
        coachNicker: {
            type: String,
            default: ""
        }
    },
    data: {},
    computed: {},
    watch: {},
    methods: {
        acceptReserve: function(e) {
            var o = this, t = "".concat(this.coachNicker, "教练为你预留了").concat(e.date, " ").concat(e.startTime, "-").concat(e.endTime, "的训练。接受预留后，") + "训练当天0:00前取消预约返还课时，训练当天无法取消预约，确认接受本次预留么？\n";
            this.$showModal({
                title: "接受预留",
                content: t,
                isShowCancel: !0,
                cancelText: "我再看看",
                confirmText: "接受",
                success: function() {
                    wx.showLoading({
                        mask: !0
                    }), o.$store.dispatch(o.$store.actions.biz.personal.reserve.acceptPersonalReserve({
                        sk: e.sk,
                        personalClassBookingScheduleId: e.personalClassBookingScheduleId
                    })).then(function() {
                        o.$hideLoading(), o.$showModal({
                            title: "成功接受预留",
                            content: "为确保课程正常进行，请按时到场哦～如因特殊原因无法训练，请在训练当天0:00前取消预约",
                            confirmText: "我知道了"
                        }), o._fetchData();
                    }).catch(function(e) {
                        var t = e.msg;
                        o._receiveError(t);
                    });
                }
            });
        },
        refuseReserve: function(e) {
            var o = this, t = this.coachNicker, n = "".concat(t, "教练为你预留了").concat(e.date, " ").concat(e.startTime, "-").concat(e.endTime, "的训练，拒绝预留后课时数将返还，确认拒绝本次预留么？");
            this.$showModal({
                title: "拒绝预留",
                content: n,
                isShowCancel: !0,
                cancelText: "我再看看",
                confirmText: "拒绝",
                success: function() {
                    wx.showLoading({
                        mask: !0
                    }), o.$store.dispatch(o.$store.actions.biz.personal.reserve.rejectPersonalReserve({
                        sk: e.sk,
                        personalClassBookingScheduleId: e.personalClassBookingScheduleId
                    })).then(function() {
                        o.$hideLoading(), o.$showToast("已拒绝"), o._fetchData();
                    }).catch(function(e) {
                        var t = e.msg;
                        o._resultError(t, "refuse");
                    });
                }
            });
        },
        cancelReserve: function(e) {
            var o = this, t = "将为你取消".concat(e.date, " ").concat(e.startTime, "-").concat(e.endTime, "的私教训练，取消后课时数将自动返还，确认取消？");
            this.$showModal({
                title: "提示",
                content: t,
                isShowCancel: !0,
                cancelText: "我再看看",
                confirmText: "确认取消",
                success: function() {
                    wx.showLoading({
                        mask: !0
                    }), o.$store.dispatch(o.$store.actions.biz.personal.reserve.cancelPersonalReserve({
                        sk: e.sk,
                        personalClassBookingScheduleId: e.personalClassBookingScheduleId
                    })).then(function() {
                        o._fetchData();
                    }).catch(function(e) {
                        var t = e.msg;
                        o._resultError(t, "cancel");
                    });
                }
            });
        }
    },
    extraEvents: {},
    _fetchData: function() {
        var e = this;
        this.$store.dispatch(this.$store.actions.getPersonalBookingDetail({
            sk: this.sk,
            orderId: this.orderId
        })).then(function() {
            wx.hideLoading();
        }).catch(function() {
            e.$failLoading();
        });
    },
    _receiveError: function(e) {
        this.$showModal({
            title: "无法接受",
            content: e,
            confirmText: "我知道了"
        }), this._fetchData();
    },
    _resultError: function(e, t) {
        var o;
        switch (t) {
          case "refuse":
            o = "无法拒绝";
            break;

          case "cancel":
            o = "无法取消";
            break;

          default:
            o = "提示";
        }
        wx.hideLoading(), this.$showModal({
            title: o,
            content: e,
            confirmText: "我知道了"
        });
    }
}, {
    info: {
        components: {
            "show-modal": {
                path: "./../common/feedback/Modal"
            }
        },
        on: {}
    },
    handlers: {
        "1096-0": {
            tap: function(e) {
                this.acceptReserve(e);
            }
        },
        "1096-1": {
            tap: function(e) {
                this.refuseReserve(e);
            }
        },
        "1096-2": {
            tap: function(e) {
                this.cancelReserve(e);
            }
        }
    },
    models: {},
    refs: void 0
});