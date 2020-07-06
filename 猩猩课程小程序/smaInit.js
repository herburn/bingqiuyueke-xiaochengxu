Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = smaInit;

var _regeneratorRuntime2 = _interopRequireDefault(require("./vendor.js")(0)), _core = _interopRequireDefault(require("./tmp/index.js")), _ramda = require("./vendor.js")(320), _thread = require("./utils/thread.js"), _router = require("./router/index.js"), _store = require("./store/index.js"), _map = require("./services/map/index.js"), _sma = _interopRequireDefault(require("./sma/index.js")), _weappLifecycle = require("./sma/plugins/weappLifecycle/index.js"), _pageCapabilityMap = _interopRequireDefault(require("./configs/pageCapabilityConfig/pageCapabilityMap.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, o, i) {
    try {
        var u = e[o](i), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, i);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

function getCurrentTimeUTC() {
    return new Date().getTime() + getTimezoneOffset();
}

function getPagePath() {
    return _router.router.route ? _router.router.route.url : void 0;
}

var getUserData = function() {
    var a = new Date().getTime();
    return function() {
        var e = _store.store.selectors.getUserInfo(_store.store.getState()), r = e.id, t = e.openid, n = {
            randomId: a,
            userId: void 0,
            openid: void 0
        };
        return -1 !== r && (n.userId = r), "" !== t && (n.openid = t), n;
    };
}();

function getReferrer() {
    var e = (_router.router.route || {}).referrerRoute;
    return e ? e.url : void 0;
}

var getSystemInfo = function() {
    var e;
    return function() {
        if (void 0 === e) try {
            e = wx.getSystemInfoSync();
        } catch (e) {}
        return e;
    };
}(), getNetworkType = function() {
    var r, t;
    return wx.onNetworkStatusChange(function(e) {
        r = e.networkType;
    }), _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (void 0 !== r) return e.abrupt("return", r);
                e.next = 2;
                break;

              case 2:
                return void 0 === t && (t = _core.default.getNetworkType()), e.prev = 3, e.next = 6, 
                t;

              case 6:
                r = e.sent.networkType, e.next = 12;
                break;

              case 9:
                e.prev = 9, e.t0 = e.catch(3), t = void 0;

              case 12:
                return e.abrupt("return", r);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 9 ] ]);
    }));
}();

function getTimezoneOffset() {
    return new Date().getTimezoneOffset();
}

var getLifeCycleId = function() {
    var e;
    return function() {
        return void 0 === e && (e = getCurrentTimeUTC()), e;
    };
}();

function getScene() {
    return _getScene.apply(this, arguments);
}

function _getScene() {
    return (_getScene = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, (0, _thread.sleep)(1);

              case 2:
                return e.abrupt("return", getApp().$wepy.globalData.scene);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function getExtParam() {
    return _getExtParam2.apply(this, arguments);
}

function _getExtParam2() {
    return (_getExtParam2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        var r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = function(e) {
                    return (0, _ramda.pipe)(_ramda.keys, (0, _ramda.filter)((0, _ramda.contains)("utm_")), (0, 
                    _ramda.pick)(_ramda.__, e))(e);
                }, e.next = 3, (0, _thread.sleep)(1);

              case 3:
                return e.abrupt("return", r(getApp().$wepy.globalData.query));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function getOrderState() {
    return 0 === _store.store.selectors.getIsNovice(_store.store.getState());
}

function getIsSuperCard() {
    return _store.store.selectors.getIsSuperCard(_store.store.getState());
}

function getUserGrade() {
    return _store.store.selectors.getVipInfo(_store.store.getState()).levelId;
}

function getInviterUserId() {
    var e = _store.store.selectors.getExternalInviter(_store.store.getState()).inviterUserId;
    return -1 !== e ? e : void 0;
}

function getPageTitle() {
    var e;
    if (null !== _router.router.currentVm) return (null === (e = _pageCapabilityMap.default[_router.router.currentVm.name]) || void 0 === e ? void 0 : e.title) || _router.router.currentVm.title;
}

function getClassTypeByUrl() {
    var e = _router.router.route || {}, r = "团课", t = "CAMP", n = "私教", a = {
        class: r,
        personal: n,
        camp: t,
        CourseList: r,
        ClassDetail: r,
        ClassBookingDetail: r,
        ClassBookingConfirm: r,
        ClassBookingSuccess: r,
        NoviceClassList: r,
        NoviceClassDetail: r,
        PersonalDetail: n,
        PersonalBookingConfirm: n,
        PersonalBookingSuccess: n,
        PersonalBookingDetail: n,
        CampDetail: t,
        NewArrivalCampList: t,
        CampBookingDetail: t,
        CampBookingSuccess: t,
        CampBookingConfirm: t
    };
    return a[(e.data || {}).courseType] || a[e.page] || void 0;
}

function getShareDataInPath(e) {
    var r = (0, _router.decodeParams)(e), t = r.trainerUserId, n = void 0 === t ? void 0 : t, a = r.boxId, o = void 0 === a ? void 0 : a, i = r.scheduleId;
    return {
        share_trainer_id: n,
        share_box_id: o,
        share_schedule_id: void 0 === i ? void 0 : i
    };
}

function smaInit() {
    try {
        _sma.default.init({
            getCurrentTimeUTC: getCurrentTimeUTC,
            getPagePath: getPagePath,
            getUserData: getUserData,
            getReferrer: getReferrer,
            getSystemInfo: getSystemInfo,
            getNetworkType: getNetworkType,
            getTimezoneOffset: getTimezoneOffset,
            getLifeCycleId: getLifeCycleId,
            getLocation: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, (0, _map.getLocation)();

                      case 3:
                        return e.abrupt("return", e.sent);

                      case 6:
                        return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", void 0);

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 0, 6 ] ]);
            })), function() {
                return r.apply(this, arguments);
            }),
            getScene: getScene,
            getExtParam: getExtParam,
            getOrderState: getOrderState,
            getIsSuperCard: getIsSuperCard,
            getGeo: (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var r, t, n, a, o;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = function(e) {
                            var r = e.province, t = e.city;
                            return "市" === (0, _ramda.last)(r) ? r : t;
                        }, e.prev = 1, e.next = 4, (0, _map.getGeo)();

                      case 4:
                        return r = e.sent, t = r.country, n = r.province, a = r.city, e.abrupt("return", {
                            country: t,
                            province: n,
                            city: o({
                                province: n,
                                city: a
                            })
                        });

                      case 11:
                        return e.prev = 11, e.t0 = e.catch(1), e.abrupt("return", {
                            country: void 0,
                            province: void 0,
                            city: void 0
                        });

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e, null, [ [ 1, 11 ] ]);
            })), function() {
                return e.apply(this, arguments);
            }),
            getUserGrade: getUserGrade,
            getInviterUserId: getInviterUserId,
            getPageTitle: getPageTitle,
            getClassTypeByUrl: getClassTypeByUrl,
            getShareDataInPath: getShareDataInPath
        });
    } catch (e) {
        console.log("e:", e);
    }
    var e, r;
}

_router.router.afterEach(function(e) {
    var r = e.page, t = e.data || {}, n = t.title, a = t.page, o = t.backgroundImageUrl;
    "ShareMiniScan" === r && (0, _weappLifecycle.onShareAppMessage)({
        from: "picture",
        params: {
            title: n,
            path: a,
            imageUrl: o
        }
    });
});