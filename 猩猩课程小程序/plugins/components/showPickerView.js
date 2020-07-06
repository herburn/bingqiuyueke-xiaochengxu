Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var childId = "__PickerView__", _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$showPickerView = function(e) {
                    var i = this, t = e.title, o = e.value, n = e.range, c = e.success, r = void 0 === c ? function() {} : c;
                    try {
                        return new Promise(function(e) {
                            i.$invokeChild(childId, "openPickerView", {
                                title: t,
                                value: o,
                                range: n,
                                success: function() {
                                    e.apply(void 0, arguments), r.apply(void 0, arguments);
                                }
                            });
                        });
                    } catch (e) {
                        console.log("未引入组件 ShowPickerViw", e);
                    }
                };
            }
        });
    }
};

exports.default = _default;