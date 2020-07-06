Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.socketConfig = exports.httpConfig = exports.debugConfig = exports.logReportConfig = exports.version = void 0;

var _logConfig = _interopRequireDefault(require("./logConfig.js")), _debugConfig = _interopRequireDefault(require("./debugConfig.js")), _httpConfig = _interopRequireDefault(require("./httpConfig.js")), _socketConfig = _interopRequireDefault(require("./socketConfig.js"));

function _interopRequireDefault(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}

var envMap = {
    production: "prod",
    development: "dev",
    uat: "uat"
}, version = "2.17.2";

exports.version = version;

var prodEnv = envMap.production, isBuild = !0, logReportConfig = isBuild ? _logConfig.default : {};

exports.logReportConfig = logReportConfig;

var httpConfig, socketConfig, debugConfig = isBuild ? {} : _debugConfig.default;

(exports.debugConfig = debugConfig).menu || wx.setStorageSync("debugEnv", "dev"), 
exports.httpConfig = httpConfig, exports.socketConfig = socketConfig, debugConfig.menu ? "prod" === wx.getStorageSync("env") ? (exports.httpConfig = httpConfig = _httpConfig.default.prod, 
exports.socketConfig = socketConfig = _socketConfig.default.prod) : (exports.httpConfig = httpConfig = _httpConfig.default.dev, 
exports.socketConfig = socketConfig = _socketConfig.default.dev) : (exports.httpConfig = httpConfig = _httpConfig.default[prodEnv], 
exports.socketConfig = socketConfig = _socketConfig.default[prodEnv]);