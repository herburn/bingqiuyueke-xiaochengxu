Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _api = require("./../../../services/api/index.js"), _createProcessHandler = _interopRequireDefault(require("./createProcessHandler.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, o, u) {
    try {
        var i = e[o](u), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, u);
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

function _default(e) {
    var o, u, i = e.type, c = e.weId, s = e.url, f = e.version, l = e.isTrackWXEvent;
    return {
        install: function(r) {
            return o = r, {
                init: function(e, t) {
                    o.log("初始化"), u = (0, _createProcessHandler.default)({
                        config: {
                            type: i,
                            weId: c,
                            version: f,
                            isTrackWXEvent: l
                        },
                        dataHandler: t
                    }), e(t);
                },
                start: function(e, t) {
                    o.log("开始"), r.track({
                        event: "appSystemInfo"
                    }), e(t);
                },
                stop: function(e, t) {
                    o.log("停止"), e(t);
                },
                track: (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, r) {
                    var n, a;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (o.log("track", r), (n = r.event) in u) return e.next = 5, u[n](r);
                            e.next = 8;
                            break;

                          case 5:
                            a = e.sent, e.next = 11;
                            break;

                          case 8:
                            return e.next = 10, u.getGeneralEventData(r);

                          case 10:
                            a = e.sent;

                          case 11:
                            t({
                                event: n,
                                data: a
                            });

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function(e, t) {
                    return a.apply(this, arguments);
                }),
                report: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, r) {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.t0 = _api.http, e.t1 = s, e.next = 4, u.getReportEnrichData(r);

                          case 4:
                            return e.t2 = e.sent, e.t3 = {
                                url: e.t1,
                                data: e.t2
                            }, e.next = 8, e.t0.post.call(e.t0, e.t3);

                          case 8:
                            t(r);

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function(e, t) {
                    return n.apply(this, arguments);
                })
            };
            var n, a;
        }
    };
}