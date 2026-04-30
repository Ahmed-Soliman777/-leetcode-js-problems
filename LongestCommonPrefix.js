// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();
    let i = 0
    let s = ""
    let length = strs.length

    while (i < strs[0].length) {
        if (strs[0][i] === strs[length - 1][i]) s += strs[0][i]
        else break
        i++
    }

    return s
};