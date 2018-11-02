/*Crear un array para dar una lista de las 3 opciones seleccionadas. 
Create array to give a list of the 3 cheboxes selected*/

let clickedAnswers = [];
let checkboxes  = document.querySelectorAll('input[type=checkbox]');
let checkboxes1 = document.querySelectorAll('preparacion>input[type=checkbox]');
let checkboxes2 = document.querySelectorAll('apoyo>input[type=checkbox]');
let checkboxes3 = document.querySelectorAll('raices>input[type=checkbox]');
let checkboxes4 = document.querySelectorAll('fondos>input[type=checkbox]');
/*Crear un event handler para darle clicks a los checkboxes, 
Create an event handler for clicking checkbox groups*/

$('.input-radio100').on('change', function() {
  if($('.input-radio100:checked').length > 3) {
    this.checked = false;
  } else if( $('.input-radio100:checked').length == 3) {
    console.log( 'listo para guardar!' );
    $('#finalizar').show().removeAttr("disabled").removeClass("disabled");
  }

});

/*function onlyOneOption(){
  let checkboxselected= document.getElementById('checkboxselected').getElementByTagName("input");
  let limit= 1;
  for (let i=0; i < checkboxselected.length; i++) {
    checkboxselected[i].onclick = function() {
      let checkedcount =0;
      for (let i=0; i < checkboxselected.length; i++) {
        checkedcount += (checkboxselected[i].checked)? 1 : 0;
      }
      if (checkedcount > limit) {
        alert("Solo puede seleccionar " + limit + " opciones");
        this.checked = false;
      }
    }
  }
}


/*object.onclick = function() {

};

object.addEventListener("click", );

// onclick = function();

function mySelection() {
  document.getElementById("trabajos").click();
  document.getElementById("etapas").click();
  document.getElementById("educacion").click();
  document.getElementById("domestica").click();
  document.getElementById("as").click();
  document.getElementById("autoestima").click();
  document.getElementById("salud").click();
  document.getElementById("sana").click();
  document.getElementById("cpr").click();
  document.getElementById("universidad").click();
  document.getElementById("inmigracion").click();
  document.getElementById("hogar").click();
  document.getElementById("recaudacion").click();
}

/*Despues de las 3 opciones elegidas, disabilitar los checkboxes que sobraron. 
After 3 selected, make unselected checkboxes gray*/