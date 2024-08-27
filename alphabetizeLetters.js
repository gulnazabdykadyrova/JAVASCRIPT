// given a string, return a string with each letter in alphabetical order
// input: 'marshmallow' output: 'aahllmmorsw'

let alphabetizeLetters=( string )=>{
    let splitted=string.split("").sort().join("")
    console.log("splitted",splitted)


}

alphabetizeLetters('marshmallow')