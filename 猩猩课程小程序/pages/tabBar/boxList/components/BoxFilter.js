var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BoxFilter",
    props: {
        isShowFilter: {
            type: Boolean,
            default: !1
        },
        filterTabItems: {
            type: Array,
            default: [ {
                label: "地区",
                value: "city",
                isActive: !1,
                badgeNum: 0
            }, {
                label: "主题",
                value: "theme",
                isActive: !1,
                badgeNum: 0
            } ]
        },
        boxFilter: {
            type: Array,
            default: []
        },
        themeFilter: {
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
            "select-two-filter": {
                path: "./../../../../components/common/combination/SelectColumnTwo"
            },
            "select-three-filter": {
                path: "./../../../../components/common/combination/SelectColumnThree"
            }
        },
        on: {
            "1020-0": [ "changeFilter" ],
            "1020-1": [ "tapItem" ],
            "1020-2": [ "tapItem" ]
        }
    },
    handlers: {
        "1020-0": {
            changeFilter: function() {
                var e = arguments[arguments.length - 1];
                this.changeFilter(e);
            }
        },
        "1020-1": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("box", e);
            }
        },
        "1020-2": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.tapItem("theme", e);
            }
        }
    },
    models: {},
    refs: void 0
});