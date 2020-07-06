require("os");

var e = require("path"), o = (require("fs"), require("./utils")), n = require("./upload"), l = require("../../project.config.json"), c = e.resolve(__dirname, "..", "..", "app", "cdn_files"), i = l.appid;

i || (console.error("--------------- 没有填写appId，无法完成上传 ---------------"), process.exit());

var r = i, s = o.getCachedFiles(c), a = [];

if (o.loopDir("", "", c, a), (a = a.filter(function(e) {
    return !s[e.filename] || s[e.filename].md5 != e.md5;
})).length > 0) {
    console.log("--------------- cdn upload begin ---------------");
    var t = [];
    a.forEach(function(e) {
        t.push(n.uploadFile(r, e, c));
    }), Promise.all(t).then(function(e) {
        e && (console.log("下面的文件上传到了cdn: "), e.forEach(function(e) {
            s[e.filename] || (s[e.filename] = {}), s[e.filename].md5 = e.md5, s[e.filename].key = "https://staticweb.keepcdn.com/" + e.key, 
            console.log(e.filename, "上传后的名称：", e.key);
        }), o.setCachedFiles(c, s)), console.log("请使用你的cdn地址：https://staticweb.keepcdn.com\n\n"), 
        console.log("--------------- cdn upload end ---------------");
    }).catch(function(e) {
        console.error("有文件上传失败:", e), console.log("--------------- cdn upload end ---------------");
    });
} else console.log("没有文件需要上传到cdn");