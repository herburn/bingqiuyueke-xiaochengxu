var e = require("qiniu"), n = require("path");

e.conf.ACCESS_KEY = "2ZsfoqbJh3UXrDzPJSnpw0B8s9ZpfAuaHBH3Qqzl", e.conf.SECRET_KEY = "AJWAWS7Kbnnw2drx5s65cJe84L66YMQJl5294UPG";

var o = new e.auth.digest.Mac(e.conf.ACCESS_KEY, e.conf.SECRET_KEY), r = new e.conf.Config();

r.zone = e.zone.Zone_z0, r.useHttpsDomain = !0, r.useCdnDomain = !0;

new e.rs.BucketManager(o, r);

bucket = "keep-web", module.exports = {
    uploadFile: function(t, u, a) {
        var i = "litekeep/" + t + "/" + parseInt(Date.now()) + "/" + u.filename, s = function(n, r) {
            var t = {
                scope: n + ":" + r
            };
            return new e.rs.PutPolicy(t).uploadToken(o);
        }(bucket, i), f = new e.form_up.FormUploader(r), c = new e.form_up.PutExtra();
        return new Promise(function(e, o) {
            f.putFile(s, i, n.join(a, u.filename), c, function(n, r, t) {
                n && o({
                    errorCode: 1,
                    errorMsg: "上传出错"
                }), 200 == t.statusCode ? (r.filename = u.filename, r.md5 = u.md5, e(r)) : o(o({
                    errorCode: 1,
                    errorMsg: "上传失败，状态码：" + t.statusCode
                }));
            });
        });
    }
};