Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js"), _sagaFetch = require("./../../utils/sagaFetch.js");

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

var map = R.map, namespace = "biz.personal.boxPersonalList", initialState = (0, 
_seamlessImmutable.default)({
    boxMap: {}
}), merge = _seamlessImmutable.default.merge, actions = {
    getBoxPersonalList: [ _actionTypes.FETCH_PERSONAL_BOX_LIST, void 0, function() {
        return {
            isPromise: !0
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.PERSONAL_BOX_LIST_PUT, function(e, r) {
    var t = r.payload;
    return merge(e, {
        boxMap: merge(e.boxMap, t, {
            deep: !0
        })
    });
}), sagas = function(e, r) {
    var t, i = e.put, c = e.call, u = e.select, p = (r.ReduxSaga, r.selectors);
    return _defineProperty(t = {}, _actionTypes.FETCH_PERSONAL_BOX_LIST, _regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.payload, n = r.__resolve, e.next = 3, u(p.getBoxPersonalListMap);

              case 3:
                if (a = e.sent, o = t.boxId, a[o]) {
                    e.next = 13;
                    break;
                }
                return e.next = 8, i({
                    type: _actionTypes.PERSONAL_BOX_LIST_GET,
                    payload: t,
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        statusName: "boxPersonalListGet"
                    }
                });

              case 8:
                return s = e.sent, e.next = 11, c(n, s);

              case 11:
                e.next = 15;
                break;

              case 13:
                return e.next = 15, c(n, !0);

              case 15:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(t, _actionTypes.PERSONAL_BOX_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.payload, n = r.meta, a = r.requestPayload, o = a.boxId, e.next = 4, 
                i({
                    type: _actionTypes.PERSONAL_BOX_LIST_PUT,
                    payload: _defineProperty({}, o, t)
                });

              case 4:
                return e.next = 6, c(_sagaFetch.updateFetchDone, n.statusName);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })), t;
}, selectors = function(e) {
    var r = e.createSelector;
    e.getSelector, e.createSelectorCreator;
    return {
        getBoxPersonalList: r(function(e) {
            return e.biz.personal.boxPersonalList.boxMap;
        }, function(e, r) {
            return r;
        }, function(e, r) {
            if (!r) return {
                boxPersonalList: [],
                allPersonalList: []
            };
            function t(e) {
                return map(function(e) {
                    return _objectSpread({}, e, {
                        face: e.trainerFace,
                        personalCampName: e.personalName,
                        firstExperiencePrice: "(首次体验".concat(e.firstExperiencePrice / 100, ")"),
                        priceText: "¥".concat(e.price / 100, "起/课时"),
                        showFirstPrice: e.firstBooking && 0 < e.firstExperiencePrice
                    });
                })(e);
            }
            var n = e[r] || {}, a = n.superPersonalList, o = n.allSuperPersonalList, s = void 0 === o ? [] : o;
            return {
                boxPersonalList: t(void 0 === a ? [] : a),
                allPersonalList: t(s)
            };
        }),
        getBoxPersonalListMap: function(e) {
            return e.biz.personal.boxPersonalList.boxMap;
        },
        getBoxPersonalListByBoxId: function(e, r) {
            return e.biz.personal.boxPersonalList.boxMap[r];
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