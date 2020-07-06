Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "interceptors", {
    enumerable: !0,
    get: function() {
        return _interceptorsConfig.default;
    }
}), Object.defineProperty(exports, "persistConfig", {
    enumerable: !0,
    get: function() {
        return _persistConfig.default;
    }
}), exports.apiConfig = exports.storeConfig = exports.saConfig = void 0;

var _biz = _interopRequireDefault(require("./../store/biz/index.js")), _domains = _interopRequireDefault(require("./../store/domains/index.js")), _globals = _interopRequireDefault(require("./../store/globals/index.js")), _services = _interopRequireDefault(require("./../store/services/index.js")), _interceptorsConfig = _interopRequireDefault(require("./interceptorsConfig.js")), _envConfig = require("./envConfig/index.js"), _persistConfig = _interopRequireDefault(require("./persistConfig.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var saConfig = {
    enable: _envConfig.logReportConfig.sa
};

exports.saConfig = saConfig;

var storeConfig = {
    models: {
        biz: _biz.default,
        domains: _domains.default,
        globals: _globals.default,
        services: _services.default
    },
    sagaErrorHandler: function(e) {
        try {
            var r = {
                name: e.name,
                message: e.message,
                sagaStack: e.sagaStack
            };
            console.log("saga error", r);
        } catch (e) {
            console.log("error...");
        }
    }
};

exports.storeConfig = storeConfig;

var apiConfig = {
    loginUrl: "".concat(_envConfig.httpConfig.loginBase, "/waUser/login"),
    logUrl: "",
    errorCode: {
        1503: !0
    },
    logWhiteList: [ "https://ws.supermonkey.com.cn/appLog/log", "/waUser/reportId", "/report/statistic", "/test/statistic", "/weAppUserSubscribeMsg/report", "/wxNormalReport/reportModalConfirm" ]
};

exports.apiConfig = apiConfig;