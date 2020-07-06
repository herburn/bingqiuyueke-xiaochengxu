require("./wxapi.js");

var e = require("./page.js"), n = require("./component.js");

module.exports = function(o) {
    if (o.needCommonHeader) {
        var a = require("../../miniprogram_npm/keep-wechatapp-common-header/index");
        if (o.sensorConfig) {
            var i = require("../../miniprogram_npm/keep-wechatapp-sensorsdata/index");
            a.init({
                initHeader: {
                    "x-version-name": o.version || "1.0.0",
                    "x-wechatapp-id": o.appId
                },
                headerChangeCallback: function(e) {
                    i.init({
                        sensorsDataConf: o.sensorConfig,
                        keepWechatappCommonHeader: e
                    }), i.updateKeepWechatappCommonHeader(e);
                }
            }), i.registerApp({
                userId: a.getKeepCommonHeader()["x-user-id"],
                client: "mini_program"
            }), o.sensors = i;
        }
    }
    if (o.systemInfo = wx.wxapis.getSystemInfoSync(!0), o.rpxRate = 750 / o.systemInfo.screenWidth, 
    o.onLaunch) {
        var r = o.onLaunch;
        o.onLaunch = function(e) {
            if (o.updateAppAuto) {
                var n = wx.getUpdateManager();
                n.onCheckForUpdate(function(e) {}), n.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(e) {
                            e.confirm && n.applyUpdate();
                        }
                    });
                }), n.onUpdateFailed(function() {
                    console.log("新版本下载失败");
                });
            }
            r.bind(this, e)();
        };
    }
    if (o.onShow) {
        var t = o.onShow;
        o.onShow = function(e) {
            t.bind(this, e)();
        };
    }
    if (o.onHide) {
        var p = o.onHide;
        o.onHide = function() {
            p.bind(this)();
        };
    }
    if (o.onError) {
        var s = o.onError;
        o.onError = function(e) {
            s.bind(this, e)();
        };
    }
    if (o.onPageNotFound) {
        var d = o.onPageNotFound;
        o.onPageNotFound = function(e) {
            d.bind(this, e)();
        };
    }
    if (o.globalData) {
        var c = o.globalData;
        o.globalData = c;
    }
    return o.Page = e, o.Component = n, App(o);
};