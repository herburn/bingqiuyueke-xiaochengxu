var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ModalSubscribeMsgGuide1",
    extraEvents: {
        open: function(e) {
            var o = e.success, n = void 0 === o ? function() {} : o;
            this.$invokeChild("subscribeMsgGuide1Modal", "openShowModal", {
                openType: "custom",
                width: "702rpx",
                title: "",
                confirmText: "我知道了，马上试试",
                success: n
            });
        }
    }
}, {
    info: {
        components: {
            "sm-modal": {
                path: "./../common/feedback/Modal"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});