const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();


// if((randomNumber > 0.7 && randomNumber2 > 0.7) || 
// randomNumber <= 0.2 || 
// randomNumber2 >= 0.2) {
//     alert("greater than 0.7 or smaller than 0.2")
// } 

// const num = [1,2,5,6,7,9];

// for (let i = num.length-1; i>=0; i--) {
//     console.log(num[i])
// }

// for(const el of num ) {
//     console.log("el: ",el)
// }


const numbers = [1,2,3,4,5];

for(let num of numbers) {
    console.log(num)
    for(let num of numbers) {
        console.log("inner loop: ",num)
       
    }
    
   
}

