Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js"), _commonSelector = require("./commonSelector.js");

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

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var namespace = "biz.onlineCourse.campList", map = R.map, prepend = R.prepend, filter = R.filter, contains = R.contains, ALLTAG = "全部", initialState = (0, 
_seamlessImmutable.default)({
    scheduleList: [],
    cityList: []
}), merge = _seamlessImmutable.default.merge, actions = {
    getOnlineCampList: [ _actionTypes.ONLINE_CAMP_LIST_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.ONLINE_CAMP_LIST_PUT, function(e, t) {
    var r = t.payload;
    return merge(e, r);
}), sagas = function(e, t) {
    var n = e.put;
    e.call, e.select, e.__resolve, t.ReduxSaga, t.selectors;
    return _defineProperty({}, _actionTypes.ONLINE_CAMP_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, e.next = 3, n({
                    type: _actionTypes.ONLINE_CAMP_LIST_PUT,
                    payload: r
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, selectors = function(e) {
    var t = e.createSelector, r = e.getSelector, n = (e.createSelectorCreator, r("getTrainerMap"));
    return {
        getOnlineCampList: t(r("getSuperCampScheduleMap"), n, r("getCampMap"), function(e) {
            return e.biz.onlineCourse.campList.scheduleList;
        }, function(e, t) {
            return t;
        }, function(e, t, r) {
            return r;
        }, function(e, t, r, n, i, a) {
            if (0 === n.length) return [];
            function o(e) {
                return contains(e.scheduleStatus)([ 1, 2 ]);
            }
            var u;
            return u = filter(a ? function(e) {
                return contains(ALLTAG, i) && o(e) || contains(e.city, i) && o(e);
            } : function(e) {
                return contains(ALLTAG, i) || contains(e.city, i);
            })(n), (0, _commonSelector.getScheduleList)(e, t, r, u);
        }),
        getOnlineCampCityList: t(function(e) {
            return e.biz.onlineCourse.campList.cityList;
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