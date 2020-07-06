Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.basic = void 0;

var e = Behavior({
    methods: {
        $emit: function() {
            this.triggerEvent.apply(this, arguments);
        },
        getRect: function(e, t) {
            var n = this;
            return new Promise(function(r) {
                wx.createSelectorQuery().in(n)[t ? "selectAll" : "select"](e).boundingClientRect(function(e) {
                    t && Array.isArray(e) && e.length && r(e), !t && e && r(e);
                }).exec();
            });
        },
        set: function(e, t) {
            var n = this, r = [];
            return e && r.push(function(e, t) {
                return new Promise(function(n) {
                    e.setData(t, n);
                });
            }(this, e)), Promise.all(r).then(function(e) {
                return t && "function" == typeof t && t.call(n), e;
            });
        }
    }
});

exports.basic = e;