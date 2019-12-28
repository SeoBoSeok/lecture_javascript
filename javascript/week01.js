let answer_list = [];
let multi_answer = {};
let survey_answer = [];

(function () {
  window.onload = function () {
    let nextBtn = document.querySelectorAll('.btn_next');
    let beforeBtn = document.querySelectorAll('.btn_prev');
    let answerCheckBtn = document.querySelectorAll('.answer_check');
    let selectCheck = document.querySelectorAll('select');

    nextBtn.forEach(function (e) {
      e.onclick = function (e) {
        let questionClassName = e.target.parentNode.parentNode.parentNode.className || e.target.parentNode.parentNode.className;
        let questionNumber = e.target.parentNode.parentNode.parentNode.className.split("_")[2] || e.target.parentNode.parentNode.className.split("_")[2];

        if (!radio_checked(document.querySelectorAll("." + questionClassName + ' input')) // 라디오 버튼 체크여부
          && (!multiAndOX_checked(document.querySelectorAll("." + questionClassName + ' .seq_area li'))) // 문장만들기 및 OX퀴즈 체크여부
          && (!multiAndOX_checked(document.querySelectorAll("." + questionClassName + ' .ox_area a'))) // 문장만들기 및 OX퀴즈 체크여부
          && !survey_answer.length
        ) {
          alert('한개 이상 선택해주세요');
          return;
        }


        document.querySelector("." + questionClassName).style.display = "none";
        document.querySelector("." + /[a-zA-Z_]+/ig.exec(questionClassName)[0] + (+questionNumber + 1)).style.display = "block";
      }
    });

    beforeBtn.forEach(function (e) {
      e.onclick = function (e) {
        let questionClassName = e.target.parentNode.parentNode.parentNode.className || e.target.parentNode.parentNode.className;
        let questionNumber = e.target.parentNode.parentNode.parentNode.className.split("_")[2] || e.target.parentNode.parentNode.className.split("_")[2];

        document.querySelector("." + questionClassName).style.display = "none";
        document.querySelector("." + /[a-zA-Z_]+/ig.exec(questionClassName)[0] + (+questionNumber - 1)).style.display = "block";
      }
    });

    answerCheckBtn.forEach(function (e) {
      e.onclick = function (e) {
        let questionNumber = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.className.split("_")[2] || e.target.parentNode.parentNode.parentNode.className.split("_")[2];
        if (checkType(e.target) === "radio") { // radio button 문제
          answer_list[questionNumber - 1] = parseInt(e.target.value);
        } else {
          if (e.target.classList.contains('btn_o') || e.target.classList.contains('btn_x')) { // OX 퀴즈 문제
            document.querySelector('.btn_x').parentNode.childNodes.forEach(function (e) {
              if (e.nodeType === 1) e.classList.remove("on")
            });
            e.target.classList.toggle("on");
            answer_list[questionNumber - 1] = parseInt(e.target.dataset.no);
          } else if (!e.target.dataset.no) { // 결과 확인하기 버튼
            show_result();
          } else { // 문장만들기 문제
            let text = "";
            if (e.target.parentNode.classList.contains("on")) {
              let idx = multi_answer["m" + questionNumber].indexOf(e.target.dataset.no);
              multi_answer["m" + questionNumber].splice(idx, 1);
              e.target.parentNode.classList.toggle("on");
            } else {
              if (!multi_answer["m" + questionNumber]) {
                multi_answer["m" + questionNumber] = [];
              }
              multi_answer["m" + questionNumber].push(e.target.dataset.no);
              e.target.parentNode.classList.toggle("on");
            }
            multi_answer["m" + questionNumber].forEach(function (e) {
              text = text + document.querySelectorAll('.con_qz_' + questionNumber + ' .seq_area li')[e - 1].innerText + " ";
            });
            document.querySelector('.con_qz_' + questionNumber + " .show_seq").innerText = text;
            answer_list[questionNumber - 1] = text;
          }
        }
      }
    });
    selectCheck.forEach(function (e) {
      e.onchange = function () {
        survey_answer = [];
        selectCheck.forEach(function (e) {
          survey_answer.push(e.options.selectedIndex);
        })
      }
    });
  }
})()
function start() {
  let start_el = document.getElementById('quiz_start');
  let num1 = document.querySelector('.con_qz_1'); // document.getElementsByClassName('con_qz_1')[0].style.display {getElementsByClassName은 배열을 return}
  start_el.style.display = "none";
  num1.style.display = "block";
}
function checkType(el) {
  if (el.tagName === 'INPUT') {
    if (el.getAttribute('type') !== 'radio') return
    return ('radio');
  } else {
    if (el.parentElement.tagName === "LI") {
      return ('multi');
    } else {
      return ('OX');
    }
  }
}
function radio_checked(arr) {
  let checkVal = false;
  arr.forEach(function (e) {
    checkVal += e.checked;
  });
  return checkVal;
}
function multiAndOX_checked(arr) {
  let checkVal = false;
  arr.forEach(function (e) {
    checkVal += e.classList.contains("on");
  });
  return checkVal;
}
function show_result() {
  let correct_answer = [2, 1, 2, 1, 1, "How long have you lived here?", 1, "I drink water before I have breakfast.", 2, 2];
  let score = 0;
  let level = [{
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
    if (typeof e === "string") {
      arrayToStringMatch(e, correct_answer[i], i) ? score += 1 : null;
    } else if (correct_answer[i] === e) {
      document.querySelector('#result_list_' + i).innerText = "O";
      score += 1;
    } else {
      document.querySelector('#result_list_' + i).innerText = "X";
    }
  });

  result_score = score > 8 ? 4 : score > 6 ? 3 : score > 4 ? 2 : score > 2 ? 1 : 0;

  document.querySelector('.level').innerText = level[result_score].name;
  document.querySelector('.level_detail').innerText = level[result_score].level_detail;
  document.querySelectorAll('.guide_result dl')[0].children[result_score + 1].style = "block";
  document.querySelectorAll('.guide_result dl')[1].children[result_score + 1].style = "block";
  document.querySelector('.result_score').innerText = score * 10;

  document.querySelector('.quiz').style.display = "none";
  document.querySelector('.result').style.display = "block";
}
function arrayToStringMatch(arr, answer, index) {
  if (arr.toLowerCase().trim() === answer.toLowerCase().trim()) {
    document.querySelector('#result_list_' + index).innerText = "O";
    return true;
  } else {
    document.querySelector('#result_list_' + index).innerText = "X";
    return false;
  }
}