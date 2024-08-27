function findLargestNumber(num1,num2,num3){
 let num = [num1,num2,num3];

 let largestNum=Null

 for(let i =0 ; i<=num.length; i++) {
  if(largestNum < num[i]) {
    largestNum=num[i]
    
  }
 }
 console.log(largestNum)

}
findLargestNumber(4,12,2);