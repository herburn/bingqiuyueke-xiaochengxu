Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = getTracesDataset;

var _ramda = require("./../../../vendor.js")(320), _object = require("./../../../utils/object.js");

function _defineProperty(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}

function getTracesDataset(r) {
    var y = r.responseRegionId, e = r.schema, t = r.dataset, a = r.console, b = void 0 === a ? {
        error: function() {}
    } : a;
    if (void 0 !== e) {
        if ("data" === e) return t;
        if ("String" !== (0, _ramda.type)(e)) return function r(e) {
            var t = e.schema, a = e.obj, o = e.parent, n = e.root, c = {};
            if ("Function" === (0, _ramda.type)(t)) return t(a, o, n);
            "Array" === (0, _ramda.type)(t) && (t = (0, _ramda.converge)(_ramda.zipObj, [ _ramda.identity, (0, 
            _ramda.pipe)(_ramda.length, (0, _ramda.repeat)(void 0)) ])(t));
            var i = !0, d = !1, _ = void 0;
            try {
                for (var u, p = (0, _ramda.keys)(t)[Symbol.iterator](); !(i = (u = p.next()).done); i = !0) {
                    var m = u.value, s = t[m];
                    "Undefined" === (0, _ramda.type)(s) ? f(m, a) ? c[m] = (0, _object.path)(m, a) : b.error("埋点响应区域 ".concat(y, " 绑定数据字段 ").concat(m, " 找不到，请修复！")) : "String" === (0, 
                    _ramda.type)(s) && (0, _ramda.test)(/[.[]/)(s) ? f(s, a) ? c[m] = (0, _object.path)(s, a) : b.error("埋点响应区域 ".concat(y, " 绑定数据字段 ").concat(s, " 找不到，请修复！")) : "String" === (0, 
                    _ramda.type)(s) && "@" === s[0] ? f(s, a) ? c[m] = (0, _object.path)((0, _ramda.tail)(s), a) : b.error("埋点响应区域 ".concat(y, " 绑定数据字段 ").concat(s, " 找不到，请修复！")) : (0, 
                    _ramda.contains)((0, _ramda.type)(s), [ "Object", "Array", "Function" ]) ? c[m] = r({
                        schema: s,
                        obj: (0, _object.path)(m, a),
                        parent: a,
                        root: n
                    }) : c[m] = s;
                }
            } catch (r) {
                d = !0, _ = r;
            } finally {
                try {
                    i || null == p.return || p.return();
                } finally {
                    if (d) throw _;
                }
            }
            return c;
            function f(r, e) {
                if ((0, _object.hasPath)(r, e)) return 1;
                b.error("没找到 ".concat(r, " 字段相对应的值"));
            }
        }({
            schema: e,
            obj: t,
            parent: t,
            root: t
        });
        var o = (0, _object.path)(e, t);
        return "Object" === (0, _ramda.type)(o) ? o : _defineProperty({}, e, o);
    }
}