var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../@babel/runtime/regenerator")), e = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/util"), o = require("../../utils/schedule"), r = getApp();

Page({
    data: {
        iphonex: !1,
        countDown: null,
        allCourseNum: 0,
        campId: "",
        btnTextMap: {
            "-1": "未达到开营人数，已取消",
            0: "立即预约",
            1: "已开营，请期待下次",
            2: "",
            3: "预约成功，查看详情"
        },
        thousandsOfPrice: "",
        showCloseBtn: !0,
        camp: null,
        bannerCurrent: 0,
        pageScrollTop: 0,
        autoplay: !1,
        isAndroid: !1,
        totalNavHeight: 68,
        navigatorBarOpacity: 0,
        navigationBarColor: "white",
        navigatorBarFrontColor: "#ffffff",
        canSubmit: !0
    },
    onLoad: function(t) {
        var a = this;
        this.data.campId = t.campId, this.setData({
            campId: this.data.campId,
            totalNavHeight: r.globalData.customNav.totalNavHeight
        }), wx.getSystemInfo({
            success: function(t) {
                t && a.setData({
                    isAndroid: -1 != t.system.toLocaleLowerCase().indexOf("android")
                });
            }
        });
    },
    onShow: function() {
        this.fetchCampDetail();
    },
    onReady: function() {
        this.setData({
            iphonex: r.globalData.iphonex
        });
    },
    onPageScroll: function(t) {
        this.data.pageScrollTop = t.scrollTop;
        var a = this.data.pageScrollTop / 100 < 1 ? this.data.pageScrollTop / 100 : 1, e = {
            navigatorBarOpacity: a
        }, n = a > .2 ? "#000000" : "#ffffff", o = a > .2 ? "black" : "white";
        o != this.data.navigationBarColor && (e.navigationBarColor = o), this.data.navigatorBarFrontColor != n && (this.data.navigatorBarFrontColor = n, 
        wx.setNavigationBarColor({
            frontColor: n,
            backgroundColor: "",
            animation: {
                duration: 400,
                timingFunc: "easeIn"
            }
        })), this.setData(e);
    },
    onShareAppMessage: function() {
        var t = "/app/pages/campDetail/campDetail?campId=".concat(this.data.campId);
        return {
            title: this.data.camp.campName,
            path: t,
            imageUrl: this.data.camp.coverList[0]
        };
    },
    previewBanner: function(t) {
        this.data.camp.coverList && this.data.camp.coverList.length && wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: this.data.camp.coverList
        });
    },
    bannerChange: function(t) {
        this.setData({
            bannerCurrent: t.detail.current
        });
    },
    play: function() {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    swiperChange: function(t) {
        this.swiperContro(t.detail.current);
    },
    videoFullScreen: function(t) {
        this.setData({
            showCloseBtn: !t.detail.fullScreen
        });
    },
    changeMedia: function() {
        this.setData({
            bannerCurrent: 0 == this.data.bannerCurrent ? 1 : 0
        });
    },
    fetchCampDetail: function() {
        var t = this;
        wx.lego.fetchCampDetail(this.data.campId).then(function(a) {
            var e = a.data, n = (e.centSalesPrice / 100).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
            e.formatCampName = (0, o.breakString)(e.campName);
            var r = e.waiting ? "取消空位通知" : "有空位通知我";
            t.data.btnTextMap[2] = r, e.coverList && e.coverList.length && e.previewVideo && (e.videoPoster = e.coverList.shift()), 
            e.descriptionDetails.forEach(function(t) {
                t.contentList = t.content.split(/\n/g);
            }), t.setData({
                camp: e,
                thousandsOfPrice: n,
                btnTextMap: t.data.btnTextMap,
                campName: encodeURIComponent(e.campName)
            }), e.applyCountDown > 0 && t.setCountDown(e.applyCountDown);
        });
    },
    setCountDown: function(t) {
        var a = this;
        t && (this.setData({
            countDown: this.getCountDown(t)
        }), clearInterval(this.countDownTimer), this.countDownTimer = setInterval(function() {
            --t <= 0 ? (a.setData({
                countDown: !1
            }), clearInterval(a.countDownTimer), a.fetchCampDetail()) : a.setData({
                countDown: a.getCountDown(t)
            });
        }, 1e3));
    },
    getCountDown: function(t) {
        return {
            day: this.formateNum(Math.floor(t / 3600 / 24)),
            hour: this.formateNum(Math.floor(t / 3600) % 24),
            min: this.formateNum(Math.floor(t / 60) % 60),
            sec: this.formateNum(t % 60)
        };
    },
    formateNum: function(t) {
        return t < 10 ? "0" + t : t;
    },
    handleBtn: function(t) {
        var a = this;
        switch (t.currentTarget.dataset.status) {
          case 0:
            this.payWithCash();
            break;

          case 1:
          case -1:
            break;

          case 2:
            (this.data.camp.waiting ? wx.lego.cancleCampWaiting({
                campId: this.data.campId
            }) : wx.lego.createCampWaiting({
                campId: this.data.campId
            })).then(function(t) {
                a.fetchCampDetail();
            }).catch(function(t) {
                401 === t.statusCode ? (0, n.doLogin)() : wx.showToast({
                    title: t.data.text,
                    icon: "none",
                    duration: 2e3
                });
            });
            break;

          case 3:
            wx.navigateTo({
                url: "/app/pages/campOrder/campOrder?orderNo=".concat(this.data.camp.orderNo)
            });
        }
    },
    payWithCash: function() {
        var t = (0, e.default)(a.default.mark(function t() {
            var e, o;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (this.data.canSubmit) {
                        t.next = 2;
                        break;
                    }
                    return t.abrupt("return");

                  case 2:
                    return t.prev = 2, this.setData({
                        canSubmit: !1
                    }), t.next = 6, wx.lego.createCampOrder({
                        campId: this.data.campId
                    });

                  case 6:
                    e = t.sent, o = "/app/pages/generalPay/generalPay?orderNo=".concat(e.data.orderNo, "&bizType=").concat(e.data.bizType, "&redirectTo=campOrder"), 
                    this.setData({
                        canSubmit: !0
                    }), wx.redirectTo({
                        url: o
                    }), t.next = 16;
                    break;

                  case 12:
                    t.prev = 12, t.t0 = t.catch(2), this.setData({
                        canSubmit: !0
                    }), 401 === t.t0.statusCode ? (this.data.canFetchInfo = !1, (0, n.doLogin)()) : wx.showToast({
                        title: t.t0.data.text,
                        icon: "none"
                    });

                  case 16:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 12 ] ]);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(),
    onHide: function() {
        clearInterval(this.countDownTimer);
    },
    onUnLoad: function() {
        clearInterval(this.countDownTimer);
    }
});