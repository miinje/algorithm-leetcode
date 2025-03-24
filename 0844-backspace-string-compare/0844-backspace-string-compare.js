/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const string = [];
    const target = [];
    
    for (const spell of s) {
        if (spell === "#") {
            string.pop();
        } else {
            string.push(spell);
        }
    }

    for (const spell of t) {
        if (spell === "#") {
            target.pop();
        } else {
            target.push(spell);
        }
    }

    return string.join("") === target.join("") ? true : false;
};