Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js"), _constants = require("./../../../constants/index.js"), _memoize = require("./../../../utils/memoize.js"), _sagaFetch = require("./../../utils/sagaFetch.js");

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

var filter = R.filter, findIndex = R.findIndex, propEq = R.propEq, pipe = R.pipe, slice = R.slice, map = R.map, when = R.when, gte = R.gte, either = R.either, namespace = "biz.box.boxList", initialState = {
    storesAreaInfo: {
        cityList: [],
        tags: {}
    },
    storeList: [],
    currentCity: ""
}, merge = _seamlessImmutable.default.merge, actions = {
    getBoxList: [ _actionTypes.BOX_LIST_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "boxListGet"
        };
    } ],
    setStoreFav: [ _actionTypes.BOX_ADDFAV_POST, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "storeAddFavPost"
        };
    } ],
    delStoreFav: [ _actionTypes.BOX_DELFAV_POST, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "storeDelFavPost"
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.BOX_LIST_PUT, function(e, t) {
    var r = t.payload;
    return merge(e, r);
}), sagas = function(e, t) {
    var r, o = e.put, i = e.call, a = e.select, s = t.getSelector;
    return _defineProperty(r = {}, _actionTypes.BOX_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, n = t.meta, e.next = 3, o({
                    type: _actionTypes.BOX_LIST_PUT,
                    payload: r
                });

              case 3:
                return e.next = 5, i(_sagaFetch.updateFetchDone, n.statusName);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(r, _actionTypes.BOX_ADDFAV_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.meta, e.next = 3, a(s("getCurrentCity"));

              case 3:
                return n = e.sent, e.next = 6, o({
                    type: _actionTypes.BOX_LIST_GET,
                    payload: n,
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        statusName: "boxListGet"
                    }
                });

              case 6:
                return e.next = 8, i(_sagaFetch.updateFetchDone, r.statusName);

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(r, _actionTypes.BOX_DELFAV_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.meta, e.next = 3, a(s("getCurrentCity"));

              case 3:
                return n = e.sent, e.next = 6, o({
                    type: _actionTypes.BOX_LIST_GET,
                    payload: n,
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        statusName: "boxListGet"
                    }
                });

              case 6:
                return e.next = 8, i(_sagaFetch.updateFetchDone, r.statusName);

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), r;
}, selectors = function(e) {
    var t = e.createSelector, r = e.getSelector, n = e.createSelectorCreator;
    var o = t(function(e) {
        return e.domains.boxMap.entities;
    }, function(e) {
        return e.biz.box.boxList.storeList;
    }, function(e, t) {
        return t;
    }, function(e, t, r) {
        return r;
    }, function(e, t, r, n) {
        return n;
    }, function(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "深圳市", n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "全城", o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "全部";
        if (0 === t.length) return null;
        var i = filter(function(e) {
            var t = !0;
            return r !== e.city && (t = !1), e.area !== n && "全城" !== n && (t = !1), e.brandName !== o && "全部" !== o && (t = !1), 
            t;
        })(e), a = [];
        return t.forEach(function(e) {
            e.boxId in i && a.push(_objectSpread({}, i[e.boxId], {}, e));
        }), a;
    }), i = r("getPromotionsByPositionId");
    return {
        getFilterStoresInfo: o,
        getStoreAreasInfo: function(e) {
            return e.biz.box.boxList.storesAreaInfo;
        },
        getBoxAds: t(function(e) {
            return i(e, _constants.BOX_ADS);
        }, function(e) {
            var t = e.promotions, r = void 0 === t ? [] : t, n = {}, o = findIndex(propEq("referenceType", _constants.referenceNoneType))(r), i = "", a = "", s = "";
            return pipe(when(function() {
                return gte(o, 0);
            }, slice(0, o + 1)), map(function(e) {
                i = e.referenceId, s = e.referenceType, (a = s === _constants.referenceNoneType ? _constants.referenceNoneType : i) && (n[a] = e, 
                n[a].boxId = a);
            }))(r), n;
        }),
        getBoxBanners: n(_memoize.memoizeReference, function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.city, n = void 0 === r ? "" : r, o = t.area, i = void 0 === o ? "" : o;
            return [ "".concat(e.positionId, "|").concat(n, "|").concat(i), [ e ] ];
        })(i, function(e, t, r) {
            return r;
        }, function(e) {
            var t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).city, r = filter(either(propEq("referenceId", void 0 === t ? "" : t), propEq("referenceType", _constants.referenceNoneType))), n = e.positionInfo.promotionNum;
            return {
                isRelateIdExist: e.isRelateIdExist,
                isPositionActive: e.isPositionActive,
                promotions: pipe(r, slice(0, n))(e.promotions)
            };
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