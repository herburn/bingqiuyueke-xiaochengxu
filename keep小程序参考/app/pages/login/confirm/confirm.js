var o = require("../../../utils/util");

Page({
    data: {
        keepUserInfo: null,
        goBack: 1
    },
    onLoad: function(o) {
        o.goBack && (this.data.goBack = parseInt(o.goBack));
    },
    onShow: function() {
        var o = wx.getStorageSync(wx.keys.userInfoTpm);
        this.setData({
            keepUserInfo: o
        });
    },
    confirm: function() {
        wx.reportAnalytics("login_confirm_click"), wx.setStorageSync(wx.keys.loginType, "wx"), 
        (0, o.setKeepUserInfo)(this.data.keepUserInfo), wx.removeStorageSync(wx.keys.userInfoTpm), 
        wx.navigateBack({
            delta: this.data.goBack
        });
    },
    otherLogin: function() {
        wx.reportAnalytics("login_switch_click"), wx.navigateTo({
            url: "/app/pages/login/chooseLogin/chooseLogin?goBack=" + (this.data.goBack + 1)
        });
    }
});