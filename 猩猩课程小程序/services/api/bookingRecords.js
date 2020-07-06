Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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
        var i = e[a](u), c = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = i.apply(e, u);
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

var _default = _defineProperty({}, _actionTypes.BOOKING_RECORDS_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.month, n = void 0 === t ? "" : t, o = "".concat(_common.specialBase, "/wxOrder/getBookingListDetail2"), 
                e.prev = 2, a = {
                    month: n
                }, e.next = 6, _common.http.get({
                    url: o,
                    data: a
                });

              case 6:
                return u = e.sent, e.abrupt("return", u);

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("BOOKING_RECORDS_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
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
}());

exports.default = _default;