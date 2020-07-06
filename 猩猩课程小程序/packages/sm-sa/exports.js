Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.saInit = saInit, Object.defineProperty(exports, "mta", {
    enumerable: !0,
    get: function() {
        return _mta_analysis.default;
    }
}), Object.defineProperty(exports, "SaMixin", {
    enumerable: !0,
    get: function() {
        return _SaMixin.default;
    }
});

var _mta_analysis = _interopRequireDefault(require("./mta_analysis.js")), _SaMixin = _interopRequireDefault(require("./SaMixin.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function saInit(e) {
    var t = e.enable;
    _SaMixin.default.setEnable(t);
}