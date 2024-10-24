function removeVowels (str) {
    const vowels =["a", "e","o","u","A","E","I","O","U"]
        return str.split('').filter(
            char => !vowels.includes(char)).join("")
            
}
let inputString="Remove vowels"
// console.log(removeVowels(inputString))

function removeVowels2(str){
    const vowels =["a", "e","o","u","A","E","I","O","U"]
    let result=""

        for(let i = 0; i < str.length; i++) {
         if(!vowels.includes(str[i])) {
            result += str[i]
         }
        }
        return result

}
console.log(removeVowels2("Remove vowels"))