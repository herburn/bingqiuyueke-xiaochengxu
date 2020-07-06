var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), t = require("../../utils/schedule"), a = require("../../utils/util"), o = getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        schedules: Object,
        gymInfoMap: Object,
        courseInfoMap: Object,
        coachInfoMap: Object,
        packagePrivilegeInfo: Object,
        lastScheduleWeekEnd: String
    },
    data: {
        planAdd: !1,
        planPositionY: 0,
        path: "",
        totalNavHeight: 68
    },
    attached: function() {
        this.setData({
            path: (0, t.getPathName)(),
            totalNavHeight: o.globalData.customNav.totalNavHeight
        });
    },
    methods: {
        routerDetail: function(e) {
            var t = e.id ? e : e.currentTarget.dataset.schedule, a = this.data.courseInfoMap[t.courseId].courseBaseId;
            if (wx.navigateTo({
                url: "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(a, "&scheduleId=").concat(t.id)
            }), t.liteScheduleOperations && t.liteScheduleOperations.scheduleOperations && t.liteScheduleOperations.scheduleOperations.length) {
                var i = t.liteScheduleOperations.scheduleOperations[0].id;
                o.sensors.track("web_gym_schedule_activity_click", {
                    client: "mini_program",
                    schedule_operation_id: i
                });
            }
        },
        routerCoach: function(e) {
            var t = e.currentTarget.dataset.schedule;
            1 == t.coachCount ? wx.navigateTo({
                url: "/app/pages/coach/coach?coachId=".concat(t.coachUserId)
            }) : this.routerDetail(t);
        },
        routerOrder: function(e) {
            var a = this, o = e.currentTarget.dataset, i = o.status, n = o.scheduleid, s = o.index, c = o.tableindex;
            "CLOSE" != i && ("BOOKED" == i ? wx.navigateTo({
                url: "/app/pages/courseOrder/courseOrder?scheduleId=".concat(n)
            }) : "IN_WAITING" == i ? wx.navigateTo({
                url: "/app/pages/waitingDetail/waitingDetail?scheduleId=".concat(n)
            }) : "WAITABLE" == i || "BOOKABLE" == i ? wx.navigateTo({
                url: "/app/pages/courseConfirm/courseConfirm?scheduleId=".concat(n, "&bookFrom=").concat((0, 
                t.getPathName)())
            }) : "IN_SCHEDULE_PLAN" == i ? wx.lego.planRemove(n).then(function() {
                a.setBtnStatus(c, s, "PREVIEW");
            }) : "PREVIEW" == i && (this.setData({
                planAdd: !1
            }, function() {
                a.setData({
                    planPositionY: e.detail.y,
                    planAdd: !0
                });
            }), wx.lego.planAdd(n).then(function() {
                a.setBtnStatus(c, s, "IN_SCHEDULE_PLAN");
            })));
        },
        animationend: function() {
            this.data.planAdd && this.setData({
                planAdd: !1
            });
        },
        setBtnStatus: function(t, a, o) {
            var i = "IN_SCHEDULE_PLAN" == o, n = this.data.schedules.scheduleTables[t].schedules[a];
            n.scheduleStatus = o, n.btnDisabled = i, n.btnBorder = i, n.btnText = i ? "移出计划" : "加入计划", 
            this.setData((0, e.default)({}, "schedules.scheduleTables[".concat(t, "].schedules[").concat(a, "]"), n)), 
            i && wx.showTabBarRedDot({
                index: 2
            });
        },
        getBond: function(e) {
            var t = this, o = e.currentTarget.dataset.gymid, i = this.data.gymInfoMap[o];
            !i.hasBond && i.activityCode && wx.lego.getBond({
                type: "newGym",
                entityId: i.activityCode
            }).then(function(e) {
                e.data && (wx.showToast({
                    title: "领取成功",
                    icon: "none",
                    duration: 2e3
                }), t.triggerEvent("setgymactivity", {
                    gymId: o
                }));
            }).catch(function(e) {
                401 == e.statusCode ? (0, a.doLogin)() : wx.showToast({
                    title: e.data ? e.data.text : "领取失败了",
                    icon: "none",
                    duration: 2e3
                });
            });
        },
        routerCooperateDetail: function(e) {
            var t = e.currentTarget.dataset.opera;
            t.activityUrl && wx.navigateTo({
                url: "/app/pages/webView/webView?url=".concat(t.activityUrl, "&title=").concat(t.showTitle)
            });
        }
    }
});