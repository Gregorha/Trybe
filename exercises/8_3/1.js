const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.equal(sum(4, 5), 9, 'parabens')
assert.equal(sum(0, 0), 0, 'parabens')
assert.throws(() => {sum(4,"4")}, /^Error: parameters must be numbers$/)