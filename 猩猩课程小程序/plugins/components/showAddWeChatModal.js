Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var childId = "__ModalAddWeChat__", _default = {
    install: function(d) {
        d.mixin({
            beforeCreate: function() {
                this.$addFriend = function(d) {
                    try {
                        this.$invokeChild(childId, "addFriend", d);
                    } catch (d) {
                        console.log("未引入组件 ModalAddWeChat", d);
                    }
                }, this.$addGroup = function(d) {
                    try {
                        this.$invokeChild(childId, "addGroup", d);
                    } catch (d) {
                        console.log("未引入组件 ModalAddWeChat", d);
                    }
                };
            }
        });
    }
};

exports.default = _default;