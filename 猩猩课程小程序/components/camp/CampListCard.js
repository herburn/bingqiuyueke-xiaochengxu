var _core = _interopRequireDefault(require("./../../tmp/index.js")), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

_core.default.component({
    name: "CampListCard",
    props: {
        hasBadge: {
            type: Boolean,
            default: !0
        },
        hasSubText: {
            type: Boolean,
            default: !1
        },
        camp: {
            type: Object,
            default: {
                id: "",
                sk: "",
                name: "",
                imageUrl: "",
                scheduleCount: -1,
                campId: -1,
                city: "",
                campChannelType: 1
            }
        }
    },
    _navigateFlag: !0,
    methods: {
        tap: function(e) {
            var t = this, n = 0 < arguments.length && void 0 !== e ? e : {};
            if (this._navigateFlag) {
                this._navigateFlag = !1;
                var a = n.campId, r = n.sk, o = n.city, i = 2 === n.campChannelType ? {
                    page: "OnlineCampDetail",
                    data: {
                        campId: a,
                        sk: r,
                        city: _constants.allCity
                    }
                } : {
                    page: "CampDetail",
                    data: {
                        campId: a,
                        sk: r,
                        city: o
                    }
                };
                this.$router.navigateTo(_objectSpread({}, i, {
                    complete: function() {
                        t._navigateFlag = !0, t.$emit("onCampCardTap", n);
                    }
                }));
            }
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1107-0": {
            tap: function() {
                var e = this;
                e.tap(e.camp);
            }
        }
    },
    models: {},
    refs: void 0
});