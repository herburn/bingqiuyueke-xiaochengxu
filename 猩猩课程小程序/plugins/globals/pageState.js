Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constants = require("./../../constants/index.js"), _default = {
    install: function(t) {
        t.mixin({
            data: {
                visibility: "hidden"
            },
            beforeCreate: function() {
                this.$pageState = _constants.PageState.beforeCreate, this.$isActive = !0;
            },
            onLoad: function() {
                this.$pageState = _constants.PageState.LOAD, this.$isActive = !0;
            },
            onShow: function() {
                this.$pageState = _constants.PageState.SHOW, this.$isActive = !0;
            },
            onReady: function() {
                this.visibility = "visible", this.$pageState = _constants.PageState.READY, this.$isActive = !0, 
                this.$isReady = !0;
            },
            onHide: function() {
                this.$pageState = _constants.PageState.HIDE, this.$isActive = !1;
            },
            onUnload: function() {
                this.$pageState = _constants.PageState.UNLOAD, this.$isActive = !1;
            }
        });
    }
};

exports.default = _default;