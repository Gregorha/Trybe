let n = 401;
let isprime = "É primo";

for (let i = 2; i<n/2 ; i++) {
    if (n % i == 0) {
        isprime = "Não é primo";
    }
}
console.log(isprime);
