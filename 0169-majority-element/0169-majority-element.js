/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const magority = nums.length / 2;
    const obj = {};

    for (const num of nums) {
        if (obj[num]) {
            obj[num] = obj[num] + 1;
        } else {
            obj[num] = 1;
        }

        if (obj[num] >= magority) {
            return num;
        } 
    }
};