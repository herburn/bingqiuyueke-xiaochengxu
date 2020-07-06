var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "ClassListClassPromotion",
    props: {
        info: {
            type: Object,
            default: {
                relateId: "",
                referenceId: "",
                img: "https://img.supermonkey.com.cn/trainer/default.jpg",
                title: "私教主题店正式上线式上线上",
                subtitle: "零推销、可退费，超级猩猩私店全国上线上",
                highlight: "快去查看吧快去查看吧快去查看查看查",
                buttonText: "查看"
            }
        }
    },
    methods: {
        tap: function() {
            this.$emit("tapClassPromotion", this.info);
        }
    }
}, {
    info: {
        components: {
            face: {
                path: "./../common/dataDisplay/Face"
            }
        },
        on: {}
    },
    handlers: {
        "1225-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tap(e);
            }
        }
    },
    models: {},
    refs: void 0
});