Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _bindPhone = _interopRequireDefault(require("./bindPhone.js")), _messageSubscribe = _interopRequireDefault(require("./messageSubscribe.js")), _noticeList = _interopRequireDefault(require("./noticeList.js")), _payCallback = _interopRequireDefault(require("./payCallback.js")), _sharePicture = _interopRequireDefault(require("./sharePicture.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    bindPhone: _bindPhone.default,
    messageSubscribe: _messageSubscribe.default,
    noticeList: _noticeList.default,
    payCallback: _payCallback.default,
    sharePicture: _sharePicture.default
};

exports.default = _default;