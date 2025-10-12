function validarNumero(evento){
  var tecla = (document.all) ? evento.keyCode : evento.which;
  if(tecla == 8){
    return true
  }
  var expresion = /[0-9\d .]/
  var caracter = String.fromCharCode(tecla);
  return expresion.test(caracter);
}

function limpiarFormulario(){
  document.getElementById("saldoi").value = "";
  document.getElementById("cantidadi").value = "";
}

function interes(){
  var cantidad = document.getElementById("cantidadi").value;
  var periodo = document.getElementById('meses').value;
  if(!cantidad || !periodo) return alert('Llene los campos solicitados')
  var montoInicial = parseFloat(cantidad);
  if(montoInicial < 100 || montoInicial > 1000000000) return alert('Ingrese un valor entre 100 y 10 mil millones de pesos');
  var tasaInteres = montoInicial*0.02;
  var montoFinal = tasaInteres + montoInicial;
  var duracion = parseFloat(periodo);
  if(duracion <3 || duracion > 18) return alert('La inversion debe de ser de minimo 3 y maximo 18 meses')
  document.getElementById("saldoi").value = "$ " + montoFinal;
}
