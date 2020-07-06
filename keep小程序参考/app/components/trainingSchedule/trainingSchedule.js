var e = getApp();

Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        propData: {
            type: Object,
            value: null,
            observer: function(e) {
                if ("plan" == this.properties.type && e.length) {
                    var t = [], a = e.some(function(e) {
                        return e.scheduleTabDetailList.some(function(e) {
                            return "PREVIEW" !== e.bookableStatus;
                        });
                    });
                    e.forEach(function(e) {
                        var a = e.scheduleTabDetailList.some(function(e) {
                            return !e.priorityStatus;
                        });
                        t.push(a);
                    }), this.setData({
                        isOrgLevelList: t,
                        isNotPreviewTime: a
                    });
                }
            }
        },
        packageInfo: Object,
        type: {
            type: String,
            value: ""
        },
        priorityPlanList: Array
    },
    data: {
        totalNavHeight: 0,
        isOrgLevelList: [],
        isNotPreviewTime: !1
    },
    methods: {
        longPressContro: function(e) {
            var t = this, a = e.currentTarget.dataset, o = a.types, r = a.item.scheduleId;
            "plan" == o && (wx.vibrateShort(), wx.showActionSheet({
                itemList: [ "移出计划" ],
                success: function(e) {
                    0 == e.tapIndex && t.planRemove(r);
                }
            }));
        },
        to: function(e) {
            var t = e.currentTarget.dataset, a = t.types, o = t.el;
            1 == o.coachCount ? wx.navigateTo({
                url: "/app/pages/coach/coach?coachId=".concat(o.coachUserId)
            }) : this.toOrder(a, o);
        },
        goHome: function() {
            e.globalData.jumpMonday = 1, wx.switchTab({
                url: "/app/pages/index/index"
            });
        },
        toOrder: function(e, t) {
            if (t) var a = e; else {
                var o = e.currentTarget.dataset;
                a = o.types, t = o.item;
            }
            t.index ? wx.navigateTo({
                url: "/app/pages/campOrder/campOrder?orderNo=".concat(t.orderNo, "&anchor=true")
            }) : "waiting" == a ? wx.navigateTo({
                url: "/app/pages/waitingDetail/waitingDetail?scheduleId=" + t.scheduleId
            }) : "plan" == a ? "BOOKABLE" == t.bookableStatus || "SOLD_OUT" == t.bookableStatus ? wx.navigateTo({
                url: "/app/pages/courseConfirm/courseConfirm?scheduleId=".concat(t.scheduleId, "&bookFrom=plan")
            }) : wx.navigateTo({
                url: "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(t.courseBaseId, "&scheduleId=").concat(t.scheduleId)
            }) : wx.navigateTo({
                url: "/app/pages/courseOrder/courseOrder?orderNo=".concat(t.orderNo, "&opened_from=2")
            });
        },
        planRemove: function(t) {
            var a = this;
            wx.lego.planRemove(t).then(function(t) {
                wx.showToast({
                    title: "该课程已从计划中移出",
                    icon: "none",
                    duration: 2e3
                }), e.globalData.updateSchedule = 1, a.triggerEvent("gettrainlist");
            });
        },
        changePlanPrt: function(t) {
            var a = this, o = t.currentTarget.dataset.el, r = o.scheduleId, n = 0, i = "down";
            0 == o.priorityStatus && (n = 1, i = "up"), wx.lego.changePlanPrt(r, n).then(function() {
                e.sensors.track("web_gym_plan_priority_click", {
                    priority_type: i
                }), a.triggerEvent("changeplanprt", {
                    schedule: o,
                    status: n
                });
            }).catch(function(e) {
                console.log(e);
            });
        }
    }
});