var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _thread = require("./../../../utils/thread.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, o, n, t, r, a, i) {
    try {
        var l = e[a](i), u = l.value;
    } catch (e) {
        return void n(e);
    }
    l.done ? o(u) : Promise.resolve(u).then(t, r);
}

function _asyncToGenerator(l) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(o, n) {
            var t = l.apply(e, i);
            function r(e) {
                asyncGeneratorStep(t, o, n, r, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(t, o, n, r, a, "throw", e);
            }
            r(void 0);
        });
    };
}

_core.default.component({
    name: "AlertFollowPublic",
    data: {
        isFollowModalShow: !0
    },
    extraEvents: {
        showFollowModal: function(e) {
            var o = 0 < arguments.length && void 0 !== e ? e : {}, n = o.success, t = void 0 === n ? null : n, r = o.cancel, a = void 0 === r ? null : r;
            this._showFollowModal(t, a);
        }
    },
    _showFollowModal: function() {
        var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(o, n) {
            var t = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.isFollowModalShow = !0, e.next = 3, (0, _thread.sleep)(40);

                  case 3:
                    this.$invokeChild("modal-open-custom-service", "openCustomServiceModal", {
                        title: "三步关注公众号",
                        confirmText: "立即关注",
                        code: "Account_SuperMonkey",
                        success: function() {
                            t.isFollowModalShow = !1, o && o();
                        },
                        cancel: function() {
                            t.isFollowModalShow = !1, n && n();
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e, o) {
            return n.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {
            "modal-open-custom-service": {
                path: "./ModalOpenCustomService"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});