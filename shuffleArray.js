var shuffle = function (nums, n) {
    let arr1 = nums.slice(0, n);
    let arr2 = nums.slice(n, nums.length);
    let returnArr = [];
    for(let i = 0; i < n; i++){
        returnArr.push(arr1[i])
        returnArr.push(arr2[i])
    }
    return returnArr
}
console.log(shuffle([1, 2, 3, 4], 2))