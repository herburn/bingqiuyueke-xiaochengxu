var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassListBannerNovice",
    methods: {
        tap: function() {
            this.$router.navigateTo({
                page: "NoviceClassList"
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1215-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});