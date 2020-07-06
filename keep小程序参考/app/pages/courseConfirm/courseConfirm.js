var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/defineProperty")), a = t(require("../../../@babel/runtime/regenerator")), i = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/util"), o = getApp();

Page({
    data: {
        scheduleId: "",
        bookFrom: "",
        currentOrderType: "",
        scheduleHeadDetail: null,
        preBookInfo: null,
        preWaitInfo: null,
        conflictScheduleInfo: null,
        checkCount: 0,
        autoWaiting: !1,
        isShowKeyboard: !0,
        riskDetails: null,
        ruleDetails: [ "距离课程开始 4 小时内不支持取消预约", "多人入场券仅支持购买者操作取消预约，取消后该订单内所有入场券均失效", "使用门店新人券的课程无法转课", "其他课程在结束前都支持转课给朋友，课程被好友领取后，不支持取消预约及二次转课" ],
        showRisk: !1,
        showRules: !1,
        iphonex: !1,
        canFetchInfo: !0,
        adidasTipInfo: null
    },
    onLoad: function(t) {
        this.options = t || {}, this.setData({
            scheduleId: t.scheduleId
        }), this.fetchCourseConfirmInfo();
    },
    onReady: function() {
        this.setData({
            iphonex: o.globalData.iphonex,
            bookFrom: o.globalData.bookFrom || this.options.bookFrom || ""
        });
    },
    onShow: function() {
        var t = o.globalData.wechatSignedResult;
        if (null !== t) return o.globalData.wechatSignedResult = null, void (void 0 === t || "SUCCESS" == t.return_code ? (wx.showLoading({
            title: "获取签约结果中"
        }), this.syncWechatSignedStatus()) : wx.showToast({
            title: t.return_msg,
            icon: "none",
            duration: 2e3
        }));
        this.canShow ? wx.getStorageSync(wx.keys.keepUserInfo) ? this.fetchCourseConfirmInfo() : this.data.canFetchInfo || wx.navigateBack() : this.canShow = !0;
    },
    fetchCourseConfirmInfo: function() {
        var t = (0, i.default)(a.default.mark(function t() {
            var e, i, s, r, c, d, l, h = this;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, wx.lego.fetchCourseConfirmInfo(this.data.scheduleId);

                  case 3:
                    if (e = t.sent, i = e.data, this.data.currentOrderType = i.currentOrderType, this.data.scheduleHeadDetail = i.scheduleHeadDetail, 
                    i.conflictScheduleList && i.conflictScheduleList.length && (this.data.conflictScheduleInfo = i.conflictScheduleList[0], 
                    "normal" == this.data.currentOrderType ? this.data.conflictScheduleInfo.openedFrom = 0 : "wait" == this.data.currentOrderType ? this.data.conflictScheduleInfo.openedFrom = 1 : "enterprise" == this.data.currentOrderType && (this.data.conflictScheduleInfo.openedFrom = 2, 
                    this.data.isShowKeyboard = !1), o.sensors.track("web_gym_kindlyreminder_view", {
                        client: "mini_program",
                        opened_from: this.data.conflictScheduleInfo.openedFrom
                    })), "normal" == this.data.currentOrderType ? this.data.preBookInfo = i.preBookResponseV2 : "wait" == this.data.currentOrderType && (this.data.preWaitInfo = i.schedulePreWaitingResponse), 
                    this.data.scheduleHeadDetail && this.data.scheduleHeadDetail.descriptionDetails) for (s = 0; s < this.data.scheduleHeadDetail.descriptionDetails.length; s++) "运动风险提示" == this.data.scheduleHeadDetail.descriptionDetails[s].title && (this.data.riskDetails = this.data.scheduleHeadDetail.descriptionDetails[s]);
                    this.setData({
                        currentOrderType: this.data.currentOrderType,
                        scheduleHeadDetail: this.data.scheduleHeadDetail,
                        conflictScheduleInfo: this.data.conflictScheduleInfo,
                        isShowKeyboard: this.data.isShowKeyboard,
                        preBookInfo: this.data.preBookInfo,
                        preWaitInfo: this.data.preWaitInfo,
                        riskDetails: this.data.riskDetails
                    }), r = wx.getStorageSync(wx.keys.isNotFirstGetAdiGym), i.flashGymTips && i.flashGymTips.title && !r && (c = i.flashGymTips.title, 
                    d = [], i.flashGymTips.content && i.flashGymTips.content.length && (d = i.flashGymTips.content.reduce(function(t, e) {
                        return t.push({
                            subContent: e
                        }), t;
                    }, [])), l = {
                        class: "adidas-tip",
                        imgSrc: "https://static1.keepcdn.com/2019/07/25/10/1564020738140_576x200.png",
                        title: c,
                        contentArray: d,
                        type: "strong",
                        confirmText: "我知道了",
                        confirm: function() {
                            h.setData({
                                adidasTipInfo: null
                            });
                        },
                        cancel: function() {
                            h.setData({
                                adidasTipInfo: null
                            });
                        }
                    }, this.setData({
                        adidasTipInfo: l
                    }), wx.setStorageSync(wx.keys.isNotFirstGetAdiGym, !0)), t.next = 19;
                    break;

                  case 15:
                    t.prev = 15, t.t0 = t.catch(0), console.log(t.t0), 401 === t.t0.statusCode ? (this.data.canFetchInfo = !1, 
                    (0, n.doLogin)()) : wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 19:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 15 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    syncWechatSignedStatus: function() {
        var t = (0, i.default)(a.default.mark(function t() {
            var e = this;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !(this.data.checkCount < 10)) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 4, wx.lego.syncWechatSignedStatus();

                  case 4:
                    2 === t.sent.data.signStatus ? (wx.hideLoading(), wx.showToast({
                        title: "成功开通微信免密支付",
                        icon: "none",
                        duration: 2e3
                    }), setTimeout(function() {
                        e.setData({
                            autoWaiting: !0
                        }), e.fetchCourseConfirmInfo();
                    }, 2e3)) : (this.data.checkCount++, setTimeout(function() {
                        e.syncWechatSignedStatus();
                    }, 500)), t.next = 10;
                    break;

                  case 8:
                    this.data.checkCount = 0, wx.hideLoading();

                  case 10:
                    t.next = 18;
                    break;

                  case 12:
                    t.prev = 12, t.t0 = t.catch(0), console.log(t.t0), this.data.checkCount = 0, wx.hideLoading(), 
                    wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 18:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 12 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    showDetail: function(t) {
        var a = t.currentTarget.dataset.type;
        this.setData((0, e.default)({}, a, !this.data[a]));
    },
    autonavtowait: function() {
        o.sensors.track("web_gym_switchtowait", {
            client: "mini_program"
        }), this.onShow(), wx.showToast({
            title: "课程已约满，已帮你切换至等位",
            icon: "none",
            duration: 3e3
        });
    },
    closeconflicttip: function(t) {
        t.detail.isContinue ? this.setData({
            conflictScheduleInfo: null
        }) : wx.navigateBack({
            delta: 1
        });
    }
});