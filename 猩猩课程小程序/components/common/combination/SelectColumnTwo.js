var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "SelectColumnTwo",
    props: {
        config: {
            type: Object,
            default: []
        },
        data: {
            type: Array,
            default: []
        }
    },
    data: {},
    methods: {
        tapItemHandler: function(e) {
            this.$emit("tapItem", e);
        }
    }
}, {
    info: {
        components: {
            "animation-wrapper": {
                path: "./../enrichment/WrapperAnimation"
            }
        },
        on: {}
    },
    handlers: {
        "1177-0": {
            tap: function(e) {
                this.tapItemHandler(e);
            }
        },
        "1177-1": {
            tap: function(e) {
                this.tapItemHandler(e);
            }
        }
    },
    models: {},
    refs: void 0
});