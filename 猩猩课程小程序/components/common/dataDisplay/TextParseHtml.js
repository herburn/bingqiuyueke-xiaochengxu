var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

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
        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
    }
}

_core.default.component({
    name: "TextParseHtml",
    options: {
        multipleSlots: !0,
        styleIsolation: "isolated"
    },
    props: {
        textData: {
            type: String,
            value: ""
        },
        fontColor: {
            type: String,
            default: "#767678"
        }
    },
    data: {
        filterData: []
    },
    watch: {
        textData: function(t) {
            this.filterData = this._filter(t);
        }
    },
    methods: {
        linkWebView: function(t) {
            this.$router.navigateTo({
                page: "WebView",
                url: t.url
            }, !0);
        }
    },
    _filter: function(t) {
        this._isHasUTag(t) && (t = t.replace(/(<\/?u.*?>)/g, ""));
        for (var e = t.split("<br/>"), r = [], n = 0; n < e.length; n++) r.push(this._filterTagEl(e[n]));
        return r;
    },
    _filterTagEl: function(t) {
        var e = [];
        if (this._isHasATag(t)) {
            var r = (e = this._judgeTag(t))[e.length - 1];
            return this._isHasATag(r) ? (e.pop(), e = [].concat(_toConsumableArray(e), _toConsumableArray(this._filterTagEl(r)))) : (e.pop(), 
            e.push({
                isUrl: !1,
                content: r
            })), e;
        }
        return [ {
            isUrl: !1,
            content: t
        } ];
    },
    _judgeTag: function(t) {
        var e = t.indexOf("<a"), r = t.indexOf("a>") + 2;
        return 0 === e && r < t.length ? [ this._filterATag(t.slice(0, r)), t.slice(r, t.length - 1) ] : [ {
            isUrl: !1,
            content: t.slice(0, e)
        }, this._filterATag(t.slice(e, r)), t.slice(r, t.length) ];
    },
    _filterATag: function(t) {
        var e = new RegExp('href="(.+)"'), r = t.replace(/(<\/?a.*?>)/g, ""), n = e.exec(t)[1];
        return {
            isUrl: !0,
            content: r.replace(/(《|》)/g, ""),
            url: n
        };
    },
    _isHasATag: function(t) {
        return -1 < t.indexOf("<a") && -1 < t.indexOf("</a>");
    },
    _isHasUTag: function(t) {
        return -1 < t.indexOf("<u");
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1079-0": {
            tap: function(t) {
                this.linkWebView(t);
            }
        }
    },
    models: {},
    refs: void 0
});