var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), a = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/wxfunction"), r = require("../../utils/util"), o = getApp();

Page({
    data: {
        btnMap: {
            0: {
                text: "即将开始",
                border: !1,
                disabled: !0
            },
            1: {
                text: "扫码签到",
                border: !1,
                disabled: !1
            },
            2: {
                text: "签到成功",
                border: !0,
                disabled: !1
            },
            3: {
                text: "已结束",
                border: !1,
                disabled: !0,
                type: "finish"
            }
        },
        order: null,
        totalNavHeight: 68,
        orderNo: "",
        refundOrderInfo: null,
        canSubmit: !0,
        ruleDetails: [ "- 课程开始7天内不支持取消预约", "- 课程开始前未达到开营人数，自动取消预约并退款", "- 训练营不支持转课" ],
        anchor: !1
    },
    onLoad: function(t) {
        this.data.orderNo = t.orderNo, t.anchor && (this.data.anchor = t.anchor);
    },
    onReady: function() {
        this.setData({
            totalNavHeight: o.globalData.customNav.totalNavHeight
        }), wx.hideShareMenu();
    },
    onShow: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, this.fetchData();

                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    handleBtn: function(t) {
        switch (t.currentTarget.dataset.campcourse.courseStatus) {
          case 0:
            wx.showToast({
                title: "课程开始前 30 分钟扫码签到",
                icon: "none"
            });
            break;

          case 1:
            this.scanCode();
            break;

          case 2:
            wx.showToast({
                title: "签到成功，无需绑定手环",
                icon: "none"
            });
        }
    },
    scanCode: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, o, c, i = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, (0, n.wxScanCode)();

                  case 3:
                    (a = t.sent).path && (o = this.getQuery(a.path), c = {
                        gymId: o
                    }, wx.lego.userCheckIn(c).then(function(t) {
                        i.fetchData(), wx.showToast({
                            title: "签到成功，无需绑定手环",
                            icon: "none"
                        });
                    }).catch(function(t) {
                        401 === t.statusCode ? (0, r.doLogin)() : wx.showToast({
                            title: t.data.text || "签到失败，请重新扫码！",
                            icon: "none",
                            duration: 2e3
                        });
                    })), t.next = 11;
                    break;

                  case 7:
                    t.prev = 7, t.t0 = t.catch(0), wx.showToast({
                        title: "扫码失败，请重新扫码！",
                        icon: "none",
                        duration: 2e3
                    }), console.log(t.t0);

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
    fetchData: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    wx.lego.campOrderDetail(this.data.orderNo).then(function(t) {
                        for (var e, n = t.data, r = n.campCourseInfos.length, c = 0; c < r; c++) if (0 == n.campCourseInfos[c].courseStatus || 1 == n.campCourseInfos[c].courseStatus) {
                            e = c;
                            break;
                        }
                        if (a.data.anchor && (2 == n.userBookStatus || 1 == n.userBookStatus) && void 0 !== e) {
                            var i = o.globalData.customNav.totalNavHeight, u = "#camp-course-card-".concat(e);
                            wx.nextTick(function() {
                                wx.createSelectorQuery().select(u).boundingClientRect(function(t) {
                                    if (t && t.top) {
                                        var e = t.top - i;
                                        wx.pageScrollTo({
                                            scrollTop: e
                                        });
                                    }
                                }).exec();
                            });
                        }
                        a.setData({
                            order: n,
                            anchor: !1
                        });
                    }).catch(function(t) {
                        401 === t.statusCode && (0, r.doLogin)();
                    });

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, this);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    getQuery: function(t) {
        var e = t.match(/(?:&|\?)gymId=([^&]*)/g);
        return e[e.length - 1].split("=")[1];
    },
    orderPreRefund: function() {
        var t = this;
        this.setData({
            refundOrderInfo: {
                title: "确定取消预约",
                content: "训练营是 Keepland 为用户精心打造的课程，能够帮助你快速达成训练目标",
                type: "strong",
                confirmText: "确定取消",
                cancelText: "再想想",
                confirm: function() {
                    t.orderRefund();
                },
                cancel: function() {
                    t.setData({
                        refundOrderInfo: null
                    });
                }
            }
        });
    },
    orderRefund: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !this.data.canSubmit) {
                        t.next = 8;
                        break;
                    }
                    return this.data.canSubmit = !1, t.next = 5, wx.lego.campOrderRefund({
                        orderNo: this.data.orderNo
                    });

                  case 5:
                    this.data.canSubmit = !0, this.setData({
                        refundOrderInfo: null
                    }), this.fetchData();

                  case 8:
                    t.next = 14;
                    break;

                  case 10:
                    t.prev = 10, t.t0 = t.catch(0), this.data.canSubmit = !0, 401 === t.t0.statusCode ? (0, 
                    r.doLogin)() : (wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    }), this.setData({
                        refundOrderInfo: null
                    }));

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 10 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    bindcontact: function(t) {
        t.detail.path && wx.navigateTo({
            url: t.detail.path
        });
    },
    copyWechat: function() {
        wx.setClipboardData({
            data: this.data.order.coachWeChatName,
            success: function() {
                wx.hideLoading(), wx.showToast({
                    title: "复制成功",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    onPullDownRefresh: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, this.fetchData();

                  case 3:
                    wx.stopPullDownRefresh(), t.next = 9;
                    break;

                  case 6:
                    t.prev = 6, t.t0 = t.catch(0), console.log(t.t0);

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 6 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }()
});