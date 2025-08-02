/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    let sum = 0;
    for(i=0; i<nums.length; i++)
    {
        sum = sum + nums[i];
        result.push(sum);
    }
    return result;
}

let nums = [1, 2, 3, 4];
let output = runningSum(nums);
console.log("Running Sum", output);