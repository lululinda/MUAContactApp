
/*Crear un array para dar una lista de las 3 opciones seleccionadas. 
Create array to give a list of the 3 cheboxes selected*/

let clickedAnswers = [];
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let checkboxes1 = document.querySelectorAll('preparacion>input[type=checkbox]');
let checkboxes2 = document.querySelectorAll('apoyo>input[type=checkbox]');
let checkboxes3 = document.querySelectorAll('raices>input[type=checkbox]');
let checkboxes4 = document.querySelectorAll('fondos>input[type=checkbox]');
/*Crear un event handler para darle clicks a los checkboxes, 
Create an event handler for clicking checkbox groups*/

object.onclick = function() {

};

object.addEventListener("click", );

// onclick = function();

function mySelection() {
	document.getElementById("trabajos").click();
	document.getElementById("etapas").click();
	document.getElementById("educacion").click();
	document.getElementById("domestica").click();
	document.getElementById("AS").click();
	document.getElementById("autoestima").click();
	document.getElementById("salud").click();
	document.getElementById("sana").click();
	document.getElementById("CPR").click();
	document.getElementById("universidad").click();
	document.getElementById("inmigracion").click();
	document.getElementById("hogar").click();
	document.getElementById("recaudacion").click();

}

/*Despues de las 3 opciones elegidas, disabilitar los checkboxes que sobraron. 
After 3 selected, make unselected checkboxes gray*/