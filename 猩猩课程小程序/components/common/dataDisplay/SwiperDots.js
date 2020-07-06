var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "SwiperDots",
    props: {
        count: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 0
        },
        dotColor: {
            type: String,
            default: "rgba(118, 118, 120, .32)"
        },
        dotActiveColor: {
            type: String,
            default: "#fcc800"
        }
    },
    _customData: "",
    data: {},
    computed: {},
    watch: {},
    hooks: {},
    beforeCreate: function() {},
    created: function() {},
    attached: function() {},
    ready: function() {},
    moved: function() {},
    detached: function() {},
    methods: {},
    extraEvents: {},
    _customFn: function() {}
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});