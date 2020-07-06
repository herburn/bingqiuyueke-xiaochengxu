var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "LoadingPage",
    data: {
        status: "",
        failText: "加载失败",
        items: [ {
            label: "点击重新加载",
            status: "enable"
        } ]
    },
    methods: {
        reload: function() {
            this.status = "", this.$emit("reload");
        }
    },
    extraEvents: {
        showLoading: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : "加载中...";
            this.status = "loading", wx.showLoading({
                title: e
            });
        },
        hideLoading: function() {
            this.status = "", wx.hideLoading();
        },
        failLoading: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : "加载失败";
            this.status = "failure", this.failText = e, wx.hideLoading();
        }
    }
}, {
    info: {
        components: {
            "img-tip": {
                path: "./../other/ImgTip"
            },
            "page-resident-button": {
                path: "./../dataEntry/ButtonPageResident"
            }
        },
        on: {
            "1012-0": [ "tapPageBtn" ]
        }
    },
    handlers: {
        "1012-0": {
            tapPageBtn: function() {
                var t = arguments[arguments.length - 1];
                this.reload(t);
            }
        }
    },
    models: {},
    refs: void 0
});