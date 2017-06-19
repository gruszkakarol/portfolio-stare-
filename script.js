document.addEventListener('DOMContentLoaded',function functions_calling(){
buttons()

});


function buttons(){
var get_menu=document.querySelector('.nav_menu');
var get_buttons=get_menu.querySelectorAll('.nav_menu_item');
for(i=0;i<get_buttons.length;i++){

	var sections=['.section_homepage','.section_about','.section_portfolio','.section_contact'];
	get_buttons[i].value=sections[i];
	get_buttons[i].addEventListener('click', function button_active(){
		for(i=0;i<get_buttons.length;i++){
			if(get_buttons[i].classList.contains='active_button'){			//Dodawanie efektu aktywnego przycisku
				get_buttons[i].classList.remove('active_button');
			}
			else{
				get_buttons[i].classList.add('active_button');
			}
			this.classList.add('active_button');


			var checking_sections=document.querySelector('.sections');				// Interaktywne menu, chowające się i wyskakujące divy
			var grabbing_sections=checking_sections.querySelectorAll('section');
			if(grabbing_sections[i].classList.contains='active'){
			grabbing_sections[i].classList.remove('active');
			grabbing_sections[i].classList.add('hidden');
		}};
		var actual_section=this.value;
		var picking_section=document.querySelector(actual_section);
		picking_section.classList.add('active');
		picking_section.classList.remove('hidden')





	});
}
};
