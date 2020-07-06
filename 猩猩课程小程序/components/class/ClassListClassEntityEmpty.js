var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "ClassListClassEntityEmpty",
    props: {
        emptyReason: {
            type: String,
            default: ""
        }
    },
    methods: {
        tap: function() {
            this.$invokeParent("ClassListWithFilter", "tapItem", "duration", {
                type: "isShowFinished",
                isStorage: !1
            }), this.$invokeParent("ClassListWithFilter", "changeFilter", {
                eventType: "confirm",
                data: {}
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1222-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.tap(t);
            }
        }
    },
    models: {},
    refs: void 0
});