var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "Video",
    props: {
        vid: {
            type: String,
            default: ""
        },
        width: {
            type: Number,
            default: 750
        },
        height: {
            type: Number,
            default: 540
        },
        poster: {
            type: String,
            default: ""
        },
        autoplay: {
            type: Boolean,
            default: !1
        },
        objectFit: {
            type: String,
            default: "cover"
        }
    },
    data: {},
    computed: {},
    methods: {
        onPlay: function() {},
        onPause: function() {},
        onEnded: function() {}
    }
}, {
    info: {
        components: {
            "txv-video": {
                path: "plugin://tencentvideo/video"
            }
        },
        on: {
            "1192-0": [ "play", "pause", "ended" ]
        }
    },
    handlers: {
        "1192-0": {
            play: function() {
                var e = arguments[arguments.length - 1];
                this.onPlay(e);
            },
            pause: function() {
                var e = arguments[arguments.length - 1];
                this.onPause(e);
            },
            ended: function() {
                var e = arguments[arguments.length - 1];
                this.onEnded(e);
            }
        }
    },
    models: {},
    refs: void 0
});