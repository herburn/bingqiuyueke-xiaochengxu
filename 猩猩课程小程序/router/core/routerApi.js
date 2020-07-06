Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _getRealPageInfo2 = _interopRequireDefault(require("./utils/getRealPageInfo.js")), _urlParse = require("./utils/urlParse.js"), _queue = _interopRequireDefault(require("./utils/queue.js")), _guard = _interopRequireDefault(require("./guard/index.js")), _routeManager = _interopRequireDefault(require("./routeManager.js")), _config = _interopRequireDefault(require("./config.js"));

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

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function asyncGeneratorStep(e, r, t, a, n, o, u) {
    try {
        var i = e[o](u), p = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(p) : Promise.resolve(p).then(a, n);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var a = i.apply(e, u);
            function n(e) {
                asyncGeneratorStep(a, r, t, n, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(a, r, t, n, o, "throw", e);
            }
            n(void 0);
        });
    };
}

var errorHandlers = [], wxApiList = [ "navigateBack", "navigateTo", "redirectTo", "reLaunch", "switchTab" ], promiseRouteApi = function(O) {
    return _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        var r, t, a, n, o, u, i, p, c, l, d, f, s, g, _, b, v, m, y, h, M, P, j, w, A, R, D = arguments;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (R = function(e) {
                    var r = e.pageMethod, t = e.pageDelta, a = e.realPage, n = e.pageData, o = e.pageEncode;
                    return "navigateBack" === r ? {
                        delta: t
                    } : {
                        url: (0, _urlParse.encodeUrl)({
                            page: a,
                            data: n
                        }, {
                            encode: o,
                            isAbsolutePath: !0
                        })
                    };
                }, A = function(e) {
                    var r = e.pageMethod;
                    return e.realPage in _config.default.tabPageMap && ("navigateTo" === r || "redirectTo" === r) ? "switchTab" : r;
                }, w = function(t, a, e) {
                    var n = e.success, o = e.fail, u = e.complete;
                    return new Promise(function(e, r) {
                        setTimeout(function() {
                            return wx[t](_objectSpread({}, a, {
                                success: function() {
                                    e.apply(void 0, arguments), n.apply(void 0, arguments);
                                },
                                fail: function() {
                                    r.apply(void 0, arguments), o.apply(void 0, arguments);
                                },
                                complete: u
                            }));
                        }, 1);
                    });
                }, j = function(e) {
                    var r = e.pageMethod, t = e.pageDelta, a = e.realPage, n = e.pageData, o = e.pageMeta;
                    return "navigateBack" === r ? Object.assign({}, _routeManager.default.routes[_routeManager.default.routes.length - 1 - t]) : _routeManager.default.createRoute({
                        page: a,
                        data: n,
                        meta: o,
                        url: (0, _urlParse.encodeUrl)({
                            page: a,
                            data: n
                        })
                    });
                }, P = function() {
                    return (P = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t, a, n, o, u, i, p, c, l, d;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return d = function(e, r) {
                                    if (e === _routeManager.default.route.page) {
                                        var t = _toConsumableArray(_guard.default.componentGuardMap[e].beforeRouteUpdateGuards);
                                        return _toConsumableArray(t.map(function(e) {
                                            return e.bind(_routeManager.default.currentVm);
                                        }));
                                    }
                                    var a, n = [].concat(_toConsumableArray(_guard.default.componentGuardMap[_routeManager.default.route.page].beforeRouteLeaveGuards), _toConsumableArray(_guard.default.globalGuard.beforeEachGuards), _toConsumableArray((a = [], 
                                    r.forEach(function(e) {
                                        return Array.prototype.push.apply(a, _guard.default.routerGuardMap[e].beforeEnterGuards);
                                    }), a)));
                                    return [].concat(_toConsumableArray(n.map(function(e) {
                                        return e.bind(_routeManager.default.currentVm);
                                    })), _toConsumableArray(function(e) {
                                        if (e in _guard.default.componentGuardMap) return _guard.default.componentGuardMap[e].beforeRouteEnterGuards;
                                        return [];
                                    }(e)), _toConsumableArray(_guard.default.globalGuard.beforeResolveGuards));
                                }, l = function(e) {
                                    var r = e.page, t = e.data, a = e.delta, n = e.jumpMethodName, o = e.encode;
                                    if ("navigateBack" === n) return _objectSpread({}, _routeManager.default.routes[_routeManager.default.routes.length - 1 - a], {
                                        jumpMethodName: n,
                                        delta: a,
                                        pages: [ _routeManager.default.routes[_routeManager.default.routes.length - 1 - a].page ]
                                    });
                                    var u = (0, _getRealPageInfo2.default)({
                                        page: r,
                                        data: t
                                    }), i = u.pagePath, p = u.pageData, c = void 0 === p ? {} : p, l = u.pageMeta, d = u.pages, f = i.split("/");
                                    return {
                                        page: f[f.length - 1],
                                        data: c,
                                        meta: l,
                                        jumpMethodName: n,
                                        encode: o,
                                        pages: d
                                    };
                                }, t = r.page, a = r.data, n = void 0 === a ? {} : a, o = r.delta, u = r.jumpMethodName, 
                                i = void 0 === u ? "navigateTo" : u, p = r.encode, _routeManager.default.clearNext(), 
                                c = l({
                                    page: t,
                                    data: n,
                                    delta: o,
                                    jumpMethodName: i,
                                    encode: p
                                }), e.prev = 5, e.next = 8, (0, _queue.default)(d(c.page, c.pages), function(o) {
                                    return new Promise(function() {
                                        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                                            var a, n;
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return a = function() {
                                                        var a = !1;
                                                        return function(e, r, t) {
                                                            a || (!(a = !0) === t ? r(new Error("router to: false")) : "Error" === type(t) ? (r(t), 
                                                            errorHandlers.forEach(function(e) {
                                                                return e(t);
                                                            })) : "Object" === type(t) ? r(t) : "Function" === type(t) ? (e(), _routeManager.default.setNext(t)) : e());
                                                        };
                                                    }(), e.prev = 2, e.next = 5, o(c, _routeManager.default.route, a.bind(null, r, t));

                                                  case 5:
                                                    void 0 !== (n = e.sent) && a(r, t, n), e.next = 12;
                                                    break;

                                                  case 9:
                                                    e.prev = 9, e.t0 = e.catch(2), a(r, t, e.t0);

                                                  case 12:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, null, [ [ 2, 9 ] ]);
                                        }));
                                        return function(e, r) {
                                            return t.apply(this, arguments);
                                        };
                                    }());
                                });

                              case 8:
                                e.next = 15;
                                break;

                              case 10:
                                if (e.prev = 10, e.t0 = e.catch(5), "Object" === type(e.t0)) return e.abrupt("return", M(e.t0));
                                e.next = 14;
                                break;

                              case 14:
                                throw e.t0;

                              case 15:
                                return e.abrupt("return", {
                                    pageMethod: i,
                                    pageDelta: o,
                                    realPage: c.page,
                                    pageData: c.data,
                                    pageMeta: c.meta,
                                    pageEncode: p
                                });

                              case 16:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 5, 10 ] ]);
                    }))).apply(this, arguments);
                }, M = function(e) {
                    return P.apply(this, arguments);
                }, t = 1 < D.length && void 0 !== D[1] && D[1], a = (r = 0 < D.length && void 0 !== D[0] ? D[0] : {}).success, 
                n = void 0 === a ? function() {} : a, o = r.fail, u = void 0 === o ? function() {} : o, 
                i = r.complete, p = void 0 === i ? function() {} : i, c = r.delta, l = void 0 === c ? 1 : c, 
                d = r.page, f = r.data, s = void 0 === f ? {} : f, "navigateBack" !== O && void 0 === d) throw new Error("页面跳转没有传入 page");
                e.next = 11;
                break;

              case 11:
                return e.next = 13, M({
                    page: d,
                    data: s,
                    delta: l,
                    jumpMethodName: O,
                    encode: t
                });

              case 13:
                if (g = e.sent, _ = g.pageMethod, b = g.pageDelta, v = g.realPage, m = g.pageData, 
                y = g.pageMeta, h = g.pageEncode, v === _routeManager.default.route.page) return _routeManager.default.updateCurrentRoute({
                    data: m,
                    meta: y,
                    hasVisited: null
                }), e.abrupt("return", !0);
                e.next = 23;
                break;

              case 23:
                return _routeManager.default.__tempRoute = j({
                    pageMethod: _,
                    pageDelta: b,
                    realPage: v,
                    pageData: m,
                    pageMeta: y
                }), _routeManager.default.__tempRoute.isOnload = !1, e.abrupt("return", w(A({
                    pageMethod: _,
                    realPage: v
                }), R({
                    pageMethod: _,
                    pageDelta: b,
                    realPage: v,
                    pageData: m,
                    pageEncode: h
                }), {
                    success: n,
                    fail: u,
                    complete: p
                }));

              case 26:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, routerApi = {};

wxApiList.forEach(function(e) {
    return routerApi[e] = promiseRouteApi(e);
}), routerApi.onError = function(e) {
    return errorHandlers.push(e);
}, routerApi.backHome = function() {
    return routerApi.switchTab({
        page: _config.default.homePage
    });
};

var _default = routerApi;

function type(e) {
    var r = void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
    return null === e ? "Null" : r;
}

exports.default = _default;