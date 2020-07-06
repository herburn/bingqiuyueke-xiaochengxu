Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js"), _memoize = require("./../../../utils/memoize.js"), _sagaFetch = require("./../../utils/sagaFetch.js"), _utils = require("./utils.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var filter = R.filter, map = R.map, forEach = R.forEach, both = R.both, pipe = R.pipe, uniq = R.uniq, findIndex = R.findIndex, propOr = R.propOr, find = R.find, propEq = R.propEq, pluck = R.pluck, contains = R.contains, union = R.union, forEachObjIndexed = R.forEachObjIndexed, namespace = "biz.personal.personalList", initialState = (0, 
_seamlessImmutable.default)({
    currentCity: "",
    currentTime: "",
    firstBooking: !1,
    isActivated: !1,
    boxArea: {
        cityList: []
    },
    personalCampList: [],
    personalScheduleList: []
}), merge = _seamlessImmutable.default.merge, actions = {
    getPersonalList: [ _actionTypes.PERSONAL_LIST_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "personalListGet"
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.PERSONAL_LIST_PUT, function(e, r) {
    var t = r.payload;
    return merge(e, t);
}), sagas = function(e, r) {
    var a = e.put, s = e.call, c = r.actions;
    return _defineProperty({}, _actionTypes.PERSONAL_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.payload, n = r.meta, o = t.currentCity, i = t.hasNewCamp, e.next = 4, 
                a({
                    type: _actionTypes.PERSONAL_LIST_PUT,
                    payload: t
                });

              case 4:
                return e.next = 6, s(_sagaFetch.updateFetchDone, n.statusName);

              case 6:
                return e.next = 8, a(c.setNewCampShowOnNavBarStatus({
                    city: o,
                    flag: !!i
                }));

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, selectors = function(e) {
    var r = e.createSelector, t = e.getSelector, n = e.createSelectorCreator, o = t("getBoxSmallMap"), i = t("getPersonalCampMap"), a = t("getPersonalScheduleMap"), s = t("getTrainerSmallMap"), f = "附近", d = "去过", c = r(i, a, s, function(e) {
        return e.biz.personal.personalList.firstBooking;
    }, function(e) {
        var r = e.biz.personal.personalList.boxPersonalSchedules, t = [];
        return map(function(e) {
            t = t.concat(e.personalScheduleList);
        })(r), uniq(t);
    }, function(e, r, t, n, o) {
        return b(e, r, t, n, o);
    }), u = n(_memoize.memoizeReference, function(e, r, t, n, o) {
        return [ "".concat(n.join("|"), "-").concat(o.join("|")), [ r, t, e ] ];
    })(function(e) {
        return c(e);
    }, o, function(e) {
        return e.biz.personal.personalList.boxPersonalSchedules;
    }, function(e, r, t) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [];
        return 1 <= n.length ? n.sort() : p(e, r, t, n);
    }, function(e, r, t, n) {
        return (4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : []).sort();
    }, function(e, a, r, s, t) {
        if (null === s) return [];
        var n = both(function(e) {
            if (0 === s.length) return !0;
            var r = map(function(e) {
                return contains(e, s);
            })(e.boxIds);
            return contains(!0, r);
        }, function(e) {
            return 0 === t.length || contains(e.personalCampId, t);
        }), c = filter(n)(e), u = [];
        return forEach(function(e) {
            var r, t, n, o = e.boxId, i = e.personalScheduleList;
            contains(o)(s) && (r = o, t = i, n = [], forEach(function(e) {
                c[e] && n.push(c[e]);
            })(t), 0 < n.length && u.push({
                boxId: r,
                boxName: a[r].boxname,
                classList: n,
                boxInfo: a[r]
            }));
        })(r), u;
    }), p = r(function(e) {
        return e.biz.personal.personalList.boxArea;
    }, function(e, r) {
        return r;
    }, function(e, r, t) {
        return t;
    }, function(e, r, t) {
        var n, o = e.cityMap, i = void 0 === o ? {} : o, a = e.nearByCityBoxList, s = void 0 === a ? [] : a, c = e.recentBookingBoxList, u = void 0 === c ? [] : c, p = e.cityList;
        if (-1 === (void 0 === p ? [] : p).indexOf(r)) return [];
        if (t === f) n = s; else if (t === d) n = u; else {
            var l;
            n = (null === (l = pipe(propOr([], r), find(propEq("area", t)))(i)) || void 0 === l ? void 0 : l.boxList) || [];
        }
        return pluck("boxId", n).sort();
    }), l = r(i, a, function(e) {
        return e.biz.personal.personalList.personalCampList;
    }, function(e, n, r) {
        return map(function(r) {
            var t = [];
            return forEachObjIndexed(function(e) {
                e.personalCampId === r && (t = union(t, e.boxIds));
            })(n), {
                campName: e[r].personalCampName,
                campId: e[r].personalCampId,
                boxIds: t
            };
        })(r);
    }), m = r(function(e) {
        return e.biz.personal.personalList.boxArea;
    }, function(e) {
        return e.biz.personal.personalList.currentCity;
    }, function(e, r) {
        var t = 0 <= e.cityList.indexOf(r) ? r : e.cityList[0];
        return {
            boxArea: e,
            currentCity: t
        };
    }), b = function(i, a, s, c, e) {
        var u = {};
        return forEach(function(e) {
            var r = a[e], t = i[r.personalCampId], n = s[r.trainerUserId], o = (0, _utils.getUintMinPice)(t.priceConf);
            u[e] = _objectSpread({}, r, {
                scheduleId: r.personalScheduleId,
                scheduleSk: r.sk,
                personalCampName: t.personalCampName,
                firstExperiencePrice: "(首次体验".concat(t.firstExperiencePrice / 100, ")"),
                price: o,
                priceText: "¥".concat(o, "起/课时"),
                showFirstPrice: c && 0 < t.firstExperiencePrice
            }, n);
        })(e), u;
    };
    return {
        getPersonalScheduleList: u,
        getPersonalBoxAreaInfo: m,
        getIsPersonalNewerActivity: function(e) {
            return e.biz.personal.personalList.isActivated;
        },
        getPersonalCamps: l,
        getPersonalListCurrentCity: function(e) {
            return e.biz.personal.personalList.currentCity;
        },
        getIsPersonalCity: r(function(e) {
            return e.biz.personal.personalList.boxArea;
        }, function(e, r) {
            return r;
        }, function(e, r) {
            var t = e.cityMap, n = void 0 === t ? {} : t, o = n[r] || n["".concat(r, "市")] || [];
            return -1 < findIndex(function(e) {
                return 0 < e.boxList.length;
            })(o);
        })
    };
}, _default = {
    namespace: namespace,
    state: initialState,
    reducers: reducers,
    actions: actions,
    selectors: selectors,
    sagas: sagas
};

exports.default = _default;