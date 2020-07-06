Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "ReduxSaga", {
    enumerable: !0,
    get: function() {
        return _sagas.ReduxSaga;
    }
}), Object.defineProperty(exports, "ReduxSagaEffects", {
    enumerable: !0,
    get: function() {
        return _sagas.ReduxSagaEffects;
    }
}), exports.default = void 0;

var _sagas = _interopRequireWildcard(require("./../../../sm-redux-core/sagas/sagas.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        a.get || a.set ? Object.defineProperty(r, t, a) : r[t] = e[t];
    }
    return r.default = e, r;
}

var _default = _sagas.default;

exports.default = _default;