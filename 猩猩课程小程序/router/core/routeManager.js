Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _currentRoutes = [], _showRoutes = [], _next = null, _currentVm = null, _currentRoute = null, routeManager = {
    get currentVm() {
        return _currentVm;
    },
    get next() {
        return _next;
    },
    get routes() {
        return _currentRoutes;
    },
    get route() {
        return _currentRoute;
    },
    get referrerRoute() {
        return _showRoutes.length <= 1 ? null : _showRoutes[0];
    },
    get lastRoute() {
        return nthRoute(routeManager.routes, -2);
    },
    setCurrentVm: function(t) {
        _currentVm = t;
    },
    setNext: function(t) {
        _next = t;
    },
    clearNext: function() {
        _next = null;
    },
    createRoute: function(t) {
        var e = t.id, u = void 0 === e ? null : e, r = t.page, n = t.data, o = void 0 === n ? {} : n, s = t.routes, l = void 0 === s ? null : s, a = t.url, R = t.lastRoute, c = void 0 === R ? null : R, i = t.referrerRoute, _ = void 0 === i ? null : i, h = t.hasVisited;
        return {
            id: u,
            page: r,
            data: o,
            routes: l,
            url: a,
            lastRoute: c,
            referrerRoute: _,
            hasVisited: void 0 === h ? null : h,
            meta: t.meta
        };
    },
    setCurrentRoute: function(t) {
        _currentRoute = t;
    },
    updateCurrentRoute: function(t) {
        Object.assign(_currentRoute, t);
    },
    pushRoute: function(t) {
        return _currentRoutes.push(t), t;
    },
    popRoute: function() {
        return _currentRoutes.pop();
    },
    clearRoutes: function() {
        _currentRoutes.length = 0;
    },
    pushShowRoute: function(t) {
        return last(_showRoutes) && t.id === last(_showRoutes).id || (_showRoutes.push(t), 
        2 < _showRoutes.length && _showRoutes.shift()), t;
    },
    clearShowRoutes: function() {
        _showRoutes.length = 0;
    }
}, _default = routeManager;

function last(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
    return t[t.length - e] || null;
}

function nthRoute(t, e) {
    return (0 <= e ? t[e] : last(t, -e)) || null;
}

exports.default = _default;