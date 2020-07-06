var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../../@babel/runtime/regenerator")), a = t(require("../../../../@babel/runtime/helpers/asyncToGenerator"));

Component({
    properties: {
        preBookInfo: {
            type: Object,
            value: null,
            observer: function(t, e) {
                t && this.preBookHandle();
            }
        },
        scheduleId: {
            type: String,
            value: ""
        },
        bookFrom: {
            type: String,
            value: ""
        },
        iphonex: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        bookAmount: null,
        currentPayment: {
            type: "cash",
            packageInfo: ""
        },
        recommendPackage: null,
        discountPackage: null,
        canSubmit: !0,
        checkCount: 0,
        isSelectPromotion: !1
    },
    methods: {
        preBookHandle: function() {
            for (var t = null, e = 0; e < this.data.preBookInfo.bookItems.length; e++) {
                var a = this.data.preBookInfo.bookItems[e];
                !t && a.available && (t = a);
            }
            this.setData({
                bookAmount: t
            }), this.checkPackageCount();
        },
        checkPackageCount: function() {
            var t = this.data.currentPayment;
            if (this.data.bookAmount.packageAmount > this.data.preBookInfo.availableCount) {
                var e = this.data.preBookInfo.schedulePackageList.list;
                if (e && e.length > 1) if (t.type = "package", this.data.discountPackage) t.packageInfo = this.data.discountPackage; else if (this.data.recommendPackage) t.packageInfo = this.data.recommendPackage; else for (var a = 0; a < e.length; a++) e[a].id == this.data.preBookInfo.schedulePackageList.recommendId && (this.setData({
                    recommendPackage: e[a]
                }), this.data.discountPackage || (t.packageInfo = e[a])), e[a].packageTag && (this.setData({
                    discountPackage: e[a]
                }), t.packageInfo = e[a]);
            } else t.type = "package", t.packageInfo = "";
            this.setData({
                currentPayment: t
            });
        },
        selectAmount: function(t) {
            var e = t.currentTarget.dataset.amount;
            e.available && (this.setData({
                bookAmount: e
            }), this.data.preBookInfo.availableCount > 0 && this.checkPackageCount());
        },
        selectPayment: function(t) {
            this.setData({
                currentPayment: {
                    type: t.currentTarget.dataset.type,
                    packageInfo: t.currentTarget.dataset.package || ""
                }
            });
        },
        payWithCash: function() {
            var t = (0, a.default)(e.default.mark(function t() {
                var a, o, r, n;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.data.canSubmit) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return t.prev = 2, this.setData({
                            canSubmit: !1
                        }), a = {
                            amount: this.data.bookAmount.amount,
                            bookFrom: this.data.bookFrom,
                            couponProductId: this.data.isSelectPromotion ? this.data.preBookInfo.couponPackageProduct.productId : ""
                        }, t.next = 7, wx.lego.createOrder(this.data.scheduleId, a);

                      case 7:
                        o = t.sent, r = this.data.isSelectPromotion ? this.data.preBookInfo.couponPackageProduct.productId : "", 
                        n = "/app/pages/generalPay/generalPay?orderNo=".concat(o.data.orderNo, "&bizType=").concat(o.data.bizType, "&redirectTo=courseOrder&backScheduleId=").concat(this.data.scheduleId, "&bookFrom=").concat(this.data.bookFrom, "&couponProductId=").concat(r), 
                        this.setData({
                            canSubmit: !0
                        }), wx.redirectTo({
                            url: n
                        }), t.next = 19;
                        break;

                      case 14:
                        t.prev = 14, t.t0 = t.catch(2), console.log(t.t0), this.setData({
                            canSubmit: !0
                        }), 503001 == t.t0.data.errorCode || 504005 == t.t0.data.errorCode ? this.triggerEvent("autonavtowait") : wx.showToast({
                            title: t.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 2, 14 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(),
        payWithPackage: function() {
            var t = (0, a.default)(e.default.mark(function t(a) {
                var o, r;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.data.canSubmit) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return wx.lego.reportWxMegCode({
                            id: a.detail.formId,
                            type: "form"
                        }), t.prev = 3, this.setData({
                            canSubmit: !1
                        }), o = {
                            amount: this.data.bookAmount.amount,
                            bookFrom: this.data.bookFrom
                        }, t.next = 8, wx.lego.payWithPackage(this.data.scheduleId, o);

                      case 8:
                        r = t.sent, this.setData({
                            canSubmit: !0
                        }), wx.showToast({
                            title: "预约成功，课包剩余".concat(+(this.data.preBookInfo.availableCount - this.data.bookAmount.packageAmount).toFixed(1), "个"),
                            icon: "none",
                            duration: 2e3
                        }), this.checkOrderStatus(r.data), t.next = 19;
                        break;

                      case 14:
                        t.prev = 14, t.t0 = t.catch(3), console.log(t.t0), this.setData({
                            canSubmit: !0
                        }), 503001 == t.t0.data.errorCode || 504005 == t.t0.data.errorCode ? this.triggerEvent("autonavtowait") : wx.showToast({
                            title: t.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 3, 14 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        checkOrderStatus: function() {
            var t = (0, a.default)(e.default.mark(function t(a) {
                var o, r = this;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, !(this.data.checkCount < 3)) {
                            t.next = 8;
                            break;
                        }
                        return t.next = 4, wx.lego.checkCourseOrderStatus(a);

                      case 4:
                        2 == (o = t.sent).data.status || 8 == o.data.status ? wx.redirectTo({
                            url: "/app/pages/courseOrder/courseOrder?orderNo=".concat(a, "&opened_from=0")
                        }) : (this.data.checkCount++, setTimeout(function() {
                            r.checkOrderStatus(a);
                        }, 500)), t.next = 9;
                        break;

                      case 8:
                        wx.redirectTo({
                            url: "/app/pages/courseOrder/courseOrder?orderNo=".concat(a, "&opened_from=0")
                        });

                      case 9:
                        t.next = 16;
                        break;

                      case 11:
                        t.prev = 11, t.t0 = t.catch(0), console.log(t.t0), this.data.checkCount++, setTimeout(function() {
                            r.checkOrderStatus(a);
                        }, 500);

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 0, 11 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(),
        buyPackageSchedule: function() {
            var t = (0, a.default)(e.default.mark(function t() {
                var a, o, r;
                return e.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.data.canSubmit) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        return t.prev = 2, this.setData({
                            canSubmit: !1
                        }), a = {
                            amount: this.data.bookAmount.amount,
                            buyType: "classAndPackage",
                            schedulePackageId: this.data.currentPayment.packageInfo.id,
                            bookFrom: this.data.bookFrom
                        }, t.next = 7, wx.lego.createOrder(this.data.scheduleId, a);

                      case 7:
                        o = t.sent, r = "/app/pages/generalPay/generalPay?orderNo=".concat(o.data.orderNo, "&bizType=").concat(o.data.bizType, "&redirectTo=packageOrder"), 
                        this.setData({
                            canSubmit: !0
                        }), wx.redirectTo({
                            url: r
                        }), t.next = 18;
                        break;

                      case 13:
                        t.prev = 13, t.t0 = t.catch(2), console.log(t.t0), this.setData({
                            canSubmit: !0
                        }), wx.showToast({
                            title: t.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        });

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 2, 13 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(),
        selectPromotionChange: function() {
            this.setData({
                isSelectPromotion: !this.data.isSelectPromotion
            });
        }
    }
});