Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = runQueue;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, n, t, u, a, o) {
    try {
        var i = e[a](o), c = i.value;
    } catch (e) {
        return void n(e);
    }
    i.done ? r(c) : Promise.resolve(c).then(t, u);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(r, n) {
            var t = i.apply(e, o);
            function u(e) {
                asyncGeneratorStep(t, r, n, u, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(t, r, n, u, a, "throw", e);
            }
            u(void 0);
        });
    };
}

function runQueue(e, r) {
    return _runQueue.apply(this, arguments);
}

function _runQueue() {
    return (_runQueue = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, n) {
        var t, u, a, o, i, c;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                u = !(t = !0), a = void 0, e.prev = 3, o = r[Symbol.iterator]();

              case 5:
                if (t = (i = o.next()).done) {
                    e.next = 14;
                    break;
                }
                if (c = i.value, e.t0 = c, e.t0) return e.next = 11, n(c);
                e.next = 11;
                break;

              case 11:
                t = !0, e.next = 5;
                break;

              case 14:
                e.next = 20;
                break;

              case 16:
                e.prev = 16, e.t1 = e.catch(3), u = !0, a = e.t1;

              case 20:
                e.prev = 20, e.prev = 21, t || null == o.return || o.return();

              case 23:
                if (e.prev = 23, u) throw a;
                e.next = 26;
                break;

              case 26:
                return e.finish(23);

              case 27:
                return e.finish(20);

              case 28:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 16, 20, 28 ], [ 21, , 23, 27 ] ]);
    }))).apply(this, arguments);
}