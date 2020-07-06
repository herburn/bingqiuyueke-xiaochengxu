var e, t, r = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

module.exports = (t = function(t, o) {
    if (!e[t]) return require(o);
    if (!e[t].status) {
        var n = {
            exports: {}
        };
        e[t].status = 1, e[t].func(e[t].req, n, n.exports), "object" === (0, r.default)(n.exports) ? (e[t].m.exports.__proto__ = n.exports.__proto__, 
        Object.keys(n.exports).forEach(function(r) {
            e[t].m.exports[r] = n.exports[r], Object.defineProperty(n.exports, r, {
                set: function(o) {
                    e[t].m.exports[r] = o;
                },
                get: function() {
                    return e[t].m.exports[r];
                }
            });
        }), n.exports.__esModule && Object.defineProperty(e[t].m.exports, "__esModule", {
            value: !0
        })) : e[t].m.exports = n.exports;
    }
    return e[t].m.exports;
}, (e = {})[1571054539771] = {
    status: 0,
    func: function(e, t, r) {
        var o = {}, n = {}, s = App;
        App = function(e) {
            var t = e.onLaunch;
            e.onLaunch = function(e) {
                t.call(this, e), function() {
                    this.keepCommonHeader = o;
                }.call(this, e);
            }, s(e);
        }, n.propsIsComplete = !1, n.properties = {
            "x-screen-width": "",
            "x-model": "",
            "x-os": "",
            "x-os-version": "",
            "x-locale": "",
            "x-version-name": "",
            "x-user-id": "",
            "x-screen-height": "",
            "x-network-type": "",
            "x-app-platform": "wechatapp",
            "x-wechatapp-wxversion": "",
            "x-wechatapp-sdk": "",
            "x-wechatapp-id": ""
        }, n.headerChangeCallback = null, n.setKeepHeader = function() {
            this.propsIsComplete && wx.setStorageSync("keep-wechatapp-common-header", this.properties);
        }, o.init = function(e) {
            if (e) if ("[object Object]" === e.toString()) if (e.initHeader) if ("[object Object]" === e.initHeader.toString()) {
                var t = n.properties;
                wx.getNetworkType({
                    success: function(e) {
                        t["x-network-type"] = e.networkType;
                    },
                    fail: function(e) {
                        console.error(e, "wx.getNetworkType function is failed");
                    },
                    complete: function() {
                        wx.getSystemInfo({
                            success: function(e) {
                                t["x-screen-width"] = e.screenWidth, t["x-model"] = e.model, t["x-os"] = e.system.split(" ")[0], 
                                t["x-os-version"] = e.system.split(" ")[1], t["x-locale"] = e.language, t["x-screen-height"] = e.screenHeight, 
                                t["x-wechatapp-wxversion"] = e.version, t["x-wechatapp-sdk"] = e.SDKVersion;
                            },
                            fail: function(e) {
                                console.error(e, "wx.getSystemInfo function is failed");
                            },
                            complete: function() {
                                !function() {
                                    for (var r in e.initHeader) t.hasOwnProperty(r) && (t[r] = e.initHeader[r]);
                                    t["x-user-id"] = wx.getStorageSync("keepCommonHeader_x-user-id") || "", n.propsIsComplete = !0, 
                                    n.setKeepHeader(), e.headerChangeCallback && (n.headerChangeCallback = e.headerChangeCallback, 
                                    n.headerChangeCallback(t));
                                }();
                            }
                        });
                    }
                });
            } else console.error("the parameter initHeader of function init is not an object!"); else console.error("the parameter initHeader of function init is necessary!"); else console.error("the parameter of function init is not an object!"); else console.error("the parameter of function init is necessary!");
        }, o.login = function(e) {
            e ? (n.properties["x-user-id"] = e, n.setKeepHeader(), n.headerChangeCallback && n.headerChangeCallback(n.properties), 
            wx.setStorageSync("keepCommonHeader_x-user-id", e)) : console.error("the userId of function login is necessary!");
        }, o.signOut = function() {
            n.properties["x-user-id"] = "", n.setKeepHeader(), n.headerChangeCallback && n.headerChangeCallback(n.properties), 
            wx.removeStorageSync("keepCommonHeader_x-user-id");
        }, o.getKeepCommonHeader = function(e) {
            return wx.getStorageSync("keep-wechatapp-common-header") || {};
        }, t.exports = o;
    },
    req: function(e) {
        return t({}[e], e);
    },
    m: {
        exports: {}
    }
}, t(1571054539771));