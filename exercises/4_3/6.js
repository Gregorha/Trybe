function sumLowers(n){
    let sum = 0; 
    for (let i = n; i>0; i--){
        sum+= i;
    }
    return sum
}

console.log(sumLowers(6));
