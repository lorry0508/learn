let arr = [1, [2, [3, [4, 5]]], 6];
const newArr = arr.flat(Infinity);
console.log(newArr, '数组扁平化')