let base = 5
let row = [];
for (let i = 0; i < base ; i++){
    sub = base
    let row = []
    let dif = base - i 
    //Created variable dif as the difference between the last row and the row been iterated, once that this difference is the number of white spaces in each side of the piramid
    for (let j = 0; j <= base; j++){
        if (j >= dif && j <= base + 1 - dif){
            row.push("*");
        }else{
            row.push(" ")
        }
    }
    console.log(row.join(""))
}
