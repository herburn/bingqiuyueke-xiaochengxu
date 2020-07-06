Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _plugin = _interopRequireDefault(require("./../../elementsId/plugin.js")), _mergeProperty = _interopRequireDefault(require("./mergeProperty.js")), _checkAuth = _interopRequireDefault(require("./checkAuth.js")), _log = _interopRequireDefault(require("./log.js")), _router = _interopRequireDefault(require("./router.js")), _loginRegister = _interopRequireDefault(require("./loginRegister.js")), _pageState = _interopRequireDefault(require("./pageState.js")), _promiseWxApi = _interopRequireDefault(require("./promiseWxApi.js")), _redNotification = _interopRequireDefault(require("./redNotification.js")), _requestPermission = _interopRequireDefault(require("./requestPermission.js")), _openDialog = _interopRequireDefault(require("./openDialog.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = [ _mergeProperty.default, _plugin.default, _pageState.default, _router.default, _checkAuth.default, _log.default, _loginRegister.default, _promiseWxApi.default, _redNotification.default, _requestPermission.default, _openDialog.default ].reverse();

exports.default = _default;