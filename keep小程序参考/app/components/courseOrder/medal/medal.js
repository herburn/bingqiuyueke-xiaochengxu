Component({
    properties: {
        medalCheckin: {
            type: Object,
            value: null,
            observer: function(e) {
                this.setData({
                    medalInfo: e.medalInfo,
                    firstCheckInInfo: e.firstCheckInInfo
                });
            }
        }
    },
    data: {
        medalInfo: null,
        firstCheckInInfo: null
    },
    methods: {
        closeMedal: function() {
            this.setData({
                medalInfo: null
            });
        },
        closeFirstCheckIn: function() {
            this.setData({
                firstCheckInInfo: null
            });
        }
    }
});