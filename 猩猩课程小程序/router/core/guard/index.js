Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "createComponentGuard", {
    enumerable: !0,
    get: function() {
        return _createComponentGuard.default;
    }
}), Object.defineProperty(exports, "createRouterGuard", {
    enumerable: !0,
    get: function() {
        return _createRouterGuard.default;
    }
}), exports.default = void 0;

var _createComponentGuard = _interopRequireDefault(require("./createComponentGuard.js")), _createRouterGuard = _interopRequireDefault(require("./createRouterGuard.js")), _globalGuard = _interopRequireDefault(require("./globalGuard.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var routerGuardMap = {}, componentGuardMap = {}, _default = {
    get globalGuard() {
        return _globalGuard.default;
    },
    get routerGuardMap() {
        return routerGuardMap;
    },
    get componentGuardMap() {
        return componentGuardMap;
    },
    updateRouterGuardMap: function(e) {
        routerGuardMap[e.name] = e;
    },
    updateComponentGuardMap: function(e) {
        componentGuardMap[e.name] = e;
    },
    hasInRouterGuardMap: function(e) {
        return e in routerGuardMap;
    },
    hasInComponentGuardMap: function(e) {
        return e in componentGuardMap;
    }
};

exports.default = _default;