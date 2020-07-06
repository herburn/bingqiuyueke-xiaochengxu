Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../../../vendor.js")(320)), _actionTypes = require("./../../../types/index.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        a.get || a.set ? Object.defineProperty(r, t, a) : r[t] = e[t];
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

var merge = R.merge, propOr = R.propOr, curryN = R.curryN, map = R.map, __ = R.__, getCampListFunc = curryN(2, function(e, r) {
    return map(propOr({}, __, e))(r);
}), _default = {
    namespace: [ "biz", "camp", "list", "box" ],
    state: {
        boxNameMap: {},
        camps: {}
    },
    actions: {
        getBoxCamps: [ _actionTypes.BOX_CAMP_LIST_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ]
    },
    reducers: (_defineProperty(_reducers = {}, _actionTypes.BOX_CAMPS_PUT, function(e, r) {
        var t = r.payload, a = t.boxId, o = t.boxCamps, n = t.allBoxCamps;
        return merge(e, {
            camps: _defineProperty({}, a, {
                boxCamps: o,
                allBoxCamps: n
            })
        });
    }), _defineProperty(_reducers, _actionTypes.BOX_NAME_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            boxNameMap: merge(e.boxNameMap, t)
        });
    }), _reducers),
    selectors: function(e) {
        return {
            getBoxCampNameByBoxId: function(e, r) {
                return e.biz.camp.list.box.boxNameMap[r];
            },
            getBoxCamps: (0, e.createSelector)(function(e) {
                return e.biz.camp.list.box.camps;
            }, (0, e.getSelector)("getCampSmallMap"), function(e, r) {
                return r;
            }, function(e, r, t) {
                var a = e[t] || {
                    boxCamps: [],
                    allBoxCamps: []
                }, o = a.allBoxCamps;
                return {
                    boxCamps: getCampListFunc(r, a.boxCamps),
                    allBoxCamps: getCampListFunc(r, o)
                };
            })
        };
    },
    sagas: _defineProperty({}, _actionTypes.BOX_CAMP_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, o, n, p, c, i, s, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.payload, o = r.requestPayload, n = t.put, p = a.boxName, c = a.boxCamps, 
                i = a.allBoxCamps, s = a.boxCampsSmallMap, u = a.allCampsSmallMap, e.next = 5, n({
                    type: _actionTypes.CAMPS_SMALL_PUT,
                    payload: _objectSpread({}, s, {}, u)
                });

              case 5:
                return e.next = 7, n({
                    type: _actionTypes.BOX_CAMPS_PUT,
                    payload: {
                        boxId: o.boxId,
                        boxCamps: c,
                        allBoxCamps: i
                    }
                });

              case 7:
                return e.next = 9, n({
                    type: _actionTypes.BOX_NAME_PUT,
                    payload: _defineProperty({}, o.boxId, p)
                });

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    }))
};

exports.default = _default;