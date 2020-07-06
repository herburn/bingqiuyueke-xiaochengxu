Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, exports.persistConfig = exports.cacheMapSkList = exports.cacheMapKeyList = exports.cacheMapNameList = exports.cacheMap = void 0;

var _cacheMap = null;

exports.cacheMap = _cacheMap;

var _cacheMapNameList = null;

exports.cacheMapNameList = _cacheMapNameList;

var _cacheMapKeyList = null;

exports.cacheMapKeyList = _cacheMapKeyList;

var _cacheMapSkList = null;

exports.cacheMapSkList = _cacheMapSkList;

var _persistConfig = {};

function _default(e) {
    var a = e.cacheMap, c = e.cacheMapNameList, s = e.cacheMapKeyList, p = e.cacheMapSkList, t = e.persistConfig;
    exports.cacheMap = _cacheMap = a, exports.cacheMapNameList = _cacheMapNameList = c, 
    exports.cacheMapKeyList = _cacheMapKeyList = s, exports.cacheMapSkList = _cacheMapSkList = p, 
    exports.persistConfig = _persistConfig = t;
}

exports.persistConfig = _persistConfig;