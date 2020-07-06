Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _initInfo = _interopRequireDefault(require("./../../models/initInfo.js")), _model = require("./../../utils/model.js"), _common = require("./common.js");

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
        var i = e[a](u), s = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(s) : Promise.resolve(s).then(n, o);
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

var _default = _defineProperty({}, _actionTypes.INIT_INFO, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r, t, n = arguments;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = 0 < n.length && void 0 !== n[0] ? n[0] : {}, t = "".concat(_common.specialBase, "/wxUser/initWeappUserInfo"), 
            e.prev = 2, e.t0 = (0, _model.copyModel)(_initInfo.default), e.next = 6, _common.http.get({
                url: t,
                data: r
            });

          case 6:
            return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));

          case 10:
            throw e.prev = 10, e.t2 = e.catch(2), console.log("INIT_INFO error", e.t2.rtn, e.t2.msg, e.t2.errMsg), 
            e.t2;

          case 14:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 2, 10 ] ]);
})));

exports.default = _default;