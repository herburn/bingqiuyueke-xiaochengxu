var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _ramda = require("./../../../vendor.js")(320), _moment = _interopRequireDefault(require("./../../../vendor.js")(315)), _date = require("./../../../utils/date.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "NavbarWeek",
    props: {
        mode: {
            type: String,
            default: "week"
        },
        weeks: {
            type: Array,
            default: []
        },
        weekActive: {
            type: null,
            default: 0
        },
        pageName: {
            type: String,
            default: ""
        }
    },
    computed: {
        weeksText: function() {
            return (0, _ramda.map)(function(e) {
                var t = (0, _moment.default)(e);
                return {
                    date: t.format("M.D"),
                    label: (0, _date.weekIndex2ZhCN)(t.isoWeekday() - 1),
                    value: e
                };
            })(this.weeks);
        },
        realWeekActive: function() {
            return "number" == typeof this.weekActive ? this.weekActive : (0, _ramda.indexOf)(this.weekActive, this.weeks);
        },
        campActive: function() {
            return ("camp" === this.mode || "all" === this.mode) && this.weekActive === this.weeks.length;
        }
    },
    watch: {
        weekActive: function() {
            this.$emit("change", {
                date: this.weeks[this.realWeekActive]
            });
        }
    },
    methods: {
        tapWeek: function(e) {
            this.realWeekActive !== e && this.$emit("switchWeek", {
                week: this.weeks[e],
                index: e
            });
        },
        tapCamp: function() {
            this.$emit("onTapCamp");
        },
        tapPersonal: function() {
            this.$emit("onTapPersonal");
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1218-0": {
            tap: function(e) {
                this.tapWeek(e);
            }
        },
        "1218-1": {
            tap: function(e) {
                this.tapWeek(e);
            }
        },
        "1218-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapCamp(e);
            }
        },
        "1218-3": {
            tap: function(e) {
                this.tapWeek(e);
            }
        },
        "1218-4": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapPersonal(e);
            }
        },
        "1218-5": {
            tap: function(e) {
                this.tapWeek(e);
            }
        },
        "1218-6": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapCamp(e);
            }
        },
        "1218-7": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapPersonal(e);
            }
        }
    },
    models: {},
    refs: void 0
});