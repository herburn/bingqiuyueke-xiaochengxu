Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$invokeParent = function(e, t) {
                    var r = this.$getParent(e);
                    if (!(t in r)) throw new Error("父组件 ".concat(e, " 没有找到 ").concat(t, " 方法"));
                    for (var n = arguments.length, a = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
                    r[t].apply(r, a);
                };
            }
        });
    }
};

exports.default = _default;