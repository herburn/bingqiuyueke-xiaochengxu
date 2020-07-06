var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = t(require("../../../@babel/runtime/helpers/defineProperty")), e = t(require("../../../@babel/runtime/helpers/objectWithoutProperties")), i = require("../../utils/util"), n = getApp();

Page({
    data: {
        keepUserInfo: null,
        swiperIndex: 0,
        showList: !1,
        swiperHeight: 0,
        tab: [ {
            text: "训练计划",
            count: 0,
            isShow: !1
        }, {
            text: "等位中",
            count: 0,
            isShow: !0
        }, {
            text: "即将开始",
            count: 0,
            isShow: !0
        } ],
        planList: [],
        priorityPlanList: [],
        waitingList: [],
        pendingList: [],
        trainingInfo: null,
        packagePrivilegeInfo: {},
        updateTabIndex: !0,
        refreshing: !1,
        carryShow: !1,
        totalNavHeight: 68,
        navigatorBarBackground: ""
    },
    bindchange: function(t) {
        this.setSwiperIndex(t.detail.current);
    },
    login: function() {
        (0, i.doLogin)();
    },
    setSwiperIndex: function(t) {
        this.setData({
            swiperIndex: t
        }), this.computedHeight();
    },
    computedHeight: function() {
        var t = this.data.packagePrivilegeInfo.hasPreviewPrivilege ? 0 : -1, a = 0;
        a = this.data.swiperIndex == t ? 0 : this.data.swiperIndex == ++t ? 1 : 2, this.getHeight(a);
    },
    getHeight: function(t) {
        var a = this, e = "#swiper-item-" + t;
        wx.createSelectorQuery().select(e).boundingClientRect(function(t) {
            t && a.setData({
                swiperHeight: t.height
            });
        }).exec();
    },
    handleChange: function(t) {
        var a = t.detail.name;
        this.data.packagePrivilegeInfo.hasPreviewPrivilege || a--, this.setSwiperIndex(a);
    },
    getTrainList: function(t) {
        var a = this;
        return wx.lego.getTrainList().then(function(e) {
            var i = e.data;
            if (a.data.tab[0].count = i.planCount, a.data.tab[1].count = i.waitingCount, a.data.tab[2].count = i.pendingCount, 
            a.data.packagePrivilegeInfo = i.packagePrivilegeInfo || {}, a.data.tab[0].isShow = a.data.packagePrivilegeInfo.hasPreviewPrivilege, 
            a.data.packagePrivilegeInfo.hasPreviewPrivilege) {
                a.data.planList = i.schedulePlanList, n.globalData.planCount = i.planCount;
                var r = [];
                i.schedulePlanList && i.schedulePlanList.forEach(function(t) {
                    var a = t.date, e = [];
                    (e = t.scheduleTabDetailList.filter(function(t) {
                        return 0 !== t.priorityStatus;
                    })).length && (e.map(function(t) {
                        return t.date = a;
                    }), r = r.concat(e));
                }), a.data.priorityPlanList = r.sort(function(t, a) {
                    return t.userPlanUpdateTimestamp - a.userPlanUpdateTimestamp;
                }), a.setData({
                    priorityPlanList: a.data.priorityPlanList
                });
            } else a.data.updateTabIndex && (a.data.swiperIndex = 1);
            if (a.data.waitingList = i.waitingScheduleList, a.data.pendingList = i.pendingScheduleList, 
            a.data.updateTabIndex) {
                a.data.updateTabIndex = !1;
                for (var s = 0; s < a.data.tab.length; s++) if (a.data.tab[s].count > 0) {
                    var o = a.data.packagePrivilegeInfo.hasPreviewPrivilege ? s : s - 1;
                    a.setSwiperIndex(o);
                    break;
                }
            }
            a.computedHeight(), a.data.showList = !0, a.setData({
                tab: a.data.tab,
                showList: a.data.showList,
                planList: a.data.planList,
                waitingList: a.data.waitingList,
                pendingList: a.data.pendingList,
                packagePrivilegeInfo: a.data.packagePrivilegeInfo
            }, function() {
                a.computedHeight();
            }), "function" == typeof t && t(), a.data.planList && a.data.planList.length && a.countDownForPreview();
        });
    },
    getTrainingInfo: function() {
        var t = this;
        wx.lego.getTrainingInfo().then(function(a) {
            a.data.monthAt = ("" + a.data.monthAt).substr(4), a.data.trainingDuration = a.data.trainingDuration, 
            t.setData({
                trainingInfo: a.data
            });
        });
    },
    clearPreviewTimer: function() {
        clearTimeout(n.globalData.previewTimer);
    },
    onHide: function() {
        this.clearPreviewTimer();
    },
    onUnload: function() {
        this.clearPreviewTimer();
    },
    countDownForPreview: function() {
        var t = this;
        if (!n.globalData.timerAlready) {
            var a = this.data.packagePrivilegeInfo.countdownSecond;
            a && a > 0 && (this.clearPreviewTimer(), n.globalData.previewTimer = setTimeout(function() {
                n.globalData.timerAlready = !0, t.getTrainList();
            }, 1e3 * a));
        }
    },
    changePlanPrt: function(t) {
        for (var i, n, r, s = this, o = t.detail, d = o.schedule, h = o.status, g = ((0, 
        e.default)(o, [ "schedule", "status" ]), this.data.priorityPlanList), l = this.data.planList.length, u = 0; u < l; u++) if (-1 !== (r = this.data.planList[u].scheduleTabDetailList.findIndex(function(t) {
            return t.scheduleId == d.scheduleId;
        }))) {
            n = u;
            break;
        }
        if (1 == h) d.priorityStatus = h, d.date = this.data.planList[n].date, g.push(d); else {
            var c = this.data.priorityPlanList.findIndex(function(t) {
                return t.scheduleId == d.scheduleId;
            });
            g.splice(c, 1);
        }
        this.setData((i = {}, (0, a.default)(i, "planList[".concat(n, "].scheduleTabDetailList[").concat(r, "].priorityStatus"), h), 
        (0, a.default)(i, "priorityPlanList", g), i), function() {
            s.getHeight(0);
        });
    },
    onLoad: function() {
        this.data.keepUserInfo = wx.getStorageSync(wx.keys.keepUserInfo) || "", this.setData({
            keepUserInfo: this.data.keepUserInfo
        }), this.data.keepUserInfo && (this.getTrainingInfo(), this.getTrainList()), this.setNavigateBarBackgroundColor(), 
        n.sensors.track("web_gym_moves_view", {
            client: "mini_program"
        });
    },
    onReady: function() {
        this.setData({
            totalNavHeight: n.globalData.customNav.totalNavHeight
        });
    },
    onShow: function() {
        if (wx.hideTabBarRedDot({
            index: 2
        }), this.data.carryShow) {
            try {
                this.data.keepUserInfo = wx.getStorageSync(wx.keys.keepUserInfo) || "", this.setData({
                    keepUserInfo: this.data.keepUserInfo
                });
            } catch (t) {
                console.log(t);
            }
            this.getTrainList(), this.data.keepUserInfo && (this.data.trainingInfo || this.getTrainingInfo()), 
            this.setNavigateBarBackgroundColor();
        } else this.data.carryShow = !0;
    },
    setNavigateBarBackgroundColor: function() {
        this.data.keepUserInfo ? this.data.navigatorBarBackground = "#fafafa" : this.data.navigatorBarBackground = "#ffffff", 
        this.setData({
            navigatorBarBackground: this.data.navigatorBarBackground
        });
    },
    resetRefresh: function() {
        this.data.refreshing && (this.data.refreshing = !1, wx.stopPullDownRefresh());
    },
    onPullDownRefresh: function() {
        var t = this;
        this.data.refreshing || (wx.vibrateShort(), this.data.refreshing = !0, this.getTrainList().then(function() {
            t.resetRefresh();
        }).catch(function(a) {
            t.resetRefresh();
        }), this.getTrainingInfo());
    },
    onPageScroll: function(t) {
        0 == t.scrollTop ? this.data.navigatorBarBackground = "#fafafa" : this.data.navigatorBarBackground = "#ffffff", 
        this.setData({
            navigatorBarBackground: this.data.navigatorBarBackground
        });
    }
});