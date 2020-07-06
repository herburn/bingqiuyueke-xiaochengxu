Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _BALANCE_RECORDS_GET$, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function asyncGeneratorStep(e, r, t, n, o, a, u) {
    try {
        var s = e[a](u), c = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? r(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = s.apply(e, u);
            function o(e) {
                asyncGeneratorStep(n, r, t, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, r, t, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var _default = (_defineProperty(_BALANCE_RECORDS_GET$ = {}, _actionTypes.BALANCE_RECORDS_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.pageNum, n = r.pageSize, o = "".concat(_common.specialBase, "/order/getSupermonkeyCardBalanceRecordList2"), 
                e.prev = 2, a = {
                    pageNum: t,
                    pageSize: n
                }, e.next = 6, _common.http.post({
                    url: o,
                    data: a
                });

              case 6:
                return u = e.sent, e.abrupt("return", u);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("BALANCE_RECORDS_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 10 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BALANCE_RECORDS_GET$, _actionTypes.CARD_RETURN_SUBMIT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, s, c, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.mainBusiness, n = r.reason, o = r.otherReason, a = r.appraise, u = r.suggestion, 
                s = "".concat(_common.specialBase, "/order/applyRefundSupermonkeyCard"), e.prev = 2, 
                c = {
                    mainBusiness: t,
                    reason: n,
                    otherReason: o,
                    appraise: a,
                    suggestion: u
                }, e.next = 6, _common.http.post({
                    url: s,
                    data: c
                });

              case 6:
                return i = e.sent, e.abrupt("return", i);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("CARD_RETURN_SUBMIT error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
                e.t0;

              case 14:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 10 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_BALANCE_RECORDS_GET$, _actionTypes.CARD_RETURN_CANCEL, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/order/cancelRefundApply"), e.prev = 1, 
            e.next = 4, _common.http.post({
                url: r
            });

          case 4:
            return t = e.sent, e.abrupt("return", t);

          case 8:
            throw e.prev = 8, e.t0 = e.catch(1), console.log("CARD_RETURN_CANCEL error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
            e.t0;

          case 12:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 8 ] ]);
}))), _defineProperty(_BALANCE_RECORDS_GET$, _actionTypes.OPTION_LIST_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/order/getOptionList"), e.prev = 1, e.next = 4, 
            _common.http.get({
                url: r
            });

          case 4:
            return t = e.sent, e.abrupt("return", t);

          case 8:
            throw e.prev = 8, e.t0 = e.catch(1), console.log("OPTION_LIST_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
            e.t0;

          case 12:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 8 ] ]);
}))), _BALANCE_RECORDS_GET$);

exports.default = _default;