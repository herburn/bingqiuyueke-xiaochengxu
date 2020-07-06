Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isValidPhoneNumber = void 0;

var phoneRegex = /^[1]([3-9])[0-9]{9}$/, isValidPhoneNumber = function(e) {
    return phoneRegex.test(e);
};

exports.isValidPhoneNumber = isValidPhoneNumber;