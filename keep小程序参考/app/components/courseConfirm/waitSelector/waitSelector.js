var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../../@babel/runtime/regenerator")), e = t(require("../../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../../utils/wxfunction");

Component({
    properties: {
        preWaitInfo: {
            type: Object,
            value: null,
            observer: function(t, a) {
                t && this.preWaitHandle();
            }
        },
        autoWaiting: {
            type: Boolean,
            value: !1
        },
        scheduleId: {
            type: String,
            value: ""
        },
        iphonex: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        currentPayment: null,
        canSubmit: !0
    },
    methods: {
        preWaitHandle: function() {
            if (this.data.currentPayment) for (var t = 0; t < this.data.preWaitInfo.availablePayment.length; t++) {
                var a = this.data.preWaitInfo.availablePayment[t];
                if (a.payType == this.data.currentPayment.payType) {
                    this.data.currentPayment = a;
                    break;
                }
            } else for (var e = 0; e < this.data.preWaitInfo.availablePayment.length; e++) {
                var n = this.data.preWaitInfo.availablePayment[e];
                if (1 == n.availableStatus || 2 == n.payType) {
                    this.data.currentPayment = n;
                    break;
                }
            }
            this.setData({
                currentPayment: this.data.currentPayment
            }), this.data.autoWaiting && this.createWaiting();
        },
        createWaiting: function() {
            var t = (0, e.default)(a.default.mark(function t() {
                var e;
                return a.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (1 == this.data.currentPayment.availableStatus) {
                            t.next = 3;
                            break;
                        }
                        return wx.showToast({
                            title: "接口请求错误",
                            icon: "none",
                            duration: 2e3
                        }), t.abrupt("return");

                      case 3:
                        if (this.data.canSubmit) {
                            t.next = 5;
                            break;
                        }
                        return t.abrupt("return");

                      case 5:
                        return t.prev = 5, this.setData({
                            canSubmit: !1
                        }), e = {
                            payType: this.data.currentPayment.payType,
                            waitSuccessRatio: this.data.preWaitInfo.waitingSuccessRatio
                        }, t.next = 10, wx.lego.createWaiting(this.data.scheduleId, e);

                      case 10:
                        this.setData({
                            canSubmit: !0
                        }), wx.redirectTo({
                            url: "/app/pages/waitingDetail/waitingDetail?scheduleId=".concat(this.data.scheduleId)
                        }), t.next = 19;
                        break;

                      case 14:
                        t.prev = 14, t.t0 = t.catch(5), console.log(t.t0), this.setData({
                            canSubmit: !0
                        }), wx.showToast({
                            title: t.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        });

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 5, 14 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(),
        selectPayment: function(t) {
            var a = t.currentTarget.dataset.payment;
            1 != a.availableStatus && 2 != a.payType || this.setData({
                currentPayment: a
            });
        },
        preCreateWaiting: function(t) {
            wx.lego.reportWxMegCode({
                id: t.detail.formId,
                type: "form"
            }), 2 == this.data.currentPayment.payType && -1 == this.data.currentPayment.availableStatus ? this.openWechatPayment() : this.createWaiting();
        },
        openWechatPayment: function() {
            var t = (0, e.default)(a.default.mark(function t() {
                var e, r;
                return a.default.wrap(function(t) {
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
                        }), t.next = 6, wx.lego.fetchWechatSignedInfo();

                      case 6:
                        e = t.sent, r = {
                            appId: "wxbd687630cd02ce1d",
                            path: "pages/index/index",
                            extraData: e.data.extraData,
                            envVersion: "release"
                        }, this.setData({
                            canSubmit: !0
                        });
                        try {
                            (0, n.navigateToMiniProgram)(r);
                        } catch (t) {
                            wx.showToast({
                                title: "签约小程序跳转失败",
                                icon: "none",
                                duration: 2e3
                            });
                        }
                        t.next = 17;
                        break;

                      case 12:
                        t.prev = 12, t.t0 = t.catch(2), console.log(t.t0), this.setData({
                            canSubmit: !0
                        }), wx.showToast({
                            title: t.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        });

                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 2, 12 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }()
    }
});