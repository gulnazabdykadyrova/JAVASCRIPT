// task: calculate the factorial of a number factorial is a number multiplied by all the numbers
//lower than it, down to 1 input: 5 output: 120 (54321)

function calculateFactorial(input) {
  let fact = 1;

  for (let i = 2; i <= input; i++) {
    fact = fact * i;
  }

  console.log(fact);
}

calculateFactorial(5);
calculateFactorial(3);
