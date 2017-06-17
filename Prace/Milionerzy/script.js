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
var number = 0;     //przekazywanie wylosowanej liczby do wyboru zestawu pytań, global scope żeby kilka funkcji mogło z niej korzystać
var win_score = 0;  // wynik, im większy tym więcej zaznaczonych pól z nagrodą
var getting_board = document.querySelector('.board');                               //łapanie jakichś elementów
var getting_question = getting_board.querySelector('.question');          //łapanie jakichś elementów
var getting_answer = getting_board.querySelector('.answers');         //łapanie jakichś elementów
var getting_answers = getting_answer.querySelectorAll('.answer');         //łapanie jakichś elementów
var getting_prize = getting_board.querySelector('.prize');          //łapanie jakichś elementów
var getting_awards = getting_prize.querySelectorAll('.award');          //łapanie jakichś elementów
var this_is=undefined;        //przekazywanie z funkcji aktualnego przycisku do global scope żeby inna funkcja mogła to zobaczyć
function changing_questions() {       // funkcja losująca pytania
  get_number();     //wywoływanie funkcji, która losuję zestaw pytań
  if (questions[number].been_or_not === true) {   //sprawdzanie czy dany zestaw się nie powtórzył, jeżeli tak zestaw pytań jest losowany od nowa
    changing_questions();
  } else {      // jeżeli zestaw pytań nie wystąpił wrzucamy do divów zawartość pytań i odpowiedzi
    questions[number].been_or_not = true;
    getting_question.textContent = questions[number].question;    // wrzucanie pytania na tablice
    for (i = 0; i < getting_answers.length; i++) {      //wrzucanie odpowiedzi do przycisków
      getting_answers[i].textContent = questions[number][`answer${ i }`];
      getting_answers[i].value = questions[number][`answer${ i }`];
    }
  }
};

function win() {
  var awards=['0','100zł','500zł','5000zł','10000zł','25000zł','50000zł','100000zł','2500000zł','5000000zł'];
  win_score++;  //inkrementujemy wynik
  this_is.classList.remove('active_answer');    // jako iż funkcja ta zachodzi po kliknięciu i sprawdzeniu czy dana odpowiedź jest poprawna, usuwany jest kolor dodany podczas zaznaczenia odpowiedzi
  active_buttons(); //aktywowanie przycisków żeby można było je kliknąć, zapobiega to wielokrotnemu wyborowi odpowiedzi w czasie dwu sekundowej przerwy
  if (win_score===10){  // wygrana gry
    if(window.matchMedia("(max-width:960px)").matches){
      getting_prize.textContent="";
    };
    disable_buttons();  //wyłączanie przycisków
  getting_question.innerHTML='<span class="information">Brawo! Udało Ci się wygrać! Oto Twój milion!</span>'+'<span class="new_game" onclick=changing_questions(),active_buttons()>CO POWIESZ NA KOLEJNY MILION? </span>';
  making_things_clear();  //resetowanie gry, możliwość ponownego używania pytań, win_score ustawiony na 0
    return;
  };
  if(window.matchMedia("(max-width:960px)").matches){ //żeby ładnie wyglądało na telefonie
    getting_prize.textContent='Twoja aktualna wygrana to: '+awards[win_score];
  }
  else{
  for (i = 0; i < win_score; i++) { //zwiększanie nagrody
    getting_awards[i].classList.add('active');
  };
};
  changing_questions(); //zmiana pytania
};

function get_number() { //funkcja losująca liczbę odpowiadającą za zestaw pytań
  number = Math.floor((Math.random() * questions.length - 1) + 1);

};

function lose() { //przegranie gry
  this_is.classList.remove('bad_answer'); // usuwanie 'chwilowego' kolorka podczas kliknięcia złego przycisku
  disable_buttons();  //zapobiegnięcie kilkukrotnemu kliknięciu przycisku
  making_things_clear();  //reset gry
getting_question.innerHTML='<span class="information">Niestety przegrałeś!</span>'+'<span class="new_game" onclick=changing_questions(),active_buttons()>ZACZNIJ NOWĄ GRĘ! </span>';

};

function buttons() {  //dodawanie on clicków do przycisków
  for (i = 0; i < getting_answers.length; i++) {
    getting_answers[i].addEventListener('click', function answering() {   //onclick
        if (this.value === questions[number].correct_answer) {    //sprawdzenie czy odpowiedź jest poprawna
          this.classList.add('active_answer');    //chwilowy kolorek po kliknięciu
          this_is=this;   //przekazanie aktualnego przycisku do global scope'a
          disable_buttons();    //zapobiegnięcie kilkukrotnemu kliknięciu
          setTimeout('win()',1000);   //małe opóźnienie gry
        } else {  //zła odpowiedź
          this_is=this; //przekazanie do global scope
          this.classList.add('bad_answer'); //chwilowy kolorek
          disable_buttons();    //zapobiegnięcie kilkukrotnemu kliknieciu
          setTimeout('lose()',1000);  //małe opóźnienie
        };
      });
    };
};
function making_things_clear(){ //resetowanie gry
  if(window.matchMedia("(max-width:960px)").matches){
    getting_prize.textContent="";
  };
  win_score=0;    //wynik gry na 0
  for(i=0;i<questions.length;i++){    // przywracanie wszystkich pytań do gry
    questions[i].been_or_not=false;
  }
  for (i = 0; i < getting_awards.length; i++) {   //usuwanie nagród
    getting_awards[i].classList.remove('active');
  };

  for (i = 0; i < getting_answers.length; i++){ //usuwanie odpowiedzi z przycisków
  getting_answers[i].textContent ="";
    }
}

function disable_buttons(){ //funkcja zapobiegająca kilkukrotnemu kliknięciu
  for(i=0;i<getting_answers.length;i++){
    getting_answers[i].classList.add('not_active');
  }
}
function active_buttons(){  //przywracanie przycisków do użytku
  for(i=0;i<getting_answers.length;i++){
    getting_answers[i].classList.remove('not_active');
  }
}
