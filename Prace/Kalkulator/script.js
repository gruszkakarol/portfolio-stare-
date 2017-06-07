document.addEventListener("DOMContentLoaded", function wywolanie(){	//Wywoływanie kalkulatora po wczytaniu DOM 
	making_numbers();
	float_num();
	calling_result();
	mathematical_operations();
	
});
var result="";
var numbers_div=document.querySelector('.numbers');
var numbers=numbers_div.querySelectorAll('button');
	function calling_result(){
document.querySelector('.result').textContent=result;	//funkcja podmieniająca wynik w okienku, gdy jest wywoływana
}


	function making_numbers(){			// funkcja nadająca wartość buttonom odpowiedzialnym za wpisywanie liczb 
for(i=0; i<numbers.length-1; i++){
numbers[i].value=i;	
numbers[i].addEventListener('click', function wypisanie(){
var liczba=this.value;				// pobieramy wartość z buttona, którego aktualnie klikamy
if(result.length>16){
		alert('Przykro mi, liczba jest za długa');
		return;
	}
result=result+liczba;			// kliknięty button wrzuca jego wartość (liczbę) do okienka z wynikiem
calling_result();
 });
};
};
var float_available=true;		
function float_num(){					// funkcja zapobiegająca wpisaniu kilku kropek naraz lub kilku w jednym wyrażeniu
var float= document.querySelector('.float_num');
float.addEventListener('click', function num_float(){
	if(float_available===true){
		float_available=false;
		var float_num=this.value;
		result=result+float_num;
		calling_result();
	}
	else if(float_available===false){
	return;
}
});
}

function mathematical_operations(){		//Funkcja dodająca operatory matematyczne
var operators= ["+","-","*","/"];
var operators_length=operators.length;
var div_operators=document.querySelector('.operators');
var equal=div_operators.querySelector('.equal');
var buttons_operators=div_operators.querySelectorAll('button');
var remove_button=div_operators.querySelector('.clear');
for(i=0;i<buttons_operators.length-2;i++){   		//długość pomniejszona o 2, ponieważ w divie są dwa dodatkowe przyciski, które nie są operatorami matematycznymi
buttons_operators[i].value=operators[i];			
buttons_operators[i].addEventListener('click',function operators_add(){			//funkcja zapobiegająca użyciu kilku operatorów matematycznych naraz
	var result_length=result.length;
	result=result.toString();			//zamieniamy wynik na stringa jeżeli wykonujemy działanie po kliknięciu znaku równa się, wtedy nasz wynik zamienia się na liczbę aby obliczyć wynik ale potem trochę utrudnia nam życie
	for(i=0;i<operators_length;i++){

		if(result.charAt(result_length-1)===operators[i]){		//sprawdzamy czy ostatni znak w zmiennej z wynikiem to operator, jeżeli tak funkcja jest przerywana
			return;

		}
	}
float_available=true;					//resetujemy możliwość umieszczenia kropki, nowy operator matematyczny rozpoczyna kolejne wyrażenie
var operator=this.value;
if(result.length>16){
		alert('Przykro mi, liczba jest za długa');
		return;
	}
result=result+operator;
calling_result();		//wypisujemy wynik

});
}
 equal.addEventListener('click', function equal(){ 
 	if(result===""){			// jeżeli wynik jest pusty, w stanie poczatkowym tym sposobem zapobiegamy aby jego wartość była undefined
 		return;
 	}
 	else{
 	result=eval(result);			//używamy funkcji eval do obliczenia wyniku naszego działania
 calling_result();
}
 });
remove_button.addEventListener('click',function(){		//funkcja do czyszczenia kalkulatora
result="";
float_available=true;
calling_result();
});
}

