Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _log = _interopRequireDefault(require("./../../utils/log.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            onLaunch: function() {
                this.$log = _log.default;
            },
            beforeCreate: function() {
                this.$log = _log.default;
            }
        });
    }
};

exports.default = _default;