var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "TooltipBackHome",
    props: {
        isShow: {
            type: Boolean,
            default: !1
        }
    },
    data: {
        promptTop: 68,
        promptLeft: 24,
        left: 87
    },
    attached: function() {
        var t = this.$app.globalData, e = t.navigatorFullHeightPx, o = t.menuButtonRightPx, a = t.menuButtonHeightPx;
        this.promptTop = e + 11, this.promptLeft = o, this.left = 2.71875 * a * .66666;
    }
}, {
    info: {
        components: {
            "show-modal": {
                path: "./Modal"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});