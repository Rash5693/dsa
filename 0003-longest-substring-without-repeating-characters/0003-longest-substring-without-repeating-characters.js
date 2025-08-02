/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let maxLength = 0;
    const subStr = new Map();

    for(let j=0; j < s.length; j++)
    {
        const char = s[j];

    if(subStr.has(char) && subStr.get(char) >= i)
    {
        i = subStr.get(char) + 1;
    }
    subStr.set(char, j);
    maxLength = Math.max(maxLength, j - i + 1);
 }
 return maxLength;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));