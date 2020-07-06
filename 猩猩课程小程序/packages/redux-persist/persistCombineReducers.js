exports.__esModule = !0, exports.default = persistCombineReducers;

var _redux = require("./../../vendor.js")(331), _persistReducer = require("./persistReducer.js"), _persistReducer2 = _interopRequireDefault(_persistReducer), _autoMergeLevel = require("./stateReconciler/autoMergeLevel2.js"), _autoMergeLevel2 = _interopRequireDefault(_autoMergeLevel);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function persistCombineReducers(e, r) {
    return e.stateReconciler = void 0 === e.stateReconciler ? _autoMergeLevel2.default : e.stateReconciler, 
    (0, _persistReducer2.default)(e, (0, _redux.combineReducers)(r));
}