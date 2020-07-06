Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _map = require("./../map/index.js");

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

var _default = _defineProperty({}, _actionTypes.CITY_LOCATION_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.prev = 0, e.t0 = _map.getCityByGeocoder, e.next = 4, (0, _map.getLocation)();

          case 4:
            return e.t1 = e.sent, e.next = 7, (0, e.t0)(e.t1);

          case 7:
            return r = e.sent, e.abrupt("return", {
                locationCity: r
            });

          case 11:
            throw e.prev = 11, e.t2 = e.catch(0), console.log("CITY_LOCATION_GET error", e.t2.rtn, e.t2.msg, e.t2.errMsg), 
            e.t2;

          case 15:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 0, 11 ] ]);
})));

exports.default = _default;