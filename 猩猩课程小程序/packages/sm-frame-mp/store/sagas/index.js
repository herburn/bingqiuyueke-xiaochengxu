Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.watchFrameFetch = watchFrameFetch;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _dependent = require("./../dependent.js"), _sagas = require("./sagas.js"), _login = _interopRequireDefault(require("./login.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _marked = _regeneratorRuntime2.default.mark(watchFrameFetch), call = _sagas.ReduxSagaEffects.call, all = _sagas.ReduxSagaEffects.all;

function watchFrameFetch() {
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, all([ call(_dependent.coreSagas.watchCoreFetch), call(_dependent.persistSagas.watchMapCache), call(_login.default) ]);

          case 2:
          case "end":
            return e.stop();
        }
    }, _marked);
}