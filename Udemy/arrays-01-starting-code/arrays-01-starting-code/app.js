// const numbers = [1,2,4,5,6]

// const moreNumbers = Array(5,2)
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(2,8)
// console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll("li")
// console.log(listItems)

// const arrayListItems = Array.from(listItems)
// console.log(arrayListItems)


// const personalData = [30, "Max", {moreDetail: []}]

// const analyticsData = [[1, 1.6],[-5.4, 2.11]]

// for(const data of analyticsData) {
//     for(const dataPoint of data ) {
//         console.log(dataPoint)
//     }
// }


// const hobbies = ["sports","tennis"]
// hobbies.push("cooking")
// hobbies.unshift("walking")
// const poppedValue = hobbies.pop()
// hobbies.shift()
// console.log(hobbies)

// hobbies[1] = "coding"
// hobbies[5] = "rarely used" rarely used
// console.log(hobbies)

//Splice method: insert el into array - at index 1, 0 - no el delete, insert "good food",

// hobbies.splice(1,0,"good food")
// console.log(hobbies)

//delete el in array/: start at index 0  and remove 1 el

// hobbies.splice(0,1)
// const removedElements = hobbies.splice(-2, 1)
// console.log(hobbies)

/////------------------------//////////////////////
// Method slice:  (start, end not included)

const testResults = [1, 5.3, 1.5, 10.99, -5, 10]
// const storedResults = testResults.slice(1,4)
const storedResults =  testResults.concat([3.99,2])

console.log(testResults.includes(5.3))


testResults.push(0.5)

console.log("testResults: ",testResults) //copying array
console.log("storedResults: ",storedResults)
console.log(testResults.indexOf(0.5))

const personData = [{name:"Max", index:0}, {name:'Manuel', index:1}]
console.log(personData.indexOf({name:'Manuel'})) // return value-1 we can't use indexOf with objects


const manuel = personData.find((person,index, persons)=>{
return person.name === "Manuel";
})

manuel.name = "Anna";

console.log(manuel)
console.log(personData)

const maxIndex = personData.findIndex((person,index, persons)=>{
  return person.name ==="Max"

})
console.log(maxIndex)


//------------------forEach,--Map-------------------//


const prices = [5.99, 5.66, 6.88, 8.86, 12, 6.59] 
const tax = 0.19;
const textAdjusted = [];

prices.forEach((price, idx, prices)=>{
    const obj = {price: price, index: idx, tax: price*(1+tax)}
    textAdjusted.push(obj)
})

console.log(textAdjusted)

const textAdjustedMap = prices.map((el,idx)=>{
    const obj = {
        price:el,
        index:idx,
        tax: el*(1+tax)
    }
    return obj;
})

console.log(textAdjustedMap)


const sortedPrices = prices.sort((a,b)=>{
    return a-b;
});
console.log(sortedPrices)


const filteredPrices = prices.filter(price => price > 7);

console.log(filteredPrices)

const reducedPrice = prices.reduce((currentVal, accum)=>accum += currentVal,0)

console.log(reducedPrice)

const data = "new york;10.99;2000"
const transformedData = data.split(';')

const nameFragments = ["Max", "Shwarz"]
const name = nameFragments.join(' ')
console.log(name)

//// Spread operator ////

const copiedNameFragments = [...nameFragments]
nameFragments.push("Mr")
console.log("copied: ",copiedNameFragments, "nameFragments: ",nameFragments)

console.log(Math.min(...prices))
console.log(...prices)

const persons = [{name:"Max", age:30}, {name:"Anna", age: 28}]
const copiedPersons = [...persons]

persons.push({name:"James", age:40})
console.log("copiedPerson: ",copiedPersons)
console.log(persons)

////////////Array destructuring//////////////////////

const nameData = ["Dan", "Doe", 28, "Mr"]

const [firstName, lastName, ...otherInfo] = nameData;
console.log(lastName, otherInfo)












