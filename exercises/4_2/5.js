let base = 7
let row = [];
for (let i = 1; i < base+1; i++){
    sub = base;
    let row = [];
    let dif = base - i;
    for (let j = 0; j < base; j++){

        if(i == base ){
            row.push("*")
        }else if(i<Math.floor(base/2+1)){
            row.push(" ")
        }
        //only adding * for the specifics positions
        else if(j == dif || j == base - dif-1){
            row.push("*");
        }else{
            row.push(" ")
        }
    }
    console.log(row.join(""))
}
