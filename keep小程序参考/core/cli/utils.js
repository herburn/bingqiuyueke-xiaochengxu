var e = require("fs"), i = require("path"), n = require("crypto"), r = require("chalk"), c = "cache_cdn.json", t = [ ".DS_Store" ];

module.exports = {
    loopDir: function r(o, a, s, l) {
        if (!(o == c || t.indexOf(o) > -1)) {
            var f = i.join(s, a, o);
            if (e.statSync(f).isFile()) {
                var u = i.extname(o);
                if (t.indexOf(u) > -1) return;
                var d = e.readFileSync(i.join(s, a, o)), h = n.createHash("md5").update(d).digest("hex");
                console.log("文件的MD5是：%s", h);
                var S = i.join(a, o);
                l.push({
                    filename: S,
                    md5: h
                });
            } else e.readdirSync(f).forEach(function(e) {
                r(e, i.join(a, o), s, l);
            });
        }
    },
    cache_file: c,
    getCachedFiles: function(n) {
        var r = i.join(n, c), t = {};
        if (e.existsSync(r)) {
            t = e.readFileSync(r, "utf-8");
            try {
                t = JSON.parse(t);
            } catch (e) {
                t = {};
            }
        }
        return t;
    },
    setCachedFiles: function(n, r) {
        var t = i.join(n, c);
        e.writeFileSync(t, JSON.stringify(r, null, 2));
    },
    log: function(e, i) {
        console.log(r[i](e));
    }
};