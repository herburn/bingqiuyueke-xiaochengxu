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
    namespace: [ "globals", "user", "vip" ],
    state: (0, _seamlessImmutable.default)({
        levelId: -1,
        curExp: -1,
        cardUrl: "",
        backgroundUrl: "",
        userVipEnable: -1
    }),
    reducers: _defineProperty({}, _actionTypes.USER_VIP_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, t);
    }),
    selectors: function(e) {
        var r = e.createSelector, t = e.getSelector;
        return {
            getVipInfo: function(e) {
                return e.globals.user.vip;
            },
            getMyVipLevelConfig: r(t("getVipLevelConfigMap"), t("getVipInfo"), function(e, r) {
                return e[r.levelId] || {};
            })
        };
    }
};

exports.default = _default;