Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var u = e[a](i), c = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? t(c) : Promise.resolve(c).then(r, o);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = u.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, t, n, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$openDialog = function() {
                    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                        var n, r, o, a, i, u, c, s, l;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (null == t) return e.abrupt("return");
                                e.next = 2;
                                break;

                              case 2:
                                return n = t.modalId, r = t.title, o = t.content, a = t.contentAlign, i = t.okButtonText, 
                                u = t.cancelButtonText, c = t.okModal, s = t.cancelModal, l = 0 < u.length, e.prev = 4, 
                                e.next = 7, this.$showModal({
                                    isShowCancel: l,
                                    title: r,
                                    content: o,
                                    contentAlign: a,
                                    confirmText: i,
                                    cancelText: u
                                });

                              case 7:
                                return this.$store.dispatchAction("postConfirmModal", {
                                    modalId: n,
                                    status: 1
                                }), e.next = 10, this.$openDialog(c);

                              case 10:
                                e.next = 18;
                                break;

                              case 12:
                                return e.prev = 12, e.t0 = e.catch(4), this.$store.dispatchAction("postConfirmModal", {
                                    modalId: n,
                                    status: 2
                                }), e.next = 17, this.$openDialog(s);

                              case 17:
                                throw e.t0;

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 4, 12 ] ]);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }();
            }
        });
    }
};

exports.default = _default;