Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var _dependent = _interopRequireDefault(require("./dependent.js")), _interceptorHandlers = require("./interceptorHandlers.js"), _interceptors = _interopRequireDefault(require("./interceptors.js")), _ramda = _interopRequireDefault(require("./../../../../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var pipe = _ramda.default.pipe, propOr = _ramda.default.propOr, chain = _ramda.default.chain, forEach = _ramda.default.forEach;

function interceptorsInit() {
    function e(r) {
        return chain(function(e) {
            return e(r);
        });
    }
    var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = [ propOr(_interceptorHandlers.addLocation, "locationHandler"), propOr(_interceptorHandlers.addCookie, "cookieHandler"), propOr(_interceptorHandlers.addMapCacheKeys, "mapCacheKeysHandler"), propOr(_interceptorHandlers.addLog, "logHandler"), propOr([], "otherHandlerList") ];
    pipe(e(r), forEach(_interceptors.default.request.use.bind(_interceptors.default)))(n);
    var a = [ propOr(_interceptorHandlers.checkRequest, "checkRequestHandler"), propOr(_interceptorHandlers.handleErrorCode, "errorCodeHandler"), propOr(_interceptorHandlers.handleMapCache, "mapCacheHandler"), propOr([], "otherHandlerList") ];
    pipe(e(t), forEach(_interceptors.default.response.use.bind(_interceptors.default)))(a);
}

function _default(e, r, t) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, a = 4 < arguments.length ? arguments[4] : void 0;
    (0, _dependent.default)(e, r, t, a), interceptorsInit(n.requestHandlers, n.responseHandlers);
}