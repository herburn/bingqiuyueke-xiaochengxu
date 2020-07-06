function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

var traverse = module.exports = function(e) {
    return new Traverse(e);
};

function Traverse(e) {
    this.value = e;
}

function walk(e, u, s) {
    var f = [], l = [], p = !0;
    return function o(t) {
        var e = s ? copy(t) : t, n = {}, r = !0, a = {
            node: e,
            node_: t,
            path: [].concat(f),
            parent: l[l.length - 1],
            parents: l,
            key: f.slice(-1)[0],
            isRoot: 0 === f.length,
            level: f.length,
            circular: null,
            update: function(e, t) {
                a.isRoot || (a.parent.node[a.key] = e), a.node = e, t && (r = !1);
            },
            delete: function(e) {
                delete a.parent.node[a.key], e && (r = !1);
            },
            remove: function(e) {
                isArray(a.parent.node) ? a.parent.node.splice(a.key, 1) : delete a.parent.node[a.key], 
                e && (r = !1);
            },
            keys: null,
            before: function(e) {
                n.before = e;
            },
            after: function(e) {
                n.after = e;
            },
            pre: function(e) {
                n.pre = e;
            },
            post: function(e) {
                n.post = e;
            },
            stop: function() {
                p = !1;
            },
            block: function() {
                r = !1;
            }
        };
        if (!p) return a;
        function i() {
            if ("object" === _typeof(a.node) && null !== a.node) {
                a.keys && a.node_ === a.node || (a.keys = objectKeys(a.node)), a.isLeaf = 0 == a.keys.length;
                for (var e = 0; e < l.length; e++) if (l[e].node_ === t) {
                    a.circular = l[e];
                    break;
                }
            } else a.isLeaf = !0, a.keys = null;
            a.notLeaf = !a.isLeaf, a.notRoot = !a.isRoot;
        }
        i();
        var c = u.call(a, a.node);
        return void 0 !== c && a.update && a.update(c), n.before && n.before.call(a, a.node), 
        r && ("object" != _typeof(a.node) || null === a.node || a.circular || (l.push(a), 
        i(), forEach(a.keys, function(e, t) {
            f.push(e), n.pre && n.pre.call(a, a.node[e], e);
            var r = o(a.node[e]);
            s && hasOwnProperty.call(a.node, e) && (a.node[e] = r.node), r.isLast = t == a.keys.length - 1, 
            r.isFirst = 0 == t, n.post && n.post.call(a, r), f.pop();
        }), l.pop()), n.after && n.after.call(a, a.node)), a;
    }(e).node;
}

function copy(t) {
    if ("object" !== _typeof(t) || null === t) return t;
    var r;
    if (isArray(t)) r = []; else if (isDate(t)) r = new Date(t.getTime ? t.getTime() : t); else if (isRegExp(t)) r = new RegExp(t); else if (isError(t)) r = {
        message: t.message
    }; else if (isBoolean(t)) r = new Boolean(t); else if (isNumber(t)) r = new Number(t); else if (isString(t)) r = new String(t); else if (Object.create && Object.getPrototypeOf) r = Object.create(Object.getPrototypeOf(t)); else if (t.constructor === Object) r = {}; else {
        var e = t.constructor && t.constructor.prototype || t.__proto__ || {}, o = function() {};
        o.prototype = e, r = new o();
    }
    return forEach(objectKeys(t), function(e) {
        r[e] = t[e];
    }), r;
}

Traverse.prototype.get = function(e) {
    for (var t = this.value, r = 0; r < e.length; r++) {
        var o = e[r];
        if (!t || !hasOwnProperty.call(t, o)) {
            t = void 0;
            break;
        }
        t = t[o];
    }
    return t;
}, Traverse.prototype.has = function(e) {
    for (var t = this.value, r = 0; r < e.length; r++) {
        var o = e[r];
        if (!t || !hasOwnProperty.call(t, o)) return !1;
        t = t[o];
    }
    return !0;
}, Traverse.prototype.set = function(e, t) {
    for (var r = this.value, o = 0; o < e.length - 1; o++) {
        var n = e[o];
        hasOwnProperty.call(r, n) || (r[n] = {}), r = r[n];
    }
    return r[e[o]] = t;
}, Traverse.prototype.map = function(e) {
    return walk(this.value, e, !0);
}, Traverse.prototype.forEach = function(e) {
    return this.value = walk(this.value, e, !1), this.value;
}, Traverse.prototype.reduce = function(t, e) {
    var r = 1 === arguments.length, o = r ? this.value : e;
    return this.forEach(function(e) {
        this.isRoot && r || (o = t.call(this, o, e));
    }), o;
}, Traverse.prototype.paths = function() {
    var t = [];
    return this.forEach(function(e) {
        t.push(this.path);
    }), t;
}, Traverse.prototype.nodes = function() {
    var t = [];
    return this.forEach(function(e) {
        t.push(this.node);
    }), t;
}, Traverse.prototype.clone = function() {
    var n = [], a = [];
    return function t(r) {
        for (var e = 0; e < n.length; e++) if (n[e] === r) return a[e];
        if ("object" !== _typeof(r) || null === r) return r;
        var o = copy(r);
        return n.push(r), a.push(o), forEach(objectKeys(r), function(e) {
            o[e] = t(r[e]);
        }), n.pop(), a.pop(), o;
    }(this.value);
};

var objectKeys = Object.keys || function(e) {
    var t = [];
    for (var r in e) t.push(r);
    return t;
};

function toS(e) {
    return Object.prototype.toString.call(e);
}

function isDate(e) {
    return "[object Date]" === toS(e);
}

function isRegExp(e) {
    return "[object RegExp]" === toS(e);
}

function isError(e) {
    return "[object Error]" === toS(e);
}

function isBoolean(e) {
    return "[object Boolean]" === toS(e);
}

function isNumber(e) {
    return "[object Number]" === toS(e);
}

function isString(e) {
    return "[object String]" === toS(e);
}

var isArray = Array.isArray || function(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
}, forEach = function(e, t) {
    if (e.forEach) return e.forEach(t);
    for (var r = 0; r < e.length; r++) t(e[r], r, e);
};

forEach(objectKeys(Traverse.prototype), function(o) {
    traverse[o] = function(e) {
        var t = [].slice.call(arguments, 1), r = new Traverse(e);
        return r[o].apply(r, t);
    };
});

var hasOwnProperty = Object.hasOwnProperty || function(e, t) {
    return t in e;
};