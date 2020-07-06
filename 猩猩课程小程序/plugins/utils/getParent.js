Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$getParent = function(r) {
                    return function e(t) {
                        if (void 0 === t.$parent) throw new Error("没有找到父组件：".concat(r));
                        if (t.$parent.name !== r) return e(t.$parent);
                        return t.$parent;
                    }(this);
                };
            }
        });
    }
};

exports.default = _default;