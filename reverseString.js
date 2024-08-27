// REVERSE STRING task: make a fuction that uses loops to reverse a string input: 'greetings earthlings'
//  output: 'sgnilhtrae sgniteerg' 

function reverseString (string) {
    let reverse = [];

    let i = string.length-1;
    console.log(i)

    while(i>=0) {
        reverse.push(string[i])
        i--
    }

    console.log(reverse.join(""))

}

reverseString('greetings earthlings')

function reverseString2(string){

    let reversedString= ""

    for(let i = string.length-1; i>=0 ; i-- ){
        reversedString += string[i];
    }

    return reversedString
}

console.log(reverseString2("helloo"))