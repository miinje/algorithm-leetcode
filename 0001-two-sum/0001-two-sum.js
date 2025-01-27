/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const targetNum = nums.indexOf(target - nums[i]);

        if (targetNum > -1 && targetNum !== i) {
            return [i, targetNum];
        }
    }
};