// given 2 arrays, 1 of first names, and 1 of last names
// return an array of objects with 1 first and last name
// for each.
// for example:
// input:
//    ['Dan','Jane','Jack']
//    ['Hill','Black','Mill']
//  output:
//    [
//      {first: 'Dan', last: 'Hill'},
//      {first: 'Jane', last: 'Black'},
//      {first: 'Jack', last: 'Mill'}
//    ]

function combineArrays (arr1,arr2) {
    let combinedArray=[];
    for(let i=0; i<arr1.length; i++) {
        let output={ first:arr1[i], last:arr2[i]}
        combinedArray.push(output)
        
    }
    return combinedArray

}

console.log(combineArrays(['Dan','Jane','Jack'],['Hill','Black','Mill']))

// given 2 arrays, 1 of numbers, and one of words
// return an array of true and false values
// true if the number and the word singular agree
// false if they do not agree
// for example:
// input:
//   [1,3,2]
//   ['dogs','planes','tree']
// output:
//   [false, true, false]

function pluralAgreement (num, words){
let output=[]
for(let i = 0; i<num.length; i++) {
    if(((num[i] > 1 || num[i] === 0) && words[i][words[i].length-1] === "s" ) || ((num[i]===1) && words[i][words[i].length-1]!=="s")){
output.push(true)
    }else  {
        output.push(false)
    }
}
return output
}

console.log(pluralAgreement([1,3,2], ['dogs','planes','tree']))
console.log(pluralAgreement([2,3,0], ['dogs','planes','tree']))