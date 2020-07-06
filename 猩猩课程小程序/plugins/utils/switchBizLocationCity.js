Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _ramda = require("./../../vendor.js")(320), _storage = require("./../../utils/storage.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, o, i) {
    try {
        var s = e[o](i), u = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, i);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                var c = this;
                this.$switchBizLocationCity = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, r, n, a, o, i, s, u;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = (0, _storage.getStorageSync)("appVisitDate"), r = (0, _moment.default)().format("YYYY-MM-DD"), 
                            t === r) throw "今天已经访问过";
                            e.next = 4;
                            break;

                          case 4:
                            if ((0, _storage.setStorage)({
                                key: "appVisitDate",
                                data: r
                            }), n = c.$store.selectors, a = n.getCurrentCity, o = n.getLocationCity, i = n.getCities, 
                            s = c.$store.getState(), u = o(s), (0, _ramda.contains)(u, i(s)) && u !== a(s)) return e.next = 11, 
                            c.$showModal({
                                title: " ",
                                content: "定位到您在".concat((0, _ramda.init)(u), "\n是否切换至该城市?"),
                                isShowCancel: !0,
                                cancelText: "取消",
                                confirmText: "切换"
                            });
                            e.next = 12;
                            break;

                          case 11:
                            c.$store.dispatch(c.$store.actions.updateCurrentCity(u));

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
            }
        });
    }
};

exports.default = _default;