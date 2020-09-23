const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
const newArr = Array.from(new Set(arr));
console.log(newArr);