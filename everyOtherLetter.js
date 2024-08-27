
function getEveryOtherLetter( string ){

    let str = "";

    for(let i = 0; i <string.length-1; i ++) {

        if(i % 2 == 0) {
            str = str.concat(string[i+1])
        }  
        
    }

    
    return str;
}
 
console.log(getEveryOtherLetter("mistermister"));
console.log(getEveryOtherLetter("silliness"));
