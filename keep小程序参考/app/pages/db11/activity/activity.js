var t = require("../../../utils/util"), i = getApp();

Page({
    data: {
        iphonex: !1,
        status: 0,
        subscribeStatus: 0,
        showModal: !1,
        showSecond: !1,
        audioWaiting: !1,
        audioPlaying: !1,
        audioPlayed: !1,
        listenCoach: null
    },
    openEgg: function() {
        this.setData({
            showSecond: !0
        });
    },
    closeModal: function() {
        this.setData({
            showModal: !1
        }), this.setAudio(), this.destroyVoice();
    },
    destroyVoice: function() {
        this.innerAudioContext && "function" == typeof this.innerAudioContext.destroy && this.innerAudioContext.destroy();
    },
    playVioce: function(t) {
        var i = this;
        this.destroyVoice();
        var e = t.currentTarget.dataset.voice;
        this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.autoplay = !0, 
        this.innerAudioContext.src = e, this.innerAudioContext.onPlay(function() {
            console.log("开始播放"), i.setData({
                audioPlaying: !0,
                audioWaiting: !1
            });
        }), this.innerAudioContext.onWaiting(function(t) {
            i.setData({
                audioWaiting: !0,
                audioPlaying: !1
            });
        }), this.innerAudioContext.onEnded(function(t) {
            return i.setAudio();
        }), this.innerAudioContext.onStop(function(t) {
            return i.setAudio();
        }), this.innerAudioContext.onPause(function(t) {
            return i.setAudio();
        }), this.innerAudioContext.onError(function(t) {
            return i.setAudio();
        }), this.setData({
            audioPlayed: !0
        });
    },
    setAudio: function() {
        this.setData({
            audioPlaying: !1,
            audioWaiting: !1
        });
    },
    sendFormId: function(t) {
        wx.lego.reportWxMegCode({
            id: t.detail.formId,
            type: "double_eleven"
        });
    },
    subscribeActivity: function() {
        var e = this;
        this.setData({
            audioPlayed: !1
        }), wx.lego.subscribeActivity().then(function(t) {
            wx.lego.fetchActivityDetail().then(function(t) {
                e.setData({
                    subscribeStatus: t.data.subscribeStatus
                });
            }), e.setData({
                showModal: !0,
                listenCoach: t.data
            });
        }).catch(function(i) {
            401 == i.statusCode && (0, t.doLogin)();
        }).then(function() {
            i.sensors.track("web_gym_double11_activitypage_click", {
                click_type: "subscribe"
            });
        });
    },
    track: function() {
        i.sensors.track("web_gym_double11_activitypage_click", {
            click_type: "participate"
        });
    },
    banTouch: function() {
        return wx.stopPullDownRefresh(), !1;
    },
    onLoad: function(t) {
        this.fetchActivityDetail();
        var e = t || {};
        i.sensors.track("web_gym_double11_pageview", {
            page: "activitypage",
            source: e.source || "miniprogram"
        });
    },
    onShow: function() {
        this.canShow ? this.fetchActivityDetail() : this.canShow = !0;
    },
    onReady: function() {
        this.setData({
            iphonex: i.globalData.iphonex
        }), wx.hideShareMenu();
    },
    fetchActivityDetail: function() {
        var t = this;
        wx.lego.fetchActivityDetail().then(function(i) {
            t.setData({
                status: i.data.activityStatus,
                subscribeStatus: i.data.subscribeStatus,
                showSecond: 1 == i.data.subscribeStatus
            });
        }).catch(function(t) {}).then(function() {
            wx.stopPullDownRefresh();
        });
    },
    onHide: function() {
        this.setAudio(), this.destroyVoice();
    },
    onPullDownRefresh: function() {
        this.fetchActivityDetail();
    },
    onShareAppMessage: function() {
        return {
            title: "".concat(this.data.listenCoach.coachName, " 给我发来一条神秘语音，你也来听听吧！"),
            path: "/app/pages/db11/activity/activity",
            imageUrl: "https://static1.keepcdn.com/2019/10/24/18/1571912652982_420x336.png"
        };
    }
});