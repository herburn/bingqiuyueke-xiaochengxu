var t = require("../../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../../@babel/runtime/regenerator")), a = t(require("../../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../../utils/util"), r = require("../../../utils/api");

Page({
    data: {
        needRegister: !0,
        goBack: 1,
        phoneNumber: null,
        captcha: null,
        captchaStatus: -1,
        captchaTimer: null
    },
    onLoad: function(t) {
        t.goBack && (this.data.goBack = parseInt(t.goBack));
    },
    onHide: function() {
        clearInterval(this.data.captchaTimer);
    },
    onUnload: function() {
        clearInterval(this.data.captchaTimer);
    },
    phoneNumberInput: function(t) {
        this.setData({
            phoneNumber: t.detail.value
        });
    },
    captchaInput: function(t) {
        this.setData({
            captcha: t.detail.value
        });
    },
    sendCaptcha: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, n = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.data.phoneNumber) {
                        t.next = 15;
                        break;
                    }
                    if (!(this.data.captchaStatus > 0)) {
                        t.next = 3;
                        break;
                    }
                    return t.abrupt("return");

                  case 3:
                    return t.prev = 3, a = {
                        openid: wx.getStorageSync(wx.keys.openid),
                        mobile: this.data.phoneNumber
                    }, t.next = 7, r.butler.sendVaptcha(a);

                  case 7:
                    this.setData({
                        captchaStatus: 60
                    }), this.data.captchaTimer = setInterval(function() {
                        n.data.captchaStatus <= 0 && clearInterval(n.data.captchaTimer), n.data.captchaStatus--, 
                        n.setData({
                            captchaStatus: n.data.captchaStatus
                        });
                    }, 1e3), t.next = 15;
                    break;

                  case 11:
                    t.prev = 11, t.t0 = t.catch(3), console.error(t.t0), wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 3, 11 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    sendVoiceCaptcha: function() {
        this.data.phoneNumber && r.butler.sendVoiceCaptcha();
    },
    userLogin: function() {
        var t = (0, a.default)(e.default.mark(function t() {
            var a, c;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!this.data.phoneNumber || !this.data.captcha) {
                        t.next = 13;
                        break;
                    }
                    return t.prev = 1, a = {
                        openid: wx.getStorageSync(wx.keys.openid),
                        mobile: this.data.phoneNumber,
                        code: this.data.captcha
                    }, t.next = 5, r.butler.userMobileLogin(a);

                  case 5:
                    (c = t.sent).data.token ? (wx.setStorageSync(wx.keys.loginType, "userPhone"), wx.removeStorageSync(wx.keys.userInfoTpm), 
                    (0, n.setKeepUserInfo)(c.data), wx.navigateBack({
                        delta: this.data.goBack
                    })) : this.data.needRegister && this.register(a), t.next = 13;
                    break;

                  case 9:
                    t.prev = 9, t.t0 = t.catch(1), console.log(t.t0), wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 1, 9 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    register: function() {
        var t = (0, a.default)(e.default.mark(function t(a) {
            var c;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, r.butler.userMobileRegister(a);

                  case 3:
                    c = t.sent, wx.setStorageSync(wx.keys.loginType, "userPhone"), wx.removeStorageSync(wx.keys.userInfoTpm), 
                    (0, n.setKeepUserInfo)(c.data), wx.navigateBack({
                        delta: this.data.goBack
                    }), t.next = 14;
                    break;

                  case 10:
                    t.prev = 10, t.t0 = t.catch(0), console.log(t.t0), wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 10 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }()
});