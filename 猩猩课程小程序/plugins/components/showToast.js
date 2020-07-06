Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var childId = "__Toast__", _default = {
    install: function(t) {
        t.mixin({
            beforeCreate: function() {
                this.$showToast = function(t) {
                    try {
                        this.$invokeChild(childId, "openShowToast", t);
                    } catch (t) {
                        console.log("未引入组件 showToast", t);
                    }
                };
            }
        });
    }
};

exports.default = _default;