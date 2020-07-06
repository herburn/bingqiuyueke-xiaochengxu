Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debugInit = debugInit, exports.RemoteReduxDevTools = void 0;

var rde = _interopRequireWildcard(require("./remote-redux-devtools.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
    }
    return r.default = e, r;
}

var RemoteReduxDevTools = function() {
    return function(e) {
        return e;
    };
};

function debugInit(e) {
    e.redux && (exports.RemoteReduxDevTools = RemoteReduxDevTools = rde.default);
}

exports.RemoteReduxDevTools = RemoteReduxDevTools;