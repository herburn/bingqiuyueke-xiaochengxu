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

var _default = _defineProperty({}, _actionTypes.MY_BOOKING_INFO_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxOrder/getBookingList2"), e.prev = 1, 
            t = {}, e.next = 5, _common.http.get({
                url: r,
                data: t
            });

          case 5:
            return n = e.sent, e.abrupt("return", n);

          case 9:
            throw e.prev = 9, e.t0 = e.catch(1), console.log("MY_BOOKING_INFO_GET error", e.t0.rtn, e.t0.msg, e.t0.errMsg), 
            e.t0;

          case 13:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 9 ] ]);
})));

exports.default = _default;