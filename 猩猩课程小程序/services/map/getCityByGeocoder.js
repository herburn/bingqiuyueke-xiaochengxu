Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = getCityByGeocoder;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _ramda = require("./../../vendor.js")(320), _getGeo = _interopRequireDefault(require("./getGeo.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, u, a) {
    try {
        var i = e[u](a), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, u, "next", e);
            }
            function u(e) {
                asyncGeneratorStep(n, t, r, o, u, "throw", e);
            }
            o(void 0);
        });
    };
}

function getCityByGeocoder(e) {
    return _getCityByGeocoder.apply(this, arguments);
}

function _getCityByGeocoder() {
    return (_getCityByGeocoder = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = function(e) {
                    var t = e.province, r = e.city;
                    return "市" === (0, _ramda.last)(t) ? t : r;
                }, e.t0 = r, e.next = 4, (0, _getGeo.default)(t);

              case 4:
                return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}