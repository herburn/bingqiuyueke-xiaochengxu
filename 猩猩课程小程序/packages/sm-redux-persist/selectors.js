Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setGetCacheMapSks = setGetCacheMapSks, exports.setGetPersistResumeFunc = setGetPersistResumeFunc, 
exports.getPersistResume = exports.getCacheMapSks = void 0;

var getCacheMapSks = null;

function setGetCacheMapSks(e) {
    exports.getCacheMapSks = getCacheMapSks = e;
}

exports.getCacheMapSks = getCacheMapSks;

var getPersistResume = function(e) {
    return e.services.resume;
};

function setGetPersistResumeFunc(e) {
    exports.getPersistResume = getPersistResume = e;
}

exports.getPersistResume = getPersistResume;