Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPromotionsByPositionIdCreator = getPromotionsByPositionIdCreator;

var R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _constants = require("./../../../constants/index.js"), _moment = _interopRequireDefault(require("./../../../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, o) : {};
        r.get || r.set ? Object.defineProperty(t, o, r) : t[o] = e[o];
    }
    return t.default = e, t;
}

function ownKeys(t, e) {
    var o = Object.keys(t);
    return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t)), 
    e && (o = o.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(o, !0).forEach(function(e) {
            _defineProperty(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ownKeys(o).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return t;
}

function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var OUTER = _constants.positionNavigateType.OUTER, INNER = _constants.positionNavigateType.INNER, split = R.split, flip = R.flip, memoizeWith = R.memoizeWith, toString = R.toString, omit = R.omit, has = R.has, merge = R.merge, all = R.all, pipe = R.pipe, equals = R.equals, prop = R.prop, map = R.map, filter = R.filter, propEq = R.propEq, join = R.join, curryN = R.curryN, converge = R.converge, into = R.into, __ = R.__, compose = R.compose, memoize = flip(memoizeWith), isAllDefaultRule = all(has(__, _constants.positionRules)), isStatusReady = curryN(2, pipe(prop, equals(2))), createPromotions = function(r, n, o) {
    return function(e) {
        if (0 === e.length) return [];
        var t = compose(map(prop(__, o)), filter(propEq("positionId", r)), filter(isStatusReady("relateStatus")), filter(function(e) {
            return converge(function(e, t) {
                return (0, _moment.default)(e) <= (0, _moment.default)() && (0, _moment.default)() < (0, 
                _moment.default)(t);
            }, [ prop("startTime"), prop("endTime") ])(e);
        }), filter(function(e) {
            return pipe(prop("promotionId"), prop(__, n), isStatusReady("promotionStatus"))(e);
        }), map(function(e) {
            var t = n[e.promotionId], o = JSON.parse(t.properties || "{}");
            return _objectSpread({
                promotionId: e.seqId,
                positionId: r
            }, t, {}, omit([ "properties" ], e), {}, o, {}, function(e) {
                var t = e.navigateType, o = e.navigateURL, r = e.navigateAppId;
                return "MINIPROGRAM" !== t ? "URL" !== t ? {} : {
                    navigateType: INNER,
                    navigateURL: "pages/SplashScreen?url=WebView&h5Url=".concat(encodeURIComponent(o))
                } : r !== _constants.APPID ? {
                    navigateType: OUTER
                } : {
                    navigateType: INNER
                };
            }(o));
        }));
        return into([], t, e);
    };
}, resultFunc = function(e) {
    var t = e.positionId, o = e.sortedRelateIdList, r = e.relateIdList, n = e.positionInfo, i = void 0 === n ? {} : n, p = e.positionRuleInfo, a = void 0 === p ? {
        rules: ""
    } : p, s = e.promotionMap, u = e.promotionPositionRelateMap;
    try {
        var l = split(",", a.rules), c = {
            positionId: t,
            positionRules: l,
            positionInfo: i,
            isPositionActive: !0,
            isRelateIdExist: !0,
            promotions: []
        };
        if (!isStatusReady("positionStatus", i)) return merge(c)({
            isPositionActive: !1
        });
        if (!isAllDefaultRule(l) && 0 === o.length) return merge(c, {
            isRelateIdExist: !1
        });
        var f = createPromotions(t, s, u)(0 < o.length ? o : r);
        return merge(c, {
            promotions: f
        });
    } catch (e) {
        console.log("combinerFun err", e);
    }
};

function generateKey() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return pipe(map(toString), join("|"))(t);
}

function getPromotionsByPositionIdCreator(e) {
    var t = e.getSelector, o = e.createSelector, a = e.createSelectorCreator;
    return o(t("getPositionMap"), t("getPositionRulesMap"), t("getPromotionMap"), t("getPromotionPositionRelateMap"), function(r, n, i, p) {
        return a(memoize, generateKey)(function(e, t) {
            return t;
        }, function(e, t) {
            return e.biz.promotion.sortedRelateKeyMap[t] || [];
        }, function(e, t) {
            return e.biz.promotion.availableRelateKeyMap[t] || [];
        }, function(e, t, o) {
            return resultFunc({
                positionId: e,
                sortedRelateIdList: t,
                relateIdList: o,
                positionInfo: prop(e)(r),
                positionRuleInfo: prop(e)(n),
                promotionMap: i,
                promotionPositionRelateMap: p
            });
        });
    });
}