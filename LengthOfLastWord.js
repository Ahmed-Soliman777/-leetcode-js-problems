// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // global var i to be used in both loops
    // loop to find the index of the last non-space character
    let i
    for (i = s.length - 1; s[i] == " "; i--) {

    }

    // counter to count the length of the last word
    let c = 0

    // loop to count the length of the last word until we reach a space or the beginning of the string
    for(let x = i; x >= 0 && s[x] != " "; x--){
        // increment the counter for each non-space character
        c++
    }
    return c
};