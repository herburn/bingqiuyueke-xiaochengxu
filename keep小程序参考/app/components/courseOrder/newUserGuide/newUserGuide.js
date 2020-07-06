Component({
    properties: {
        totalNavHeight: {
            type: Number,
            value: 68
        },
        popupPackageRecomme: Boolean,
        floatPackageRecomme: Boolean
    },
    data: {},
    methods: {
        close: function() {
            this.setData({
                popupPackageRecomme: !1
            }), wx.lego.closeClassBagRecommend();
        },
        toClassBag: function() {
            this.close(), wx.navigateTo({
                url: "/app/packages/classBag/list/list"
            });
        }
    }
});