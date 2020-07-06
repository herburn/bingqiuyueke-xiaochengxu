Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "setInitSoreFunc", {
    enumerable: !0,
    get: function() {
        return _init.setInitSoreFunc;
    }
}), Object.defineProperty(exports, "storageApi", {
    enumerable: !0,
    get: function() {
        return _persist.storageApi;
    }
}), Object.defineProperty(exports, "storage", {
    enumerable: !0,
    get: function() {
        return _persist.storage;
    }
}), Object.defineProperty(exports, "createCacheMapTransform", {
    enumerable: !0,
    get: function() {
        return _persist.createCacheMapTransform;
    }
}), Object.defineProperty(exports, "persistor", {
    enumerable: !0,
    get: function() {
        return _instance.persistor;
    }
}), Object.defineProperty(exports, "store", {
    enumerable: !0,
    get: function() {
        return _instance.store;
    }
});

var _init = require("./init.js"), _persist = require("./persist/index.js"), _instance = require("./instance.js");