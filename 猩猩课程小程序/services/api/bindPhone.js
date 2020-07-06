Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _PHONE_CODE_GET$BIND_, _md = _interopRequireDefault(require("./../../vendor.js")(327)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

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

var _default = (_defineProperty(_PHONE_CODE_GET$BIND_ = {}, _actionTypes.PHONE_CODE_GET, function(e) {
    var r = "".concat(_common.specialBase, "/user/wxBindSendCode"), t = (0, _md.default)(e + parseInt(e, 10).toString(16));
    try {
        return _common.http.post({
            url: r,
            data: {
                phonenumber: e,
                checksum: t
            }
        });
    } catch (e) {
        throw console.log("PHONE_CODE_GET error", e.rtn, e.msg, e.errMsg), e;
    }
}), _defineProperty(_PHONE_CODE_GET$BIND_, _actionTypes.BIND_PHONE_POST, function(e) {
    var r = "".concat(_common.specialBase, "/user/wxBindPhonenumber");
    try {
        return _common.http.post({
            url: r,
            data: e
        });
    } catch (e) {
        throw console.log("BIND_PHONE_POST error", e.rtn, e.msg, e.errMsg), e;
    }
}), _defineProperty(_PHONE_CODE_GET$BIND_, _actionTypes.BIND_PHONE_BY_WX_GET, function(e) {
    var r = e.iv, t = e.encryptedData, o = e.code, n = "".concat(_common.loginBase, "/user/bindPhoneNumberByWx");
    try {
        return _common.http.post({
            url: n,
            data: {
                iv: r,
                encryptedData: t,
                code: o
            }
        });
    } catch (e) {
        throw console.log("BIND_PHONE_BY_WX_GET error", e.rtn, e.msg, e.errMsg), e;
    }
}), _PHONE_CODE_GET$BIND_);

exports.default = _default;