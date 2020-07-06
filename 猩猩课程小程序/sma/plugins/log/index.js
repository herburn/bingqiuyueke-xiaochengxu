Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var debugLevel = {
    log: 1,
    warn: 2,
    error: 3,
    none: 4
};

function _default(e) {
    var r = e.debug, l = e.name, a = debugLevel[r];
    return {
        install: function(e, r) {
            return r("log", n), r("info", o), r("warn", t), r("error", u), {};
        }
    };
    function n() {
        for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        a <= debugLevel.log && (e = console).log.apply(e, [ l ].concat(n));
    }
    function o() {
        for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        a <= debugLevel.log && (e = console).info.apply(e, [ l ].concat(n));
    }
    function t() {
        for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        a <= debugLevel.warn && (e = console).warn.apply(e, [ l ].concat(n));
    }
    function u() {
        for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        a <= debugLevel.error && (e = console).error.apply(e, [ l ].concat(n));
    }
}