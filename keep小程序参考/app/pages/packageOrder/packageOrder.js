var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), a = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), r = getApp();

Page({
    data: {
        canCheckOrder: !0,
        packageOrderNo: "",
        scheduleOrderNo: "",
        status: 0
    },
    onLoad: function(t) {
        var e = this;
        this.data.packageOrderNo = t.orderNo, setTimeout(function() {
            e.checkClassBagOrder();
        }, 500);
    },
    onHide: function() {
        this.data.canCheckOrder = !1;
    },
    onUnload: function() {
        this.data.canCheckOrder = !1;
    },
    checkClassBagOrder: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, s = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.data.canCheckOrder) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.prev = 2, t.next = 5, wx.lego.checkClassBagOrder(this.data.packageOrderNo);

                  case 5:
                    a = t.sent, console.log(a.data, "------ class bag order info ------"), 2 == a.data.status ? a.data.scheduleId ? (this.data.scheduleOrderNo = a.data.scheduleOrderNo, 
                    this.data.scheduleOrderNo ? (this.data.status = 2, setTimeout(function() {
                        s.checkOrderStatus();
                    }, 500)) : this.data.status = -3, this.setData({
                        status: this.data.status
                    })) : (r.globalData.keepWristband = {
                        hasBraceletCoupon: a.data.hasBraceletCoupon,
                        orderNo: this.data.packageOrderNo
                    }, this.setData({
                        status: 1
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 500)) : 8 == a.data.status ? wx.showToast({
                        title: "支付失败自动退款",
                        icon: "none",
                        duration: 2e3
                    }) : setTimeout(function() {
                        s.checkClassBagOrder();
                    }, 500), t.next = 14;
                    break;

                  case 10:
                    t.prev = 10, t.t0 = t.catch(2), console.log(t.t0), 502 === t.t0.statusCode || 504 === t.t0.statusCode ? setTimeout(function() {
                        s.checkClassBagOrder();
                    }, 500) : wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 10 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    checkOrderStatus: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, r = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.data.canCheckOrder) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.prev = 2, t.next = 5, wx.lego.checkCourseOrderStatus(this.data.scheduleOrderNo);

                  case 5:
                    a = t.sent, console.log(a.data, "------ course order info ------"), 2 == a.data.status || 8 == a.data.status ? (this.setData({
                        status: 3
                    }), setTimeout(function() {
                        wx.redirectTo({
                            url: "/app/pages/courseOrder/courseOrder?orderNo=".concat(r.data.scheduleOrderNo, "&opened_from=0")
                        });
                    }, 500)) : setTimeout(function() {
                        r.checkOrderStatus();
                    }, 500), t.next = 14;
                    break;

                  case 10:
                    t.prev = 10, t.t0 = t.catch(2), console.log(t.t0), 502 === t.t0.statusCode || 504 === t.t0.statusCode ? setTimeout(function() {
                        r.checkOrderStatus();
                    }, 500) : (this.setData({
                        status: -3
                    }), wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    }));

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 10 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }()
});