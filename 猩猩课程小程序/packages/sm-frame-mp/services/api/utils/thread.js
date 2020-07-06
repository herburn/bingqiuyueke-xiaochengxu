function sleep(s) {
    return new Promise(function(e, t) {
        setTimeout(function() {
            e(s);
        }, s);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sleep = sleep;