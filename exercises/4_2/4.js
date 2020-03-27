let base = 5
let row = [];
for (let i = 0; i < base ; i++){
    sub = base
    let row = []
    let dif = base - i 
    for (let j = 0; j <= base; j++){
        if (j >= dif && j <= base + 1 - dif){
            row.push("*");
        }else{
            row.push(" ")
        }
    }
    console.log(row.join(""))
}
