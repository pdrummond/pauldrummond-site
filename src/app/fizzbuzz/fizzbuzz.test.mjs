import { test } from "node:test";
import assert from "node:assert";
import fizzBuzz from "./fizzbuzz.mjs";

test("test up to 15", () => {
  assert.deepEqual(fizzBuzz(15), [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});
