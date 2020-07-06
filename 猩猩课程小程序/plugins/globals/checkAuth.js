Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, u, a, o) {
    try {
        var i = e[a](o), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, u);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, o);
            function u(e) {
                asyncGeneratorStep(n, t, r, u, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, t, r, u, a, "throw", e);
            }
            u(void 0);
        });
    };
}

var _default = {
    install: function(a) {
        a.mixin({
            beforeCreate: function() {
                this.$checkAuth = function() {
                    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                        var r, n, u;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return r = t.auth, e.prev = 1, e.next = 4, a.getSetting();

                              case 4:
                                if (n = e.sent, u = n.authSetting, r in u) {
                                    e.next = 8;
                                    break;
                                }
                                return e.abrupt("return", -1);

                              case 8:
                                return e.abrupt("return", u[r] ? 1 : 0);

                              case 11:
                                return e.prev = 11, e.t0 = e.catch(1), e.abrupt("return", 500);

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 1, 11 ] ]);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }();
            }
        });
    }
};

exports.default = _default;