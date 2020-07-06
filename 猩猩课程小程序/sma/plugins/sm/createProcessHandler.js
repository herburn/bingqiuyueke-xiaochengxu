Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createProcessEvent;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, t) {
    var r = [], n = !0, a = !1, u = void 0;
    try {
        for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), 
        !t || r.length !== t); n = !0) ;
    } catch (e) {
        a = !0, u = e;
    } finally {
        try {
            n || null == c.return || c.return();
        } finally {
            if (a) throw u;
        }
    }
    return r;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
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
        var c = e[u](o), s = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = c.apply(e, o);
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

function createProcessEvent(e) {
    var r, n, t, a, u, o, c, s, i, p, f, d, l, y, _, b, g, m = e.config, h = e.dataHandler, w = m.isTrackWXEvent, x = h.getCurrentTimeUTC, v = h.getPagePath, R = h.getUserData, k = h.getReferrer, S = h.getSystemInfo, T = h.getNetworkType, j = h.getTimezoneOffset, P = h.getLifeCycleId, G = h.getLocation, O = h.getScene, I = h.getExtParam;
    return {
        getReportEnrichData: (g = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = m.type, n = m.weId, a = m.version, e.abrupt("return", _objectSpread({
                        type: r,
                        weId: n
                    }, R(), {
                        version: a,
                        logs: t
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return g.apply(this, arguments);
        }),
        getGeneralEventData: (b = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.event, n = t.responseRegionId, a = t.data, e.t0 = _objectSpread, e.t1 = {
                        responseRegionId: n,
                        data: a
                    }, e.next = 5, D(r);

                  case 5:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return b.apply(this, arguments);
        }),
        appLaunch: (_ = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {
                        data: t.data
                    }, e.next = 6, D("appLaunch");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return _.apply(this, arguments);
        }),
        appShow: (y = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return r = x(), e.t0 = _objectSpread, e.t1 = {
                        data: t.data
                    }, e.next = 7, D("appShow");

                  case 7:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return y.apply(this, arguments);
        }),
        appHide: (l = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {
                        data: {
                            duration: x() - r
                        }
                    }, e.next = 6, D("appHide");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return l.apply(this, arguments);
        }),
        pageLoad: (d = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {
                        data: t.data
                    }, e.next = 6, D("pageLoad");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return d.apply(this, arguments);
        }),
        pageShow: (f = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return n = x(), e.t0 = _objectSpread, e.t1 = {}, e.next = 7, D("pageShow");

                  case 7:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return f.apply(this, arguments);
        }),
        pageReady: (p = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 6, D("pageReady");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return p.apply(this, arguments);
        }),
        pageHide: (i = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {
                        data: {
                            duration: x() - n
                        }
                    }, e.next = 6, D("pageHide");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return i.apply(this, arguments);
        }),
        pageUnload: (s = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 6, D("pageUnload");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return s.apply(this, arguments);
        }),
        pagePullDownRefresh: (c = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 6, D("pagePullDownRefresh");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return c.apply(this, arguments);
        }),
        pageReachBottom: (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 6, D("pageReachBottom");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return o.apply(this, arguments);
        }),
        pageShareAppMessage: (u = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {
                        data: t.data
                    }, e.next = 6, D("pageShareAppMessage");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return u.apply(this, arguments);
        }),
        pageTabItemTap: (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (w) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return", t);

                  case 2:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 6, D("pageTabItemTap");

                  case 6:
                    return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return a.apply(this, arguments);
        }),
        appSystemInfo: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.t0 = _objectSpread, e.t1 = {}, e.next = 4, D("appSystemInfo");

                  case 4:
                    return e.t2 = e.sent, e.next = 7, S();

                  case 7:
                    return e.t3 = e.sent, e.t4 = {
                        data: e.t3
                    }, e.abrupt("return", (0, e.t0)(e.t1, e.t2, e.t4));

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return t.apply(this, arguments);
        })
    };
    function D(e) {
        return E.apply(this, arguments);
    }
    function E() {
        return (E = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a, u, o, c, s, i, p, f, d, l, y, _, b;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = x(), n = j(), a = P(), u = T(), o = G(), c = O(), s = I(), i = v(), p = k(), 
                    e.next = 11, Promise.all([ u, o, c, s ]);

                  case 11:
                    return f = e.sent, d = _slicedToArray(f, 4), l = d[0], y = d[1], _ = d[2], b = d[3], 
                    e.abrupt("return", {
                        timestamp: r,
                        timezoneOffset: n,
                        lifecycleId: a,
                        networkType: l,
                        location: y,
                        scene: _,
                        extParam: b,
                        event: t,
                        pagePath: i,
                        referrer: p
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
        }))).apply(this, arguments);
    }
}