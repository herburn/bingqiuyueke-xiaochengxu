Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setGetFetchStatusFunc = setGetFetchStatusFunc, exports.getFetchStatus = void 0;

var getFetchStatus = function(t, e) {
    return e ? t.services[e] : t.services;
};

function setGetFetchStatusFunc(t) {
    exports.getFetchStatus = getFetchStatus = t;
}

exports.getFetchStatus = getFetchStatus;