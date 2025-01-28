/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        "[" : "]",
        "{" : "}",
        "(" : ")",
    }; 
    const stack = [];

    if (s.length % 2 !== 0) {
        return false;
    }

    for (bracket of s) {
        if (Object.hasOwn(brackets, bracket)) {
            stack.unshift(bracket);
        } else {
            if (brackets[stack[0]] === bracket) {
                stack.shift();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};