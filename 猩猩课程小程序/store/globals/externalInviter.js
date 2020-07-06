Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js");

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

var _default = {
    namespace: [ "globals", "external", "inviter" ],
    actions: {
        setExternalInviter: _actionTypes.EXTERNAL_INVITER_PUT
    },
    state: (0, _seamlessImmutable.default)({
        inviterUserId: -1,
        inviterKey: ""
    }),
    reducers: _defineProperty({}, _actionTypes.EXTERNAL_INVITER_PUT, function(e, t) {
        var r = t.payload;
        return (0, _seamlessImmutable.default)(r);
    }),
    selectors: function() {
        return {
            getExternalInviter: function(e) {
                return e.globals.external.inviter;
            }
        };
    }
};

exports.default = _default;