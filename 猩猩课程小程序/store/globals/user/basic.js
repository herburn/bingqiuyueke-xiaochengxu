Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _actionTypes = require("./../../types/index.js");

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

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "globals", "user", "basic" ],
    actions: {
        updateUserBasicInfo: _actionTypes.LOGININFO_PUT
    },
    state: (0, _seamlessImmutable.default)({
        id: -1,
        nickname: "",
        face: "",
        openid: ""
    }),
    reducers: _defineProperty({}, _actionTypes.LOGININFO_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, t);
    }),
    selectors: function() {
        return {
            getUserInfo: function(e) {
                return e.globals.user.basic;
            }
        };
    }
};

exports.default = _default;