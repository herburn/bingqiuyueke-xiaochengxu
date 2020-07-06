require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../config/host"));

var e = require("../../utils/util");

Page({
    data: {
        url: "",
        isNew: !0
    },
    onLoad: function(r) {
        this.data.url = decodeURIComponent(r.url);
        var t = wx.getSystemInfoSync();
        this.setData({
            url: this.data.url,
            isNew: (0, e.compareVersion)(t.version, "6.7.2")
        });
    }
});