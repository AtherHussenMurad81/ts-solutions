// * Problem: 1

function filterEvenNumbers(numbers: number[]) {
  const result = numbers.filter((number) => number % 2 == 0);
  return result;
}
// filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// * Problem 2

function reverseString(reverseNumbers: string): string {
  const result = reverseNumbers.split("").reverse().join("");

  return result;
}
reverseString("typescript");

// * Problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}
const result = checkType(545);
