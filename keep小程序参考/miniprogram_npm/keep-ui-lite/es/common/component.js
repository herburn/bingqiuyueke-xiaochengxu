Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.KeepComponent = function(s) {
    s.externalClasses = s.externalClasses || [], s.externalClasses.push("custom-class"), 
    s.behaviors = s.behaviors || [], s.behaviors.push(e.basic), s.field && (s.behaviors.push("wx://form-field"), 
    delete s.field);
    s.options || (s.options = {});
    s.options.multipleSlots = !0, s.options.addGlobalClass = !0, Component(s);
};

var e = require("../mixins/basic");