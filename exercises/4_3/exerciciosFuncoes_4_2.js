function triangle(b){
    for (let i = 0; i < b; i++){
        let row = [];
        //Starting using j counter to check the position inside the row to add or not "*""
        for (let j =0; j<b; j++){
            if (j < b - i){
                row.push(" ");
            }else{
                row.push("*")
            }
        }
        console.log(row.join(""))
    }
}
function triangle2(b){
    let row = [];
    for (let i = 0; i < b ; i++){
        sub = b
        let row = []
        let dif = b - i 
        //Created variable dif as the difference between the last row and the row been iterated, once that this difference is the number of white spaces in each side of the piramid
        for (let j = 0; j <= b; j++){
            if (j >= dif && j <= b + 1 - dif){
                row.push("*");
            }else{
                row.push(" ")
            }
        }
        console.log(row.join(""))
    }
}
function triangle3(b){
    let row = [];
    for (let i = 1; i < b+1; i++){
        sub = b;
        let row = [];
        let dif = b - i;
        for (let j = 0; j < b; j++){

            if(i == b ){
                row.push("*")
            }else if(i<Math.floor(b/2+1)){
                row.push(" ")
            }
            //only adding * for the specifics positions
            else if(j == dif || j == b - dif-1){
                row.push("*");
            }else{
                row.push(" ")
            }
        }
        console.log(row.join(""))
    }
}

triangle(10);
triangle2(10);
triangle3(10);