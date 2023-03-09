/**
 * Write a function to find the longest common prefix string amongst an array of strings. 
 * If there is no common prefix, return an empty string "".
 * 
 * Examples: 
 * input: strs = ["flower", "flow", "flight"]
 * output: "fl"
 */

const strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function(strings) {
    let commonPrefix = ""
    // base case if strings is not available, bad, etc
    if (strings.length === 0 || strings === null) {
        return commonPrefix
    }
    //establish initial minimum length
    let minimumLength = strings[0].length
    for (let i=0; i<strings.length; i++) {
        //Loops so Math.min can repeatedly make minimumLength
        // the shortest word
        minimumLength = Math.min(minimumLength, strings[i].length)
    }
    //loop through but minimumLength is constraint bc 
    //mostCommonPrefix/common can only be as large as
    //the minimumLength
    for (let i = 0; i<minimumLength; i++) {
        //Let current be first letter of first word
        let current = strings[0][i] 
        //iterates through each word to match first or i letter
        for (let j=0; j<strings.length;j++) {
            //if it doesn't match then end everything and just
            //return commonPrefix as is
            if (strings[j][i] !== current) {
                return commonPrefix
            }
        }
        //if successful then add that letter to current
        commonPrefix += current
    }
    return commonPrefix
};