Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ReduxSaga = exports.ReduxSagaEffects = exports.default = void 0;

var ReduxSaga = _interopRequireWildcard(require("./../../../vendor.js")(323));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        a.get || a.set ? Object.defineProperty(r, t, a) : r[t] = e[t];
    }
    return r.default = e, r;
}

var createSagaMiddleware = (exports.ReduxSaga = ReduxSaga).default, ReduxSagaEffects = ReduxSaga.effects;

exports.ReduxSagaEffects = ReduxSagaEffects;

var _default = createSagaMiddleware;

exports.default = _default;