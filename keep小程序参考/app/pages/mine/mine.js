var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../@babel/runtime/regenerator")), t = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/util"), o = getApp();

Page({
    data: {
        db11: 0,
        keepUserInfo: null,
        newCouponList: null,
        userInfo: {},
        schedulePackageCount: {},
        packageStatus: -1,
        durationDay: -1,
        newMsgCount: 0,
        expireAt: "",
        wristband: null,
        navigatorBarOpacity: 0,
        navigatorBarLogo: "white",
        navigatorBarFrontColor: "#ffffff"
    },
    onLoad: function() {
        o.sensors.track("web_gym_my_view", {
            client: "mini_program"
        }), wx.getStorage({
            key: wx.keys.keepUserInfo,
            success: function(e) {
                e.data || (0, n.doWxLogin)();
            }
        });
    },
    onShow: function() {
        var e = this, a = wx.getStorageSync(wx.keys.keepUserInfo);
        if (a) {
            this.setData({
                keepUserInfo: a
            }), this.getUserPackageInfo();
            var t = wx.getStorageSync(wx.keys.newPromotion);
            t && this.fetchUserCoupon(t.lastReadTime), this.keepWristband();
        }
        wx.hideTabBarRedDot({
            index: 3
        }), wx.lego.fetchDb11Mine().then(function(a) {
            e.setData({
                db11: a.data
            });
        }), o.globalData.jdExchangeClassBag && (wx.showToast({
            title: "恭喜你，课包兑换成功！",
            icon: "none",
            duration: 2e3
        }), o.globalData.jdExchangeClassBag = !1);
    },
    onPageScroll: function(e) {
        var a = e.scrollTop / 100 < 1 ? e.scrollTop / 100 : 1, t = {
            navigatorBarOpacity: a
        }, n = "", o = "";
        a > .2 ? (n = "brand", o = "#000000") : (n = "white", o = "#ffffff"), this.data.navigatorBarLogo != n && (t.navigatorBarLogo = n), 
        this.data.navigatorBarFrontColor != o && (this.data.navigatorBarFrontColor = o, 
        wx.setNavigationBarColor({
            frontColor: o,
            backgroundColor: "",
            animation: {
                duration: 400,
                timingFunc: "easeIn"
            }
        })), this.setData(t);
    },
    fetchUserCoupon: function() {
        var e = (0, t.default)(a.default.mark(function e(t) {
            var n, o;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, wx.lego.fetchUserCoupon(1, 1);

                  case 3:
                    n = e.sent, o = [], n.data && n.data.length > 0 && n.data.forEach(function(e) {
                        e.obtainDate >= t && o.push(e);
                    }), this.setData({
                        newCouponList: o
                    }), e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 9 ] ]);
        }));
        return function(a) {
            return e.apply(this, arguments);
        };
    }(),
    getUserPackageInfo: function() {
        var e = this;
        wx.lego.getUserPackageInfo().then(function(a) {
            e.data.userInfo = a.data.userInfo, e.data.schedulePackageCount = a.data.schedulePackageCount, 
            e.data.newMsgCount = a.data.newMsgCount, e.data.schedulePackageCount.expireAt && (wx.moment().isBefore(e.data.schedulePackageCount.expireAt) ? (e.data.durationDay = wx.moment(e.data.schedulePackageCount.expireAt).diff(wx.moment(), "days"), 
            e.data.packageStatus = e.data.durationDay > 7 ? 0 : 1) : e.data.packageStatus = 2);
            var t = {
                avatar: e.data.userInfo.avatar,
                userId: e.data.userInfo.id,
                userName: e.data.userInfo.name
            };
            JSON.stringify(e.data.keepUserInfo) != JSON.stringify(t) && (e.data.keepUserInfo = t, 
            wx.setStorage({
                key: wx.keys.keepUserInfo,
                data: t
            })), e.setData({
                userInfo: e.data.userInfo,
                keepUserInfo: e.data.keepUserInfo,
                schedulePackageCount: e.data.schedulePackageCount,
                newMsgCount: e.data.newMsgCount,
                durationDay: e.data.durationDay,
                packageStatus: e.data.packageStatus,
                expireAt: wx.moment(e.data.schedulePackageCount.expireAt).format("YYYY/MM/DD")
            });
        });
    },
    keepWristband: function() {
        var e = this;
        wx.lego.fecthKeepWristband().then(function(a) {
            e.setData({
                wristband: a.data
            });
        });
    },
    jumpToMessages: function() {
        wx.hideTabBarRedDot({
            index: 3
        }), this.data.keepUserInfo ? wx.navigateTo({
            url: "/app/packages/mine/messages/messages?newMsgCount=".concat(this.data.newMsgCount)
        }) : this.showLoginTip();
    },
    showLoginTip: function() {
        wx.showToast({
            title: "请先登录",
            icon: "none",
            duration: 2e3
        });
    },
    jumpSecondaryPage: function(e) {
        var a = e.currentTarget.dataset.path;
        this.data.keepUserInfo ? wx.navigateTo({
            url: a
        }) : this.showLoginTip();
    },
    jumpLogin: function() {
        wx.reportAnalytics("mine_switch_click"), wx.navigateTo({
            url: "/app/pages/login/chooseLogin/chooseLogin"
        });
    },
    bindcontact: function(e) {
        e.detail.detail.path && wx.navigateTo({
            url: e.detail.detail.path
        });
    },
    signOut: function() {
        var e = this;
        wx.showActionSheet({
            itemList: [ "确认退出" ],
            itemColor: "#FF5364",
            success: function(a) {
                wx.reportAnalytics("mine_logout_click"), e.clearStorage(), o.globalData.updateSchedule = 2;
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    getUserInfo: function(e) {
        e.detail.encryptedData && e.detail.iv && this.getKeepUserInfo(e.detail.encryptedData, e.detail.iv);
    },
    getKeepUserInfo: function() {
        var e = (0, t.default)(a.default.mark(function e(t, o) {
            var r;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, wx.showLoading({
                        title: "加载中…"
                    }), e.next = 4, (0, n.keepGetUserInfo)(t, o);

                  case 4:
                    r = e.sent, wx.hideLoading(), r && r.data.token ? (wx.setStorageSync(wx.keys.userInfoTpm, r.data), 
                    wx.navigateTo({
                        url: "/app/pages/login/confirm/confirm"
                    })) : wx.navigateTo({
                        url: "/app/pages/login/chooseLogin/chooseLogin"
                    }), e.next = 13;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), console.log(e.t0), wx.hideLoading();

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 9 ] ]);
        }));
        return function(a, t) {
            return e.apply(this, arguments);
        };
    }(),
    clearStorage: function() {
        try {
            wx.removeStorageSync(wx.keys.loginType), wx.removeStorageSync(wx.keys.authorization), 
            wx.removeStorageSync(wx.keys.keepUserInfo), wx.removeStorageSync(wx.keys.tokenExp), 
            o.keepCommonHeader.signOut(), this.setData({
                keepUserInfo: null,
                userInfo: {},
                schedulePackageCount: {},
                packageStatus: -1
            });
        } catch (e) {
            console.log(e);
        }
    }
});