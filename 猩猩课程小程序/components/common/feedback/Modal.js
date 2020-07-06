var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _globals = require("./../../../constants/globals.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "Modal",
    options: {
        multipleSlots: !0
    },
    _success: null,
    _cancel: null,
    data: {
        isShowModal: !1,
        openType: "normal",
        overflow: "",
        btnType: "normal",
        url: "",
        title: "提示",
        content: "",
        contentAlign: "",
        confirmText: "确认",
        cancelText: "取消",
        isShowCancel: !1,
        isCloseIcon: !1,
        isDisableBtn: !1,
        width: "",
        titleStyle: "",
        btnStyle: ""
    },
    methods: {
        noop: _globals.noop,
        closeBtn: function() {
            this.isShowModal = !1, this._cancel();
        },
        cancelBtn: function() {
            this.isShowModal = !1, this._cancel();
        },
        disableBtn: function() {
            this._cancel();
        },
        confirmBtn: function() {
            this.isShowModal = !1, this._success();
        }
    },
    extraEvents: {
        openShowModal: function(t) {
            var n = 0 < arguments.length && void 0 !== t ? t : {}, o = n.openType, i = void 0 === o ? "normal" : o, e = n.btnType, l = void 0 === e ? "normal" : e, s = n.width, c = void 0 === s ? "540rpx" : s, a = n.url, h = void 0 === a ? "" : a, d = n.title, r = void 0 === d ? "提示" : d, u = n.content, v = void 0 === u ? "" : u, f = n.contentAlign, p = void 0 === f ? "center" : f, m = n.confirmText, _ = void 0 === m ? "确定" : m, S = n.cancelText, b = void 0 === S ? "取消" : S, w = n.isShowCancel, g = void 0 !== w && w, y = n.isCloseIcon, B = void 0 !== y && y, T = n.isDisableBtn, M = void 0 !== T && T, x = n.success, C = void 0 === x ? _globals.noop : x, D = n.cancel, q = void 0 === D ? _globals.noop : D, A = n.overflow, I = void 0 === A ? "hidden" : A, j = n.titleStyle, R = void 0 === j ? "" : j, E = n.btnStyle, k = void 0 === E ? "" : E;
            this.isShowModal = !0, this.openType = i, this.btnType = l, this.width = c, this.url = h, 
            this.title = r, this.content = v, this.contentAlign = p, this.confirmText = _, this.cancelText = b, 
            this.isShowCancel = g, this.isCloseIcon = B, this.isDisableBtn = M, this._success = C, 
            this._cancel = q, this.overflow = I, this.titleStyle = R, this.btnStyle = k;
        },
        closeModal: function() {
            this.isShowModal = !1;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1014-0": {
            touchmove: function() {
                var t = arguments[arguments.length - 1];
                this.noop(t);
            }
        },
        "1014-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.closeBtn(t);
            }
        },
        "1014-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.disableBtn(t);
            }
        },
        "1014-3": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.confirmBtn(t);
            }
        },
        "1014-4": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.cancelBtn(t);
            }
        },
        "1014-5": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.confirmBtn(t);
            }
        }
    },
    models: {},
    refs: void 0
});