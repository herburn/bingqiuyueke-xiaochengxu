Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _types = require("./types.js"), _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var merge = _seamlessImmutable.default.merge, state = (0, _seamlessImmutable.default)({
    resume: !1
}), reducers = _defineProperty({}, _types.PERSIST_RESUME_PUT, function(e, r) {
    var t = r.payload;
    return merge(e, {
        resume: t
    });
}), _default = {
    state: state,
    reducers: reducers
};

exports.default = _default;