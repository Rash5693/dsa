/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1)
    {
        return 0;
    }
    let i = 0;
    let j = 0;
    let product = 1;
    let count = 0;
    
    for(j=0; j<nums.length; j++)
    { 
        product = product * nums[j];
        while(product >= k )
        {
            product = product / nums[i];
            i++;
        }
        count = count + j - i + 1;
    }
    return count; 
}  

const nums = [10, 5, 2, 6];
const k = 100;
console.log(numSubarrayProductLessThanK(nums, k));
