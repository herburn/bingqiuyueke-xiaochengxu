var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingOnlineTip",
    props: {
        codeUrl: {
            type: String,
            default: ""
        },
        showHeight: {
            type: String,
            default: "36rpx"
        },
        arrowStyle: {
            type: String,
            default: "top: 8rpx;left: 248rpx;color: #c9c9cd;"
        }
    },
    data: {
        trainingEffect: [ "如何获取上课方式？", "1.截屏保存或点开二维码长按保存图片", "2.在微信中扫描识别二维码后按指引操作即可", "3.如遇识别失败、二维码过期等问题可拨打超级猩猩客服热线(400-900-9166)或在超级猩猩微信公众号回复“人工”咨询人工客服" ]
    },
    computed: {},
    methods: {
        showImg: function() {
            wx.previewImage({
                urls: [ this.codeUrl ]
            });
        }
    }
}, {
    info: {
        components: {
            "multi-line-text": {
                path: "./../common/dataDisplay/TextMultiLineWithUnfold"
            }
        },
        on: {}
    },
    handlers: {
        "1108-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.showImg(e);
            }
        }
    },
    models: {},
    refs: void 0
});