Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _version = require("./../../utils/version.js"), _default = {
    install: function(e) {
        e.mixin({
            onLoad: function() {
                this.$isLowerVersionThanSystem = function(e) {
                    var t = this.$store.getState(), s = this.$store.selectors.getSystemInfo(t).SDKVersion;
                    return (0, _version.compareVersion)(s, e) < 0;
                };
            }
        });
    }
};

exports.default = _default;