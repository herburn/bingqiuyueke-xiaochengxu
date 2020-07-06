var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), r = e(require("../../../../@babel/runtime/helpers/asyncToGenerator"));

Component({
    properties: {
        scheduleId: {
            type: String,
            value: ""
        },
        isShowKeyboard: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        code: "",
        codeIncorrect: !1,
        disabled: !1
    },
    methods: {
        changeCode: function(e) {
            this.setData({
                codeIncorrect: !1,
                code: e.detail.value
            });
        },
        submit: function() {
            var e = (0, r.default)(t.default.mark(function e() {
                var r, a;
                return t.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!(this.data.code.length < 8 || this.data.disabled)) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return e.prev = 2, this.setData({
                            disabled: !0
                        }), r = {
                            verificationCode: this.data.code + ""
                        }, e.next = 7, wx.lego.verifyCompanyCode(this.data.scheduleId, r);

                      case 7:
                        a = e.sent, this.setData({
                            disabled: !1
                        }), wx.redirectTo({
                            url: "/app/pages/courseOrder/courseOrder?orderNo=" + a.data
                        }), e.next = 17;
                        break;

                      case 12:
                        e.prev = 12, e.t0 = e.catch(2), console.log(e.t0), wx.showToast({
                            title: e.t0.data.text,
                            icon: "none",
                            duration: 2e3
                        }), this.setData({
                            codeIncorrect: 5e5 === e.t0.data.errorCode,
                            disabled: !1
                        });

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 2, 12 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }()
    }
});