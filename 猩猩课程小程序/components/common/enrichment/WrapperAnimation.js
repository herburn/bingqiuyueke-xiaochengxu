var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}

_core.default.component({
    name: "WrapperAnimation",
    options: {
        multipleSlots: !0
    },
    props: {
        zIndex: {
            type: Number,
            default: 100
        },
        show: {
            type: Boolean,
            default: !1
        },
        contentHeight: {
            type: String,
            default: ""
        }
    },
    data: {
        timer: null,
        animationTime: 700,
        slideUpAnimationEnd: !1,
        slideDownAnimationEnd: !1,
        downAnimate: !1
    },
    watch: {
        show: function(n) {
            !0 === n && (this.slideUpAnimationEnd = !1, this.slideDownAnimationEnd = !1, this.downAnimate = !1, 
            clearTimeout(this.timer));
        }
    },
    methods: {
        noop: function() {
            return !1;
        },
        cancel: function(n) {
            this.slideUpAnimationEnd && (this._closeAnimationModal(), this.$emit("cancel", n));
        },
        animationEnd: function() {
            this.show ? this.slideUpAnimationEnd = !0 : this.slideDownAnimationEnd = !0;
        }
    },
    extraEvents: {
        closeAnimationModal: function() {
            this._closeAnimationModal();
        }
    },
    _closeAnimationModal: function() {
        this.downAnimate = !0, this._fixNotSupportAnimationEnd();
    },
    _fixNotSupportAnimationEnd: function() {
        var n = this;
        clearTimeout(this.timer), this.timer = setTimeout(function() {
            n.slideDownAnimationEnd || (n.slideDownAnimationEnd = !0);
        }, this.animationTime);
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1206-0": {
            tap: function() {
                var n = arguments[arguments.length - 1];
                this.cancel(n);
            },
            touchmove: function() {
                var n = arguments[arguments.length - 1];
                this.noop(n);
            }
        },
        "1206-2": {
            animationend: function() {
                var n = arguments[arguments.length - 1];
                this.animationEnd(n);
            },
            tap: function() {
                var n = arguments[arguments.length - 1];
                this.noop(n);
            }
        }
    },
    models: {},
    refs: void 0
});