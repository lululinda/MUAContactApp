(function ($) {
  "use strict";

  /*==================================================================
  [ Flujo de Applicacion - Seleccion ]*/
  var actividadSelecionadas = JSON.parse(localStorage.getItem('actividades')) || {};

  //console.log( actividadSelecionadas );

  if( actividadSelecionadas.length > 0 ) {
    //la Activadad ya esta seleccionada - no se necessario enseñar la seleccion
      // Esconder container de seleccion
      $('#actividadesSeleccion').hide();
      // Ensegña Contacto Formulario
      $('#form-container').show();

  } else {

    // Si se selecciona una Actividad, ya se puede ensegña el boton para guardar
    $('#actividad input').on('change', function (e) {
      //console.log( $(this).val() );
      $('#actividades-guardar').show().removeAttr("disabled").removeClass("disabled");
    });

    $("#actividades-guardar").click(function(e) {
      e.preventDefault();

      //Se caputuran los Inputs de Seleccion
      actividadSelecionadas.reunion       = $("#reunion").val();
      actividadSelecionadas.comite        = $("#comite").val();
      actividadSelecionadas.alcance       = $("#alcance").val();
      actividadSelecionadas.taller        = $("#taller").val();
      actividadSelecionadas.entrenamiento = $("#entrenamiento").val();
      actividadSelecionadas.oficina       = $("#oficina").val();
      actividadSelecionadas.lugar         = $("#lugar").val();
      actividadSelecionadas.evento        = $("#evento").val();

      //console.log( actividadSelecionadas );

      //se guardar la option localmente
      localStorage.setItem('actividades', JSON.stringify(actividadSelecionadas));

      //se esconde el Container Select de Actividades
      $('#actividadesSeleccion').hide();

      //se ensegña el Container Formulario de Contactos
      $('#form-container').show();
    });

  }

  /*==================================================================
  [ Validate after type ]*/
  $('.validate-input .input100').each(function(){
    $(this).on('blur', function(){
      if(validate(this) == false){
        showValidate(this);
      } else {
        $(this).parent().addClass('true-validate');
      }
    });
  });

  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
    var check = true;

    for(var i=0; i<input.length; i++) {
      if(validate(input[i]) == false){
        showValidate(input[i]);
        check=false;
      }
    }
    return check;
  });

  $('.validate-form .input100').each(function(){
    $(this).focus(function(){
      hideValidate(this);
      $(this).parent().removeClass('true-validate');
    });
  });

  function validate (input) {
    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if($(input).val().trim() == ''){
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
    $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>');
    $('.btn-hide-validate').each(function(){
      $(this).on('click',function(){
        hideValidate(this);
      });
    });
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
    $(thisAlert).find('.btn-hide-validate').remove();
  }

})(jQuery);
