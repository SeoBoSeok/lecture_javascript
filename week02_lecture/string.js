/** 문자열 합치기 */
var str1 = "This is a ";
var str2 = "Test";
var str3 = str1 + str2;

console.log(str3);

/** 문자열 + 숫자 */
var str4 = "2";
var num = 3;
var str5 = str4 + num;

console.log(str5);
console.log(typeof (str5));

/** 
 * 문자열 데이터 반환
 * chatAt()
 */

var Sample = "Hello";
var result = Sample.charAt(1);

console.log(result);

/** 
 * 문자열 찾기
 * indexOf("찾을 문자")
 * lastIndexOf("찾을 문자"), 끝에서부터 찾는다
 * 일치하는 문자열을 못찾으면 -1 반환
 */
var sample = "Hello World! PROGRAMMER World";
var result_indexOf = sample.indexOf("World");
var result_lastindexOf = sample.lastIndexOf("World");

console.log(result_indexOf);
console.log(result_lastindexOf);

/**
 * 문자열 찾아 바꾸기
 * replace("찾을 문자", "치환할문자")
 */
var sample3 = "Hello World!"
var result3 = sample3.replace("Hello", "Hi");

console.log(result3);

var sample4 = "Hello World! Hello";
var result4 = sample4.replace("Hello", "Hi");

console.log(result4);

// 모두 바꾸고 싶을때는 정규표현식을 쓸 수 있다.
var result_reg = sample4.replace(/Hello/gi, "Hi");

console.log(result_reg);

// 참고, replaceAll이라는 새로운 함수를 만들어서 사용할수도 있다.
function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

var result_func = replaceAll(sample4, "Hello", "Hi");

console.log(result_func);

/** 
 * 문자열 함수
 * substring(startIndex, endIndex)
 * substr(startIndex, 문자갯수)
 */
var sample5 = "Hello World";
var result_substring = sample5.substring(0, 5);
var result_substr = sample5.substr(6, 5);

console.log(result_substring);
console.log(result_substr);

/**
 * 문자열 자르기(기준)
 * split("기준문자열")
 */
var sample6 = "Hello World";
var result6 = sample6.split(" ");
console.log(result6);

/** 
 * toLowerCase()
 * toUpperCase()
 */
var sample7 = "Hello World";

console.log(sample7.toLowerCase());
console.log(sample7.toUpperCase());

/** 
 * 문자열 합치기
 * concat()
 */

var sample8 = "Hello";
var newWord = " World";

console.log(sample8.concat(newWord));

/** 
 * 문자열 길이
 * length
 */

var sample9 = "Hello World";
console.log(sample9.length)