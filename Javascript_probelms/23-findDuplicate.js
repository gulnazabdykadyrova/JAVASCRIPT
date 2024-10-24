const findDuplicate =(str)=>{
 const lowerCase=str.toLowerCase();
 let obj = {};

 for(let i = 0; i < lowerCase.length; i ++) {
    if(lowerCase[i] in obj) {
        obj[lowerCase[i]] ++;
    } else obj[lowerCase[i]] = 1;
 }
    return obj

}

console.log(findDuplicate("abcdeffD"))