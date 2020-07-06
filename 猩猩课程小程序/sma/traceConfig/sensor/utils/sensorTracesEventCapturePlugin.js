Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _sensorTracesEventCapture = _interopRequireDefault(require("./sensorTracesEventCapture.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$sensorTracesEventCapture = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.name, a = e.type, r = e.responseRegionId, n = e.dataset, s = e.comData;
                    (0, _sensorTracesEventCapture.default)({
                        name: t || this.name,
                        type: a,
                        responseRegionId: r,
                        dataset: n,
                        comData: s
                    });
                };
            }
        });
    }
};

exports.default = _default;