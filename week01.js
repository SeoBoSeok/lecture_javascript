$(document).ready(function () {
  var answer_list = [];
  var multi_answer = {};

  $('#btn_quiz_start').click(function () {
    $('#quiz_start').hide();
    $('.con_qz_1').show();
  });

  $('.btn_next').click(function () {
    var step = $(this).parent().parent().attr('class').split("qz_")[1];

    if (!$('input:radio[name=qz' + step + ']:checked').val() && (!$('.con_qz_' + step).find('.seq_area').find('.on').length) && (!$('.con_qz_10').find('.answer_check').hasClass('on'))) {
      alert('하나 이상 선택해주세요^^*');
      return;
    }

    if (multi_answer["m" + step]) {
      answer_list[step - 1] = multi_answer["m" + step];
    }

    $('.con_qz_' + step).hide();
    $('.con_qz_' + ++step).show();
  });

  $('.btn_prev').click(function () {
    var step = $(this).parent().parent().attr('class').split("qz_")[1];

    if (Array.isArray(answer_list[step - 2])) {
      var answer_text = "";
      answer_list[step - 2].forEach(function (e) {
        answer_text = answer_text + $('.con_qz_' + step - 1 + ' ' + '.seq_area li').eq(e - 1).text() + " ";
      });
      $('.con_qz_' + step - 1).find('.show_seq').text(answer_text);
    }

    $('.con_qz_' + step).hide();
    $('.con_qz_' + --step).show();
  });

  $('.answer_check').click(function () {
    var index = $(this).parent().parent().parent().parent().parent().attr('class').split("qz_")[1];
    if ($(this).data("no") && !$(this).hasClass('btn_o') && !$(this).hasClass('btn_x')) {
      var text = "";
      if ($(this).parent().hasClass('on')) {
        var idx = multi_answer["m" + index].indexOf($(this).data("no"));
        multi_answer["m" + index].splice(idx, 1);
        $(this).parent().toggleClass('on');
      } else {
        $(this).parent().toggleClass('on');
        if (!multi_answer["m" + index]) {
          multi_answer["m" + index] = [];
        }
        multi_answer["m" + index].push($(this).data("no"));
      }
      multi_answer["m" + index].forEach(function (e) {
        text = text + $('.con_qz_' + index + ' ' + '.seq_area li').eq(e - 1).text() + " ";
      });
      console.log(multi_answer);
      $('.con_qz_' + index).find('.show_seq').text(text);
    } else if ($(this).data("no") && ($(this).hasClass('btn_o') || $(this).hasClass('btn_x'))) {
      $(this).siblings().removeClass('on');
      $(this).toggleClass('on');
      answer_list[index - 1] = $(this).data('no');
    } else {
      answer_list[index - 1] = $(this).val();
    }
    console.log(answer_list);
  });
});