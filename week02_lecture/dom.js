/** DOM 선택하기 */
// javascript 방식
document.getElementById('app');
document.getElementsByClassName('root');
document.querySelector('#app');
document.querySelector('.root');

// jquery 방식
/**
 * $('#아이디')
 * $('.클래스')
 */

$('#app');
$('.root');

/**
 * DOM에서 데이터 얻기
 */
document.querySelector('.product').dataset.productId; // 'G123'
console.log($('.product').data('product-id'));

/** 
 * 문자열 변경
 */
document.querySelector('#foo').innerHTML = 'Hello Chris';
$('#foo').text('Hello Chris');

/** 
 * 이벤트 처리
 */
$('#foo').click(function () { })