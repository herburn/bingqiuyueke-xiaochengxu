var a = getApp();

Component({
    properties: {
        title: String,
        color: String,
        backgroundColor: {
            type: String,
            value: "#fff"
        },
        numberMessage: Number,
        logo: String,
        fixed: {
            type: Boolean,
            value: !1
        },
        navigationBarColor: {
            type: String,
            value: "black"
        }
    },
    data: {
        tabPages: [ "app/pages/index/index", "app/pages/schedule/schedule", "app/pages/train/train", "app/pages/mine/mine" ],
        customNav: a.globalData.customNav,
        isTabPage: !1,
        pageLength: 1
    },
    attached: function() {
        this.data.customNav.finish ? this.setData({
            customNav: a.globalData.customNav
        }) : this.computeNavigateBarHeight();
        var t = getCurrentPages();
        this.data.pageLength = t.length, this.data.isTabPage = 1 == t.length && this.data.tabPages.filter(function(a) {
            return t[0].route == a;
        }).length, this.setData({
            isTabPage: this.data.isTabPage
        });
    },
    methods: {
        back: function() {
            1 == this.data.pageLength ? wx.switchTab({
                url: "/app/pages/index/index"
            }) : wx.navigateBack({
                delta: 1
            });
        },
        backHome: function() {
            wx.switchTab({
                url: "/app/pages/index/index"
            });
        },
        tapNav: function() {
            wx.pageScrollTo({
                scrollTop: 0
            }), this.triggerEvent("tapnav");
        },
        computeNavigateBarHeight: function() {
            var t = wx.getSystemInfoSync(), e = "ios" == t.platform ? 44 : 48, i = t.statusBarHeight + e;
            a.globalData.customNav = {
                titleBarHeight: e,
                totalNavHeight: i,
                statusBarHeight: t.statusBarHeight,
                finish: !0
            }, this.setData({
                customNav: a.globalData.customNav
            });
        }
    }
});