Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _screen = require("./../../utils/screen.js"), _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$px2rpx = _screen.px2rpx;
            }
        });
    }
};

exports.default = _default;