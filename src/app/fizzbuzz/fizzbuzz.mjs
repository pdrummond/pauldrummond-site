/*
    Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
    instead of the number and for the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”
*/

export default function fizzBuzz(max = 100) {
  let arr = [];

  for (let i = 1; i <= max; i++) {
    if (i % 15 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

export function printFizzBuzz() {
  console.log(fizzBuzz(20).join("\n"));
}
