function sortedArray (arr){
    if(!arr.length) {
        throw new Error('Should not be an empty array!')
    }
     
    for(let i = 0; i < arr.length; i++) {
        let outerElement = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            let innerElement = arr[j];

            if(outerElement > innerElement) {
                //swap
                arr[i] = innerElement;
                arr[j] = outerElement;

                outerElement = arr[i]; // update arr[i] => 1
                innerElement = arr[j];
                
                
            }
        }
        

    }
    return arr;

}
console.log(sortedArray([1,5,3]))