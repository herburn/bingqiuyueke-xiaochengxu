Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = pluginInit;

var _components = _interopRequireDefault(require("./components/index.js")), _globals = _interopRequireDefault(require("./globals/index.js")), _pageCapability = _interopRequireDefault(require("./pageCapability/index.js")), _redux = _interopRequireDefault(require("./redux/index.js")), _subscribeMsg = _interopRequireDefault(require("./subscribeMsg/index.js")), _utils = _interopRequireDefault(require("./utils/index.js")), _sma = _interopRequireDefault(require("./sma/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function pluginInit(e) {
    _sma.default.forEach(e.use, e), _utils.default.forEach(e.use, e), _subscribeMsg.default.forEach(e.use, e), 
    _pageCapability.default.forEach(e.use, e), _globals.default.forEach(e.use, e), e.use(_redux.default), 
    _components.default.forEach(e.use, e);
}