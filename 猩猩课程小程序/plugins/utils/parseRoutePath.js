Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _router = require("./../../router/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, u, o) {
    try {
        var i = e[u](o), s = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(r, t) {
            var n = i.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, u, "next", e);
            }
            function u(e) {
                asyncGeneratorStep(n, r, t, a, u, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$parseRoutePath = function() {
                    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ((t = (0, _router.decodeParams)(r)).url in _router.router.tabPageMap) return e.next = 4, 
                                _router.router.switchTab({
                                    page: t.url,
                                    data: t
                                });
                                e.next = 6;
                                break;

                              case 4:
                                e.next = 8;
                                break;

                              case 6:
                                return e.next = 8, _router.router.navigateTo({
                                    page: t.url,
                                    data: t
                                });

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                }();
            }
        });
    }
};

exports.default = _default;