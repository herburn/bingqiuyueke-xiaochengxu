Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "LOGIN", {
    enumerable: !0,
    get: function() {
        return _types.LOGIN;
    }
}), Object.defineProperty(exports, "LOGIN_LOADING", {
    enumerable: !0,
    get: function() {
        return _types.LOGIN_LOADING;
    }
}), Object.defineProperty(exports, "LOGIN_SUCCESS", {
    enumerable: !0,
    get: function() {
        return _types.LOGIN_SUCCESS;
    }
}), Object.defineProperty(exports, "LOGIN_FAILURE", {
    enumerable: !0,
    get: function() {
        return _types.LOGIN_FAILURE;
    }
}), Object.defineProperty(exports, "SYSTEMINFO_PUT", {
    enumerable: !0,
    get: function() {
        return _types.SYSTEMINFO_PUT;
    }
}), Object.defineProperty(exports, "LOGININFO_PUT", {
    enumerable: !0,
    get: function() {
        return _types.LOGININFO_PUT;
    }
}), Object.defineProperty(exports, "COOKIE_PUT", {
    enumerable: !0,
    get: function() {
        return _types.COOKIE_PUT;
    }
}), Object.defineProperty(exports, "REDIRECT_PATH_PUT", {
    enumerable: !0,
    get: function() {
        return _types.REDIRECT_PATH_PUT;
    }
}), exports.PERSIST_RESUME_PUT = exports.FETCH_CANCEL = exports.FETCH_FAILURE = exports.FETCH_SUCCESS = exports.FETCH_LOADING = void 0;

var _types = require("./../store/actions/types.js"), _imports = require("./../imports.js"), FETCH_LOADING = _imports.coreTypes.FETCH_LOADING;

exports.FETCH_LOADING = FETCH_LOADING;

var FETCH_SUCCESS = _imports.coreTypes.FETCH_SUCCESS;

exports.FETCH_SUCCESS = FETCH_SUCCESS;

var FETCH_FAILURE = _imports.coreTypes.FETCH_FAILURE;

exports.FETCH_FAILURE = FETCH_FAILURE;

var FETCH_CANCEL = _imports.coreTypes.FETCH_CANCEL;

exports.FETCH_CANCEL = FETCH_CANCEL;

var PERSIST_RESUME_PUT = _imports.persistTypes.PERSIST_RESUME_PUT;

exports.PERSIST_RESUME_PUT = PERSIST_RESUME_PUT;