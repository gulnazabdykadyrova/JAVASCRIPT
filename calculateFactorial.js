// task: calculate the factorial of a number factorial is a number multiplied by all the numbers 
//lower than it, down to 1 input: 5 output: 120 (54321) 

function calculateFactorial(input){
  let n = 5;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n));

}

calculateFactorial(5)
