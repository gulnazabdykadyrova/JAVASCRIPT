function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
  }

console.log(checkPalindrome("aba"))

function isPalindrome(str){
    let rev = ""

    for(let i = str.length-1; i>=0; i--) {
        rev+=str[i]
    }
        if(rev==str) {
        return true
    }  else  {
        return false

    } 
} 

console.log(isPalindrome('racecar'));
console.log(isPalindrome('nitin'));
console.log(isPalindrome('Rama'));