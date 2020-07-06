Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.watchCoreFetch = watchCoreFetch, Object.defineProperty(exports, "updateFetchLoading", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchLoading;
    }
}), Object.defineProperty(exports, "updateFetchSuccess", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchSuccess;
    }
}), Object.defineProperty(exports, "updateFetchFailure", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchFailure;
    }
}), Object.defineProperty(exports, "updateFetchIdle", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchIdle;
    }
}), Object.defineProperty(exports, "updateFetchDone", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchDone;
    }
}), Object.defineProperty(exports, "updateFetchStatus", {
    enumerable: !0,
    get: function() {
        return _fetch.updateFetchStatus;
    }
});

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _types = require("./../actions/types.js"), _sagas = require("./sagas.js"), _fetch = require("./fetch.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _marked = _regeneratorRuntime2.default.mark(watchCoreFetch), _marked2 = _regeneratorRuntime2.default.mark(latest), put = _sagas.ReduxSagaEffects.put, takeLatest = _sagas.ReduxSagaEffects.takeLatest, all = _sagas.ReduxSagaEffects.all, takeEvery = _sagas.ReduxSagaEffects.takeEvery, actionChannel = _sagas.ReduxSagaEffects.actionChannel, mapType = {};

function watchCoreFetch() {
    var t;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, actionChannel(_types.FETCH_MUTEX);

          case 2:
            return t = e.sent, e.next = 5, all([ put({
                type: _types.FETCH_MUTEX
            }), takeEvery(function(e) {
                return e.meta && e.meta.isFetch && e.meta.isLatest;
            }, latest, t), takeEvery(function(e) {
                return e.meta && e.meta.isFetch && !e.meta.isLatest;
            }, _fetch.handleFetch, t) ]);

          case 5:
          case "end":
            return e.stop();
        }
    }, _marked);
}

function latest(t, a) {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (r = a.type, mapType[r]) {
                e.next = 7;
                break;
            }
            return mapType[r] = !0, e.next = 5, takeLatest(function(e) {
                return e.meta && e.meta.isFetch && e.meta.isLatest && e.type === r;
            }, _fetch.handleFetch, t);

          case 5:
            return e.next = 7, put(a);

          case 7:
          case "end":
            return e.stop();
        }
    }, _marked2);
}