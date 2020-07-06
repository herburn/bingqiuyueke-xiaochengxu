Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createCacheMapTransform = createCacheMapTransform;

var _reduxPersistTransformExpire = _interopRequireDefault(require("./../redux-persist/redux-persist-transform-expire.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createCacheMapTransform() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "cacheMapExpiresAt", r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : (0, 
    _moment.default)().add(7, "day").toDate();
    return (0, _reduxPersistTransformExpire.default)({
        expireKey: e,
        defaultState: {
            cacheMapExpiresAt: r,
            key: "",
            entities: {}
        }
    });
}