Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _VIP_DETAIL_INFO_GET$, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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

var _default = (_defineProperty(_VIP_DETAIL_INFO_GET$ = {}, _actionTypes.VIP_DETAIL_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/vip/my"), e.prev = 1, e.next = 4, _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, o = n.main, e.abrupt("return", o);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(1), console.log("VIP_DETAIL_INFO_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _defineProperty(_VIP_DETAIL_INFO_GET$, _actionTypes.SUPER_CHANGE_RECORDS_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = "".concat(_common.specialBase, "/vip/task/detail"), e.prev = 1, e.next = 4, 
                _common.http.get({
                    url: t,
                    data: r
                });

              case 4:
                return n = e.sent, o = n.vipTaskDetailList, e.abrupt("return", {
                    records: o
                });

              case 9:
                throw e.prev = 9, e.t0 = e.catch(1), console.log("VIP_DETAIL_INFO_GET error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _VIP_DETAIL_INFO_GET$);

exports.default = _default;