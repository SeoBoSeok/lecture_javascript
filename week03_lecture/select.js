$(document).ready(function () {
  /**
   * select box 컨트롤 하기
   */

  // javascript 방식
  var target = document.getElementById('test');
  console.log(target.options[target.selectedIndex].text);
  console.log(target.options[target.selectedIndex].value);

  // jquery 방식
  console.log($('#test option:selected').val());
  console.log($('#test option:selected').text());
  console.log($('select option:selected').val());
  console.log($('select option:selected').text());

  $('#test').change(function () {
    console.log($('#test option:selected').val());
    console.log($('#test option:selected').text());
  });

  // 선택된 값의 index를 불러오기
  var index = $("#셀렉트박스ID option").index($("#셀렉트박스ID option:selected"));

  // 셀렉트 박스에 option값 추가하기
  $("#셀렉트박스ID").append("<option value='1'>1번</option>");

  // 셀렉트 박스 option의 맨앞에 추가 할 경우
  $("#셀렉트박스ID").prepend("<option value='0'>0번</option>");

  // 셀렉트 박스의 index별로 replace를 할 경우
  // 해당 객체를 가져오게 되면, option이 다수가 되므로 배열 객체가 되어 eq에 index를 넣어 개별 개체를 선택할 수 있다.
  $("#셀렉트박스ID option:eq(1)").replaceWith("<option value='1'>1차</option>");

  // 직접 index 값을 주어 selected 속성 주기
  $("#셀렉트ID option:eq(1)").attr("selected", "selected");

  // text 값으로 selected 속성 주기
  $("#셀렉트ID").val("1").attr("selected", "selected");

  // 해당 index item 삭제하기
  $("#셀렉트ID option:eq(0)").remove();

  // 첫번째, 마지막 item 삭제하기
  $("#셀렉트ID option:first").remove();
  $("#셀렉트ID option:last").remove();

});

// select box 컨트롤 하기 (javascript)
function change() {
  var target = document.getElementById('test');
  console.log(target.options[target.selectedIndex].text);
  console.log(target.options[target.selectedIndex].value);
}