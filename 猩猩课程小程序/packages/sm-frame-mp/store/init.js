Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setInitSoreFunc = setInitSoreFunc, exports.default = _default;

var _ramda = require("./../../../vendor.js")(320), _dependent = _interopRequireDefault(require("./dependent.js")), _instance = _interopRequireDefault(require("./instance.js")), _persist = require("./persist/index.js"), _dependent2 = require("./../dependent.js"), _debug = require("./../debug/index.js"), _redux = require("./../../../vendor.js")(331), _reduxPersist = require("./../../redux-persist/index.js"), _sagas = _interopRequireDefault(require("./sagas/sagas.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
}

var reduxModule = require("./../../../vendor.js")(331);

reduxModule.__DO_NOT_USE__ActionTypes.INIT = "@@redux/INIT", reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/REPLACE";

var initStore = function(e) {
    var r = e.rootReducers, t = e.rootSaga, s = e.processorList, n = void 0 === s ? [] : s, o = e.RemoteReduxDevTools, a = void 0 === o ? _debug.RemoteReduxDevTools : o, i = e.sagaErrorHandler, d = a({
        hostname: "localhost",
        port: 4869,
        secure: !1
    }), u = (0, _sagas.default)(), c = (0, _redux.createStore)((0, _dependent2.createReducers)(r, [].concat(_toConsumableArray(n), [ _dependent2.persistProcessor ])), (0, 
    _redux.compose)((0, _redux.applyMiddleware)(_dependent2.promiseMiddleware, u), d));
    c.runSaga = u.run, c.createReducers = function(e) {
        return (0, _dependent2.createReducers)(e, [].concat(_toConsumableArray(n), [ _dependent2.persistProcessor ]));
    }, c.runSaga(t).done.catch(i);
    var p = (0, _reduxPersist.persistStore)(c, null, function() {
        return c.dispatch({
            type: _dependent2.persistTypes.PERSIST_RESUME_PUT,
            payload: !0
        });
    });
    return (0, _instance.default)({
        persistor: p,
        store: c
    }), {
        persistor: p,
        store: c
    };
};

function setInitSoreFunc(e) {
    initStore = e;
}

function _default(e, r, t, s) {
    if ((0, _dependent.default)({
        wx: e
    }), (0, _dependent2.coreInit)({
        api: r
    }), (0, _persist.persistInit)(t), s.models) {
        var n = (0, _dependent2.duck)();
        n.register(s.models);
        var o = [ (0, _dependent2.createActions)(n.getActions()), n.getReducers(), n.getSelectors(), n.getSagaList() ], a = o[0], i = o[1], d = o[2], u = o[3];
        s.rootReducers = i, s.rootSaga = u;
        var c = initStore(s), p = c.persistor, _ = c.store;
        return _.actions = a, _.dispatchAction = function(e) {
            var r = (0, _ramda.path)("string" == typeof e ? e.split(".") : e, _.actions);
            if ("function" == typeof r) {
                for (var t = arguments.length, s = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
                return _.dispatch(r.apply(void 0, s));
            }
            console.error("dispatchAction 没找到", e);
        }, _.selectors = d, _.lazyLoad = function(e) {
            _.runSaga(n.lazyRegister(e).sagas), _.replaceReducer(_.createReducers(n.getReducers())), 
            p.persist(), _.actions = (0, _dependent2.createActions)(n.getActions()), _.selectors = n.getSelectors();
        }, _.lazyLoads = function(e) {
            _.runSaga(n.lazyRegisters(e).sagas), _.replaceReducer(_.createReducers(n.getReducers())), 
            p.persist(), _.actions = (0, _dependent2.createActions)(n.getActions()), _.selectors = n.getSelectors();
        }, {
            persistor: p,
            store: _
        };
    }
    var l = initStore(s);
    return {
        persistor: l.persistor,
        store: l.store
    };
}