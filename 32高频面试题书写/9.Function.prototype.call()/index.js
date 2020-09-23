Function.prototype.call = function(context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }
    const fn = Symbol('fn');
    context[fn] = this;

    const res = this[fn](...args);
    delete this.fn;
    return res;
}