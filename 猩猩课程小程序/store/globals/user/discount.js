Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _ramda = require("./../../../vendor.js")(320), _extraR = require("./../../../utils/extraR.js"), _actionTypes = require("./../../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "globals", "user", "discount" ],
    state: (0, _seamlessImmutable.default)({
        totalBalance: -1,
        balanceStatus: -1,
        boxBookingInMorningDiscount: -1,
        boxSupermonkeyCardDiscount: -1
    }),
    reducers: _defineProperty({}, _actionTypes.USER_DISCOUNT_INFO_PUT, function(e, a) {
        var t = a.payload;
        return merge(e, t);
    }),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.MY_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "balance", "balanceStatus" ]), (0, 
                    _extraR.renameKeys)({
                        balance: "totalBalance"
                    }))(r)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.RECHARGE_CONFIRM_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.BOX_BOOKING_CONFIRM_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r.main)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_BOOKING_CONFIRM_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CAMP_BOOKING_CONFIRM_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.PERSONAL_BOOKING_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r.bookingInfo)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.GIVE_CLASS_CONFIRM_INFO_GET, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "totalBalance", "balanceStatus" ]))(r)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.SUPER_RANK_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = a.payload, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: (0, _ramda.pipe)((0, _ramda.pick)([ "balance", "balanceStatus" ]), (0, 
                    _extraR.renameKeys)({
                        balance: "totalBalance"
                    }))(r.myRank)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function(e) {
        var t = (0, e.getSelector)("getDisCountInfo");
        return {
            getDisCountInfo: function(e) {
                return e.globals.user.discount;
            },
            getIsSuperCard: function(e) {
                var a = t(e).balanceStatus;
                return (0, _ramda.contains)(a)([ 11, 30 ]);
            },
            getIsSuperCardFrozen: function(e) {
                return 30 === t(e).balanceStatus;
            }
        };
    }
};

exports.default = _default;