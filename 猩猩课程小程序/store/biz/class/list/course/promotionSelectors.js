Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassBannerPromotionCreator = getClassBannerPromotionCreator, exports.getClassBoxPromotionCreator = getClassBoxPromotionCreator, 
exports.getClassPromotionCreator = getClassPromotionCreator;

var _ramda = require("./../../../../../vendor.js")(320), _extraR = require("./../../../../../utils/extraR.js"), _constants = require("./../../../../../constants/index.js"), pickPromotion = (0, 
_ramda.pick)([ "referenceId", "relateId", "positionId", "promotionId", "promotionCode", "img", "iconImg", "title", "subtitle", "highlight", "buttonText", "navigateType", "navigateAppId", "navigateURL" ]), setNonePromotion = (0, 
_ramda.map)((0, _ramda.when)((0, _ramda.propEq)("referenceType", _constants.referenceNoneType), (0, 
_ramda.assoc)("referenceId", _constants.referenceNoneType))), indexPromotionBy = (0, 
_ramda.into)({}, (0, _ramda.compose)((0, _ramda.map)(pickPromotion), (0, _ramda.indexBy)((0, 
_ramda.prop)("referenceId")))), getPromotionMap = (0, _ramda.pipe)(setNonePromotion, indexPromotionBy, (0, 
_extraR.renameKeys)({
    TOP: "0"
}));

function getClassBannerPromotionCreator(e) {
    var t = (0, e.getSelector)("getPromotionsByPositionId");
    return function(e, o) {
        var r = t(e, _constants.CLASS_BANNER);
        return (0, _ramda.evolve)({
            promotions: (0, _ramda.filter)((0, _ramda.either)((0, _ramda.propEq)("referenceId", o), (0, 
            _ramda.propEq)("referenceType", _constants.referenceNoneType)))
        })(r);
    };
}

function getClassBoxPromotionCreator(e) {
    var o = e.getSelector, r = e.createSelector, t = o("getPromotionsByPositionId"), a = (0, 
    _ramda.evolve)({
        isPositionActive: _ramda.identity,
        isRelateIdExist: _ramda.identity,
        promotions: getPromotionMap
    });
    return r(function(e) {
        return t(e, _constants.CLASS_BEFORE_OPEN);
    }, (0, _ramda.pipe)(a, (0, _extraR.renameKeys)({
        promotions: "promotionMap"
    })));
}

function getClassPromotionCreator(e) {
    var o = e.getSelector, r = e.createSelector, t = o("getPromotionsByPositionId"), a = (0, 
    _ramda.evolve)({
        isPositionActive: _ramda.identity,
        isRelateIdExist: _ramda.identity,
        promotions: getPromotionMap
    });
    return r(function(e) {
        return t(e, _constants.CLASS_ADS);
    }, (0, _ramda.pipe)(a, (0, _extraR.renameKeys)({
        promotions: "promotionMap"
    })));
}