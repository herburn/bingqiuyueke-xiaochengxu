function _default() {
    return {
        install: function(a, t) {
            var e = [];
            return t("loadData", function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                return e.splice(0, t);
            }), t("saveData", function(t) {
                Array.prototype.push.apply(e, "[object Array]" === Object.prototype.toString.call(t) ? t : [ t ]);
            }), {
                track: function(t, e) {
                    a.saveData(e.data), t(e);
                }
            };
        }
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;