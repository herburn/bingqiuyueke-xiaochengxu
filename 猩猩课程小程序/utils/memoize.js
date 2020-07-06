Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.memoizeReference = memoizeReference, exports.memoizeNormal = void 0;

var _ramda = require("./../vendor.js")(320);

function _slicedToArray(e, r) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, r) {
    var t = [], o = !0, n = !1, a = void 0;
    try {
        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (t.push(i.value), 
        !r || t.length !== r); o = !0) ;
    } catch (e) {
        n = !0, a = e;
    } finally {
        try {
            o || null == l.return || l.return();
        } finally {
            if (n) throw a;
        }
    }
    return t;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

var memoizeNormal = (0, _ramda.flip)(_ramda.memoizeWith);

function memoizeReference(l, m) {
    var u = {}, c = {};
    return f.count = 0, f;
    function f() {
        var e = _slicedToArray(m.apply(void 0, arguments), 2), r = e[0], t = e[1], o = c[r], n = !o || o.length !== t.length;
        if (!n) for (var a = 0; a < t.length; a++) t[a] !== o[a] && (n = !0);
        var i = u[r];
        return n && (i = l.apply(void 0, arguments), u[r] = i, c[r] = t, f.count++), i;
    }
}

exports.memoizeNormal = memoizeNormal;