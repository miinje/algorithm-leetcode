/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let reduceAll = 0;
    let reduceNums = 0;

    for (let i = 0; i <= nums.length; i++) {
        reduceNums += nums[i] ? nums[i] : 0;
        reduceAll += i;
    }
    
    return reduceAll - reduceNums;
};