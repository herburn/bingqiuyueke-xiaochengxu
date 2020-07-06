function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.waitSingle = waitSingle, exports.waitAll = waitAll, exports.waitRace = waitRace, 
exports.release = release, exports.reset = reset, exports.Semaphore = void 0;

var increment = 0, Semaphore = function() {
    function l(e) {
        var r = this, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = t.initialCount, i = void 0 === n ? 0 : n, o = t.maxCount, s = void 0 === o ? 1 : o, u = t.isPromise, a = void 0 !== u && u;
        _classCallCheck(this, l), _defineProperty(this, "_name", ""), _defineProperty(this, "_promise", null), 
        _defineProperty(this, "_handlePromise", null), _defineProperty(this, "_initialCount", 0), 
        _defineProperty(this, "_maxCount", 1), _defineProperty(this, "_resultList", []), 
        _defineProperty(this, "_pendingList", []), this._name = e, a ? this._promise = this._createPromise() : (this._initialCount = i, 
        this._maxCount = s, this._resultList = Array.from(new Array(this._initialCount), function() {
            return Promise.resolve(r._name);
        }), this._pendingList = []);
    }
    return _createClass(l, [ {
        key: "reset",
        value: function() {
            var e = this;
            this.release(), null !== this._promise && (this._promise = this._createPromise()), 
            this._resultList = Array.from(new Array(this._initialCount), function() {
                return Promise.resolve(e._name);
            });
        }
    }, {
        key: "lock",
        value: function() {
            var t = this;
            if (this._promise) return this._promise;
            if (this._resultList.length) return this._resultList.shift();
            var n = ++increment, e = new Promise(function(e, r) {
                t._pendingList.push({
                    __id: n,
                    resolve: function() {
                        return e(t._name);
                    },
                    reject: function() {
                        return r(t._name);
                    }
                });
            });
            return e.__id = n, e;
        }
    }, {
        key: "unLock",
        value: function(e) {
            var r = 0 < arguments.length && void 0 !== e ? e : null;
            if (this._promise && this._handlePromise) return this._handlePromise.resolve(), 
            void (this._handlePromise = null);
            if (r) {
                var t = this._pendingList.map(function(e) {
                    return e.__id;
                }).indexOf(r.__id);
                ~t ? this._pendingList.splice(t, 1)[0].resolve() : console.error("unLock：出错了，没有找到promise");
            } else this._resultList.length >= this._maxCount || (this._pendingList.length ? this._pendingList.shift().resolve() : this._resultList.push(Promise.resolve(this._name)));
        }
    }, {
        key: "release",
        value: function() {
            this._promise ? this._handlePromise && (this._handlePromise.reject(), this._handlePromise = null) : 0 < this._pendingList.length && (this._pendingList.forEach(function(e) {
                return e.reject();
            }), this._pendingList = []);
        }
    }, {
        key: "_createPromise",
        value: function() {
            var t = this;
            return new Promise(function(e, r) {
                t._handlePromise = {
                    resolve: function() {
                        return e(t._name);
                    },
                    reject: function() {
                        return r(t._name);
                    }
                };
            });
        }
    }, {
        key: "name",
        get: function() {
            return this._name;
        }
    }, {
        key: "promise",
        get: function() {
            return this._promise;
        }
    }, {
        key: "currentValue",
        get: function() {
            return null !== this._promise ? this._handlePromise ? 0 : 1 : this._resultList.length;
        }
    } ]), l;
}();

function waitSingle(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1, t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], n = makeWrapperPromise(isPromise(e) ? e : e.lock());
    return -1 === r ? (n._release = i, n) : Promise.race([ n, sleep(r) ]).then(function(e) {
        if (e !== r) return e;
        if (i(), t) throw "timeout";
        return r;
    });
    function i() {
        isPromise(e) ? e._release() : !e.promise && n.isPending && e.unLock(n.originalPromise);
    }
}

function waitAll(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1, t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], n = e.map(function(e) {
        return makeWrapperPromise(isPromise(e) ? e : e.lock());
    });
    if (-1 === r) {
        var i = Promise.all(n);
        return i._release = s, i;
    }
    var o = Promise.all(n);
    return Promise.race([ o, sleep(r) ]).then(function(e) {
        if (e !== r) return e;
        if (s(), t) throw "timeout";
        return r;
    });
    function s() {
        e.forEach(function(e, r) {
            isPromise(e) ? e._release() : !e.promise && n[r].isPending && e.unLock(n[r].originalPromise);
        });
    }
}

function waitRace(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1, t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], n = e.map(function(e) {
        return makeWrapperPromise(isPromise(e) ? e : e.lock());
    });
    if (-1 !== r) return Promise.race([].concat(_toConsumableArray(n), [ sleep(r) ])).then(function(e) {
        if (e !== r) return o(), e;
        if (o(), t) throw "timeout";
        return r;
    });
    var i = Promise.race(n).then(function(e) {
        return o(), e;
    });
    return i._release = o, i;
    function o() {
        e.forEach(function(e, r) {
            isPromise(e) ? e._release() : !e.promise && n[r].isPending && e.unLock(n[r].originalPromise);
        });
    }
}

function release(e) {
    return e.unLock(), !0;
}

function reset(e) {
    return e.reset(), !0;
}

function makeWrapperPromise(e) {
    if (e.isPending) return e;
    var r = !1, t = !1, n = e.then(function(e) {
        return t = !0, e;
    }, function(e) {
        throw r = !0, e;
    });
    return n.originalPromise = e, Object.defineProperties(n, {
        isPending: {
            getter: function() {
                return !(t || r);
            }
        },
        isFulfilled: {
            getter: function() {
                return t;
            }
        },
        isRejected: {
            getter: function() {
                return r;
            }
        }
    }), n;
}

function sleep(r) {
    return new Promise(function(e) {
        setTimeout(function() {
            e(r);
        }, r);
    });
}

function isPromise(e) {
    return null !== e && "object" === _typeof(e) && "function" == typeof e.constructor && "Promise" === (r = e.constructor, 
    null == (t = String(r).match(/^function (\w*)/)) ? "" : t[1]);
    var r, t;
}

exports.Semaphore = Semaphore;