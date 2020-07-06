Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var id = "__LoadingPage__", _default = {
    install: function(i) {
        i.mixin({
            beforeCreate: function() {
                this.$showLoading = function(i) {
                    try {
                        this.$invokeChild(id, "showLoading", i);
                    } catch (i) {
                        console.error("未引入组件 LoadingPage");
                    }
                }, this.$hideLoading = function() {
                    try {
                        this.$invokeChild(id, "hideLoading");
                    } catch (i) {
                        console.error("未引入组件 LoadingPage");
                    }
                }, this.$failLoading = function(i) {
                    try {
                        this.$invokeChild(id, "failLoading", i);
                    } catch (i) {
                        console.error("未引入组件 LoadingPage");
                    }
                };
            }
        });
    }
};

exports.default = _default;