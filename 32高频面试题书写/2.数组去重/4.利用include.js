const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
const unique = arr => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(!res.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}
console.log(unique(arr));