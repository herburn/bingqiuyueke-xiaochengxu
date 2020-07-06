var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "PersonalFilter",
    props: {
        isShowFilter: {
            type: Boolean,
            default: !1
        },
        filterTabItems: {
            type: Array,
            default: [ {
                label: "门店",
                value: "box",
                isActive: !1,
                badgeNum: 0
            }, {
                label: "课程",
                value: "class",
                isActive: !1,
                badgeNum: 0
            } ]
        },
        boxFilter: {
            type: Array,
            default: []
        },
        classFilter: {
            type: Array,
            default: []
        }
    },
    data: {
        scrollTop: 0
    },
    watch: {},
    methods: {
        changeFilter: function(e) {
            this.$emit("changeFilter", e);
        },
        tapItem: function(e, t) {
            this.$emit("tapItem", {
                eventType: e,
                data: t
            });
        }
    }
}, {
    info: {
        components: {
            "popover-layout-filter": {
                path: "./../../../../components/common/feedback/PopoverLayoutFilter"
            },
            "select-one-filter": {
                path: "./../../../../components/common/combination/SelectColumnOne"
            },
            "select-two-filter": {
                path: "./../../../../components/common/combination/SelectColumnTwo"
            }
        },
        on: {
            "1179-0": [ "changeFilter" ],
            "1179-1": [ "tapItem" ],
            "1179-2": [ "tapItem" ]
        }
    },
    handlers: {
        "1179-0": {
            changeFilter: function() {
                var e = arguments[arguments.length - 1];
                this.changeFilter(e);
            }
        },
        "1179-1": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("box", e);
            }
        },
        "1179-2": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("class", e);
            }
        }
    },
    models: {},
    refs: void 0
});