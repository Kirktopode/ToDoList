import { sum } from '../sum'

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("I know you're listening", () => {
  expect(sum("butter", " sauce")).toBe("butter sauce");
});

test("Will it run this one if the others fail?", () => {
  expect(sum()).toBe(NaN);
});
