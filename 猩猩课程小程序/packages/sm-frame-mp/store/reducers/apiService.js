Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _dependent = require("./../dependent.js"), state = {
    loginPost: {
        count: 0,
        status: _dependent.coreConstant.IDLE
    }
}, reducers = {}, _default = {
    state: state,
    reducers: reducers
};

exports.default = _default;