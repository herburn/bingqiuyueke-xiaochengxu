var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "TextMultiLineWithUnfold",
    props: {
        contentHeight: {
            type: String,
            default: "120rpx"
        },
        arrowStyle: {
            type: String,
            default: ""
        },
        paddingBottom: {
            type: String,
            default: "48rpx"
        }
    },
    data: {
        isAuto: !1
    },
    computed: {
        height: function() {
            return this.isAuto ? "auto" : this.contentHeight;
        }
    },
    methods: {
        toggleVisible: function(t) {
            this.isAuto = !0, this.paddingBottom = 0, this.$emit("toggleVisible", t);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1191-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.toggleVisible(t);
            }
        }
    },
    models: {},
    refs: void 0
});