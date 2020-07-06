function mergeProperty(e, t) {
    for (var r, n = 0, o = Object.keys(t); n < o.length; n++) {
        var i = o[n];
        0 !== (r = i).indexOf("_") && "globalData" !== r && "name" !== r || (i in e && console.error("".concat(i, " 名字冲突")), 
        e[i] = t[i]);
    }
    "extraEvents" in t && Object.assign(e, t.extraEvents);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(e) {
        e.mixin({
            onLaunch: function() {
                mergeProperty(this, this.$options);
            },
            beforeCreate: function() {
                mergeProperty(this, this.$options);
            }
        });
    }
};

exports.default = _default;