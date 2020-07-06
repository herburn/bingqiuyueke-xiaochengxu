Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _moment = _interopRequireDefault(require("./../../../../../vendor.js")(315)), _actionTypes = require("./../../../../types/index.js"), _selectors = require("./selectors.js");

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
    namespace: [ "biz", "class", "booking", "detail" ],
    actions: {
        fetchClassBookingDetail: [ _actionTypes.FETCH_CLASS_BOOKING_DETAIL, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isPromise: !0
            };
        } ],
        getClassBookingDetail: [ _actionTypes.CLASS_BOOKING_DETAIL_GET, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                isPromise: {
                    success: !0
                }
            };
        } ],
        getClassBookingRefund: [ _actionTypes.CLASS_BOOKING_REFUND_GET, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ],
        postClassBookingRefund: [ _actionTypes.CLASS_BOOKING_REFUND_POST, function(e) {
            return {
                orderId: e.orderId
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ],
        getClassEvaluationDetail: [ _actionTypes.CLASS_EVALUATION_GET, void 0, function() {
            return {
                isFetch: !0
            };
        } ],
        submitClassEvaluation: [ _actionTypes.CLASS_EVALUATION_POST, void 0, function() {
            return {
                isFetch: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        detailMap: {}
    }),
    reducers: _defineProperty({}, _actionTypes.CLASS_BOOKING_DETAIL_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            detailMap: merge(e.detailMap, r, {
                deep: !0
            })
        });
    }),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.FETCH_CLASS_BOOKING_DETAIL, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, s, o, i, u, l, c, _, d, f, p, g;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return g = function(e) {
                    var t = e.endTime;
                    return (0, _moment.default)().subtract(3, "M").isAfter(t, "day");
                }, a = t.payload, s = t.__resolve, o = r.put, i = r.call, u = r.select, l = n.actions, 
                c = n.getSelector, _ = a.orderId, e.next = 7, u(c("getClassBookingDetailMap"));

              case 7:
                return d = e.sent, e.next = 10, u(c("getScheduleMap"));

              case 10:
                if (f = e.sent, _ in d && g(f[d[_].booking.scheduleId])) return e.next = 14, i(s, !0);
                e.next = 16;
                break;

              case 14:
                e.next = 21;
                break;

              case 16:
                return e.next = 18, o(l.getClassBookingDetail({
                    orderId: _
                }));

              case 18:
                return p = e.sent, e.next = 21, i(s, p);

              case 21:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_BOOKING_DETAIL_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var n, a, s, o, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.requestPayload.orderId, a = t.payload, s = t.__resolve, o = r.put, 
                i = r.call, e.next = 4, o({
                    type: _actionTypes.CLASS_BOOKING_DETAIL_PUT,
                    payload: _defineProperty({}, n, a)
                });

              case 4:
                return e.next = 6, i(s, !0);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function(e) {
        var t = e.getSelector, r = e.createSelector;
        return {
            getClassBookingDetailMap: function(e) {
                return e.biz.class.booking.detail.detailMap;
            },
            getClassBookingDetailInfo: (0, _selectors.getClassBookingDetailInfoCreator)({
                getSelector: t,
                createSelector: r
            })
        };
    }
};

exports.default = _default;