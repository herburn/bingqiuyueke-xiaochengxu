function sleep(t) {
    var l = null, u = null, o = null, e = new Promise(function(e, n) {
        l = e, u = n, o = setTimeout(function() {
            e(t);
        }, t);
    });
    return e.cancel = function(e) {
        clearTimeout(o), e(l, u);
    }, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.sleep = sleep;