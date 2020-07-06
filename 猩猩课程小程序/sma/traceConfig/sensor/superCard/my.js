var _responseRegionConfig;

function _defineProperty(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, FACE_BTN_MY = "faceBtnMy", CHARGE_BOTTOM_BTN_MY = "chargeBottomBtnMy", SEE_VIP_RIGHTS_MY = "seeVipRightsMy", SUPER_RANK_ROW_MY = "superRankRowMy", BADGE_ROW_MY = "badgeRowMy", TICKET_ROW_MY = "ticketRowMy", INVITE_ROW_MY = "inviteRowMy", MY_GIVEN_ROW_MY = "myGivenRowMy", NOTICE_MANAGE_ROW_MY = "noticeManageRowMy", COMPANY_SERVICE_ROW_MY = "companyServiceRowMy";

responseRegionIdMap.My = {}, responseRegionConfigMap.My = (_defineProperty(_responseRegionConfig = {}, FACE_BTN_MY, {
    id: elementsIdMap.My.FACE_BTN_MY,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "1",
            buttonName: "头像"
        }
    }
}), _defineProperty(_responseRegionConfig, CHARGE_BOTTOM_BTN_MY, {
    id: elementsIdMap.My.CHARGE_BOTTOM_BTN,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "2",
            buttonName: "充值/开通"
        }
    }
}), _defineProperty(_responseRegionConfig, SEE_VIP_RIGHTS_MY, {
    id: elementsIdMap.My.SEE_VIP_RIGHTS,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "3",
            buttonName: "查看会员权益"
        }
    }
}), _defineProperty(_responseRegionConfig, SUPER_RANK_ROW_MY, {
    id: elementsIdMap.My.SUPER_RANK_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "4",
            buttonName: "superRank排名"
        }
    }
}), _defineProperty(_responseRegionConfig, BADGE_ROW_MY, {
    id: elementsIdMap.My.BADGE_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "5",
            buttonName: "猩章"
        }
    }
}), _defineProperty(_responseRegionConfig, TICKET_ROW_MY, {
    id: elementsIdMap.My.TICKET_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "6",
            buttonName: "我的代金券"
        }
    }
}), _defineProperty(_responseRegionConfig, INVITE_ROW_MY, {
    id: elementsIdMap.My.INVITE_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "7",
            buttonName: "邀请有礼"
        }
    }
}), _defineProperty(_responseRegionConfig, MY_GIVEN_ROW_MY, {
    id: elementsIdMap.My.MY_GIVEN_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "8",
            buttonName: "我的赠送"
        }
    }
}), _defineProperty(_responseRegionConfig, NOTICE_MANAGE_ROW_MY, {
    id: elementsIdMap.My.NOTICE_MANAGE_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "9",
            buttonName: "通知管理"
        }
    }
}), _defineProperty(_responseRegionConfig, COMPANY_SERVICE_ROW_MY, {
    id: elementsIdMap.My.COMPANY_SERVICE_ROW,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "10",
            buttonName: "企业服务"
        }
    }
}), _responseRegionConfig), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};