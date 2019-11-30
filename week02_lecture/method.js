$(document).ready(function () {
  /**
   * 요소 추가하기
   * 클래스명 추가
   * HTML 요소추가
   */
  // $('h1').addClass('bg');
  // $('h2').addClass('bg bd');

  //$('h1').before('<p>Hello</p>');
  // $('h1').after('<p>Hello</p>');
  // $('h2').append('<p>Hello</p>');

  /**
   * 속성(attribute)값 가져오기
   * 속성 추가하기
   */
  // console.log($('h1').attr('class'));
  // $('h2').attr('title', 'h2');

  /**
   * css 추가하기
   * css('css속성명', 'css속성')
   */
  $("h1").css("color");
  $("h1").css("color", "green");

  /**
   * 자식요소 선택하기
   * children()
   */
  $('ul').children('.ip').css('color', 'red');

  /**
   * 부모요소 선택하기
   * parent()
  */
  $('.ip').parent('ul').css('color', 'blue');

  /**
   * 요소 바꾸기
   * html() => html 요소로 추가
   * text() => 단순 text 요소 추가
   */

  // $('div').html('<h1>Lorem</h1>');
  // $('div').text('Lorem');

  /**
   * 순서로 선택하기
   */
  // $('div').eq(0).text('1111');

  /**
   * toggleClass
   * 클래스명 toggle
   */
  $('li').click(function () {
    $(this).toggleClass('green');
  });

  /**
   * removeClass
   * 클래스명 삭제
   */
  // $('li').eq(1).removeClass('ip');
  // $('.ip').removeAttr('class');
});