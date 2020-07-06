var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "Toast",
    data: {
        title: "",
        isShowToast: !1,
        interval: 2e3,
        mask: !0
    },
    extraEvents: {
        openShowToast: function(t) {
            var e = this;
            if ("string" == typeof t) this.title = t; else {
                var i = t.title, o = void 0 === i ? "" : i, s = t.interval, n = void 0 === s ? 2e3 : s, a = t.mask, r = void 0 === a || a;
                this.title = o, this.interval = n, this.mask = !!r;
            }
            this.isShowToast = !0, setTimeout(function() {
                return e.isShowToast = !1;
            }, this.interval);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});