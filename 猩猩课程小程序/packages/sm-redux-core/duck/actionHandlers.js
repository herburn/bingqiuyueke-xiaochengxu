Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateActions = void 0;

var _utils = require("./utils.js"), _ramda = require("./../../../vendor.js")(320);

function _updateActions(t, e) {
    e.actions && ((0, _utils.setPath)(e.namespace, e.actions, t.modules, "modules"), 
    Object.assign(t, e.actions));
}

var updateActionsCurry = (0, _ramda.curry)(_updateActions);

exports.updateActions = updateActionsCurry;