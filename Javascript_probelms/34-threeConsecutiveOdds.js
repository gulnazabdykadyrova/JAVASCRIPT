// Given an integer array arr, return true if there are three consecutive odd numbers in the array. 
// Otherwise, return false.

function threeConsecutiveOdds(arr) {
   let counter = 0;
   for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 != 0) {
        counter++; 
    }
    else {
        counter = 0;
    }
    if(counter == 3){
        return true;
    } 
    }

    return false;
}
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
console.log(threeConsecutiveOdds([2]))
console.log(threeConsecutiveOdds([2,6,4,1]))
