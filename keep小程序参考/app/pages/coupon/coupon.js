var t = require("../../utils/util");

Page({
    data: {
        couponData: null,
        res: {},
        rules: [],
        trainingLogId: ""
    },
    onLoad: function(a) {
        this.data.trainingLogId = a.trainingLogId, a.usersource && (0, t.setUserSource)(a.usersource), 
        a.shared && (0, t.setShared)(a.shared), this.fatchCoupon();
    },
    fatchCoupon: function() {
        var a = this;
        this.data.trainingLogId ? wx.lego.getCoupon({
            trainingLogId: this.data.trainingLogId
        }).then(function(t) {
            a.setData({
                couponData: t.data.promotion,
                res: t.data,
                rules: t.data.rules.replace(/(^-|\s|\n)/g, "").split("-")
            }), wx.showToast({
                title: t.data.bindMsg,
                icon: "none"
            });
        }).catch(function(a) {
            401 === a.statusCode && (0, t.doLogin)();
        }) : console.warn("缺少必要参数：trainingLogId");
    }
});