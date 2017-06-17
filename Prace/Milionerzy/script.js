var questions = [{
  'question': 'W którym roku nastąpił chrzest Polski?',
  'answer0': '966r.',
  'answer1': '1037r.',
  'answer2': '955r.',
  'answer3': '999r.',
  'correct_answer': '966r.',
  'been_or_not': false
}, {
  'question': 'Największa bitwa pancerna?',
  'answer0': 'Bitwa o Tobruk',
  'answer1': 'Bitwa nad Sommą',
  'answer2': 'Bitwa na Łuku Kurskim',
  'answer3': 'Bitwa o Narwik',
  'correct_answer': 'Bitwa na Łuku Kurskim',
  'been_or_not': false
}, {
  'question': 'Z jakiego kraju trafiła do Polskii marchew?',
  'answer0': 'Z Niemiec',
  'answer1': 'Z Francji',
  'answer2': 'Z Hiszpanii',
  'answer3': 'Z Włoch',
  'correct_answer': 'Z Włoch',
  'been_or_not': false
}, {
  'question': 'Słowa którego dyktatora są treścią słynnej "Czerwonej książeczki"?',
  'answer0': 'Mao Zedong',
  'answer1': 'Włodzimierz Lenin',
  'answer2': 'Józef Stalin',
  'answer3': 'Czang Kaj-szek',
  'correct_answer': 'Mao Zedong',
  'been_or_not': false
}, {
  'question': 'Która z tych substancji psychoaktywnych nie zalicza się do psychodelików?',
  'answer0': 'Psylocybina',
  'answer1': 'Dimetylotryptamina (DMT)',
  'answer2': 'Meskalina',
  'answer3': 'Kodeina',
  'correct_answer': 'Kodeina',
  'been_or_not': false
}, {
  'question': 'Skąd pochodzą czarne łabędzie?',
  'answer0': 'Afryki',
  'answer1': 'Są mutacją łabędzi białych',
  'answer2': 'Australii',
  'answer3': 'Chin',
  'correct_answer': 'Australii',
  'been_or_not': false
},
{
  'question':'Które miasto jest stolicą Niemiec?' ,
  'answer0': 'Londyn',
  'answer1':  'Praga',
  'answer2': 'Warszawa',
  'answer3': 'Berlin',
  'correct_answer': 'Berlin',
  'been_or_not': false
},
{
'question': 'W którym roku wydarzyła się Bitwa pod Grunwaldem?',
'answer0': '1560r.',
'answer1':  '1590r.',
'answer2': '1410r.',
'answer3':  '1869r.',
'correct_answer':'1410r.',
'been_or_not': false
},
{
'question':'Jak nazywał się ... van Beethoven?',
'answer0': 'Ludwig',
'answer1': 'Mark',
'answer2': 'Kornelius',
'answer3':  'Piotr',
'correct_answer': 'Ludwig',
'been_or_not':false
},
{
  'question':'Jak nazywa się słynny polski kompozytor, autor utworu "Psalm dla Ciebie"',
  'answer0':  'Krzysztof Ibisz',
  'answer1':  'Zygmunt Hajzer',
  'answer2':  'Piotr Rubik',
  'answer3':  'Jarosław Grzędowicz',
  'correct_answer': 'Piotr Rubik',
  'been_or_not':false
},
];


document.addEventListener("DOMContentLoaded", function wywolanie() {
  get_number();
  changing_questions();
  buttons();
});
var number = 0;
var win_score = 0;
var getting_board = document.querySelector('.board');
var getting_question = getting_board.querySelector('.question');
var getting_answer = getting_board.querySelector('.answers');
var getting_answers = getting_answer.querySelectorAll('.answer');
var getting_prize = getting_board.querySelector('.prize');
var getting_awards = getting_prize.querySelectorAll('.award');
var this_is=undefined;
function changing_questions() {
  get_number();
  if (questions[number].been_or_not === true) {
    changing_questions();
  } else {
    questions[number].been_or_not = true;
    getting_question.textContent = questions[number].question;
    for (i = 0; i < getting_answers.length; i++) {
      getting_answers[i].textContent = questions[number][`answer${ i }`];
      getting_answers[i].value = questions[number][`answer${ i }`];
    }
  }
};

function win() {
  win_score++;
  this_is.classList.remove('active_answer');
  if (win_score===10){
  getting_question.innerHTML='<span class="information">Brawo! Udało Ci się wygrać! Oto Twój milion!</span>'+'<span class="new_game" onclick=changing_questions()>CO POWIESZ NA KOLEJNY MILION? </span>';
    making_things_clear();
    return;
  }
  for (i = 0; i < win_score; i++) {
    getting_awards[i].classList.add('active');
  };
  changing_questions();
};

function get_number() {
  number = Math.floor((Math.random() * questions.length - 1) + 1);

};

function lose() {
  this_is.classList.remove('bad_answer');
  making_things_clear();
getting_question.innerHTML='<span class="information">Niestety przegrałeś!</span>'+'<span class="new_game" onclick=changing_questions()>ZACZNIJ NOWĄ GRĘ! </span>';

};

function buttons() {
  for (i = 0; i < getting_answers.length; i++) {
    getting_answers[i].addEventListener('click', function answering() {
        if (this.value === questions[number].correct_answer) {
          this.classList.add('active_answer');
          this_is=this;
          setTimeout('win()',2000);
        } else {
          this_is=this;
          this.classList.add('bad_answer');
          setTimeout('lose()',2000);
        };
      });
    };
};
function making_things_clear(){
  win_score=0;
  for(i=0;i<questions.length;i++){
    questions[i].been_or_not=false;
  }
  for (i = 1; i < getting_awards.length; i++) {
    getting_awards[i].classList.remove('active');
  };

  for (i = 0; i < getting_answers.length; i++){
  getting_answers[i].textContent ="";
    }
}
function check_addcolor(){


}
