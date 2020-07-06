Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var _default = _defineProperty({}, _actionTypes.NOTICE_LIST_GET, function(e) {
    var r = e.scheduleId, t = "".concat(_common.specialBase, "/message/getWechatCheckinGroupMsg");
    try {
        return _common.http.get({
            url: t,
            data: {
                scheduleId: r
            }
        });
    } catch (e) {
        throw console.log("NOTICE_LIST_GET error", e.rtn, e.msg, e.errMsg), e;
    }
});

exports.default = _default;