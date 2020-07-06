Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mapSelectors = void 0;

var mapSelectors = function(e) {
    for (var a = Object.create(null), t = Object.create(null), r = function() {
        var r = n[l], s = e[r];
        t[r] = Object.preventExtensions({
            val: void 0
        }), a[r] = function() {
            var e = s.call(this, this.$store.getState()), t = a[r][this.$id];
            return t[r].val !== e && (t[r] = Object.preventExtensions({
                val: e
            })), t[r].val;
        }, a[r].redux = !0, a[r].resultValMap = t;
    }, l = 0, n = Object.keys(e); l < n.length; l++) r();
    return a;
};

exports.mapSelectors = mapSelectors;