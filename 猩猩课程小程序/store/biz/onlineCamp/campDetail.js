Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _ramda = require("./../../../vendor.js")(320), _actionTypes = require("./../../types/index.js"), _campDetailSelector = require("./campDetailSelector.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "onlineCamp", "campDetail" ],
    state: (0, _seamlessImmutable.default)({
        scheduleStatus: null,
        attendStatus: null,
        subscribeStatus: null,
        selectedCity: "全部",
        onlyShowApplicable: !0,
        cityList: [],
        campScheduleList: [],
        selectedScheduleId: ""
    }),
    actions: {
        getOnlineCampDetail: [ _actionTypes.ONLINE_CAMP_DETAIL_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                statusName: "getOnlineCampDetail"
            };
        } ],
        getOnlineCampDetailSchedules: [ _actionTypes.ONLINE_CAMP_DETAIL_SCHEDULE_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                statusName: "getOnlineCampDetailSchedules"
            };
        } ],
        updateOnlineCampDetail: [ _actionTypes.ONLINE_CAMP_DETAIL_PUT, void 0, function() {
            return {
                isFetch: !1,
                isLatest: !0
            };
        } ],
        changeOnlineCampScheduleShowApplicable: [ _actionTypes.ONLINE_CAMP_SCHEDULE_SHOW_APPLICABLE, void 0, function() {
            return {
                isFetch: !1,
                isLatest: !0
            };
        } ],
        changeOnlineCampScheduleSelectedCity: [ _actionTypes.ONLINE_CAMP_SCHEDULE_SELECTED_CITY, void 0, function() {
            return {
                isFetch: !1,
                isLatest: !0
            };
        } ],
        changeOnlineCampScheduleSelectedSchedule: [ _actionTypes.ONLINE_CAMP_SCHEDULE_SELECTED_SCHEDULE, void 0, function() {
            return {
                isFetch: !1,
                isLatest: !0
            };
        } ]
    },
    reducers: (_defineProperty(_reducers = {}, _actionTypes.ONLINE_CAMP_DETAIL_PUT, function(e, t) {
        var n = t.payload.main;
        return merge(e, _objectSpread({}, n), {
            deep: !0
        });
    }), _defineProperty(_reducers, _actionTypes.ONLINE_CAMP_DETAIL_SCHEDULE_PUT, function(e, t) {
        var n = t.payload.main;
        return merge(e, _objectSpread({}, n), {
            deep: !0
        });
    }), _defineProperty(_reducers, _actionTypes.ONLINE_CAMP_SCHEDULE_SHOW_APPLICABLE, function(e, t) {
        var n = t.payload;
        return merge(e, {
            onlyShowApplicable: n
        });
    }), _defineProperty(_reducers, _actionTypes.ONLINE_CAMP_SCHEDULE_SELECTED_CITY, function(e, t) {
        var n = t.payload;
        return merge(e, {
            selectedCity: n
        });
    }), _defineProperty(_reducers, _actionTypes.ONLINE_CAMP_SCHEDULE_SELECTED_SCHEDULE, function(e, t) {
        var n = t.payload;
        return merge(e, {
            selectedScheduleId: n
        });
    }), _reducers),
    selectors: function(e) {
        var t = e.createSelector;
        return {
            getCityList: function(e) {
                var t = e.biz.onlineCamp.campDetail.cityList, n = e.biz.onlineCamp.campDetail.selectedCity;
                return (0, _ramda.map)(function(e) {
                    return {
                        selected: e === n,
                        name: e
                    };
                })(t);
            },
            getSelectedCity: function(e) {
                return e.biz.onlineCamp.campDetail.selectedCity;
            },
            getSelectedScheduleId: function(e) {
                return e.biz.onlineCamp.campDetail.selectedScheduleId;
            },
            getShowApplicable: function(e) {
                return e.biz.onlineCamp.campDetail.onlyShowApplicable;
            },
            getOnlineCampDetail: function(e, t) {
                return _objectSpread({}, function(e) {
                    var t, n, a = 0 < arguments.length && void 0 !== e ? e : {};
                    return {
                        campName: a.campName || "课程详情",
                        tags: a.tagList,
                        thumbnailGallery: a.thumbnailImages,
                        campGallery: a.images || [],
                        video: a.video,
                        campIntroduce: a.campIntroduce,
                        trainingEffect: (null === (t = a.trainingEffect) || void 0 === t ? void 0 : t.split("<br/>")) || [],
                        suitablePeople: (null === (n = a.suitablePeople) || void 0 === n ? void 0 : n.split("<br/>")) || [],
                        faqs: (null == a ? void 0 : a.faq) || [],
                        sk: a.sk,
                        notes: a.notes
                    };
                }(e.domains.campMap.entities[t]), {
                    scheduleStatus: e.biz.onlineCamp.campDetail.scheduleStatus,
                    attendStatus: e.biz.onlineCamp.campDetail.attendStatus,
                    subscribeStatus: e.biz.onlineCamp.campDetail.subscribeStatus
                });
            },
            getOnlineCampScheduleListById: (0, _campDetailSelector.getOnlineCampScheduleListSelector)({
                createSelector: t
            }),
            getOnlineCampSubscribeStatus: function(e) {
                return e.biz.onlineCamp.campDetail.subscribeStatus;
            }
        };
    },
    sagas: (_defineProperty(_sagas = {}, _actionTypes.ONLINE_CAMP_DETAIL_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, n) {
        var a, r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, r = n.put, e.next = 4, r({
                    type: _actionTypes.ONLINE_CAMP_DETAIL_PUT,
                    payload: a
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.ONLINE_CAMP_DETAIL_SCHEDULE_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, n) {
        var a, r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, r = n.put, e.next = 4, r({
                    type: _actionTypes.ONLINE_CAMP_DETAIL_SCHEDULE_PUT,
                    payload: a
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas)
};

exports.default = _default;