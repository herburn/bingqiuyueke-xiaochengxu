var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ModalOpenCustomService",
    options: {
        multipleSlots: !0
    },
    data: {
        title: "",
        code: "",
        confirmText: "",
        isShowModal: !1,
        success: null,
        cancel: null,
        responseRegionId: ""
    },
    methods: {
        noop: function() {},
        closeBtn: function() {
            this.isShowModal = !1, this.cancel();
        },
        confirmBtn: function() {
            this.isShowModal = !1, this.success();
        }
    },
    extraEvents: {
        openCustomServiceModal: function(e) {
            var t = e.title, o = e.code, n = e.responseRegionId, s = e.success, i = e.cancel, c = e.confirmText;
            this.responseRegionId = n, this.title = t || "提示", this.code = o, this.isShowModal = !0, 
            this.confirmText = c || "确定", this.success = s, this.cancel = i;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1189-0": {
            touchmove: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1189-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.closeBtn(e);
            }
        },
        "1189-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.confirmBtn(e);
            }
        }
    },
    models: {},
    refs: void 0
});