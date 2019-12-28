$(document).ready(function () {
  var answer_list = [];
  var multi_answer = {};
  var survey_list = [];

  $('#btn_quiz_start').click(function () {
    $('#quiz_start').hide();
    $('.con_qz_1').show();
  });

  $('.btn_next').click(function () {
    var step = $(this).parent().parent().attr('class').split("qz_")[1];

    if (!$('input:radio[name=qz' + step + ']').is(":checked") && (!$('.con_qz_' + step).find('.seq_area').find('.on').length) && (!$('.con_qz_10').find('.answer_check').hasClass('on'))) {
      alert('�섎굹 �댁긽 �좏깮�댁＜�몄슂^^*');
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
      $('.con_qz_' + index).find('.show_seq').text(text);
    } else if ($(this).data("no") && ($(this).hasClass('btn_o') || $(this).hasClass('btn_x'))) {
      $(this).siblings().removeClass('on');
      $(this).toggleClass('on');
      index = $(this).parent().parent().parent().attr('class').split("qz_")[1];
      answer_list[index - 1] = parseInt($(this).data("no"));
    } else {
      answer_list[index - 1] = $(this).val();
    }
  });

  $('[name="survey[]"]').change(function () {
    var index = $('[name="survey[]"]').index($(this));
    survey_list[index] = $(this).val();
  });

  $('.con_qz_13 .answer_check').click(function () {
    $('.con_qz_13').hide();
    $('#level_result').show();
    show_result(answer_list);
  });

});

function show_result(answer_list) {
  var correct_answer = [2, 1, 2, 1, 1, "How long have you lived here?", 1, "I drink water before I have breakfast.", 2, 2];
  var score = 0;
  var level = [{
    name: "왕초보",
    level_detail: "[level 1]"
  }, {
    name: "초보",
    level_detail: "[level 2]"
  }, {
    name: "중수",
    level_detail: "[level 3]"
  }, {
    name: "고수",
    level_detail: "[level 4]"
  }, {
    name: "초고수",
    level_detail: "[level 5]"
  }];

  answer_list.forEach(function (e, i) {
    if (Array.isArray(e)) {
      arrayToStringMatch(e, correct_answer[i], i) ? score += 1 : null;
    } else if (correct_answer[i] == e) {
      $('#result_list_' + i).text("O");
      score += 1;
    } else {
      $('#result_list_' + i).text("X");
    }
  });

  result_score = score > 8 ? 4 : score > 6 ? 3 : score > 4 ? 2 : score > 2 ? 1 : 0;

  $('.level').text(level[result_score].name);
  $('.level_detail').text(level[result_score].level_detail);
  $('.guide_result dl').eq(0).children().eq(result_score + 1).show();
  $('.guide_result dl').eq(1).children().eq(result_score + 1).show();
  $('.result_score').text(score * 10);
}

function arrayToStringMatch(arr, answer, index) {
  var text = '';

  arr.forEach(function (e) {
    text = text + $('.con_qz_' + (index + 1) + ' ' + '.seq_area li').eq(e - 1).text() + " ";
  });

  if (text.toLowerCase().trim() === answer.toLowerCase().trim()) {
    $('#result_list_' + index).text("O");
    return true;
  } else {
    $('#result_list_' + index).text("X");
    return false;
  }

}