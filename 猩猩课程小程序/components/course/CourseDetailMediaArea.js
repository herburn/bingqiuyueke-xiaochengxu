var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "CourseDetailMediaArea",
    props: {
        video: {
            type: String,
            default: ""
        },
        showVideoPoster: {
            type: Boolean,
            default: !0
        },
        posters: {
            type: Array,
            default: []
        },
        showBannerTotal: {
            type: Boolean,
            default: !0
        },
        height: {
            type: Number,
            default: 540
        }
    },
    data: {
        showVideo: !1
    },
    computed: {
        realPoster: function() {
            return this.posters[0] || "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/course-detail-poster-default.png";
        }
    },
    methods: {
        previewBanner: function() {
            wx.previewImage({
                urls: this.posters
            });
        }
    }
}, {
    info: {
        components: {
            "sm-video": {
                path: "./../common/dataDisplay/Video"
            }
        },
        on: {}
    },
    handlers: {
        "1047-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.previewBanner(e);
            }
        }
    },
    models: {},
    refs: void 0
});