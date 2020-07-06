var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _debounceThrottle = require("./../../../utils/debounce-throttle.js"), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var uniqueIdMap = {};

_core.default.component({
    name: "ObserverView",
    props: {
        uniqueId: {
            type: null,
            value: null
        },
        info: {
            type: Object,
            value: null
        }
    },
    _observeHandler: null,
    _visible: !1,
    _intersectionObserver: null,
    _trackHandler: null,
    _trackDebounce: null,
    watch: {
        info: function() {
            this._observeHandler();
        }
    },
    show: function() {
        this._observeHandler({
            isPageShow: !0
        });
    },
    hide: function() {
        this._observeHandler({
            isPageShow: !1
        });
    },
    created: function() {
        this._trackDebounce = (0, _debounceThrottle.debounce)(function() {
            this._trackHandler && this._trackHandler();
        }, _constants.VIEW_DURATION), this._observeHandler = this._observeCreator();
    },
    ready: function() {
        this._observeHandler({
            isReady: !0
        });
    },
    detached: function() {
        this._clear();
    },
    _observeCreator: function() {
        var i = this, r = !0, o = !1;
        return function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.isPageShow, n = e.isReady;
            void 0 !== t && (r = t), n && (o = n), o && (r && null !== i.info ? i._observePromotion() : i._clear());
        };
    },
    _observePromotion: function() {
        var n = this;
        this._intersectionObserver ? this._trackView() : (this._intersectionObserver = this.$wx.createIntersectionObserver({
            thresholds: [ 1 ]
        }), this._intersectionObserver.relativeToViewport({
            top: 0,
            bottom: 0
        }).observe(".observer-promotion-view", function(e) {
            var t = e.intersectionRatio;
            n._visible = 1 <= t, n._trackView();
        }));
    },
    _clear: function() {
        this._visible = !1, this._intersectionObserver && this._intersectionObserver.disconnect(), 
        this._intersectionObserver = null, this._trackHandler = null;
    },
    _trackView: function() {
        var e = this;
        null === this.uniqueId || this.uniqueId in uniqueIdMap || (this._visible ? (this._trackHandler = function() {
            uniqueIdMap[e.uniqueId] = !0, e.$emit("onDebounceView", {
                info: e.info
            }, {
                bubbles: !0
            });
        }, this._trackDebounce(), this.$emit("onView")) : this._trackHandler = null);
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});