Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _storeApi = require("./../imports/storeApi.js"), _cacheConfig = require("./cacheConfig.js"), _envConfig = require("./envConfig/index.js"), version = 10, persistConfig = {
    cacheMap: _cacheConfig.cacheMap,
    debug: _envConfig.debugConfig.persist,
    version: version,
    persistConfig: {
        root: {
            key: "root",
            storage: _storeApi.storage.createStorage(_storeApi.storageApi),
            whitelist: [],
            throttle: 1e3,
            serialize: !1
        },
        globals: {
            key: "globals",
            storage: _storeApi.storage.createStorage(_storeApi.storageApi),
            throttle: 1e3,
            version: version,
            debug: _envConfig.debugConfig.persist,
            serialize: !1
        }
    }
}, _default = persistConfig;

exports.default = _default;