var t = require("../../../utils/util"), e = getApp();

Page({
    data: {
        lottery: null,
        cardIndex: -1,
        showModal: !1,
        luckyCount: {
            text: "普通",
            width: "23%"
        },
        login: null,
        winPrize: null,
        running: !1
    },
    timeout: 300,
    doLogin: function() {
        (0, t.doLogin)();
    },
    trackClick: function(t) {
        var a = "", o = this.data.lottery.lotteryStatus;
        1 == o ? a = "initialchance" : 3 == o && (a = "extrachance"), e.sensors.track("web_gym_double11_lotterypage_click", {
            click_type: a,
            prize_type: "谢谢参与" == t ? "thankyou" : "" + t
        });
    },
    stopTurntable: function() {
        var t = this;
        clearTimeout(this.stopTimer), this.stopTimer = setTimeout(function() {
            t.stop = !0;
        }, 3300);
    },
    getLotteryCoupon: function() {
        var t = this;
        this.data.running || (this.setData({
            running: !0,
            winPrize: null
        }), this.startTurntable(), wx.lego.fetchLotteryCoupon().then(function(e) {
            t.setData({
                luckyCount: t.getLuckyCount(e.data.luckyCount)
            }), t.targetIndex = 7, t.data.lottery.couponList.forEach(function(a, o) {
                a.activityId == e.data.activityId && (t.targetIndex = o);
            }), t.targetIndex >= 0 && 7 != t.targetIndex && t.setData({
                winPrize: {
                    coachAvatar: e.data.coachAvatar + "?imageMogr2/thumbnail/260x/quality/95",
                    coachName: e.data.coachName,
                    coachUserId: e.data.coachUserId,
                    coupon: t.data.lottery.couponList[t.targetIndex]
                }
            }), t.trackClick(t.data.lottery.couponList[t.targetIndex].couponName);
        }).catch(function(e) {
            if (e.data && e.data.text) return wx.showToast({
                title: e.data.text,
                icon: "none"
            }), "none";
            t.targetIndex = 7;
        }).then(function(e) {
            "none" == e ? (t.stop = !1, t.targetIndex = -1, t.timeout = 300, t.setData({
                cardIndex: -1
            }), clearTimeout(t.stopTimer), clearInterval(t.timer)) : t.stopTurntable();
        }));
    },
    startTurntable: function() {
        var t = this;
        if (this.data.cardIndex >= 7 ? this.data.cardIndex = 0 : this.data.cardIndex++, 
        this.setData({
            cardIndex: this.data.cardIndex
        }), this.stop) {
            if (this.timeout += 20, this.timeout >= 300 && this.data.cardIndex == this.targetIndex) return this.stop = !1, 
            this.targetIndex = -1, this.timeout = 300, this.onShow(), this.setData({
                running: !1
            }), void setTimeout(function() {
                t.setData({
                    showModal: !0
                });
            }, 300);
        } else this.timeout > 60 && (this.timeout -= 20);
        clearTimeout(this.timer), this.timer = setTimeout(function() {
            t.startTurntable();
        }, this.timeout);
    },
    banTouch: function() {
        return wx.stopPullDownRefresh(), !1;
    },
    closeModal: function() {
        this.setData({
            showModal: !1
        });
    },
    getLuckyCount: function(t) {
        return t < 2 ? {
            text: "普通",
            width: "23%"
        } : t >= 2 && t < 5 ? {
            text: "高",
            width: 10 * t + 10 + "%"
        } : t >= 5 && t < 8 ? {
            text: "极高",
            width: 10 * t + 10 + "%"
        } : {
            text: "爆表",
            width: "100%"
        };
    },
    onLoad: function(t) {
        this.opt = t || {}, this.opt.userId && this.opt.timestamp && wx.lego.putLotteryFriend(this.opt.userId, this.opt.timestamp).catch(function(t) {}), 
        e.sensors.track("web_gym_double11_pageview", {
            page: "lotterypage",
            source: this.opt.source || "miniprogram"
        });
    },
    onShow: function() {
        var t = this;
        wx.lego.fetchLotteryDetail().then(function(e) {
            t.setData({
                lottery: e.data,
                luckyCount: t.getLuckyCount(e.data.luckyCount)
            });
        }).then(function() {
            wx.stopPullDownRefresh();
        }), this.setData({
            login: wx.getStorageSync(wx.keys.authorization)
        });
    },
    onHide: function() {
        clearTimeout(this.stopTimer), clearInterval(this.timer), this.setData({
            cardIndex: -1
        });
    },
    onUnload: function() {
        clearTimeout(this.stopTimer), clearInterval(this.timer);
    },
    onPullDownRefresh: function() {
        this.onShow();
    },
    onShareAppMessage: function() {
        e.sensors.track("web_gym_double11_lotterypage_click", {
            click_type: "share"
        });
        var t = wx.getStorageSync(wx.keys.keepUserInfo) || {};
        return {
            title: this.data.winPrize ? "".concat(this.data.winPrize.coachName, " 赠送我¥").concat(this.data.winPrize.coupon.couponName, "课包优惠券，邀请你也来抽取！") : "K家大转盘已开启，千元课包神券邀你来抽！",
            path: "/app/pages/db11/lottery/lottery?userId=".concat(t.userId, "&timestamp=").concat(new Date().getTime()),
            imageUrl: "https://static1.keepcdn.com/2019/10/25/18/1571998229833_420x336.png"
        };
    }
});