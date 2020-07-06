Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setGetLoginInfoFunc = setGetLoginInfoFunc, exports.setGetSystemInfoFunc = setGetSystemInfoFunc, 
exports.getSystemInfo = exports.getLoginInfo = void 0;

var getLoginInfo = function(e) {
    return e.globals.loginInfo;
};

function setGetLoginInfoFunc(e) {
    exports.getLoginInfo = getLoginInfo = e;
}

exports.getLoginInfo = getLoginInfo;

var getSystemInfo = function(e) {
    return e.globals.systemInfo;
};

function setGetSystemInfoFunc(e) {
    exports.getLoginInfo = getLoginInfo = e;
}

exports.getSystemInfo = getSystemInfo;