var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _thread = require("./../../../utils/thread.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, n, t, o, i, a) {
    try {
        var s = e[i](a), c = s.value;
    } catch (e) {
        return void n(e);
    }
    s.done ? r(c) : Promise.resolve(c).then(t, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(r, n) {
            var t = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(t, r, n, o, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(t, r, n, o, i, "throw", e);
            }
            o(void 0);
        });
    };
}

_core.default.component({
    name: "AlertBusinessService",
    data: {
        isServiceModalShow: !0
    },
    extraEvents: {
        showServiceModal: function(e) {
            var r = 0 < arguments.length && void 0 !== e ? e : {}, n = r.success, t = void 0 === n ? null : n, o = r.cancel, i = void 0 === o ? null : o;
            this._ishowServiceModal(t, i);
        }
    },
    _ishowServiceModal: function() {
        var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, n) {
            var t = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this.isServiceModalShow = !0, e.next = 3, (0, _thread.sleep)(40);

                  case 3:
                    this.$invokeChild("modal-open-custom-service", "openCustomServiceModal", {
                        title: "超级猩猩企业服务",
                        confirmText: "去了解",
                        code: "EnterpriseService",
                        success: function() {
                            t.isServiceModalShow = !1, r && r();
                        },
                        cancel: function() {
                            t.isServiceModalShow = !1, n && n();
                        }
                    });

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e, r) {
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