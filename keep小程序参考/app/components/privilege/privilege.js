Component({
    properties: {
        privilegeInfo: {
            type: Object,
            value: null
        }
    },
    data: {
        movedTips: !1
    },
    attached: function() {
        var e = this;
        this.data.privilegeInfo && !this.data.privilegeInfo.schedulePreviewPrivilege || (clearTimeout(this.Movedtimer), 
        this.Movedtimer = setTimeout(function() {
            e.setData({
                movedTips: !0
            });
        }, 1e4), clearTimeout(this.timer), this.timer = setTimeout(function() {
            e.setData({
                privilegeInfo: null
            });
        }, 11e3));
    },
    moved: function() {
        clearTimeout(this.Movedtimer), clearTimeout(this.timer);
    },
    detached: function() {
        clearTimeout(this.Movedtimer), clearTimeout(this.timer);
    }
});