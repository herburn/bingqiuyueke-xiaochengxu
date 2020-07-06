function createGuardManager() {
    var n = [];
    return {
        register: function(e) {
            var r = this;
            return n.push(e), function() {
                r.unRegister(e);
            };
        },
        unRegister: function(e) {
            var r = n.indexOf(e);
            return -1 !== r ? (n.splice(r, 1), !0) : (console.warn("此 guard 并未注册，因此无法注销 "), 
            !1);
        },
        clear: function() {
            n.length = 0;
        },
        get guards() {
            return n.slice();
        }
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createGuardManager = createGuardManager;