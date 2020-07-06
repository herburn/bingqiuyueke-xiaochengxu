Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../../../vendor.js")(320)), _seamlessImmutable = _interopRequireDefault(require("./../../../../vendor.js")(322)), _actionTypes = require("./../../../types/index.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
    }
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var propOr = R.propOr, reduce = R.reduce, filter = R.filter, contains = R.contains, values = R.values, map = R.map, memoize = R.memoize, curryN = R.curryN, pipe = R.pipe, __ = R.__, toString = R.toString, merge = _seamlessImmutable.default.merge, getCampsFunc = curryN(2, function(e, t) {
    return map(propOr({}, __, e))(t);
}), filterCampMap = function(e) {
    return reduce(function(e, t) {
        return e[t.city] ? e[t.city].push(t) : e[t.city] = [ t ], e;
    }, {})(values(e));
}, _default = {
    namespace: [ "biz", "camp", "list", "course" ],
    state: (0, _seamlessImmutable.default)({
        currentCity: "",
        cityTagMap: {},
        cities: [],
        campIds: [],
        newCampStatusCityMapOnCamp: {},
        newCampStatusCityMapOnNavBar: {},
        onlineCampList: []
    }),
    actions: {
        getCampList: [ _actionTypes.CAMP_LIST_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                statusName: "campListGet"
            };
        } ],
        setNewCampShowOnNavBarStatus: _actionTypes.CITY_NEW_CAMP_SHOW_STATUS_ON_NAV_BAR_PUT,
        setNewCampShowOnCampStatus: _actionTypes.NEW_CAMP_STATUS_ON_CAMP_PUT,
        setCurrentCity: _actionTypes.CAMP_LIST_CITY_PUT
    },
    reducers: (_defineProperty(_reducers = {}, _actionTypes.CAMPS_LIST_PUT, function(e, t) {
        var r = t.payload, n = r.cityTagMap, a = r.cities, i = r.campIds, c = r.onlineCampList;
        return merge(e, {
            cityTagMap: n,
            cities: a,
            campIds: i,
            onlineCampList: c
        }, {
            deep: !0
        });
    }), _defineProperty(_reducers, _actionTypes.CAMP_LIST_CITY_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            currentCity: r
        });
    }), _defineProperty(_reducers, _actionTypes.NEW_CAMP_STATUS_ON_CAMP_PUT, function(e, t) {
        var r = t.payload, n = r.city, a = r.flag;
        return merge(e, {
            newCampStatusCityMapOnCamp: merge(e.newCampStatusCityMapOnCamp, _defineProperty({}, n, a))
        });
    }), _defineProperty(_reducers, _actionTypes.CITY_NEW_CAMP_SHOW_STATUS_ON_NAV_BAR_PUT, function(e, t) {
        var r = t.payload, n = r.city, a = r.flag;
        return merge(e, {
            newCampStatusCityMapOnNavBar: merge(e.newCampStatusCityMapOnNavBar, _defineProperty({}, n, a))
        });
    }), _reducers),
    selectors: function(e) {
        var t = e.createSelector, n = e.getSelector, r = e.createSelectorCreator, a = (0, 
        {
            createSelector: t,
            getSelector: n,
            createSelectorCreator: r
        }.createSelectorCreator)(memoize, function(e) {
            return "".concat(toString(e));
        })(n("getCampSmallMap"), function(e) {
            return e.biz.camp.list.course.campIds;
        }, function(e, t, r) {
            return {
                city: t,
                selectCampIds: r
            };
        }, function(e, t, r) {
            var n = r.city, a = r.selectCampIds, i = pipe(getCampsFunc(e), function(t) {
                return map(function(e) {
                    return 2 !== e.campChannelType ? e : _objectSpread({}, e, {
                        scheduleCount: R.pipe(filter(R.propEq("campId", e.campId)), R.map(R.prop("scheduleCount")), R.reduce(R.add, 0))(t)
                    });
                }, t);
            }, reduce(function(e, t) {
                return e[t.city] ? e[t.city].push(t) : e[t.city] = [ t ], e;
            }, {}))(t), c = propOr([], n)(i);
            return a.length ? filter(function(e) {
                return contains(e.campId)(a);
            })(c) : c;
        });
        return {
            getCampCurrentCity: function(e) {
                return e.biz.camp.list.course.currentCity;
            },
            getCamps: function(e, t, r) {
                return a(e, t, r);
            },
            getNewArrivalCamps: t(function(e, t, r) {
                return n("getCamps")(e, t, r);
            }, function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).filter(function(e) {
                    return 1 <= e.newScheduleCount;
                });
            }),
            getCampTags: t(function(e) {
                return e.biz.camp.list.course.cityTagMap;
            }, n("getCampSmallMap"), function(e, t) {
                var r = filterCampMap(t) || {};
                return {
                    cityTagMap: e,
                    cityTagCampIdMap: map(function(e) {
                        return reduce(function(e, r) {
                            return reduce(function(e, t) {
                                return e[t] ? e[t].push(r.campId) : e[t] = [ r.campId ], e;
                            }, e)(r.tags);
                        }, {})(e);
                    })(r)
                };
            }),
            getCampCities: function(e) {
                return e.biz.camp.list.course.cities;
            },
            getNewCampStatusOnCamp: function(e, t) {
                return e.biz.camp.list.course.newCampStatusCityMapOnCamp[t];
            },
            getNewCampShowedStatusOnNavBar: function(e, t) {
                return e.biz.camp.list.course.newCampStatusCityMapOnNavBar[t];
            },
            getCampIndexOnlineCampList: t(function(e) {
                return e.biz.camp.list.course.onlineCampList;
            }, function(e, t) {
                return t;
            }, function(e, t) {
                return filter(function(e) {
                    return e.city === t;
                })(e);
            })
        };
    },
    sagas: _defineProperty({}, _actionTypes.CAMP_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var n, a, i, c, p, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.payload, a = r.put, i = n.cityTagMap, c = n.cities, p = n.campIds, 
                u = n.currentCity, o = n.campsSmallMap, s = n.onlineCampList, e.next = 5, a({
                    type: _actionTypes.CAMP_LIST_CITY_PUT,
                    payload: u
                });

              case 5:
                return e.next = 7, a({
                    type: _actionTypes.CAMPS_LIST_PUT,
                    payload: {
                        cityTagMap: i,
                        cities: c,
                        campIds: p,
                        onlineCampList: s
                    }
                });

              case 7:
                return e.next = 9, a({
                    type: _actionTypes.CAMPS_SMALL_PUT,
                    payload: o
                });

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }))
};

exports.default = _default;