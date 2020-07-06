getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        userHonorHisItem: {
            type: Object,
            value: null
        }
    },
    data: {
        userId: ""
    },
    attached: function() {
        var e = this;
        wx.getStorage({
            key: wx.keys.keepUserInfo,
            success: function(t) {
                t.data && t.data.userId && e.setData({
                    userId: t.data.userId
                });
            }
        });
    },
    methods: {
        closeMedal: function() {
            this.setData({
                userHonorHisItem: null
            });
        }
    }
});