// make a function that, given 3 strings, returns which string is longest input: 
//'stuff', 'hi', 'woohoo' output: 'woohoo' */ function findLongestWord( word1,word2, word3)

function findLongestWord(word1,word2,word3){
let longestWord = "";

let strings = [word1,word2,word3];


for(let i = 0; i < strings.length; i ++) {

    if (strings[i].length > longestWord.length) {
        longestWord = strings[i]
    }
}
console.log("longestWord",longestWord)
return longestWord
}

findLongestWord("stuff", "hi","woohoo");


function findTheLongestWord(string){
    let longestWord = "";
    let newString = string.split(" ")
    console.log(newString)

    for(let i = 0; i < newString.length; i++) {
        if(newString[i].length > longestWord.length) {
            longestWord = newString[i]
        }
    }
    
    return longestWord

}
console.log(findTheLongestWord("Find the longest word"))

