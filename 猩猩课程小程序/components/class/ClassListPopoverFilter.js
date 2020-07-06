var _core = _interopRequireDefault(require("./../../tmp/index.js")), _ramda = require("./../../vendor.js")(320);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var propFlip = (0, _ramda.flip)(_ramda.prop), status2Class = {
    enable: "tab-info__label-enable",
    disable: "tab-info__label-disable"
};

_core.default.component({
    name: "ClassListPopoverFilter",
    props: {
        showClassFilterBox: {
            type: Boolean,
            default: !1
        },
        tabs: {
            type: Array,
            default: []
        },
        tabBoxes: {
            type: Object,
            default: {
                cities: [],
                areas: [],
                boxes: []
            }
        },
        tabClasses: {
            type: Object,
            default: {
                targets: [],
                types: [],
                classes: []
            }
        },
        tabDurations: {
            type: Array,
            default: []
        },
        activeTabValue: {
            type: null,
            default: 0
        },
        isShowEnd: {
            type: Boolean,
            default: !1
        },
        tabNumInfo: {
            type: Object,
            default: {
                class: 0,
                box: 0,
                duration: 0
            }
        }
    },
    _scrollList: [ 0, 0, 0 ],
    data: {
        activeIndex: 0,
        scrollTop: 0,
        contentHeight: "78.8%"
    },
    computed: {
        tabsClass: function() {
            return (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.prop)("status"), propFlip(status2Class)))(this.tabs);
        }
    },
    watch: {},
    methods: {
        onScroll: function(t) {
            var e;
            this._scrollList[this.activeIndex] = (null === (e = t.$wx.detail) || void 0 === e ? void 0 : e.scrollTop) || 0;
        },
        itemClick: function(t, e, a) {
            this.$emit("classFilterChange", {
                eventType: "itemClick",
                data: {
                    item: t,
                    index: e,
                    type: a
                }
            });
        },
        handleTabClick: function(t) {
            var e = t.value;
            e !== this.activeTabValue && this.$emit("classFilterChange", {
                eventType: "tabChange",
                data: {
                    value: e
                }
            });
        },
        confirm: function() {
            this.$emit("classFilterChange", {
                eventType: "confirm",
                data: {}
            }), this.$invokeChild("animation-wrapper", "closeAnimationModal");
        },
        clear: function() {
            this.$emit("classFilterChange", {
                eventType: "clear",
                data: {}
            });
        },
        closeFilterBox: function() {
            this.$emit("classFilterChange", {
                eventType: "maskClick",
                data: {}
            });
        },
        hiddenEndCourses: function() {
            this.$emit("classFilterChange", {
                eventType: "toggleShowEndClass",
                data: {
                    value: this.isShowEnd
                }
            });
        }
    }
}, {
    info: {
        components: {
            "animation-wrapper": {
                path: "./../common/enrichment/WrapperAnimation"
            }
        },
        on: {
            "1184-0": [ "cancel" ]
        }
    },
    handlers: {
        "1184-0": {
            cancel: function() {
                var t = arguments[arguments.length - 1];
                this.closeFilterBox(t);
            }
        },
        "1184-1": {
            tap: function(t) {
                this.handleTabClick(t);
            }
        },
        "1184-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.clear(t);
            }
        },
        "1184-3": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.confirm(t);
            }
        },
        "1184-4": {
            scroll: function() {
                var t = arguments[arguments.length - 1];
                this.onScroll(t);
            }
        },
        "1184-5": {
            tap: function(t, e) {
                this.itemClick(t, e, "target");
            }
        },
        "1184-6": {
            tap: function(t, e) {
                this.itemClick(t, e, "classType");
            }
        },
        "1184-7": {
            tap: function(t, e) {
                this.itemClick(t, e, "class");
            }
        },
        "1184-8": {
            tap: function(t, e) {
                this.itemClick(t, e, "city");
            }
        },
        "1184-9": {
            tap: function(t, e) {
                this.itemClick(t, e, "area");
            }
        },
        "1184-10": {
            tap: function(t, e) {
                this.itemClick(t, e, "box");
            }
        },
        "1184-11": {
            tap: function(t, e) {
                this.itemClick(t, e, "duration");
            }
        },
        "1184-12": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.hiddenEndCourses(t);
            }
        }
    },
    models: {},
    refs: void 0
});