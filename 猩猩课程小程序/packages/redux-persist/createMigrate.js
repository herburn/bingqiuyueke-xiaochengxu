exports.__esModule = !0, exports.default = createMigrate;

var _constants = require("./constants.js");

function createMigrate(n, r) {
    var i = (r || {}).debug;
    return function(r, e) {
        if (!r) return i && console.log("redux-persist: no inbound state, skipping migration"), 
        Promise.resolve(void 0);
        var o = r._persist && void 0 !== r._persist.version ? r._persist.version : _constants.DEFAULT_VERSION;
        if (o === e) return i && console.log("redux-persist: versions match, noop migration"), 
        Promise.resolve(r);
        if (e < o) return console.error("redux-persist: downgrading version is not supported"), 
        Promise.resolve(r);
        var s = Object.keys(n).map(function(r) {
            return parseInt(r);
        }).filter(function(r) {
            return r <= e && o < r;
        }).sort(function(r, e) {
            return r - e;
        });
        i && console.log("redux-persist: migrationKeys", s);
        try {
            var t = s.reduce(function(r, e) {
                return i && console.log("redux-persist: running migration for versionKey", e), n[e](r);
            }, r);
            return Promise.resolve(t);
        } catch (r) {
            return Promise.reject(r);
        }
    };
}