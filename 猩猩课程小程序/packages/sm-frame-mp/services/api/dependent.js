Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, exports.wx = exports.store = exports.routeBlackList = exports.logWhiteList = exports.errorCode = exports.logUrl = exports.loginUrl = exports.version = void 0;

var _wx = null;

exports.wx = _wx;

var _store = null;

exports.store = _store;

var _version = "";

exports.version = _version;

var _loginUrl = "";

exports.loginUrl = _loginUrl;

var _logUrl = "";

exports.logUrl = _logUrl;

var _errorCode = {
    11: !0,
    21: !0,
    25: !0
};

exports.errorCode = _errorCode;

var _logWhiteList = null;

exports.logWhiteList = _logWhiteList;

var _routeBlackList = null;

function _default(r, o, e, t) {
    var s = t.loginUrl, l = t.logUrl, i = t.errorCode, x = void 0 === i ? {} : i, _ = t.logWhiteList, p = void 0 === _ ? [] : _, g = t.routeBlackList, a = void 0 === g ? [] : g;
    exports.wx = _wx = r, exports.store = _store = o, exports.version = _version = e, 
    exports.loginUrl = _loginUrl = s, exports.logUrl = _logUrl = l, Object.assign(_errorCode, x), 
    exports.logWhiteList = _logWhiteList = p, exports.routeBlackList = _routeBlackList = a;
}

exports.routeBlackList = _routeBlackList;