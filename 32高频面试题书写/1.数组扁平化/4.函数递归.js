let arr = [1, [2, [3, [4, 5]]], 6];
const newArr = [];
const fn = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            fn(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
}
fn(arr);
console.log(newArr, '数组扁平化')