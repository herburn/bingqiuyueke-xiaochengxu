Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _WXPAY_ORDER_LIST_GET, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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
        var c = e[a](u), i = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(i) : Promise.resolve(i).then(n, o);
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

var _default = (_defineProperty(_WXPAY_ORDER_LIST_GET = {}, _actionTypes.WXPAY_ORDER_LIST_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.month, n = "".concat(_common.generalBase, "/wxInvoice/wxPayOrderList"), 
                e.prev = 2, o = {
                    month: t
                }, e.next = 6, _common.http.post({
                    url: n,
                    data: o
                });

              case 6:
                return a = e.sent, u = a.payList, c = a.nextMonth, e.abrupt("return", {
                    payList: u,
                    nextMonth: c
                });

              case 12:
                e.prev = 12, e.t0 = e.catch(2), console.error("e", e.t0);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 12 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_WXPAY_ORDER_LIST_GET, _actionTypes.WXPAY_ORDER_LIST_INVOICE_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c, i, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderType, n = r.pageNum, o = r.pageSize, a = "".concat(_common.generalBase, "/wxInvoice/wxPayOrderListInvoice"), 
                e.prev = 2, u = {
                    orderType: t,
                    pageNum: n,
                    pageSize: o,
                    isNeed: 1
                }, e.next = 6, _common.http.post({
                    url: a,
                    data: u
                });

              case 6:
                return c = e.sent, i = c.payList, s = c.taxpayerNumMap, e.abrupt("return", {
                    payList: i,
                    taxpayerNumMap: s,
                    orderType: t
                });

              case 12:
                e.prev = 12, e.t0 = e.catch(2), console.error("e", e.t0);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 12 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_WXPAY_ORDER_LIST_GET, _actionTypes.WXPAY_INVOICE_HISTORY_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.generalBase, "/wxInvoice/invoiceHistory"), e.prev = 1, 
            e.next = 4, _common.http.post({
                url: r,
                data: {
                    pageNum: 1,
                    pageSize: 200
                }
            });

          case 4:
            return t = e.sent, n = t.invoiceList, e.abrupt("return", {
                invoiceList: n
            });

          case 9:
            e.prev = 9, e.t0 = e.catch(1), console.error("e", e.t0);

          case 12:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 9 ] ]);
}))), _defineProperty(_WXPAY_ORDER_LIST_GET, _actionTypes.INVOICE_BLUE_SUBMIT, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u, c, i, s, p;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.orderType, n = r.invoiceOrderType, o = r.orderIds, a = r.money, u = r.taxNum, 
                c = r.sk, i = r.invoiceType, s = "".concat(_common.generalBase, "/wxInvoice/invoiceBlue"), 
                e.prev = 2, e.next = 5, _common.http.post({
                    url: s,
                    data: {
                        orderType: t,
                        invoiceOrderType: n,
                        orderIds: o,
                        money: a,
                        taxNum: u,
                        sk: c,
                        invoiceType: i
                    }
                });

              case 5:
                return p = e.sent, e.abrupt("return", p);

              case 9:
                e.prev = 9, e.t0 = e.catch(2), console.error("e", e.t0);

              case 12:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _WXPAY_ORDER_LIST_GET);

exports.default = _default;