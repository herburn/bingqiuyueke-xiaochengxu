var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "AlertVipRights",
    data: {
        current: 0,
        isShowEquityPop: !1,
        closeBtnTop: 0,
        containerTop: 0,
        images: [ {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity6.png",
            tit: "开启会员权益",
            text1: "训练奖励回馈、超级邀请奖励、生日专享",
            text2: "礼券、猩探课预约权限、专属卡面&猩章，更多",
            text3: "权益等你发现"
        }, {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity7.png",
            tit: "解锁猩章成就",
            text1: "挑战100节BP，解锁「BP Monster」猩章，",
            text2: "赢取专属战袍，冲击名人堂！还有更多挑战..."
        }, {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity8.png",
            tit: "预约享95折",
            text1: "课程、自助健身享受折扣优惠；",
            text2: "余额可用于私教、CAMP类课程（但不享折扣）"
        }, {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity9.png",
            tit: "满员等候特权",
            text1: "满员课程，超猩卡预支付等候，",
            text2: "自动补排空位，若未排上自动退款"
        }, {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity10.png",
            tit: "加入猩球排名",
            text1: "加入超猩全球榜，给你的锻炼更多动力，",
            text2: "每次课程之后，更有专属你的排名海报"
        }, {
            url: "https://img.supermonkey.com.cn/webapp/monkey-reservation2/vip/common/icon-equity11.png",
            tit: "超级邀请奖励",
            text1: "邀请新用户，钻石级会员可直接按最高级别",
            text2: "获得奖励（129元/人），多邀多得哦"
        } ]
    },
    attached: function() {
        this.closeBtnTop = "".concat(this.$app.globalData.navigatorFullHeightPx + 16, "px"), 
        this.containerTop = "".concat(this.$app.globalData.navigatorFullHeightPx + 48, "px");
    },
    methods: {
        changeSwiperIndex: function(t) {
            this.current = t.$wx.detail.current;
        },
        closePop: function() {
            this.isShowEquityPop = !1;
        },
        linkRechargeConfirm: function() {
            this.$router.navigateTo({
                page: "RechargeConfirm"
            });
        }
    },
    extraEvents: {
        openEquityPop: function() {
            this.isShowEquityPop = !0;
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1040-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.closePop(t);
            }
        },
        "1040-1": {
            change: function() {
                var t = arguments[arguments.length - 1];
                this.changeSwiperIndex(t);
            }
        },
        "1040-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.linkRechargeConfirm(t);
            }
        }
    },
    models: {},
    refs: void 0
});