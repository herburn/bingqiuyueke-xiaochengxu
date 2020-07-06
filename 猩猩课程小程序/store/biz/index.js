Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _box = _interopRequireDefault(require("./box/index.js")), _camp = _interopRequireDefault(require("./camp/index.js")), _onlineCamp = _interopRequireDefault(require("./onlineCamp/index.js")), _class = _interopRequireDefault(require("./class/index.js")), _common = _interopRequireDefault(require("./common/index.js")), _myBooking = _interopRequireDefault(require("./myBooking/index.js")), _personal = _interopRequireDefault(require("./personal/index.js")), _promotion = _interopRequireDefault(require("./promotion/index.js")), _superCard = _interopRequireDefault(require("./superCard/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    box: _box.default,
    camp: _camp.default,
    classBiz: _class.default,
    common: _common.default,
    myBooking: _myBooking.default,
    personal: _personal.default,
    promotion: _promotion.default,
    superCard: _superCard.default,
    onlineCamp: _onlineCamp.default
};

exports.default = _default;