// const movieList = document.getElementById("movie-list")
// movieList.style['background-color'] = "red";
// movieList.style.display = 'block'



const userKeyName = "level";

let person = {
    "first-name": "Max",
    age:20,
    hobbies: ["Sport", "Cooking"],
    [userKeyName]:'...',
    greet: function(){
        alert("Hi there!")
    },
    1.5: "Hi"


}

person.age = 18
delete person.hobbies;
person.isAdmin = true;
console.log(person["first-name"])
console.log(person['age'])
console.log(person)


function duplicate (str){
    let obj={};
    const lowerCaseStr=str.toLowerCase();
    for(let i=0; i<lowerCaseStr.length;i++) {
       if(lowerCaseStr[i] in obj) {
        obj [lowerCaseStr[i]] ++
       } else {
        obj[lowerCaseStr[i]] = 1
       }
    }
    return obj;
    
    
}
console.log(duplicate("abcdefaBB"))