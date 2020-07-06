Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounce = debounce, exports.throttle = throttle;

var _debounce = _interopRequireDefault(require("./../vendor.js")(369)), _throttle = _interopRequireDefault(require("./../vendor.js")(368));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function debounce(e, t) {
    return (0, _debounce.default)(t, e);
}

function throttle(e, t) {
    var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    return (0, _throttle.default)(t, r, e);
}