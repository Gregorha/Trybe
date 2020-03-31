function returnMax(arr){
    let maxValue = 0;
    let j = 0
        for (let i=0; i < arr.length; i++){
            if (arr[i]>maxValue){
                maxValue = arr[i];
                j = i;
            }
        }
    return j;
}
console.log(returnMax([2, 3, 25, 7, 10, 1]));