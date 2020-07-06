var e = require("@babel/runtime/helpers/interopRequireDefault"), t = e(require("@babel/runtime/regenerator")), r = e(require("@babel/runtime/helpers/asyncToGenerator")), n = e(require("@babel/runtime/helpers/defineProperty")), a = e(require("jwt-decode")), o = e(require("moment")), i = require("./app/utils/util"), u = e(require("./app/config/storage")), s = require("./app/utils/api"), c = require("./app/utils/wxfunction"), l = e(require("./app/utils/routesMap")), p = e(require("./app/utils/log"));

function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? f(r, !0).forEach(function(t) {
            (0, n.default)(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(r).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
}

var d = require("core/base/app.js"), g = require("./app/libs/utils.js").getAuth, w = require("./app/config/config.js");

o.default.locale("zh-cn", {
    weekdays: "日 一 二 三 四 五 六".split(" "),
    weekdaysMin: "日 一 二 三 四 五 六".split(" ")
}), wx = h({}, wx), wx.keys = u.default, wx.moment = o.default, wx.lego = s.lego, 
wx.log = p.default;

[ "navigateTo", "switchTab", "reLaunch", "redirectTo" ].forEach(function(e) {
    var t = wx[e];
    wx[e] = function(e) {
        var r = e.url.replace(/^\//, ""), n = "";
        if (/\?/g.test(r)) {
            var a = r.split("?");
            r = a[0], n = a[1];
        }
        e.url = "/" + (l.default[r] || r) + "?" + n, t(e);
    };
}), d(h({
    onLaunch: function() {
        var e = (0, r.default)(t.default.mark(function e() {
            var r, n, o, u;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, c.wxCheckSession)();

                  case 3:
                    e.next = 8;
                    break;

                  case 5:
                    e.prev = 5, e.t0 = e.catch(0), (0, i.doWxLogin)();

                  case 8:
                    try {
                        r = wx.getStorageSync(wx.keys.tokenExp);
                    } catch (e) {}
                    if (r) this.tokenDuration(r); else {
                        try {
                            n = wx.getStorageSync(wx.keys.authorization);
                        } catch (e) {}
                        n && (o = (0, a.default)(n), this.tokenDuration(o.exp, !0));
                    }
                    try {
                        u = wx.getSystemInfoSync(), this.computeNavigateBarHeight(u), this.globalData.systemInfo = u, 
                        this.globalData.iphonex = -1 != u.model.toLocaleLowerCase().indexOf("iphone x");
                    } catch (e) {}
                    p.default.info("onLaunch");

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 5 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    tokenDuration: function(e, t) {
        var r = (0, o.default)(), n = o.default.unix(e).diff(r, "days");
        n <= 0 ? this.clearStorage() : n < 30 ? this.refreshToken() : t && wx.setStorageSync(wx.keys.tokenExp, e);
    },
    onReady: function() {
        this.fetchBubbles(), this.fetchMessagesCount();
    },
    onShow: function(e) {
        e && 1038 === e.scene && "wxbd687630cd02ce1d" == e.referrerInfo.appId && (this.globalData.wechatSignedResult = e.referrerInfo.extraData), 
        p.default.info("app onShow");
    },
    onError: function(e) {
        p.default.error({
            error: e,
            routes: getCurrentPages().map(function(e) {
                return e.route;
            }),
            userInfo: wx.getStorageSync("keepUserInfo"),
            systemInfo: this.globalData.systemInfo
        });
    },
    onPageNotFound: function(e) {
        var t = e.query, r = e.path.replace(/^\//, "");
        if (t) {
            if (t.scene) {
                var n = "", a = decodeURIComponent(t.scene).split("#");
                if (4 == a[0] ? n = "/app/pages/couponInvitation/couponInvitation?userId=" + a[1] : 5 == a[0] ? n = "/app/pages/courseConfirm/courseConfirm?scheduleId=" + a[1] : 9 == a[0] && (n = "/app/packages/classBag/enterpriseToken/enterpriseToken?enterpriseId=" + a[1]), 
                n) return wx.redirectTo({
                    url: n
                });
            }
            if (t.share_path) return wx.redirectTo({
                url: decodeURIComponent(e.query.share_path)
            });
        }
        var o = l.default[r];
        if (!o) return wx.switchTab({
            url: "/app/pages/index/index"
        });
        if (/(\/index$|\/schedule$|\/train$|\/mine$)/.test(o)) wx.switchTab({
            url: o
        }); else {
            var i = "";
            Object.keys(t).length && Object.keys(t).forEach(function(e) {
                i += "".concat(e, "=").concat(t[e], "&");
            }), wx.redirectTo({
                url: "/".concat(o, "?").concat(i)
            });
        }
        p.default.warn({
            pageNotFound: e
        });
    },
    globalData: {
        jump_path: "",
        wechatSignedResult: null,
        iphonex: !1,
        enterprisePackageInfo: null,
        planCount: 0,
        jumpMonday: 0,
        updateSchedule: !1,
        previewTimer: null,
        timerAlready: !1,
        bookFrom: "",
        popupOver: !1,
        publisherOrderInfo: null,
        finishReview: !1,
        keepWristband: {},
        courseInfoMap: {},
        customNav: {
            titleBarHeight: 48,
            totalNavHeight: 68,
            statusBarHeight: 20
        },
        systemInfo: {},
        packageRefundReason: null,
        jdExchangeClassBag: !1,
        scheduleRawData: null
    },
    clearStorage: function() {
        var e = wx.getStorageSync(wx.keys.openid);
        wx.clearStorageSync(), wx.setStorageSync(wx.keys.openid, e);
    },
    refreshToken: function() {
        s.account.refreshToken().then(function(e) {
            var t = (0, a.default)(e.data);
            wx.setStorageSync(wx.keys.authorization, e.data), wx.setStorageSync(wx.keys.tokenExp, t.exp);
        });
    },
    computeNavigateBarHeight: function(e) {
        var t = "ios" == e.platform ? 44 : 48, r = e.statusBarHeight + t;
        this.globalData.customNav = {
            titleBarHeight: t,
            totalNavHeight: r,
            statusBarHeight: e.statusBarHeight,
            finish: !0
        };
    },
    fetchBubbles: function() {
        s.lego.fetchBubbles().then(function(e) {
            var t = e.data.bubbleInfos;
            if (t && t.length) {
                var r, n = t.filter(function(e) {
                    return "new_course" === e.bubbleType;
                });
                try {
                    r = wx.getStorageSync(wx.keys.bubbles);
                } catch (e) {
                    console.log(e);
                }
                if (r && r.length) {
                    var a = r.filter(function(e) {
                        return "new_course" === e.bubbleType;
                    });
                    n.every(function(e) {
                        return a.filter(function(t) {
                            return t.entityId == e.entityId;
                        }).length;
                    }) || wx.setTabBarBadge({
                        index: 0,
                        text: "上新"
                    });
                } else wx.setTabBarBadge({
                    index: 0,
                    text: "上新"
                });
            }
        });
    },
    fetchMessagesCount: function() {
        s.lego.fetchMessagesCount().then(function(e) {
            e.data && wx.showTabBarRedDot({
                index: 3
            });
        });
    }
}, w, {
    http: function(e) {
        return e.header = e.header || {}, e.header["content-type"] || (e.header["content-type"] = "application/json"), 
        console.log("getAuth ---\x3e ", g()), !e.header.Authorization && g() && (e.header.Authorization = g()), 
        wx.wxapis.request(!1, e);
    }
}));