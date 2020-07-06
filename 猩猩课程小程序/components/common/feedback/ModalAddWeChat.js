var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "ModalAddWeChat",
    options: {
        multipleSlots: !0
    },
    data: {
        type: "friend",
        title: "如何加好友",
        code: "",
        confirmText: "去添加",
        openType: "normal",
        isShowModal: !1,
        success: null,
        cancel: null
    },
    methods: {
        noop: _constants.noop,
        closeBtn: function() {
            this.isShowModal = !1, this.cancel();
        },
        confirmBtn: function() {
            this.isShowModal = !1, this.success();
        }
    },
    extraEvents: {
        addFriend: function(t) {
            var n = t.code, o = void 0 === n ? "" : n, e = t.success, s = t.cancel, i = void 0 === s ? _constants.noop : s;
            this.type = "friend", this.title = "如何加好友", this.code = "Trainer_".concat(o), this.isShowModal = !0, 
            this.success = e, this.cancel = i;
        },
        addGroup: function(t) {
            var n = t.code, o = void 0 === n ? "" : n, e = t.success, s = t.cancel, i = void 0 === s ? _constants.noop : s;
            this.type = "group", this.title = "如何加群", this.code = "Trainer_".concat(o), this.isShowModal = !0, 
            this.success = e, this.cancel = i;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1015-0": {
            touchmove: function() {
                var t = arguments[arguments.length - 1];
                this.noop(t);
            }
        },
        "1015-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.closeBtn(t);
            }
        },
        "1015-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.confirmBtn(t);
            }
        }
    },
    models: {},
    refs: void 0
});