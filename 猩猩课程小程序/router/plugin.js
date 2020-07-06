Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../vendor.js")(0)), _core = require("./core/index.js"), _index = require("./index.js");

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

function asyncGeneratorStep(e, r, t, o, a, n, u) {
    try {
        var c = e[n](u), i = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(i) : Promise.resolve(i).then(o, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var o = c.apply(e, u);
            function a(e) {
                asyncGeneratorStep(o, r, t, a, n, "next", e);
            }
            function n(e) {
                asyncGeneratorStep(o, r, t, a, n, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.config.optionMergeStrategies.__sm_routerHandler = function(e, r) {
            var t = r.name, o = r.beforeRouteLeave, a = r.beforeRouteEnter, n = r.beforeRouteUpdate;
            function u() {
                return (u = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                    var o;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (_core.routeManager.__tempRoute && r === _core.routeManager.__tempRoute.page) return e.prev = 1, 
                            e.next = 4, t(_core.routeManager.__tempRoute, _core.routeManager.route, function(e) {
                                "function" == typeof e && _core.routeManager.setNext(e);
                            });
                            e.next = 11;
                            break;

                          case 4:
                            "function" == typeof (o = e.sent) && _core.routeManager.setNext(o), e.next = 11;
                            break;

                          case 8:
                            e.prev = 8, e.t0 = e.catch(1), console.error("handleBeforeRouteLeave", e.t0);

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 1, 8 ] ]);
                }))).apply(this, arguments);
            }
            t in _core.config.routeMap && (_core.guard.hasInComponentGuardMap(t) || _core.guard.updateComponentGuardMap((0, 
            _core.createComponentGuard)(t)), o && _core.guard.componentGuardMap[t].beforeRouteLeave(o), 
            a && (_core.guard.componentGuardMap[t].beforeRouteEnter(a), function(e, r) {
                u.apply(this, arguments);
            }(t, a)), n && _core.guard.componentGuardMap[t].beforeRouteUpdate(n));
        }, e.mixin({
            __sm_routerHandler: "",
            beforeCreate: function() {
                var e = this;
                this.$encodeParams = _core.encodeParams, this.$encodeUrl = _core.encodeUrl, this.$decodeParams = _core.decodeParams, 
                this.$decodePage = _core.decodePage, this.$decodeUrl = _core.decodeUrl, this.$router = _index.router, 
                "1" === last(this.$id) && Object.defineProperty(this, "$route", {
                    get: function() {
                        return e.$root.$route;
                    }
                });
            },
            created: function() {
                function r(e, r) {
                    var t = (0, _core.encodeUrl)({
                        page: e,
                        data: r
                    });
                    _core.routeManager.setCurrentRoute(_core.routeManager.createRoute({
                        page: e,
                        data: r,
                        url: t
                    }));
                }
                "1" !== last(this.$id) && ((this.name in _core.config.tabPageMap || "SplashScreen" === this.name) && _core.routeManager.clearRoutes(), 
                handleTmpRoute(), function() {
                    var e = null === _core.routeManager.route || "SplashScreen" !== _core.routeManager.route.page;
                    "SplashScreen" === this.name && e && (r("SplashScreen", this.$app.globalData.query), 
                    _core.routeManager.clearShowRoutes());
                }.call(this), _core.routeManager.route.page !== this.name && r(this.name, {}), function() {
                    _core.routeManager.setCurrentVm(this), _core.routeManager.pushRoute(_core.routeManager.route), 
                    _core.routeManager.pushShowRoute(_core.routeManager.route), _core.routeManager.updateCurrentRoute({
                        id: this.$id,
                        routes: _toConsumableArray(_core.routeManager.routes),
                        lastRoute: _core.routeManager.lastRoute,
                        referrerRoute: _core.routeManager.referrerRoute,
                        isOnload: !0
                    });
                }.call(this), function() {
                    var e = this;
                    this.$_route = _core.routeManager.route, Object.defineProperty(this, "$route", {
                        get: function() {
                            return e.$_route.hasVisited = null !== e.$_route.hasVisited, e.$_route;
                        }
                    });
                }.call(this), handleGuards.call(this));
            },
            onShow: function() {
                "$app" in this && (handleTmpRoute(), _core.routeManager.route !== this.$_route && (!1 === _core.routeManager.route.isOnload && (this.$_route = _core.routeManager.route), 
                this.name in _core.config.tabPageMap && (_core.routeManager.clearRoutes(), _core.routeManager.pushRoute(this.$_route)), 
                function() {
                    _core.routeManager.setCurrentVm(this), _core.routeManager.setCurrentRoute(this.$_route), 
                    _core.routeManager.pushShowRoute(_core.routeManager.route), _core.routeManager.updateCurrentRoute({
                        referrerRoute: _core.routeManager.referrerRoute,
                        isOnload: !0
                    });
                }.call(this), handleGuards.call(this)));
            },
            onUnload: function() {
                _core.routeManager.popRoute();
            }
        });
    }
};

function handleGuards() {
    try {
        _core.guard.globalGuard.afterEachGuards.forEach(function(e) {
            return e(_core.routeManager.route, _core.routeManager.lastRoute);
        });
    } catch (e) {
        console.error("handleGuards afterEach", e);
    }
    if (_core.routeManager.next) {
        try {
            _core.routeManager.next(this);
        } catch (e) {
            console.error("routeManager.next", e);
        }
        _core.routeManager.clearNext();
    }
}

function last(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
    return e[e.length - r] || null;
}

function handleTmpRoute() {
    _core.routeManager.__tempRoute && (_core.routeManager.setCurrentRoute(_core.routeManager.__tempRoute), 
    delete _core.routeManager.__tempRoute);
}

exports.default = _default;