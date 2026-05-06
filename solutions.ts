// * Problem: 1

function filterEvenNumbers(numbers: number[]) {
  const result = numbers.filter((number) => number % 2 == 0);
  return result;
}

// * Problem 2

function reverseString(reverseNumbers: string): string {
  const result = reverseNumbers.split("").reverse().join("");

  return result;
}

// * Problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// * Problem 4

const getProperty = <X>(object: X, key: keyof X) => {
  return object[key];
};

//*  Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book & { isRead: boolean }) {
  return {
    ...book,
    isRead: true,
  };
}

// * Problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student {


    
}
