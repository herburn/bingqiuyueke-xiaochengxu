Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateReducers = void 0;

var _utils = require("./utils.js"), _ramda = require("./../../../vendor.js")(320);

function _updateReducers(e, r) {
    r.reducers && (0, _utils.setPath)(r.namespace, {
        state: r.state,
        reducers: r.reducers
    }, e);
}

var updateReducersCurry = (0, _ramda.curry)(_updateReducers);

exports.updateReducers = updateReducersCurry;