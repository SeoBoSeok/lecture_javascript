/**
 * 조건문(if..else..else if)
 */

const condition = true;

if (condition) {
  console.log('Yes'); // Yes
} else {
  console.log('No');
}

const number = 99;
let result; // undefined

if (number === 1) {
  result = 'One';
} else if (number === 99) {
  result = 'Ninety-Nine';
} else if (number === 1000) {
  result = 'One Thousand';
} else {
  result = 'No Match';
}

console.log(result); // Ninety-Nine


/**
 * 3항 연산자
 */
const number2 = 1;
const result2 = 'The Number is: ' + (number2 === 1 ? 'One' : 'No Match');

console.log(result2); // The Number is: One

const anotherNumber = 99;
const anotherResult =
  anotherNumber === 1
    ? 'One'
    : anotherNumber === 99
      ? 'Ninety-Nine'
      : anotherNumber === 1000
        ? 'One Thousand'
        : 'No Match';

console.log(anotherResult); // Ninety-Nine


/**
 * Switch 문
 */
const number3 = 1;
let result3;

switch (number3) {
  case 1: {
    const text = 'One';
    result3 = text;
    break;
  }
  case 99: {
    const text = 'Ninety-Nine';
    result3 = text;
    break;
  }
  case 1000:
    result3 = 'One Thousand';
    break;
  default:
    result3 = 'No Match';
}

console.log(result3); // One
