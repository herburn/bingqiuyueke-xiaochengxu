var t = require("../../utils/util"), a = require("../../utils/schedule"), e = getApp();

Page({
    data: {
        previewList: null,
        showCloseBtn: !0,
        course: null,
        courseName: "",
        courseBaseId: "",
        scheduleId: "",
        scheduleInfo: null,
        spreadStatus: null,
        totalBookCount: 0,
        bannerCurrent: 0,
        tabCurrent: 0,
        swiperHeight: 800,
        tabOffsetTop: 0,
        pageScrollTop: 0,
        autoplay: !1,
        limit: 10,
        commentsLastId: "",
        commentsData: null,
        loading: !0,
        lock: !1,
        isAndroid: !1,
        totalSubscriptionCount: "",
        subscriptionStatus: "",
        subscribeState: "",
        showModal: !1,
        loginCallBack: !1,
        carryOnShow: !1,
        totalNavHeight: 68,
        navigatorBarOpacity: 0,
        navigationBarColor: "white",
        navigatorBarFrontColor: "#ffffff",
        bookFrom: ""
    },
    onLoad: function(t) {
        var a = this;
        if (t.scene) {
            var o = decodeURIComponent(t.scene).split("#");
            5 == o[0] && (this.data.scheduleId = o[1]);
        } else this.data.courseBaseId = t.courseBaseId || "", this.data.scheduleId = t.scheduleId || "";
        this.setData({
            courseBaseId: this.data.courseBaseId,
            scheduleId: this.data.scheduleId,
            totalNavHeight: e.globalData.customNav.totalNavHeight
        }), this.fetchClassDetail(), t.share_path && wx.navigateTo({
            url: decodeURIComponent(t.share_path)
        }), wx.getSystemInfo({
            success: function(t) {
                t && a.setData({
                    isAndroid: -1 != t.system.toLocaleLowerCase().indexOf("android")
                });
            }
        });
    },
    onShow: function() {
        if (this.data.carryOnShow && (this.fetchClassDetail(), this.data.loginCallBack)) {
            this.data.loginCallBack = !1;
            try {
                wx.getStorageSync(wx.keys.keepUserInfo) && this.callMeContro();
            } catch (t) {
                console.log(t);
            }
        }
    },
    onReady: function() {
        var t, e = getCurrentPages();
        t = e.length > 1 ? e[e.length - 2].route : e[e.length - 1].route, this.data.bookFrom = "app/pages/index/index" == t ? "schedule" : (0, 
        a.getPathName)(t), this.setData({
            bookFrom: this.data.bookFrom
        });
    },
    onPageScroll: function(t) {
        this.data.pageScrollTop = t.scrollTop;
        var a = this.data.pageScrollTop / 100 < 1 ? this.data.pageScrollTop / 100 : 1, e = {
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
    },
    onReachBottom: function() {
        1 === this.data.tabCurrent && this.loading && this.fetchComments();
    },
    onShareAppMessage: function() {
        var t = "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(this.data.courseBaseId, "&scheduleId=").concat(this.data.scheduleId);
        return {
            title: this.data.course.name,
            path: t,
            imageUrl: this.data.course.coverList[0]
        };
    },
    track: function(t) {
        var a = t.currentTarget.dataset;
        e.sensors.track("web_gym_schedule_detail_click", {
            place: a.place,
            baseId: this.data.courseBaseId,
            value: a.value
        });
    },
    clickTrack: function(t) {
        var a = t.currentTarget.dataset.place, o = this.data.scheduleInfo && "share" == a ? "web_gym_schedule_detail_click" : "web_gym_course_detail_click";
        e.sensors.track(o, {
            place: a,
            baseId: this.data.courseBaseId
        });
    },
    previewBanner: function(t) {
        this.data.course.coverList && this.data.course.coverList.length && wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: this.data.course.coverList
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
    tabControll: function(t) {
        this.setData({
            tabCurrent: parseInt(t.detail.name)
        });
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
    callMe: function() {
        this.callMeContro();
    },
    hideModal: function() {
        this.setData({
            showModal: !1
        });
    },
    addPlan: function() {
        var t = this;
        wx.lego.planAdd(this.data.scheduleId).then(function(a) {
            wx.showToast({
                title: "该课程已加入计划",
                icon: "none",
                duration: 2e3
            }), t.fetchClassDetail();
        });
    },
    callMeContro: function() {
        var a = this;
        wx.lego.postSubscribe(this.data.courseBaseId).then(function(t) {
            a.setData({
                showModal: !0,
                subscribeState: t.data.state
            }), a.fetchClassDetail(), 1 == t.data.state && (e.sensors.track("web_gym_course_detail_click", {
                place: "subscribe",
                baseId: a.data.courseBaseId
            }), e.sensors.track("web_gym_subscribe", {
                baseId: a.data.courseBaseId,
                client: "mini_program"
            }));
        }).catch(function(e) {
            401 == e.statusCode && (a.data.loginCallBack = !0, (0, t.doLogin)());
        });
    },
    swiperContro: function(t) {
        this.setData({
            tabCurrent: t
        }), this.getHeight(), this.data.tabOffsetTop < this.data.pageScrollTop && wx.pageScrollTo({
            scrollTop: this.data.tabOffsetTop,
            duration: 0
        });
        var a = "";
        a = 0 == t ? "detail" : "evaluation", e.sensors.track("web_gym_course_detail_click", {
            place: "tab",
            value: a
        });
    },
    fetchClassDetail: function() {
        var t = this;
        new Promise(function(a, e) {
            t.data.scheduleId && !t.data.courseBaseId ? wx.lego.getCourseBaseId(t.data.scheduleId).then(function(e) {
                t.setData({
                    courseBaseId: e.data.courseBaseId
                }), a();
            }) : a();
        }).then(function() {
            wx.lego.fetchClassDetail(t.data.courseBaseId, t.data.scheduleId).then(function(o) {
                var s = o.data, i = s.course;
                i.formatCourseName = (0, a.breakString)(i.name), i.calorie = o.data.calorie, i.coverList && i.coverList.length && i.previewVideo && (i.videoPoster = i.coverList.shift()), 
                i.descriptionDetails.forEach(function(t) {
                    t.contentList = t.content.split(/\n/g);
                }), i.publishTime = s.formatOnlineTime, t.setData({
                    course: i,
                    scheduleInfo: s.scheduleInfo,
                    totalSubscriptionCount: s.totalSubscriptionCount,
                    subscriptionStatus: s.subscriptionStatus,
                    spreadStatus: s.spreadStatus,
                    totalBookCount: s.totalBookCount,
                    courseName: encodeURIComponent(i.name)
                }), s.scheduleInfo && "PREVIEW" == s.scheduleInfo.bookableStatus && t.countDownForPreview(), 
                "BEFORE_PRE_HEAT" == s.spreadStatus && wx.setNavigationBarColor({
                    frontColor: "#000000",
                    backgroundColor: "",
                    animation: {
                        duration: 400,
                        timingFunc: "easeIn"
                    }
                }), t.data.carryOnShow || (t.fetchComments(), t.getTabOffsetTop(), t.fetchActionPreviewList(), 
                t.data.carryOnShow = !0);
                var n = t.data.scheduleInfo ? "web_gym_schedule_detail_view" : "web_gym_course_detail_view";
                e.sensors.track(n, {
                    baseId: t.data.courseBaseId
                });
            });
        });
    },
    fetchActionPreviewList: function() {
        var t = this;
        wx.lego.fetchActionPreviewList(this.data.courseBaseId).then(function(a) {
            t.setData({
                previewList: a.data
            }, function() {
                t.data.heightTimer = setTimeout(function() {
                    t.getHeight();
                }, 500);
            });
        });
    },
    clearPreviewTimer: function() {
        clearTimeout(e.globalData.previewTimer);
    },
    onHide: function() {
        this.clearPreviewTimer(), clearTimeout(this.data.heightTimer);
    },
    onUnload: function() {
        this.clearPreviewTimer(), clearTimeout(this.data.heightTimer);
    },
    countDownForPreview: function() {
        var t = this;
        if (!e.globalData.timerAlready) {
            var a = this.data.scheduleInfo.packagePrivilegeInfo.countdownSecond;
            a && a > 0 && (this.clearPreviewTimer(), e.globalData.previewTimer = setTimeout(function() {
                e.globalData.timerAlready = !0, t.fetchClassDetail();
            }, 1e3 * a));
        }
    },
    getHeight: function() {
        var t = this, a = "#course-info-wrap-" + this.data.tabCurrent;
        wx.createSelectorQuery().select(a).boundingClientRect(function(a) {
            a && a.height && t.setData({
                swiperHeight: a.height
            });
        }).exec();
    },
    getTabOffsetTop: function() {
        var t = this;
        wx.createSelectorQuery().select("#tab").boundingClientRect(function(a) {
            a && a.top && t.setData({
                tabOffsetTop: a.top - t.data.totalNavHeight
            });
        }).exec();
    },
    fetchComments: function() {
        var t = this;
        if (!this.data.lock) {
            this.data.lock = !0;
            var a = this.data.commentsLastId;
            wx.lego.fetchCommentsList({
                type: "course",
                limit: this.data.limit,
                lastId: a,
                entityId: this.data.courseBaseId
            }).then(function(a) {
                t.commentsHandle(a), t.data.lock = !1, t.getHeight();
            });
        }
    },
    commentsHandle: function(t) {
        var a = t.data.length;
        if (a) {
            var e = t.data.length < this.data.limit;
            this.loading = !e, this.data.commentsLastId = t.data[a - 1].review.id, this.data.commentsData ? this.data.commentsData = this.data.commentsData.concat(t.data) : this.data.commentsData = t.data, 
            this.setData({
                loading: !e,
                commentsData: this.data.commentsData
            });
        } else this.setData({
            loading: !1
        });
    }
});