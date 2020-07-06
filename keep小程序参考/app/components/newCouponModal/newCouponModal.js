Component({
    properties: {
        newCouponList: {
            type: Array,
            value: []
        }
    },
    methods: {
        confirm: function() {
            wx.lego.receivePromotion(), wx.hideTabBarRedDot({
                index: 3
            }), wx.removeStorageSync(wx.keys.newPromotion), this.setData({
                newCouponList: null
            });
        }
    }
});