Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _booking = _interopRequireDefault(require("./booking/index.js")), _detail = _interopRequireDefault(require("./detail/index.js")), _list = _interopRequireDefault(require("./list/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    booking: _booking.default,
    detail: _detail.default,
    list: _list.default
};

exports.default = _default;