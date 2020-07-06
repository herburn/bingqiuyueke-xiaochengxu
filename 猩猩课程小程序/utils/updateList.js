function updateList(e, t) {
    var s = t.indexOf(e);
    -1 === s ? t.push(e) : t.splice(s, 1);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateList = updateList;