var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), t = require("../../utils/schedule"), a = getApp();

Component({
    properties: {
        scheduleDynamicInfoMap: Object,
        schedules: {
            type: Array,
            value: [],
            observer: function(e) {
                var t = this;
                if (e && e.length) {
                    this.formatClassDate(e);
                    var a = this.data.scheduleDynamicInfoMap;
                    a && e.forEach(function(e) {
                        !e.scheduleEmpty && e.scheduleTables.forEach(function(e) {
                            e.schedules.length && e.schedules.forEach(function(e) {
                                a[e.id] && e.scheduleStatus !== a[e.id].scheduleStatus && t.getBtnInfo(e);
                            });
                        });
                    }), this.setData({
                        schedules: e
                    });
                }
            }
        },
        gymInfoMap: Object,
        courseInfoMap: Object,
        coachInfoMap: Object,
        packagePrivilegeInfo: Object,
        scrollTop: Number
    },
    data: {
        path: "",
        date: null,
        dateIndex: 0,
        dateSwiperIndex: 0,
        lastScheduleWeekEnd: "",
        totalNavHeight: 68,
        swiperHeight: "100%",
        lastScheduleDate: ""
    },
    attached: function() {
        this.setData({
            path: (0, t.getPathName)(),
            totalNavHeight: a.globalData.customNav.totalNavHeight
        });
    },
    methods: {
        setGymActivity: function(t) {
            var a = t.detail.gymId, s = this.data.gymInfoMap;
            s[a].hasBond = !0, s[a].bindButton = "已领取", this.setData((0, e.default)({}, "gymInfoMap.".concat(a), s[a]));
        },
        getBtnInfo: function(e) {
            if (this.data.scheduleDynamicInfoMap && this.data.scheduleDynamicInfoMap[e.id]) {
                var t = this.data.scheduleDynamicInfoMap[e.id].scheduleStatus;
                switch (e.scheduleStatus = t, e.btnType = "default", e.btnDisabled = !1, e.btnBorder = !1, 
                e.waitingProcessRation = this.data.scheduleDynamicInfoMap[e.id].waitingProcessRation, 
                t) {
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
        swiperChangeFn: function(e) {
            if (this.data.dateIndex != e) {
                if (e < 5) var t = 0; else t = this.data.date.length - 7;
                this.setData({
                    dateIndex: e,
                    dateSwiperIndex: t,
                    targetDate: this.data.date[e].date
                }), this.computedHeight(), this.data.scrollTop >= 0 && wx.pageScrollTo({
                    scrollTop: this.data.scrollTop,
                    duration: 0
                });
            }
        },
        computedHeight: function() {
            var e = this, t = "#swiper_".concat(this.data.dateIndex);
            wx.createSelectorQuery().in(this).select(t).boundingClientRect(function(t) {
                t && t.height && e.setData({
                    swiperHeight: "".concat(t.height, "px")
                });
            }).exec();
        },
        swiperChange: function(e) {
            "touch" == e.detail.source && this.swiperChangeFn(e.detail.current);
        },
        selectDate: function(e) {
            this.swiperChangeFn(e.currentTarget.dataset.index);
        },
        formatClassDate: function(e) {
            var a = this;
            this.data.lastScheduleDate = "", this.data.dateIndex >= e.length && this.swiperChangeFn(0);
            for (var s = "", i = e.length - 1; i >= 0; i--) if (!e[i].scheduleEmpty) {
                s = e[i].date;
                break;
            }
            if (this.data.lastScheduleDate && s === this.data.lastScheduleDate) this.computedHeight(); else {
                this.data.lastScheduleDate = s;
                var n = (0, t.formatWeek)(e[0].date, s);
                this.data.date = n.week, this.data.lastScheduleWeekEnd = n.lastScheduleWeekEnd, 
                this.setData({
                    dateIndex: this.data.dateIndex,
                    date: this.data.date,
                    lastScheduleWeekEnd: this.data.lastScheduleWeekEnd
                }, function() {
                    a.computedHeight();
                });
            }
        }
    }
});