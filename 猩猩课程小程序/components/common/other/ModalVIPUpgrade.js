var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _globals = require("./../../../constants/globals.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ModalVIPUpgrade",
    _picPrefix: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/upgrade-animation/",
    data: {
        isShow: !1,
        upgradeImg: "",
        tip: "",
        successCb: null,
        cancelCb: null
    },
    methods: {
        noop: _globals.noop,
        success: function() {
            this.isShow = !1, this.successCb && this.successCb();
        },
        cancel: function() {
            this.isShow = !1, this.cancelCb && this.cancelCb();
        }
    },
    extraEvents: {
        showUpgradeModal: function(e) {
            var s = 0 < arguments.length && void 0 !== e ? e : {}, t = s.level, n = void 0 === t ? 1 : t, i = s.tip, o = void 0 === i ? "" : i, c = s.success, a = void 0 === c ? null : c, l = s.cancel, u = void 0 === l ? null : l;
            this.upgradeImg = "".concat(this._picPrefix).concat(n, ".png"), console.log("this.upgradeImg", this.upgradeImg), 
            this.tip = o, this.successCb = a, this.cancelCb = u, this.isShow = !0;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1042-0": {
            touchmove: function() {
                var e = arguments[arguments.length - 1];
                this.noop(e);
            }
        },
        "1042-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.success(e);
            }
        },
        "1042-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.cancel(e);
            }
        }
    },
    models: {},
    refs: void 0
});