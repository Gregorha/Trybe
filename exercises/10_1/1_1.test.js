const sum = require('./1_1')

test('Resultado soma', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, "4")).toThrow()
  expect(() => {sum(4, "4")}).toThrowError( new Error('parameters must be numbers'))
  expect(() => {sum(4, "4")}).toThrowError(/^parameters must be numbers$/)
  expect(() => {sum(4, "4")}).toThrowError("parameters must be numbers")
})

