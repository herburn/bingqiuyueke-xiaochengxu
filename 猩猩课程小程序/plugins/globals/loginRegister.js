Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../vendor.js")(320), childId = "__ModalRegisterUser__", _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                var n = [];
                this.$addLoginRegisterCb = function(e) {
                    return n.push(e), function() {
                        n.splice(n.indexOf(e), 1);
                    };
                }, this.$loginRegister = function(e) {
                    var i = this, t = 0 < arguments.length && void 0 !== e ? e : {}, r = t.success, s = t.cancel;
                    try {
                        if (this.$store.selectors.getIsUnregistered(this.$store.getState())) return new Promise(function(e, t) {
                            i.$invokeChild(childId, "register", {
                                success: function() {
                                    (0, _ramda.forEach)(_ramda.call)(n), e(), r && r();
                                },
                                cancel: function() {
                                    t(), s && s();
                                }
                            });
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