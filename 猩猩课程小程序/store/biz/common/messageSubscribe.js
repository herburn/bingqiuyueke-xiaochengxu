Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _actionTypes = require("./../../types/index.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        a.get || a.set ? Object.defineProperty(r, t, a) : r[t] = e[t];
    }
    return r.default = e, r;
}

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
    var t = [], a = !0, n = !1, s = void 0;
    try {
        for (var i, o = e[Symbol.iterator](); !(a = (i = o.next()).done) && (t.push(i.value), 
        !r || t.length !== r); a = !0) ;
    } catch (e) {
        n = !0, s = e;
    } finally {
        try {
            a || null == o.return || o.return();
        } finally {
            if (n) throw s;
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

var merge = _seamlessImmutable.default.merge, reduce = R.reduce, values = R.values, pipe = R.pipe, map = R.map, sortBy = R.sortBy, assoc = R.assoc, toPairs = R.toPairs, prop = R.prop, join = R.join, pluck = R.pluck, props = R.props, mergeDeepRight = R.mergeDeepRight, flip = R.flip, any = R.any, has = R.has, indexBy = R.indexBy, objOf = R.objOf, __ = R.__, apply = R.apply, filter = R.filter, propEq = R.propEq, unnest = R.unnest, propFlip = flip(prop), STATUS_MAP = {
    accept: 11,
    reject: 22,
    ban: 23
}, _default = {
    namespace: [ "biz", "messageSubscribe" ],
    state: (0, _seamlessImmutable.default)({
        templateIds: [],
        orderMsgs: []
    }),
    reducers: (_defineProperty(_reducers = {}, _actionTypes.MESSAGE_SUBSCRIBE_LIST_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            templateIds: t
        });
    }), _defineProperty(_reducers, _actionTypes.ORDER_MESSAGES_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            orderMsgs: t
        });
    }), _defineProperty(_reducers, _actionTypes.MESSAGE_MAP_COUNT_PUT, function(e, r) {
        function t(e) {
            var r = e.templateId;
            return s[r];
        }
        var a = r.payload, n = pipe(map(prop("subscribeMsgs")), unnest, indexBy(prop("templateId"))), s = pipe(n, map(function(e) {
            return assoc("count", e.count + (a[e.templateId] || 0), e);
        }))(e.orderMsgs);
        return merge(e, {
            orderMsgs: map(function(e) {
                return assoc("subscribeMsgs", map(t)(e.subscribeMsgs), e);
            })(e.orderMsgs)
        });
    }), _reducers),
    actions: {
        getMessageSubscribeList: [ _actionTypes.MESSAGE_MANAGE_LIST_GET, void 0, function() {
            return {
                isFetch: !0
            };
        } ],
        subscribeMessage: [ _actionTypes.SUBSCRIBE_MESSAGE_POST, function(e) {
            return e;
        }, function() {
            return {
                isFetch: !0,
                isPromise: {
                    success: !0
                }
            };
        } ],
        getOrderMsgList: [ _actionTypes.ORDER_MESSAGE_LIST_GET, function(e) {
            return {
                orderId: e.orderId,
                source: e.source
            };
        }, function() {
            return {
                isFetch: !0
            };
        } ],
        updateMessageMapCount: [ _actionTypes.MESSAGE_MAP_COUNT_PUT, function(e) {
            return e;
        }, function() {
            return {
                isFetch: !1
            };
        } ]
    },
    selectors: function(e) {
        var t = e.getSelector;
        return {
            getMessageSubscribeList: function(e) {
                var r = t("getUserSubscribeMap")(e);
                return e.biz.messageSubscribe.templateIds.map(function(e) {
                    return r[e] || {};
                });
            },
            getSubscribeMsgSceneMap: (0, e.createSelector)(t("getUserSubscribeMap"), function(e) {
                var r = reduce(function(e, r) {
                    var t = toPairs(r.sceneWeightMap || {}), a = assoc("weight"), n = !0, s = !1, i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var p = _slicedToArray(o.value, 2), c = p[0], _ = p[1];
                            c in e ? e[c].push(a(_, r)) : e[c] = [ a(_, r) ];
                        }
                    } catch (e) {
                        s = !0, i = e;
                    } finally {
                        try {
                            n || null == u.return || u.return();
                        } finally {
                            if (s) throw i;
                        }
                    }
                    return e;
                }, {});
                return pipe(values, r, map(sortBy(prop("weight"))))(e);
            }),
            getSubscribeMsgTemplatesByScene: function(e, r) {
                return t("getSubscribeMsgSceneMap")(e)[r] || [];
            },
            getOrderMsgs: function(e) {
                var o = t("getUserSubscribeMap")(e), r = e.biz.messageSubscribe.orderMsgs;
                return map(function(e) {
                    var r = e.name, t = e.subscribeMsgs, a = pipe(map(prop("maxCount")), apply(Math.max)), n = pipe(map(prop("count")), apply(Math.min)), s = pipe(pluck("templateId"), props(__, o), pluck("templateName"), join("、")), i = n(t) === a(t) ? 2 : 0 < n(t) ? 1 : 0;
                    return {
                        status: i,
                        title: r,
                        maxCount: a(t),
                        curCount: n(t),
                        btnText: {
                            0: "接收",
                            1: "续收",
                            2: "已接收"
                        }[i],
                        desc: "包含以下通知：".concat(s(t)),
                        tmpIds: map(prop("templateId"))(t)
                    };
                })(r);
            }
        };
    },
    sagas: (_defineProperty(_sagas = {}, _actionTypes.INIT_INFO_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.payload.userSubscribeMap, n = t.put, e.next = 4, n({
                    type: _actionTypes.USER_SUBSCRIBE_MAP_PUT,
                    payload: {
                        entities: a
                    }
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.MESSAGE_MANAGE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, n, s, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.payload, n = a.userSubscribeMap, s = a.templateIds, i = t.put, e.next = 4, 
                i({
                    type: _actionTypes.USER_SUBSCRIBE_MAP_PUT,
                    payload: {
                        entities: n
                    }
                });

              case 4:
                return e.next = 6, i({
                    type: _actionTypes.MESSAGE_SUBSCRIBE_LIST_PUT,
                    payload: s
                });

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.SUBSCRIBE_MESSAGE_POST_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t, a) {
        var n, s, i, o, u, p, c, _, l;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.requestPayload, s = void 0 === n ? [] : n, i = r.__resolve, o = t.put, 
                u = t.select, p = a.getSelector, any(has("orderId"))(s) && (s = filter(propEq("result", "accept"))(s)), 
                e.next = 6, u(p("getUserSubscribeMap"));

              case 6:
                return c = e.sent, _ = pipe(prop("result"), propFlip(STATUS_MAP)), l = indexBy(prop("templateId")), 
                e.next = 11, o({
                    type: _actionTypes.USER_SUBSCRIBE_MAP_PUT,
                    payload: {
                        entities: mergeDeepRight(c, pipe(l, map(pipe(_, objOf("userSubscribeStatus"))))(s))
                    }
                });

              case 11:
                i(!0);

              case 12:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.ORDER_MESSAGE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.payload.aggregateMsgs, n = t.put, e.next = 4, n({
                    type: _actionTypes.ORDER_MESSAGES_PUT,
                    payload: a
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas)
};

exports.default = _default;