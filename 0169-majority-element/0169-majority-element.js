/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let result = 0;

    for (const num of nums) {
        if (count === 0) {
            result = num;
        }

        count += num === result ? 1 : -1;
    }

    return result;
};