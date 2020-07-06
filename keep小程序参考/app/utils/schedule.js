Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchLocation = function() {
    var t = new Date().getTime(), n = wx.getStorageSync(wx.keys.location);
    return new Promise(function(a, r) {
        var c = n ? t - n.time : 0;
        !n || c > 18e5 ? (0, e.getLocation)().then(function(e) {
            a(e), wx.setStorage({
                key: wx.keys.location,
                data: {
                    time: t,
                    latitude: e.latitude,
                    longitude: e.longitude
                }
            });
        }).catch(function(e) {
            r(e);
        }) : a(n);
    });
}, exports.formatWeek = function(e, t) {
    var n = [ "日", "一", "二", "三", "四", "五", "六" ], a = [], r = wx.moment(e).endOf("week").add(1, "d").format("YYYYMMDD"), c = r, o = wx.moment(e), s = t ? wx.moment(t) : wx.moment(r), i = s.diff(o, "days");
    i = i > 6 ? i : 6;
    for (var l = 0; l <= i; l++) l > 0 && o.add(1, "d"), a.push({
        date: o.format("YYYYMMDD"),
        week: 0 === l ? "今日" : n[o.format("d")],
        day: o.format("DD")
    });
    s.isAfter(r, "day") && (c = wx.moment(r).add(1, "week").format("YYYYMMDD"));
    return {
        week: a,
        weekEnd: r,
        lastScheduleWeekEnd: c
    };
}, exports.screenSchedules = function(e) {
    var t = e.scheduleRawData, n = e.screen, a = e.fromScreen, r = e.onlyBookable, c = e.dynamic, o = getApp(), s = o.globalData.courseInfoMap, i = t || o.globalData.scheduleRawData, l = i ? JSON.parse(JSON.stringify(i)) : [], u = (n = Object.assign({}, {
        gym: [],
        time: [],
        effect: [],
        genre: [],
        activity: []
    }, n)).gym.length, f = Object.keys(n).filter(function(e) {
        return ("time" == e || "effect" == e || "genre" == e || "activity" == e) && n[e].length;
    }).length;
    l.length && l.forEach(function(e) {
        e.scheduleTables.length && (u && (e.scheduleTables = e.scheduleTables.filter(function(e) {
            return -1 != n.gym.indexOf(e.gymId);
        })), e.scheduleTables.length && e.scheduleTables.forEach(function(e) {
            e.schedules.length && (e.schedules = e.schedules.filter(function(e) {
                var t = s[e.courseId] || {}, a = -1 != n.time.indexOf(e.timeRangeTag), o = -1 != n.effect.indexOf(t.effectTag), i = -1 != n.genre.indexOf(t.genreTag), l = -1 != n.activity.indexOf(t.scheduleCourseTag) || -1 != n.activity.indexOf(t.newUserRecommendTag), u = (a || !n.time.length) && (o || !n.effect.length) && (i || !n.genre.length) && (l || !n.activity.length) || !f;
                return r && c && c[e.id] && (u = u && "BOOKABLE" == c[e.id].scheduleStatus), u;
            }));
        }));
    }), !a && l.length && (f || r) && (u ? l.forEach(function(e) {
        var t = e.scheduleTables.filter(function(e) {
            return e.schedules.length;
        }), n = e.scheduleTables.filter(function(e) {
            return !e.schedules.length;
        });
        e.scheduleTables = t.concat(n);
    }) : l.forEach(function(e) {
        e.scheduleTables = e.scheduleTables.filter(function(e) {
            return e.schedules.length;
        });
    }));
    return l;
}, exports.loadMore = function e(t, n, a, r) {
    if (!n.length) return;
    if (a) if (r > 1) for (var c = 0; c < r; c++) n.length && t.push(n.shift()); else {
        var o = 0;
        t && t.length && (t.forEach(function(e) {
            o += e.schedules.length;
        }), n.length && o + t.length < 6 && (t.push(n.shift()), e(t, n, a)));
    } else t.push(n.shift());
}, exports.breakString = function(e) {
    var t = "", n = "";
    t = /^[\u4e00-\u9fa5]/.test(e) ? e : e.replace(/[^\u4e00-\u9fa5]+(?=[\u4e00-\u9fa5])/, function(e) {
        return n = e, "";
    });
    return {
        CN: t,
        EN: n
    };
}, exports.getPathName = function(e) {
    if (!e) var t = getCurrentPages(), e = t[t.length - 1].route;
    var n = "";
    "app/pages/index/index" == e ? n = "homepage" : "app/pages/train/train" == e ? n = "plan" : "app/pages/coursePoly/coursePoly" == e ? n = "course" : "app/pages/coach/coach" == e ? n = "coach" : "app/pages/space/space" == e ? n = "poi" : "app/pages/courseDetail/courseDetail" == e && (n = "schedule");
    return n;
}, exports.firstAddPlan = function() {
    var e;
    try {
        e = wx.getStorageSync(wx.keys.firstAddPlan);
    } catch (e) {
        console.log(e);
    }
    e || (wx.setStorage({
        key: wx.keys.firstAddPlan,
        data: 1
    }), wx.showModal({
        title: "课程已加入「训练计划」",
        content: "每周五晚 8 点 - 10 点可提前将下周课程加入计划，抢课快人一步",
        confirmText: "查看计划",
        confirmColor: "#24C789",
        cancelText: "暂不查看",
        cancelColor: "#333333",
        success: function(e) {
            e.confirm && wx.switchTab({
                url: "/pages/train"
            });
        }
    }));
};

var e = require("./wxfunction");