Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _store = require("./../../store/index.js");

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var _default = {
    install: function(i) {
        i.mixin({
            beforeCreate: function() {
                if (this.$store = _store.store, checkValidComputed(this.$options)) {
                    for (var e, t = this.$options.computed, r = 0, o = Object.keys(t); r < o.length; r++) {
                        var n = o[r];
                        "resultValMap" in t[n] && (e = e || _objectSpread({}, t[n].resultValMap), t[n][this.$id] = e);
                    }
                    i.observe({
                        vm: this,
                        key: "",
                        value: e,
                        parent: "",
                        root: !0
                    });
                }
            },
            created: function() {
                var o = this;
                if (checkValidComputed(this.$options)) {
                    var n = this.$options.computed;
                    this.$unsubscribe = _store.store.subscribe(function() {
                        for (var e = 0, t = Object.keys(n); e < t.length; e++) {
                            var r = t[e];
                            "redux" in n[r] && o._computedWatchers[r].get();
                        }
                    });
                }
            },
            detached: function() {
                this.$unsubscribe && this.$unsubscribe();
            }
        });
    }
};

function checkValidComputed(e) {
    if (!("computed" in e)) return !1;
    for (var t = e.computed, r = 0, o = Object.keys(t); r < o.length; r++) {
        if ("redux" in t[o[r]]) return !0;
    }
    return !1;
}

exports.default = _default;