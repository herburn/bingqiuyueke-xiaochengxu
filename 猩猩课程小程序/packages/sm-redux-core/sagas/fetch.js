Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.handleFetch = handleFetch, exports.updateFetchLoading = updateFetchLoading, 
exports.updateFetchSuccess = updateFetchSuccess, exports.updateFetchFailure = updateFetchFailure, 
exports.updateFetchIdle = updateFetchIdle, exports.updateFetchDone = updateFetchDone, 
exports.updateFetchStatus = updateFetchStatus;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _sagas = require("./sagas.js"), _selectors = require("./../selectors.js"), _types = require("./../actions/types.js"), _constant = require("./../constant.js"), _ramda = _interopRequireDefault(require("./../../../vendor.js")(320)), _dependent = require("./../dependent.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _marked = _regeneratorRuntime2.default.mark(handleFetch), _marked2 = _regeneratorRuntime2.default.mark(updateFetchLoading), _marked3 = _regeneratorRuntime2.default.mark(updateFetchSuccess), _marked4 = _regeneratorRuntime2.default.mark(updateFetchFailure), _marked5 = _regeneratorRuntime2.default.mark(updateFetchIdle), _marked6 = _regeneratorRuntime2.default.mark(updateFetchDone), _marked7 = _regeneratorRuntime2.default.mark(updateFetchStatus), put = _sagas.ReduxSagaEffects.put, call = _sagas.ReduxSagaEffects.call, take = _sagas.ReduxSagaEffects.take, cancelled = _sagas.ReduxSagaEffects.cancelled, select = _sagas.ReduxSagaEffects.select, delay = _sagas.ReduxSaga.delay, clone = _ramda.default.clone;

function handleFetch(t, a) {
    var r, s, n, u, c, o, d, p, l, _, i;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = a.type, s = a.payload, n = a.meta, u = a.__resolve, c = void 0 === u ? function() {} : u, 
            o = a.__reject, d = void 0 === o ? function() {} : o, console.log("fetch", r), delete n.isFetch, 
            p = {
                success: !1,
                failure: !1
            }, !0 === n.isPromise ? p = {
                success: !0,
                failure: !0
            } : "Object" === _ramda.default.type(n.isPromise) && (p = n.isPromise), e.next = 7, 
            take(t);

          case 7:
            if (n.statusName) return e.next = 10, call(updateFetchLoading, n.statusName);
            e.next = 10;
            break;

          case 10:
            return e.next = 12, call(updateFetchStatus, {
                status: _constant.LOADING
            }, {
                statusName: "fetch"
            });

          case 12:
            return e.next = 14, put({
                type: "".concat(r, "_LOADING"),
                payload: s,
                meta: n
            });

          case 14:
            return e.next = 16, put({
                type: _types.FETCH_LOADING,
                payload: s,
                meta: n
            });

          case 16:
            return e.next = 18, put({
                type: _types.FETCH_MUTEX
            });

          case 18:
            if (_dependent.api[r]) {
                e.next = 20;
                break;
            }
            throw new Error("未找到".concat(r, "相对应的api"));

          case 20:
            return e.prev = 20, e.next = 23, call(_dependent.api[r], s);

          case 23:
            return l = e.sent, console.log("response", l), e.next = 27, take(t);

          case 27:
            if (n.statusName) return e.next = 30, call(updateFetchSuccess, n.statusName);
            e.next = 30;
            break;

          case 30:
            return e.next = 32, call(updateFetchStatus, {
                status: _constant.SUCCESS
            }, {
                statusName: "fetch"
            });

          case 32:
            return e.next = 34, put({
                type: "".concat(r, "_SUCCESS"),
                payload: l,
                requestPayload: s,
                meta: n
            });

          case 34:
            return _ = e.sent, e.next = 37, call(c, p.success ? _ : l);

          case 37:
            return e.next = 39, put({
                type: _types.FETCH_SUCCESS,
                payload: l,
                requestPayload: s,
                meta: n
            });

          case 39:
            return e.next = 41, put({
                type: _types.FETCH_MUTEX
            });

          case 41:
            e.next = 66;
            break;

          case 43:
            return e.prev = 43, e.t0 = e.catch(20), e.next = 47, take(t);

          case 47:
            if (n.statusName) return e.next = 50, call(updateFetchFailure, n.statusName, e.t0);
            e.next = 50;
            break;

          case 50:
            return e.next = 52, call(updateFetchStatus, {
                status: _constant.FAILURE,
                error: e.t0
            }, {
                statusName: "fetch"
            });

          case 52:
            return e.next = 54, put({
                type: "".concat(r, "_FAILURE"),
                error: e.t0,
                requestPayload: s,
                meta: n
            });

          case 54:
            if (i = e.sent, p.failure) return e.next = 58, call(c, i);
            e.next = 60;
            break;

          case 58:
            e.next = 62;
            break;

          case 60:
            return e.next = 62, call(d, e.t0);

          case 62:
            return e.next = 64, put({
                type: _types.FETCH_FAILURE,
                error: e.t0,
                requestPayload: s,
                meta: n
            });

          case 64:
            return e.next = 66, put({
                type: _types.FETCH_MUTEX
            });

          case 66:
            return e.prev = 66, e.next = 69, cancelled();

          case 69:
            if (e.sent) return e.next = 72, put({
                type: _types.FETCH_MUTEX
            });
            e.next = 76;
            break;

          case 72:
            return e.next = 74, put({
                type: "".concat(r, "_CANCEL"),
                requestPayload: s,
                meta: n
            });

          case 74:
            return e.next = 76, put({
                type: _types.FETCH_CANCEL,
                requestPayload: s,
                meta: n
            });

          case 76:
            return e.next = 78, call(delay, 1);

          case 78:
            return e.next = 80, take(t);

          case 80:
            if (n.statusName) return e.next = 83, call(updateFetchIdle, n.statusName);
            e.next = 83;
            break;

          case 83:
            return e.next = 85, call(updateFetchStatus, {
                status: _constant.IDLE
            }, {
                statusName: "fetch"
            });

          case 85:
            return e.next = 87, put({
                type: _types.FETCH_MUTEX
            });

          case 87:
            return e.finish(66);

          case 88:
          case "end":
            return e.stop();
        }
    }, _marked, null, [ [ 20, 43, 66, 88 ] ]);
}

function updateFetchLoading(t) {
    var a, r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, select(_selectors.getFetchStatus, t);

          case 2:
            return a = e.sent, (r = a ? clone(a) : {
                status: _constant.IDLE,
                count: 0
            }).status !== _constant.IDLE && r.status !== _constant.DONE || (r.status = _constant.LOADING), 
            r.count++, e.next = 8, call(updateFetchStatus, r, {
                statusName: t
            });

          case 8:
          case "end":
            return e.stop();
        }
    }, _marked2);
}

function updateFetchSuccess(t) {
    var a;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.t0 = clone, e.next = 3, select(_selectors.getFetchStatus, t);

          case 3:
            return e.t1 = e.sent, (a = (0, e.t0)(e.t1)).status = _constant.SUCCESS, e.next = 8, 
            call(updateFetchStatus, a, {
                statusName: t
            });

          case 8:
          case "end":
            return e.stop();
        }
    }, _marked3);
}

function updateFetchFailure(t, a) {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.t0 = clone, e.next = 3, select(_selectors.getFetchStatus, t);

          case 3:
            if (e.t1 = e.sent, 1 === (r = (0, e.t0)(e.t1)).count) return r.status = _constant.FAILURE, 
            r.error = a, e.next = 10, call(updateFetchStatus, r, {
                statusName: t
            });
            e.next = 10;
            break;

          case 10:
          case "end":
            return e.stop();
        }
    }, _marked4);
}

function updateFetchIdle(t) {
    var a;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.t0 = clone, e.next = 3, select(_selectors.getFetchStatus, t);

          case 3:
            return e.t1 = e.sent, 1 === (a = (0, e.t0)(e.t1)).count && (a.status = _constant.IDLE), 
            a.count--, e.next = 9, call(updateFetchStatus, a, {
                statusName: t
            });

          case 9:
          case "end":
            return e.stop();
        }
    }, _marked5);
}

function updateFetchDone(t) {
    var a;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.t0 = clone, e.next = 3, select(_selectors.getFetchStatus, t);

          case 3:
            return e.t1 = e.sent, (a = (0, e.t0)(e.t1)).status = _constant.DONE, e.next = 8, 
            call(updateFetchStatus, a, {
                statusName: t
            });

          case 8:
          case "end":
            return e.stop();
        }
    }, _marked6);
}

function updateFetchStatus(t, a) {
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, put({
                type: _types.FETCH_STATUS_PUT,
                payload: t,
                meta: a
            });

          case 2:
          case "end":
            return e.stop();
        }
    }, _marked7);
}