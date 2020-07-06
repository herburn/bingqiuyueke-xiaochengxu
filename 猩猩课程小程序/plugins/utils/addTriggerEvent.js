Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(t) {
        t.mixin({
            beforeCreate: function() {
                this.$triggerEvent = function(t, e, i) {
                    this.$wx.triggerEvent(t, {
                        data: e,
                        _isCustomCom: !0
                    }, i);
                };
            }
        });
    }
};

exports.default = _default;