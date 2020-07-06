var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CampListPopoverFilter",
    props: {
        showFilter: {
            type: Boolean,
            default: !1
        },
        tagFilter: {
            type: Array,
            default: []
        }
    },
    data: {},
    computed: {},
    watch: {},
    methods: {
        handleChangeFilter: function(e) {
            var t = e.eventType, n = e.data;
            this.$emit("changeFilter", {
                eventType: t,
                data: n
            });
        },
        onItemTap: function(e) {
            this.$emit("tapItem", e);
        }
    }
}, {
    info: {
        components: {
            "select-column-three": {
                path: "./../../../../components/common/combination/SelectColumnThree"
            },
            "popover-layout-filter": {
                path: "./../../../../components/common/feedback/PopoverLayoutFilter"
            }
        },
        on: {
            "1182-0": [ "changeFilter" ],
            "1182-1": [ "tapItem" ]
        }
    },
    handlers: {
        "1182-0": {
            changeFilter: function() {
                var e = arguments[arguments.length - 1];
                this.handleChangeFilter(e);
            }
        },
        "1182-1": {
            tapItem: function() {
                var e = arguments[arguments.length - 1];
                this.onItemTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});