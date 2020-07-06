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
    namespace: [ "globals", "user", "inviter" ],
    state: (0, _seamlessImmutable.default)({
        userId: -1,
        nickname: "",
        face: "",
        key: "",
        inviteeTicketValue: -1,
        inviterTicketValue: -1
    }),
    reducers: _defineProperty({}, _actionTypes.USER_INVITER_INFO_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, t);
    }),
    selectors: function() {
        return {
            getInviterInfo: function(e) {
                return e.globals.user.inviter;
            }
        };
    }
};

exports.default = _default;