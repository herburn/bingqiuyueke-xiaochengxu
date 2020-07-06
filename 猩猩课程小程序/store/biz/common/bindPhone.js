Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../../types/index.js"), _default = {
    namespace: [ "biz", "bindPhone" ],
    actions: {
        getPhoneCode: [ _actionTypes.PHONE_CODE_GET, void 0, function() {
            return {
                isFetch: !0
            };
        } ],
        handleBindPhone: [ _actionTypes.BIND_PHONE_POST, void 0, function() {
            return {
                isFetch: !0
            };
        } ],
        handleBindPhoneByWX: [ _actionTypes.BIND_PHONE_BY_WX_GET, void 0, function() {
            return {
                isFetch: !0
            };
        } ]
    }
};

exports.default = _default;