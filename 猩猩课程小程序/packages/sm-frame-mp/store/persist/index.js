Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "persistInit", {
    enumerable: !0,
    get: function() {
        return _init.default;
    }
}), Object.defineProperty(exports, "storageApi", {
    enumerable: !0,
    get: function() {
        return _storageApi.default;
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
});

var _init = _interopRequireDefault(require("./init.js")), _storageApi = _interopRequireDefault(require("./storageApi.js")), _dependent = require("./../dependent.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}