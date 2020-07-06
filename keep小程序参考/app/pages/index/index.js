var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), s = e(require("../../../@babel/runtime/helpers/defineProperty")), n = require("../../utils/util"), i = require("../../utils/schedule"), c = getApp();

Page({
    data: {
        ready: !1,
        loading: !1,
        pullDownloading: !1,
        bannerInfo: null,
        showBanner: !1,
        showTapTips: !1,
        schedules: null,
        scrollTop: 0,
        packagePrivilegeInfo: null,
        screenGymLength: 0,
        screenOtherLength: 0,
        switchStatus: !1,
        date: null,
        dateIndex: 0,
        dateSwiperIndex: 0,
        weekEnd: "",
        lastScheduleWeekEnd: "",
        totalNavHeight: 68,
        popupInfo: null,
        userHonorHisItem: null
    },
    scheduleSample: [],
    latitude: "",
    longitude: "",
    onLoad: function(e) {
        var t = this;
        this.optionHandle(e), this.fetchDataAll().then(function() {
            var a = t.data.schedules;
            a && a.length && (e.target ? a.forEach(function(a, s) {
                a.date == e.target && t.emitSwiper(s);
            }) : a[0].scheduleEmpty && t.emitSwiper(1));
        }), this.fetchNewPromotion();
    },
    onReady: function() {
        this.setData({
            totalNavHeight: c.globalData.customNav.totalNavHeight,
            showTapTips: !1 !== wx.getStorageSync(wx.keys.showTapTips)
        });
    },
    onShow: function() {
        var e = this;
        this.executeOnShow ? (1 == c.globalData.updateSchedule ? wx.lego.fetchScheduleDynamic(this.getQuery()).then(function(t) {
            e.dynamic = t.data, e.dynamic && e.data.schedules.length && e.data.schedules.forEach(function(t) {
                t.scheduleTables.length && t.scheduleTables.forEach(function(t) {
                    t.schedules.length && t.schedules.forEach(function(t) {
                        t.id && e.dynamic[t.id] && t.scheduleStatus !== e.dynamic[t.id].scheduleStatus && e.getBtnInfo(t);
                    });
                });
            }), e.setData({
                schedules: e.data.schedules
            });
        }) : 2 == c.globalData.updateSchedule ? this.refreshData() : this.filterAction(), 
        c.globalData.updateSchedule = !1, this.jumpMonday()) : this.executeOnShow = !0;
    },
    onShareAppMessage: function() {
        var e = "shared=1", t = wx.getStorageSync(wx.keys.userSource);
        return t && (e += "&usersource=".concat(t.data)), {
            title: "Keep 线下运动空间",
            path: "/app/pages/index/index?".concat(e),
            imageUrl: "https://static1.keepcdn.com/2018/02/07/1518003756611.jpg?imageMogr2/thumbnail/500x/quality/95"
        };
    },
    onTabItemTap: function() {
        var e = this;
        this.data.loading || this.data.pullDownloading || (this.doubleTap ? (this.refreshData(), 
        this.setData({
            scrollTop: 0,
            loading: !0
        }), this.data.showTapTips && (this.setData({
            showTapTips: !1
        }), wx.setStorage({
            key: wx.keys.showTapTips,
            data: !1
        }))) : (this.doubleTap = 1, setTimeout(function() {
            e.doubleTap = 0;
        }, 300)));
    },
    setGymActivity: function(e) {
        var t = e.detail.gymId, a = this.data.gymInfoMap;
        a[t].hasBond = !0, a[t].bindButton = "已领取", this.setData((0, s.default)({}, "gymInfoMap.".concat(t), a[t]));
    },
    refreshData: function() {
        var e = this;
        this.refreshing || (this.refreshing = !0, this.setData({
            switchStatus: !1
        }), this.initDateIndex(), this.fetchDataAll().catch(function(e) {
            console.log(e);
        }).then(function() {
            e.refreshing = !1, wx.vibrateShort();
        }));
    },
    jumpMonday: function() {
        var e = this;
        if (1 === c.globalData.jumpMonday) {
            var t = wx.moment().day(8).format("YYYYMMDD"), a = this.data.schedules;
            a && a.length && (c.globalData.jumpMonday = 0, a.forEach(function(a, s) {
                a.date == t && e.emitSwiper(s);
            }));
        }
    },
    initDateIndex: function() {
        var e = c.globalData.scheduleRawData;
        e && e.length && this.data.dateIndex >= e.length && this.setData({
            dateIndex: 0
        });
    },
    tapSwitch: function() {
        this.setData({
            switchStatus: !this.data.switchStatus
        }), this.screen = wx.getStorageSync(wx.keys.homeScreen) || {}, this.scheduleSample = (0, 
        i.screenSchedules)({
            screen: this.screen,
            onlyBookable: this.data.switchStatus,
            dynamic: this.dynamic
        }), this.setData({
            scrollTop: 0,
            schedules: this.formatSchedules()
        }), c.sensors.track("web_gym_schedule_available_click", {
            click_type: this.data.switchStatus ? "open" : "close"
        });
    },
    formatSchedules: function() {
        var e, t = this, a = [];
        return this.scheduleSample && this.scheduleSample.length && this.scheduleSample.forEach(function(e) {
            var t = e.scheduleTables.length ? [ e.scheduleTables.shift() ] : [];
            a.push({
                date: e.date,
                scheduleEmpty: e.scheduleEmpty,
                scheduleTables: t
            });
        }), this.data.schedules && this.data.schedules[this.data.dateIndex] && this.data.schedules[this.data.dateIndex].scheduleTables && (e = this.data.schedules[this.data.dateIndex].scheduleTables.length), 
        a.length && a.forEach(function(a, s) {
            e && s == t.data.dateIndex ? (0, i.loadMore)(a.scheduleTables, t.scheduleSample[s].scheduleTables, !0, e) : (0, 
            i.loadMore)(a.scheduleTables, t.scheduleSample[s].scheduleTables, !0), a.scheduleTables.length && a.scheduleTables.forEach(function(e) {
                e.schedules.length && e.schedules.forEach(function(e) {
                    t.getBtnInfo(e);
                });
            });
        }), a;
    },
    getBtnInfo: function(e) {
        if (this.dynamic && this.dynamic[e.id]) {
            var t = this.dynamic[e.id].scheduleStatus;
            switch (e.scheduleStatus = t, e.btnType = "default", e.btnDisabled = !1, e.btnBorder = !1, 
            e.waitingProcessRation = this.dynamic[e.id].waitingProcessRation, t) {
              case "CLOSE":
                e.btnText = "已结束", e.btnType = "finish";
                break;

              case "BOOKABLE":
                var a = this.data.courseInfoMap;
                a && a[e.courseId] && a[e.courseId].scheduleCourseTag ? e.btnText = "体验新课" : e.btnText = "马上预约";
                break;

              case "BOOKED":
                e.btnText = "已预约", e.btnDisabled = !0;
                break;

              case "IN_WAITING":
              case "IN_SCHEDULE_PLAN":
                e.btnDisabled = !0, e.btnBorder = !0, e.btnText = "IN_WAITING" == t ? "等位中" : "移出计划";
                break;

              case "WAITABLE":
                e.btnText = "等位", e.btnBorder = !0;
                break;

              case "PREVIEW":
                e.btnText = "加入计划";
            }
        }
    },
    selectDate: function(e) {
        this.emitSwiper(e.currentTarget.dataset.index);
    },
    swiperChange: function(e) {
        "touch" == e.detail.source && this.emitSwiper(e.detail.current);
    },
    emitSwiper: function(e) {
        if (this.data.dateIndex != e && this.data.date) {
            if (e < 5) var t = 0; else t = this.data.date.length - 7;
            this.setData({
                dateIndex: e,
                dateSwiperIndex: t,
                targetDate: this.data.date[e].date
            });
        }
    },
    scrollToTop: function() {
        this.setData({
            scrollTop: 0
        });
    },
    touchstart: function(e) {
        e.changedTouches[0] && (this.start = e.changedTouches[0].clientY);
    },
    touchend: function(e) {
        if (!this.data.loading && (this.top <= -60 && (this.refreshData(), this.setData({
            pullDownloading: !0
        })), /Android/gi.test(c.globalData.systemInfo.system))) {
            if (!e.changedTouches[0]) return;
            e.changedTouches[0].clientY - this.start >= 180 && this.top < 60 && (this.refreshData(), 
            this.setData({
                loading: !0
            }));
        }
    },
    viewScroll: function(e) {
        this.top = e.detail.scrollTop, this.data.bannerInfo && e.detail.scrollTop > 0 && this.data.showBanner && !this.bannerLock && this.triggerBannerLock(!1);
    },
    scrolltoupper: function() {
        this.data.bannerInfo && !this.bannerLock && this.triggerBannerLock(!0);
    },
    triggerBannerLock: function(e) {
        var t = this;
        this.bannerLoc || e == this.data.showBanner || (this.bannerLock = !0, this.setData({
            showBanner: e
        }), clearTimeout(this.lockTimer), this.lockTimer = setTimeout(function() {
            t.bannerLock = !1;
        }, 450));
    },
    scrolltolower: function() {
        var e = this;
        if (this.scheduleSample.length) {
            var t = new Date(), a = this.data.dateIndex, n = this.scheduleSample[a];
            if (n && n.scheduleTables.length) {
                var i = n.scheduleTables.shift();
                i.schedules.length && i.schedules.forEach(function(t) {
                    e.getBtnInfo(t);
                }), this.data.schedules[a].scheduleTables.push(i);
                var c = this.data.schedules[a].scheduleTables.length - 1;
                this.setData((0, s.default)({}, "schedules[".concat(a, "].scheduleTables[").concat(c, "]"), this.data.schedules[a].scheduleTables[c]), function() {
                    console.log(new Date() - t);
                });
            }
        }
    },
    optionHandle: function(e) {
        if (e.usersource && (0, n.setUserSource)(e.usersource), e.shared && (0, n.setShared)(e.shared), 
        c.sensors.track("web_gym_homepage_view"), this.scene = [], e.scene) {
            var t = decodeURIComponent(e.scene);
            this.scene = t.split("#"), 4 == this.scene[0] && wx.navigateTo({
                url: "/app/pages/couponInvitation/couponInvitation?userId=" + this.scene[1]
            }), 9 == this.scene[0] && wx.navigateTo({
                url: "/app/packages/classBag/enterpriseToken/enterpriseToken?enterpriseId=" + this.scene[1]
            });
        }
        if (e.share_path && wx.navigateTo({
            url: decodeURIComponent(e.share_path)
        }), c.globalData.jump_path) {
            var a = c.globalData.jump_path;
            c.globalData.jump_path = "", wx.navigateTo({
                url: a
            });
        }
    },
    popupEmiter: function() {
        2 == this.scene[0] ? this.fetchPopup(this.scene[1]) : this.fetchPopup();
    },
    fetchPopup: function() {
        var e = (0, a.default)(t.default.mark(function e(a) {
            var s;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.data.popupInfo) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    if (e.prev = 2, s = null, !a) {
                        e.next = 11;
                        break;
                    }
                    return e.next = 7, wx.lego.previewPopup(a);

                  case 7:
                    (s = e.sent).data.isPreviewPopup = !0, e.next = 14;
                    break;

                  case 11:
                    return e.next = 13, wx.lego.fetchPopup(this.cityCode);

                  case 13:
                    s = e.sent;

                  case 14:
                    this.setData({
                        popupInfo: s.data
                    }), e.next = 20;
                    break;

                  case 17:
                    e.prev = 17, e.t0 = e.catch(2), console.log(e.t0);

                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 17 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(),
    fetchNewPromotion: function() {
        var e = this;
        wx.lego.fetchNewPromotion().then(function(t) {
            t.data.userHonorHis && t.data.userHonorHis.length && (e.data.userHonorHisItem = t.data.userHonorHis.shift(), 
            e.setData({
                userHonorHisItem: e.data.userHonorHisItem
            })), t.data.hasNewUnReadPromotion && (wx.showTabBarRedDot({
                index: 3
            }), wx.setStorageSync(wx.keys.newPromotion, t.data));
        });
    },
    fetchDataAll: function() {
        var e = (0, a.default)(t.default.mark(function e() {
            var a, s = this;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, i.fetchLocation)();

                  case 3:
                    a = e.sent, this.latitude = a.latitude || "", this.longitude = a.longitude || "", 
                    e.next = 10;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0);

                  case 10:
                    return e.abrupt("return", Promise.all([ this.fetchTable(), this.fetchDynamic() ]).then(function(e) {
                        var t = e[0].data;
                        s.dynamic = e[1].data, s.cityCode = t.cityCode, s.cityName = t.cityName, s.setData({
                            bannerInfo: t.bannerInfo,
                            showBanner: t.bannerInfo,
                            showCityName: t.cityName.replace(/市$/, "")
                        }), s.scheduleSample = t.schedules, s.data.courseInfoMap = t.courseInfoMap, c.globalData.scheduleRawData = t.schedules, 
                        c.globalData.courseInfoMap = t.courseInfoMap;
                        var a = s.getSchedules();
                        s.formatClassDate(a), s.setData({
                            schedules: a,
                            gymInfoMap: t.gymInfoMap,
                            courseInfoMap: t.courseInfoMap,
                            coachInfoMap: t.coachInfoMap,
                            packagePrivilegeInfo: t.packagePrivilegeInfo
                        }, function() {
                            s.setData({
                                loading: !1,
                                pullDownloading: !1,
                                ready: !0
                            });
                        }), s.popupEmiter();
                    }));

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 8 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    fetchTable: function() {
        return wx.lego.fetchScheduleTable(this.getQuery());
    },
    fetchDynamic: function() {
        return wx.lego.fetchScheduleDynamic(this.getQuery());
    },
    getQuery: function() {
        var e = wx.getStorageSync(wx.keys.homeScreen) || {};
        return this.cityCode = e.cityCode || "", "?longitude=".concat(this.longitude, "&latitude=").concat(this.latitude, "&cityCode=").concat(this.cityCode);
    },
    getSchedules: function() {
        var e = {};
        try {
            e = wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (e) {}
        return this.refreshing || (e = {
            gym: e.gym || []
        }), this.screen = e, this.scheduleSample = (0, i.screenSchedules)({
            screen: e
        }), this.computedScreenCount(e), wx.setStorage({
            key: wx.keys.homeScreen,
            data: e
        }), this.formatSchedules();
    },
    computedScreenCount: function(e) {
        try {
            e = e || wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (e) {}
        var t = 0, a = e.gym ? e.gym.length : 0;
        e.effect && (t += e.effect.length), e.genre && (t += e.genre.length), e.time && (t += e.time.length), 
        e.activity && (t += e.activity.length), this.setData({
            screenGymLength: a,
            screenOtherLength: t
        });
    },
    formatClassDate: function(e) {
        this.data.lastScheduleDate = "", this.data.dateIndex >= e.length && this.emitSwiper(0);
        for (var t = "", a = e.length - 1; a >= 0; a--) if (!e[a].scheduleEmpty) {
            t = e[a].date;
            break;
        }
        if (t !== this.data.lastScheduleDate) {
            this.data.lastScheduleDate = t;
            var s = (0, i.formatWeek)(e[0].date, t);
            this.data.date = s.week, this.data.weekEnd = s.weekEnd, this.data.lastScheduleWeekEnd = s.lastScheduleWeekEnd, 
            this.setData({
                date: this.data.date,
                weekEnd: this.data.weekEnd,
                lastScheduleWeekEnd: this.data.lastScheduleWeekEnd
            });
        }
    },
    filterAction: function() {
        try {
            var e = wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (e) {
            console.log(e);
        }
        this.initDateIndex(), JSON.stringify(this.data.screen) != JSON.stringify(e) && (c.globalData.scheduleRawData && c.globalData.scheduleRawData.length && (this.scheduleSample = (0, 
        i.screenSchedules)({
            screen: e
        }), this.setData({
            schedules: this.formatSchedules()
        }), this.computedScreenCount(e)), this.data.screen = e, this.setData({
            switchStatus: !1
        }));
    },
    toGymFilter: function() {
        wx.navigateTo({
            url: "/app/pages/gymFilter/gymFilter?cityCode=".concat(this.cityCode || "")
        });
    }
});