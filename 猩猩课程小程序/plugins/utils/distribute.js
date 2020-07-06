Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _ramda = require("./../../vendor.js")(320), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, a, n, o, i) {
    try {
        var u = e[o](i), s = u.value;
    } catch (e) {
        return void r(e);
    }
    u.done ? t(s) : Promise.resolve(s).then(a, n);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, r) {
            var a = u.apply(e, i);
            function n(e) {
                asyncGeneratorStep(a, t, r, n, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(a, t, r, n, o, "throw", e);
            }
            n(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$distribute = distribute;
            }
        });
    }
};

exports.default = _default;

var defaultShowText = function(e) {
    return "正在抢位中".concat(e, "%");
}, frameRate1 = 20, frameRate2 = 11;

function distribute() {
    return _distribute.apply(this, arguments);
}

function _distribute() {
    return (_distribute = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        var t, r, a, n, o, i, u, s, f, c, d, l, m, h, p, _, v, x = this, b = arguments;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (v = function(e) {
                    return (0, _ramda.any)(function(e) {
                        var t = (0, _moment.default)().isoWeekday(e).hour(22).minute(25), r = (0, _moment.default)().isoWeekday(e).hour(23).minute(0), a = (0, 
                        _moment.default)();
                        return t <= a && a <= r;
                    })(e);
                }, r = (t = 0 < b.length && void 0 !== b[0] ? b[0] : {}).fixedTime, a = void 0 === r ? [ 1e3, 88 ] : r, 
                n = t.randomTime, o = void 0 === n ? [ 4e3, 99 ] : n, i = t.showText, u = void 0 === i ? defaultShowText : i, 
                s = t.showLoading, f = void 0 === s ? function(e) {
                    return x.$showLoading(e);
                } : s, !v([ 5 ])) {
                    e.next = 34;
                    break;
                }
                if (!(0 < a[0])) {
                    e.next = 18;
                    break;
                }
                c = a[1] / frameRate1, d = a[0] / frameRate1, l = 0;

              case 8:
                if (!(l < frameRate1)) {
                    e.next = 17;
                    break;
                }
                if (this.$pageState === _constants.PageState.UNLOAD) return e.abrupt("return");
                e.next = 11;
                break;

              case 11:
                return f(u(Math.floor(c * l))), e.next = 14, this.$sleep(Math.floor(d));

              case 14:
                l++, e.next = 8;
                break;

              case 17:
                f(u(Math.floor(a[1])));

              case 18:
                if (!(0 < o[0])) {
                    e.next = 33;
                    break;
                }
                m = Math.random() * o[0], h = (o[1] - a[1]) / frameRate2, p = m / frameRate2, _ = 0;

              case 23:
                if (!(_ < frameRate2)) {
                    e.next = 32;
                    break;
                }
                if (this.$pageState === _constants.PageState.UNLOAD) return e.abrupt("return");
                e.next = 26;
                break;

              case 26:
                return e.next = 28, this.$sleep(Math.floor(p));

              case 28:
                f(u(Math.floor(a[1] + h * (_ + 1))));

              case 29:
                _++, e.next = 23;
                break;

              case 32:
                f(u(Math.floor(o[1])));

              case 33:
                return e.abrupt("return", u(100));

              case 34:
              case "end":
                return e.stop();
            }
        }, e, this);
    }))).apply(this, arguments);
}