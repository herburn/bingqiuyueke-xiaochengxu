Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, Object.defineProperty(exports, "createReducers", {
    enumerable: !0,
    get: function() {
        return _dependent.createReducers;
    }
}), Object.defineProperty(exports, "persistInit", {
    enumerable: !0,
    get: function() {
        return _dependent.persistInit;
    }
}), Object.defineProperty(exports, "storage", {
    enumerable: !0,
    get: function() {
        return _dependent.storage;
    }
}), Object.defineProperty(exports, "createCacheMapTransform", {
    enumerable: !0,
    get: function() {
        return _dependent.createCacheMapTransform;
    }
}), Object.defineProperty(exports, "coreConstant", {
    enumerable: !0,
    get: function() {
        return _dependent.coreConstant;
    }
}), Object.defineProperty(exports, "coreSagas", {
    enumerable: !0,
    get: function() {
        return _dependent.coreSagas;
    }
}), Object.defineProperty(exports, "persistSagas", {
    enumerable: !0,
    get: function() {
        return _dependent.persistSagas;
    }
}), Object.defineProperty(exports, "BaseStorageApi", {
    enumerable: !0,
    get: function() {
        return _dependent.BaseStorageApi;
    }
}), Object.defineProperty(exports, "promiseMiddleware", {
    enumerable: !0,
    get: function() {
        return _dependent.promiseMiddleware;
    }
}), exports.wx = void 0;

var _dependent = require("./../dependent.js"), _wx = null;

function _default(e) {
    var t = e.wx;
    exports.wx = _wx = t;
}

exports.wx = _wx;