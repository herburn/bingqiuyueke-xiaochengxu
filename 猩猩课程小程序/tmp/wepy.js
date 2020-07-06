function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

function getHasProto() {
    var t = !1;
    if ("__proto__" in {}) {
        var e = function() {}, r = [];
        r.__proto__ = {
            push: e
        }, t = e === r.push;
    }
    return t;
}

var _Set, hasProto = getHasProto();

function isNative(t) {
    return "function" == typeof t && /native code/.test(t.toString());
}

console.log("hasProto", hasProto), _Set = "undefined" != typeof Set && isNative(Set) ? Set : function() {
    function t() {
        this.set = Object.create(null);
    }
    return t.prototype.has = function(t) {
        return !0 === this.set[t];
    }, t.prototype.add = function(t) {
        this.set[t] = !0;
    }, t.prototype.clear = function() {
        this.set = Object.create(null);
    }, t;
}();

var isStr = function(t) {
    return "string" == typeof t;
}, isNum = function(t) {
    return "number" == typeof t;
}, isArr = Array.isArray, isUndef = function(t) {
    return void 0 === t;
}, isFunc = function(t) {
    return "function" == typeof t;
};

function isObject(t) {
    return null !== t && "object" === _typeof(t);
}

var isObj = isObject, _toString = Object.prototype.toString;

function isPlainObject(t) {
    return "[object Object]" === _toString.call(t);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(t, e) {
    return hasOwnProperty.call(t, e);
}

function noop(t, e, r) {}

function isValidArrayIndex(t) {
    var e = parseFloat(String(t));
    return 0 <= e && Math.floor(e) === e && isFinite(t);
}

function toArray(t, e) {
    void 0 === e && (e = 0);
    for (var r = t.length - e, n = new Array(r); r--; ) n[r] = t[r + e];
    return n;
}

function extend() {
    var t, e, r, n, i, o, a = arguments, s = arguments[0] || {}, c = 1, p = arguments.length, h = !1;
    for ("boolean" == typeof s && (h = s, s = arguments[c] || {}, c++), "object" !== _typeof(s) && "function" != typeof s && (s = {}), 
    c === p && (s = this, c--); c < p; c++) if (t = a[c]) for (e in t) r = s[e], s !== (n = t[e]) && (h && n && (isPlainObject(n) || (i = Array.isArray(n))) ? (o = i ? (i = !1, 
    r && Array.isArray(r) ? r : []) : r && isPlainObject(r) ? r : {}, s[e] = extend(h, o, n)) : s[e] = n);
    return s;
}

function clone(t, e) {
    return void 0 === e && (e = !0), isArr(t) ? extend(e, [], t) : "" + t != "null" && isPlainObject(t) ? extend(e, {}, t) : t;
}

var WEAPP_APP_LIFECYCLE = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ], WEAPP_PAGE_LIFECYCLE = [ "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize" ], WEAPP_COMPONENT_LIFECYCLE = [ "beforeCreate", "created", "attached", "ready", "moved", "detached" ], WEAPP_COMPONENT_PAGE_LIFECYCLE = [ "show", "hide", "resize" ], WEAPP_LIFECYCLE = [].concat(WEAPP_APP_LIFECYCLE).concat(WEAPP_PAGE_LIFECYCLE).concat(WEAPP_COMPONENT_LIFECYCLE), config = {}, warn = noop, generateComponentTrace = function(t) {
    return 'Found in component: "' + t.$is + '"';
}, hasConsole = "undefined" != typeof console;

function handleError(t, e, r) {
    if (e) for (var n = e; n = n.$parent; ) {
        var i = n.$options.errorCaptured;
        if (i) for (var o = 0; o < i.length; o++) try {
            if (!1 === i[o].call(n, t, e, r)) return;
        } catch (t) {
            globalHandleError(t, n, "errorCaptured hook");
        }
    }
    globalHandleError(t, e, r);
}

function globalHandleError(t, e, r) {
    if (config.errorHandler) try {
        return config.errorHandler.call(null, t, e, r);
    } catch (t) {
        logError(t, null, "config.errorHandler");
    }
    logError(t, e, r);
}

function logError(t, e, r) {
    if (warn("Error in " + r + ': "' + t.toString() + '"', e), "undefined" == typeof console) throw t;
    console.error(t);
}

var microTimerFunc, macroTimerFunc, callbacks = [], pending = !(warn = function(t, e) {
    hasConsole && !config.silent && console.error("[WePY warn]: " + t + (e ? generateComponentTrace(e) : ""));
});

function flushCallbacks() {
    pending = !1;
    for (var t = callbacks.slice(0), e = callbacks.length = 0; e < t.length; e++) t[e]();
}

var useMacroTask = !1;

if ("undefined" != typeof setImmediate && isNative(setImmediate)) macroTimerFunc = function() {
    setImmediate(flushCallbacks);
}; else if ("undefined" == typeof MessageChannel || !isNative(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) macroTimerFunc = function() {
    setTimeout(flushCallbacks, 0);
}; else {
    var channel = new MessageChannel(), port = channel.port2;
    channel.port1.onmessage = flushCallbacks, macroTimerFunc = function() {
        port.postMessage(1);
    };
}

if ("undefined" != typeof Promise && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function() {
        p.then(flushCallbacks);
    };
} else microTimerFunc = macroTimerFunc;

function nextTick(t, e) {
    var r;
    if (callbacks.push(function() {
        if (t) try {
            t.call(e);
        } catch (t) {
            handleError(t, e, "nextTick");
        } else r && r(e);
    }), pending || (pending = !0, (useMacroTask ? macroTimerFunc : microTimerFunc)()), 
    !t && "undefined" != typeof Promise) return new Promise(function(t) {
        r = t;
    });
}

var renderCallbacks = [];

function renderFlushCallbacks() {
    for (var t = renderCallbacks.slice(0), e = renderCallbacks.length = 0; e < t.length; e++) t[e]();
}

function renderNextTick(t, e) {
    var r;
    if (renderCallbacks.push(function() {
        if (t) try {
            t.call(e);
        } catch (t) {
            handleError(t, e, "nextTick");
        } else r && r(e);
    }), !t && "undefined" != typeof Promise) return new Promise(function(t) {
        r = t;
    });
}

function remove(t, e) {
    if (t.length) {
        var r = t.indexOf(e);
        if (-1 < r) return t.splice(r, 1);
    }
}

function def(t, e, r, n) {
    Object.defineProperty(t, e, {
        value: r,
        enumerable: !!n,
        writable: !0,
        configurable: !0
    });
}

var bailRE = /[^\w.$]/;

function parsePath(t) {
    if (!bailRE.test(t)) {
        var r = t.split(".");
        return function(t) {
            for (var e = 0; e < r.length; e++) {
                if (!t) return;
                t = t[r[e]];
            }
            return t;
        };
    }
}

var uid = 0, Dep = function() {
    this.id = uid++, this.subs = [];
};

Dep.prototype.addSub = function(t) {
    this.subs.push(t);
}, Dep.prototype.removeSub = function(t) {
    remove(this.subs, t);
}, Dep.prototype.depend = function() {
    Dep.target && Dep.target.addDep(this);
}, Dep.prototype.notify = function() {
    for (var t = this.subs.slice(), e = 0, r = t.length; e < r; e++) t[e].update();
}, Dep.target = null;

var targetStack = [];

function pushTarget(t) {
    Dep.target && targetStack.push(Dep.target), Dep.target = t;
}

function popTarget() {
    Dep.target = targetStack.pop();
}

var setPath = function(t, e) {
    return isNum(t) ? e + "[" + t + "]" : e + "." + t;
}, pickOp = function(t) {
    return isObject(t) && hasOwn(t, "__ob__") ? t.__ob__.op : null;
}, ObserverPath = function(t, e, r) {
    if (this.ob = e, r) {
        var n = getPathMap(t, r.pathKeys, r.pathMap), i = n.combinePathKeys, o = n.combinePathMap;
        this.pathKeys = i, this.pathMap = o;
    } else this.pathKeys = null, this.pathMap = null;
};

function addPaths(t, e, r) {
    e.traverseOp(t, r.pathKeys, r.pathMap, function(t, e) {
        return t.path in e.pathMap ? null : (e.addPath(t), t);
    });
}

function cleanPaths(t, e, r) {
    e.traverseOp(t, r.pathKeys, r.pathMap, function(t, e) {
        return e.delPath(t.path), t;
    });
}

function getPathMap(t, e, r) {
    var n;
    if (r) {
        for (var i = [], o = {}, a = 0; a < e.length; a++) {
            var s = setPath(t, r[e[a]].path);
            i.push(s), o[s] = {
                key: t,
                root: r[e[a]].root,
                path: s
            };
        }
        return {
            combinePathKeys: i,
            combinePathMap: o
        };
    }
    return {
        combinePathKeys: [ t ],
        combinePathMap: ((n = {})[t] = {
            key: t,
            root: t,
            path: t
        }, n)
    };
}

ObserverPath.prototype.traverseOp = function(t, e, r, n) {
    for (var i = getPathMap(t, e, r), o = i.combinePathMap, a = i.combinePathKeys, s = [], c = {}, p = !1, h = 0; h < a.length; h++) {
        var u = n(o[a[h]], this);
        u && (p = !0, s.push(u.path), c[u.path] = u);
    }
    if (p) {
        var l = this.ob.value;
        if (Array.isArray(l)) for (var f = 0; f < l.length; f++) {
            var d = pickOp(l[f]);
            d && d.traverseOp(f, s, c, n);
        } else for (var y = Object.keys(l), v = 0; v < y.length; v++) {
            var _ = y[v], g = pickOp(l[_]);
            g && g.traverseOp(_, s, c, n);
        }
    }
}, ObserverPath.prototype.addPath = function(t) {
    this.pathKeys.push(t.path), this.pathMap[t.path] = t;
}, ObserverPath.prototype.delPath = function(t) {
    remove(this.pathKeys, t), delete this.pathMap[t];
};

var arrayProto = Array.prototype, arrayMethods = Object.create(arrayProto), methodsToPatch = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];

function delInvalidPaths(t, e, r) {
    isObject(e) && hasOwn(e, "__ob__") && cleanPaths(t, e.__ob__.op, r.__ob__.op);
}

methodsToPatch.forEach(function(c) {
    var p = arrayProto[c];
    def(arrayMethods, c, function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        if (0 < this.length) switch (c) {
          case "pop":
            var r = this.length;
            delInvalidPaths(r - 1, this[r - 1], this);
            break;

          case "shift":
            delInvalidPaths(0, this[0], this);
            break;

          case "splice":
          case "sort":
          case "reverse":
            for (var n = 0; n < this.length; n++) delInvalidPaths(n, this[n], this);
        }
        var i = p.apply(this, t), o = this.__ob__, a = o.vm;
        if (a.$dirty) if ("push" === c) {
            var s = o.value.length - 1;
            a.$dirty.set(o.op, s, o.value[s]);
        } else "splice" === c && 3 === t.length && 1 === t[1] ? a.$dirty.set(o.op, t[0], o.value[t[0]]) : a.$dirty.set(o.op, null, o.value);
        return o.observeArray(o.key, o.value), o.dep.notify(), i;
    });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods), observerState = {
    shouldConvert: !0
}, Observer = function(t) {
    var e = t.vm, r = t.key, n = t.value, i = t.parent;
    (this.value = n, this.dep = new Dep(), this.vmCount = 0, this.vm = e, this.op = new ObserverPath(r, this, i && i.__ob__ && i.__ob__.op), 
    def(n, "__ob__", this), Array.isArray(n)) ? ((hasProto ? protoAugment : copyAugment)(n, arrayMethods, arrayKeys), 
    this.observeArray(r, n)) : this.walk(r, n);
};

function protoAugment(t, e, r) {
    t.__proto__ = e;
}

function copyAugment(t, e, r) {
    for (var n = 0, i = r.length; n < i; n++) {
        var o = r[n];
        def(t, o, e[o]);
    }
}

function observe(t) {
    var e = t.vm, r = t.key, n = t.value, i = t.parent, o = t.root;
    if (isObject(n)) {
        var a;
        if (hasOwn(n, "__ob__") && n.__ob__ instanceof Observer) addPaths(r, (a = n.__ob__).op, i.__ob__.op); else observerState.shouldConvert && (Array.isArray(n) || isPlainObject(n)) && Object.isExtensible(n) && !n._isVue && (a = new Observer({
            vm: e,
            key: r,
            value: n,
            parent: i
        }));
        return o && a && a.vmCount++, a;
    }
}

function defineReactive(t) {
    var r = t.vm, n = t.obj, i = t.key, o = t.value, a = t.parent, s = t.customSetter, c = t.shallow, p = new Dep(), e = Object.getOwnPropertyDescriptor(n, i);
    if (!e || !1 !== e.configurable) {
        var h = e && e.get;
        h || 2 !== arguments.length || (o = n[i]);
        var u = e && e.set, l = !c && observe({
            vm: r,
            key: i,
            value: o,
            parent: n
        });
        Object.defineProperty(n, i, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                var t = h ? h.call(n) : o;
                return Dep.target && (p.depend(), l && (l.dep.depend(), Array.isArray(t) && dependArray(t))), 
                t;
            },
            set: function(t) {
                var e = h ? h.call(n) : o;
                t === e || t != t && e != e || (isObject(o) && hasOwn(o, "__ob__") && cleanPaths(i, o.__ob__.op, a.__ob__.op), 
                s && s(), u ? u.call(n, t) : o = t, r && r.$dirty && r.$dirty.set(n.__ob__.op, i, t), 
                l = !c && observe({
                    vm: r,
                    key: i,
                    value: t,
                    parent: a
                }), p.notify());
            }
        });
    }
}

function set(t, e, r, n) {
    if (Array.isArray(e) && isValidArrayIndex(r)) return e.length = Math.max(e.length, r), 
    e.splice(r, 1, n), n;
    if (r in e && !(r in Object.prototype)) return e[r] = n;
    var i = e.__ob__;
    return e._isVue || i && i.vmCount ? (warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), 
    n) : i ? (isObject(e[r]) && hasOwn(e[r], "__ob__") && cleanPaths(r, e[r].__ob__.op, parent.__ob__.op), 
    defineReactive({
        vm: t,
        obj: i.value,
        key: r,
        value: n,
        parent: i.value
    }), t && t.$dirty && hasOwn(e, "__ob__") && t.$dirty.set(e.__ob__.op, r, n), i.dep.notify(), 
    n) : e[r] = n;
}

function del(t, e) {
    if (Array.isArray(t) && isValidArrayIndex(e)) t.splice(e, 1); else {
        var r = t.__ob__;
        t._isVue || r && r.vmCount ? warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : hasOwn(t, e) && (t[e] = null, 
        delete t[e], r && r.dep.notify());
    }
}

function dependArray(t) {
    for (var e = void 0, r = 0, n = t.length; r < n; r++) (e = t[r]) && e.__ob__ && e.__ob__.dep.depend(), 
    Array.isArray(e) && dependArray(e);
}

Observer.prototype.walk = function(t, e) {
    for (var r = Object.keys(e), n = 0; n < r.length; n++) defineReactive({
        vm: this.vm,
        obj: e,
        key: r[n],
        value: e[r[n]],
        parent: e
    });
}, Observer.prototype.observeArray = function(t, e) {
    for (var r = 0, n = e.length; r < n; r++) observe({
        vm: this.vm,
        key: r,
        value: e[r],
        parent: e
    });
}, Observer.prototype.hasPath = function(t) {
    for (var e = this.vm, r = "", n = 0; n < t.length; ) {
        if ("." !== t[n] && "[" !== t[n] && "]" !== t[n]) r += t[n]; else if (0 !== r.length && (e = e[r], 
        r = "", !isObject(e))) return !1;
        n++;
    }
    return !0;
}, Observer.prototype.isPathEq = function(t, e) {
    for (var r = this.vm, n = "", i = 0; i < t.length; ) {
        if ("." !== t[i] && "[" !== t[i] && "]" !== t[i]) n += t[i]; else if (0 !== n.length && (r = r[n], 
        n = "", !isObject(r))) return !1;
        i++;
    }
    return 0 !== n.length && (r = r[n]), e === r;
};

var Base = function() {
    this._events = {};
};

Base.prototype.$set = function(t, e, r) {
    return set(this, t, e, r);
}, Base.prototype.$delete = function(t, e) {
    return del(t, e);
}, Base.prototype.$on = function(t, e) {
    var r = this;
    return isArr(t) ? t.forEach(function(t) {
        isStr(t) ? r.$on(t, e) : isObj(t) && r.$on(t.event, t.fn);
    }) : (this._events[t] || (this._events[t] = [])).push(e), this;
}, Base.prototype.$once = function() {}, Base.prototype.$off = function(t, e) {
    var r = this;
    if (!t && !e) return this._events = Object.create(null), this;
    if (isArr(t)) return t.forEach(function(t) {
        isStr(t) ? r.$off(t, e) : isObj(t) && r.$off(t.event, t.fn);
    }), this;
    if (!this._events[t]) return this;
    if (!e) return this._event[t] = null, this;
    if (e) for (var n = this._events[t], i = n.length; i--; ) {
        var o = n[i];
        if (o === e || o.fn === e) {
            n.splice(i, 1);
            break;
        }
    }
    return this;
}, Base.prototype.$emit = function(t, e, r) {
    this.$wx.triggerEvent(t, {
        customComData: e
    }, r);
};

var seenObjects = new _Set();

function traverse(t) {
    _traverse(t, seenObjects), seenObjects.clear();
}

function _traverse(t, e) {
    var r, n, i = Array.isArray(t);
    if ((i || isObject(t)) && !Object.isFrozen(t)) {
        if (t.__ob__) {
            var o = t.__ob__.dep.id;
            if (e.has(o)) return;
            e.add(o);
        }
        if (i) for (r = t.length; r--; ) _traverse(t[r], e); else for (r = (n = Object.keys(t)).length; r--; ) _traverse(t[n[r]], e);
    }
}

var MAX_UPDATE_COUNT = 100, queue = [], activatedChildren = [], has = {}, circular = {}, waiting = !1, flushing = !1, index = 0;

function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0, has = {}, waiting = flushing = !(circular = {});
}

function flushSchedulerQueue(t) {
    var e, r;
    void 0 === t && (t = 0), flushing = !0, 0 === t && queue.sort(function(t, e) {
        return t.id - e.id;
    });
    var n = [];
    for (0 === t && (index = 0); index < queue.length; index++) if ((e = queue[index]) && e.isRenderWatcher) n.push(e); else if (r = e.id, 
    has[r] = null, e.run(), null != has[r] && (circular[r] = (circular[r] || 0) + 1, 
    circular[r] > MAX_UPDATE_COUNT)) return warn("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm), 
    void resetSchedulerState();
    n.length && n.forEach(function(t) {
        has[t.id] = null, t.run();
    }), queue.slice(index).length ? flushSchedulerQueue(t + 1) : resetSchedulerState();
}

function queueWatcher(t) {
    var e = t.id;
    if (null == has[e]) {
        if (has[e] = !0, flushing) {
            for (var r = queue.length - 1; index < r && queue[r].id > t.id; ) r--;
            queue.splice(r + 1, 0, t);
        } else queue.push(t);
        waiting || (waiting = !0, nextTick(flushSchedulerQueue));
    }
}

var uid$1 = 0, Watcher = function(t, e, r, n, i) {
    this.vm = t, i && (t._watcher = this), t._watchers.push(this), n ? (this.deep = !!n.deep, 
    this.user = !!n.user, this.computed = !!n.computed, this.sync = !!n.sync) : this.deep = this.user = this.computed = this.sync = !1, 
    this.cb = r, this.id = ++uid$1, this.active = !0, this.dirty = this.computed, this.deps = [], 
    this.newDeps = [], this.depIds = new _Set(), this.newDepIds = new _Set(), this.isRenderWatcher = i, 
    this.expression = e.toString(), "function" == typeof e ? this.getter = e : (this.getter = parsePath(e), 
    this.getter || (this.getter = function() {}, warn('Failed watching path: "' + e + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', t))), 
    this.value = this.computed ? void 0 : this.get();
};

Watcher.prototype.get = function() {
    var t;
    pushTarget(this);
    var e = this.vm;
    try {
        t = this.getter.call(e, e);
    } catch (t) {
        if (!this.user) throw t;
        handleError(t, e, 'getter for watcher "' + this.expression + '"');
    } finally {
        this.deep && traverse(t), popTarget(), this.isRenderWatcher || this.cleanupDeps();
    }
    return t;
}, Watcher.prototype.addDep = function(t) {
    var e = t.id;
    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
}, Watcher.prototype.cleanupDeps = function() {
    for (var t = this.deps.length; t--; ) {
        var e = this.deps[t];
        this.newDepIds.has(e.id) || e.removeSub(this);
    }
    var r = this.depIds;
    this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, 
    this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
}, Watcher.prototype.update = function() {
    this.computed ? this.dirty = !0 : this.sync ? this.run() : queueWatcher(this);
}, Watcher.prototype.run = function() {
    if (this.active) {
        var t = this.get();
        if (t !== this.value || isObject(t) || this.deep) {
            var e = this.value;
            if (this.value = t, this.user) try {
                this.cb.call(this.vm, t, e);
            } catch (t) {
                handleError(t, this.vm, 'callback for watcher "' + this.expression + '"');
            } else this.cb.call(this.vm, t, e);
        }
    }
}, Watcher.prototype.evaluate = function() {
    if (this.value = this.get(), this.vm.$dirty) {
        var t = this._computedWatchers && this._computedWatchers[this.key] ? this.vm._computedWatchers[this.key].value : this.value;
        this.vm.$dirty.push(this.key, this.key, t, this.value);
    }
    return this.dirty = !1, this.value;
}, Watcher.prototype.depend = function() {
    if (Dep.target) for (var t = this.deps.length; t--; ) this.deps[t].depend();
}, Watcher.prototype.teardown = function() {
    if (this.active) {
        this.vm._isBeingDestroyed || remove(this.vm._watchers, this);
        for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
        this.active = !1;
    }
};

var WepyComponent = function(t) {
    function e() {
        t.apply(this, arguments);
    }
    return t && (e.__proto__ = t), ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.$watch = function(e, t, r) {
        var n = this;
        if (isArr(t) && t.forEach(function(t) {
            n.$watch(e, t, r);
        }), isPlainObject(t)) {
            var i = t;
            return "string" == typeof (i = (r = i).handler) && (i = this[i]), this.$watch(e, i, r);
        }
        (r = r || {}).user = !0;
        var o = new Watcher(this, e, t, r);
        return r.immediate && t.call(this, o.value), function() {
            o.teardown();
        };
    }, e.prototype.$forceUpdate = function() {
        this._watcher && this._watcher.update();
    }, e;
}(Base);

WepyComponent.prototype.$nextTick = renderNextTick;

var sharedPropertyDefinition = {
    enumerable: !0,
    configurable: !0,
    get: noop,
    set: noop
};

function proxy(t, e, r) {
    sharedPropertyDefinition.get = function() {
        return this[e][r];
    }, sharedPropertyDefinition.set = function(t) {
        this[e][r] = t;
    }, Object.defineProperty(t, r, sharedPropertyDefinition);
}

function patchData(t, e) {
    e = e || {}, t.data = e;
}

function initData(e, t) {
    var r;
    r = "function" == typeof (t = t || {}) ? t.call(e) : clone(t), e._data = r, Object.keys(r).forEach(function(t) {
        proxy(e, "_data", t);
    }), observe({
        vm: e,
        key: "",
        value: r,
        parent: "",
        root: !0
    });
}

function initWatch(e, r) {
    r && Object.keys(r).forEach(function(t) {
        e.$watch(t, r[t]);
    });
}

function createComputedGetter(e) {
    return function() {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.key = e, t.dirty && t.evaluate(), Dep.target && t.depend(), t.value;
    };
}

function initComputed(n, i) {
    if (i) {
        var o = n._computedWatchers = Object.create(null), a = {
            computed: !0
        };
        Object.keys(i).forEach(function(t) {
            var e = i[t], r = "object" === _typeof(e) ? e.get : e;
            r && "function" == typeof r || console.error('Getter is missing for computed property "' + t + '"'), 
            o[t] = new Watcher(n, r || function() {}, function(t, e) {}, a), "function" == typeof e ? (sharedPropertyDefinition.get = createComputedGetter(t), 
            sharedPropertyDefinition.set = function() {}) : (sharedPropertyDefinition.get = !1 !== e.cache ? createComputedGetter(t) : e.get, 
            sharedPropertyDefinition.set = e.set), Object.defineProperty(n, t, sharedPropertyDefinition);
        });
    }
}

var WepyConstructor = function(r) {
    function t(t) {
        void 0 === t && (t = {});
        var e = new r();
        return t.data && initData(e, t.data), initWatch(e), initComputed(e, t.computed), 
        e;
    }
    return r && (t.__proto__ = r), (t.prototype = Object.create(r && r.prototype)).constructor = t;
}(WepyComponent), $global = Object.create(null);

function use(t) {
    for (var e = [], r = arguments.length - 1; 0 < r--; ) e[r] = arguments[r + 1];
    if (t.installed) return this;
    var n = t.install || t;
    isFunc(n) && n.apply(t, [ this ].concat(e)), t.installed = 1;
}

function mixin(t) {
    void 0 === t && (t = {}), $global.mixin = ($global.mixin || []).concat(t);
}

var WepyApp = function(t) {
    function e() {
        t.call(this);
    }
    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
}(Base), WepyPage = function(t) {
    function e() {
        t.apply(this, arguments);
    }
    return t && (e.__proto__ = t), ((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.$launch = function(t, e) {
        this.$route("reLaunch", t, e);
    }, e.prototype.$navigate = function(t, e) {
        this.$route("navigate", t, e);
    }, e.prototype.$redirect = function(t, e) {
        this.$route("redirect", t, e);
    }, e.prototype.$back = function(t) {
        return void 0 === t && (t = {}), isNum(t) && (t = {
            delta: t
        }), t.delta || (t.delta = 1), wx.navigateBack(t);
    }, e.prototype.$route = function(t, e, r) {
        var n;
        if (void 0 === r && (r = {}), isStr(e)) {
            var i = [];
            if (isObj(r)) for (var o in r) isUndef(r[o]) || i.push(o + "=" + encodeURIComponent(r[o]));
            i.length && (e = e + "?" + i.join("&")), n = {
                url: e
            };
        } else n = e;
        var a = wx[t] || wx[t + "To"];
        if (isFunc(a)) return a(n);
    }, e;
}(WepyComponent);

function callUserHook(e, t, r) {
    var n = e.hooks[t], i = e.$app.hooks[t], o = r;
    return [ n, i ].forEach(function(t) {
        isFunc(t) && (o = t.call(e, o), isUndef(o) && (o = r));
    }), o;
}

function initHooks(t, e) {
    void 0 === e && (e = {}), t.hooks = e;
}

var AllowedTypes = [ String, Number, Boolean, Object, Array, null ], observerFn = function() {
    return function(t, e, r) {
        var n = this.$wepy;
        if (!(1 < r.length)) {
            var i = t;
            "function" == typeof i && (i = i.call(n)), n[r[0]] = i, n.$dirty.remove(n._props.__ob__.op, r[0]);
        }
    };
};

function patchProps(e, r) {
    var n = {};
    if (isStr(r) && (n = [ r ]), isArr(r)) r.forEach(function(t) {
        n[t] = {
            type: null,
            observer: observerFn(e, r, t)
        };
    }); else if (isObj(r)) for (var t in r) {
        var i = r[t], o = {};
        isUndef(i.type) ? o.type = null : isArr(i.type) ? (o.type = null, console.warn('In mini-app, mutiple type is not allowed. The type of "' + t + '" will changed to "null"')) : -1 === AllowedTypes.indexOf(i.type) ? (o.type = null, 
        console.warn('Type property of props "' + t + '" is invalid. Only String/Number/Boolean/Object/Array/null is allowed in weapp Component')) : o.type = i.type, 
        isUndef(i.default) || (isFunc(i.default) ? o.value = i.default.call(e) : o.value = i.default), 
        o.observer = observerFn(e, r, i), n[t] = o;
    }
    Object.keys(n).forEach(function(t) {}), e.properties = n;
}

function initProps(e, r) {
    e._props = {}, r && (Object.keys(r).forEach(function(t) {
        e._props[t] = r[t].value, proxy(e, "_props", t);
    }), observe({
        vm: e,
        key: "",
        value: e._props,
        root: !0
    }));
}

function initRender(r, n, i) {
    return r._init = !1, r._dirtyFromAttach = null, new Watcher(r, function() {
        r._init || n.forEach(function(t) {
            return clone(r[t]);
        });
        var t = r.$dirty.get("key");
        if (Object.keys(t).forEach(function(t) {
            return clone(r[t]);
        }), i.forEach(function(t) {
            return r[t];
        }), r.$dirty.length() || r._dirtyFromAttach) {
            var e = r.$dirty.pop();
            r._init && r.$app && (e = callUserHook(r, "before-setData", e)), (e || r._dirtyFromAttach) && (r._init ? r._dirtyFromAttach ? (r.$wx.setData(Object.assign(r._dirtyFromAttach, e || {}), renderFlushCallbacks), 
            r._dirtyFromAttach = null) : r.$wx.setData(e, renderFlushCallbacks) : (null === r._dirtyFromAttach && (r._dirtyFromAttach = {}), 
            Object.assign(r._dirtyFromAttach, e)));
        }
        r._init = !0;
    }, function() {}, null, !0);
}

var Event = function(t) {
    var e = t.detail, r = t.target, n = t.currentTarget;
    this.$wx = t, this.type = t.type, this.timeStamp = t.timeStamp, e && (this.x = e.x, 
    this.y = e.y), this.target = r, this.currentTarget = n, this.touches = t.touches, 
    this.changedTouches = t.changedTouches;
}, proxyHandler = function(t) {
    var e = this.$wepy, r = t.type, n = (t.currentTarget || t.target).dataset, i = n.wpyEvt, o = n.modelId, a = e.$rel || {}, s = (a.handlers && a.handlers[i] || {})[r], c = a.models[o];
    if (s || c) {
        var p;
        t.detail && "customComData" in t.detail && (p = t.detail.customComData, t.detail = p);
        for (var h = new Event(t), u = 0, l = [], f = [], d = !1, y = !c; u++ < 26 && (!d || !y); ) {
            var v = String.fromCharCode(64 + u);
            if (!d) {
                var _ = "wpy" + r + v;
                _ in n ? l.push(n[_]) : d = !0;
            }
            if (!y && c) {
                var g = "model" + v;
                g in n ? f.push(n[g]) : y = !0;
            }
        }
        if (c && r === c.type && isFunc(c.handler) && c.handler.call(e, t.detail.value, f), 
        isFunc(s)) {
            var b = l.concat(h);
            if (void 0 !== p && (b = b.concat(p)), !1 === callUserHook(e, "before-event", {
                event: h,
                params: b
            })) return;
            return s.apply(e, b);
        }
        if (!c) throw new Error("Unrecognized event");
    }
};

function initMethods(e, r) {
    r && Object.keys(r).forEach(function(t) {
        e[t] = r[t];
    });
}

function patchMethods(t, e, r) {
    t.methods = {};
    var n = t.methods;
    n._initComponent = function(t) {
        var e = t.detail, r = t.target.dataset, n = r.ref, i = r.wpyEvt, o = this.$wepy;
        return o.$children.push(e), n && (o.$refs[n] && warn('duplicate ref "' + n + '" will be covered by the last instance.\n', o), 
        o.$refs[n] = e), e.$evtId = i, e.$parent = o, e.$app = o.$app, e.$root = o.$root, 
        o;
    }, n._proxy = proxyHandler, e && Object.keys(e).forEach(function(t) {
        n[t] = e[t];
    });
}

function initEvents(e) {
    var r = e.$parent, n = r.$rel;
    e._events = {};
    var t = n.info.on, i = e.$evtId;
    i && t[i].forEach(function(t) {
        e.$on(t, function() {
            n.handlers[i][t].apply(r, arguments);
        });
    });
}

var Dirty = function(t) {
    this.reset(), this.type = t || "path";
};

Dirty.prototype.push = function(t, e, r, n) {
    void 0 !== n && (this._keys[t] = r, this._path[e] = n, this._length++);
}, Dirty.prototype.pop = function() {
    var t = Object.create(null);
    return "path" === this.type ? t = this._path : "key" === this.type && (t = this._keys), 
    this.reset(), t;
}, Dirty.prototype.get = function(t) {
    return "path" === t ? this._path : this._keys;
}, Dirty.prototype.set = function(t, e, r) {
    var n, i;
    if (null != e) {
        var o = getPathMap(e, t.pathKeys, t.pathMap);
        i = o.combinePathKeys, n = o.combinePathMap;
    } else i = t.pathKeys, n = t.pathMap;
    var a = n[i[0]], s = a.root, c = a.path;
    this.push(s, c, s === c ? r : t.ob.vm[s], r);
}, Dirty.prototype.remove = function(t, e) {
    var r, n;
    if (null != e) {
        var i = getPathMap(e, t.pathKeys, t.pathMap);
        n = i.combinePathKeys, r = i.combinePathMap;
    } else n = t.pathKeys, r = t.pathMap;
    var o = r[n[0]], a = o.root, s = o.path;
    s in this._path && (delete this._keys[a], delete this._path[s], this._length--);
}, Dirty.prototype.reset = function() {
    return this._keys = {}, this._path = {}, this._length = 0, this;
}, Dirty.prototype.length = function() {
    return this._length;
};

var app, comid = 0, callUserMethod = function(t, e, r, n) {
    var i, o = e[r];
    if (isFunc(o)) i = e[r].apply(t, n); else if (isArr(o)) for (var a in o) isFunc(o[a]) && (i = o[a].apply(t, n));
    return i;
}, getLifecycycle = function(t, e, r) {
    var n = t.concat([]);
    if (e && e.lifecycle && e.lifecycle[r]) {
        var i = [];
        isFunc(e.lifecycle[r]) && (i = e.lifecycle[r].call(null, n)), i.forEach(function(t) {
            -1 < n.indexOf(t) ? warn("'" + t + "' is already implemented in current version, please remove it from your lifecycel config") : n.push(t);
        });
    }
    return n;
};

function patchAppLifecycle(t, n, i) {
    void 0 === i && (i = {}), t.onLaunch = function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var r = new WepyApp();
        return (app = r).$options = n, r.$route = {}, r.$rel = i, initHooks((r.$wx = this).$wepy = r, n.hooks), 
        initMethods(r, n.methods), callUserMethod(r, r.$options, "onLaunch", t);
    }, getLifecycycle(WEAPP_APP_LIFECYCLE, i, "app").forEach(function(r) {
        !t[r] && n[r] && (isFunc(n[r]) || isArr(n[r])) && (t[r] = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return callUserMethod(app, app.$options, r, t);
        });
    });
}

function patchLifecycle(n, i, o, a) {
    var s = a ? WepyComponent : WepyPage;
    (n.created = function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var r = new s();
        return r.$dirty = new Dirty("path"), r.$children = [], r.$refs = {}, (this.$wepy = r).$wx = this, 
        r.$is = this.is, r.$options = i, r.$rel = o, r._watchers = [], a || ((r.$root = r).$app = app), 
        r.$id = ++comid + (a ? ".1" : ".0"), callUserMethod(r, r.$options, "beforeCreate", t), 
        initHooks(r, i.hooks), initProps(r, n.properties), initData(r, n.data, a), initMethods(r, i.methods), 
        initComputed(r, i.computed, !0), initWatch(r, i.watch), initRender(r, Object.keys(r._data).concat(Object.keys(r._props)).concat(Object.keys(r._computedWatchers || {})), Object.keys(r._computedWatchers || {})), 
        callUserMethod(r, r.$options, "created", t);
    }, a) ? (n.attached = function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        n.properties, this.properties;
        var r = this.$wepy;
        this.triggerEvent("_init", r);
        return r._dirtyFromAttach && r.$forceUpdate(), initEvents(r), callUserMethod(r, r.$options, "attached", t);
    }, n.pageLifetimes = {}, getLifecycycle(WEAPP_COMPONENT_PAGE_LIFECYCLE, o, "component").forEach(function(r) {
        !n.pageLifetimes[r] && i[r] && (isFunc(i[r]) || isArr(i[r])) && (n.pageLifetimes[r] = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return callUserMethod(this.$wepy, this.$wepy.$options, r, t);
        });
    })) : (n.attached = function() {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        var r = this.$wepy, n = r.$app, i = getCurrentPages(), o = i[i.length - 1], a = o.__route__, s = o.__wxWebviewId__;
        return r._dirtyFromAttach && r.$forceUpdate(), n.$route.path !== a && (n.$route.path = a, 
        n.$route.webViewId = s, r.routed && r.routed()), callUserMethod(r, r.$options, "attached", t);
    }, getLifecycycle(WEAPP_PAGE_LIFECYCLE, o, "page").forEach(function(r) {
        !n[r] && i[r] && (isFunc(i[r]) || isArr(i[r])) && (n.methods[r] = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return callUserMethod(this.$wepy, this.$wepy.$options, r, t);
        });
    }));
    getLifecycycle(WEAPP_COMPONENT_LIFECYCLE, o, "component").forEach(function(r) {
        n[r] || "beforeCreate" === r || !isFunc(i[r]) && !isArr(i[r]) || (n[r] = function() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return callUserMethod(this.$wepy, this.$wepy.$options, r, t);
        });
    });
}

var config$1 = {
    optionMergeStrategies: {},
    constants: {
        WEAPP_LIFECYCLE: WEAPP_LIFECYCLE,
        WEAPP_APP_LIFECYCLE: WEAPP_APP_LIFECYCLE,
        WEAPP_PAGE_LIFECYCLE: WEAPP_PAGE_LIFECYCLE,
        WEAPP_COMPONENT_LIFECYCLE: WEAPP_COMPONENT_LIFECYCLE
    }
}, globalMixinPatched = !1, defaultStrat = function(t, e) {
    return e || t;
}, strats = null;

function simpleMerge(t, e) {
    return t && e ? Object.assign({}, t, e) : t || e;
}

function initStrats() {
    if (strats) return strats;
    (strats = config$1.optionMergeStrategies).data = strats.props = strats.methods = strats.computed = strats.watch = strats.hooks = function(t, e, r, n) {
        e[r] = simpleMerge(n, e[r]);
    }, WEAPP_LIFECYCLE.forEach(function(t) {
        strats[t] || (strats[t] = function(t, e, r, n) {
            e[r] ? e[r] = [ n ].concat(e[r]) : e[r] = isArr(n) ? n : [ n ];
        });
    });
}

function patchMixins(e, r, t) {
    if (t || $global.mixin) {
        if (!globalMixinPatched) t = ($global.mixin || []).concat(t), globalMixinPatched = !0;
        if (isArr(t)) t.forEach(function(t) {
            return patchMixins(e, r, t);
        }), globalMixinPatched = !1; else for (var n in strats || initStrats(), t) {
            (strats[n] || defaultStrat)(e, r, n, t[n]);
        }
    }
}

function patchRelations(t, e) {
    e = e || {}, t.relations = e;
}

function app$1(t, e) {
    var r = {};
    return patchMixins(r, t, t.mixins), patchAppLifecycle(r, t, e), App(r);
}

function component(t, e) {
    void 0 === t && (t = {});
    var r = {
        externalClasses: t.externalClasses || [],
        options: t.options || {}
    };
    return patchMixins(r, t, t.mixins), t.properties ? (r.properties = t.properties, 
    t.props && console.warn("props will be ignore, if properties is set")) : t.props && patchProps(r, t.props), 
    patchMethods(r, t.methods, !0), patchData(r, t.data, !0), patchRelations(r, t.relations), 
    patchLifecycle(r, t, e, !0), t.pageLifetimes && console.log("pageLifetimes", r), 
    Component(r);
}

function page(t, e) {
    void 0 === t && (t = {});
    var r = {
        externalClasses: t.externalClasses || [],
        options: t.options || {}
    };
    return patchMixins(r, t, t.mixins), t.properties ? (r.properties = t.properties, 
    t.props && console.warn("props will be ignore, if properties is set")) : t.props && patchProps(r, t.props), 
    patchMethods(r, t.methods), patchData(r, t.data), patchLifecycle(r, t, e), Component(r);
}

function initGlobalAPI(n) {
    return n.use = use, n.mixin = mixin, n.set = function(t, e, r) {
        set.apply(n, [ void 0, t, e, r ]);
    }, n.delete = del, n.nextTick = renderNextTick, n.app = app$1, n.page = page, n.component = component, 
    n;
}

var wepy = initGlobalAPI(WepyConstructor);

wepy.config = config$1, wepy.global = $global, wepy.version = "2.0.0-alpha.9", wepy.observe = observe, 
module.exports = wepy;