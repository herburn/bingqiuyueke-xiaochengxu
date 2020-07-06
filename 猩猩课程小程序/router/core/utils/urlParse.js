Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.encodeParams = encodeParams, exports.encodeUrl = encodeUrl, exports.decodeParams = decodeParams, 
exports.decodePage = decodePage, exports.decodeUrl = decodeUrl;

var _getRealPageInfo = _interopRequireDefault(require("./getRealPageInfo.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, t) {
    var r = [], o = !0, n = !1, a = void 0;
    try {
        for (var i, c = e[Symbol.iterator](); !(o = (i = c.next()).done) && (r.push(i.value), 
        !t || r.length !== t); o = !0) ;
    } catch (e) {
        n = !0, a = e;
    } finally {
        try {
            o || null == c.return || c.return();
        } finally {
            if (n) throw a;
        }
    }
    return r;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function encodeParams(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], r = [];
    for (var o in e) -1 !== [ "string", "number" ].indexOf(_typeof(e[o])) && r.push("".concat(o, "=").concat(t ? encodeURIComponent(e[o]) : e[o]));
    return r.join("&");
}

function encodeUrl(e) {
    var t = e.page, r = e.data, o = void 0 === r ? {} : r, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = n.encode, i = void 0 !== a && a, c = n.isAbsolutePath, d = void 0 === c || c ? (0, 
    _getRealPageInfo.default)({
        page: t,
        data: o
    }) : {
        pagePath: t,
        pageData: o
    }, l = d.pagePath, u = encodeParams(d.pageData, i);
    return u ? "".concat(l, "?").concat(u) : l;
}

function decodeParams(e) {
    var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], t = e.split("?"), a = {};
    return (1 < t.length ? t[1] : t[0]).split("&").map(function(e) {
        return e.split("=");
    }).forEach(function(e) {
        var t = _slicedToArray(e, 2), r = t[0], o = t[1];
        return a[r] = n ? decodeURIComponent(o) : o;
    }), a;
}

function decodePage(e) {
    var t = e.split("?")[0].split("/");
    return t[t.length - 1];
}

function decodeUrl(e) {
    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
    return {
        page: decodePage(e),
        data: decodeParams(e, t)
    };
}