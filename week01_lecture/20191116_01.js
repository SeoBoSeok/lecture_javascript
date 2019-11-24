// 변수 선언하기
var name = '';
let name2 = '';
const name3 = '';

/**
 * var keyword로 변수 선언시
 * 값을 선택적으로 초기화 가능하다
 * ES6이후 let keyword를 쓸 것을 권장한다
 */

// 변수 선언 후 할당
var myVariable; // myVariable === undefined
myVariable = 'Bob';

// 변수 선언과 동시에 할당
var myVaribale2 = 'Bob2';

// 변수에 할당한 값을 변경 가능
myVariable = 'newBob';
myVariable2 = 'newBob2';

/**
 * let keyword로 변수 선언시
 * 값을 선택적으로 초기화 가능하다
 * var로 선언하는 것과 다른점 : scope (Block level scope)
 */

// 변수 선언 후 할당
let myVariable_let; // myVariable === undefined
myVariable_let = 'Bob';

// 변수 선언과 동시에 할당
let myVaribale2_let = 'Bob2';

// 변수에 할당한 값을 변경 가능
myVariable_let = 'newBob';
myVariable2_let = 'newBob2';

// var와 let차이점
{
  var test_var = '1111';
  let test_let = '2222'; // 안전하게
  console.log(test_let);
}
console.log(test_var);
console.log(test_let);

/**
 * const : 상수(constant) :: 변하지 않고 항상 같은 값을 가지는 수
 * const keyword로 변수 선언시
 * 값을 선택적으로 초기화 가능하지 않다!
 */

// 변수 선언 후 할당할 수 없다
const myVariable_const; // SyntaxError!! : 값을 무조건 할당해주어야 한다

// 변수 선언과 동시에 할당
const myVaribale2_const = 'Bob2';

// 변수에 할당한 값을 변경할 수 없
myVariable2_const = 'newBob2'; // TypeError!! : 할당된 상수값은 변경할 수 없다