let arr = [1, [2, [3, [4, 5]]], 6];
const flatten = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
}
const newArr = flatten(arr);
console.log(newArr, '数组扁平化')