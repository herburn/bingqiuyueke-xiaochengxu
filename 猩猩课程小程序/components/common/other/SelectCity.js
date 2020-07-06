var _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _ramda = require("./../../../vendor.js")(320);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function ownKeys(e, t) {
    var i = Object.keys(e);
    return Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(e)), 
    t && (i = i.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), i;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(i, !0).forEach(function(t) {
            _defineProperty(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

_core.default.component({
    name: "SelectCity",
    _title: "",
    data: {
        isActivated: !1,
        menuButtonHeightPxStr: "32px",
        closeSizePxStr: "20px"
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        currentCity: function(t) {
            return "onlineClass" === this.$store.selectors.getAppClassType(t) ? "线上" : (0, _ramda.init)(this.$store.selectors.getCurrentCity(t));
        }
    })),
    attached: function() {
        this._initHeightStyle();
    },
    methods: {
        tap: function() {
            this.isActivated ? this._closeSelectCity() : function() {
                this.isActivated = !0, this._title = this.$root.title, this.$root.title = "选择城市";
            }.call(this);
        },
        tapCity: function(t) {
            this.$store.dispatch(this.$store.actions.updateCurrentCity(t)), this.$emit("changeCity", t), 
            this._closeSelectCity();
        },
        tapOnlineClass: function() {
            this.$store.dispatch(this.$store.actions.updateAppClassType("onlineClass")), this._closeSelectCity();
        }
    },
    _initHeightStyle: function() {
        var t = this.$app.globalData.menuButtonHeightPx;
        this.menuButtonHeightPxStr = "".concat(t, "px"), this.closeSizePxStr = "".concat(Math.round(.625 * t), "px");
    },
    _closeSelectCity: function() {
        this.isActivated = !1, this.$root.title = this._title;
    }
}, {
    info: {
        components: {
            "modal-city-select": {
                path: "./ModalCitySelect"
            }
        },
        on: {
            "1034-2": [ "tapCity", "tapOnlineClass" ]
        }
    },
    handlers: {
        "1034-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.tap(t);
            }
        },
        "1034-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.tap(t);
            }
        },
        "1034-2": {
            tapCity: function() {
                var t = arguments[arguments.length - 1];
                this.tapCity(t);
            },
            tapOnlineClass: function() {
                var t = arguments[arguments.length - 1];
                this.tapOnlineClass(t);
            }
        }
    },
    models: {},
    refs: void 0
});