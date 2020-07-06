Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassScheduleByIdCreator = getClassScheduleByIdCreator;

var _moment = _interopRequireDefault(require("./../../../../vendor.js")(315)), _ramda = require("./../../../../vendor.js")(320), _memoize = require("./../../../../utils/memoize.js"), _calendar = require("./../../../../utils/calendar.js"), _price = require("./../../../../utils/price.js"), _constants = require("./../../../../constants/index.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = new Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
}

var propFlip = (0, _ramda.flip)(_ramda.prop);

function getClassScheduleByIdCreator(t) {
    var e = t.getSelector, a = t.createSelectorCreator, r = e("getTrainerMap"), n = e("getClassMap"), s = e("getBoxMap"), o = e("getScheduleMap"), i = e("getClassPriceMap"), l = e("getClassDetailMap");
    return a(_memoize.memoizeReference, function(t, e, a, r, n, s, o) {
        if (!(o in t)) return [ o, [] ];
        var i = t[o], l = e[o], u = a[o], c = u.boxId, d = u.classId, p = u.trainerUserIds, m = r[c], f = n[d], g = (0, 
        _ramda.map)(propFlip(s))(p);
        return [ o, [ i, l, u, m, f ].concat(_toConsumableArray(g)) ];
    })(l, i, o, s, n, r, function(t, e) {
        return e;
    }, function(t, e, a, r, n, s, o) {
        if (!(o in t)) return {};
        var i, l, u, c, d, p, m, f, g, I, _, b, h, v, S, C, x, B, D, y, k, M, A, N, P, T, U, j, q, E, G, O, w, W, L, F = t[o], H = e[o], Y = a[o], z = Y.boxId, K = Y.classId, R = r[z], J = n[K];
        return {
            shareEnable: Y.shareEnable,
            bookingCountStatus: H.bookingCountStatus,
            isWaiting: 2 === H.bookingCountStatus && J.waitAvailable,
            posterInfo: (w = {
                classInfo: J
            }.classInfo, W = w.images, L = w.video, {
                posters: W,
                video: L
            }),
            profile: (_ = (I = {
                classDetail: F,
                classInfo: J,
                box: R,
                schedule: Y,
                price: H,
                trainerMap: s
            }).classDetail, b = I.classInfo, h = I.box, v = I.schedule, S = I.price, C = I.trainerMap, 
            x = S.supermonkeyCardPrice, B = v.trainerUserIds, D = v.startTime, y = v.endTime, 
            k = h.boxId, M = h.address, A = h.addressGuide, N = h.latitude, P = h.longitude, 
            T = h.boxname, U = b.className, j = _.waitingCount, q = (0, _moment.default)(D), 
            E = (0, _moment.default)(y), G = q.format("YYYY年MM月DD日"), O = (0, _calendar.getWeekDayCN)(D, 2), 
            {
                className: U,
                trainers: (0, _ramda.map)(function(t, e) {
                    var a = t.trainerMap, r = t.schedule, n = t.box, s = (0, _ramda.pick)([ "face", "trainerStageName", "introduce", "trainerUserId", "sk" ]), o = r.scheduleId, i = n.boxId, l = (0, 
                    _ramda.pipe)(propFlip(a), s)(e), u = l.face, c = l.trainerStageName, d = l.introduce, p = l.trainerUserId, m = l.sk;
                    return {
                        face: u,
                        name: c,
                        introduce: d,
                        navigatorPage: "TrainerIndex",
                        navigatorData: {
                            trainerUserId: p,
                            sk: m
                        },
                        extraData: {
                            trainerUserId: p,
                            scheduleId: o,
                            boxId: i
                        }
                    };
                }.bind(null, {
                    trainerMap: C,
                    schedule: v,
                    box: h
                }))(B),
                time: "".concat(G, " ").concat(O, " ").concat(q.format("HH:mm"), " ~ ").concat(E.format("HH:mm")),
                location: {
                    boxId: k,
                    name: T,
                    address: M,
                    addressGuide: A,
                    latitude: N,
                    longitude: P
                },
                price: "¥".concat((0, _price.cent2Yuan)(x)),
                superCardPrice: x,
                waitingCount: j
            }),
            courseIntroduce: (i = {
                classInfo: J
            }.classInfo, l = i.images, u = i.thumbnailImages, c = i.className, d = i.classIntroduce, 
            p = i.tag, m = i.trainingEffect, f = i.suitablePeople, g = i.faqList, {
                title: c,
                introduce: d,
                tags: p,
                gallery: l,
                thumbnailGallery: u,
                trainingEffect: m.split("<br/>"),
                suitablePeople: f.split("<br/>"),
                faqs: g
            }),
            attentionMatter: {
                notes: {
                    classDetail: F
                }.classDetail.notes
            },
            btnInfo: function(t) {
                var e, a = t.classDetail, r = t.schedule, n = t.classInfo, s = t.price, o = a.waitingCount, i = r.scheduleId, l = r.sk, u = r.startTime, c = r.shareEnable, d = n.waitAvailable, p = s.bookingCountStatus;
                0 === p || 1 === p ? e = _constants.BtnStatus.BOOK : 2 !== p || d ? 3 === p ? e = _constants.BtnStatus.END : 4 === p ? e = _constants.BtnStatus.BEGUN : 2 === p && d && (e = _constants.BtnStatus.WAITING) : e = _constants.BtnStatus.FULL;
                var m = [];
                e === _constants.BtnStatus.FULL || (e === _constants.BtnStatus.WAITING && c ? m.push({
                    text: "赠课给好友",
                    tips: "等候中的课程不支持赠课"
                }) : e === _constants.BtnStatus.BOOK && c && ((0, _moment.default)(u).diff((0, _moment.default)(), "hours") < 1 ? m.push({
                    text: "赠课给好友",
                    tips: "开课前1小时，不支持赠课"
                }) : m.push({
                    text: "赠课给好友",
                    navigatorPage: "GiveClassBookingConfirm",
                    navigatorData: {
                        scheduleId: i,
                        sk: l
                    }
                })));
                if (e === _constants.BtnStatus.BOOK) m.push({
                    text: "立即约课",
                    navigatorPage: "ClassBookingConfirm",
                    navigatorData: {
                        scheduleId: i,
                        sk: l
                    }
                }); else if (e === _constants.BtnStatus.FULL) m.push({
                    text: "满员",
                    navigatorPage: "",
                    navigatorData: {}
                }); else if (e === _constants.BtnStatus.END) m.push({
                    text: "结束",
                    navigatorPage: "",
                    navigatorData: {}
                }); else if (e === _constants.BtnStatus.BEGUN) m.push({
                    text: "课程已开始，不能预约了哦",
                    navigatorPage: "",
                    navigatorData: {}
                }); else if (e === _constants.BtnStatus.WAITING) {
                    var f = 0 < o ? "等候 (".concat(o, "人等候中)") : "等候";
                    m.push({
                        text: f,
                        navigatorPage: "ClassWaitBookingConfirm",
                        navigatorData: {
                            scheduleId: i,
                            sk: l
                        }
                    });
                }
                return {
                    items: m
                };
            }({
                classDetail: F,
                schedule: Y,
                classInfo: J,
                price: H
            })
        };
    });
}