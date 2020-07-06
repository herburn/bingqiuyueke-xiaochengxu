Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, a, o, c) {
    try {
        var u = e[o](c), i = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? t(i) : Promise.resolve(i).then(r, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(t, n) {
            var r = u.apply(e, c);
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

function _default(e) {
    var o, u = e.storageKey;
    return {
        install: function(c) {
            return o = c, {
                track: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, n) {
                    var r, a, o;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if ("appHide" !== (r = n.event)) {
                                e.next = 14;
                                break;
                            }
                            if (a = c.loadData(), e.prev = 3, 0 < a.length) return e.next = 7, i(u, a);
                            e.next = 7;
                            break;

                          case 7:
                            e.next = 12;
                            break;

                          case 9:
                            e.prev = 9, e.t0 = e.catch(3), c.saveData(a);

                          case 12:
                            e.next = 24;
                            break;

                          case 14:
                            if ("appShow" === r) return e.prev = 15, e.next = 18, s(u);
                            e.next = 24;
                            break;

                          case 18:
                            (o = e.sent) && c.saveData(o), e.next = 24;
                            break;

                          case 22:
                            e.prev = 22, e.t1 = e.catch(15);

                          case 24:
                            t(n);

                          case 25:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 3, 9 ], [ 15, 22 ] ]);
                })), function(e, t) {
                    return n.apply(this, arguments);
                })
            };
            var n;
        }
    };
    function i(n, r) {
        return new Promise(function(e, t) {
            return wx.setStorage({
                key: n,
                data: r,
                success: function() {
                    o.log("设置统计数据缓存成功..."), e();
                },
                fail: function() {
                    o.error("设置统计数据缓存失败..."), t();
                }
            });
        });
    }
    function s(a) {
        return new Promise(function(r, t) {
            wx.getStorage({
                key: a,
                success: function(e) {
                    var n, t = e.data;
                    o.log("恢复缓存key: ".concat(a, " 成功"), t), n = a, new Promise(function(e, t) {
                        return wx.removeStorage({
                            key: n,
                            success: function() {
                                o.log("删除 ".concat(n, " cache 成功...")), e();
                            },
                            fail: function() {
                                o.error("删除 ".concat(n, " cache 失败...")), t();
                            }
                        });
                    }), r(t);
                },
                fail: function(e) {
                    o.error("恢复缓存 ".concat(a, " 失败"), e), t();
                }
            });
        });
    }
}