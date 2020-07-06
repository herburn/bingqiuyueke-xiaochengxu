Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _storage = require("./../../utils/storage.js"), _ramda = require("./../../vendor.js")(320);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, s, o) {
    try {
        var i = e[s](o), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(n, t, r, a, s, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                var l = this;
                this.$switchClassType = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, r, n, a, s, o, i, c, u;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = (0, _storage.getStorageSync)("appVisitDate"), r = (0, _moment.default)().format("YYYY-MM-DD"), 
                            t === r) throw "switchClassType:今天已经访问过";
                            e.next = 4;
                            break;

                          case 4:
                            if (n = l.$store.selectors, a = n.getLocationCity, s = n.getCities, o = n.getAppClassType, 
                            i = l.$store.getState(), c = a(i), u = o(i), "" === c && "onlineClass" !== u) return e.abrupt("return");
                            e.next = 10;
                            break;

                          case 10:
                            if ((0, _ramda.contains)(c, s(i)) || "onlineClass" === u) {
                                e.next = 19;
                                break;
                            }
                            return e.prev = 11, e.next = 14, l.$showModal({
                                title: "提示",
                                content: "当前定位城市 SUPERMONKEY 尚\n未入驻，是否体验线上课程？",
                                isShowCancel: !0,
                                cancelText: "继续逛逛",
                                confirmText: "立即体验"
                            });

                          case 14:
                            l.$store.dispatch(l.$store.actions.updateAppClassType("onlineClass")), e.next = 19;
                            break;

                          case 17:
                            e.prev = 17, e.t0 = e.catch(11);

                          case 19:
                            if ((0, _ramda.contains)(c, s(i)) && "onlineClass" === u) return e.prev = 20, e.next = 23, 
                            l.$showModal({
                                title: "提示",
                                content: "当前定位城市 SUPERMONKEY 已\n经入驻，是否体验线下课程？",
                                isShowCancel: !0,
                                cancelText: "继续逛逛",
                                confirmText: "立即体验"
                            });
                            e.next = 28;
                            break;

                          case 23:
                            l.$store.dispatch(l.$store.actions.updateAppClassType("offlineClass")), e.next = 28;
                            break;

                          case 26:
                            e.prev = 26, e.t1 = e.catch(20);

                          case 28:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 11, 17 ], [ 20, 26 ] ]);
                }));
            }
        });
    }
};

exports.default = _default;