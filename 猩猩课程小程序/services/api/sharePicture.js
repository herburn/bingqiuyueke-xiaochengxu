Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _md = _interopRequireDefault(require("./../../vendor.js")(327)), _common = require("./common.js");

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

function asyncGeneratorStep(e, r, t, n, a, o, u) {
    try {
        var c = e[o](u), i = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(i) : Promise.resolve(i).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, u);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = _defineProperty({}, _actionTypes.PICTURE_SHARE_URL_GET, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, a, o, u, c, i, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.page, n = r.title, a = r.backgroundImageUrl, o = r.type, u = r.address, 
                c = "".concat(_common.specialBase, "/waRedirect/share"), e.prev = 2, e.next = 5, 
                _common.http.get({
                    url: c,
                    data: {
                        page: t,
                        title: n,
                        backgroundImageUrl: a,
                        type: o,
                        address: u,
                        key: (0, _md.default)("AA".concat(t).concat(n).concat(a).concat(o, "ZZ"))
                    }
                });

              case 5:
                return i = e.sent, s = i.sharePostUrl, e.abrupt("return", {
                    sharePostUrl: s
                });

              case 10:
                throw e.prev = 10, e.t0 = e.catch(2), console.log("PICTURE_SHARE_URL_GET error", e.t0.rtn, e.t0.msg), 
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