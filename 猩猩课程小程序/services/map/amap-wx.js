function AMapWX(t) {
    this.key = t.key, this.requestConfig = {
        key: t.key,
        s: "rsx",
        platform: "WXJS",
        appname: t.key,
        sdkversion: "1.2.0",
        logversion: "2.0"
    };
}

AMapWX.prototype.getWxLocation = function(e, a) {
    wx.getLocation({
        type: "gcj02",
        success: function(t) {
            var e = "".concat(t.longitude, ",").concat(t.latitude);
            wx.setStorage({
                key: "userLocation",
                data: e
            }), a(e);
        },
        fail: function(t) {
            wx.getStorage({
                key: "userLocation",
                success: function(t) {
                    t.data && a(t.data);
                }
            }), e.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, AMapWX.prototype.getRegeo = function(u) {
    function e(d) {
        var t = a.requestConfig;
        wx.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            data: {
                key: a.key,
                location: d,
                extensions: "all",
                s: t.s,
                platform: t.platform,
                appname: a.key,
                sdkversion: t.sdkversion,
                logversion: t.logversion
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var e, a, o, s, i, r, n, c, p;
                t.data.status && "1" == t.data.status ? (a = (e = t.data.regeocode).addressComponent, 
                o = [], s = "", e && e.roads[0] && e.roads[0].name && (s = "".concat(e.roads[0].name, "附近")), 
                i = d.split(",")[0], r = d.split(",")[1], e.pois && e.pois[0] && (s = "".concat(e.pois[0].name, "附近"), 
                (n = e.pois[0].location) && (i = parseFloat(n.split(",")[0]), r = parseFloat(n.split(",")[1]))), 
                a.provice && o.push(a.provice), a.city && o.push(a.city), a.district && o.push(a.district), 
                a.streetNumber && a.streetNumber.street && a.streetNumber.number ? (o.push(a.streetNumber.street), 
                o.push(a.streetNumber.number)) : (c = "", e && e.roads[0] && e.roads[0].name && (c = e.roads[0].name), 
                o.push(c)), o = o.join(""), p = [ {
                    iconPath: u.iconPath,
                    width: u.iconWidth,
                    height: u.iconHeight,
                    name: o,
                    desc: s,
                    longitude: i,
                    latitude: r,
                    id: 0,
                    regeocodeData: e
                } ], u.success(p)) : u.fail({
                    errCode: t.data.infocode,
                    errMsg: t.data.info
                });
            },
            fail: function(t) {
                u.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }
    var a = this;
    u.location ? e(u.location) : a.getWxLocation(u, function(t) {
        e(t);
    });
}, AMapWX.prototype.getWeather = function(s) {
    function o(t) {
        var e = "base";
        s.type && "forecast" == s.type && (e = "all"), wx.request({
            url: "https://restapi.amap.com/v3/weather/weatherInfo",
            data: {
                key: a.key,
                city: t,
                extensions: e,
                s: i.s,
                platform: i.platform,
                appname: a.key,
                sdkversion: i.sdkversion,
                logversion: i.logversion
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var e, a, o;
                t.data.status && "1" == t.data.status ? t.data.lives ? (e = t.data.lives) && 0 < e.length && (e = e[0], 
                (a = {
                    city: {
                        text: "城市",
                        data: (o = e).city
                    },
                    weather: {
                        text: "天气",
                        data: o.weather
                    },
                    temperature: {
                        text: "温度",
                        data: o.temperature
                    },
                    winddirection: {
                        text: "风向",
                        data: "".concat(o.winddirection, "风")
                    },
                    windpower: {
                        text: "风力",
                        data: "".concat(o.windpower, "级")
                    },
                    humidity: {
                        text: "湿度",
                        data: "".concat(o.humidity, "%")
                    }
                }).liveData = e, s.success(a)) : t.data.forecasts && t.data.forecasts[0] && s.success({
                    forecast: t.data.forecasts[0]
                }) : s.fail({
                    errCode: t.data.infocode,
                    errMsg: t.data.info
                });
            },
            fail: function(t) {
                s.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }
    var a = this, i = a.requestConfig;
    s.city ? o(s.city) : a.getWxLocation(s, function(t) {
        var e;
        e = t, wx.request({
            url: "https://restapi.amap.com/v3/geocode/regeo",
            data: {
                key: a.key,
                location: e,
                extensions: "all",
                s: i.s,
                platform: i.platform,
                appname: a.key,
                sdkversion: i.sdkversion,
                logversion: i.logversion
            },
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var e, a;
                t.data.status && "1" == t.data.status ? ((a = t.data.regeocode).addressComponent ? e = a.addressComponent.adcode : a.aois && 0 < a.aois.length && (e = a.aois[0].adcode), 
                o(e)) : s.fail({
                    errCode: t.data.infocode,
                    errMsg: t.data.info
                });
            },
            fail: function(t) {
                s.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    });
}, AMapWX.prototype.getPoiAround = function(i) {
    function e(t) {
        var e = {
            key: a.key,
            location: t,
            s: o.s,
            platform: o.platform,
            appname: a.key,
            sdkversion: o.sdkversion,
            logversion: o.logversion
        };
        i.querytypes && (e.types = i.querytypes), i.querykeywords && (e.keywords = i.querykeywords), 
        wx.request({
            url: "https://restapi.amap.com/v3/place/around",
            data: e,
            method: "GET",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                var e, a, o, s;
                if (t.data.status && "1" == t.data.status) {
                    if ((t = t.data) && t.pois) {
                        for (e = [], a = 0; a < t.pois.length; a++) o = 0 == a ? i.iconPathSelected : i.iconPath, 
                        e.push({
                            latitude: parseFloat(t.pois[a].location.split(",")[1]),
                            longitude: parseFloat(t.pois[a].location.split(",")[0]),
                            iconPath: o,
                            width: 22,
                            height: 32,
                            id: a,
                            name: t.pois[a].name,
                            address: t.pois[a].address
                        });
                        s = {
                            markers: e,
                            poisData: t.pois
                        }, i.success(s);
                    }
                } else i.fail({
                    errCode: t.data.infocode,
                    errMsg: t.data.info
                });
            },
            fail: function(t) {
                i.fail({
                    errCode: "0",
                    errMsg: t.errMsg || ""
                });
            }
        });
    }
    var a = this, o = a.requestConfig;
    i.location ? e(i.location) : a.getWxLocation(i, function(t) {
        e(t);
    });
}, AMapWX.prototype.getStaticmap = function(a) {
    function e(t) {
        o.push("location=".concat(t)), a.zoom && o.push("zoom=".concat(a.zoom)), a.size && o.push("size=".concat(a.size)), 
        a.scale && o.push("scale=".concat(a.scale)), a.markers && o.push("markers=".concat(a.markers)), 
        a.labels && o.push("labels=".concat(a.labels)), a.paths && o.push("paths=".concat(a.paths)), 
        a.traffic && o.push("traffic=".concat(a.traffic));
        var e = s + o.join("&");
        a.success({
            url: e
        });
    }
    var t, o = [], s = "https://restapi.amap.com/v3/staticmap?";
    o.push("key=".concat(this.key)), t = this.requestConfig, o.push("s=".concat(t.s)), 
    o.push("platform=".concat(t.platform)), o.push("appname=".concat(t.appname)), o.push("sdkversion=".concat(t.sdkversion)), 
    o.push("logversion=".concat(t.logversion)), a.location ? e(a.location) : this.getWxLocation(a, function(t) {
        e(t);
    });
}, AMapWX.prototype.getInputtips = function(e) {
    var t = this.requestConfig, a = {
        key: this.key,
        s: t.s,
        platform: t.platform,
        appname: this.key,
        sdkversion: t.sdkversion,
        logversion: t.logversion
    };
    e.location && (a.location = e.location), e.keywords && (a.keywords = e.keywords), 
    e.type && (a.type = e.type), e.city && (a.city = e.city), e.citylimit && (a.citylimit = e.citylimit), 
    wx.request({
        url: "https://restapi.amap.com/v3/assistant/inputtips",
        data: a,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            t && t.data && t.data.tips && e.success({
                tips: t.data.tips
            });
        },
        fail: function(t) {
            e.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, AMapWX.prototype.getDrivingRoute = function(e) {
    var t = this.requestConfig, a = {
        key: this.key,
        s: t.s,
        platform: t.platform,
        appname: this.key,
        sdkversion: t.sdkversion,
        logversion: t.logversion
    };
    e.origin && (a.origin = e.origin), e.destination && (a.destination = e.destination), 
    e.strategy && (a.strategy = e.strategy), e.waypoints && (a.waypoints = e.waypoints), 
    e.avoidpolygons && (a.avoidpolygons = e.avoidpolygons), e.avoidroad && (a.avoidroad = e.avoidroad), 
    wx.request({
        url: "https://restapi.amap.com/v3/direction/driving",
        data: a,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            t && t.data && t.data.route && e.success({
                paths: t.data.route.paths,
                taxi_cost: t.data.route.taxi_cost || ""
            });
        },
        fail: function(t) {
            e.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, AMapWX.prototype.getWalkingRoute = function(e) {
    var t = this.requestConfig, a = {
        key: this.key,
        s: t.s,
        platform: t.platform,
        appname: this.key,
        sdkversion: t.sdkversion,
        logversion: t.logversion
    };
    e.origin && (a.origin = e.origin), e.destination && (a.destination = e.destination), 
    wx.request({
        url: "https://restapi.amap.com/v3/direction/walking",
        data: a,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            t && t.data && t.data.route && e.success({
                paths: t.data.route.paths
            });
        },
        fail: function(t) {
            e.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, AMapWX.prototype.getTransitRoute = function(a) {
    var t = this.requestConfig, e = {
        key: this.key,
        s: t.s,
        platform: t.platform,
        appname: this.key,
        sdkversion: t.sdkversion,
        logversion: t.logversion
    };
    a.origin && (e.origin = a.origin), a.destination && (e.destination = a.destination), 
    a.strategy && (e.strategy = a.strategy), a.city && (e.city = a.city), a.cityd && (e.cityd = a.cityd), 
    wx.request({
        url: "https://restapi.amap.com/v3/direction/transit/integrated",
        data: e,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            if (t && t.data && t.data.route) {
                var e = t.data.route;
                a.success({
                    distance: e.distance || "",
                    taxi_cost: e.taxi_cost || "",
                    transits: e.transits
                });
            }
        },
        fail: function(t) {
            a.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, AMapWX.prototype.getRidingRoute = function(e) {
    var t = this.requestConfig, a = {
        key: this.key,
        s: t.s,
        platform: t.platform,
        appname: this.key,
        sdkversion: t.sdkversion,
        logversion: t.logversion
    };
    e.origin && (a.origin = e.origin), e.destination && (a.destination = e.destination), 
    wx.request({
        url: "https://restapi.amap.com/v4/direction/bicycling",
        data: a,
        method: "GET",
        header: {
            "content-type": "application/json"
        },
        success: function(t) {
            t && t.data && t.data.data && e.success({
                paths: t.data.data.paths
            });
        },
        fail: function(t) {
            e.fail({
                errCode: "0",
                errMsg: t.errMsg || ""
            });
        }
    });
}, module.exports.AMapWX = AMapWX;