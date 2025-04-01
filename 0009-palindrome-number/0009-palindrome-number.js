/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = [...`${x}`];

    for (const num of `${x}`) {
        const pop = arr.pop();

        if (pop !== num) {
            return false;
        }
    }

    return true;
};