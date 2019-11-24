/**
 * Object Constructor
 */

let person = new Object(); // Object 타입의 새로운 instance를 생성한다. 그리고 person 변수에 주소값을 저장한다.
person.name = "PAM CODE";
person.age = 1;

/**
 * Object literal notation
 * Object constructor 불리지 않는다
 */
let person = {
  name: "PAM CODE",
  age: 1
}

/**
 * Array Constructor
 */

let colors = new Array("red", "blue", "green"); // ["red", "blue", "green"]

/**
 * Array literal notation
 * Array constructor는 불리지 않는다
 * Array는 총 4,294,967,295개의 items를 포함할 수 있다.
 */

let colors = ["red", "blue", "green"];

/**
 * Array 정렬하기
 */

let values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values); // [5, 4, 3, 2, 1]

let values2 = [0, 1, 5, 10, 15];
values2.sort();

console.log(values2); // [0, 1, 10, 15, 5]
// 위와 같이 나타나는 이유는 sort() 메소드가 순서를 각 요소의 string 값을 기준으로 정렬하기 때문이다
// 위를 숫자 기준으로 고쳐보자

function asc(value1, value2) {

  if (value1 < value2) {
    return -1;

  } else if (value1 > value2) {

    return 1;

  } else {

    return 0;
  }

}
values2.sort(asc);
console.log(values2); // [0, 1, 5, 10, 15]

function dsc(value1, value2) {

  if (value1 < value2) {
    return 1;

  } else if (value1 > value2) {

    return -1;

  } else {

    return 0;
  }

}
values2.sort(dsc);
console.log(values2); // [15, 10, 5, 1, 0]

// 심화
// 더 간단한 함수로 적용해보자
function compare(value1, value2) {

  return value2 - value1;
}