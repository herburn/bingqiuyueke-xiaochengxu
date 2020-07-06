Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createSmRouter;

var _guard = _interopRequireWildcard(require("./guard/index.js")), _getRealPageInfo = _interopRequireDefault(require("./utils/getRealPageInfo.js")), _config = require("./config.js"), _routeManager = _interopRequireDefault(require("./routeManager.js")), _routerApi = _interopRequireDefault(require("./routerApi.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
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

function createSmRouter(e) {
    return e.routeMap = function(r) {
        function e(e) {
            _guard.default.hasInRouterGuardMap(e) || _guard.default.updateRouterGuardMap((0, 
            _guard.createRouterGuard)(e)), "string" == typeof r[e] ? t[e] = {
                handler: function() {
                    return o(r[e]);
                }
            } : "function" == typeof r[e] ? t[e] = {
                handler: u(r[e])
            } : ("handler" in r[e] ? t[e] = {
                handler: u(r[e].handler)
            } : t[e] = {
                handler: function() {
                    return r[e];
                }
            }, "beforeEnter" in r[e] && (t[e].beforeEnter = r[e].beforeEnter)), "beforeEnter" in t[e] && _guard.default.routerGuardMap[e].beforeEnter(t[e].beforeEnter);
        }
        var t = {};
        for (var n in r) e(n);
        return t;
        function u(n) {
            return function(e) {
                var r = e.data, t = n({
                    data: r
                });
                return "string" == typeof t ? o(t) : t;
            };
        }
        function o(e) {
            return -1 === e.indexOf("/") ? {
                page: e
            } : {
                path: e
            };
        }
    }(e.routeMap), (0, _config.setConfig)(e), _objectSpread({
        getRealPageInfo: _getRealPageInfo.default
    }, e, {}, _routerApi.default, {
        get currentVm() {
            return _routeManager.default.currentVm;
        },
        get route() {
            return _routeManager.default.route;
        },
        beforeEach: function(e) {
            return _guard.default.globalGuard.beforeEach(e);
        },
        beforeResolve: function(e) {
            return _guard.default.globalGuard.beforeResolve(e);
        },
        afterEach: function(e) {
            return _guard.default.globalGuard.afterEach(e);
        }
    });
}