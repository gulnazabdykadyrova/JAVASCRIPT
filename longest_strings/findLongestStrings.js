// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints: 1 ≤ inputArray.length ≤ 10, 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.
//For inputArray = ["aba", "aa", "ad", "vcd", "aba"]

function allLongestStrings(inputArray){
    let outputArr = [];
    outputArr.push(inputArray[0])

    for(let i = 1; i<inputArray.length; i++) {
        
        if(inputArray[i].length > outputArr[0].length ) {
            outputArr = [];
            outputArr.push(inputArray[i])
        } else if(inputArray[i].length === outputArr[0].length ) {
            outputArr.push(inputArray[i])
        }
        
        
    }
    return outputArr;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))