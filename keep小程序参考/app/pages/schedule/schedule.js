var e = require("../../utils/schedule"), t = getApp();

Page({
    data: {
        current: 0,
        swiperHeight: 600,
        allClassifyList: null,
        newCourseSpreadInfoList: null,
        totalNavHeight: 68
    },
    onLoad: function() {
        this.fetchCourseSpreadTab();
    },
    onReady: function() {
        this.setData({
            totalNavHeight: t.globalData.customNav.totalNavHeight
        }), t.sensors.track("web_gym_course_homepage_view"), wx.lego.fetchBubbles().then(function(e) {
            wx.setStorage({
                key: wx.keys.bubbles,
                data: e.data.bubbleInfos
            }), wx.removeTabBarBadge({
                index: 0
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: "多样化线下课程供你选择"
        };
    },
    classSiwper: function(e) {
        "touch" === e.detail.source && this.swiperChange(e.detail.current);
    },
    selectClass: function(e) {
        this.swiperChange(parseInt(e.detail.name));
    },
    toDetail: function(e) {
        var t = e.currentTarget.dataset, a = t.baseid, s = t.status, r = t.type, i = s ? s + "" : "null", n = s ? "banner" : "list", o = getApp();
        "classifyCourse" == r ? (o.sensors.track("web_gym_course_click", {
            baseId: a,
            status: i,
            client: "mini_program",
            position: n
        }), o.sensors.track("web_gym_course_homepage_click", {
            place: s ? "banner" : "course_card",
            value: a
        }), wx.navigateTo({
            url: "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(a)
        })) : "camp" == r && wx.navigateTo({
            url: "/app/pages/campDetail/campDetail?campId=".concat(a)
        });
    },
    fetchCourseSpreadTab: function() {
        var t = this;
        wx.lego.fetchCourseSpreadTab().then(function(a) {
            var s = a.data, r = s.courseClassifyList;
            s.gymCampTab && r.unshift(s.gymCampTab), t.fomartNameString(r), s.newCourseSpreadInfoList.forEach(function(t) {
                t.formatCourseName = (0, e.breakString)(t.courseName);
            }), t.setData({
                allClassifyList: r,
                newCourseSpreadInfoList: s.newCourseSpreadInfoList
            }), t.getSweiperHeight();
        }).then(function() {
            wx.stopPullDownRefresh();
        });
    },
    swiperChange: function(e) {
        this.data.current = e, this.setData({
            current: this.data.current
        }), this.getSweiperHeight(), this.data.allClassifyList[e].courseGenreTag && t.sensors.track("web_gym_course_homepage_click", {
            place: "scene",
            value: this.data.allClassifyList[e].courseGenreTag
        });
    },
    getSweiperHeight: function() {
        var e = this, t = "#swiper-item-" + this.data.current;
        wx.createSelectorQuery().select(t).boundingClientRect(function(t) {
            t && e.setData({
                swiperHeight: t.height
            });
        }).exec();
    },
    fomartNameString: function(t) {
        t.map(function(t) {
            "训练营" != t.title ? (t.title = t.title.substr(0, 2), t.courses.map(function(t) {
                t.formatCourseName = (0, e.breakString)(t.courseName);
            })) : t.gymCampItems.map(function(t) {
                t.formatCampName = (0, e.breakString)(t.campName);
            });
        });
    },
    onPullDownRefresh: function() {
        wx.vibrateShort(), this.fetchCourseSpreadTab();
    }
});