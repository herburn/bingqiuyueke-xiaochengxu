var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _router = require("./../../../router/index.js"), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "ActionSheet",
    _callback: _constants.noop,
    _cancel: _constants.noop,
    data: {
        isActionSheet: !1,
        itemList: [],
        isFullDisplay: !1
    },
    methods: {
        returnCb: function(t) {
            this._callback(t), this.isActionSheet = !1;
        },
        cancel: function(t) {
            this.isActionSheet = !1, this._cancel(t);
        }
    },
    extraEvents: {
        openShowActionSheet: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : {}, n = e.itemList, i = void 0 === n ? [] : n, o = e.success, s = void 0 === o ? _constants.noop : o, a = e.cancel, c = void 0 === a ? _constants.noop : a;
            this.isFullDisplay = !_router.router.tabPageMap[this.$root.name] && this.$app.globalData.isFullDisplay, 
            this.isActionSheet = !0, this.itemList = i, this._callback = s, this._cancel = c;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1017-0": {
            tap: function(t) {
                this.returnCb(t);
            }
        },
        "1017-1": {
            tap: function(t) {
                this.returnCb(t);
            }
        },
        "1017-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.cancel(t);
            }
        }
    },
    models: {},
    refs: void 0
});