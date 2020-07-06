Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createProcessHandler;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _ramda = require("./../../../vendor.js")(320);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function asyncGeneratorStep(e, t, r, n, a, u, o) {
    try {
        var s = e[u](o), i = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(i) : Promise.resolve(i).then(n, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, u, "next", e);
            }
            function u(e) {
                asyncGeneratorStep(n, t, r, a, u, "throw", e);
            }
            a(void 0);
        });
    };
}

function createProcessHandler(e) {
    var t, r, n, a, u, o, s, i, c, p, f, d = e.config, l = e.dataHandler, _ = e.eventMap, g = e.responseRegionsIdMap, m = e.sensorTracesEventCapture, v = d.weId, b = l.getPagePath, y = l.getUserData, h = l.getReferrer, w = l.getOrderState, R = l.getIsSuperCard, x = l.getGeo, T = l.getUserGrade, G = l.getInviterUserId, O = l.getPageTitle, P = {
        getGeneralEventData: (f = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a, u;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return u = function(e) {
                        var t = e.event, r = e.data, n = _[t], a = n.eventName, u = n.schema, o = {};
                        if ("function" == typeof u) o = u({
                            data: r,
                            dataHandler: l
                        }); else for (var s in u) {
                            var i = u[s], c = i.name, p = i.handler;
                            o[c] = p({
                                data: r[s],
                                dataHandler: l
                            });
                        }
                        return {
                            event: a,
                            data: k(o)
                        };
                    }, r = t.event, n = t.data, a = u({
                        event: r,
                        data: void 0 === n ? {} : n
                    }), e.t0 = a.event, e.t1 = _objectSpread, e.t2 = {}, e.t3 = a.data, e.t4 = {}, e.next = 10, 
                    j();

                  case 10:
                    return e.t5 = e.sent, e.t6 = (0, e.t1)(e.t2, e.t3, e.t4, e.t5), e.abrupt("return", [ e.t0, e.t6 ]);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return f.apply(this, arguments);
        }),
        appLaunch: (p = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.data, e.t0 = r, e.next = 4, j();

                  case 4:
                    return e.t1 = e.sent, e.abrupt("return", [ "appLaunch", e.t0, e.t1 ]);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return p.apply(this, arguments);
        }),
        appShow: (c = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.data, e.t0 = r, e.next = 4, j();

                  case 4:
                    return e.t1 = e.sent, e.abrupt("return", [ "appShow", e.t0, e.t1 ]);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return c.apply(this, arguments);
        }),
        appHide: (i = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, j();

                  case 2:
                    return e.t0 = e.sent, e.abrupt("return", [ "appHide", e.t0 ]);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return i.apply(this, arguments);
        }),
        pageLoad: (s = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", null);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return s.apply(this, arguments);
        }),
        pageShow: (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = new Date().getTime(), e.abrupt("return", P.getGeneralEventData({
                        event: "viewScreen",
                        data: {
                            viewTime: 0
                        }
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return o.apply(this, arguments);
        }),
        pageHide: (u = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", P.getGeneralEventData({
                        event: "viewScreen",
                        data: {
                            viewTime: new Date().getTime() - t
                        }
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return u.apply(this, arguments);
        }),
        pageUnload: (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", null);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return a.apply(this, arguments);
        }),
        pageShareAppMessage: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a, u, o, s;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.data, n = r.from, a = r.params, u = a.path, o = a.title, "picture" === n) return e.next = 4, 
                    P.getGeneralEventData({
                        event: "share",
                        data: {
                            path: u,
                            title: o
                        }
                    });
                    e.next = 6;
                    break;

                  case 4:
                    return e.t0 = e.sent, e.abrupt("return", [ e.t0 ]);

                  case 6:
                    if (s = [], "menu" === n) return e.t1 = s, e.next = 11, P.getGeneralEventData({
                        event: "buttonClick",
                        data: {
                            buttonId: "1",
                            buttonName: "发送给朋友"
                        }
                    });
                    e.next = 13;
                    break;

                  case 11:
                    e.t2 = e.sent, e.t1.push.call(e.t1, e.t2);

                  case 13:
                    return e.t3 = s, e.next = 16, P.getGeneralEventData({
                        event: "share",
                        data: {
                            path: u,
                            title: o
                        }
                    });

                  case 16:
                    return e.t4 = e.sent, e.t3.push.call(e.t3, e.t4), e.abrupt("return", s);

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return n.apply(this, arguments);
        }),
        pageTabItemTap: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (r = t.data, -1 === h().indexOf("CourseList")) return e.abrupt("return", null);
                    e.next = 3;
                    break;

                  case 3:
                    return n = {
                        "门店": {
                            responseRegionId: g.TabBar.BOX_TAB_BAR,
                            dataset: {
                                buttonId: "5",
                                buttonName: "门店"
                            }
                        },
                        "我的预约": {
                            responseRegionId: g.TabBar.MY_BOOKING_TAB_BAR,
                            dataset: {
                                buttonId: "6",
                                buttonName: "我的预约"
                            }
                        },
                        "超猩卡": {
                            responseRegionId: g.TabBar.MY_TAB_BAR,
                            dataset: {
                                buttonId: "7",
                                buttonName: "超猩卡"
                            }
                        }
                    }, m(_objectSpread({
                        name: "TabBar",
                        type: "tap"
                    }, n[r.text])), e.abrupt("return", null);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return r.apply(this, arguments);
        })
    };
    return P;
    function j() {
        return S.apply(this, arguments);
    }
    function S() {
        return (S = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.t0 = k, e.t1 = _objectSpread, e.t2 = {
                        mini_program_name: v,
                        order_state: w(),
                        balance_status: R(),
                        user_grade: T(),
                        sm_user_id: y().userId,
                        inviter_user_id: G()
                    }, e.next = 5, x();

                  case 5:
                    return e.t3 = e.sent, e.t4 = {
                        url_path: b(),
                        page_title: O()
                    }, e.t5 = (0, e.t1)(e.t2, e.t3, e.t4), e.abrupt("return", (0, e.t0)(e.t5));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))).apply(this, arguments);
    }
    function k(e) {
        return (0, _ramda.map)(function(e) {
            return void 0 === e ? null : e;
        })(e);
    }
}