// function* fibs() {
//   var a = 0;
//   var b = 1;
//   while (true) {
//     yield a;
//     console.log(a);
//     [a, b] = [b, a + b];
//     yield a;
//     console.log(a);
//   }
// }

// var [first, second, third, fourth, fifth, sixth, seventh, eigth] = fibs();
// console.log(sixth);


function* idMaker() {
  var index = 0;
  while (true){
    yield index++;
    index = 5;
  }
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


