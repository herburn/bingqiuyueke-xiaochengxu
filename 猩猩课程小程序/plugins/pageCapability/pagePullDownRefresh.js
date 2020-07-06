Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(e) {
        e.mixin({
            onPullDownRefresh: function() {
                this._onPullDownRefresh();
            }
        });
    }
};

exports.default = _default;