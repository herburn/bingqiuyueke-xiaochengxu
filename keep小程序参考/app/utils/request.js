var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    var a = t.default.host;
    switch (e.type) {
      case "lego":
        a = t.default.host.lego;
        break;

      case "store":
        a = t.default.host.store;
        break;

      case "butler":
        a = t.default.host.butler;
        break;

      case "account":
        a = t.default.host.account;
        break;

      case "api":
        a = t.default.host.api;
        break;

      case "jupiter":
        a = t.default.host.jupiter;
        break;

      case "activity":
        a = t.default.host.activity;
    }
    var s = [ a, e.resource ].join("/") + (e.query || ""), o = wx.getStorageSync(wx.keys.authorization), r = wx.getStorageSync(wx.keys.userSource), u = wx.getStorageSync(wx.keys.shared), i = getApp(), d = i.keepCommonHeader.getKeepCommonHeader();
    d["x-keepland-version"] = t.default.version, d["x-device-id"] = wx.getStorageSync(wx.keys.openid) || "", 
    o && Object.assign(d, {
        authorization: "Bearer " + o
    });
    r && Object.assign(d, {
        "lego-user-source": r.data
    });
    u && Object.assign(d, {
        "lego-shared": u.data
    });
    return new Promise(function(a, o) {
        wx.request({
            url: s,
            method: e.method || "GET",
            data: e.data,
            header: Object.assign(d, e.header || {}),
            success: function(e) {
                200 === e.statusCode ? 0 == e.data.errorCode ? a(e.data) : o(e) : 204 === e.statusCode ? a(e) : o(e);
            },
            fail: function(e) {
                wx.showToast({
                    title: "请检查网络连接",
                    icon: "none",
                    duration: 2e3
                }), o(e);
            },
            complete: function(e) {
                if (200 == e.statusCode || 204 == e.statusCode) {
                    var a = t.default.updateApi.some(function(e) {
                        return new RegExp(e, "ig").test(s);
                    }), o = /\/schedule\/package\/\w+\/submit$/gi.test(s) || /\/butler\/v1\/miniapp\//gi.test(s);
                    a ? i.globalData.updateSchedule = 1 : o && (i.globalData.updateSchedule = 2);
                } else if (e.statusCode >= 500) {
                    var r = 500 == e.statusCode || 503 == e.statusCode ? e.data.text || e.data.message : "当前预约人数较多，请稍后再试";
                    wx.showToast({
                        title: r,
                        icon: "none",
                        duration: 2e3
                    });
                } else 429 == e.statusCode && wx.showToast({
                    title: e.data && e.data.text ? e.data.text : "请稍后再试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    });
};

var t = e(require("../config/config"));