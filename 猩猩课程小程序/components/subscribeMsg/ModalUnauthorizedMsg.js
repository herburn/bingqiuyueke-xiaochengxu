var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var title = "注意！有通知暂无法接收！";

_core.default.component({
    name: "ModalUnauthorizedMsg",
    data: {
        templates: []
    },
    extraEvents: {
        open: function(e) {
            var t = e.success, o = void 0 === t ? function() {} : t, n = e.templates, a = void 0 === n ? [] : n;
            this.templates = a, this.$invokeChild("unauthorizedMsgModal", "openShowModal", {
                openType: "custom",
                title: title,
                confirmText: "马上接收",
                success: o
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