Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../vendor.js")(322)), _actionTypes = require("./../../../types/index.js"), _selectors = require("./selectors.js");

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
    namespace: [ "biz", "class", "detail" ],
    actions: {
        fetchClassDetail: [ _actionTypes.FETCH_CLASS_DETAIL, function(e) {
            return {
                scheduleId: e.scheduleId,
                sk: e.sk
            };
        }, function() {
            return {
                isPromise: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        detailMap: {}
    }),
    reducers: _defineProperty({}, _actionTypes.CLASS_DETAIL_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            detailMap: merge(e.detailMap, r, {
                deep: !0
            })
        });
    }),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.FETCH_CLASS_DETAIL, _regeneratorRuntime2.default.mark(function e(t, r, a) {
        var s, n, u, i, l, o, c, _, d, p, f;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = t.payload, n = s.scheduleId, u = s.sk, i = t.__resolve, l = r.put, o = r.call, 
                c = r.select, _ = a.getSelector, d = _("getClassDetailMap"), e.next = 6, c(d);

              case 6:
                return p = e.sent, e.next = 9, l({
                    type: _actionTypes.CLASS_DETAIL_GET,
                    payload: {
                        scheduleId: n,
                        sk: u
                    },
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        isPromise: {
                            success: !0
                        },
                        statusName: "classDetailStatus"
                    }
                });

              case 9:
                if (f = e.sent, n in p) return e.next = 13, o(i, !0);
                e.next = 15;
                break;

              case 13:
                e.next = 17;
                break;

              case 15:
                return e.next = 17, o(i, f);

              case 17:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_DETAIL_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var a, s, n, u, i, l, o, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.requestPayload.scheduleId, s = t.payload, n = t.__resolve, u = r.put, 
                i = r.call, l = s.priceMap, o = s.notes, c = s.waitingCount, e.next = 5, u({
                    type: _actionTypes.CLASS_PRICE_MAP_PUT,
                    payload: {
                        entities: l
                    }
                });

              case 5:
                return e.next = 7, u({
                    type: _actionTypes.CLASS_DETAIL_PUT,
                    payload: _defineProperty({}, a, {
                        notes: o,
                        waitingCount: c
                    })
                });

              case 7:
                return e.next = 9, i(n, !0);

              case 9:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function(e) {
        var t = e.getSelector, r = e.createSelectorCreator;
        return {
            getClassDetailMap: function(e) {
                return e.biz.class.detail.detailMap;
            },
            getClassDetail: (0, _selectors.getClassScheduleByIdCreator)({
                getSelector: t,
                createSelectorCreator: r
            })
        };
    }
};

exports.default = _default;