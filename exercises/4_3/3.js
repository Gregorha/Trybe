function returnMin(arr){
    let minvalue=arr[0];
    let j = 0
        for (let i=0; i < arr.length; i++){
            if (arr[i]<minvalue){
                minvalue = arr[i];
                j = i;
            }
        }
    return j;
}
console.log(returnMin([2, 4, 6, -5, -10, 0, -3]));