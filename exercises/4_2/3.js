let base = 5
for (let i = 0; i < base; i++){
    let row = [];
    //Starting using j counter to check the position inside the row to add or not "*""
    for (let j =0; j<base; j++){
        if (j < base - i){
            row.push(" ");
        }else{
            row.push("*")
        }
    }
    console.log(row.join(""))
}
 