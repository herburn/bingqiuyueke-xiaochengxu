Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _actionTypes = require("./../../../../types/index.js"), _selectors = require("./selectors.js");

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
    namespace: [ "biz", "class", "booking", "confirm" ],
    actions: {
        getClassBookingConfirm: [ _actionTypes.CLASS_BOOKING_CONFIRM_GET, function(e) {
            return {
                scheduleId: e.scheduleId,
                sk: e.sk
            };
        }, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                isPromise: {
                    success: !0
                },
                statusName: "classBookingConfirmStatus"
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        scheduleId: -1,
        bookingCountLimitMsg: "",
        bookingPeopleAvailableCount: -1,
        boxId: -1,
        enterConfirmDialog: null,
        confirmDialog: null,
        expireRefundHours: -1,
        firstBooking: !1,
        firstBookingPrice: -1,
        isBookingedSchedule: !1,
        isNeedBindPhonenumber: !1,
        price: -1,
        privilegeList: [],
        privilegePriceMap: [],
        supermonkeyCardPrice: -1,
        ticketList: [],
        totalBalance: -1,
        scoutNote: "",
        waitingConfirm: !1,
        isWaiting: !1,
        waitingCount: 0
    }),
    reducers: _defineProperty({}, _actionTypes.CLASS_BOOKING_CONFIRM_PUT, function(e, t) {
        var r = t.payload;
        return (0, _seamlessImmutable.default)(r);
    }),
    sagas: _defineProperty({}, _actionTypes.CLASS_BOOKING_CONFIRM_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var o, n, i, s, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = t.requestPayload.scheduleId, n = t.payload, i = t.__resolve, s = r.put, 
                a = r.call, e.next = 4, s({
                    type: _actionTypes.CLASS_BOOKING_CONFIRM_PUT,
                    payload: _objectSpread({}, n, {
                        scheduleId: o
                    })
                });

              case 4:
                return e.next = 6, a(i, !0);

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function(e) {
        var t = e.getSelector, r = e.createSelector;
        return {
            getClassBookingConfirmInfo: (0, _selectors.getClassBookingConfirmInfoCreator)({
                getSelector: t,
                createSelector: r
            })
        };
    }
};

exports.default = _default;