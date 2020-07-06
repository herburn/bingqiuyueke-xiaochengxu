var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/defineProperty")), a = t(require("../../../@babel/runtime/regenerator")), n = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), s = require("../../utils/api"), i = require("../../utils/util"), r = getApp();

Page({
    data: {
        totalNavHeight: 68,
        currentPage: 1,
        swiperIndex: 1,
        couponInfo: {
            1: {
                text: "可使用",
                page: 1,
                list: [],
                canFetch: !0
            },
            2: {
                text: "已使用",
                page: 1,
                list: [],
                canFetch: !0
            },
            3: {
                text: "已过期",
                page: 1,
                list: [],
                canFetch: !0
            }
        },
        showExchange: !1,
        pwd: "",
        canSubmit: !0
    },
    onLoad: function(t) {
        t.usersource && (0, i.setUserSource)(t.usersource), t.shared && (0, i.setShared)(t.shared), 
        this.setData({
            totalNavHeight: r.globalData.customNav.totalNavHeight
        }), this.fetchUserCoupon();
    },
    fetchUserCoupon: function() {
        var t = (0, n.default)(a.default.mark(function t(e) {
            var n;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, wx.lego.fetchUserCoupon(this.data.swiperIndex, this.data.currentPage);

                  case 3:
                    (n = t.sent).data && n.data.length ? (this.data.couponInfo[this.data.swiperIndex].list = e ? n.data : this.data.couponInfo[this.data.swiperIndex].list.concat(n.data), 
                    this.data.couponInfo[this.data.swiperIndex].page = ++this.data.currentPage) : this.data.couponInfo[this.data.swiperIndex].canFetch = !1, 
                    this.setData({
                        couponInfo: this.data.couponInfo
                    }), t.next = 12;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(0), 401 === t.t0.statusCode ? (0, i.doLogin)() : wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    }), console.log(t.t0);

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 8 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    exchange: function() {
        this.setData({
            showExchange: !0
        });
    },
    pwdInput: function(t) {
        this.data.pwd = t.detail.value;
    },
    getCouponByPwd: function() {
        var t = (0, n.default)(a.default.mark(function t() {
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.data.pwd) {
                        t.next = 3;
                        break;
                    }
                    return wx.showToast({
                        title: "请输入兑换码",
                        icon: "none",
                        duration: 2e3
                    }), t.abrupt("return");

                  case 3:
                    if (this.data.canSubmit) {
                        t.next = 5;
                        break;
                    }
                    return t.abrupt("return");

                  case 5:
                    return this.data.canSubmit = !1, t.prev = 6, t.next = 9, s.store.getCouponByPwd(this.data.pwd);

                  case 9:
                    wx.showToast({
                        title: "兑换成功",
                        icon: "none",
                        duration: 2e3
                    }), this.data.canSubmit = !0, this.data.showExchange = !1, this.data.swiperIndex = 1, 
                    this.data.currentPage = 1, this.fetchUserCoupon(!0), this.setData({
                        showExchange: this.data.showExchange,
                        swiperIndex: this.data.swiperIndex
                    }), t.next = 22;
                    break;

                  case 18:
                    t.prev = 18, t.t0 = t.catch(6), this.data.canSubmit = !0, 401 === t.t0.statusCode ? (0, 
                    i.doLogin)() : wx.showToast({
                        title: t.t0.data.errorMessage,
                        icon: "none",
                        duration: 2e3
                    });

                  case 22:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 6, 18 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    tabChange: function(t) {
        this.data.swiperIndex = t.currentTarget.dataset.status, this.data.currentPage = this.data.couponInfo[this.data.swiperIndex].page, 
        !this.data.couponInfo[this.data.swiperIndex].list.length && this.data.couponInfo[this.data.swiperIndex].canFetch && this.fetchUserCoupon(), 
        this.setData({
            swiperIndex: this.data.swiperIndex
        });
    },
    swiperChange: function(t) {
        "touch" === t.detail.source && (this.data.swiperIndex = t.detail.current + 1, this.data.currentPage = this.data.couponInfo[this.data.swiperIndex].page, 
        !this.data.couponInfo[this.data.swiperIndex].list.length && this.data.couponInfo[this.data.swiperIndex].canFetch && this.fetchUserCoupon(), 
        this.setData({
            swiperIndex: this.data.swiperIndex
        }));
    },
    showCouponRules: function(t) {
        var a = t.currentTarget.dataset.status, n = t.currentTarget.dataset.index;
        this.setData((0, e.default)({}, "couponInfo.".concat(a, ".list[").concat(n, "].showCouponRules"), !this.data.couponInfo[a].list[n].showCouponRules));
    },
    jumpTo: function(t) {
        var e = t.currentTarget.dataset.url;
        e && (/^http(s)?/.test(e) ? wx.navigateTo({
            url: "/app/pages/webView/webView?url=".concat(e)
        }) : /(\/index$|\/schedule$|\/train$|\/mine$)/.test(e) ? wx.switchTab({
            url: e
        }) : wx.navigateTo({
            url: e
        }));
    },
    loadMore: function(t) {
        1 != this.data.swiperIndex && this.data.couponInfo[t.currentTarget.dataset.status].canFetch && this.fetchUserCoupon();
    }
});