// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]

const runningSum = (nums) => {
    let returnArr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            sum += nums[i]
            returnArr.push(nums[i])
        }
        else {
            sum += nums[i]
            returnArr.push(sum)
        }
    }
    return returnArr
};
console.log(runningSum([1,2,3,4])) 
//expected: [1,3,6,10]