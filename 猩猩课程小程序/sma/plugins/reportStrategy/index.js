Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, exports.sleep = sleep;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, a, u, o) {
    try {
        var i = e[u](o), c = i.value;
    } catch (e) {
        return void n(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(r, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, n) {
            var r = i.apply(e, o);
            function a(e) {
                asyncGeneratorStep(r, t, n, a, u, "next", e);
            }
            function u(e) {
                asyncGeneratorStep(r, t, n, a, u, "throw", e);
            }
            a(void 0);
        });
    };
}

function _default(e) {
    var c, s = e.netWorkBlackList, f = e.opportunity, p = e.intervalTime, l = e.maxReportNum;
    return s.push("none"), {
        install: function(a) {
            var n, r = null, u = !1;
            return {
                init: function(e, t) {
                    c = t.getNetworkType, e(t);
                },
                start: function(e, t) {
                    u = !0, "timing" === f && (r = function() {
                        return o.apply(this, arguments);
                    }()), e(t);
                },
                stop: function(e, t) {
                    u = !1, "timing" === f && (r && r.cancel(), r = null), e(t);
                },
                track: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, n) {
                    var r;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (r = n.event, f === r || "realTime" === f) return e.next = 4, i();
                            e.next = 4;
                            break;

                          case 4:
                            t(n);

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function(e, t) {
                    return n.apply(this, arguments);
                })
            };
            function o() {
                return (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, n, r;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = function() {
                                return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                    return _regeneratorRuntime2.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            if (t) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.next = 3, sleep(1e3 * p);

                                          case 3:
                                            i(), e.next = 0;
                                            break;

                                          case 6:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }))).apply(this, arguments);
                            }, t = !(n = function() {
                                return r.apply(this, arguments);
                            }), n(), e.abrupt("return", function() {
                                return t = !0;
                            });

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            function i() {
                return e.apply(this, arguments);
            }
            function e() {
                return (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, n, r;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = function() {
                                return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                    return _regeneratorRuntime2.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.t0 = s, e.next = 3, c();

                                          case 3:
                                            return e.t1 = e.sent, e.t2 = e.t0.indexOf.call(e.t0, e.t1), e.t3 = -1, e.abrupt("return", e.t2 === e.t3);

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }))).apply(this, arguments);
                            }, n = function() {
                                return r.apply(this, arguments);
                            }, e.next = 4, n();

                          case 4:
                            if (e.t0 = e.sent, !e.t0) {
                                e.next = 7;
                                break;
                            }
                            e.t0 = u;

                          case 7:
                            if (!e.t0) {
                                e.next = 22;
                                break;
                            }
                            t = a.loadData(l);

                          case 9:
                            if (0 < t.length) return e.prev = 10, e.next = 13, a.report(t);
                            e.next = 22;
                            break;

                          case 13:
                            t = a.loadData(l), e.next = 20;
                            break;

                          case 16:
                            return e.prev = 16, e.t1 = e.catch(10), a.saveData(t), e.abrupt("break", 22);

                          case 20:
                            e.next = 9;
                            break;

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 10, 16 ] ]);
                }))).apply(this, arguments);
            }
        }
    };
}

function sleep(t) {
    return new Promise(function(e) {
        setTimeout(function() {
            e(t);
        }, t);
    });
}