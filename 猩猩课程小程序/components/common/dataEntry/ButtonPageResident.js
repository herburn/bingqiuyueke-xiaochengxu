var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _ramda = require("./../../../vendor.js")(320);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var propFlip = (0, _ramda.flip)(_ramda.prop), status2Class = {
    enable: "btn-enable",
    disable: "btn-disable",
    enableGrey: "btn-enable-grey"
}, status2HoverClass = {
    enable: "btn-primary-hover-class",
    disable: "",
    enableGrey: "btn-grey-hover-class"
}, status2Enable = {
    enable: !0,
    disable: !1,
    enableGrey: !0
};

_core.default.component({
    name: "ButtonPageResident",
    props: {
        mode: {
            type: String,
            default: "single"
        },
        items: {
            type: Array,
            default: []
        },
        width: {
            type: String,
            default: "702rpx"
        },
        height: {
            type: String,
            default: "106rpx"
        }
    },
    computed: {
        itemsClass: function() {
            return (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.prop)("status"), propFlip(status2Class)))(this.items);
        },
        itemsEnable: function() {
            return (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.prop)("status"), propFlip(status2Enable)))(this.items);
        },
        itemsHoverClass: function() {
            return (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.prop)("status"), propFlip(status2HoverClass)))(this.items);
        },
        cuttingClass: function() {
            return (0, _ramda.all)((0, _ramda.propEq)("status", "enable"))(this.items) ? "page-btn-enable-cutting" : "";
        }
    },
    methods: {
        tapBtn: function(t, e) {
            this.itemsEnable[e] && this.$emit("tapPageBtn", {
                item: t,
                index: e
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1050-0": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[0], 0);
            }
        },
        "1050-1": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[0], 0);
            }
        },
        "1050-2": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[1], 1);
            }
        },
        "1050-3": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[0], 0);
            }
        },
        "1050-4": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[0], 0);
            }
        },
        "1050-5": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[1], 1);
            }
        },
        "1050-6": {
            tap: function() {
                var t = this;
                t.tapBtn(t.items[1], 1);
            }
        }
    },
    models: {},
    refs: void 0
});