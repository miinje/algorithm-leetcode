/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsObject = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      const num = +(target - nums[i]);
      
      if (Object.hasOwn(numsObject, num)) {
            return [i, numsObject[num]];
        } else {
            numsObject[nums[i]] = i;
        }
    }
};
