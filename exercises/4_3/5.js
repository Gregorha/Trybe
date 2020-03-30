function mostFound(arr){
    let biggest_repeater = [];
        for (let i=0; i < arr.length; i++){
            let samenumber = [arr[i]];
            for(let j=i+1; j < arr.length; j++){                
                if (arr[i] == arr[j]){
                    samenumber.push(arr[j]);
                }
                if (samenumber.length>biggest_repeater.length){
                    biggest_repeater = samenumber;
                }
            }
        }
    return biggest_repeater[0];
}
console.log(mostFound([2, 3, 2, 5, 8,3,3, 2, 3, 5]));
