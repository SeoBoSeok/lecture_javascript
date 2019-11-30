$(document).ready(function () {
  /**
   * 라디오 버튼 선택하기
   */

  console.log($("#check1:radio"));
  console.log($(":radio"));
  console.log($("input:radio[value=1]"));
  console.log($("#radioTest > input:radio[value=1]"));

  /**
   * 라디오 버튼 체크하기
   */
  $("#radioTest > input:radio[value=1]").attr("checked", true);

  /**
   * 라디오 버튼 체크여부 확인하기
   */
  console.log($("#radioTest > input:radio[value=1]").is(":checked")); // true
  console.log($("#radioTest > input:radio[value=2]").is(":checked")); // false
  console.log($("#radioTest > input:radio[value=3]").is(":checked")); // false

  /**
   * 라디오 버튼 체크해제
   */
  // $("#radioTest > input:radio[value=1]").attr("checked", false);
  // $("input:radio[value=1]").removeAttr("checked");

  /**
   * 라디오 버튼 활성화/비활성화 처리
   */
  // $("#radioTest > input:radio[value=1]").attr("disabled", true);
  // $("#radioTest > input:radio[value=1]").attr("disabled", false);
  // $("#radioTest > input:radio[value=1]").removeAttr("disabled");

  /**
   * 선택된 라디오 버튼 가져오기
   */
  console.log($("#radioTest > input:radio[name=checks]:checked").val());

  /**
   * 체크박스
   */

  /**
   * 체크박스 컨트롤
   */
  // $('.select_subject input:checkbox').attr('checked', true);
  // $('.select_subject input:checkbox').prop('checked', true);

  /**
   * 체크박스 체크해제하기
   */
  // $('.select_subject input:checkbox').attr('checked', false);
  // $('.select_subject input:checkbox').prop('checked', false);
  // $('.select_subject input:checkbox').removeAttr('checked');

  /**
   * 체크여부 확인하기
   */
  console.log($('.select_subject input:checkbox').is(":checked"));

  /**
   * 체크된 갯수 체크
   */
  console.log($('.select_subject input:checkbox:checked').length);

  /**
   * 선택된 체크박스 값 가져오기
   */
  $('.select_subject input:checkbox:checked').each(function () {
    console.log($(this).val());
  });

  // 모두 체크하기
  $("#check_all").click(function () {
    var chk = $(this).is(":checked"); //.attr('checked');
    if (chk) $(".select_subject input").prop('checked', true);
    else $(".select_subject input").prop('checked', false);
  });
});