Page({
    data: {
        keepUserInfo: null
    },
    jumpLogin: function() {
        wx.navigateTo({
            url: "/app/pages/login/chooseLogin/chooseLogin?goBack=2"
        });
    },
    jumpHome: function() {
        wx.switchTab({
            url: "/app/pages/index/index"
        });
    },
    onLoad: function() {
        this.setData({
            keepUserInfo: wx.getStorageSync(wx.keys.keepUserInfo)
        });
    }
});