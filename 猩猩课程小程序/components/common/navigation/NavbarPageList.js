var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "NavbarPageList",
    props: {
        courses: {
            type: Array,
            default: []
        },
        selectedValue: {
            type: String,
            default: ""
        },
        isFilterBtn: {
            type: Boolean,
            default: !1
        },
        isFilterActive: {
            type: Boolean,
            default: !1
        }
    },
    methods: {
        tapCourse: function(e) {
            e.value !== this.selectedValue && this.$emit("switchCourse", e);
        },
        tapFilter: function() {
            this.$emit("switchFilter");
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1035-0": {
            tap: function(e) {
                this.tapCourse(e);
            }
        },
        "1035-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapFilter(e);
            }
        }
    },
    models: {},
    refs: void 0
});