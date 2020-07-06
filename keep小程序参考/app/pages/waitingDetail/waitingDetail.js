var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../@babel/runtime/regenerator")), e = t(require("../../../@babel/runtime/helpers/defineProperty")), i = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/util"), s = getApp();

Page({
    data: {
        scheduleId: "",
        waitingInfo: null,
        avaliableTimeList: [],
        cancelDateText: "",
        selectedIndex: 0,
        showPickerMask: !1,
        pickerAnimation: null,
        animation: null
    },
    cancel: function() {
        var t = this;
        wx.showModal({
            title: "确定取消等位？",
            content: "",
            cancelText: "确定取消",
            cancelColor: "#333333",
            confirmText: "继续等位",
            confirmColor: "#24c789",
            success: function(a) {
                a.confirm || a.cancel && t.cancelWaiting();
            }
        });
    },
    pickerConfirm: function(t) {
        var a = this, e = this.data.avaliableTimeList[t];
        e.id != this.data.waitingInfo.autoCancelTime && wx.lego.autoCancelTime(this.data.scheduleId, {
            autoCancelTime: e.id
        }).then(function(e) {
            a.fetchWaitingDetail(!0), a.setData({
                selectedIndex: t
            });
        }).catch(function(t) {
            console.log(t), wx.showToast({
                title: t.data.text,
                icon: "none",
                duration: 2e3
            });
        });
    },
    pickerCancel: function(t) {},
    openPicker: function() {
        this.startPickerAnimation(!0);
    },
    startPickerAnimation: function(t) {
        t ? this.data.animation.translateY("0vh").step() : this.data.animation.translateY("40vh").step(), 
        this.setData({
            pickerAnimation: this.data.animation.export(),
            showPickerMask: t
        });
    },
    closePicker: function(t) {
        this.startPickerAnimation(!1), this.pickerCancel(t);
    },
    confirmPicker: function() {
        this.startPickerAnimation(!1), this.pickerConfirm(this.data.selectedIndex);
    },
    pickerValueChange: function(t) {
        var a = t.detail.value;
        this.data.selectedIndex = a[0];
    },
    cancelWaiting: function() {
        var t = (0, i.default)(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, wx.lego.cancelWaiting(this.data.scheduleId);

                  case 3:
                    this.setData((0, e.default)({}, "waitingInfo.status", 1)), this.clearTimer(), t.next = 11;
                    break;

                  case 7:
                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0), wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 7 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    fetchWaitingDetail: function() {
        var t = (0, i.default)(a.default.mark(function t(e) {
            var i, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, wx.lego.fetchWaitingDetail(this.data.scheduleId);

                  case 3:
                    i = t.sent, this.data.waitingInfo = i.data, this.handleAvaliableTime(this.data.waitingInfo.autoCancelTimeList), 
                    this.handleCancelTime(this.data.waitingInfo.autoCancelTime), this.processCounting(this.data.waitingInfo), 
                    this.data.waitingInfo.autoCancelTime ? this.data.selectedIndex = this.data.waitingInfo.autoCancelTimeList.indexOf(this.data.waitingInfo.autoCancelTime) + 1 : this.data.selectedIndex = 0, 
                    e && (o = this.data.waitingInfo.autoCancelTime ? this.data.waitingInfo.autoCancelTime.split(/[\/:]/) : "", 
                    s.sensors.track("web_gym_wait_deadline_set", {
                        client: "mini_program",
                        deadline: parseInt(o[3]),
                        course_time: wx.moment(this.data.waitingInfo.scheduleStartTime).format("h:mm")
                    })), this.setData({
                        waitingInfo: i.data,
                        selectedIndex: this.data.selectedIndex
                    }), t.next = 17;
                    break;

                  case 13:
                    t.prev = 13, t.t0 = t.catch(0), console.log(t.t0), 401 === t.t0.statusCode ? (0, 
                    n.doLogin)() : wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 13 ] ]);
        }));
        return function(a) {
            return t.apply(this, arguments);
        };
    }(),
    clearTimer: function() {
        this.data.waitingInfo && this.data.waitingInfo.timer && clearInterval(this.data.waitingInfo.timer);
    },
    formatNumber: function(t) {
        return t < 10 ? "0" + t : t;
    },
    diffFormat: function(t, a) {
        a < 1 && (clearInterval(t.timer), t.showCountdown = !1);
        var e = this.formatNumber(a % 60), i = parseInt(a / 60), n = this.formatNumber(i % 60), s = this.formatNumber(parseInt(i / 60));
        t.countdownStr = "".concat(s, ":").concat(n, ":").concat(e), this.setData({
            waitingInfo: t
        });
    },
    processCounting: function(t) {
        var a = this, e = new Date().getTime(), i = parseInt((t.scheduleStartTime - e) / 1e3);
        i > 0 && i < 86400 && (t.showCountdown = !0, this.diffFormat(t, i), t.timer = setInterval(function() {
            a.diffFormat(t, --i);
        }, 1e3));
    },
    onLoad: function(t) {
        this.setData({
            scheduleId: t.scheduleId || ""
        }), s.sensors.track("web_gym_wait_detail", {
            client: "mini_program"
        });
    },
    onReady: function() {
        this.data.animation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
    },
    onShow: function() {
        this.data.waitingInfo && 1 == this.data.waitingInfo.status || this.fetchWaitingDetail();
    },
    onHide: function() {
        this.clearTimer();
    },
    onUnload: function() {
        this.clearTimer();
    },
    handleAvaliableTime: function(t) {
        t && (this.data.avaliableTimeList = t.map(function(t, a, e) {
            var i = t.split("/");
            return {
                value: i[1] + "月" + i[2] + "号 " + i[3],
                id: t
            };
        }), this.data.avaliableTimeList.length && this.data.avaliableTimeList.unshift({
            value: "不限时间",
            id: ""
        }), this.setData({
            avaliableTimeList: this.data.avaliableTimeList
        }));
    },
    handleCancelTime: function(t) {
        var a = t ? t.split(/[\/:]/) : "";
        a ? this.setData({
            cancelDateText: a[1] + "月" + a[2] + "号 " + a[3] + ":" + a[4]
        }) : this.setData({
            cancelDateText: a
        });
    }
});