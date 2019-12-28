// coercion 강제변환
console.log(1 == '1'); // true
console.log(1 === '1'); // false (type까지 같아야 함)

console.log(Boolean("PAM")); // true
console.log(Boolean("")); // false

// Truthy values
console.log(!!true); // true
console.log(Boolean({})); // true
console.log(!!{}); // true
console.log(!![]); // true
console.log(!!new Date()); // true
console.log(!!"0"); // true
console.log(!!1); // true
console.log(!!-1); // true

// Falsy values
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined) // false
console.log(!!NaN); // false
console.log(!!""); // false

/**
 * 단축평가 논리연산자
 * &&
 */

console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ""
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

/**
 * 단축평가 논리연산자
 * ||
 */

console.log(false || 'hello'); // hello
console.log('' || 'hello'); // hello
console.log(null || 'hello'); // hello
console.log(undefined || 'hello'); // hello
console.log(0 || 'hello'); // hello

console.log(1 || 'hello'); // 1
console.log(true || 'hello'); // true
console.log('hello' || 'world'); // hello
console.log([] || 'hello'); // []
