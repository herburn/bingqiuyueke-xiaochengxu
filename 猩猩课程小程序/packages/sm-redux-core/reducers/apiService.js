Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _types = require("./../actions/types.js"), _constant = require("./../constant.js"), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var merge = _seamlessImmutable.default.merge, state = (0, _seamlessImmutable.default)({
    fetch: {
        count: 0,
        status: _constant.IDLE
    }
}), reducers = _defineProperty({}, _types.FETCH_STATUS_PUT, function(e, t) {
    var r = t.payload, a = t.meta;
    return merge(e, _defineProperty({}, a.statusName, r));
}), _default = {
    state: state,
    reducers: reducers
};

exports.default = _default;