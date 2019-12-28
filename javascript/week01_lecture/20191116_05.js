/**
 * 배열 내장함수
 * 배열의 각 요소 출력하기
 */

var superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

/**
 * 배열 내장함수
 * 배열의 각 요소 순회하기
 */

superheroes.forEach(
  function (hero) {
    console.log(hero);
  }
);

/**
 * 배열 내장함수
 * 배열의 각 원소를 변환해서 새로운 배열 만들기
 */

var array = [1, 2, 3, 4, 5, 6, 7, 8];

var squared = [];
// for (var i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i]);
// }

console.log(squared);

// array.forEach(function (n) { squared.push(n * n) });
// console.log(squared);

var squared_map = array.map(function (n) { return n * n });
console.log(squared_map);