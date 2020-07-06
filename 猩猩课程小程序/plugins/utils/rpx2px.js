Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _screen = require("./../../utils/screen.js"), _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$rpx2px = _screen.rpx2px;
            }
        });
    }
};

exports.default = _default;