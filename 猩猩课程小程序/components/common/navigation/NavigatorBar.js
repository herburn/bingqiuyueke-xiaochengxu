var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "NavigatorBar",
    options: {
        multipleSlots: !0
    },
    props: {
        menu: {
            type: String,
            default: "navigation"
        },
        title: {
            type: String,
            default: ""
        },
        backgroundColor: {
            type: String,
            default: ""
        }
    },
    data: {
        isShowBackLastPage: !1,
        menuButtonHeightPx: 32,
        statusBarHeightPxStr: "20px",
        navigatorHeightPxStr: "40px",
        menuButtonHeightPxStr: "32px",
        menuButtonRightPxStr: "10px",
        navigatorFullHeightPxStr: "60px",
        titleSizePxStr: "18px",
        leftSizePxStr: "16px",
        navMenuWidthPxStr: "".concat(Math.round(87), "px")
    },
    attached: function() {
        this.isShowBackLastPage = 1 < getCurrentPages().length, this._initHeightStyle();
    },
    methods: {
        backLastPage: function() {
            this.$router.navigateBack();
        },
        backHome: function() {
            this.$router.backHome();
        }
    },
    _initHeightStyle: function() {
        var t = {};
        t.menuButtonHeightPx = this.$app.globalData.menuButtonHeightPx, t.statusBarHeightPxStr = "".concat(this.$app.globalData.statusBarHeightPx, "px"), 
        t.navigatorHeightPxStr = "".concat(this.$app.globalData.navigatorHeightPx, "px"), 
        t.menuButtonHeightPxStr = "".concat(this.$app.globalData.menuButtonHeightPx, "px"), 
        t.menuButtonRightPxStr = "".concat(this.$app.globalData.menuButtonRightPx, "px"), 
        t.navigatorFullHeightPxStr = "".concat(this.$app.globalData.navigatorFullHeightPx, "px"), 
        t.titleSizePxStr = "".concat(Math.round(.5625 * t.menuButtonHeightPx), "px"), t.leftSizePxStr = "".concat(Math.round(.5 * t.menuButtonHeightPx), "px"), 
        t.navMenuWidthPxStr = this.isShowBackLastPage ? "".concat(Math.round(2.71875 * t.menuButtonHeightPx), "px") : t.menuButtonHeightPxStr, 
        this.$wx.setData(t);
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1029-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.backLastPage(t);
            }
        },
        "1029-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.backHome(t);
            }
        }
    },
    models: {},
    refs: void 0
});