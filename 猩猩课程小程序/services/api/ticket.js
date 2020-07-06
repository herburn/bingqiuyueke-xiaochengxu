Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _MY_TICKETS_GET$INVAL, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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
        var c = e[a](u), s = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(s) : Promise.resolve(s).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, u);
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

var _default = (_defineProperty(_MY_TICKETS_GET$INVAL = {}, _actionTypes.MY_TICKETS_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxUser/getUserTicketList"), e.prev = 1, 
            e.next = 4, _common.http.get({
                url: r
            });

          case 4:
            return e.abrupt("return", e.sent);

          case 7:
            throw e.prev = 7, e.t0 = e.catch(1), console.log("MY_TICKET_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 11:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 7 ] ]);
}))), _defineProperty(_MY_TICKETS_GET$INVAL, _actionTypes.INVALID_TICKETS_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxUser/getUserExpireTicketList"), e.prev = 1, 
            e.next = 4, _common.http.get({
                url: r
            });

          case 4:
            return e.abrupt("return", e.sent);

          case 7:
            throw e.prev = 7, e.t0 = e.catch(1), console.log("EXPIRE_TICKET_LIST_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 11:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 7 ] ]);
}))), _defineProperty(_MY_TICKETS_GET$INVAL, _actionTypes.EXCHANGE_TICKET_CODE_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/pay/useTicket2"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return e.abrupt("return", e.sent);

              case 7:
                throw e.prev = 7, e.t0 = e.catch(1), console.log("EXCHANGE_TICKET_CODE_POST error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 11:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 7 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _MY_TICKETS_GET$INVAL);

exports.default = _default;