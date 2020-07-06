Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, a, o, u) {
    try {
        var i = e[o](u), c = i.value;
    } catch (e) {
        return void n(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(r, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(t, n) {
            var r = i.apply(e, u);
            function a(e) {
                asyncGeneratorStep(r, t, n, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(r, t, n, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(u) {
        u.mixin({
            beforeCreate: function() {
                this.$requestPermission = function() {
                    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                        var a, n, o = this;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return a = t.auth, e.next = 3, u.getSetting();

                              case 3:
                                if (n = e.sent, !1 === n.authSetting[a]) return e.abrupt("return", new Promise(function(n, r) {
                                    var e;
                                    o.$showModal({
                                        title: "提示",
                                        content: "使用此功能需要开启授权",
                                        isShowCancel: !0,
                                        cancelText: "取消",
                                        confirmText: "去授权",
                                        success: (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                            var t;
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.next = 2, u.openSetting();

                                                  case 2:
                                                    t = e.sent, t.authSetting[a] ? n() : r(new Error("授权失败"));

                                                  case 5:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        })), function() {
                                            return e.apply(this, arguments);
                                        }),
                                        cancel: r
                                    });
                                }));
                                e.next = 7;
                                break;

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
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