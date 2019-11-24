/**
 * document
 * getElementById
 */
// var element = document.getElementById('el');

/**
 * jquery
 * 요소 숨기기
 * hide()
 * show()
 */

/**
 * css 속성 바꾸기
 * css('display', 'none')
 */

/**
 * addClass('on')
 * removeClass('on')
 * toggleClass('on')
 */

/**
 * click()
 */

$(document).ready(function () {
  // console.log('1111');
  $('#el').click(function () {
    // console.log('1111');
    // $(this).hide();
    // $('#app').attr('style', 'visibility:hidden');
    // $('#app').attr('style', 'visibility:visible');
    // console.log($('#app').attr('style'));
    console.log($('#app').is(":visible"));
    if ($('#app').is(":visible")) {
      $('#app').attr('style', 'visibility:hidden');
    } else {
      $('#app').attr('style', 'visibility:visible');
    }
  })
  $('#app').click(function () {
    // $('#el').show();
  });
});