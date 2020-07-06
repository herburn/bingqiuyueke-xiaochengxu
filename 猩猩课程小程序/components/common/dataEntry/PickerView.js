var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _thread = require("./../../../utils/thread.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, n, i, t, r, s, a) {
    try {
        var o = e[s](a), c = o.value;
    } catch (e) {
        return void i(e);
    }
    o.done ? n(c) : Promise.resolve(c).then(t, r);
}

function _asyncToGenerator(o) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(n, i) {
            var t = o.apply(e, a);
            function r(e) {
                asyncGeneratorStep(t, n, i, r, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(t, n, i, r, s, "throw", e);
            }
            r(void 0);
        });
    };
}

_core.default.component({
    name: "PickerView",
    data: {
        isPickerView: !1,
        selectIndexs: [ 0 ],
        value: [ 0 ],
        range: [],
        originRange: [],
        isColumnTwoLinkage: !1,
        title: "",
        success: null,
        cancel: null
    },
    methods: {
        cancelCb: function() {
            this.cancel(), this.isPickerView = !1;
        },
        confirmCb: function() {
            this.value.length !== this.range.length && (this.value = Array(this.range.length).fill(0)), 
            this.success(this.value), this.isPickerView = !1;
        },
        bindChange: function() {
            var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(n) {
                var i;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, _thread.sleep)(30);

                      case 2:
                        i = n.$wx.detail.value, this.isColumnTwoLinkage && 2 <= i.length && i[0] !== this.value[0] && this.range.splice(1, 1, this.originRange[1][i[0]]), 
                        this.value = i;

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function(e) {
                return n.apply(this, arguments);
            };
        }(),
        closePicker: function() {
            this.isPickerView = !1;
        }
    },
    extraEvents: {
        openPickerView: function(e) {
            var n = 0 < arguments.length && void 0 !== e ? e : {}, i = n.title, t = void 0 === i ? "" : i, r = n.value, s = void 0 === r ? [ 0 ] : r, a = n.range, o = void 0 === a ? [] : a, c = n.success, u = void 0 === c ? function() {} : c, l = n.cancel, h = void 0 === l ? function() {} : l;
            if (this.title = t, this.range = JSON.parse(JSON.stringify(o)), this.originRange = JSON.parse(JSON.stringify(o)), 
            this.value = JSON.parse(JSON.stringify(s)), o[1] && Array.isArray(o[1][0])) {
                var f = this.value[0] || 0;
                this.isColumnTwoLinkage = !0, this.range = [ o[0], o[1][f] ];
            } else this.range = JSON.parse(JSON.stringify(o));
            this.isPickerView = !0, this.success = u, this.cancel = h;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1018-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.closePicker(e);
            }
        },
        "1018-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.cancelCb(e);
            }
        },
        "1018-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.confirmCb(e);
            }
        },
        "1018-3": {
            change: function() {
                var e = arguments[arguments.length - 1];
                this.bindChange(e);
            }
        }
    },
    models: {},
    refs: void 0
});