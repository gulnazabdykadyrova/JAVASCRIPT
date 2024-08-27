console.log("hello!!!!!!!!")


char=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];

let generateRandomNum = (arr) => {

    for (let i=0; i<arr.length; i++) {
        random_num = Math.floor((Math.random()*26))
        console.log(arr[random_num ])
    }
}
generateRandomNum(char)


