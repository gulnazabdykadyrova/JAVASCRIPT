const task3Element = document.getElementById('task-3');

function greet(){
alert("Hi there!")
}

function greetUser (userName){
alert("Hi " + userName)
}

greetUser("Max")

task3Element.addEventListener("click", greet)

function combine(str1,str2,str3){
return alert(str1+str2+str3)

}

combine("Hello","there","!")