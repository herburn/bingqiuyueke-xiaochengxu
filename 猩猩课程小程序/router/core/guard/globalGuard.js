Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _guardManager = require("./guardManager.js"), beforeEachManager = (0, _guardManager.createGuardManager)(), beforeResolveManager = (0, 
_guardManager.createGuardManager)(), afterEachManager = (0, _guardManager.createGuardManager)(), _default = {
    get beforeEachGuards() {
        return beforeEachManager.guards;
    },
    get beforeResolveGuards() {
        return beforeResolveManager.guards;
    },
    get afterEachGuards() {
        return afterEachManager.guards;
    },
    beforeEach: function(e) {
        beforeEachManager.register(e);
    },
    beforeResolve: function(e) {
        beforeResolveManager.register(e);
    },
    afterEach: function(e) {
        afterEachManager.register(e);
    }
};

exports.default = _default;