var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "WrapperSticky",
    options: {
        multipleSlots: !0
    },
    props: {
        height: {
            type: String,
            default: ""
        },
        top: {
            type: Number,
            default: 0
        },
        left: {
            type: Number,
            default: 0
        },
        scrollThreshold: {
            type: Number,
            default: 0
        },
        zIndex: {
            type: Number,
            default: 600
        }
    },
    data: {
        isPullDown: !1,
        isFixed: !1
    },
    computed: {
        topPx: function() {
            return "".concat(this.top, "px");
        },
        leftPx: function() {
            return "".concat(this.left, "px");
        }
    },
    extraEvents: {
        updateScrollTop: function(e) {
            var t = e > this.scrollThreshold;
            this.isFixed !== t && -1 !== this.top && (this.isFixed = t, this.isPullDown = t, 
            this.$emit("changeSticky", {
                isSticky: this.isFixed
            }));
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