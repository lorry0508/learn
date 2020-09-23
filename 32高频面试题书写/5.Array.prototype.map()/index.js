Array.prototype.map = function(callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not function');
    }
    const res = [];
    const Obj = Object(this);
    const len = Obj.length >>> 0;
    for (let i = 0; i < len; i++) {
        if(i in Obj) {
            // 调用回调函数并传入新数组
            res[i] = callback.call(thisArg, Obj[i], i, this);
        }
    }
    return res;
}