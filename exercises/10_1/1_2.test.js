const myIndexOf = require('./1_2.js')

test('testing right index', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});
