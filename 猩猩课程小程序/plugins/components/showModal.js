function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var childId = "__Modal__", _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$showModal = function(r) {
                    var n = this;
                    try {
                        return new Promise(function(e, t) {
                            n.$invokeChild(childId, "openShowModal", _objectSpread({}, r, {
                                success: function() {
                                    e(), r.success && r.success();
                                },
                                cancel: function() {
                                    t(), r.cancel && r.cancel();
                                }
                            }));
                        });
                    } catch (e) {
                        console.log("未引入组件 showModal", e);
                    }
                };
            }
        });
    }
};

exports.default = _default;