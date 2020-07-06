var t, o = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = o(require("../../../@babel/runtime/helpers/defineProperty")), a = o(require("../../../@babel/runtime/regenerator")), n = o(require("../../../@babel/runtime/helpers/asyncToGenerator")), r = require("../../utils/api"), i = getApp();

Page((t = {
    data: {
        navigatorBarTitle: "信息确认",
        orderInfo: null,
        couponList: [],
        hasCouponList: !1,
        showCouponList: !1,
        option: null,
        checkCount: 0,
        totalNavHeight: 68,
        iphonex: !1,
        couponProductId: "",
        path: ""
    },
    showCoupons: function() {
        this.setData({
            navigatorBarTitle: "选择优惠券",
            showCouponList: !0
        });
    },
    closeCoupons: function() {
        this.setData({
            navigatorBarTitle: "信息确认",
            showCouponList: !1
        });
    },
    selectCoupon: function(t) {
        var o = this, e = t.currentTarget.dataset.item, a = this.data.option;
        r.store.generalCouponSync(a, e.couponCode).then(function(t) {
            var e = t.data;
            o.data.orderInfo.couponInfo.showDesc = e.couponInfo, o.data.orderInfo.couponInfo.couponCode = e.couponCode, 
            o.data.orderInfo.displayPrice = (e.totalPaid / 100).toFixed(2), e.couponPayAmount && "number" == typeof e.couponPayAmount && (o.data.orderInfo.displayCouponPrice = (e.couponPayAmount / 100).toFixed(2)), 
            o.setData({
                orderInfo: o.data.orderInfo,
                navigatorBarTitle: "信息确认",
                showCouponList: !1
            });
        }).catch(function(t) {
            wx.showToast({
                title: t.data.errorMessage || "优惠券使用失败",
                icon: "none"
            });
        });
    },
    showCouponRules: function(t) {
        var o = t.currentTarget.dataset.index;
        this.data.couponList[o].showCouponRules = !this.data.couponList[o].showCouponRules, 
        this.setData({
            couponList: this.data.couponList
        });
    },
    buy: function() {
        wx.showLoading({
            title: "提交中"
        });
        var t = this.data.option;
        this.getPrePay(t.orderNo, t.bizType, this.data.orderInfo);
    },
    onLoad: function(t) {
        this.data.option = t, this.data.couponProductId = t.couponProductId || "", this.fetchOrderInfo(t), 
        this.fetchCouponList(t);
    },
    onReady: function() {
        this.setData({
            totalNavHeight: i.globalData.customNav.totalNavHeight,
            iphonex: i.globalData.iphonex
        });
    }
}, (0, e.default)(t, "onReady", function() {
    this.setData({
        iphonex: i.globalData.iphonex
    });
}), (0, e.default)(t, "fetchOrderInfo", function() {
    var t = (0, n.default)(a.default.mark(function t(o) {
        var e, n = this;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                e = /Android/i.test(wx.getSystemInfoSync().system) ? 102 : 101, r.store.generalBuy(o.orderNo, o.bizType, e).then(function(t) {
                    var o = t.data;
                    o.couponInfo && o.couponInfo.couponQty > 1 ? n.data.hasCouponList = !0 : n.data.hasCouponList = !1, 
                    o.displayPrice = (o.totalPrice / 100).toFixed(2), o.couponInfo && "number" == typeof o.couponInfo.couponPayAmount && (o.displayCouponPrice = (o.couponInfo.couponPayAmount / 100).toFixed(2)), 
                    o.promotionList && o.promotionList.forEach(function(t, o) {
                        t.displayAmount = (t.amount / 100).toFixed(2);
                    }), n.setData({
                        orderInfo: o,
                        hasCouponList: n.data.hasCouponList
                    });
                }).catch(function(t) {
                    wx.showToast({
                        title: t.data.text || "订单信息获取失败",
                        icon: "none"
                    });
                });

              case 2:
              case "end":
                return t.stop();
            }
        }, t);
    }));
    return function(o) {
        return t.apply(this, arguments);
    };
}()), (0, e.default)(t, "fetchCouponList", function() {
    var t = (0, n.default)(a.default.mark(function t(o) {
        var e = this;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                r.store.generalCouponCanUseList(o.orderNo, o.bizType).then(function(t) {
                    e.setData({
                        couponList: t.data.couponList
                    });
                }).catch(function(t) {
                    wx.showToast({
                        title: t.data.errorMessage || "优惠券获取失败",
                        icon: "none"
                    });
                });

              case 1:
              case "end":
                return t.stop();
            }
        }, t);
    }));
    return function(o) {
        return t.apply(this, arguments);
    };
}()), (0, e.default)(t, "getPrePay", function() {
    var t = (0, n.default)(a.default.mark(function t(o, e, n) {
        var c, u, s, p, d, h, f = this;
        return a.default.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return c = n && n.couponInfo && n.couponInfo.couponCode ? "&couponCode=".concat(n.couponInfo.couponCode) : "", 
                t.prev = 1, t.next = 4, r.store.getPrePay(o, e, c);

              case 4:
                u = t.sent, s = u.data, wx.hideLoading(), s.prePay && wx.lego.reportWxMegCode({
                    id: s.prePay.prepayId,
                    type: "prepay"
                }), p = this.data.option.redirectTo, this.data.path = "/app/pages/".concat(p, "/").concat(p, "?orderNo=").concat(o, "&opened_from=0"), 
                s.zero ? (wx.showToast({
                    title: "购买成功",
                    icon: "none"
                }), "courseOrder" == p ? this.checkOrderInfo(o, p) : "packageOrder" == p ? (d = null, 
                this.data.option.initiateSource ? d = {
                    client: "mini_program",
                    role: "initiator",
                    initiate_source: this.data.option.initiateSource
                } : this.data.option.participateSource && (d = {
                    client: "mini_program",
                    role: "participator",
                    participate_source: this.data.option.participateSource
                }), d && i.sensors.track("web_gym_package_groupbuying", d), wx.redirectTo({
                    url: this.data.path
                })) : wx.navigateBack()) : wx.requestPayment({
                    timeStamp: s.prePay.timeStamp,
                    nonceStr: s.prePay.nonceStr,
                    package: "prepay_id=".concat(s.prePay.prepayId),
                    signType: "MD5",
                    paySign: s.prePay.sign,
                    success: function() {
                        if (wx.showToast({
                            title: "购买成功",
                            icon: "none"
                        }), "courseOrder" == p || "campOrder" == p) f.checkOrderInfo(o, p); else if ("packageOrder" == p) {
                            var t = null;
                            f.data.option.initiateSource ? t = {
                                client: "mini_program",
                                role: "initiator",
                                initiate_source: f.data.option.initiateSource
                            } : f.data.option.participateSource && (t = {
                                client: "mini_program",
                                role: "participator",
                                participate_source: f.data.option.participateSource
                            }), t && i.sensors.track("web_gym_package_groupbuying", t), wx.redirectTo({
                                url: f.data.path
                            });
                        } else wx.navigateBack();
                    }
                }), t.next = 29;
                break;

              case 13:
                t.prev = 13, t.t0 = t.catch(1), wx.hideLoading(), h = "", t.t1 = t.t0.data.errorCode, 
                t.next = 230001 === t.t1 ? 20 : 230003 === t.t1 ? 22 : 230007 === t.t1 ? 24 : 26;
                break;

              case 20:
                return h = "你已预约过该课程了", t.abrupt("break", 27);

              case 22:
                return h = "优惠券失效，请重新选择下单", t.abrupt("break", 27);

              case 24:
                return h = "手速慢了，已经有人抢先一步提交订单了", t.abrupt("break", 27);

              case 26:
                h = "购买失败,请重新下单";

              case 27:
                wx.showToast({
                    title: h,
                    icon: "none"
                }), setTimeout(function() {
                    f.data.option.backScheduleId ? wx.redirectTo({
                        url: "/app/pages/courseConfirm/courseConfirm?scheduleId=".concat(f.data.option.backScheduleId, "&bookFrom=").concat(f.data.option.bookFrom)
                    }) : wx.navigateBack();
                }, 1500);

              case 29:
              case "end":
                return t.stop();
            }
        }, t, this, [ [ 1, 13 ] ]);
    }));
    return function(o, e, a) {
        return t.apply(this, arguments);
    };
}()), (0, e.default)(t, "checkOrderInfo", function(t, o) {
    var e = this;
    this.data.checkCount < 3 ? ("courseOrder" == o ? wx.lego.checkCourseOrderStatus(t) : wx.lego.pollOrderNewUser(t)).then(function(a) {
        2 === a.data.status || 8 === a.data.status || 2 === a.data || 8 === a.status ? (2 == a.data.status && e.data.couponProductId && i.sensors.track("web_gym_newbie_coupon_success", {
            source: 6
        }), wx.redirectTo({
            url: e.data.path
        })) : (e.data.checkCount++, setTimeout(function() {
            e.checkOrderInfo(t, o);
        }, 500));
    }).catch(function(a) {
        e.data.checkCount++, setTimeout(function() {
            e.checkOrderInfo(t, o);
        }, 500);
    }) : wx.redirectTo({
        url: this.data.path
    });
}), t));