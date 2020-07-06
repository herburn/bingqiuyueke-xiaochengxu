var _core = _interopRequireDefault(require("./../../tmp/index.js")), _router = require("./../../router/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "PersonalListEntity",
    props: {
        schedule: {
            type: Object,
            default: {}
        }
    },
    data: {
        navigatorPage: "",
        navigatorData: {},
        willFull: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/status-will-full.png"
    },
    watch: {
        schedule: function(e, t) {
            e !== t && (this.navigatorData = {
                trainerUserId: e.trainerUserId,
                sk: e.sk
            }, this.navigatorPage = "TrainerIndex");
        }
    },
    methods: {
        infoTap: function() {
            var e = this.schedule, t = e.scheduleId, a = e.scheduleSk;
            _router.router.navigateTo({
                page: "PersonalDetail",
                data: {
                    scheduleId: t,
                    sk: a
                }
            });
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
        "1180-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.infoTap(e);
            }
        },
        "1180-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.infoTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});