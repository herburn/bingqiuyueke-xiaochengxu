Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _ramda = require("./../../../../../vendor.js")(320), _actionTypes = require("./../../../../types/index.js"), _moment = _interopRequireDefault(require("./../../../../../vendor.js")(315)), _calendar = require("./../../../../../utils/calendar.js");

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

var _default = {
    namespace: [ "biz", "class", "booking", "success" ],
    actions: {
        getClassBookingSuccess: [ _actionTypes.CLASS_BOOKING_SUCCESS_GET, function(e) {
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
        } ]
    },
    state: (0, _seamlessImmutable.default)({}),
    reducers: _defineProperty({}, _actionTypes.CLASS_BOOKING_SUCCESS_PUT, function(e, t) {
        var r = t.payload;
        return (0, _seamlessImmutable.default)(r);
    }),
    sagas: _defineProperty({}, _actionTypes.CLASS_BOOKING_SUCCESS_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var n, o, a, i, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.requestPayload.orderId, o = t.payload, a = t.__resolve, i = r.put, 
                s = r.call, e.next = 4, i({
                    type: _actionTypes.CLASS_BOOKING_SUCCESS_PUT,
                    payload: _objectSpread({}, o, {
                        orderId: n
                    })
                });

              case 4:
                return e.next = 6, s(a, o);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function(e) {
        return {
            getClassBookingSuccessInfo: (0, e.createSelector)(function(e) {
                return e.biz.class.booking.success;
            }, function(e) {
                if ((0, _ramda.isEmpty)(e)) return {
                    detail: {},
                    waitingCount: 0,
                    headerContent: ""
                };
                return {
                    detail: {
                        face: (a = e).bookingListShow.face,
                        name: a.bookingListShow.trainerStageName,
                        chatSessionId: a.customerServiceScheduleId,
                        tipUrl: a.tipUrl,
                        isFirstBookingClass: a.isFirstBookingClass,
                        note: a.note,
                        className: a.bookingListShow.className,
                        boxName: a.bookingListShow.boxName,
                        time: (i = a.bookingListShow.startTime, s = a.bookingListShow.endTime, c = (0, _moment.default)(i), 
                        u = (0, _moment.default)(s), l = c.format("MM月DD日"), d = (0, _calendar.getWeekDayCN)(i, 2), 
                        "".concat(l, " ").concat(d).concat(c.format("HH:mm"), "-").concat(u.format("HH:mm"))),
                        firstTypeId: a.bookingListShow.firstTypeId
                    },
                    waitingCount: e.waitingCount,
                    headerContent: (r = (t = e).waitingCount, n = t.waitingOrder, o = t.entryPassword, 
                    0 < r ? "当前等候".concat(r, "人，你是第").concat(n, "位哟！") : o)
                };
                var t, r, n, o, a, i, s, c, u, l, d;
            })
        };
    }
};

exports.default = _default;