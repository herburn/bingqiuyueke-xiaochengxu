var t, a = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = a(require("../../../@babel/runtime/helpers/typeof")), o = a(require("../../../@babel/runtime/helpers/defineProperty")), s = require("../../utils/util"), n = require("../../utils/wxfunction"), i = getApp();

Page((t = {
    data: {
        schedules: null,
        gymInfoMap: null,
        courseInfoMap: null,
        coachInfoMap: null,
        lastScheduleWeekEnd: "",
        packagePrivilegeInfo: null,
        gym: null,
        gymId: "",
        gymTags: null,
        swiperIndex: 0,
        isGymCollected: !1,
        starList: null,
        tabsTop: 557,
        tabIndex: 0,
        commentsList: [],
        lastId: "",
        limit: 10,
        noMore: !1,
        navigatorBarOpacity: 0,
        navigationBarColor: "white",
        navigatorBarFrontColor: "#ffffff",
        totalNavHeight: 68,
        scheduleDynamicInfoMap: null
    },
    onLoad: function(t) {
        var a = this;
        t.usersource && (0, s.setUserSource)(t.usersource), t.shared && (0, s.setShared)(t.shared), 
        this.setData({
            gymId: t.gymId || "",
            totalNavHeight: i.globalData.customNav.totalNavHeight
        }), this.fetchData().then(function() {
            if (t.target) {
                var e = a.data.schedules;
                if (e && e.length) {
                    var o = a.selectComponent("#schedules");
                    e.forEach(function(a, e) {
                        a.date == t.target && o.swiperChangeFn(e);
                    });
                }
            }
        }), this.fetchCommentsList();
    },
    onShow: function() {
        var t = this;
        i.globalData.updateSchedule && wx.lego.fetchPoi(this.data.gymId).then(function(a) {
            t.setData({
                schedules: a.data.schedules,
                gymInfoMap: (0, o.default)({}, t.data.gymId, a.data.gymInfoMap[t.data.gymId]),
                courseInfoMap: a.data.courseInfoMap,
                coachInfoMap: a.data.coachInfoMap,
                packagePrivilegeInfo: a.data.packagePrivilegeInfo,
                scheduleDynamicInfoMap: a.data.scheduleDynamicInfoMap
            });
        });
    },
    fetchData: function() {
        var t = this;
        return wx.lego.fetchPoi(this.data.gymId).then(function(a) {
            var e = a.data;
            t.setData({
                gym: e.gym,
                gymTags: e.gymTags,
                isGymCollected: 1 == e.favoriteStatus
            }, function() {
                t.getOffsetTop(), t.setData({
                    schedules: e.schedules,
                    gymInfoMap: (0, o.default)({}, t.data.gymId, e.gymInfoMap[t.data.gymId]),
                    courseInfoMap: e.courseInfoMap,
                    coachInfoMap: e.coachInfoMap,
                    packagePrivilegeInfo: e.packagePrivilegeInfo,
                    scheduleDynamicInfoMap: e.scheduleDynamicInfoMap
                });
            }), t.getStarList();
        });
    },
    tabChange: function(t) {
        var a = this, e = parseInt(t.detail.name);
        this.setData({
            tabIndex: e
        }, function() {
            0 == e && wx.pageScrollTo({
                scrollTop: a.data.tabsTop,
                duration: 0
            });
        });
    },
    getOffsetTop: function() {
        var t = this;
        wx.createSelectorQuery().select("#poiTop").boundingClientRect(function(a) {
            a && a.top && t.setData({
                tabsTop: a.top - i.globalData.customNav.totalNavHeight
            });
        }).exec();
    },
    swiperIndexChange: function(t) {
        "touch" === t.detail.source && this.setData({
            swiperIndex: t.detail.current
        });
    },
    fetchCommentsList: function() {
        var t = this;
        this.data.noMore || wx.lego.fetchCommentsList({
            lastId: this.data.lastId,
            limit: this.data.limit,
            type: "gym",
            entityId: this.data.gymId
        }).then(function(a) {
            t.setData({
                noMore: a.data.length < t.data.limit
            }), 0 != a.data.length && (a.data.forEach(function(t) {
                t.review.createTime = (0, s.formateTime)(t.review.createTime);
            }), t.data.lastId ? t.data.commentsList = t.data.commentsList.concat(a.data) : t.data.commentsList = a.data, 
            t.setData({
                commentsList: t.data.commentsList
            }), t.data.lastId = t.data.commentsList[t.data.commentsList.length - 1].review.id);
        });
    },
    onReady: function() {
        this.sensorsPoi();
    }
}, (0, o.default)(t, "swiperIndexChange", function(t) {
    "touch" === t.detail.source && this.setData({
        swiperIndex: t.detail.current
    });
}), (0, o.default)(t, "previewBanner", function() {
    this.data.gym && this.data.gym.coverList && this.data.gym.coverList.length && wx.previewImage({
        current: this.data.gym.coverList[this.data.swiperIndex],
        urls: this.data.gym.coverList
    });
}), (0, o.default)(t, "getStarList", function() {
    for (var t = [], a = parseInt(10 * this.data.gym.stars / 10), e = 10 * this.data.gym.stars % 10, o = 0, s = 1; s <= a; s++) t.push("all-star");
    e > 0 && e <= 5 ? (t.push("half-star"), o = 5 - a - 1) : e > 5 ? (t.push("all-star"), 
    o = 5 - a - 1) : o = 5 - a;
    for (var n = 1; n <= o; n++) t.push("empty-star");
    this.setData({
        starList: t
    });
}), (0, o.default)(t, "openMap", function() {
    var t = this.data.gym;
    (0, n.wxOpenLocation)({
        longitude: t.geo[0],
        latitude: t.geo[1],
        name: t.name,
        address: t.address
    }), this.sensorsTrack("server_gym_poi_address");
}), (0, o.default)(t, "collectStore", function() {
    var t = this, a = this.data.isGymCollected ? 0 : 1;
    wx.lego.collectStore(this.data.gymId, a, "gym").then(function() {
        t.setData({
            isGymCollected: !t.data.isGymCollected
        }), wx.showToast({
            title: t.data.isGymCollected ? "门店收藏成功" : "取消收藏成功",
            icon: "none",
            duration: 2e3
        }), i.sensors.track("web_gym_poi_collect_click", {
            client: "mini_program",
            type: a
        });
    });
}), (0, o.default)(t, "sensorsTrack", function(t) {
    "object" == (0, e.default)(t) && (t = t.currentTarget.dataset.events), i.sensors.track(t, {
        gym_id: this.data.gymId
    });
}), (0, o.default)(t, "sensorsPoi", function() {
    var t = getCurrentPages();
    if (t.length >= 2) {
        var a = "";
        switch (t[t.length - 2].route) {
          case "/app/pages/courseOrder/courseOrder":
            a = "order";
            break;

          case "/app/pages/courseDetail/courseDetail":
            a = "course";
            break;

          case "/app/pages/index/index":
            a = "home";
        }
        i.sensors.track("server_gym_poi", {
            opened_from: a,
            gym_id: this.data.gymId
        });
    }
}), (0, o.default)(t, "onShareAppMessage", function() {
    var t = "&shared=1", a = wx.getStorageSync(wx.keys.userSource);
    return a && (t += "&usersource=".concat(a.data)), {
        title: "给你一张 Keepland 课表",
        path: "/app/pages/space/space?gymId=".concat(this.data.gymId).concat(t),
        imageUrl: this.data.gym.coverList[0] + "?imageMogr2/thumbnail/750x/quality/95"
    };
}), (0, o.default)(t, "onPullDownRefresh", function() {
    this.fetchData().then(function() {
        wx.vibrateShort(), wx.stopPullDownRefresh();
    });
}), (0, o.default)(t, "onReachBottom", function() {
    1 == this.data.tabIndex && this.fetchCommentsList();
}), (0, o.default)(t, "onPageScroll", function(t) {
    var a = t.scrollTop / 100 < 1 ? t.scrollTop / 100 : 1, e = {
        navigatorBarOpacity: a
    }, o = a > .2 ? "#000000" : "#ffffff", s = a > .2 ? "black" : "white";
    s != this.data.navigationBarColor && (e.navigationBarColor = s), this.data.navigatorBarFrontColor != o && (this.data.navigatorBarFrontColor = o, 
    wx.setNavigationBarColor({
        frontColor: o,
        backgroundColor: "",
        animation: {
            duration: 400,
            timingFunc: "easeIn"
        }
    })), this.setData(e);
}), t));