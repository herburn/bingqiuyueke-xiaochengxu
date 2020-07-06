var t = require("../../utils/util"), e = getApp();

Page({
    data: {
        isNew: !0,
        navTitle: "Keepland",
        url: "",
        title: "Keep 线下运动空间",
        imageUrl: "https://static1.keepcdn.com/2018/02/07/1518003756611.jpg?imageMogr2/thumbnail/750x/quality/95"
    },
    message: function(t) {
        var e = t.detail.data;
        e && (this.data.title = e[0].shareTitle, this.data.imageUrl = e[0].shareImage, this.data.operationId = e[0].operationId);
    },
    onLoad: function(e) {
        this.setData({
            url: decodeURIComponent(e.url)
        }), this.option = e;
        var a = wx.getSystemInfoSync();
        this.setData({
            isNew: (0, t.compareVersion)(a.version, "6.7.2")
        });
    },
    bindload: function() {
        if (this.option && this.option.title) {
            var t = decodeURIComponent(this.option.title);
            this.setData({
                navTitle: t
            }), wx.setNavigationBarTitle({
                title: t
            });
        }
    },
    onShareAppMessage: function(t) {
        var a = this.data.url;
        t.webViewUrl && /cardCollect/gi.test(t.webViewUrl) && (a = this.data.url + "/1", 
        e.sensors.track("web_gym_collection_share", {
            client: "mini_program",
            schedule_operation_id: this.data.operationId
        }));
        var i = "&shared=1", o = wx.getStorageSync(wx.keys.userSource);
        return o && (i += "&usersource=".concat(o.data)), {
            title: this.data.title,
            path: "/app/pages/index/index?share_path=".concat(encodeURIComponent("/app/pages/webView/webView?url=".concat(a))).concat(i),
            imageUrl: this.data.imageUrl
        };
    }
});