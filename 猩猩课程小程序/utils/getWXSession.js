Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getWXSession = getWXSession;

var _core = _interopRequireDefault(require("./../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getWXSession() {
    return new Promise(function(t, o) {
        _core.default.checkSession().then(function() {
            t("");
        }).catch(function() {
            _core.default.login({
                timeout: 5e3
            }).then(function(e) {
                var r = e.code, n = e.errMsg;
                r ? t(r) : o(new Error("login error：".concat(n)));
            }).catch(function(e) {
                o(new Error("login error：".concat(e)));
            });
        });
    });
}