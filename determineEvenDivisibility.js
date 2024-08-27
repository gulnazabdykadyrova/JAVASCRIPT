// make a function that, given 2 numbers, determines if the 1st number is evenly divisible 
// by the 2nd number

function determineEvenDivisibility (num1, num2) {
if(num1%num2==0) {
    return true
} else {
    return false
}
}

console.log(determineEvenDivisibility(10,2))
console.log(determineEvenDivisibility(10,3))