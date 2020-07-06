var a = require("../../utils/util"), t = getApp();

Page({
    data: {
        schedules: null,
        gymInfoMap: null,
        courseInfoMap: null,
        coachInfoMap: null,
        packagePrivilegeInfo: null,
        scheduleDynamicInfoMap: null,
        coachCamps: [],
        coachDetail: null,
        tabIndex: 0,
        commentsList: [],
        lastId: "",
        type: "coach",
        noMore: !1,
        limit: 10,
        tabOffsetTop: 0,
        totalNavHeight: 68
    },
    onShareAppMessage: function() {
        var a = "&shared=1", t = wx.getStorageSync(wx.keys.userSource);
        return t && (a += "&usersource=".concat(t.data)), {
            title: this.data.coachDetail.name + "的课程安排",
            path: "/app/pages/coach/coach?coachId=".concat(this.data.coachId).concat(a),
            imageUrl: this.data.coachDetail.avatar + "?imageMogr2/thumbnail/500x/quality/95"
        };
    },
    onLoad: function(e) {
        this.data.coachId = e.coachId, e.usersource && (0, a.setUserSource)(e.usersource), 
        e.shared && (0, a.setShared)(e.shared), this.getCoachInfo(), this.getComments(), 
        this.setData({
            totalNavHeight: t.globalData.customNav.totalNavHeight
        });
    },
    onShow: function() {
        t.globalData.updateSchedule && this.getCoachInfo();
    },
    onReachBottom: function() {
        2 == this.data.tabIndex && this.getComments();
    },
    getCoachInfo: function() {
        var a = this;
        return wx.lego.fetchCoachInfo(this.data.coachId).then(function(t) {
            var e = t.data;
            a.setData({
                coachDetail: e.coachDetail,
                schedules: e.schedules,
                scheduleDynamicInfoMap: e.scheduleDynamicInfoMap,
                gymInfoMap: t.data.gymInfoMap,
                courseInfoMap: t.data.courseInfoMap,
                coachInfoMap: t.data.coachInfoMap,
                packagePrivilegeInfo: e.packagePrivilegeInfo,
                coachCamps: e.coachCamps
            }, function() {
                a.getTabOffsetTop();
            });
        });
    },
    getComments: function() {
        var t = this;
        this.data.noMore || wx.lego.fetchCommentsList({
            lastId: this.data.lastId,
            limit: this.data.limit,
            type: this.data.type,
            entityId: this.data.coachId
        }).then(function(e) {
            t.setData({
                noMore: e.data.length < t.data.limit
            }), 0 != e.data.length && (e.data.forEach(function(t) {
                t.review.createTime = (0, a.formateTime)(t.review.createTime);
            }), t.data.lastId ? t.data.commentsList = t.data.commentsList.concat(e.data) : t.data.commentsList = e.data, 
            t.setData({
                commentsList: t.data.commentsList
            }), t.data.lastId = t.data.commentsList[t.data.commentsList.length - 1].review.id);
        });
    },
    getTabOffsetTop: function() {
        var a = this;
        wx.createSelectorQuery().select("#topBlock").boundingClientRect(function(t) {
            t && t.height && a.setData({
                tabOffsetTop: t.height
            });
        }).exec();
    },
    tabChange: function(a) {
        var t = this, e = parseInt(a.detail.name);
        this.setData({
            tabIndex: e
        }, function() {
            0 == e && wx.pageScrollTo({
                scrollTop: t.tabOffsetTop - 1,
                duration: 300
            });
        });
    },
    onPullDownRefresh: function() {
        this.getCoachInfo().then(function() {
            wx.vibrateShort(), wx.stopPullDownRefresh();
        });
    },
    jumpCampDetail: function(a) {
        wx.navigateTo({
            url: "/app/pages/campDetail/campDetail?campId=".concat(a.currentTarget.dataset.campid)
        });
    }
});