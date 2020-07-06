Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../../../../vendor.js")(315)), _ramda = require("./../../../../../vendor.js")(320), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _actionTypes = require("./../../../../types/index.js"), _categoryFilterSelectors = require("./categoryFilterSelectors.js"), _boxFilterSelectors = require("./boxFilterSelectors.js"), _classesSelector = require("./classesSelector.js"), _promotionSelectors = require("./promotionSelectors.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "class", "list", "course" ],
    actions: {
        fetchClassSchedules: [ _actionTypes.FETCH_CLASS_SCHEDULE_LIST, function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).city;
            return {
                city: void 0 === e ? "" : e
            };
        }, function() {
            return {
                isPromise: !0
            };
        } ],
        updateClassCurrentCity: [ _actionTypes.CLASS_CONTENT_CITY_PUT, function(e) {
            return e;
        } ],
        subscribeClassSchedule: [ _actionTypes.SUBSCRIBE_EVENT_POST, function(e) {
            return {
                eventName: "classScheduleUpdate",
                subscribe: 1,
                data: {
                    date: e
                }
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        categoryFilter: {
            targetNames: [],
            typeNames: [],
            firstTypeNames: [],
            firstTypesMapByTargetName: {},
            firstTypesMapByTypeName: {},
            classIdsMapByFirstTypeName: {}
        },
        boxFilter: {
            cities: [],
            areasMap: {},
            boxesMap: {}
        },
        isFetchedClassCityMap: {},
        dates: [],
        currentCity: "",
        currentTime: -1,
        classScheduleSubscribeMap: {}
    }),
    reducers: (_defineProperty(_reducers = {}, _actionTypes.CLASS_CATEGORY_FILTER_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            categoryFilter: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_BOX_FILTER_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            boxFilter: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_CONTENT_DATES_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            dates: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_CONTENT_CITY_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            currentCity: r,
            isFetchedClassCityMap: merge(e.isFetchedClassCityMap, _defineProperty({}, r, !0))
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_SCHEDULES_TIME_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            currentTime: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_SCHEDULES_SUBSCRIBE_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            classScheduleSubscribeMap: r
        });
    }), _reducers),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.FETCH_CLASS_SCHEDULE_LIST, _regeneratorRuntime2.default.mark(function e(t, r) {
        var s, a, o, c, i, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = t.payload, a = t.__resolve, o = r.put, c = r.call, i = s.city, e.next = 5, 
                o({
                    type: _actionTypes.CLASS_SCHEDULE_LIST_GET,
                    payload: {
                        city: i
                    },
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        isPromise: {
                            success: !0
                        },
                        statusName: "courseClassListGet"
                    }
                });

              case 5:
                return n = e.sent, e.next = 8, c(a, n);

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_SCHEDULE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, s) {
        var a, o, c, i, n, l, u, _, p, S, y, C, d, T, m, g, f, b, E, B, N;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, o = t.__resolve, c = r.put, i = r.call, n = s.actions, l = a.classPriceMap, 
                u = a.dateBoxSchedulesMap, _ = a.dates, p = a.targetNames, S = a.typeNames, y = a.firstTypeNames, 
                C = a.firstTypesMapByTargetName, d = a.firstTypesMapByTypeName, T = a.classIdsMapByFirstTypeName, 
                m = a.cities, g = a.areasMapByCity, f = a.boxesMapByCityArea, b = a.currentTime, 
                E = a.currentCity, B = a.hasNewCamp, N = a.classScheduleSubscribeMap, e.next = 6, 
                c({
                    type: _actionTypes.CLASS_PRICE_MAP_PUT,
                    payload: {
                        entities: l
                    }
                });

              case 6:
                return e.next = 8, c({
                    type: _actionTypes.DATE_BOX_SCHEDULES_MAP_PUT,
                    payload: {
                        entities: u
                    }
                });

              case 8:
                return e.next = 10, c({
                    type: _actionTypes.CLASS_CONTENT_DATES_PUT,
                    payload: _
                });

              case 10:
                return e.next = 12, c({
                    type: _actionTypes.CLASS_CATEGORY_FILTER_PUT,
                    payload: {
                        targetNames: p,
                        typeNames: S,
                        firstTypeNames: y,
                        firstTypesMapByTargetName: C,
                        firstTypesMapByTypeName: d,
                        classIdsMapByFirstTypeName: T
                    }
                });

              case 12:
                return e.next = 14, c({
                    type: _actionTypes.CLASS_BOX_FILTER_PUT,
                    payload: {
                        cities: m,
                        areasMap: g,
                        boxesMap: f
                    }
                });

              case 14:
                return e.next = 16, c({
                    type: _actionTypes.CLASS_CONTENT_CITY_PUT,
                    payload: E
                });

              case 16:
                return e.next = 18, c({
                    type: _actionTypes.CLASS_SCHEDULES_TIME_PUT,
                    payload: b
                });

              case 18:
                return e.next = 20, c(n.setNewCampShowOnNavBarStatus({
                    city: E,
                    flag: !!B
                }));

              case 20:
                return e.next = 22, c({
                    type: _actionTypes.CLASS_SCHEDULES_SUBSCRIBE_PUT,
                    payload: N
                });

              case 22:
                return e.next = 24, i(o, E);

              case 24:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.SUBSCRIBE_EVENT_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var s, a, o, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = t.requestPayload, a = r.put, o = r.select, e.next = 4, o(function(e) {
                    return e.biz.class.list.course.classScheduleSubscribeMap;
                });

              case 4:
                return c = e.sent, e.next = 7, a({
                    type: _actionTypes.CLASS_SCHEDULES_SUBSCRIBE_PUT,
                    payload: (0, _ramda.assocPath)([ s.data.date, "isSubscribe" ], 1)(c)
                });

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function(e) {
        var t = e.getSelector, r = e.createSelector, s = (0, _categoryFilterSelectors.getClassTargetNamesCreator)({
            getSelector: t
        }), a = (0, _categoryFilterSelectors.getClassTypeNamesCreator)({
            getSelector: t
        }), o = (0, _categoryFilterSelectors.getFirstTypeNamesBySelectedCreator)({
            getSelector: t,
            createSelector: r
        }), c = (0, _categoryFilterSelectors.getClassIdsByFirstTypesCreator)({
            getSelector: t,
            createSelector: r
        }), i = (0, _boxFilterSelectors.getCitiesCreator)({
            getSelector: t
        }), n = (0, _boxFilterSelectors.getAreasByCityCreator)({
            getSelector: t
        }), l = (0, _boxFilterSelectors.getBoxNamesByAreaCreator)({
            getSelector: t,
            createSelector: r
        }), u = (0, _boxFilterSelectors.getBoxIdsByNamesCreator)({
            getSelector: t,
            createSelector: r
        }), _ = (0, _classesSelector.getBoxesSchedulesByFilterCreator)({
            getSelector: t,
            createSelector: r
        }), p = (0, _promotionSelectors.getClassBannerPromotionCreator)({
            getSelector: t,
            createSelector: r
        }), S = (0, _promotionSelectors.getClassBoxPromotionCreator)({
            getSelector: t,
            createSelector: r
        }), y = (0, _promotionSelectors.getClassPromotionCreator)({
            getSelector: t,
            createSelector: r
        });
        return {
            getIsFetchedByClassCity: function(e, t) {
                return t in e.biz.class.list.course.isFetchedClassCityMap;
            },
            getClassCurrentCity: function(e) {
                return e.biz.class.list.course.currentCity;
            },
            getClassCurrentTime: function(e) {
                return e.biz.class.list.course.currentTime;
            },
            getClassDates: function(e) {
                return e.biz.class.list.course.dates;
            },
            getCategoryFilter: function(e) {
                return e.biz.class.list.course.categoryFilter;
            },
            getBoxFilter: function(e) {
                return e.biz.class.list.course.boxFilter;
            },
            getClassScheduleSubscribeMap: r(function(e) {
                return e.biz.class.list.course.classScheduleSubscribeMap;
            }, (0, _ramda.mapObjIndexed)(function(e, t) {
                var r = e.isOpenSubscribe, s = e.isSubscribe;
                return {
                    isShow: 1 === r && 0 === s,
                    msg: "点击订阅".concat((0, _moment.default)(t).format("MM月DD日"), " 课表更新提醒")
                };
            })),
            getClassTargetNames: s,
            getClassTypeNames: a,
            getFirstTypeNamesBySelected: o,
            getClassIdsByFirstTypes: c,
            getClassCities: i,
            getClassAreasByCity: n,
            getClassBoxNamesByArea: l,
            getClassBoxIdsByNames: u,
            getBoxesSchedulesByFilter: _,
            getClassBannerPromotion: p,
            getClassBoxPromotion: S,
            getClassPromotion: y
        };
    }
};

exports.default = _default;