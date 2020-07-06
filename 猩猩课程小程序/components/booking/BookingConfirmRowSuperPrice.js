var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmRowSuperPrice",
    props: {
        mode: {
            type: String,
            default: "normal"
        },
        price: {
            type: String,
            default: ""
        }
    },
    methods: {
        tapCard: function() {
            this.$router.navigateTo({
                page: "RechargeConfirm",
                data: {
                    privilegeScene: "discount"
                }
            });
        },
        tapInsufficient: function() {
            this.$router.navigateTo({
                page: "RechargeConfirm"
            });
        },
        tapFrozen: function() {
            this.$router.navigateTo({
                page: "BalanceRecords"
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1057-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapCard(e);
            }
        },
        "1057-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapInsufficient(e);
            }
        },
        "1057-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.tapFrozen(e);
            }
        }
    },
    models: {},
    refs: void 0
});