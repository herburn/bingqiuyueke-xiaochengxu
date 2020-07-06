Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _availableRelateKeyMa, _sortedRelateKeyMap, _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _sagaFetch = require("./../../utils/sagaFetch.js"), _constants = require("./../../../constants/index.js"), _actionTypes = require("./../../types/index.js"), _selectors = require("./selectors.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        a.get || a.set ? Object.defineProperty(t, r, a) : t[r] = e[r];
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

var merge = R.merge, _default = {
    namespace: [ "biz", "promotion" ],
    state: {
        availableRelateKeyMap: (_defineProperty(_availableRelateKeyMa = {}, _constants.CLASS_BANNER, []), 
        _defineProperty(_availableRelateKeyMa, _constants.BOX_BANNER, []), _defineProperty(_availableRelateKeyMa, _constants.PAY_SUCCESS, []), 
        _defineProperty(_availableRelateKeyMa, _constants.CLASS_BEFORE_OPEN, []), _defineProperty(_availableRelateKeyMa, _constants.CLASS_ADS, []), 
        _defineProperty(_availableRelateKeyMa, _constants.BOX_ADS, []), _defineProperty(_availableRelateKeyMa, _constants.SUPERMONKEY_CARD, []), 
        _availableRelateKeyMa),
        sortedRelateKeyMap: (_defineProperty(_sortedRelateKeyMap = {}, _constants.CLASS_BANNER, []), 
        _defineProperty(_sortedRelateKeyMap, _constants.BOX_BANNER, []), _defineProperty(_sortedRelateKeyMap, _constants.PAY_SUCCESS, []), 
        _defineProperty(_sortedRelateKeyMap, _constants.CLASS_BEFORE_OPEN, []), _defineProperty(_sortedRelateKeyMap, _constants.CLASS_ADS, []), 
        _defineProperty(_sortedRelateKeyMap, _constants.BOX_ADS, []), _defineProperty(_sortedRelateKeyMap, _constants.SUPERMONKEY_CARD, []), 
        _sortedRelateKeyMap)
    },
    reducers: (_defineProperty(_reducers = {}, _actionTypes.POSITION_RELATE_MAP_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            availableRelateKeyMap: merge(e.availableRelateKeyMap, r)
        });
    }), _defineProperty(_reducers, _actionTypes.POSITION_SORTED_RELATE_MAP_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            sortedRelateKeyMap: merge(e.sortedRelateKeyMap, r)
        });
    }), _reducers),
    actions: {
        getPromotionInitInfo: [ _actionTypes.PROMOTION_INIT, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                isPromise: {
                    success: !0
                },
                statusName: "promotionInitGet"
            };
        } ],
        getPromotionsByPositionId: [ _actionTypes.PROMOTION_GET_BY_POSITIONID, function(e) {
            return {
                param: e
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !1,
                statusName: "promotionsByPositionIdGet"
            };
        } ]
    },
    selectors: function(e) {
        var t = e.getSelector, r = e.createSelector, a = e.createSelectorCreator, n = (0, 
        _selectors.getPromotionsByPositionIdCreator)({
            getSelector: t,
            createSelector: r,
            createSelectorCreator: a
        });
        return {
            getPromotionsByPositionId: function(e, t) {
                return n(e)(e, t);
            }
        };
    },
    sagas: (_defineProperty(_sagas = {}, _actionTypes.PROMOTION_GET_BY_POSITIONID_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var a, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, n = r.put, e.prev = 2, e.next = 5, n({
                    type: _actionTypes.POSITION_SORTED_RELATE_MAP_PUT,
                    payload: a
                });

              case 5:
                e.next = 10;
                break;

              case 7:
                e.prev = 7, e.t0 = e.catch(2), console.log("handlePromotionByPositionId", e.t0);

              case 10:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 7 ] ]);
    })), _defineProperty(_sagas, _actionTypes.PROMOTION_INIT_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, a) {
        var n, o, s, _, i, c, l, p, u, d, y, P, f, R;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.payload, o = t.meta, s = t.__resolve, _ = t.__reject, i = r.put, c = r.call, 
                l = r.all, p = a.ReduxSaga, e.prev = 3, u = n.main, d = u.availableRelateKeyMap, 
                y = u.promotionCdnUrl, P = u.relateCdnUrl, e.next = 7, i({
                    type: _actionTypes.POSITION_RELATE_MAP_PUT,
                    payload: d
                });

              case 7:
                if (f = Promise.resolve(), R = Promise.resolve(), y) return e.next = 12, i({
                    type: _actionTypes.PROMOTION_INIT_JSON,
                    payload: y,
                    meta: {
                        isFetch: !0,
                        isLatest: !1
                    }
                });
                e.next = 13;
                break;

              case 12:
                f = e.sent;

              case 13:
                if (P) return e.next = 16, i({
                    type: _actionTypes.PROMOTION_INIT_JSON,
                    payload: P,
                    meta: {
                        isFetch: !0,
                        isLatest: !1
                    }
                });
                e.next = 17;
                break;

              case 16:
                R = e.sent;

              case 17:
                return e.next = 19, l([ f, R ]);

              case 19:
                return e.next = 21, c(s, n);

              case 21:
                return e.next = 23, p.delay(10);

              case 23:
                return e.next = 25, c(_sagaFetch.updateFetchDone, o.statusName);

              case 25:
                e.next = 32;
                break;

              case 27:
                return e.prev = 27, e.t0 = e.catch(3), e.next = 31, c(_, e.t0);

              case 31:
                console.error(e.t0);

              case 32:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 27 ] ]);
    })), _sagas)
};

exports.default = _default;