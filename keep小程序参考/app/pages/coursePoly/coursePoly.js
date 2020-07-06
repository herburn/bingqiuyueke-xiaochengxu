var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/regenerator")), a = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), c = require("../../utils/schedule"), s = (getApp(), 
[]), n = [];

Page({
    data: {
        latitude: "",
        longitude: "",
        cityName: "",
        showCityName: "",
        schedules: null,
        gymInfoMap: null,
        courseInfoMap: null,
        coachInfoMap: null,
        screenGymLength: 0,
        packagePrivilegeInfo: null,
        scheduleDynamicInfoMap: null,
        scrollTop: 0,
        carryShow: !1
    },
    toGymFilter: function() {
        wx.navigateTo({
            url: "/app/pages/gymFilter/gymFilter?cityCode=".concat(this.cityCode || "")
        });
    },
    fetchFilteredSchedule: function() {
        var e = (0, a.default)(t.default.mark(function e() {
            var a, s;
            return t.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = {}, e.prev = 1, e.next = 4, (0, c.fetchLocation)();

                  case 4:
                    a = e.sent, e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(1);

                  case 9:
                    return this.data.latitude = a.latitude || "", this.data.longitude = a.longitude || "", 
                    s = this.data.screen || wx.getStorageSync(wx.keys.homeScreen) || {}, this.data.screen = s, 
                    s.cityCode && (this.cityCode = s.cityCode, this.setCityName(s.cityName)), e.abrupt("return", this.fetchSchedule(s));

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 7 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    setCityName: function(e) {
        e && (this.data.cityName = e, this.setData({
            showCityName: this.data.cityName.replace(/市$/, "")
        }));
    },
    fetchSchedule: function(e) {
        var t = this;
        return wx.lego.fetchFilteredSchedule(this.data.baseId, this.cityCode, this.data.longitude, this.data.latitude).then(function(a) {
            n = JSON.parse(JSON.stringify(a.data.schedules)), e.activity = [], e.effect = [], 
            e.genre = [], e.time = [], e.gym && e.gym.length ? s = (0, c.screenSchedules)({
                scheduleRawData: n,
                screen: e
            }) : (s = JSON.parse(JSON.stringify(a.data.schedules))).forEach(function(e) {
                e.scheduleEmpty || (e.scheduleTables = e.scheduleTables.filter(function(e) {
                    return e.schedules.length;
                }));
            }), t.setData({
                schedules: s,
                gymInfoMap: a.data.gymInfoMap,
                courseInfoMap: a.data.courseInfoMap,
                coachInfoMap: a.data.coachInfoMap,
                packagePrivilegeInfo: a.data.packagePrivilegeInfo,
                scheduleDynamicInfoMap: a.data.scheduleDynamicInfoMap,
                screenGymLength: e.gym ? e.gym.length : 0
            }), t.cityCode = a.data.cityCode, t.setCityName(a.data.cityName);
        });
    },
    onLoad: function(e) {
        var t = this;
        this.data.baseId = e.courseBaseId || "", this.fetchFilteredSchedule().then(function() {
            if (e.target) {
                var a = t.data.schedules;
                if (a && a.length) {
                    var c = t.selectComponent("#schedules");
                    a.forEach(function(t, a) {
                        t.date == e.target && c.swiperChangeFn(a);
                    });
                }
            }
        }), this.setData({
            courseName: e.courseName ? decodeURIComponent(e.courseName) : ""
        });
    },
    onShow: function() {
        if (this.data.carryShow) {
            try {
                var e = wx.getStorageSync(wx.keys.homeScreen);
            } catch (e) {
                console.log(e);
            }
            if (e) {
                var t = e.cityCode;
                t && t !== this.cityCode && (this.data.cityName = e.cityName, this.cityCode = t || "", 
                this.setData({
                    showCityName: this.data.cityName.replace(/市$/, "")
                }));
            }
            this.data.screen = e, this.fetchSchedule(e).then(function() {
                wx.vibrateShort(), wx.stopPullDownRefresh();
            });
        } else this.data.carryShow = !0;
    },
    onShareAppMessage: function() {
        var e = "/app/pages/coursePoly/coursePoly?courseBaseId=".concat(this.data.baseId, "&courseName=").concat(this.data.courseName);
        return {
            title: "".concat(this.data.courseName || "Keepland", "-本周排课"),
            path: "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(this.data.baseId, "&share_path=").concat(encodeURIComponent(e))
        };
    },
    onPullDownRefresh: function() {
        this.onShow();
    }
});