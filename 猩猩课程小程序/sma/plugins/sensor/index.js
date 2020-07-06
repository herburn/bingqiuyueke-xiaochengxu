Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createSensorPlugin;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../../vendor.js")(315)), _ramda = require("./../../../vendor.js")(320), _createProcessHandler = _interopRequireDefault(require("./createProcessHandler.js")), _events = _interopRequireDefault(require("./events.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
}

function asyncGeneratorStep(e, r, t, n, a, o, s) {
    try {
        var u = e[o](s), i = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(i) : Promise.resolve(i).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, s = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, s);
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

var sensor = require("./sensorsdata.custom.min.js");

function createSensorPlugin(e) {
    var a, o, s = e.weId, u = e.url, i = e.debug, c = e.responseRegionsIdMap, l = e.sensorTracesEventCapture;
    return {
        install: function(e, r) {
            return r("updateUserData", function(e) {
                return sensor.setProfile(e);
            }), r("updateEventPublicData", function(e) {
                return sensor.registerApp(e);
            }), a = e, {
                init: function(e, r) {
                    a.log("初始化"), o = (0, _createProcessHandler.default)({
                        config: {
                            weId: s
                        },
                        dataHandler: r,
                        eventMap: _events.default,
                        responseRegionsIdMap: c,
                        sensorTracesEventCapture: l
                    }), sensor.setPara({
                        server_url: u,
                        show_log: i
                    }), sensor.setProfile({
                        latest_visit_time: (0, _moment.default)().format("YYYY-MM-DD HH:mm:ss.SSS")
                    }), e(r);
                },
                start: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                    var n;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n = function(e) {
                                var r = e.openid, t = e.userId;
                                try {
                                    r && (sensor.setOpenid(r), sensor.setProfile({
                                        booking_open_id: r
                                    })), t && sensor.login(t);
                                } catch (e) {
                                    a.error("sensor bindUserInfo", e);
                                }
                            }, a.log("开始"), n(t), sensor.init(), r(t);

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function(e, r) {
                    return n.apply(this, arguments);
                }),
                track: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                    var n, a;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (n = t.event, (0, _ramda.contains)(n, [ "appLaunch", "appShow", "appHide" ])) return e.t0 = sensor.quick, 
                            e.t1 = sensor, e.t2 = _toConsumableArray, e.next = 7, o[n](t);
                            e.next = 12;
                            break;

                          case 7:
                            e.t3 = e.sent, e.t4 = (0, e.t2)(e.t3), e.t0.apply.call(e.t0, e.t1, e.t4), e.next = 35;
                            break;

                          case 12:
                            if ("pageShareAppMessage" === n) return e.next = 15, o[n](t);
                            e.next = 19;
                            break;

                          case 15:
                            e.sent.forEach(function(e) {
                                return sensor.track.apply(sensor, _toConsumableArray(e));
                            }), e.next = 35;
                            break;

                          case 19:
                            if (n in o) return e.next = 22, o[n](t);
                            e.next = 26;
                            break;

                          case 22:
                            (a = e.sent) && sensor.track.apply(sensor, _toConsumableArray(a)), e.next = 35;
                            break;

                          case 26:
                            if (n in _events.default) return e.t5 = sensor.track, e.t6 = sensor, e.t7 = _toConsumableArray, 
                            e.next = 32, o.getGeneralEventData(t);
                            e.next = 35;
                            break;

                          case 32:
                            e.t8 = e.sent, e.t9 = (0, e.t7)(e.t8), e.t5.apply.call(e.t5, e.t6, e.t9);

                          case 35:
                            r(t);

                          case 36:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function(e, r) {
                    return t.apply(this, arguments);
                })
            };
            var t, n;
        }
    };
}