var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, n, t, r, o, a, i) {
    try {
        var u = e[a](i), c = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? n(c) : Promise.resolve(c).then(r, o);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(n, t) {
            var r = u.apply(e, i);
            function o(e) {
                asyncGeneratorStep(r, n, t, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, n, t, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

_core.default.component({
    name: "ModalSubscribeMsgGuide2",
    extraEvents: {
        open: function(e) {
            var n, t = e.success, r = void 0 === t ? function() {} : t;
            this.$invokeChild("subscribeMsgGuide2Modal", "openShowModal", {
                openType: "custom",
                width: "702rpx",
                title: "",
                confirmText: "我知道了，马上试试",
                success: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _core.default.openSetting();

                          case 2:
                            r();

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })), function() {
                    return n.apply(this, arguments);
                })
            });
        }
    }
}, {
    info: {
        components: {
            "sm-modal": {
                path: "./../common/feedback/Modal"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});