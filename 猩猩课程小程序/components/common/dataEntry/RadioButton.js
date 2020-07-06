var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "RadioButton",
    props: {
        numArray: {
            type: Array,
            default: [ {
                label: "1人",
                value: 1,
                recommend: !1,
                disabled: !1,
                miniFirstTip: !1
            } ]
        },
        selectedIndex: {
            type: Number,
            default: -1
        }
    },
    data: {
        activeIndex: -1
    },
    watch: {
        selectedIndex: function(e) {
            this.activeIndex = e;
        }
    },
    methods: {
        handleTap: function(e, t) {
            this.$emit("confirmNum", {
                item: e,
                index: t
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1193-0": {
            tap: function(e, t) {
                this.handleTap(e, t);
            }
        }
    },
    models: {},
    refs: void 0
});