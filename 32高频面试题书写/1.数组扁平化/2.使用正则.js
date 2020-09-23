let arr = [1, [2, [3, [4, 5]]], 6];
const newArr = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
console.log(newArr, '数组扁平化')

// 优化版正则
const newArr1 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');;
