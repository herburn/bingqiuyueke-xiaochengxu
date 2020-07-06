var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "SelectColumnThree",
    options: {
        multipleSlots: !0
    },
    props: {
        config: {
            type: Object,
            default: {
                width: "182rpx",
                padding: "18rpx"
            }
        },
        data: {
            type: Array,
            default: []
        }
    },
    data: {
        scrollTop: 0
    },
    methods: {
        tapItem: function(e) {
            this.$emit("tapItem", e);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1178-0": {
            tap: function(e, t) {
                this.tapItem(e, t);
            }
        }
    },
    models: {},
    refs: void 0
});