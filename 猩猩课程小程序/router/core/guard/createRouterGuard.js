Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _guardManager = require("./guardManager.js");

function createRouterGuard(e) {
    var r = (0, _guardManager.createGuardManager)();
    return {
        get name() {
            return e;
        },
        get beforeEnterGuards() {
            return r.guards;
        },
        beforeEnter: function(e) {
            r.register(e);
        }
    };
}

var _default = createRouterGuard;

exports.default = _default;