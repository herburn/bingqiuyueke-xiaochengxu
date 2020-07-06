var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _ramda = require("./../../../vendor.js")(320);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "NavbarPageDetail",
    props: {
        isSticky: {
            type: Boolean,
            default: !1
        },
        navItems: {
            type: Array,
            default: []
        },
        navActive: {
            type: null,
            default: 0
        },
        isShare: {
            type: Boolean,
            default: !0
        },
        enablePicker: {
            type: Boolean,
            default: !1
        },
        pickerRange: {
            type: Array,
            default: []
        },
        pickerValue: {
            type: String,
            default: ""
        },
        courseType: {
            type: String,
            default: "class"
        }
    },
    computed: {
        realWeekActive: function() {
            var e = this.navActive;
            return "number" == typeof e ? e : (0, _ramda.findIndex)((0, _ramda.propEq)("value", e))(this.navItems);
        },
        pickerIndex: function() {
            return (this.pickerRange || []).indexOf(this.pickerValue);
        }
    },
    methods: {
        tapNavActive: function(e) {
            this.realWeekActive !== e && this.$emit("switchPageNav", {
                navItem: this.navItems[this.realWeekActive],
                index: e
            });
        },
        share: function() {
            this.$emit("share");
        },
        onPickerChange: function(e) {
            var t = e.$wx.detail.value, a = this.pickerRange[t];
            this.$emit("changePicker", a);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1049-0": {
            change: function() {
                var e = arguments[arguments.length - 1];
                this.onPickerChange(e);
            }
        },
        "1049-1": {
            tap: function(e) {
                this.tapNavActive(e);
            }
        },
        "1049-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.share(e);
            }
        }
    },
    models: {},
    refs: void 0
});