Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    data: {
        isShowNewerGuide: !1
    },
    onLoad: function() {
        try {
            this.isShowNewerGuide = 0 === this.$store.selectors.isNotNewerGuideUser(this.$store.getState());
        } catch (e) {
            console.log("CourseListTooltipNewerGuide", e);
        }
    },
    onPageScroll: function() {
        this.isShowNewerGuide && (this.isShowNewerGuide = !1, this.$store.dispatch(this.$store.actions.setIsNotNewerGuideUser(1)));
    }
};

exports.default = _default;