Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBoxesSchedulesByFilterCreator = getBoxesSchedulesByFilterCreator;

var _ramda = require("./../../../../../vendor.js")(320);

function _slicedToArray(r, a) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, a) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(r, a) {
    var e = [], t = !0, n = !1, i = void 0;
    try {
        for (var o, s = r[Symbol.iterator](); !(t = (o = s.next()).done) && (e.push(o.value), 
        !a || e.length !== a); t = !0) ;
    } catch (r) {
        n = !0, i = r;
    } finally {
        try {
            t || null == s.return || s.return();
        } finally {
            if (n) throw i;
        }
    }
    return e;
}

function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}

function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(r) {
    if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) return Array.from(r);
}

function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) {
        for (var a = 0, e = new Array(r.length); a < r.length; a++) e[a] = r[a];
        return e;
    }
}

var hasFlip = (0, _ramda.flip)(_ramda.hasIn), defaultFilterParam = {
    classIdsFilter: [],
    isShowFinished: !1,
    durations: []
}, defaultPagingParam = {
    startBoxIndex: 0,
    scheduleCount: 1 / 0
};

function getBoxesSchedulesByFilterCreator(r) {
    var a = r.getSelector, e = r.createSelector, t = (0, _ramda.curryN)(2, a("getBoxSchedulesById"));
    return e(function(r, a) {
        return a;
    }, function(r, a, e) {
        return e;
    }, function(r, a, e, t) {
        return t || defaultFilterParam;
    }, function(r, a, e, t, n) {
        return n || defaultPagingParam;
    }, function(r) {
        return t(r);
    }, function(r, a, e, t, n) {
        var i, o, s, u, d, l, c, m, h, p = (i = r, o = a, (0, _ramda.map)(function(r) {
            return "".concat(i, "|").concat(r);
        })(o)), _ = (s = t.startBoxIndex, u = [], Array.prototype.push.apply(u, function(r) {
            var a = [];
            return 0 < r && a.push((0, _ramda.drop)(r)), a;
        }(s)), u), y = (0, _ramda.map)(n), f = (l = (d = e).classIdsFilter, c = d.isShowFinished, 
        m = d.durations, h = [], Array.prototype.push.apply(h, function(r) {
            var a = r.classIdsFilter, e = r.durations, t = r.isShowFinished, n = [], i = [], o = "", s = _ramda.identity;
            if (t || i.push((0, _ramda.filter)((0, _ramda.propEq)("isFinished", !1))), b({
                classIdsFilter: a,
                durations: e
            })) {
                if (o = "没有该类课程，左右滑动看看哟", 0 < e.length) {
                    var u = (0, _ramda.curry)(function(r, a) {
                        var e = _slicedToArray(a, 2), t = e[0], n = e[1];
                        return t <= r && r <= n;
                    });
                    i.push((0, _ramda.filter)(function(r) {
                        var a = r.startTime;
                        return (0, _ramda.any)(u(a))(e);
                    }));
                }
                0 < a.length && i.push((0, _ramda.filter)((0, _ramda.propSatisfies)(hasFlip(function(r) {
                    return (0, _ramda.zipObj)(r, r);
                }(a)), "classId")));
            }
            return 0 < i.length && (s = (0, _ramda.into)([], _ramda.compose.apply(void 0, i))), 
            n.push((0, _ramda.map)((0, _ramda.evolve)({
                emptyReason: function(r) {
                    return o || r || "已结束";
                },
                schedules: s
            }))), n;
        }({
            classIdsFilter: l,
            durations: m,
            isShowFinished: c
        })), h), v = function(r, a) {
            var e = r.scheduleCount, t = a.classIdsFilter, n = a.durations;
            b({
                classIdsFilter: t,
                durations: n
            }) && (e = 1 / 0);
            var i = 0;
            return function(r, a) {
                return i += a.schedules.length || 1, r.push(a), e <= i ? (0, _ramda.reduced)(r) : r;
            };
        }(t, e), F = (0, _ramda.transduce)(_ramda.compose.apply(void 0, _toConsumableArray(_).concat([ y ], _toConsumableArray(f))), v, [])(p), g = (0, 
        _ramda.sort)((0, _ramda.descend)((0, _ramda.pipe)((0, _ramda.prop)("schedules"), _ramda.length, (0, 
        _ramda.clamp)(0, 1))));
        return (0, _ramda.when)((0, _ramda.always)(b((0, _ramda.dissoc)("isShowFinished", e))), g)(F);
        function b(r) {
            var a = r.classIdsFilter, e = r.durations, t = r.isShowFinished;
            return 0 < a.length || 0 < e.length || t;
        }
    });
}