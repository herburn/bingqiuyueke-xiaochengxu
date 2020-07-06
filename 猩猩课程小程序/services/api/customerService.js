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

var _default = _defineProperty({}, _actionTypes.MESSAGE_INFO_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.msgId, n = r.sk, o = "".concat(_common.specialBase, "/message/getMsg"), 
                e.prev = 2, e.next = 5, _common.http.get({
                    url: o,
                    data: {
                        msgId: t,
                        sk: n
                    }
                });

              case 5:
                return a = e.sent, e.abrupt("return", a);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("MESSAGE_INFO_GET err", e.t0), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}());

exports.default = _default;