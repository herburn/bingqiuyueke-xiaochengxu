Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createDomainModel = createDomainModel;

var _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _moment = _interopRequireDefault(require("./../../../vendor.js")(315)), _ramda = _interopRequireDefault(require("./../../../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, r) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, r) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, r) {
    var t = [], a = !0, n = !1, i = void 0;
    try {
        for (var o, u = e[Symbol.iterator](); !(a = (o = u.next()).done) && (t.push(o.value), 
        !r || t.length !== r); a = !0) ;
    } catch (e) {
        n = !0, i = e;
    } finally {
        try {
            a || null == u.return || u.return();
        } finally {
            if (n) throw i;
        }
    }
    return t;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var toPairs = _ramda.default.toPairs, equals = _ramda.default.equals, toUpper = _ramda.default.toUpper, slice = _ramda.default.slice, merge = _seamlessImmutable.default.merge;

function createDomainModel(t, e) {
    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : (0, _moment.default)().add(7, "days").toDate();
    return {
        namespace: [ "domains", t ],
        state: (0, _seamlessImmutable.default)({
            cacheMapExpiresAt: r,
            key: "",
            entities: {}
        }),
        reducers: _defineProperty({}, e, function(e, r) {
            var t = r.payload, a = t.entities, n = t.key, i = void 0 === n ? "" : n;
            if (i) {
                if (i !== e.key) return merge(e, {
                    entities: merge(e.entities, a),
                    key: i
                });
            } else {
                var o = diff(a, e.entities);
                if (o) return merge(e, {
                    entities: merge(e.entities, o)
                });
            }
            return e;
        }),
        selectors: function() {
            var e;
            return _defineProperty(e = {}, getSelectorMapName(t), function(e) {
                return e.domains[t].entities;
            }), _defineProperty(e, getSelectorIdName(t), function(e, r) {
                return e.domains[t].entities[r];
            }), e;
        }
    };
}

function getSelectorMapName(e) {
    return "get".concat(toUpper(e[0])).concat(slice(1, 1 / 0, e));
}

function getSelectorIdName(e) {
    return "get".concat(toUpper(e[0])).concat(slice(1, -3, e), "ById");
}

function diff(e, r) {
    var t = {}, a = !0, n = !1, i = void 0;
    try {
        for (var o, u = toPairs(e)[Symbol.iterator](); !(a = (o = u.next()).done); a = !0) {
            var l = _slicedToArray(o.value, 2), s = l[0], c = l[1];
            r[s] && equals(c, r[s]) || (t[s] = c);
        }
    } catch (e) {
        n = !0, i = e;
    } finally {
        try {
            a || null == u.return || u.return();
        } finally {
            if (n) throw i;
        }
    }
    return t;
}