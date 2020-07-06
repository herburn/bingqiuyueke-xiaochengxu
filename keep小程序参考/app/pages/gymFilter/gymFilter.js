var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/defineProperty")), a = t(require("../../../@babel/runtime/regenerator")), i = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), s = getApp();

Page({
    data: {
        index: 0,
        citys: [],
        cityName: "",
        cityCode: "",
        gymList: [],
        gymListSample: [],
        gymOptions: [],
        homeScreen: {},
        iphonex: !1,
        latitude: "",
        longitude: "",
        totalNavHeight: 68
    },
    onLoad: function() {
        var t = (0, i.default)(a.default.mark(function t(e) {
            var i, n, c = this;
            return a.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return this.cityCode = e.cityCode || "", i = {}, t.prev = 2, t.next = 5, fetchLocation();

                  case 5:
                    i = t.sent, t.next = 10;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(2);

                  case 10:
                    return this.data.latitude = i.latitude || "", this.data.longitude = i.longitude || "", 
                    t.next = 14, wx.lego.fetchGymOptions("?latitude=".concat(this.data.latitude, "&longitude=").concat(this.data.longitude, "&cityCode=").concat(this.cityCode));

                  case 14:
                    n = t.sent, this.data.gymOptions = n.data, this.data.gymOptions.forEach(function(t) {
                        t.cityCode == c.cityCode && (c.cityName = t.cityName), c.data.citys.push(t.cityName);
                    }), this.setData({
                        citys: this.data.citys
                    }), this.setGymList(function() {
                        wx.createSelectorQuery().select("#selectedDom").boundingClientRect(function(t) {
                            t && t.top && t.top > s.globalData.systemInfo.screenHeight - 50 && setTimeout(function() {
                                wx.pageScrollTo({
                                    scrollTop: t.top - s.globalData.customNav.totalNavHeight - 50,
                                    duration: 500
                                });
                            }, 300);
                        }).exec();
                    }), this.onShowController();

                  case 20:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 2, 8 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    onReady: function() {
        this.setData({
            iphonex: s.globalData.iphonex,
            totalNavHeight: s.globalData.customNav.totalNavHeight
        }), s.sensors.track("web_gym_filter", {
            filter_type: "gym"
        });
    },
    bindPickerChange: function(t) {
        if (this.data.index != t.detail.value) {
            this.resetGymList(), this.data.index = t.detail.value;
            var e = this.data.gymOptions[this.data.index];
            this.cityCode = e.cityCode, this.cityName = e.cityName, this.setGymList(), this.setData({
                index: this.data.index
            }), s.globalData.updateSchedule = 2;
        }
    },
    selectGym: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData((0, e.default)({}, "gymList[".concat(a, "].selected"), !this.data.gymList[a].selected));
    },
    reset: function() {
        this.resetGymList();
    },
    submit: function() {
        var t = [];
        this.data.gymList.forEach(function(e) {
            e.selected && t.push(e.id);
        }), this.data.homeScreen.gym = t, this.data.homeScreen.cityName = this.cityName, 
        this.data.homeScreen.cityCode = this.cityCode;
        try {
            var e = wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (t) {}
        this.data.homeScreen = Object.assign({}, e, this.data.homeScreen);
        try {
            wx.setStorageSync(wx.keys.homeScreen, this.data.homeScreen), wx.navigateBack();
        } catch (t) {
            console.log(t);
        }
        s.sensors.track("web_gym_gymfilter_confirm", {
            client: "mini_program"
        });
    },
    resetGymList: function() {
        this.setData({
            gymList: JSON.parse(JSON.stringify(this.data.gymListSample))
        });
    },
    setGymList: function(t) {
        var e = this, a = this.data.gymOptions.filter(function(t) {
            return t.cityName == e.cityName;
        })[0];
        a && (this.data.gymListSample = JSON.parse(JSON.stringify(a.gyms)), this.data.gymListSample.map(function(t) {
            1 == t.favoriteStatus && t.tags.push({
                type: "property",
                title: "已收藏"
            });
        }), this.setData({
            gymList: JSON.parse(JSON.stringify(this.data.gymListSample))
        }, function() {
            "function" == typeof t && t();
        }));
    },
    onShowController: function() {
        var t = this;
        try {
            this.data.homeScreen = wx.getStorageSync(wx.keys.homeScreen) || {};
        } catch (t) {}
        this.data.homeScreen.cityName && (this.cityName = this.data.homeScreen.cityName, 
        this.data.index = this.data.citys.indexOf(this.cityName), this.setGymList()), this.setData({
            index: this.data.index
        });
        var e = this.data.homeScreen.gym;
        e && e.length && (this.resetGymList(), e.forEach(function(e) {
            t.data.gymList.forEach(function(t) {
                t.id == e && (t.selected = !0);
            });
        }), this.setData({
            gymList: this.data.gymList
        }));
    }
});