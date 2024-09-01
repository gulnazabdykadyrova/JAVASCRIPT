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
