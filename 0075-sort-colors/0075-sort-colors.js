/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) 
{
   let i = 0;         
    let k = 0;         
    let j = nums.length - 1; 

    while (k <= j) 
    {
        if (nums[k] == 0) 
       {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            i++;
            k++;
        } 
        else if (nums[k] == 1) 
        {
            k++;
        } 
        else 
        { 
            [nums[k], nums[j]] = [nums[j], nums[k]];
            j--;
        }
    }
}


let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);  