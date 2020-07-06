var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), e = require("../../utils/schedule"), s = getApp();

Page({
    data: {
        dataList: null,
        classCount: 0,
        iphonex: !1,
        dataSample: null,
        homeScreen: {},
        classResult: null,
        keys: {
            activityTags: "活动",
            timeList: "时间",
            effectTags: "效果",
            genreTags: "类型"
        }
    },
    onLoad: function() {
        var t = this;
        wx.lego.fetchCourseOptions().then(function(e) {
            var s = e.data, a = {
                activityTags: t.formatData(s.activityTags),
                timeList: t.formatData(s.timeList),
                effectTags: t.formatData(s.effectTags),
                genreTags: t.formatData(s.genreTags)
            };
            t.dataSample = JSON.parse(JSON.stringify(a)), t.setData({
                dataList: a
            }, function() {
                t.onShowContro();
            });
        });
    },
    onReady: function() {
        this.setData({
            iphonex: s.globalData.iphonex
        }), s.sensors.track("web_gym_filter", {
            client: "mini_program",
            filter_type: "course"
        });
    },
    selectItem: function(e) {
        var s = this, a = e.currentTarget.dataset.index, i = e.currentTarget.dataset.key, n = !this.data.dataList[i][a].selected;
        this.setData((0, t.default)({}, "dataList.".concat(i, "[").concat(a, "].selected"), n), function() {
            s.computedClassCount();
        });
    },
    reset: function() {
        this.setData({
            dataList: JSON.parse(JSON.stringify(this.dataSample))
        }), this.computedClassCount();
    },
    submit: function() {
        if (0 != this.data.classCount) {
            this.homeScreen = {
                activity: this.getSubmitResult("activityTags"),
                time: this.getSubmitResult("timeList"),
                effect: this.getSubmitResult("effectTags"),
                genre: this.getSubmitResult("genreTags")
            };
            try {
                var t = wx.getStorageSync(wx.keys.homeScreen) || {};
            } catch (t) {}
            t.gym && t.gym.length && (this.homeScreen = Object.assign({}, t, this.homeScreen));
            try {
                wx.setStorageSync(wx.keys.homeScreen, this.homeScreen), wx.navigateBack();
            } catch (t) {
                console.log(t);
            }
            s.sensors.track("web_gym_coursefilter_confirm", {
                client: "mini_program",
                activity: this.homeScreen.activity.join(";"),
                effect: this.homeScreen.effect.join(";"),
                genre: this.homeScreen.genre.join(";")
            });
        }
    },
    computedClassCount: function() {
        var t = {
            activity: this.getSubmitResult("activityTags"),
            time: this.getSubmitResult("timeList"),
            effect: this.getSubmitResult("effectTags"),
            genre: this.getSubmitResult("genreTags"),
            gym: this.homeScreen.gym || []
        }, s = 0;
        this.classResult = (0, e.screenSchedules)({
            screen: t,
            fromScreen: !0
        }), this.classResult && this.classResult.length && (this.classResult.forEach(function(t) {
            t.scheduleTables.length && t.scheduleTables.forEach(function(t) {
                s += t.schedules.length;
            });
        }), this.setData({
            classCount: s
        }));
    },
    getSubmitResult: function(t) {
        var e = [];
        return this.data.dataList[t].forEach(function(t) {
            t.selected && e.push(t.text);
        }), e;
    },
    formatData: function(t) {
        var e = [];
        return t.forEach(function(t) {
            e.push({
                text: t,
                selected: !1
            });
        }), e;
    },
    showLastSelect: function(t, e) {
        var s = this;
        t.forEach(function(t) {
            s.data.dataList[e].forEach(function(e) {
                e.text == t && (e.selected = !0);
            });
        });
    },
    onShowContro: function() {
        try {
            this.homeScreen = wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (t) {}
        var t = this.homeScreen.time, e = this.homeScreen.effect, s = this.homeScreen.genre, a = this.homeScreen.activity;
        this.data.dataList = JSON.parse(JSON.stringify(this.dataSample)), a && a.length && this.showLastSelect(a, "activityTags"), 
        t && t.length && this.showLastSelect(t, "timeList"), e && e.length && this.showLastSelect(e, "effectTags"), 
        s && s.length && this.showLastSelect(s, "genreTags"), this.setData({
            dataList: this.data.dataList
        }), this.computedClassCount();
    }
});