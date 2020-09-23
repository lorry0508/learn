Array.prototype.filter = function (callback, thisArg) {
    if (this == undefined) {
        throw new TypeError('this is null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    const res = [];
    // 让Obj成为回调函数的对象传递（强制转换对象）
    const Obj = Object(this);
    // >>> 0 保证len为number，且为正整数
    const len = Obj.length >>> 0;
    for (let i = 0; i < len; i++) {
        // 检查i是否在Obj的属性（会检查原型链）
        if (i in Obj) {
            // 回调函数调用参数
            if (callback.call(thisArg, Obj[i], i, Obj)) {
                res.push(O[i]);
            }
        }
    }
    return res;
}