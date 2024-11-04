// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

 


function makeFancyString (s){
    let res = s.split('')
    for(let i = 0; i < res.length; i++) {
        if(res[i] === res[i+1] && res[i] === res[i+2]) {
            res[i] = ""
        }
    }
    return res.join('')

}
console.log(makeFancyString('leeetcode'))