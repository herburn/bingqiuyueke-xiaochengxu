Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = clickBehavior;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../vendor.js")(0)), _triggerBehavior = require("./triggerBehavior.js"), _constants = require("./../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, i, o) {
    try {
        var c = e[i](o), u = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, r, t, a, i, "throw", e);
            }
            a(void 0);
        });
    };
}

function clickBehavior(e) {
    return _clickBehavior.apply(this, arguments);
}

function _clickBehavior() {
    return (_clickBehavior = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                e.t0 = r.navigateType, e.next = e.t0 === _constants.positionNavigateType.INNER ? 3 : e.t0 === _constants.positionNavigateType.OUTER ? 6 : e.t0 === _constants.positionNavigateType.IMG ? 9 : 12;
                break;

              case 3:
                return e.next = 5, (0, _triggerBehavior.navigate)(r);

              case 5:
                return e.abrupt("break", 13);

              case 6:
                return e.next = 8, (0, _triggerBehavior.navigateToMiniProgram)(r);

              case 8:
                return e.abrupt("break", 13);

              case 9:
                return e.next = 11, (0, _triggerBehavior.previewImage)({
                    urlList: [ r.navigateURL ]
                });

              case 11:
                return e.abrupt("break", 13);

              case 12:
                throw new Error("type类型不符合要求：".concat(r.navigateType));

              case 13:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}