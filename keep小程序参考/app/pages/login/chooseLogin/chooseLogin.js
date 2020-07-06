var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), a = e(require("../../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../../utils/util"), r = require("../../../utils/api");

Page({
    data: {
        needRegister: !0,
        goBack: 1
    },
    onLoad: function(e) {
        e.goBack && (this.data.goBack = parseInt(e.goBack)), this.login();
    },
    wxGetPhoneNumber: function() {
        var e = (0, a.default)(t.default.mark(function e(a) {
            var o, i;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!a.detail.iv || !a.detail.encryptedData) {
                        e.next = 13;
                        break;
                    }
                    return o = {
                        openid: wx.getStorageSync(wx.keys.openid),
                        encryptedData: a.detail.encryptedData,
                        iv: a.detail.iv
                    }, e.prev = 2, e.next = 5, r.butler.wxMobileLogin(o);

                  case 5:
                    (i = e.sent).data.token ? (wx.setStorageSync(wx.keys.loginType, "wxPhone"), wx.removeStorageSync(wx.keys.userInfoTpm), 
                    (0, n.setKeepUserInfo)(i.data), wx.navigateBack({
                        delta: this.data.goBack
                    })) : this.data.needRegister && this.register(o), e.next = 13;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(2), console.log(e.t0), wx.showToast({
                        title: e.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 9 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(),
    userPhone: function() {
        wx.navigateTo({
            url: "/app/pages/login/phoneLogin/phoneLogin?goBack=" + (this.data.goBack + 1)
        });
    },
    otherLogin: function() {
        wx.navigateTo({
            url: "/app/pages/login/otherLogin/otherLogin"
        });
    },
    login: function() {
        var e = (0, a.default)(t.default.mark(function e() {
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, n.doWxLogin)();

                  case 3:
                    e.next = 8;
                    break;

                  case 5:
                    e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 5 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    register: function() {
        var e = (0, a.default)(t.default.mark(function e(a) {
            var o;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, r.butler.wxMobileRegister(a);

                  case 3:
                    o = e.sent, wx.setStorageSync(wx.keys.loginType, "wxPhone"), wx.removeStorageSync(wx.keys.userInfoTpm), 
                    (0, n.setKeepUserInfo)(o.data), wx.navigateBack({
                        delta: this.data.goBack
                    }), e.next = 14;
                    break;

                  case 10:
                    e.prev = 10, e.t0 = e.catch(0), console.log(e.t0), wx.showToast({
                        title: e.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 10 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }()
});