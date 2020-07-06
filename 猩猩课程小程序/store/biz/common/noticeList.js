Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../../types/index.js"), _default = {
    namespace: [ "biz", "noticeList" ],
    actions: {
        fetchNoticeList: [ _actionTypes.NOTICE_LIST_GET, void 0, function() {
            return {
                isFetch: !0
            };
        } ]
    }
};

exports.default = _default;