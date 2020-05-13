const assert = require('assert')

// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const findPrimes = (n) => {
  let primes = [];
  const allNumbers = []
  for (let i = 1; i <= n; i++){
    allNumbers.push(i)
  }
  allNumbers.map((element,index)=>{
    let testPrimes = allNumbers.slice(0,index)
    if(element > 1 && !testPrimes.some(number => {
      if(number != 1 ){
      return element%number == 0
      }
    })){
      primes.push(element)
    }
  })
  return primes
}

assert.deepStrictEqual(findPrimes(20),[2, 3, 5, 7, 11, 13, 17, 19], "banana")
assert.deepStrictEqual(findPrimes(25),[2, 3, 5, 7, 11, 13, 17, 19, 23], "banana")
assert.deepStrictEqual(findPrimes(100),[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], "banana")


