Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _boxExtraMap$sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _ramda = require("./../../vendor.js")(320), _extraR = require("./../../utils/extraR.js"), _boxExtra = _interopRequireDefault(require("./../../models/boxExtra.js")), _duck = require("./../../packages/sm-redux-core/duck/index.js"), _actionTypes = require("./../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, a, r) {
    return a in e ? Object.defineProperty(e, a, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = r, e;
}

var boxExtraMap = (0, _duck.createDomainModel)("boxExtraMap", _actionTypes.BOX_EXTRA_MAP_PUT);

boxExtraMap.sagas = (_defineProperty(_boxExtraMap$sagas = {}, _actionTypes.BOX_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, r, t) {
    var n, o, _, s, d, p, u, i;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = a.payload.storeList, o = r.put, _ = r.select, s = t.getSelector, d = s("getBoxExtraMap"), 
            e.next = 6, _(d);

          case 6:
            return p = e.sent, u = (0, _ramda.pipe)((0, _ramda.prop)("boxId"), (0, _ramda.propOr)(_boxExtra.default.schema, _ramda.__, p)), 
            i = (0, _ramda.pipe)((0, _ramda.pick)([ "boxId", "fav" ]), (0, _extraR.renameKeys)({
                fav: "favStatus"
            })), e.next = 11, o({
                type: _actionTypes.BOX_EXTRA_MAP_PUT,
                payload: {
                    entities: (0, _ramda.pipe)((0, _ramda.map)((0, _ramda.converge)(_ramda.merge, [ u, i ])), (0, 
                    _ramda.indexBy)((0, _ramda.prop)("boxId")))(n)
                }
            });

          case 11:
          case "end":
            return e.stop();
        }
    }, e);
})), _defineProperty(_boxExtraMap$sagas, _actionTypes.CLASS_SCHEDULE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, r, t) {
    var n, o, _, s, d, p, u, i;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = a.payload.favBoxIds, o = r.put, _ = r.select, s = t.getSelector, d = s("getBoxExtraMap"), 
            e.next = 6, _(d);

          case 6:
            return p = e.sent, u = (0, _ramda.propOr)(_boxExtra.default.schema, _ramda.__, p), 
            i = (0, _ramda.applySpec)({
                boxId: _ramda.identity,
                favStatus: (0, _ramda.always)(1)
            }), e.next = 11, o({
                type: _actionTypes.BOX_EXTRA_MAP_PUT,
                payload: {
                    entities: (0, _ramda.pipe)((0, _ramda.map)((0, _ramda.converge)(_ramda.merge, [ u, i ])), (0, 
                    _ramda.indexBy)((0, _ramda.prop)("boxId")))(n)
                }
            });

          case 11:
          case "end":
            return e.stop();
        }
    }, e);
})), _defineProperty(_boxExtraMap$sagas, _actionTypes.BOX_ADDFAV_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, r, t) {
    var n, o, _, s, d, p;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = a.requestPayload.boxId, o = r.put, _ = r.select, s = t.getSelector, d = s("getBoxExtraById"), 
            e.next = 6, _(d, n);

          case 6:
            if (e.t0 = e.sent, e.t0) {
                e.next = 9;
                break;
            }
            e.t0 = _boxExtra.default.schema;

          case 9:
            return p = e.t0, e.next = 12, o({
                type: _actionTypes.BOX_EXTRA_MAP_PUT,
                payload: {
                    entities: _defineProperty({}, n, (0, _ramda.merge)(p, {
                        boxId: n,
                        favStatus: 1
                    }))
                }
            });

          case 12:
          case "end":
            return e.stop();
        }
    }, e);
})), _defineProperty(_boxExtraMap$sagas, _actionTypes.BOX_DELFAV_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(a, r, t) {
    var n, o, _, s, d, p;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return n = a.requestPayload.boxId, o = r.put, _ = r.select, s = t.getSelector, d = s("getBoxExtraById"), 
            e.next = 6, _(d, n);

          case 6:
            if (e.t0 = e.sent, e.t0) {
                e.next = 9;
                break;
            }
            e.t0 = _boxExtra.default.schema;

          case 9:
            return p = e.t0, e.next = 12, o({
                type: _actionTypes.BOX_EXTRA_MAP_PUT,
                payload: {
                    entities: _defineProperty({}, n, (0, _ramda.merge)(p, {
                        boxId: n,
                        favStatus: 0
                    }))
                }
            });

          case 12:
          case "end":
            return e.stop();
        }
    }, e);
})), _boxExtraMap$sagas);

var _default = boxExtraMap;

exports.default = _default;