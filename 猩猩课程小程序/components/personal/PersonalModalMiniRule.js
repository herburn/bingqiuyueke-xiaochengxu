var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "PersonalModalMiniRule",
    props: {},
    methods: {},
    extraEvents: {
        showMiniModal: function() {
            this._showMiniModal();
        }
    },
    _showMiniModal: function() {
        this.$invokeChild("rule-modal", "openShowModal", {
            openType: "custom",
            title: "Mini挑战",
            confirmText: "确定",
            success: function() {}
        });
    }
}, {
    info: {
        components: {
            "show-modal": {
                path: "./../common/feedback/Modal"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});