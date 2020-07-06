Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constants = require("./../../constants/index.js"), childId = "__ActionSheet__", _default = {
    install: function(t) {
        t.mixin({
            beforeCreate: function() {
                this.$showActionSheet = function(t) {
                    var o = this, i = t.itemList, e = t.success, n = void 0 === e ? _constants.noop : e, s = t.cancel, c = void 0 === s ? _constants.noop : s, d = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).id, a = void 0 === d ? childId : d;
                    try {
                        return new Promise(function(t, e) {
                            o.$invokeChild(a, "openShowActionSheet", {
                                itemList: i,
                                success: function() {
                                    t.apply(void 0, arguments), n.apply(void 0, arguments);
                                },
                                cancel: function() {
                                    e.apply(void 0, arguments), c.apply(void 0, arguments);
                                }
                            });
                        });
                    } catch (t) {
                        console.log("未引入组件 showActionSheet", t);
                    }
                };
            }
        });
    }
};

exports.default = _default;