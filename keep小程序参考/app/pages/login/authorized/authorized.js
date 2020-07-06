var e = require("../../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../../@babel/runtime/regenerator")), r = e(require("../../../../@babel/runtime/helpers/asyncToGenerator")), a = require("../../../utils/util");

Page({
    data: {},
    getUserInfo: function(e) {
        e.detail.encryptedData && e.detail.iv && this.getKeepUserInfo(e.detail.encryptedData, e.detail.iv);
    },
    getKeepUserInfo: function() {
        var e = (0, r.default)(t.default.mark(function e(r, n) {
            var i;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, wx.showLoading(), e.next = 4, (0, a.keepGetUserInfo)(r, n);

                  case 4:
                    i = e.sent, wx.hideLoading(), i.data.token ? (wx.setStorageSync(wx.keys.userInfoTpm, i.data), 
                    wx.navigateTo({
                        url: "/app/pages/login/confirm/confirm?goBack=2"
                    })) : wx.navigateTo({
                        url: "/app/pages/login/chooseLogin/chooseLogin?goBack=2"
                    }), e.next = 13;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), console.log(e.t0), wx.hideLoading();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 9 ] ]);
        }));
        return function(t, r) {
            return e.apply(this, arguments);
        };
    }()
});