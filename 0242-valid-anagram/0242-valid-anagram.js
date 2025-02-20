/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const counter = {};

    if (s.length !== t.length) {
        return false;
    }

    for (const spell of s) {
        if (!counter[spell]) {
            counter[spell] = 1;
        } else {
            counter[spell] = counter[spell] + 1;
        }
    }

    for (const target of t) {
        if (counter[target]) {
            counter[target] = counter[target] - 1;
        } else if (counter[target] < 0) {
            return false;
        } else if (!counter[target]) {
            return false;
        }
    }

    return true;
};