const numbers = [5,6,7,8,2,94,10,11]

const filteredNumbers = numbers.filter(num => num > 5)
console.log(filteredNumbers)

const mappedNumbers = numbers.map(el=> ({num: el}))
console.log(mappedNumbers)


const reducedNumbers = numbers.reduce((currentVal, accum)=>{
    return accum *= currentVal
},1)
console.log(reducedNumbers)

function findMax (arr){
    // const newArr = []
    //     newArr.push(Math.max(...numbers))
    //     newArr.push(Math.min(...numbers))
    //      const[max, min] = newArr;
    //         console.log(max,min)
    //             return newArr;
let max = arr[0]
for(let i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i];
    }
}
return max;
}
console.log(findMax(numbers))


const person = {
    name: "Gulnaz",
    age: 39,
    ID: 1223456
}

//const personalData = [30, "Max", {moreDetail: []}]

// const analyticsData = [[1, 1.6],[-5.4, 2.11]]
