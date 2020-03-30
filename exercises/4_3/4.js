function biggestName(arr){
    let bigname = arr[0];
    let j = 0
        for (let i=0; i < arr.length; i++){
            if (arr[i].length>bigname.length){
                bigname = arr[i];
            }
        }
    return bigname;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));