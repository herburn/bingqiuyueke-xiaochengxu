Component({
    properties: {
        conflictScheduleInfo: {
            type: Object,
            value: null
        }
    },
    data: {},
    methods: {
        close: function(t) {
            "conflict" === t.target.id && this.triggerEvent("closeconflicttip", {
                isContinue: !0
            });
        },
        confirm: function() {
            this.triggerEvent("closeconflicttip", {
                isContinue: !0
            });
        },
        cancel: function() {
            this.triggerEvent("closeconflicttip", {
                isContinue: !1
            });
        }
    }
});