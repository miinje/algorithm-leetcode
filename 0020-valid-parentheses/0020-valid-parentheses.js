/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {
        "[" : "]",
        "{" : "}",
        "(" : ")",
    }; 

    if (s.length % 2 !== 0) {
        return false;
    }

    for (bracket of s) {
        if (Object.hasOwn(brackets, bracket)) {
            stack.push(bracket);
        } else {
            if (brackets[stack.pop()] !== bracket) {
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