Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _config = _interopRequireDefault(require("./../config.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getRealPageInfo(e) {
    var t = e.page, a = e.data, r = e.meta, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(t in _config.default.routeMap)) throw new Error("routeMap 中未找到 ".concat(t, " 页面"));
    o.push(t);
    var g = _config.default.routeMap[t].handler({
        data: a
    });
    return "path" in g ? {
        pagePath: g.path,
        pageData: mergeRight(g.data, a),
        pageMeta: mergeRight(g.meta, r),
        pages: o
    } : getRealPageInfo({
        page: g.page,
        data: mergeRight(g.data, a),
        meta: mergeRight(g.meta, r)
    }, o);
}

var _default = getRealPageInfo;

function mergeRight(e, t) {
    return void 0 === e ? t : void 0 === t ? e : "[object Object]" === Object.prototype.toString.call(e) && "[object Object]" === Object.prototype.toString.call(e) ? Object.assign({}, e, t) : t;
}

exports.default = _default;