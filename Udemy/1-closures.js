function createAdder(a){

return function add(b){
let result = a+b
return result
}

}
let addTo = createAdder(5)
// console.log(addTo(5))


function makeCounter (n){
let counter = n;
    return ()=>{
      return counter = n++;
       
    }
}

console.log(makeCounter(5))
console.log(makeCounter(5))
console.log(makeCounter(5))
console.log(makeCounter(5))