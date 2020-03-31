let sides = 6
//Will use arrays for this and the following exercises
let row = [];
for (let i = 0; i < sides; i++){
    //Using push to build an 1 dimensional array full of *
    row.push("*");
}
//For loop to print multiple lines 
for (let i=0; i<sides;i++){
    //.join to transform array to string in order to print it without the array structure
    console.log(row.join(""));
}
