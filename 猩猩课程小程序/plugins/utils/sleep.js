Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _thread = require("./../../utils/thread.js"), _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$sleep = _thread.sleep;
            }
        });
    }
};

exports.default = _default;