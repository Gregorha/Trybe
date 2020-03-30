function biggestName(arr){
    let bigName = arr[0];
    let j = 0
        for (let i=0; i < arr.length; i++){
            if (arr[i].length>bigName.length){
                bigName = arr[i];
            }
        }
    return bigName;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));