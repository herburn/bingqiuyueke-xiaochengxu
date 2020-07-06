var _core = _interopRequireDefault(require("./../../../tmp/index.js")), R = _interopRequireWildcard(require("./../../../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
    }
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var equals = R.equals;

_core.default.component({
    name: "BannerTop",
    props: {
        isShowMask: {
            type: Boolean,
            default: !1
        },
        borderRadius: {
            type: String,
            default: "0"
        },
        customIndicatorDots: {
            type: Boolean,
            default: !0
        },
        dotBottom: {
            type: String,
            default: "76rpx"
        },
        indicatorDots: {
            type: Boolean,
            default: !1
        },
        indicatorColor: {
            type: String,
            default: "rgba(0, 0, 0, 0.3)"
        },
        indicatorActiveColor: {
            type: String,
            default: "#fcc800"
        },
        autoplay: {
            type: Boolean,
            default: !0
        },
        circular: {
            type: Boolean,
            default: !0
        },
        interval: {
            type: Number,
            default: 5e3
        },
        duration: {
            type: Number,
            default: 500
        },
        height: {
            type: String,
            default: "428rpx"
        },
        bannerList: {
            type: Array,
            default: []
        }
    },
    data: {
        current: 0,
        activeIndex: 0,
        banners: []
    },
    watch: {
        bannerList: function(e, t) {
            equals(e, t) || (this.current = -1, this.current = 0, this.activeIndex = 0, this.banners = e);
        }
    },
    methods: {
        change: function(e) {
            var t = e.$wx && e.$wx.detail, r = t.current;
            t.source;
            this.activeIndex = r;
        },
        tapImgHandler: function() {
            wx.sma.sensorTrack({
                event: "buttonClick",
                data: {
                    buttonId: "10",
                    buttonName: "SGO-banner点击"
                }
            });
        }
    }
}, {
    info: {
        components: {
            "click-behavior": {
                path: "./../enrichment/ClickBehavior"
            },
            "swiper-dots": {
                path: "./../dataDisplay/SwiperDots"
            },
            "observer-promotion-view": {
                path: "./../enrichment/ObserverView"
            }
        },
        on: {}
    },
    handlers: {
        "1028-0": {
            change: function() {
                var e = arguments[arguments.length - 1];
                this.change(e);
            }
        },
        "1028-1": {
            tap: function(e) {
                this.tapImgHandler(e);
            }
        }
    },
    models: {},
    refs: void 0
});