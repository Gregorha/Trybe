let base = 7
let row = [];
for (let i = 0; i < base ; i++){
    sub = base
    let row = []
    let dif = base - i -1
    for (let j = 0; j < base; j++){

        if(i == base-1 ){
            row.push("*")
        }else if(i<Math.floor(base/2)){
            row.push(" ")
        }
        else if(j == dif || j == base -1 - dif){
            row.push("*");
        }else{
            row.push(" ")
        }
    }
    console.log(row.join(""))
}
