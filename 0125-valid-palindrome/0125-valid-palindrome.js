/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = [...s.toLowerCase()].filter((s) => ((s.charCodeAt() >= 48 && s.charCodeAt() <= 57) || (s.charCodeAt() >= 97 && s.charCodeAt() <= 122)));
    
    return String(string) === String(string.reverse());
};