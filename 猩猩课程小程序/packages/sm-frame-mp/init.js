Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var _debug = require("./debug/index.js"), _imports = require("./imports.js"), _store = require("./store/index.js"), _api = require("./services/api/index.js");

function _default(e) {
    var i = e.debugConfig, r = e.saConfig, s = e.wx, t = e.api, o = e.persistConfig, n = e.storeConfig, u = e.version, a = e.interceptors, p = e.apiConfig;
    (0, _debug.debugInit)(i), (0, _imports.saInit)(r);
    var d = (0, _store.storeInit)(s, t, o, n).store;
    (0, _api.apiInit)(s, d, u, a, p);
}