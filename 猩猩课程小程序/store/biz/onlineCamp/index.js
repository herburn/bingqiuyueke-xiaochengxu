Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _home = _interopRequireDefault(require("./home.js")), _campDetail = _interopRequireDefault(require("./campDetail.js")), _campList = _interopRequireDefault(require("./campList.js")), _courseList = _interopRequireDefault(require("./courseList.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = {
    home: _home.default,
    campDetail: _campDetail.default,
    campList: _campList.default,
    courseList: _courseList.default
};

exports.default = _default;