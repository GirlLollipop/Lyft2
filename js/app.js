/*select*/
$(document).ready(function() {
    $('select').material_select();
  });


var $phone = $("#phone-input");
var $next = $("#next")

function validarPhone() { /*Función que valina telefono*/
  var $next = $("#next");/*Botón que agrega contacto*/
  if($(phone).val().trim().length == 10) {/*Si el valor de la entrada (sin espacios) es mayor a cero*/
    $next.removeAttr("disabled");/*Se quita el atributo "disabled"*/
  } else {
    $next.attr("disabled" , true);/*Si no hay valor en la entrada agrega el atributo disabled y le coloca tru (desabilitado)*/
  }


console.log($phone)
