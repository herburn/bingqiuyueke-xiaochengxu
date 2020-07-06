Page({
    data: {
        canBack: !1,
        mini: {
            wjx: {
                title: "即将跳转至报名入口",
                appId: "wxd947200f82267e58",
                path: "pages/wjxqList/wjxqList?activityId=44350722"
            }
        }
    },
    onLoad: function(i) {
        this.key = i.key || "wjx", this.openMini();
    },
    onShow: function() {
        this.data.canBack && wx.navigateBack({
            delta: 1
        });
    },
    onReady: function() {
        var i = this;
        clearTimeout(this.timer), this.timer = setTimeout(function() {
            i.noModal = !0;
        }, 1e3);
    },
    onHide: function() {
        clearTimeout(this.timer);
    },
    openMini: function(i) {
        var t = this;
        wx.navigateToMiniProgram({
            appId: this.data.mini[this.key].appId,
            path: this.data.mini[this.key].path,
            fail: function() {
                i || t.noModal ? wx.navigateBack({
                    delta: 1
                }) : t.openModal();
            },
            success: function() {
                t.data.canBack = !0;
            }
        });
    },
    openModal: function() {
        var i = this;
        wx.showModal({
            title: this.data.mini[this.key].title,
            content: "",
            success: function(t) {
                t.confirm ? i.openMini(!0) : t.cancel && wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
});