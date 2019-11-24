/** 자바스크립의 함수는 일급객체이다. (first-class object)
 * 1. 무명의 리터럴로 표현이 가능하다.
 * 2. 파라미터로 전달할 수 있다. (콜백함수)
 * 3. 반환값으로 사용할 있다. (함수형 프로그래밍)
 * 4. 자료 구조에 저장할 수 있다.
 */

/** 1,2 예제 */
var increase = function (num) {
  return ++num;
}

var decrease = function (num) {
  return --num;
}

var predicate_array = [increase, decrease];

console.log(increase(1)); //2
console.log(decrease(1)); //0
console.log(predicate_array[0](1)); //2
console.log(predicate_array[1](1)); //0

/** 3,4 예제 */
var predicates = { increase, decrease };

function makeCounter(predicate) {
  var num = 0; // JAVA의 static 변수와 비슷, 접근은 안되지만 내부에서 기억하는 변수.

  return function () {
    num = predicate(num);
    return num;
  };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

/** 함수는 return을 하는순간 종료된다 */
function hello(name) {
  return console.log('hello ' + name); // 여기까지만 실행.

  console.log('hi'); // 실행되지 않음.
}

hello('javascript');

/** 함수의 활용 */
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score === 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score === 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score === 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

var grade = getGrade(77);
console.log(grade);

/* 함수 'myFunc' 선언 */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * 변수 'mycar' 선언;
 * 새 객체를 만들고 초기화;
 * 'mycar'에 객체 참조를 할당
 */
var mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* 객체 참조를 함수에 전달 */
myFunc(mycar);

/*
 * 함수에 의해 바뀌었기에 객체의
 * 'brand' 속성의 값으로 'Toyota' 출력.
 */
console.log(mycar.brand);