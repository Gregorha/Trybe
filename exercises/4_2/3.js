let base = 5
let row = [];
for (let i = 0; i < base; i++){
    let row = []
    for (let j =0; j<base; j++){
        if (j < base - i){
            row.push(" ");
        }else{
            row.push("*")
        }
    }
    console.log(row.join(""))
}
 