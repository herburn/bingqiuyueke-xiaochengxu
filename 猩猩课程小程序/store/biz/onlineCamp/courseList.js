Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js");

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

var map = R.map, filter = R.filter, contains = R.contains, prepend = R.prepend, intersection = R.intersection, namespace = "biz.onlineCamp.courseList", ALLTAG = "全部", initialState = (0, 
_seamlessImmutable.default)({
    tags: [],
    scheduleCampList: [],
    noScheduleCampList: [],
    localOfflineCampList: [],
    currentCity: ""
}), merge = _seamlessImmutable.default.merge, actions = {
    getOnlineCourseList: [ _actionTypes.ONLINE_COURSE_LIST_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.ONLINE_COURSE_LIST_PUT, function(e, t) {
    var r = t.payload;
    return merge(e, r);
}), sagas = function(e, t) {
    var n = e.put;
    e.call, e.select, e.__resolve, t.ReduxSaga, t.selectors;
    return _defineProperty({}, _actionTypes.ONLINE_COURSE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, e.next = 3, n({
                    type: _actionTypes.ONLINE_COURSE_LIST_PUT,
                    payload: r
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, selectors = function(e) {
    var t = e.createSelector, r = e.getSelector, n = (e.createSelectorCreator, r("getCampMap"));
    return {
        getOnLineScheduleCampList: t(n, function(e, t) {
            return t;
        }, function(e) {
            return e.biz.onlineCamp.courseList.scheduleCampList;
        }, function(t, r, e) {
            if (0 === e.length) return [];
            var n, a = map(function(e) {
                return _objectSpread({
                    campChannelType: (n = t[e.campId] || {}).campChannelType,
                    campName: n.campName,
                    image: n.titleImage,
                    tags: n.tagList
                }, e, {
                    bookingableScheduleCount: e.bookingableScheduleCount
                });
            })(e);
            return filter(function(e) {
                return contains(ALLTAG, r) || 0 < intersection(e.tags, r).length;
            })(a);
        }),
        getOnLineOtherScheduleCampList: t(n, function(e) {
            return e.biz.onlineCamp.courseList.noScheduleCampList;
        }, function(e) {
            return e.biz.onlineCamp.courseList.localOfflineCampList;
        }, function(t, e, r) {
            var n;
            return {
                noScheduleCampList: map(function(e) {
                    return _objectSpread({
                        campChannelType: (n = t[e.campId] || {}).campChannelType,
                        campName: n.campName,
                        image: n.titleImage,
                        tags: n.tagList
                    }, e);
                })(e),
                localOfflineCampList: map(function(e) {
                    return _objectSpread({
                        campChannelType: (n = t[e.campId] || {}).campChannelType,
                        campName: n.campName,
                        image: n.titleImage,
                        tags: n.tagList
                    }, e);
                })(r)
            };
        }),
        getOnlineCourseTags: t(function(e) {
            return e.biz.onlineCamp.courseList.tags;
        }, function(e) {
            return prepend({
                isActive: !1,
                label: "全部",
                value: "全部"
            })(map(function(e) {
                return {
                    isActive: !1,
                    label: e,
                    value: e
                };
            })(e));
        }),
        getOnlineCourseCurrentCity: function(e) {
            return e.biz.onlineCamp.courseList.currentCity;
        }
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