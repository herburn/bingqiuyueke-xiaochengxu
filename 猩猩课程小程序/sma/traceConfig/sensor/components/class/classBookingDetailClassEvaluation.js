function _defineProperty(e, n, a) {
    return n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = a, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, CLASS_EVALUATION_SUBMIT_BTN = "classEvaluationSubmitBtn";

responseRegionIdMap.ClassBookingDetailClassEvaluation = {
    CLASS_EVALUATION_SUBMIT_BTN: CLASS_EVALUATION_SUBMIT_BTN
}, responseRegionConfigMap.ClassBookingDetailClassEvaluation = _defineProperty({}, CLASS_EVALUATION_SUBMIT_BTN, {
    id: elementsIdMap.ClassBookingDetailClassEvaluation.SUBMIT_BTN,
    bindingMap: {
        templateType: "{{ templateType }}",
        orderId: "{{ nOrderId }}"
    },
    tap: {
        event: "buttonClick",
        schema: function(e) {
            var n = e.templateType;
            return {
                buttonId: "a" === n ? "1" : "3",
                buttonName: "a" === n ? "课后评价-a方案-提交" : "课后评价-b方案-提交"
            };
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};