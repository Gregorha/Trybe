function mostFound(arr){
    let biggestRepeater = [];
        for (let i=0; i < arr.length; i++){
            let sameNumber = [arr[i]];
            for(let j=i+1; j < arr.length; j++){                
                if (arr[i] == arr[j]){
                    sameNumber.push(arr[j]);
                }
                if (sameNumber.length>biggestRepeater.length){
                    biggestRepeater = sameNumber;
                }
            }
        }
    return biggestRepeater[0];
}
console.log(mostFound([2, 3, 2, 5, 8,3,3, 2, 3, 5]));
