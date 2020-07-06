Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "getLoginInfo", {
    enumerable: !0,
    get: function() {
        return _selectors.getLoginInfo;
    }
}), Object.defineProperty(exports, "setGetLoginInfoFunc", {
    enumerable: !0,
    get: function() {
        return _selectors.setGetLoginInfoFunc;
    }
}), Object.defineProperty(exports, "getSystemInfo", {
    enumerable: !0,
    get: function() {
        return _selectors.getSystemInfo;
    }
}), Object.defineProperty(exports, "setGetSystemInfoFunc", {
    enumerable: !0,
    get: function() {
        return _selectors.setGetSystemInfoFunc;
    }
}), exports.setGetPersistResumeFunc = exports.getPersistResume = exports.setGetCacheMapSks = exports.getCacheMapSks = exports.setGetFetchStatusFunc = exports.getFetchStatus = void 0;

var _imports = require("./../imports.js"), _selectors = require("./../store/selectors/index.js"), getFetchStatus = _imports.coreSelectors.getFetchStatus, setGetFetchStatusFunc = _imports.coreSelectors.setGetFetchStatusFunc;

exports.setGetFetchStatusFunc = setGetFetchStatusFunc, exports.getFetchStatus = getFetchStatus;

var getCacheMapSks = _imports.persistSelectors.getCacheMapSks, setGetCacheMapSks = _imports.persistSelectors.setGetCacheMapSks;

exports.setGetCacheMapSks = setGetCacheMapSks, exports.getCacheMapSks = getCacheMapSks;

var getPersistResume = _imports.persistSelectors.getPersistResume, setGetPersistResumeFunc = _imports.persistSelectors.setGetPersistResumeFunc;

exports.setGetPersistResumeFunc = setGetPersistResumeFunc, exports.getPersistResume = getPersistResume;