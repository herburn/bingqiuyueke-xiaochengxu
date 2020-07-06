Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(t) {
        t.mixin({
            beforeCreate: function() {
                this.$invokeChild = function(t, e) {
                    var o = this.$wx.selectComponent("#".concat(t)) || this.$root.$wx.selectComponent("#".concat(t));
                    if (o) {
                        var r = o.$wepy;
                        if (e in r) {
                            for (var n = arguments.length, a = new Array(2 < n ? n - 2 : 0), c = 2; c < n; c++) a[c - 2] = arguments[c];
                            return r[e].apply(r, a);
                        }
                        throw new Error("组件 ".concat(t, " 没有定义 ").concat(e, " 方法，请确认是否有定义在 extraEvents 里"));
                    }
                    throw new Error("没有找到此组件：".concat(t));
                };
            }
        });
    }
};

exports.default = _default;