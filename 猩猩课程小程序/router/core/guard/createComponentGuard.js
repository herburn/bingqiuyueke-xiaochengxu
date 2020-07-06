Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _guardManager = require("./guardManager.js");

function createComponentGuard(e) {
    var r = (0, _guardManager.createGuardManager)(), a = (0, _guardManager.createGuardManager)(), t = (0, 
    _guardManager.createGuardManager)();
    return {
        get name() {
            return e;
        },
        get beforeRouteLeaveGuards() {
            return r.guards;
        },
        get beforeRouteEnterGuards() {
            return a.guards;
        },
        get beforeRouteUpdateGuards() {
            return t.guards;
        },
        beforeRouteLeave: function(e) {
            r.register(e);
        },
        beforeRouteEnter: function(e) {
            a.register(e);
        },
        beforeRouteUpdate: function(e) {
            t.register(e);
        }
    };
}

var _default = createComponentGuard;

exports.default = _default;