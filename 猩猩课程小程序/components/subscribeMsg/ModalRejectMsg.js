var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var title = "注意！已经拒收以下通知！";

_core.default.component({
    name: "ModalRejectMsg",
    data: {
        templates: []
    },
    extraEvents: {
        open: function(e) {
            var t = e.success, o = void 0 === t ? function() {} : t, n = e.cancel, c = void 0 === n ? function() {} : n, i = e.templates, s = void 0 === i ? [] : i;
            this.templates = s, this.$invokeChild("rejectMsgModal", "openShowModal", {
                openType: "custom",
                title: title,
                isShowCancel: !0,
                cancelText: "错过就错过",
                confirmText: "重新接收",
                success: o,
                cancel: c
            });
        },
        close: function() {
            this.$invokeChild("rejectMsgModal", "closeModal");
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