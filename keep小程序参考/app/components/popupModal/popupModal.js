var t = getApp();

Component({
    properties: {
        popupInfo: {
            type: Object,
            value: null
        }
    },
    methods: {
        close: function(t) {
            this.closePopup();
        },
        jumpTo: function(t) {
            this.closePopup();
            var o = t.currentTarget.dataset.link;
            /^http(s)?/.test(o) ? wx.navigateTo({
                url: "/app/pages/webView/webView?url=".concat(o)
            }) : /(\/index$|\/schedule$|\/train$|\/mine$)/.test(o) ? wx.switchTab({
                url: o
            }) : wx.navigateTo({
                url: o
            });
        },
        closePopup: function() {
            try {
                if (this.data.popupInfo && !this.data.popupInfo.isPreviewPopup) wx.getStorageSync(wx.keys.authorization) && wx.lego.reportPopup(this.data.popupInfo.id);
            } catch (t) {
                console.log(t);
            }
            this.setData({
                popupInfo: null
            }), t.globalData.popupOver = !0;
        }
    }
});