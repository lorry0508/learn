Array.prototype.forEach = function(callback, thisArg) {
    if(this == null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not function');
    }
    const Obj = Object(this);
    const len = Obj.length >>> 0;
    let k = 0;
    while (k < len) {
        if (k in Obj) {
            callback.call(thisArg, Obj[k], k, Obj);
        }
        k++;
    }
}