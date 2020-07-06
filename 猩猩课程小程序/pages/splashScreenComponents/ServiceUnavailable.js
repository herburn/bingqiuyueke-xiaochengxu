var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ServiceUnavailable",
    data: {
        errMsg: ""
    },
    extraEvents: {
        onLoad: function(e) {
            this.errMsg = e.errMsg || "服务器维护升级中，请稍后再试";
        },
        onShow: function() {
            this.$root.$isReady && this.$router.redirectTo({
                page: "SplashScreen",
                data: {
                    contentType: "splashScreen",
                    internalJump: 1
                }
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});