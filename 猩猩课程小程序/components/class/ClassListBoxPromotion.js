var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassListBoxPromotion",
    props: {
        info: {
            type: Object,
            default: {
                relateId: "",
                referenceId: "",
                title: "",
                subtitle: "",
                buttonText: ""
            }
        }
    },
    methods: {
        tap: function() {
            this.$emit("tapClassBoxPromotion", this.info);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1224-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});