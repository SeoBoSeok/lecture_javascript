$(document).ready(function () {
  var answer_list = [];
  var multi_answer = [];

  $('#btn_quiz_start').click(function () {
    $('#quiz_start').hide();
    $('.con_qz_1').show();
  });

  $('.btn_next').click(function () {
    var step = $(this).parent().parent().attr('class').split("qz_")[1];

    if (!$('input:radio[name=qz' + step + ']:checked').val() && (!$('.seq_area').find('.on').length)) {
      alert('하나 이상 선택해주세요^^*');
      return;
    }

    if (multi_answer.length) {
      var id = $(this).parent().parent().attr('class').split("qz_")[1];
      answer_list[id - 1] = multi_answer;
      multi_answer = [];
      $('.show_seq').text("");
    }

    $('.con_qz_' + step).hide();
    $('.con_qz_' + ++step).show();
  });

  $('.btn_prev').click(function () {
    var step = $(this).parent().parent().attr('class').split("qz_")[1];
    $('.con_qz_' + step).hide();
    $('.con_qz_' + --step).show();
  });

  $('.answer_check').click(function () {
    var index = $(this).parent().parent().parent().parent().parent().attr('class').split("qz_")[1];
    if ($(this).data("no")) {
      var text = "";
      if ($(this).parent().hasClass('on')) {
        var idx = multi_answer.indexOf($(this).data("no"));
        multi_answer.splice(idx, 1);
        $(this).parent().toggleClass('on');
      } else {
        $(this).parent().toggleClass('on');
        multi_answer.push($(this).data("no"));
      }
      multi_answer.forEach(function (e) {
        text = text + $('.con_qz_' + index + ' ' + '.seq_area li').eq(e - 1).text() + " ";
      });
      $('.show_seq').text(text);
    } else {
      answer_list[index - 1] = $(this).val();
    }
    console.log(answer_list);
  });
});