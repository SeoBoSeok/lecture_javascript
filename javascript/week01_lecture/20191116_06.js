/**
 * 배열안에서 값 찾기
 */

var superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
var index = superheroes.indexOf('토르');
console.log(index);

var numbers = [10, 20, 30, 40];
var index_numbers = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);

/**
 * 배열안에서 요소 다루기
 * splice
 * splice(지우고자하는 처음위치, 그위치로 부터 몇개?)
 * 기존의 배열로 바뀐다
 */

var numbers = [10, 20, 30, 40];
var index_num = numbers.indexOf(30);
numbers.splice(index_num, 1);
console.log(numbers);

/**
 * 배열안에서 요소 다루기
 * slice
 * slice(지우고자하는 처음위치, 그위치로 부터 몇개?)
 * 기존의 배열은 그대로 유지한다
 * -1 과 같은 마이너스도 가능하다
 */

var sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]

/**
 * 배열에 값 추가
 * unshift : 첫번째 인덱스에 요소 추가
 * push : 마지막 인덱스에 요소 추가
 */

numbers.unshift(77);
console.log(numbers);

numbers.push(99);
console.log(numbers);

/**
 * 배열에 값 삭제
 * shift : 첫번째 원소를 추출(삭제)
 * pop : 마지막 원소를 추출(삭제)
 */

var shift_value = numbers.shift();
console.log(numbers);
console.log(shift_value);

var pop_value = numbers.pop();
console.log(numbers);
console.log(pop_value);

/**
 * 배열 합치기
 * concat
 */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concated = arr1.concat(arr2);

console.log(concated);

/**
 * 배열을 문자열로 변환하기
 * join
 */

var new_arr = [1, 2, 3, 4, 5];
console.log(new_arr.join()); // 1,2,3,4,5
console.log(new_arr.join(' ')); // 1 2 3 4 5
console.log(new_arr.join(', ')); // 1, 2, 3, 4, 5