var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "PopoverLayoutFilter",
    options: {
        multipleSlots: !0
    },
    props: {
        config: {
            type: Object,
            default: {
                contentHeight: "78.8%"
            }
        },
        isShow: {
            type: Boolean,
            default: !1
        },
        tabItems: {
            type: Array,
            default: []
        },
        isShowClearBtn: {
            type: Boolean,
            default: !0
        }
    },
    data: {},
    methods: {
        tabTapHandler: function(e) {
            this.$emit("changeFilter", {
                eventType: "tab",
                data: e
            });
        },
        clear: function() {
            this.$emit("changeFilter", {
                eventType: "clear",
                data: {}
            });
        },
        confirm: function() {
            this.$invokeChild("animation-wrapper", "closeAnimationModal"), this.$emit("changeFilter", {
                eventType: "confirm",
                data: {}
            });
        },
        closeFilterBox: function() {
            this.$emit("changeFilter", {
                eventType: "mask",
                data: {}
            });
        }
    }
}, {
    info: {
        components: {
            "animation-wrapper": {
                path: "./../enrichment/WrapperAnimation"
            }
        },
        on: {
            "1176-0": [ "cancel" ]
        }
    },
    handlers: {
        "1176-0": {
            cancel: function() {
                var e = arguments[arguments.length - 1];
                this.closeFilterBox(e);
            }
        },
        "1176-1": {
            tap: function(e) {
                this.tabTapHandler(e);
            }
        },
        "1176-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.clear(e);
            }
        },
        "1176-3": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.confirm(e);
            }
        }
    },
    models: {},
    refs: void 0
});